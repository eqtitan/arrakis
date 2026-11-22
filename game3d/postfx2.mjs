// Optional extra post passes for the Sigilbound battle pipeline (game3d/post.mjs, Three.js r149).
//
//   SSAO      half-res depth-only ambient occlusion + depth-aware blur + depth-aware upsample  High, Ultra
//   LUT       32^3 colour grade generated in code (split tone, contrast, per-hue saturation), 11 arena presets  Medium+
//   DoF       far-background gather blur at half res, battle plane stays sharp                 Ultra
//   Sharpen   contrast-adaptive sharpen (CAS-style) for dpr below native                       Medium, High (auto)
//   Rays      screen-space light shafts from the bright sky, quarter res                        Ultra (optional)
//
// Every pass is a factory (renderer, sizeW, sizeH, opts) -> { render(...), setSize, dispose, enabled, params, bind(u) }.
// sizeW/H are the scene target size (post.mjs's rw x rh). Each pass that feeds the final pass exposes
// `define` (the #define to toggle) and `bind(uniforms)` (writes its uniforms). All final-pass GLSL is
// in FINAL_GLSL and spliced into post.mjs's FINAL_FRAG with patchFinalFrag(). With every pass off (or
// at its neutral setting) the final pass compiles to exactly the old shader, so the output is unchanged.
//
// =====================================================================================================
// INTEGRATION GUIDE (post.mjs createPipeline). ~12 lines; the bundle createPostFX2() does the bookkeeping.
// =====================================================================================================
//   import { createPostFX2, attachSceneDepth, patchFinalFrag, finalUniforms } from "./postfx2.mjs";
//
//   1. finalMat: splice the snippets and add the uniforms (once, where finalMat is created):
//        fragmentShader: patchFinalFrag(FINAL_FRAG),
//        uniforms: { ...existing, ...finalUniforms() },
//      patchFinalFrag throws (naming the anchor) if FINAL_FRAG no longer contains one of ANCHORS:
//        "float hash(vec2 p)"                      <- pars (uniforms + helpers) inserted before it
//        "vec3 col = srgbToLinear(clamp(texture2D(tScene, vUv).rgb, 0.0, 1.0));"
//                                                  <- replaced: sharpened fetch, then DoF mix, then SSAO multiply
//                                                     (linear light, BEFORE bloom and grade)
//        "#ifdef USE_GRADE"                        <- light shafts added before it (after bloom, before grade)
//        "vec3 o = linearToSrgb(clamp(col, 0.0, 1.0));" <- LUT applied after it (display-encoded, before dither)
//
//   2. buildTargets(): after makeSceneTarget(...):
//        const fx = PFX2_TIERS[preset.name];
//        if (fx.depth) attachSceneDepth(renderer, sceneRT);   // DepthTexture on the MSAA target; the
//                    // blit resolve now copies depth too (flips post.mjs's __ignoreDepthValues to false)
//        pfx = pfx || createPostFX2(renderer, rw, rh, { tier: preset.name, focusTarget: camTarget });
//        pfx.setTier(preset.name);
//      (Low tier has no post at all; pfx is unused there.)
//
//   3. resizeTargets(): pfx.setSize(rw, rh, renderScale) where renderScale = renderer.getPixelRatio() /
//      window.devicePixelRatio (drives the automatic sharpen amount; 1 = native).
//
//   4. render(), right after `renderer.setRenderTarget(sceneRT); renderer.render(scene, camera);` and the
//      fog/background restore, with autoClear already false (i.e. next to the bloom call):
//        pfx.render(sceneRT, camera);              // SSAO / DoF / rays prepasses (no-ops when off)
//      and before quad.render for the final pass:
//        pfx.bindFinal(finalMat.uniforms, setDefine, sceneRT);   // uniforms + USE_SSAO/USE_DOF/USE_LUT/...
//
//   5. dispose(): pfx.dispose().
//   Theme change (arena mount): pfx.lut.setPreset(lutPresetForTheme(arena.stats.theme)) or
//   pfx.lut.setPreset(lutPresetForChapter(chapter, titan)).
//
//   Tier switches (PFX2_TIERS, overridable per key):
//     Ultra : depth, SSAO 12 taps, DoF, LUT, rays, sharpen auto (0 at native)
//     High  : depth, SSAO 8 taps, LUT, sharpen auto (~0.3 on Note20 at dpr 2 of 2.63)
//     Medium: LUT, sharpen auto (no depth texture: the MSAA depth resolve is not paid)
//     Low   : nothing (post.mjs renders directly)
//
// COLOUR NOTES. The scene target holds display-encoded sRGB (per-material ACES, see post.mjs). The
// final pass decodes to display-referred linear light; SSAO multiplies and DoF averages there (energy
// correct, no dark fringes), rays are screen-blended like bloom, the LUT is indexed by the re-encoded
// sRGB value (perceptual spacing = no banding with 32 steps) and stored as RGBA16F (an identity LUT
// is exact to < 0.15 LSB). Dither still runs last.
//
// DEPTH. r149 resolves an MSAA target with glBlitFramebuffer; with a DepthTexture attached (UnsignedInt
// -> DEPTH_COMPONENT24 for both the multisample renderbuffer and the texture, so the blit is legal) the
// same blit resolves depth (one sample, NEAREST). Nothing else in the frame changes. Background / sky
// pixels keep the cleared depth 1.0, which every pass treats as "no geometry". Transparent VFX that
// write depth (depthWrite true) would be seen by SSAO/DoF as solid: keep depthWrite false on glows.
// (Chrome does not expose WEBGL_multisampled_render_to_texture to pages; if it ever does, r149 attaches
// the DepthTexture through framebufferTexture2DMultisampleEXT instead, which drivers may not resolve:
// check pfx.info().depthPath and disable SSAO/DoF there.)
// =====================================================================================================

import * as T from "three";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";

// ---------------------------------------------------------------------------------------------
// Tiers
// ---------------------------------------------------------------------------------------------
// sharpen: number = fixed amount (0..1), "auto" = from the render scale (sharpenForScale).
export const PFX2_TIERS = Object.freeze({
  Ultra: Object.freeze({ depth: true, ssao: true, ssaoSamples: 12, dof: true, lut: true, sharpen: "auto", rays: true }),
  High: Object.freeze({ depth: true, ssao: true, ssaoSamples: 8, dof: false, lut: true, sharpen: "auto", rays: false }),
  Medium: Object.freeze({ depth: false, ssao: false, ssaoSamples: 0, dof: false, lut: true, sharpen: "auto", rays: false }),
  Low: Object.freeze({ depth: false, ssao: false, ssaoSamples: 0, dof: false, lut: false, sharpen: 0, rays: false }),
});

/** Sharpen amount for a render scale (render px / native px, linear). 1 -> 0, 0.76 (Note20 High) -> 0.29, 0.57 -> 0.5. */
export function sharpenForScale(scale) {
  return Math.max(0, Math.min(0.5, (1 - (scale || 1)) * 1.2));
}

// ---------------------------------------------------------------------------------------------
// Shared GLSL
// ---------------------------------------------------------------------------------------------
const VERT = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const SRGB = /* glsl */`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }`;

// view distance (= -viewZ, metres) from a [0,1] perspective depth value
const DEPTH = /* glsl */`
uniform vec2 nearFar;
float viewDist(float d) { return nearFar.x * nearFar.y / (nearFar.y - d * (nearFar.y - nearFar.x)); }
vec2 pack16(float v) { float x = floor(clamp(v, 0.0, 1.0) * 65535.0 + 0.5); float hi = floor(x / 256.0); return vec2(hi, x - hi * 256.0) / 255.0; }
float unpack16(vec2 p) { return dot(floor(p * 255.0 + 0.5), vec2(256.0, 1.0)) / 65535.0; }`;

