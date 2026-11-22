// Post-processing + adaptive quality for the Sigilbound 3D battles (Three.js r149).
//
//   scene pass ──► offscreen target, MSAA (WebGL2), holding EXACTLY what renderer.render() would put on
//   (materials       screen: per-material ACES + exposure, sRGB-encoded, transparents blended in sRGB space
//    tone-map as     like the default framebuffer, backgrounds untouched, fog/clear colours uploaded in sRGB)
//    usual)          │
//                    ├──► bloom chain (bright pass on display brightness, UnrealBloomPass mips, RGBA16F)
//                    └──► final pass: sRGB decode, bloom (screen blend), lift/gamma/gain/saturation,
//                         vignette, sRGB encode, dither ──► canvas
//
// Why not "linear HDR target + ACES in the final pass" (OutputPass style)? In r149 that path cannot match
// the direct render: three blends transparent/additive materials in the 8-bit sRGB framebuffer AFTER
// per-material tone mapping, and draws sRGB backgrounds un-tonemapped. Moving tone mapping to a final pass
// makes every low-opacity glow (e.g. the 0.08 battle ring) much fainter and tone-maps the sky. So the
// scene target is flagged so r149 encodes into it exactly like the canvas (see makeSceneTarget), tone
// mapping and sRGB encoding still happen once per fragment, and the final pass only decodes, adds bloom
// and grades. With neutral grade and bloom off the output equals renderer.render() (±1 LSB dither).
//
// The Low tier (and WebGL1 devices) renders directly: no offscreen targets at all, the canvas' built-in
// MSAA does the AA (on tile-based mobile GPUs that MSAA resolves on-chip, so it is nearly free).

import * as T from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

// ---------------------------------------------------------------------------------------------
// Quality tiers
// ---------------------------------------------------------------------------------------------
// pixelRatio: cap on devicePixelRatio. Note20 at FHD+ is 2400x1080 @ dpr ~2.63 (CSS ~914x411):
//   High 2.0  -> 1828x822 = 1.50 MP   (63% of native pixels; MSAA hides the difference)
//   Medium 1.5 -> 1371x617 = 0.85 MP
//   Low 1.25  -> 1143x514 = 0.59 MP
// target: scene target storage. "half" = RGBA16F (grade headroom, needs EXT_color_buffer_float/half_float,
//   falls back to "byte"), "byte" = RGBA8 (half the bandwidth; the canvas is 8-bit anyway).
// bloomScale: bloom chain input resolution relative to the render size (UnrealBloomPass halves again).
export const QUALITY = Object.freeze({
  High: Object.freeze({
    name: "High", pixelRatio: 2.0, post: true, msaa: 4, fxaa: false, target: "half",
    shadowMapSize: 2048, shadowType: T.PCFSoftShadowMap, propShadows: true,
    bloom: true, bloomStrength: 1.4, bloomScale: 1.0,
    maxLights: 6, textureSize: 512,
  }),
  Medium: Object.freeze({
    name: "Medium", pixelRatio: 1.5, post: true, msaa: 2, fxaa: false, target: "byte",
    shadowMapSize: 1024, shadowType: T.PCFShadowMap, propShadows: false,
    bloom: true, bloomStrength: 1.25, bloomScale: 0.5,
    maxLights: 4, textureSize: 256,
  }),
  Low: Object.freeze({
    name: "Low", pixelRatio: 1.25, post: false, msaa: 0, fxaa: false, target: "byte",
    shadowMapSize: 512, shadowType: T.PCFShadowMap, propShadows: false,
    bloom: false, bloomStrength: 0, bloomScale: 0.5,
    maxLights: 3, textureSize: 128,
  }),
});
export const TIERS = ["High", "Medium", "Low"];