function quadMaterial(name, fragmentShader, uniforms, defines = {}) {
  return new T.ShaderMaterial({
    name, uniforms, defines, vertexShader: VERT, fragmentShader,
    depthTest: false, depthWrite: false, toneMapped: false, blending: T.NoBlending,
  });
}
function target(w, h, { half = false, filter = T.LinearFilter, name = "" } = {}) {
  const rt = new T.WebGLRenderTarget(Math.max(1, w), Math.max(1, h), {
    type: half ? T.HalfFloatType : T.UnsignedByteType, format: T.RGBAFormat,
    minFilter: filter, magFilter: filter, depthBuffer: false, stencilBuffer: false,
  });
  rt.texture.generateMipmaps = false; rt.texture.name = name;
  return rt;
}
function halfFloatRT(renderer) {
  const e = renderer.extensions;
  return renderer.capabilities.isWebGL2 && (e.has("EXT_color_buffer_float") || e.has("EXT_color_buffer_half_float"));
}
function camNearFar(camera, v2) { return v2.set(camera.near, camera.far); }
// x = P[0], y = P[5], z = P[8], w = P[9]: view pos = ((uv*2-1 + zw) / xy * dist, -dist)
function camProj(camera, v4) { const e = camera.projectionMatrix.elements; return v4.set(e[0], e[5], e[8], e[9]); }
function draw(renderer, quad, material, rt) {
  quad.material = material;
  renderer.setRenderTarget(rt);
  quad.render(renderer);
}

// ---------------------------------------------------------------------------------------------
// Scene depth
// ---------------------------------------------------------------------------------------------
/**
 * Attaches a DepthTexture to post.mjs's scene target so the MSAA resolve also resolves depth.
 * Safe to call before or after the target was first used (an initialised target is re-created).
 * bits: 24 (default; also fixes post.mjs's 16-bit MSAA depth, see report) or 16 (byte-identical colour to
 * the current target, half the depth-resolve bandwidth, but z-fighting on close coplanar kit).
 * Returns the DepthTexture (also at rt.depthTexture).
 */
export function attachSceneDepth(renderer, rt, { bits = 24 } = {}) {
  if (rt.depthTexture && rt.depthTexture.isDepthTexture) return rt.depthTexture;
  const props = renderer.properties.get(rt);
  if (props.__webglFramebuffer) rt.dispose();
  const dt = new T.DepthTexture(rt.width, rt.height, bits === 16 ? T.UnsignedShortType : T.UnsignedIntType);
  dt.format = T.DepthFormat; dt.minFilter = dt.magFilter = T.NearestFilter; dt.name = "Sigil.sceneDepth";
  rt.depthTexture = dt;
  rt.depthBuffer = true;
  renderer.properties.get(rt).__ignoreDepthValues = false;
  return dt;
}
/** Removes the DepthTexture again (back to post.mjs's depth-invalidating resolve). */
export function detachSceneDepth(renderer, rt) {
  if (!rt.depthTexture) return;
  rt.dispose();
  rt.depthTexture.dispose();
  rt.depthTexture = null;
  renderer.properties.get(rt).__ignoreDepthValues = true;
}

// ---------------------------------------------------------------------------------------------
// 1. SSAO
// ---------------------------------------------------------------------------------------------
// Half-res, depth-only (normals rebuilt from the depth buffer, choosing the smaller depth step per
// axis so silhouettes don't bend normals), SAO-style estimator (McGuire 2012): occlusion falls to 0
// at `radius` world distance, which is what kills halos — the background behind a character is far
// more than `radius` from it, so it never counts as occluded by it. Spiral of N taps rotated by a 4x4
// Bayer pattern; the 5-tap [.5 1 1 1 .5] separable blur averages exactly one 4-pixel period, so the
// pattern cancels on flat areas. Blur and final upsample are depth-aware (packed 16-bit view depth
// in GB of the AO target), so AO never bleeds across silhouettes. Fades out with distance (before
// the fog band), never touches depth 1.0 (sky/background), and the composite spares bright pixels
// (emissive gems, spell orbs) so glows don't get "dirty".
export const SSAO_DEFAULTS = Object.freeze({
  radius: 0.5,        // world metres (a unit is ~1.7 m tall)
  intensity: 1.0,     // estimator gain
  strength: 0.75,     // composite: 0 = off, 1 = full estimator darkening
  bias: 0.003,        // x view distance: ignores tiny depth steps on flat ground (self-occlusion acne)
  fadeStart: 20, fadeEnd: 32,  // view distance (m): AO fades out before the 18-48 m fog gets dense
  maxPx: 28,          // cap on the sampling radius in half-res pixels (near-camera props)
  protect: 0.85,      // 0..1: how much bright (>= ~0.75 display) pixels are spared
  depthTol: 0.04,     // relative depth difference that breaks the blur / upsample
});

const SSAO_FRAG = /* glsl */`
uniform sampler2D tDepth;
uniform vec2 depthTexel;
uniform vec2 aoSize;
uniform vec4 proj;
uniform float radius, intensity, bias, fadeStart, fadeEnd, maxPx;
varying vec2 vUv;
${DEPTH}
vec3 posAt(vec2 uv, float z) { return vec3((uv * 2.0 - 1.0 + proj.zw) / proj.xy * z, -z); }
vec3 posAt(vec2 uv) { return posAt(uv, viewDist(texture2D(tDepth, uv).r)); }
float bayer4(vec2 p) {
  vec2 a = mod(p, 4.0);
  vec2 b = mod(floor(a * 0.5), 2.0), c = mod(a, 2.0);
  return 4.0 * (2.0 * c.x * (1.0 - c.y) + 3.0 * c.x * c.y + 1.0 * (1.0 - c.x) * c.y) + (2.0 * b.x * (1.0 - b.y) + 3.0 * b.x * b.y + 1.0 * (1.0 - b.x) * b.y);
}
void main() {
  vec2 px = floor(gl_FragCoord.xy);
  vec2 uv = (px * 2.0 + 0.5) * depthTexel;          // top-left full-res texel of this 2x2 block (exact NEAREST hit)
  float d = texture2D(tDepth, uv).r;
  if (d >= 0.99999) { gl_FragColor = vec4(1.0, pack16(1.0), 1.0); return; }
  float z = viewDist(d);
  float fade = 1.0 - smoothstep(fadeStart, fadeEnd, z);
  if (fade <= 0.0) { gl_FragColor = vec4(1.0, pack16(z / nearFar.y), 1.0); return; }
  vec3 P = posAt(uv, z);
  vec2 dx = vec2(2.0 * depthTexel.x, 0.0), dy = vec2(0.0, 2.0 * depthTexel.y);
  vec3 Pr = posAt(uv + dx), Pl = posAt(uv - dx), Pu = posAt(uv + dy), Pd = posAt(uv - dy);
  vec3 ddx = abs(Pr.z - P.z) < abs(P.z - Pl.z) ? Pr - P : P - Pl;
  vec3 ddy = abs(Pu.z - P.z) < abs(P.z - Pd.z) ? Pu - P : P - Pd;
  vec3 n = normalize(cross(ddx, ddy));
  float rPx = clamp(radius * proj.y * 0.5 / z * aoSize.y, 1.5, maxPx);
  float a0 = bayer4(px) * (6.2831853 / 16.0);
  vec2 dir = vec2(cos(a0), sin(a0));
  const mat2 GOLD = mat2(-0.7373688, 0.6754903, -0.6754903, -0.7373688);   // rotate by the golden angle
  float r2 = radius * radius, sum = 0.0;
  for (int i = 0; i < NUM_SAMPLES; i++) {
    float t = (float(i) + 0.5) / float(NUM_SAMPLES);
    vec2 suv = uv + dir * (t * rPx) / aoSize;
    dir = GOLD * dir;
    vec3 v = posAt(suv) - P;
    float vv = dot(v, v), vn = dot(v, n);
    float f = max(r2 - vv, 0.0);
    sum += f * f * f * max((vn - bias * z) / (0.01 * r2 + vv), 0.0);
  }
  float ao = max(0.0, 1.0 - sum * intensity / (r2 * r2 * r2) * (5.0 / float(NUM_SAMPLES)));
  gl_FragColor = vec4(mix(1.0, ao, fade), pack16(z / nearFar.y), 1.0);
}`;