// Look parameters (live-tweakable through pipeline.params). NEUTRAL turns grade + vignette off.
export const DEFAULT_PARAMS = Object.freeze({
  exposure: null,          // null = renderer.toneMappingExposure at creation (written back every frame)
  bloomThreshold: 0.88,    // display brightness (sRGB 0..1, brightest channel) where bloom starts
  bloomKnee: 0.08,         // soft knee half-width around the threshold
  bloomRadius: 0.25,       // UnrealBloomPass radius (0..1): small = tight glow, large = haze
  bloomStrength: null,     // null = tier value
  lift: [0, 0, 0],         // added to shadows   (c + lift*(1-c))
  gamma: [1, 1, 1],        // midtones           (pow(c, 1/gamma))
  gain: [1, 1, 1],         // highlights         (c * gain)
  saturation: 1.06,
  vignette: 0.2,           // 0 = off; darkening at the corners
  dither: 1,               // ±1 LSB triangular noise before 8-bit output (kills banding in bloom/vignette)
});
export const NEUTRAL = Object.freeze({ lift: [0, 0, 0], gamma: [1, 1, 1], gain: [1, 1, 1], saturation: 1, vignette: 0 });

// ---------------------------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------------------------
const VERT = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const SRGB_GLSL = /* glsl */`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }
vec3 linearToSrgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }`;

// Bright pass: 4 bilinear taps (= 4x4 box) so small highlights don't shimmer at half res; threshold on the
// brightest sRGB channel with a soft knee (saturated spell colours bloom as readily as white); linear out.
const BRIGHT_FRAG = /* glsl */`
uniform sampler2D tDiffuse;
uniform vec2 texel;
uniform float luminosityThreshold;
uniform float smoothWidth;
varying vec2 vUv;
${SRGB_GLSL}
vec3 tap(vec2 o) { return clamp(texture2D(tDiffuse, vUv + o * texel).rgb, 0.0, 1.0); }
void main() {
  vec3 c = 0.25 * (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0)));
  float br = max(c.r, max(c.g, c.b));
  float k = max(smoothWidth, 1e-4);
  float soft = clamp(br - luminosityThreshold + k, 0.0, 2.0 * k);
  soft = soft * soft / (4.0 * k);
  float w = max(soft, br - luminosityThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(srgbToLinear(c) * w, 1.0);
}`;

const FINAL_FRAG = /* glsl */`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform vec3 lift, gammaInv, gain;
uniform float saturation, vignette, dither;
varying vec2 vUv;
${SRGB_GLSL}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 col = srgbToLinear(clamp(texture2D(tScene, vUv).rgb, 0.0, 1.0));   // display-referred, linear light
#ifdef USE_BLOOM
  vec3 b = max(texture2D(tBloom, vUv).rgb, 0.0);
  col = 1.0 - (1.0 - col) * exp(-b);   // soft screen: never clips, ~additive for faint bloom
#endif
#ifdef USE_GRADE
  col = gain * (col + lift * (1.0 - col));
  col = pow(max(col, 0.0), gammaInv);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(l), col, saturation), 0.0);
  float r = length(vUv - 0.5) * 1.41421;                   // oval vignette, follows the screen shape
  col *= 1.0 - vignette * smoothstep(0.35, 1.05, r);
#endif
  vec3 o = linearToSrgb(clamp(col, 0.0, 1.0));
  o += (hash(gl_FragCoord.xy) + hash(gl_FragCoord.xy + 17.31) - 1.0) * dither / 255.0;
  gl_FragColor = vec4(o, 1.0);
}`;

// ---------------------------------------------------------------------------------------------
// Pipeline
// ---------------------------------------------------------------------------------------------
export function postSupported(renderer) {
  return !!(renderer.capabilities && renderer.capabilities.isWebGL2);
}
function halfFloatOK(renderer) {
  const ext = renderer.extensions;
  return ext.has("EXT_color_buffer_float") || ext.has("EXT_color_buffer_half_float");
}

// An offscreen target r149 writes to exactly like the canvas with outputEncoding = sRGBEncoding:
// shaders run linearToOutputTexel(sRGB) and blending happens on the encoded values. r149 only honours a
// target's encoding for XR targets (WebGLPrograms / WebGLRenderer / WebGLTextures check
// isXRRenderTarget for nothing else), so the flag is set; internalFormat is pinned so the MSAA
// renderbuffer and the resolve texture are the same plain format (no sRGB blit conversion).
function makeSceneTarget(renderer, w, h, samples, half) {
  const rt = new T.WebGLRenderTarget(w, h, {
    type: half ? T.HalfFloatType : T.UnsignedByteType, format: T.RGBAFormat, samples,
    depthBuffer: true, stencilBuffer: false, encoding: T.sRGBEncoding,
  });
  rt.isXRRenderTarget = true;
  rt.texture.internalFormat = half ? "RGBA16F" : "RGBA8";
  rt.texture.name = "Sigil.scene"; rt.texture.generateMipmaps = false;
  // MSAA resolve: invalidate depth instead of blitting it (never read back) — saves bandwidth on tilers
  renderer.properties.get(rt).__ignoreDepthValues = true;
  return rt;
}