const SSAO_BLUR_FRAG = /* glsl */`
uniform sampler2D tAO;
uniform vec2 stepUv;
uniform float depthTol;
varying vec2 vUv;
${DEPTH}
void tap(vec2 o, float w0, float zc, inout float s, inout float ws) {
  vec4 t = texture2D(tAO, vUv + o * stepUv);
  float w = w0 * max(0.0, 1.0 - abs(unpack16(t.gb) - zc) / (zc * depthTol + 1e-5));
  s += t.r * w; ws += w;
}
void main() {
  vec4 c = texture2D(tAO, vUv);
  float zc = unpack16(c.gb);
  float s = c.r, ws = 1.0;
  tap(vec2(-2.0), 0.5, zc, s, ws); tap(vec2(-1.0), 1.0, zc, s, ws);
  tap(vec2(1.0), 1.0, zc, s, ws); tap(vec2(2.0), 0.5, zc, s, ws);
  gl_FragColor = vec4(s / ws, c.gb, 1.0);
}`;

export function createSSAOPass(renderer, sizeW, sizeH, opts = {}) {
  const params = Object.assign({}, SSAO_DEFAULTS, opts.params || {});
  const samples = opts.samples || 8;
  const scale = opts.scale || 0.5;
  let w = 1, h = 1, aw = 1, ah = 1;
  const rtA = target(1, 1, { filter: T.NearestFilter, name: "pfx2.ao" });
  const rtB = target(1, 1, { filter: T.NearestFilter, name: "pfx2.aoBlur" });
  const aoMat = quadMaterial("pfx2.SSAO", SSAO_FRAG, {
    tDepth: { value: null }, depthTexel: { value: new T.Vector2() }, aoSize: { value: new T.Vector2() },
    proj: { value: new T.Vector4() }, nearFar: { value: new T.Vector2() },
    radius: { value: 0 }, intensity: { value: 0 }, bias: { value: 0 }, fadeStart: { value: 0 }, fadeEnd: { value: 0 }, maxPx: { value: 0 },
  }, { NUM_SAMPLES: samples });
  const blurMat = quadMaterial("pfx2.SSAOBlur", SSAO_BLUR_FRAG, {
    tAO: { value: null }, stepUv: { value: new T.Vector2() }, depthTol: { value: 0.04 }, nearFar: { value: new T.Vector2() },
  });
  const quad = new FullScreenQuad(aoMat);
  const pass = {
    enabled: opts.enabled !== false, params, define: "USE_SSAO", samples,
    get texture() { return rtA.texture; },
    get size() { return [aw, ah]; },
    setSize(sw, sh) {
      w = sw; h = sh; aw = Math.max(1, Math.ceil(w * scale)); ah = Math.max(1, Math.ceil(h * scale));
      rtA.setSize(aw, ah); rtB.setSize(aw, ah);
    },
    setSamples(n) { if (n !== aoMat.defines.NUM_SAMPLES) { aoMat.defines.NUM_SAMPLES = n; aoMat.needsUpdate = true; pass.samples = n; } },
    /** depthTexture: the scene target's DepthTexture (full res). Leaves rtA holding the blurred AO. */
    render(depthTexture, camera) {
      if (!pass.enabled || !depthTexture) return null;
      const u = aoMat.uniforms;
      u.tDepth.value = depthTexture; u.depthTexel.value.set(1 / w, 1 / h); u.aoSize.value.set(aw, ah);
      camProj(camera, u.proj.value); camNearFar(camera, u.nearFar.value);
      u.radius.value = params.radius; u.intensity.value = params.intensity; u.bias.value = params.bias;
      u.fadeStart.value = params.fadeStart; u.fadeEnd.value = Math.max(params.fadeEnd, params.fadeStart + 0.01); u.maxPx.value = params.maxPx;
      draw(renderer, quad, aoMat, rtA);
      const b = blurMat.uniforms; b.depthTol.value = params.depthTol;
      b.tAO.value = rtA.texture; b.stepUv.value.set(1 / aw, 0); draw(renderer, quad, blurMat, rtB);
      b.tAO.value = rtB.texture; b.stepUv.value.set(0, 1 / ah); draw(renderer, quad, blurMat, rtA);
      return rtA.texture;
    },
    /** Writes the final-pass uniforms (pfxAO*). */
    bind(u) {
      u.pfxAO.value = rtA.texture; u.pfxAOSize.value.set(aw, ah);
      u.pfxAOParams.value.set(params.strength, params.protect, params.depthTol, 0);
    },
    active() { return pass.enabled && params.strength > 0 && params.intensity > 0; },
    dispose() { rtA.dispose(); rtB.dispose(); aoMat.dispose(); blurMat.dispose(); quad.dispose(); },
  };
  pass.setSize(sizeW, sizeH);
  return pass;
}

// ---------------------------------------------------------------------------------------------
// 2. Colour-grading LUT (32^3, packed as a 1024x32 strip: slice b at x = b*32, r across, g down)
// ---------------------------------------------------------------------------------------------
// All parameters at their defaults produce the identity. Hues in degrees (0 red, 60 yellow, 120 green,
// 180 cyan, 240 blue, 300 magenta).
export const LUT_DEFAULTS = Object.freeze({
  temperature: 0,      // -1 cool .. +1 warm (white balance in linear light, luminance kept)
  tint: 0,             // -1 green .. +1 magenta
  saturation: 1,       // global
  vibrance: 0,         // extra saturation for muted colours (-1..1)
  hueSat: [1, 1, 1, 1, 1, 1],   // per-hue saturation at R, Y, G, C, B, M (smoothly interpolated)
  hueShift: [0, 0, 0, 0, 0, 0], // per-hue hue rotation in degrees at R, Y, G, C, B, M
  shadowHue: 220, shadowAmount: 0,       // split toning: tint of the shadows (0..~0.4)
  highlightHue: 40, highlightAmount: 0,  // tint of the highlights
  splitBalance: 0,     // -1 .. 1 moves the shadow/highlight crossover darker/brighter
  contrast: 0,         // S-curve slope at the pivot: 0 = none, 0.2 = punchy, negative = flatter
  pivot: 0.45,         // display value the contrast curve pivots on
  fade: 0,             // matte black lift (display units, 0..0.08)
  whiteClip: 1,        // display white point (< 1 rolls highlights down slightly)
});

// Presets matched to scenery.mjs THEMES (chapter % 10) and the titan arena. Deliberately mild: the
// arenas are already art-directed; these unify the palette and add depth (cool shadows, warm light).
export const LUT_PRESETS = Object.freeze({
  neutral: Object.freeze({}),
  "dusk forest": Object.freeze({ temperature: 0.12, shadowHue: 235, shadowAmount: 0.10, highlightHue: 32, highlightAmount: 0.10, contrast: 0.10, saturation: 1.03, hueSat: [1.04, 1.06, 0.92, 1, 1, 1], hueShift: [0, -3, 6, 0, 0, 0] }),
  "teal shore": Object.freeze({ temperature: -0.06, shadowHue: 195, shadowAmount: 0.12, highlightHue: 35, highlightAmount: 0.07, contrast: 0.08, hueSat: [1, 0.95, 1, 1.12, 1.06, 1], hueShift: [0, 0, 8, 0, -4, 0] }),
  "red badlands": Object.freeze({ temperature: 0.10, shadowHue: 215, shadowAmount: 0.09, highlightHue: 30, highlightAmount: 0.10, contrast: 0.12, saturation: 0.98, hueSat: [1.06, 1.02, 0.85, 0.95, 1, 1], fade: 0.008 }),
  "green marsh": Object.freeze({ tint: -0.06, shadowHue: 165, shadowAmount: 0.12, highlightHue: 58, highlightAmount: 0.06, contrast: 0.06, saturation: 0.94, hueSat: [0.95, 0.95, 1.04, 1.02, 0.95, 0.9], hueShift: [0, 0, 6, 0, 0, 0], fade: 0.015 }),
  "gold ruins": Object.freeze({ temperature: 0.10, shadowHue: 260, shadowAmount: 0.09, highlightHue: 45, highlightAmount: 0.14, contrast: 0.10, hueSat: [1.02, 1.10, 0.95, 0.95, 0.9, 1], hueShift: [0, 4, 0, 0, 0, 0] }),
  "blossom forest": Object.freeze({ shadowHue: 275, shadowAmount: 0.09, highlightHue: 335, highlightAmount: 0.06, contrast: 0.05, saturation: 1.03, hueSat: [1.03, 1, 0.98, 1, 1.02, 1.12], fade: 0.012 }),
  "moonlit shore": Object.freeze({ temperature: -0.20, shadowHue: 225, shadowAmount: 0.16, highlightHue: 200, highlightAmount: 0.05, contrast: 0.09, saturation: 0.88, hueSat: [0.9, 0.85, 0.9, 1.05, 1.1, 0.95] }),
  "amethyst badlands": Object.freeze({ shadowHue: 268, shadowAmount: 0.14, highlightHue: 340, highlightAmount: 0.07, contrast: 0.11, hueSat: [1, 0.95, 0.9, 0.95, 1.08, 1.1], hueShift: [0, 0, 0, 0, 6, 0] }),
  "glow marsh": Object.freeze({ shadowHue: 182, shadowAmount: 0.15, highlightHue: 175, highlightAmount: 0.05, contrast: 0.09, saturation: 0.96, hueSat: [0.95, 0.92, 1.0, 1.14, 1.04, 1] }),
  "burning ruins": Object.freeze({ temperature: 0.18, shadowHue: 200, shadowAmount: 0.07, highlightHue: 26, highlightAmount: 0.16, contrast: 0.15, hueSat: [1.08, 1.06, 0.9, 0.9, 0.9, 1], fade: 0.006 }),
  "titan caldera": Object.freeze({ temperature: 0.14, shadowHue: 350, shadowAmount: 0.12, highlightHue: 28, highlightAmount: 0.13, contrast: 0.17, saturation: 1.02, hueSat: [1.06, 1.04, 0.85, 0.8, 0.8, 0.95], whiteClip: 0.985 }),
});
const CHAPTER_THEMES = ["dusk forest", "teal shore", "red badlands", "green marsh", "gold ruins", "blossom forest", "moonlit shore", "amethyst badlands", "glow marsh", "burning ruins"];
/** LUT preset name for a battle chapter (same chapter -> theme mapping as scenery.mjs). */
export function lutPresetForChapter(chapter, titan = false) {
  if (titan) return "titan caldera";
  return CHAPTER_THEMES[(((chapter | 0) % 10) + 10) % 10];
}
/** LUT preset name for a scenery.mjs theme name (arena.stats.theme); unknown -> "neutral". */
export function lutPresetForTheme(name) { return LUT_PRESETS[name] ? name : "neutral"; }

const s2l = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const l2s = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
function hueRGB(deg) { // fully saturated hue, normalised to luminance 1 (a pure tint multiplier)
  const h = (((deg % 360) + 360) % 360) / 60, x = 1 - Math.abs((h % 2) - 1);
  const [r, g, b] = h < 1 ? [1, x, 0] : h < 2 ? [x, 1, 0] : h < 3 ? [0, 1, x] : h < 4 ? [0, x, 1] : h < 5 ? [x, 0, 1] : [1, 0, x];
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return [r / L, g / L, b / L];
}
function hueWeights(h) { // 6 control points, each weight a raised cosine over +-60 degrees (sums to 1)
  const w = [0, 0, 0, 0, 0, 0], p = (((h % 360) + 360) % 360) / 60, i = Math.floor(p) % 6, f = p - Math.floor(p);
  const s = 0.5 - 0.5 * Math.cos(Math.PI * f);
  w[i] = 1 - s; w[(i + 1) % 6] = s;
  return w;
}
function curve(x, k, p) { // S-curve through (0,0), (p,p), (1,1) with slope k at the pivot
  if (k === 1) return x;
  return x < p ? p * Math.pow(x / p, k) : 1 - (1 - p) * Math.pow((1 - x) / (1 - p), k);
}

/** Grades one display-encoded sRGB colour [r,g,b] (0..1) with LUT params. Exposed for tests/tools. */
export function gradeColor(rgb, P) {
  let r = s2l(rgb[0]), g = s2l(rgb[1]), b = s2l(rgb[2]);
  // white balance (linear, luminance-normalised)
  if (P.temperature || P.tint) {
    let wr = 1 + 0.1 * P.temperature, wg = 1 - 0.06 * P.tint, wb = 1 - 0.1 * P.temperature;
    const L = 0.2126 * wr + 0.7152 * wg + 0.0722 * wb; wr /= L; wg /= L; wb /= L;
    r *= wr; g *= wg; b *= wb;
  }
  // per-hue rotation / saturation, global saturation + vibrance
  const hs = P.hueSat, hsh = P.hueShift;
  const needHue = hs.some((v) => v !== 1) || hsh.some((v) => v !== 0);
  if (needHue || P.saturation !== 1 || P.vibrance !== 0) {
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), C = mx - mn;
    let sat = P.saturation;
    if (C > 1e-7) {
      let h;
      if (mx === r) h = 60 * (((g - b) / C) % 6); else if (mx === g) h = 60 * ((b - r) / C + 2); else h = 60 * ((r - g) / C + 4);
      const s = C / mx;
      if (needHue) {
        const w = hueWeights(h);
        let ks = 0, kh = 0;
        for (let i = 0; i < 6; i++) { ks += w[i] * hs[i]; kh += w[i] * hsh[i]; }
        // fade the per-hue effect in with chroma: near-greys have unstable hue
        const k = Math.min(1, s * 4);
        sat *= 1 + (ks - 1) * k;
        if (kh !== 0) {   // rotate hue keeping value/chroma (HSV)
          const nh = (((h + kh * k) % 360) + 360) % 360 / 60, x = C * (1 - Math.abs((nh % 2) - 1));
          const [a1, a2, a3] = nh < 1 ? [C, x, 0] : nh < 2 ? [x, C, 0] : nh < 3 ? [0, C, x] : nh < 4 ? [0, x, C] : nh < 5 ? [x, 0, C] : [C, 0, x];
          const L0 = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          r = a1 + mn; g = a2 + mn; b = a3 + mn;
          const L1 = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          if (L1 > 1e-7) { const q = L0 / L1; r *= q; g *= q; b *= q; }
        }
      }
      if (P.vibrance) sat *= 1 + P.vibrance * (1 - s);
    }
    if (sat !== 1) {
      const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      r = Math.max(0, L + (r - L) * sat); g = Math.max(0, L + (g - L) * sat); b = Math.max(0, L + (b - L) * sat);
    }
  }
  // split toning: multiplicative, luminance-normalised tints weighted by perceptual luminance
  if (P.shadowAmount || P.highlightAmount) {
    const L = 0.2126 * r + 0.7152 * g + 0.0722 * b, le = l2s(clamp01(L));
    const x = clamp01(le - 0.25 * P.splitBalance);
    const ws = Math.pow(1 - x, 2) * P.shadowAmount, wh = x * x * P.highlightAmount;
    const ts = hueRGB(P.shadowHue), th = hueRGB(P.highlightHue);
    r *= 1 + ws * (ts[0] - 1) + wh * (th[0] - 1);
    g *= 1 + ws * (ts[1] - 1) + wh * (th[1] - 1);
    b *= 1 + ws * (ts[2] - 1) + wh * (th[2] - 1);
  }
  // back to display, contrast curve, matte / white point
  let o = [l2s(clamp01(r)), l2s(clamp01(g)), l2s(clamp01(b))];
  if (P.contrast) { const k = Math.max(0.2, 1 + P.contrast); o = o.map((v) => curve(v, k, P.pivot)); }
  if (P.fade || P.whiteClip !== 1) o = o.map((v) => P.fade + v * (P.whiteClip - P.fade));
  return o;
}

/** Resolves a preset name / partial params to a full parameter object. */
export function lutParams(p) {
  const src = typeof p === "string" ? (LUT_PRESETS[p] || {}) : (p || {});
  return Object.assign({}, LUT_DEFAULTS, src, {
    hueSat: (src.hueSat || LUT_DEFAULTS.hueSat).slice(), hueShift: (src.hueShift || LUT_DEFAULTS.hueShift).slice(),
  });
}
export function isNeutralLUT(p) {
  const P = lutParams(p), D = LUT_DEFAULTS;
  return Object.keys(D).every((k) => (Array.isArray(D[k]) ? D[k].every((v, i) => P[k][i] === v) : k === "shadowHue" || k === "highlightHue" || k === "pivot" || P[k] === D[k]));
}