/**
 * createPipeline(renderer, scene, camera, opts)
 *   opts.quality       initial tier name (default "High")
 *   opts.params        overrides for DEFAULT_PARAMS
 *   opts.applyShadows  (default true) setQuality() also sets shadow type/size and prop shadows
 * Returns { render(dt), setSize(w,h), setQuality(name), dispose(), quality, preset, params, active, info() }
 */
export function createPipeline(renderer, scene, camera, opts = {}) {
  const supported = postSupported(renderer);
  const origPixelRatio = renderer.getPixelRatio();
  const params = Object.assign({}, DEFAULT_PARAMS, opts.params || {});
  if (params.exposure == null) params.exposure = renderer.toneMappingExposure;
  const applyShadows = opts.applyShadows !== false;

  let preset = QUALITY[opts.quality] || QUALITY.High;
  let cssW = 1, cssH = 1, rw = 1, rh = 1;
  let sceneRT = null, ldrRT = null, bloom = null, active = false;
  const clearSave = new T.Color(), bgClear = new T.Color(), fogSave = new T.Color();

  const finalMat = new T.ShaderMaterial({
    name: "SigilFinal",
    uniforms: {
      tScene: { value: null }, tBloom: { value: null },
      lift: { value: new T.Vector3() }, gammaInv: { value: new T.Vector3(1, 1, 1) }, gain: { value: new T.Vector3(1, 1, 1) },
      saturation: { value: 1 }, vignette: { value: 0 }, dither: { value: 1 },
    },
    defines: {}, vertexShader: VERT, fragmentShader: FINAL_FRAG,
    depthTest: false, depthWrite: false, toneMapped: false,
  });
  const fxaaMat = new T.ShaderMaterial({
    name: "SigilFXAA", uniforms: T.UniformsUtils.clone(FXAAShader.uniforms),
    vertexShader: FXAAShader.vertexShader, fragmentShader: FXAAShader.fragmentShader,
    depthTest: false, depthWrite: false, toneMapped: false,
  });
  const quad = new FullScreenQuad(finalMat);

  function setDefine(name, on) {
    if ((name in finalMat.defines) === on) return;
    if (on) finalMat.defines[name] = ""; else delete finalMat.defines[name];
    finalMat.needsUpdate = true;
  }

  function makeBloom() {
    const b = new UnrealBloomPass(new T.Vector2(256, 256), preset.bloomStrength, params.bloomRadius, params.bloomThreshold);
    // HDR mips: the stock 8-bit linear targets band visibly in the dark halo tails
    for (const rt of [b.renderTargetBright, ...b.renderTargetsHorizontal, ...b.renderTargetsVertical]) rt.texture.type = T.HalfFloatType;
    b.highPassUniforms.texel = { value: new T.Vector2() };
    b.materialHighPassFilter.fragmentShader = BRIGHT_FRAG;
    b.materialHighPassFilter.needsUpdate = true;
    return b;
  }

  function destroyTargets() {
    if (sceneRT) sceneRT.dispose();
    if (ldrRT) ldrRT.dispose();
    if (bloom) bloom.dispose();
    sceneRT = ldrRT = bloom = null;
  }

  function buildTargets() {
    destroyTargets();
    active = supported && preset.post;
    if (!active) return;
    const samples = Math.min(preset.msaa | 0, renderer.capabilities.maxSamples || 0);
    sceneRT = makeSceneTarget(renderer, rw, rh, samples, preset.target === "half" && halfFloatOK(renderer));
    if (preset.fxaa || samples === 0) {   // no MSAA -> FXAA on the final LDR image
      ldrRT = new T.WebGLRenderTarget(rw, rh, { depthBuffer: false, stencilBuffer: false });
      ldrRT.texture.generateMipmaps = false;
    }
    if (preset.bloom) bloom = makeBloom();
    setDefine("USE_BLOOM", !!bloom);
    resizeTargets();
  }

  function resizeTargets() {
    if (sceneRT) sceneRT.setSize(rw, rh);
    if (ldrRT) { ldrRT.setSize(rw, rh); fxaaMat.uniforms.resolution.value.set(1 / rw, 1 / rh); }
    if (bloom) {
      bloom.setSize(Math.max(2, Math.round(rw * preset.bloomScale)), Math.max(2, Math.round(rh * preset.bloomScale)));
      bloom.highPassUniforms.texel.value.set(0.5 / rw, 0.5 / rh); // ±half a source texel: 4 bilinear taps cover 4x4 texels
    }
  }

  function setSize(w, h) {
    cssW = Math.max(1, w | 0); cssH = Math.max(1, h | 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, preset.pixelRatio));
    renderer.setSize(cssW, cssH, false);
    const v = renderer.getDrawingBufferSize(new T.Vector2());
    rw = v.x; rh = v.y;
    resizeTargets();
  }

  function setQuality(name) {
    const q = QUALITY[name];
    if (!q) return;
    preset = q;
    if (applyShadows) applyQuality(renderer, scene, q);
    buildTargets();
    setSize(cssW, cssH);
  }

  function renderBloom(input) {
    const b = bloom, fs = b.fsQuad;
    b.highPassUniforms.tDiffuse.value = input;
    b.highPassUniforms.luminosityThreshold.value = params.bloomThreshold;
    b.highPassUniforms.smoothWidth.value = params.bloomKnee;
    fs.material = b.materialHighPassFilter;
    renderer.setRenderTarget(b.renderTargetBright); renderer.clear(); fs.render(renderer);
    let inRT = b.renderTargetBright;
    for (let i = 0; i < b.nMips; i++) {
      const m = b.separableBlurMaterials[i];
      fs.material = m;
      m.uniforms.colorTexture.value = inRT.texture; m.uniforms.direction.value = UnrealBloomPass.BlurDirectionX;
      renderer.setRenderTarget(b.renderTargetsHorizontal[i]); renderer.clear(); fs.render(renderer);
      m.uniforms.colorTexture.value = b.renderTargetsHorizontal[i].texture; m.uniforms.direction.value = UnrealBloomPass.BlurDirectionY;
      renderer.setRenderTarget(b.renderTargetsVertical[i]); renderer.clear(); fs.render(renderer);
      inRT = b.renderTargetsVertical[i];
    }
    const cm = b.compositeMaterial;
    cm.uniforms.bloomStrength.value = params.bloomStrength == null ? preset.bloomStrength : params.bloomStrength;
    cm.uniforms.bloomRadius.value = params.bloomRadius;
    fs.material = cm;
    renderer.setRenderTarget(b.renderTargetsHorizontal[0]); renderer.clear(); fs.render(renderer);
    return b.renderTargetsHorizontal[0].texture;
  }

  function render() {
    renderer.toneMappingExposure = params.exposure;
    if (!active) { renderer.render(scene, camera); return; }
    // 1. scene -> target. A plain Color background is cleared with its sRGB value, as on the canvas
    //    (three clears in linear when a target is bound).
    const bgObj = scene.background, colorBg = !!(bgObj && bgObj.isColor);
    renderer.getClearColor(clearSave);
    const clearA = renderer.getClearAlpha();
    if (colorBg) {
      bgClear.copy(bgObj).convertLinearToSRGB();
      scene.background = null;
      renderer.setClearColor(bgClear, 1);
    } else {
      bgClear.copy(clearSave).convertLinearToSRGB();
      renderer.setClearColor(bgClear, clearA);
    }
    // r149 uploads fog.color in sRGB when drawing to the canvas but linear into a target
    // (getUnlitUniformColorSpace); pre-convert so the fogged distance matches the direct render.
    const fog = scene.fog;
    if (fog) { fogSave.copy(fog.color); fog.color.convertLinearToSRGB(); }
    renderer.setRenderTarget(sceneRT);
    renderer.render(scene, camera);
    if (fog) fog.color.copy(fogSave);
    if (colorBg) scene.background = bgObj;
    renderer.setClearColor(clearSave, clearA);

    // 2. bloom
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    const bloomOn = !!bloom && (params.bloomStrength == null ? preset.bloomStrength : params.bloomStrength) > 0;
    setDefine("USE_BLOOM", bloomOn);
    if (bloomOn) finalMat.uniforms.tBloom.value = renderBloom(sceneRT.texture);

    // 3. final
    const u = finalMat.uniforms, g = params.gamma;
    u.tScene.value = sceneRT.texture;
    u.lift.value.fromArray(params.lift);
    u.gammaInv.value.set(1 / Math.max(1e-3, g[0]), 1 / Math.max(1e-3, g[1]), 1 / Math.max(1e-3, g[2]));
    u.gain.value.fromArray(params.gain);
    u.saturation.value = params.saturation; u.vignette.value = params.vignette; u.dither.value = params.dither;
    const neutral = params.vignette === 0 && params.saturation === 1 && [0, 1, 2].every((i) => params.lift[i] === 0 && g[i] === 1 && params.gain[i] === 1);
    setDefine("USE_GRADE", !neutral);
    quad.material = finalMat;
    if (ldrRT) {
      renderer.setRenderTarget(ldrRT); quad.render(renderer);
      fxaaMat.uniforms.tDiffuse.value = ldrRT.texture; quad.material = fxaaMat;
    }
    renderer.setRenderTarget(null);
    quad.render(renderer);
    renderer.autoClear = autoClear;
  }

  function dispose() {
    destroyTargets();
    finalMat.dispose(); fxaaMat.dispose(); quad.dispose();
    renderer.setPixelRatio(origPixelRatio);
  }

  if (applyShadows) applyQuality(renderer, scene, preset);
  buildTargets();
  { const v = renderer.getSize(new T.Vector2()); setSize(v.x, v.y); }

  return {
    render, setSize, setQuality, dispose, params,
    get quality() { return preset.name; },
    get preset() { return preset; },
    get active() { return active; },
    get supported() { return supported; },
    info: () => ({
      quality: preset.name, active, width: rw, height: rh, samples: sceneRT ? sceneRT.samples : 0,
      target: sceneRT ? (sceneRT.texture.type === T.HalfFloatType ? "half" : "byte") : "canvas", bloom: !!bloom, fxaa: !!ldrRT,
    }),
  };
}


/**
 * Applies the non-post parts of a tier to the scene: shadow map type/size for every shadow-casting
 * light, and castShadow on meshes tagged userData.prop = true (small scenery: rocks, posts, crystals).
 * Call it again after adding new lights/props, or pass opts.applyShadows=false and do it yourself.
 */
export function applyQuality(renderer, scene, q) {
  if (typeof q === "string") q = QUALITY[q];
  if (!q || !scene) return;
  const typeChanged = renderer.shadowMap.type !== q.shadowType;
  renderer.shadowMap.type = q.shadowType;
  scene.traverse((o) => {
    if (o.isLight && o.castShadow && o.shadow) {
      const s = o.isPointLight ? Math.min(q.shadowMapSize, 1024) : q.shadowMapSize;
      if (o.shadow.mapSize.x !== s) {
        o.shadow.mapSize.set(s, s);
        if (o.shadow.map) { o.shadow.map.dispose(); o.shadow.map = null; }
      }
    }
    if (o.isMesh && o.userData && o.userData.prop === true) o.castShadow = !!q.propShadows;
    if (typeChanged && o.material) for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.needsUpdate = true;
  });
  renderer.shadowMap.needsUpdate = true;
}

// ---------------------------------------------------------------------------------------------
// Device hint
// ---------------------------------------------------------------------------------------------
let gpuCache;
/** Unmasked GPU string ("Adreno (TM) 650", "Mali-G77 MC9", "ANGLE (Qualcomm, Adreno (TM) 650, ...)"), or "". */
export function gpuString(gl) {
  if (gl && gl.getContext) gl = gl.getContext();          // accept a WebGLRenderer
  if (!gl && gpuCache !== undefined) return gpuCache;
  let s = "", own = null;
  try {
    if (!gl && typeof document !== "undefined") {
      own = document.createElement("canvas");
      gl = own.getContext("webgl2", { powerPreference: "high-performance" }) || own.getContext("webgl");
    }
    if (gl) {
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      s = (ext && gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) || gl.getParameter(gl.RENDERER) || "";
      if (own) { const lose = gl.getExtension("WEBGL_lose_context"); if (lose) lose.loseContext(); }
    }
  } catch (e) { s = ""; }
  s = String(s);
  if (own || gpuCache === undefined) gpuCache = s;
  return s;
}