/** Float32Array (size^3 * 4) of the LUT strip, row-major: x = b*size + r, y = g. */
export function generateLUT(p, size = 32) {
  const P = lutParams(p), W = size * size, out = new Float32Array(W * size * 4), n = size - 1, c = [0, 0, 0];
  for (let g = 0; g < size; g++) for (let b = 0; b < size; b++) for (let r = 0; r < size; r++) {
    c[0] = r / n; c[1] = g / n; c[2] = b / n;
    const o = gradeColor(c, P), i = (g * W + b * size + r) * 4;
    out[i] = o[0]; out[i + 1] = o[1]; out[i + 2] = o[2]; out[i + 3] = 1;
  }
  return out;
}
/** RGBA16F DataTexture of a LUT (linear filtering is core for half floats in WebGL2). */
export function lutTexture(p, size = 32, tex = null) {
  const f = generateLUT(p, size), h = new Uint16Array(f.length);
  for (let i = 0; i < f.length; i++) h[i] = T.DataUtils.toHalfFloat(f[i]);
  if (tex && tex.image.width === size * size) { tex.image.data = h; tex.needsUpdate = true; return tex; }
  const t = new T.DataTexture(h, size * size, size, T.RGBAFormat, T.HalfFloatType);
  t.minFilter = t.magFilter = T.LinearFilter; t.wrapS = t.wrapT = T.ClampToEdgeWrapping;
  t.generateMipmaps = false; t.flipY = false; t.name = "pfx2.lut"; t.needsUpdate = true;
  return t;
}
/** 8-bit canvas of a LUT strip (for eyeballing / exporting a PNG; not used at runtime). */
export function lutCanvas(p, size = 32) {
  const f = generateLUT(p, size), c = document.createElement("canvas");
  c.width = size * size; c.height = size;
  const g = c.getContext("2d"), img = g.createImageData(c.width, c.height);
  for (let y = 0; y < size; y++) for (let x = 0; x < size * size; x++) {
    const i = (y * size * size + x) * 4, o = ((size - 1 - y) * size * size + x) * 4;
    for (let k = 0; k < 3; k++) img.data[o + k] = Math.round(f[i + k] * 255);
    img.data[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return c;
}

export function createLUTPass(renderer, sizeW, sizeH, opts = {}) {
  const size = opts.size || 32;
  let name = "neutral", P = lutParams("neutral"), tex = null, neutral = true;
  const pass = {
    enabled: opts.enabled !== false, define: "USE_LUT", strength: opts.strength == null ? 1 : opts.strength,
    get preset() { return name; }, get params() { return P; }, get texture() { return tex; },
    /** name from LUT_PRESETS, or a params object (merged over LUT_DEFAULTS). ~5-10 ms on a phone CPU. */
    setPreset(p) {
      name = typeof p === "string" ? p : "custom";
      P = lutParams(p); neutral = isNeutralLUT(P);
      if (!neutral) tex = lutTexture(P, size, tex);
      return pass;
    },
    setSize() {}, render() { return tex; },
    bind(u) { u.pfxLut.value = tex; u.pfxLutParams.value.set(pass.strength, size, 0, 0); },
    active() { return pass.enabled && !neutral && pass.strength > 0 && !!tex; },
    dispose() { if (tex) tex.dispose(); tex = null; },
  };
  pass.setPreset(opts.preset || "neutral");
  return pass;
}

// ---------------------------------------------------------------------------------------------
// 3. Depth of field (far background only)
// ---------------------------------------------------------------------------------------------
// CoC = 0 up to focus + sharpRange (the whole battle plane, both rows, the near props), ramps to 1 over
// blurRange. Half-res gather: 12-tap golden-spiral disc whose radius is the centre's CoC; each tap
// weighted by its own CoC so sharp foreground (CoC 0) never smears into the background. Averaged in
// linear light (no dark fringes around bright sky gaps). The final pass mixes by the full-res CoC
// (crisp silhouettes) and upsamples with CoC-weighted taps (no sharp-object halo).
export const DOF_DEFAULTS = Object.freeze({
  focusDistance: null, // view distance of the focus (m); null = from the focus target / camera target
  sharpRange: 5,       // metres behind the focus that stay fully sharp
  blurRange: 16,       // metres over which blur ramps to max
  maxPx: 5,            // max blur radius in half-res pixels (~10 full-res px)
  amount: 1,           // final mix: 0 = off
});
const DOF_FRAG = /* glsl */`
uniform sampler2D tScene, tDepth;
uniform vec2 halfSize;
uniform vec3 dof;    // focusFar, 1/blurRange, maxPx
varying vec2 vUv;
${SRGB}
${DEPTH}
float coc(vec2 uv) { float c = clamp((viewDist(texture2D(tDepth, uv).r) - dof.x) * dof.y, 0.0, 1.0); return c * c * (3.0 - 2.0 * c); }
vec3 col(vec2 uv) { return srgbToLinear(clamp(texture2D(tScene, uv).rgb, 0.0, 1.0)); }
void main() {
  float c0 = coc(vUv);
  vec3 acc = col(vUv); float ws = 1.0;
  float R = c0 * dof.z;
  if (R > 0.35) {
    vec2 dir = vec2(1.0, 0.0);
    const mat2 GOLD = mat2(-0.7373688, 0.6754903, -0.6754903, -0.7373688);
    for (int i = 0; i < 12; i++) {
      float t = sqrt((float(i) + 0.5) / 12.0);
      vec2 suv = vUv + dir * (t * R) / halfSize;
      dir = GOLD * dir;
      float w = clamp(coc(suv) * dof.z - t * R + 1.0, 0.0, 1.0);
      acc += col(suv) * w; ws += w;
    }
  }
  gl_FragColor = vec4(acc / ws, c0);
}`;

export function createDoFPass(renderer, sizeW, sizeH, opts = {}) {
  const params = Object.assign({}, DOF_DEFAULTS, opts.params || {});
  const half = halfFloatRT(renderer);
  let w = 1, h = 1, hw = 1, hh = 1, focusFar = 1e9;
  const rt = target(1, 1, { half, filter: T.NearestFilter, name: "pfx2.dof" });
  const mat = quadMaterial("pfx2.DoF", DOF_FRAG, {
    tScene: { value: null }, tDepth: { value: null }, halfSize: { value: new T.Vector2() },
    dof: { value: new T.Vector3() }, nearFar: { value: new T.Vector2() },
  });
  const quad = new FullScreenQuad(mat);
  const v = new T.Vector3();
  const pass = {
    enabled: opts.enabled !== false, params, define: "USE_DOF",
    focusTarget: opts.focusTarget || null,
    get texture() { return rt.texture; },
    setSize(sw, sh) { w = sw; h = sh; hw = Math.max(1, Math.ceil(w / 2)); hh = Math.max(1, Math.ceil(h / 2)); rt.setSize(hw, hh); },
    /** colorTexture: scene target texture (sRGB-encoded); depthTexture: its DepthTexture. */
    render(colorTexture, depthTexture, camera) {
      if (!pass.enabled || !depthTexture) return null;
      let fd = params.focusDistance;
      if (fd == null) {
        if (pass.focusTarget) { camera.updateMatrixWorld(); v.copy(pass.focusTarget).applyMatrix4(camera.matrixWorldInverse); fd = -v.z; }
        else fd = 12;
      }
      focusFar = fd + params.sharpRange;
      const u = mat.uniforms;
      u.tScene.value = colorTexture; u.tDepth.value = depthTexture; u.halfSize.value.set(hw, hh);
      u.dof.value.set(focusFar, 1 / Math.max(0.01, params.blurRange), params.maxPx);
      camNearFar(camera, u.nearFar.value);
      draw(renderer, quad, mat, rt);
      return rt.texture;
    },
    bind(u) {
      u.pfxDof.value = rt.texture; u.pfxDofSize.value.set(hw, hh);
      u.pfxDofParams.value.set(focusFar, 1 / Math.max(0.01, params.blurRange), params.amount, 0);
    },
    active() { return pass.enabled && params.amount > 0 && params.maxPx > 0; },
    dispose() { rt.dispose(); mat.dispose(); quad.dispose(); },
  };
  pass.setSize(sizeW, sizeH);
  return pass;
}

// ---------------------------------------------------------------------------------------------
// 4. Sharpen (contrast-adaptive, CAS-style)
// ---------------------------------------------------------------------------------------------
// In the final pass (default): 4 extra taps of the scene texture at render resolution; the browser then
// upscales the canvas to the panel, so this pre-compensates its bilinear softening. The per-pixel weight
// shrinks where local contrast is already high, so edges don't ring or halo.
// Standalone render(inputTexture, target): bilinear upscale + CAS in one pass, for a native-resolution
// canvas fed by a lower-resolution final pass (costs one native-res fill; see report).
const CAS_GLSL = /* glsl */`
vec3 casSharpen(sampler2D t, vec2 uv, vec2 texel, float amount) {
  vec3 c = clamp(texture2D(t, uv).rgb, 0.0, 1.0);
  vec3 n = clamp(texture2D(t, uv + vec2(0.0, texel.y)).rgb, 0.0, 1.0);
  vec3 s = clamp(texture2D(t, uv - vec2(0.0, texel.y)).rgb, 0.0, 1.0);
  vec3 e = clamp(texture2D(t, uv + vec2(texel.x, 0.0)).rgb, 0.0, 1.0);
  vec3 w = clamp(texture2D(t, uv - vec2(texel.x, 0.0)).rgb, 0.0, 1.0);
  vec3 mn = min(c, min(min(n, s), min(e, w))), mx = max(c, max(max(n, s), max(e, w)));
  vec3 amp = sqrt(clamp(min(mn, 1.0 - mx) / max(mx, vec3(1e-4)), 0.0, 1.0));
  vec3 k = -amp * (amount * 0.2);
  return clamp((c + (n + s + e + w) * k) / (1.0 + 4.0 * k), 0.0, 1.0);
}`;
const SHARPEN_FRAG = /* glsl */`
uniform sampler2D tInput;
uniform vec2 texel;
uniform float amount;
varying vec2 vUv;
${CAS_GLSL}
void main() { gl_FragColor = vec4(casSharpen(tInput, vUv, texel, amount), 1.0); }`;

export function createSharpenPass(renderer, sizeW, sizeH, opts = {}) {
  const mat = quadMaterial("pfx2.Sharpen", SHARPEN_FRAG, { tInput: { value: null }, texel: { value: new T.Vector2() }, amount: { value: 0 } });
  const quad = new FullScreenQuad(mat);
  let w = sizeW, h = sizeH;
  const pass = {
    enabled: opts.enabled !== false, define: "USE_SHARPEN",
    amount: opts.amount == null ? 0.3 : opts.amount,   // 0..1 (1 = CAS maximum, ~0.3 is "light")
    setSize(sw, sh) { w = sw; h = sh; },
    /** Standalone: input (any size, sampled bilinear) -> target (null = canvas). */
    render(inputTexture, rt = null) {
      const img = inputTexture.image || {};
      mat.uniforms.tInput.value = inputTexture;
      mat.uniforms.texel.value.set(1 / (img.width || w), 1 / (img.height || h));
      mat.uniforms.amount.value = pass.enabled ? pass.amount : 0;
      draw(renderer, quad, mat, rt);
    },
    bind(u) { u.pfxSharpen.value = pass.amount; u.pfxSceneTexel.value.set(1 / w, 1 / h); },
    active() { return pass.enabled && pass.amount > 0; },
    dispose() { mat.dispose(); quad.dispose(); },
  };
  return pass;
}

// ---------------------------------------------------------------------------------------------
// 5. Light shafts (screen-space, from the bright sky)
// ---------------------------------------------------------------------------------------------
// The battle sun sits behind the camera, so there is no visible sun disc to streak from. Instead a
// virtual light anchor above the top edge (default upper-left, matching the sun's x = -5) streaks the
// bright sky seen between props / trees / silhouettes down into the air: quarter res, mask + two
// radial-blur passes of 8 taps (64 effective samples, no noise), screen-blended after bloom.
export const RAYS_DEFAULTS = Object.freeze({
  anchor: [0.22, 1.12],  // light position in screen uv (y up); can be off-screen
  threshold: 0.18,       // linear sky luminance where shafts start
  length: 0.85,          // fraction of the distance to the anchor that is streaked
  decay: 0.93,           // per-tap falloff
  strength: 0.35,        // composite gain
  tint: [1.0, 0.9, 0.75],
  falloff: 1.4,          // radial falloff of the mask away from the anchor
});
const RAYS_MASK_FRAG = /* glsl */`
uniform sampler2D tScene, tDepth;
uniform vec2 anchor;
uniform float threshold, falloff, aspect;
varying vec2 vUv;
${SRGB}
void main() {
  float sky = step(0.99999, texture2D(tDepth, vUv).r);
  vec3 c = srgbToLinear(clamp(texture2D(tScene, vUv).rgb, 0.0, 1.0));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  vec2 d = (vUv - anchor) * vec2(aspect, 1.0);
  float m = sky * smoothstep(threshold, threshold + 0.25, l) / (1.0 + falloff * dot(d, d));
  gl_FragColor = vec4(c * m, 1.0);
}`;
const RAYS_BLUR_FRAG = /* glsl */`
uniform sampler2D tInput;
uniform vec2 anchor;
uniform float stepLen, decay;
varying vec2 vUv;
void main() {
  vec2 delta = (anchor - vUv) * stepLen;
  vec2 uv = vUv; vec3 acc = vec3(0.0); float w = 1.0, ws = 0.0;
  for (int i = 0; i < 8; i++) { acc += texture2D(tInput, uv).rgb * w; ws += w; w *= decay; uv += delta; }
  gl_FragColor = vec4(acc / ws, 1.0);
}`;

export function createRaysPass(renderer, sizeW, sizeH, opts = {}) {
  const params = Object.assign({}, RAYS_DEFAULTS, opts.params || {});
  const half = halfFloatRT(renderer);
  let w = 1, h = 1, qw = 1, qh = 1;
  const rtA = target(1, 1, { half, name: "pfx2.raysA" }), rtB = target(1, 1, { half, name: "pfx2.raysB" });
  for (const rt of [rtA, rtB]) rt.texture.wrapS = rt.texture.wrapT = T.ClampToEdgeWrapping;
  const maskMat = quadMaterial("pfx2.RaysMask", RAYS_MASK_FRAG, {
    tScene: { value: null }, tDepth: { value: null }, anchor: { value: new T.Vector2() },
    threshold: { value: 0 }, falloff: { value: 0 }, aspect: { value: 1 },
  });
  const blurMat = quadMaterial("pfx2.RaysBlur", RAYS_BLUR_FRAG, {
    tInput: { value: null }, anchor: { value: new T.Vector2() }, stepLen: { value: 0 }, decay: { value: 0.9 },
  });
  const quad = new FullScreenQuad(maskMat);
  const pass = {
    enabled: opts.enabled !== false, params, define: "USE_RAYS",
    get texture() { return rtA.texture; },
    setSize(sw, sh) { w = sw; h = sh; qw = Math.max(1, Math.ceil(w / 4)); qh = Math.max(1, Math.ceil(h / 4)); rtA.setSize(qw, qh); rtB.setSize(qw, qh); },
    render(colorTexture, depthTexture) {
      if (!pass.enabled || !depthTexture) return null;
      const m = maskMat.uniforms;
      m.tScene.value = colorTexture; m.tDepth.value = depthTexture; m.anchor.value.fromArray(params.anchor);
      m.threshold.value = params.threshold; m.falloff.value = params.falloff; m.aspect.value = w / h;
      draw(renderer, quad, maskMat, rtA);
      const b = blurMat.uniforms;
      b.anchor.value.fromArray(params.anchor); b.decay.value = params.decay;
      b.tInput.value = rtA.texture; b.stepLen.value = params.length / 8; draw(renderer, quad, blurMat, rtB);
      b.tInput.value = rtB.texture; b.stepLen.value = params.length / 64; b.decay.value = 1; draw(renderer, quad, blurMat, rtA);
      return rtA.texture;
    },
    bind(u) {
      const s = params.strength, t = params.tint;
      u.pfxRays.value = rtA.texture; u.pfxRaysTint.value.set(t[0] * s, t[1] * s, t[2] * s);
    },
    active() { return pass.enabled && params.strength > 0; },
    dispose() { rtA.dispose(); rtB.dispose(); maskMat.dispose(); blurMat.dispose(); quad.dispose(); },
  };
  pass.setSize(sizeW, sizeH);
  return pass;
}

// ---------------------------------------------------------------------------------------------
// Final-pass GLSL
// ---------------------------------------------------------------------------------------------
// Expects post.mjs's FINAL_FRAG context: vUv, tScene, srgbToLinear/linearToSrgb, `col` (linear) and `o`.
export const FINAL_GLSL = Object.freeze({
  pars: /* glsl */`
#if defined(USE_SSAO) || defined(USE_DOF)
uniform sampler2D pfxDepth;
uniform vec2 pfxNearFar;
float pfxViewDist(float d) { return pfxNearFar.x * pfxNearFar.y / (pfxNearFar.y - d * (pfxNearFar.y - pfxNearFar.x)); }
#endif
#ifdef USE_SHARPEN
uniform float pfxSharpen;
uniform vec2 pfxSceneTexel;
${CAS_GLSL}
vec3 pfxScene(sampler2D t, vec2 uv) { return casSharpen(t, uv, pfxSceneTexel, pfxSharpen); }
#else
vec3 pfxScene(sampler2D t, vec2 uv) { return clamp(texture2D(t, uv).rgb, 0.0, 1.0); }
#endif
#ifdef USE_SSAO
uniform sampler2D pfxAO;
uniform vec2 pfxAOSize;
uniform vec4 pfxAOParams;   // strength, protect, depthTol
float pfxUnpack16(vec2 p) { return dot(floor(p * 255.0 + 0.5), vec2(256.0, 1.0)) / 65535.0; }
float pfxAOAt(vec2 uv, float zn) {   // depth-aware 4-tap upsample (zn = view dist / far)
  vec2 p = uv * pfxAOSize - 0.25;    // AO texel i sits on full-res texel 2i (+0.5)
  vec2 f = fract(p), t = 1.0 / pfxAOSize, b = (floor(p) + 0.5) * t;
  vec4 s0 = texture2D(pfxAO, b), s1 = texture2D(pfxAO, b + vec2(t.x, 0.0));
  vec4 s2 = texture2D(pfxAO, b + vec2(0.0, t.y)), s3 = texture2D(pfxAO, b + t);
  vec4 z = vec4(pfxUnpack16(s0.gb), pfxUnpack16(s1.gb), pfxUnpack16(s2.gb), pfxUnpack16(s3.gb));
  vec4 a = vec4(s0.r, s1.r, s2.r, s3.r);
  vec4 dz = abs(z - zn);
  vec4 w = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y), (1.0 - f.x) * f.y, f.x * f.y)
         * max(vec4(0.0), 1.0 - dz / (zn * pfxAOParams.z + 1e-5));
  float ws = dot(w, vec4(1.0));
  if (ws > 1e-3) return dot(w, a) / ws;
  float m = min(min(dz.x, dz.y), min(dz.z, dz.w));   // no match: nearest-depth tap
  return dz.x == m ? a.x : dz.y == m ? a.y : dz.z == m ? a.z : a.w;
}
#endif
#ifdef USE_DOF
uniform sampler2D pfxDof;
uniform vec2 pfxDofSize;
uniform vec4 pfxDofParams;  // focusFar, 1/blurRange, amount
vec3 pfxDofAt(vec2 uv) {    // CoC-weighted 4-tap upsample: sharp (CoC 0) texels don't leak
  vec2 p = uv * pfxDofSize - 0.5;
  vec2 f = fract(p), t = 1.0 / pfxDofSize, b = (floor(p) + 0.5) * t;
  vec4 s0 = texture2D(pfxDof, b), s1 = texture2D(pfxDof, b + vec2(t.x, 0.0));
  vec4 s2 = texture2D(pfxDof, b + vec2(0.0, t.y)), s3 = texture2D(pfxDof, b + t);
  vec4 w = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y), (1.0 - f.x) * f.y, f.x * f.y)
         * (vec4(s0.a, s1.a, s2.a, s3.a) + 1e-3);
  return (s0.rgb * w.x + s1.rgb * w.y + s2.rgb * w.z + s3.rgb * w.w) / dot(w, vec4(1.0));
}
#endif
#ifdef USE_RAYS
uniform sampler2D pfxRays;
uniform vec3 pfxRaysTint;
#endif
#ifdef USE_LUT
uniform sampler2D pfxLut;
uniform vec4 pfxLutParams;  // strength, size
vec3 pfxLutAt(vec3 c) {
  float n = pfxLutParams.y;
  c = clamp(c, 0.0, 1.0) * (n - 1.0);
  float b0 = floor(c.b), fb = c.b - b0, b1 = min(b0 + 1.0, n - 1.0);
  vec2 uv = vec2((c.r + 0.5) / (n * n), (c.g + 0.5) / n);
  return mix(texture2D(pfxLut, uv + vec2(b0 / n, 0.0)).rgb, texture2D(pfxLut, uv + vec2(b1 / n, 0.0)).rgb, fb);
}
#endif
`,
  // replaces post.mjs's scene fetch line; `col` is display-referred linear light afterwards
  scene: /* glsl */`
  vec3 col = srgbToLinear(pfxScene(tScene, vUv));
#if defined(USE_SSAO) || defined(USE_DOF)
  float pfxD = texture2D(pfxDepth, vUv).r;
  float pfxZ = pfxViewDist(pfxD);
#endif
#ifdef USE_DOF
  {
    float k = clamp((pfxZ - pfxDofParams.x) * pfxDofParams.y, 0.0, 1.0);
    k = k * k * (3.0 - 2.0 * k) * pfxDofParams.z;
    if (k > 0.0) col = mix(col, pfxDofAt(vUv), k);
  }
#endif
#ifdef USE_SSAO
  if (pfxD < 0.99999) {
    float ao = pfxAOAt(vUv, pfxZ / pfxNearFar.y);
    float br = max(col.r, max(col.g, col.b));
    ao = mix(ao, 1.0, pfxAOParams.y * smoothstep(0.45, 0.9, br));
    col *= mix(1.0, ao, pfxAOParams.x);
  }
#endif
`,
  // inserted before #ifdef USE_GRADE (after bloom)
  postBloom: /* glsl */`
#ifdef USE_RAYS
  col = 1.0 - (1.0 - col) * exp(-texture2D(pfxRays, vUv).rgb * pfxRaysTint);
#endif
`,
  // inserted after `vec3 o = linearToSrgb(...)`
  postEncode: /* glsl */`
#ifdef USE_LUT
  o = mix(o, pfxLutAt(o), pfxLutParams.x);
#endif
`,
});

export const ANCHORS = Object.freeze({
  pars: "float hash(vec2 p)",
  scene: "vec3 col = srgbToLinear(clamp(texture2D(tScene, vUv).rgb, 0.0, 1.0));",
  postBloom: "#ifdef USE_GRADE",
  postEncode: "vec3 o = linearToSrgb(clamp(col, 0.0, 1.0));",
});

/** Splices FINAL_GLSL into post.mjs's FINAL_FRAG source. Throws naming the anchor if one is missing. */
export function patchFinalFrag(src) {
  for (const [k, a] of Object.entries(ANCHORS)) if (!src.includes(a)) throw new Error(`postfx2.patchFinalFrag: anchor "${k}" not found: ${a}`);
  return src
    .replace(ANCHORS.pars, FINAL_GLSL.pars + "\n" + ANCHORS.pars)
    .replace(ANCHORS.scene, FINAL_GLSL.scene)
    .replace(ANCHORS.postBloom, FINAL_GLSL.postBloom + ANCHORS.postBloom)
    .replace(ANCHORS.postEncode, ANCHORS.postEncode + FINAL_GLSL.postEncode);
}

/** Uniforms the patched final shader needs (merge into finalMat.uniforms). */
export function finalUniforms() {
  return {
    pfxDepth: { value: null }, pfxNearFar: { value: new T.Vector2(0.1, 150) },
    pfxSharpen: { value: 0 }, pfxSceneTexel: { value: new T.Vector2() },
    pfxAO: { value: null }, pfxAOSize: { value: new T.Vector2(1, 1) }, pfxAOParams: { value: new T.Vector4() },
    pfxDof: { value: null }, pfxDofSize: { value: new T.Vector2(1, 1) }, pfxDofParams: { value: new T.Vector4() },
    pfxRays: { value: null }, pfxRaysTint: { value: new T.Vector3() },
    pfxLut: { value: null }, pfxLutParams: { value: new T.Vector4(0, 32, 0, 0) },
  };
}

// ---------------------------------------------------------------------------------------------
// GPU timing (EXT_disjoint_timer_query_webgl2 when exposed; else CPU time around gl.finish())
// ---------------------------------------------------------------------------------------------
export function createPassTimer(renderer, { sync = false } = {}) {
  const gl = renderer.getContext();
  const ext = gl.getExtension && gl.getExtension("EXT_disjoint_timer_query_webgl2");
  const pending = [], acc = {};
  let cur = null, t0 = 0;
  return {
    gpu: !!ext,
    begin(name) {
      if (ext) { const q = gl.createQuery(); gl.beginQuery(ext.TIME_ELAPSED_EXT, q); cur = { name, q }; }
      else if (sync) { gl.finish(); t0 = performance.now(); cur = { name }; }
    },
    end() {
      if (!cur) return;
      if (ext) { gl.endQuery(ext.TIME_ELAPSED_EXT); pending.push(cur); }
      else if (sync) { gl.finish(); const a = acc[cur.name] || (acc[cur.name] = { ms: 0, n: 0 }); a.ms += performance.now() - t0; a.n++; }
      cur = null;
    },
    /** Average ms per pass so far ({ name: ms }). Polls finished GPU queries. */
    results() {
      if (ext) {
        const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);
        for (let i = pending.length - 1; i >= 0; i--) {
          const p = pending[i];
          if (!gl.getQueryParameter(p.q, gl.QUERY_RESULT_AVAILABLE)) continue;
          if (!disjoint) { const a = acc[p.name] || (acc[p.name] = { ms: 0, n: 0 }); a.ms += gl.getQueryParameter(p.q, gl.QUERY_RESULT) / 1e6; a.n++; }
          gl.deleteQuery(p.q); pending.splice(i, 1);
        }
      }
      const o = {};
      for (const k in acc) o[k] = +(acc[k].ms / acc[k].n).toFixed(3);
      return o;
    },
    reset() { for (const k in acc) delete acc[k]; },
  };
}

// ---------------------------------------------------------------------------------------------
// Bundle: all passes, switched per tier
// ---------------------------------------------------------------------------------------------
/**
 * createPostFX2(renderer, sizeW, sizeH, opts)
 *   opts.tier         "Ultra" | "High" | "Medium" | "Low"
 *   opts.tiers        overrides merged over PFX2_TIERS[tier] (e.g. { High: { ssao: false } })
 *   opts.focusTarget  THREE.Vector3 the DoF focuses on (the battle camera target)
 *   opts.lut          preset name or params (default "neutral")
 *   opts.ssao / dof / rays  params overrides
 *   opts.timer        a createPassTimer() to measure each pass
 * Returns { ssao, dof, lut, sharpen, rays, setTier, setSize, render(sceneRT, camera), bindFinal(u, setDefine, sceneRT), info, dispose }
 */
export function createPostFX2(renderer, sizeW, sizeH, opts = {}) {
  let w = sizeW, h = sizeH, scale = 1, tierName = opts.tier || "High", cfg = null;
  const ssao = createSSAOPass(renderer, w, h, { params: opts.ssao, samples: 8 });
  const dof = createDoFPass(renderer, w, h, { params: opts.dof, focusTarget: opts.focusTarget });
  const lut = createLUTPass(renderer, w, h, { preset: opts.lut || "neutral" });
  const sharpen = createSharpenPass(renderer, w, h, { amount: 0 });
  const rays = createRaysPass(renderer, w, h, { params: opts.rays });
  const timer = opts.timer || null;
  const lastDepth = { tex: null };

  function setTier(name) {
    tierName = PFX2_TIERS[name] ? name : "High";
    cfg = Object.assign({}, PFX2_TIERS[tierName], (opts.tiers && opts.tiers[tierName]) || {});
    ssao.enabled = !!(cfg.depth && cfg.ssao);
    if (cfg.ssaoSamples) ssao.setSamples(cfg.ssaoSamples);
    dof.enabled = !!(cfg.depth && cfg.dof);
    rays.enabled = !!(cfg.depth && cfg.rays);
    lut.enabled = !!cfg.lut;
    sharpen.enabled = cfg.sharpen === "auto" || cfg.sharpen > 0;
    sharpen.amount = cfg.sharpen === "auto" ? sharpenForScale(scale) : +cfg.sharpen || 0;
  }
  function setSize(sw, sh, renderScale) {
    w = sw; h = sh; if (renderScale) scale = renderScale;
    for (const p of [ssao, dof, sharpen, rays]) p.setSize(w, h);
    if (cfg && cfg.sharpen === "auto") sharpen.amount = sharpenForScale(scale);
  }
  function timed(name, fn) { if (timer) timer.begin(name); const r = fn(); if (timer) timer.end(); return r; }
  function render(sceneRT, camera) {
    const depth = sceneRT.depthTexture || null;
    lastDepth.tex = depth;
    if (!depth) return;
    if (ssao.active()) timed("ssao", () => ssao.render(depth, camera));
    if (dof.active()) timed("dof", () => dof.render(sceneRT.texture, depth, camera));
    if (rays.active()) timed("rays", () => rays.render(sceneRT.texture, depth));
    lastDepth.near = camera.near; lastDepth.far = camera.far;
  }
  function bindFinal(u, setDefine, sceneRT) {
    const depth = (sceneRT && sceneRT.depthTexture) || lastDepth.tex;
    const on = { USE_SSAO: !!depth && ssao.active(), USE_DOF: !!depth && dof.active(), USE_RAYS: !!depth && rays.active(), USE_LUT: lut.active(), USE_SHARPEN: sharpen.active() };
    if (on.USE_SSAO || on.USE_DOF) { u.pfxDepth.value = depth; u.pfxNearFar.value.set(lastDepth.near || 0.1, lastDepth.far || 150); }
    if (on.USE_SSAO) ssao.bind(u);
    if (on.USE_DOF) dof.bind(u);
    if (on.USE_RAYS) rays.bind(u);
    if (on.USE_LUT) lut.bind(u);
    if (on.USE_SHARPEN) sharpen.bind(u);
    for (const k in on) setDefine(k, on[k]);
    return on;
  }
  setTier(tierName);
  return {
    ssao, dof, lut, sharpen, rays, setTier, setSize, render, bindFinal,
    get tier() { return tierName; }, get config() { return cfg; },
    needsDepth: () => !!(cfg && cfg.depth),
    info: () => ({
      tier: tierName, ssao: ssao.active(), ssaoSamples: ssao.samples, dof: dof.active(), rays: rays.active(),
      lut: lut.active() ? lut.preset : false, sharpen: sharpen.active() ? +sharpen.amount.toFixed(2) : 0,
      depthPath: renderer.extensions.has("WEBGL_multisampled_render_to_texture") ? "msrtt (unverified)" : "blit-resolve",
    }),
    dispose() { for (const p of [ssao, dof, lut, sharpen, rays]) p.dispose(); },
  };
}