/** Tier for a GPU string, or null if the string is not recognised. */
export function tierForGpu(s) {
  if (!s) return null;
  if (/swiftshader|llvmpipe|softpipe|software|microsoft basic/i.test(s)) return "Low";
  let m = s.match(/Adreno\D{0,8}(\d{3})/i);
  if (m) {
    const n = +m[1];
    if (n >= 700) return "High";                    // 7xx (SD 8 Gen 1+ / 7-series 720+)
    if (n >= 630) return "High";                    // 630/640/650/660 (SD 845..888)
    if (n >= 615) return "Medium";                  // 615-620 (SD 7xx mid-range)
    if (n >= 540) return "Medium";                  // 540 (SD 835)
    return "Low";                                   // 610/612, 5xx/4xx
  }
  m = s.match(/Mali-?G(\d{2,3})/i);
  if (m) {
    const g = m[1];
    if (g.length === 3) return +g[0] >= 7 ? "High" : +g >= 610 && +g < 615 ? "High" : "Medium"; // G710/715/720/G925, G610; G615 mid
    const n = +g;
    if (n >= 76) return "High";                     // G76/G77/G78 (Exynos 9820+, Dimensity 1000+)
    if (n >= 71) return "Medium";                   // G71/G72 (2016-17)
    if (n >= 57) return "Medium";
    return "Low";                                   // G31/G51/G52
  }
  if (/Immortalis|Xclipse|Apple|PowerVR.*(BXM|DXT|CXT)/i.test(s)) return "High";
  if (/Mali-T|Mali-4|PowerVR|Vivante|VideoCore|Tegra 3/i.test(s)) return "Low";
  if (/NVIDIA|GeForce|Radeon|AMD|Intel.*(Iris|Arc|Xe)/i.test(s)) return "High";
  if (/Intel/i.test(s)) return "Medium";
  return null;
}

/** Cheap initial tier guess. Pass the game's renderer (or a GL context) to avoid creating a probe context. */
export function deviceHint(glOrRenderer) {
  const nav = typeof navigator !== "undefined" ? navigator : {};
  const cores = nav.hardwareConcurrency || 4;
  const mem = nav.deviceMemory;                           // Chrome: secure contexts only; undefined elsewhere
  const scr = typeof screen !== "undefined" ? screen : { width: 1280, height: 720 };
  const dpr = (typeof window !== "undefined" && window.devicePixelRatio) || 1;
  const devPx = scr.width * scr.height * dpr * dpr;
  let tier = tierForGpu(gpuString(glOrRenderer));
  if (!tier) tier = cores >= 8 && (mem == null || mem >= 6) ? "High" : cores >= 6 && (mem == null || mem >= 4) ? "Medium" : "Low";
  // memory / CPU ceilings regardless of GPU name
  if (mem != null && mem <= 2) tier = "Low";
  else if (mem != null && mem <= 3 && tier === "High") tier = "Medium";
  if (cores <= 4 && tier === "High") tier = "Medium";
  // very dense big screens (QHD+ tablets / phones in WQHD mode) on a non-High GPU: one step down
  if (devPx > 4.5e6 && tier === "Medium") tier = "Low";
  return tier;
}

// ---------------------------------------------------------------------------------------------
// Adaptive quality manager
// ---------------------------------------------------------------------------------------------
const STORE_KEY = "sigilbound.gfx.v1";
function load() {
  try { const v = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); return v && typeof v === "object" ? v : null; } catch (e) { return null; }
}
function save(v) { try { localStorage.setItem(STORE_KEY, JSON.stringify(v)); } catch (e) { /* private mode / disabled storage */ } }

/**
 * createQualityManager({ onChange, sampleSeconds = 3, minFps = 50, upFps = 58, initial, warmupWindows = 1, upWindows = 4 })
 *   tick(now)     call once per frame with performance.now() (or the rAF timestamp)
 *   current       tier name; auto (get/set); fps (last window); force(name|"auto")
 * Steps down one tier when a full window averages < minFps. Steps up at most once per session, only if
 * there was no downgrade this session and upWindows consecutive windows averaged >= upFps.
 * onChange(name, preset, reason) with reason "slow" | "fast" | "forced" | "auto".
 */
export function createQualityManager(opts = {}) {
  const { onChange, sampleSeconds = 3, minFps = 50, upFps = 58, warmupWindows = 1, upWindows = 4 } = opts;
  const stored = load();
  let forced = stored && QUALITY[stored.forced] ? stored.forced : null;
  let current = forced || (stored && QUALITY[stored.tier] ? stored.tier : null) || (QUALITY[opts.initial] ? opts.initial : null) || deviceHint();
  let auto = !forced;
  let last = -1, start = 0, frames = 0, warm = warmupWindows, good = 0, fps = 0, dts = [];
  let downedThisSession = false, upsThisSession = 0;

  const persist = () => save({ tier: current, forced, t: Date.now() });
  function resetWindow(now) { start = now; frames = 0; dts = []; }
  function set(name, reason) {
    if (!QUALITY[name] || name === current) return;
    current = name; warm = warmupWindows; good = 0;
    persist();
    if (onChange) onChange(name, QUALITY[name], reason);
  }
  // A steady cadence (frame times tightly clustered, e.g. all ~33.3 ms) means the display or a power
  // saver (Samsung battery saver / Game Booster) caps the rate; lowering quality would not help.
  // Only step down when frame times also vary: p90 > 1.25 x median.
  function steady() {
    if (dts.length < 20) return false;
    const a = dts.slice().sort((x, y) => x - y), med = a[Math.floor(a.length / 2)], p90 = a[Math.floor(a.length * 0.9)];
    return p90 <= med * 1.25;
  }
  function evaluate(f) {
    fps = f;
    const capped = steady();
    if (!auto) return;
    if (warm > 0) { warm--; return; }                 // ignore the window right after start / a tier change
    const i = TIERS.indexOf(current);
    if (f < minFps) {
      good = 0;
      if (capped) return;
      if (i < TIERS.length - 1) { downedThisSession = true; set(TIERS[i + 1], "slow"); }
    } else if (f >= upFps && i > 0 && !downedThisSession && upsThisSession < 1) {
      if (++good >= upWindows) { upsThisSession++; set(TIERS[i - 1], "fast"); }
    } else good = 0;
  }
  function tick(now) {
    if (now == null) now = performance.now();
    if (last < 0) { last = now; resetWindow(now); return; }
    const dt = now - last; last = now;
    if (dt > 1000 || dt <= 0) { resetWindow(now); return; }   // tab hidden / app backgrounded / clock jump
    frames++; dts.push(dt);
    const el = now - start;
    if (el >= sampleSeconds * 1000) { evaluate(frames * 1000 / el); resetWindow(now); }
  }
  function force(name) {
    if (name == null || name === "auto") {
      // Back to Auto: restart from the device's recommended tier (not a previously forced one).
      const hint = QUALITY[opts.initial] ? opts.initial : deviceHint();
      forced = null; auto = true; warm = warmupWindows; good = 0; downedThisSession = false; current = hint; persist();
      if (onChange) onChange(current, QUALITY[current], "auto");
      return;
    }
    if (!QUALITY[name]) return;
    const changed = name !== current;
    forced = name; auto = false; current = name; persist();
    if (changed && onChange) onChange(name, QUALITY[name], "forced");
  }
  return {
    tick, force,
    get current() { return current; },
    get preset() { return QUALITY[current]; },
    get fps() { return fps; },
    get forced() { return forced; },
    get auto() { return auto; },
    set auto(v) { auto = !!v; if (auto) { forced = null; persist(); } },
  };
}
