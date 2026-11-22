// Test bench for game3d/postfx2.mjs. Mirrors post.mjs's createPipeline (sRGB MSAA scene target via
// the isXRRenderTarget trick, UnrealBloomPass with the HDR bright pass, the same FINAL_FRAG) and splices
// the postfx2 passes in exactly as the integration guide says, so what you see here is what the game gets.
// Scene: capsule "units" with metal/gold kit and emissive gems, crates and rocks beside them, pillars,
// trees and crystals behind, textured ground, fog, shadows, the game's light rig, ACES 1.3.
// Query: ?tier=High|Ultra|Medium|Off &ssao &dof &rays &sharpen=0.3 &lut=<preset> &theme=<0..10> &clean &static
import * as T from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { QUALITY, applyQuality } from "../game3d/post.mjs";
import { detailMaterial, envMap, bevelBox } from "../game3d/materials.mjs";
import {
  createPostFX2, attachSceneDepth, patchFinalFrag, finalUniforms, createPassTimer,
  LUT_PRESETS, lutPresetForChapter, sharpenForScale,
} from "../game3d/postfx2.mjs";

const q = new URLSearchParams(location.search);
if (q.has("clean")) document.body.classList.add("clean");
T.ColorManagement.legacyMode = false;

const canvas = document.getElementById("view");
const renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance", preserveDrawingBuffer: true });
renderer.outputEncoding = T.sRGBEncoding;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;

// ---------------------------------------------------------------------------------------------
// Scene
// ---------------------------------------------------------------------------------------------
const THEMES = [
  ["#1f2b46", "#c9805a", "#2a2a22", "#16141f"], ["#16283a", "#4f7c8a", "#1c2a2a", "#0e1a22"],
  ["#2a1a1e", "#a8483a", "#2e1a1c", "#160c0e"], ["#1a2e2a", "#7fa088", "#23362a", "#101c16"],
  ["#28203a", "#c8a870", "#2c2640", "#14101e"], ["#2a2438", "#e0b0d0", "#3a2e4a", "#ffd0f0"],
  ["#101a2e", "#5a7ab0", "#1a2440", "#0c1220"], ["#0e0a16", "#3a2a5a", "#180f26", "#b080ff"],
  ["#0e1a2a", "#2a5a7a", "#10283c", "#80e0ff"], ["#1a0a0a", "#ff6a2a", "#24100c", "#100606"],
  ["#1a0a0a", "#c0401a", "#24100c", "#100606"],   // 10 = titan
];
const themeLut = (i) => lutPresetForChapter(i === 10 ? 0 : i, i === 10);
const mix = (a, b, k) => "#" + new T.Color(a).lerp(new T.Color(b), k).getHexString();
function gradientTexture(top, bottom) {
  const c = document.createElement("canvas"); c.width = 2; c.height = 256;
  const g = c.getContext("2d"), grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, top); grd.addColorStop(1, bottom);
  g.fillStyle = grd; g.fillRect(0, 0, 2, 256);
  const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
}
function groundTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#b8b8b8"; g.fillRect(0, 0, 256, 256);
  let s = 7; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 700; i++) {
    const v = 120 + Math.floor(rnd() * 135), r = 2 + rnd() * 14;
    g.fillStyle = `rgba(${v},${v * 0.97 | 0},${v * 0.92 | 0},0.35)`;
    const cx = rnd() * 256, cy = rnd() * 256;   // draw wrapped copies so the tile is seamless
    for (const ox of [-256, 0, 256]) for (const oy of [-256, 0, 256]) { g.beginPath(); g.arc(cx + ox, cy + oy, r, 0, Math.PI * 2); g.fill(); }
  }
  const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.encoding = T.sRGBEncoding; t.anisotropy = 4; return t;
}

const scene = new T.Scene();
scene.environment = envMap(renderer);
const hemi = new T.HemisphereLight(0xffffff, 0x222222, 1.25); scene.add(hemi);
const sun = new T.DirectionalLight(0xfff1dd, 2.0);
sun.position.set(-5, 10, 6); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); sun.shadow.radius = 3; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 30 });
scene.add(sun);
const rim = new T.DirectionalLight(0x99aaff, 0.8); rim.position.set(4, 5, -8); scene.add(rim);
const front = new T.DirectionalLight(0xffffff, 0.6); front.position.set(0, 4, 10); scene.add(front);

const groundMat = new T.MeshStandardMaterial({ roughness: 1, map: groundTexture() });
groundMat.map.repeat.set(16, 16);
const ground = new T.Mesh(new T.PlaneGeometry(140, 140), groundMat);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
const ring = new T.Mesh(new T.RingGeometry(3.4, 3.6, 64), new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08, depthWrite: false }));
ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.01, -0.6); ring.scale.set(1.25, 1, 1); scene.add(ring);

const capsule = new T.CapsuleGeometry(0.32, 0.6, 4, 12);
const head = new T.SphereGeometry(0.24, 16, 12);
const gemGeo = new T.OctahedronGeometry(0.09, 0);
const pauldron = bevelBox(0.3, 0.16, 0.3, 0.05, 1);
const belt = new T.TorusGeometry(0.33, 0.05, 6, 20);
const blade = bevelBox(0.07, 0.9, 0.02, 0.01, 1);
const shieldGeo = new T.CylinderGeometry(0.32, 0.32, 0.06, 20);
function unit(x, z, cloth, gemCol, enemy) {
  const g = new T.Group(); g.position.set(x, 0, z); scene.add(g);
  const add = (geo, mat, p, s = [1, 1, 1], r = [0, 0, 0]) => {
    const m = new T.Mesh(geo, mat); m.position.set(...p); m.scale.set(...s); m.rotation.set(...r);
    m.castShadow = true; m.receiveShadow = true; g.add(m); return m;
  };
  add(capsule, detailMaterial("cloth", cloth), [0, 0.62, 0]);
  add(belt, detailMaterial("leather"), [0, 0.62, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
  add(head, detailMaterial(enemy ? "bone" : "skin"), [0, 1.36, 0]);
  add(pauldron, detailMaterial("metal", 0x9aa0a8), [-0.33, 1.08, 0], [1, 1, 1], [0, 0, 0.3]);
  add(pauldron, detailMaterial("gold"), [0.33, 1.08, 0], [1, 1, 1], [0, 0, -0.3]);
  add(blade, detailMaterial("metal", 0xd0d4da), [0.48, 0.85, 0.12], [1, 1, 1], [0.3, 0, -0.2]);
  add(shieldGeo, detailMaterial("metal", 0x80868e), [-0.42, 0.7, 0.12], [1, 1, 1], [Math.PI / 2, 0, 0.25]);
  add(gemGeo, detailMaterial("gem", gemCol, { flatShading: true }), [0, 0.92, enemy ? -0.31 : 0.31]);
  if (enemy) {
    const eye = new T.MeshStandardMaterial({ color: 0xff3a2a, emissive: 0xff3a2a, emissiveIntensity: 1.5 });
    add(new T.SphereGeometry(0.04, 8, 6), eye, [-0.08, 1.4, -0.21]); add(new T.SphereGeometry(0.04, 8, 6), eye, [0.08, 1.4, -0.21]);
  }
  g.rotation.y = enemy ? Math.PI + x * 0.08 : -x * 0.08;
  return g;
}
[[-2.4, 0x2b3f6b, 0x3a8cff], [-0.8, 0x7a2e2e, 0x40ffb0], [0.8, 0x3a5a2a, 0xffc040], [2.4, 0xe8e0cc, 0xc02040]]
  .forEach(([x, c, gc]) => unit(x, 2.2, c, gc, false));
[[-1.9, 0x3a2a4a, 0xb080ff], [0, 0x4a2a20, 0xff6a2a], [1.9, 0x2a3a3a, 0x80e0ff]].forEach(([x, c, gc]) => unit(x, -3.4, c, gc, true));

// spell orb + additive halo (should neither get AO-darkened nor DoF-blurred)
const orb = new T.Mesh(new T.SphereGeometry(0.16, 16, 12), new T.MeshBasicMaterial({ color: 0xff8a3a }));
orb.position.set(0.4, 1.3, -0.6); scene.add(orb);
const halo = new T.Mesh(new T.SphereGeometry(0.32, 16, 12), new T.MeshBasicMaterial({ color: 0xff6a2a, transparent: true, opacity: 0.35, blending: T.AdditiveBlending, depthWrite: false }));
halo.position.copy(orb.position); scene.add(halo);

// props beside the units (contact AO), framing scenery behind (DoF / shafts silhouettes)
const propMats = [];
const wood = detailMaterial("wood", 0x8a6440), stone = detailMaterial("stone", 0x8a8680);
function prop(geo, mat, p, s = [1, 1, 1], r = [0, 0, 0]) {
  const m = new T.Mesh(geo, mat); m.position.set(...p); m.scale.set(...s); m.rotation.set(...r);
  m.castShadow = true; m.receiveShadow = true; m.userData.prop = true; scene.add(m); return m;
}
const crate = bevelBox(0.6, 0.6, 0.6, 0.04, 1);
prop(crate, wood, [-1.6, 0.3, 1.2], [1, 1, 1], [0, 0.4, 0]);
prop(crate, wood, [-1.55, 0.83, 1.25], [0.75, 0.75, 0.75], [0, 0.9, 0]);
prop(crate, wood, [1.65, 0.3, 1.0], [1, 1, 1], [0, -0.3, 0]);
prop(crate, wood, [-0.9, 0.3, -4.3], [1, 1, 1], [0, 0.2, 0]);
const rockGeo = new T.DodecahedronGeometry(0.5, 0);
prop(rockGeo, stone, [1.6, 0.18, 2.8], [0.8, 0.45, 0.7], [0.2, 0.5, 0]);
prop(rockGeo, stone, [-1.6, 0.2, -2.6], [1, 0.5, 0.8], [0, 1.1, 0.2]);
prop(rockGeo, stone, [3.2, 0.25, -3.2], [1.2, 0.6, 1.0]);
const propMat = new T.MeshStandardMaterial({ color: 0x16141f, roughness: 0.65 }); propMats.push(propMat);
const glowMat = new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false });
for (const [x, z, h] of [[-6, -7, 3], [-4.5, -11, 5], [5, -9, 4], [7, -6, 2.5], [1.5, -16, 7], [-10, -14, 6], [10, -16, 8]]) {
  const p = new T.Mesh(new T.BoxGeometry(0.6, h, 0.6), propMat); p.position.set(x, h / 2, z); p.castShadow = true; p.receiveShadow = true;
  p.userData.prop = true; scene.add(p);
  const c = new T.Mesh(new T.OctahedronGeometry(0.45, 0), glowMat); c.position.set(x, h + 0.6, z); c.scale.set(0.7, 1.4, 0.7); scene.add(c);
}
const trunk = new T.CylinderGeometry(0.18, 0.26, 2.4, 8), crown = new T.ConeGeometry(1.3, 3.6, 9);
const barkMat = new T.MeshStandardMaterial({ color: 0x4e3726, roughness: 0.9 }), leafMat = new T.MeshStandardMaterial({ color: 0x41582a, roughness: 0.85 });
let ts = 3; const trnd = () => ((ts = (ts * 9301 + 49297) % 233280) / 233280);
for (let i = 0; i < 26; i++) {
  const a = -Math.PI * 0.95 + trnd() * Math.PI * 0.9, r = 13 + trnd() * 16;
  const x = Math.cos(a) * r * 1.3, z = Math.sin(a) * r - 4, k = 0.8 + trnd() * 0.9;
  if (Math.abs(x) < 5 && z > -12) continue;
  const t = new T.Mesh(trunk, barkMat); t.position.set(x, 1.2 * k, z); t.scale.setScalar(k); t.castShadow = true; scene.add(t);
  const c = new T.Mesh(crown, leafMat); c.position.set(x, (2.4 + 1.6) * k, z); c.scale.setScalar(k); c.castShadow = true; scene.add(c);
}

let theme = +(q.get("theme") || 0);
function setTheme(i) {
  theme = i; const sc = THEMES[i];
  if (scene.background) scene.background.dispose();
  scene.background = gradientTexture(sc[0], sc[1]);
  scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
  hemi.color.set(mix(sc[1], "#ffffff", 0.35)); hemi.groundColor.set(sc[2]);
  groundMat.color.set(mix(sc[2], "#8c8680", 0.3));
  propMat.color.set(sc[3]);
  glowMat.color.set(mix(sc[1], "#ffffff", 0.3));
  leafMat.color.set(mix("#41582a", sc[1], 0.25));
}

// ---- camera: three3d.mjs resize() framing (portrait -> fov 62, pitch 34, fit both rows + HUD)
const camera = new T.PerspectiveCamera(50, 1, 0.1, 150);
const camTarget = new T.Vector3(0, 1.0, -0.5);
function frame(w, h) {
  camera.aspect = w / h;
  camera.fov = camera.aspect < 0.75 ? 62 : 50;
  const pitch = 34 * Math.PI / 180, pts = [];
  for (const sx of [-1, 1]) {
    for (const y of [0, 2.75]) { pts.push([sx * 2.45, y, 2.6]); pts.push([sx * 2.45, y, 2.0]); }
    for (const y of [0, 3.2]) pts.push([sx * 2.85, y, -3.6]);
  }
  pts.push([0, 3.75, -3.95]);
  const v = new T.Vector3();
  const fits = (dist) => {
    camera.position.set(camTarget.x, camTarget.y + Math.sin(pitch) * dist, camTarget.z + Math.cos(pitch) * dist);
    camera.lookAt(camTarget); camera.updateMatrixWorld(); camera.updateProjectionMatrix();
    return pts.every((p) => { v.set(p[0], p[1], p[2]).project(camera); return Math.abs(v.x) <= 0.95 && v.y <= 0.84 && v.y >= -0.84; });
  };
  let lo = 5, hi = 40;
  for (let i = 0; i < 22; i++) { const mid = (lo + hi) / 2; if (fits(mid)) hi = mid; else lo = mid; }
  fits(hi);
}

// ---------------------------------------------------------------------------------------------
// Mini pipeline: post.mjs createPipeline (copied shaders / target set-up) + postfx2 hooks
// ---------------------------------------------------------------------------------------------
const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const SRGB_GLSL = /* glsl */`
vec3 srgbToLinear(vec3 c) { return mix(pow(c * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c * 0.0773993808, vec3(lessThanEqual(c, vec3(0.04045)))); }
vec3 linearToSrgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }`;
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
// FINAL_FRAG: verbatim copy of post.mjs (tools/postfx2-preview-shot.cjs checks post.mjs still has the anchors)
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
// preview-only debug view of the composited AO term
const PATCHED = patchFinalFrag(FINAL_FRAG).replace("col *= mix(1.0, ao, pfxAOParams.x);",
  "col *= mix(1.0, ao, pfxAOParams.x);\n#ifdef PFX_DEBUG_AO\n    col = vec3(mix(1.0, ao, pfxAOParams.x));\n#endif");

function makeSceneTarget(w, h, samples, half) {
  const rt = new T.WebGLRenderTarget(w, h, {
    type: half ? T.HalfFloatType : T.UnsignedByteType, format: T.RGBAFormat, samples,
    depthBuffer: true, stencilBuffer: false, encoding: T.sRGBEncoding,
  });
  rt.isXRRenderTarget = true;
  rt.texture.internalFormat = half ? "RGBA16F" : "RGBA8";
  rt.texture.generateMipmaps = false;
  renderer.properties.get(rt).__ignoreDepthValues = true;
  return rt;
}

const timer = createPassTimer(renderer, { sync: false });
const params = { lift: [0, 0, 0], gamma: [1, 1, 1], gain: [1, 1, 1], saturation: 1.06, vignette: 0.2, dither: 1, bloomThreshold: 0.88, bloomKnee: 0.08, bloomRadius: 0.25 };
const finalMat = new T.ShaderMaterial({
  uniforms: Object.assign({
    tScene: { value: null }, tBloom: { value: null },
    lift: { value: new T.Vector3() }, gammaInv: { value: new T.Vector3(1, 1, 1) }, gain: { value: new T.Vector3(1, 1, 1) },
    saturation: { value: 1 }, vignette: { value: 0 }, dither: { value: 1 },
  }, finalUniforms()),
  defines: {}, vertexShader: VERT, fragmentShader: PATCHED, depthTest: false, depthWrite: false, toneMapped: false,
});
const quad = new FullScreenQuad(finalMat);
function setDefine(name, on) {
  if ((name in finalMat.defines) === on) return;
  if (on) finalMat.defines[name] = ""; else delete finalMat.defines[name];
  finalMat.needsUpdate = true;
}

let preset = null, sceneRT = null, bloom = null, pfx = null, rw = 1, rh = 1;
const cfg = { tier: "High", ssao: false, dof: false, rays: false, sharpen: 0, lut: "neutral", aoDebug: false, depth: null, identityLut: false, bloom: true };
function makeBloom() {
  const b = new UnrealBloomPass(new T.Vector2(256, 256), preset.bloomStrength, params.bloomRadius, params.bloomThreshold);
  for (const rt of [b.renderTargetBright, ...b.renderTargetsHorizontal, ...b.renderTargetsVertical]) rt.texture.type = T.HalfFloatType;
  b.highPassUniforms.texel = { value: new T.Vector2() };
  b.materialHighPassFilter.fragmentShader = BRIGHT_FRAG; b.materialHighPassFilter.needsUpdate = true;
  return b;
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
    const m = b.separableBlurMaterials[i]; fs.material = m;
    m.uniforms.colorTexture.value = inRT.texture; m.uniforms.direction.value = UnrealBloomPass.BlurDirectionX;
    renderer.setRenderTarget(b.renderTargetsHorizontal[i]); renderer.clear(); fs.render(renderer);
    m.uniforms.colorTexture.value = b.renderTargetsHorizontal[i].texture; m.uniforms.direction.value = UnrealBloomPass.BlurDirectionY;
    renderer.setRenderTarget(b.renderTargetsVertical[i]); renderer.clear(); fs.render(renderer);
    inRT = b.renderTargetsVertical[i];
  }
  const cm = b.compositeMaterial;
  cm.uniforms.bloomStrength.value = preset.bloomStrength; cm.uniforms.bloomRadius.value = params.bloomRadius;
  fs.material = cm;
  renderer.setRenderTarget(b.renderTargetsHorizontal[0]); renderer.clear(); fs.render(renderer);
  return b.renderTargetsHorizontal[0].texture;
}

function configure(o = {}) {
  Object.assign(cfg, o);
  const tierName = cfg.tier === "Off" ? "Low" : cfg.tier;
  preset = QUALITY[tierName];
  applyQuality(renderer, scene, preset);
  if (sceneRT) sceneRT.dispose(); if (bloom) bloom.dispose(); sceneRT = bloom = null;
  const dpr = window.devicePixelRatio || 1;
  renderer.setPixelRatio(Math.min(dpr, preset.pixelRatio));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  const v = renderer.getDrawingBufferSize(new T.Vector2()); rw = v.x; rh = v.y;
  frame(rw, rh);
  if (cfg.tier === "Off") { if (pfx) { pfx.dispose(); pfx = null; } return info(); }
  const samples = Math.min(preset.msaa, renderer.capabilities.maxSamples || 0);
  sceneRT = makeSceneTarget(rw, rh, samples, true);
  const wantDepth = cfg.depth != null ? cfg.depth : (cfg.ssao || cfg.dof || cfg.rays);
  if (wantDepth) attachSceneDepth(renderer, sceneRT, { bits: cfg.depthBits || 24 });
  if (cfg.bloom && preset.bloom) {
    bloom = makeBloom();
    bloom.setSize(Math.max(2, Math.round(rw * preset.bloomScale)), Math.max(2, Math.round(rh * preset.bloomScale)));
    bloom.highPassUniforms.texel.value.set(0.5 / rw, 0.5 / rh);
  }
  if (!pfx) pfx = createPostFX2(renderer, rw, rh, { tier: tierName, focusTarget: camTarget, timer });
  pfx.setTier(tierName);
  pfx.setSize(rw, rh, Math.min(dpr, preset.pixelRatio) / dpr);
  // explicit per-pass switches for the comparison shots (the game uses the tier table)
  pfx.ssao.enabled = cfg.ssao; pfx.ssao.setSamples(tierName === "Ultra" ? 12 : 8);
  pfx.dof.enabled = cfg.dof; pfx.rays.enabled = cfg.rays;
  pfx.sharpen.enabled = cfg.sharpen !== 0; pfx.sharpen.amount = cfg.sharpen === "auto" ? sharpenForScale(Math.min(dpr, preset.pixelRatio) / dpr) : +cfg.sharpen;
  pfx.lut.enabled = true;
  pfx.lut.setPreset(cfg.identityLut ? { saturation: 1.0000001 } : cfg.lut);
  setDefine("PFX_DEBUG_AO", cfg.aoDebug);
  return info();
}
function info() {
  return { tier: cfg.tier, size: `${rw}x${rh}`, samples: sceneRT ? sceneRT.samples : 0, depth: !!(sceneRT && sceneRT.depthTexture), pfx: pfx && cfg.tier !== "Off" ? pfx.info() : null };
}

const clearSave = new T.Color(), bgClear = new T.Color(), fogSave = new T.Color();
function draw() {
  if (cfg.tier === "Off") { renderer.setRenderTarget(null); renderer.render(scene, camera); return; }
  timer.begin("scene");
  renderer.getClearColor(clearSave);
  const clearA = renderer.getClearAlpha();
  bgClear.copy(clearSave).convertLinearToSRGB(); renderer.setClearColor(bgClear, clearA);
  const fog = scene.fog;
  if (fog) { fogSave.copy(fog.color); fog.color.convertLinearToSRGB(); }
  renderer.setRenderTarget(sceneRT);
  renderer.render(scene, camera);
  if (fog) fog.color.copy(fogSave);
  renderer.setClearColor(clearSave, clearA);
  timer.end();
  const autoClear = renderer.autoClear; renderer.autoClear = false;
  pfx.render(sceneRT, camera);                         // <- postfx2 hook 1
  setDefine("USE_BLOOM", !!bloom);
  if (bloom) { timer.begin("bloom"); finalMat.uniforms.tBloom.value = renderBloom(sceneRT.texture); timer.end(); }
  const u = finalMat.uniforms;
  u.tScene.value = sceneRT.texture;
  u.lift.value.fromArray(params.lift); u.gammaInv.value.set(1 / params.gamma[0], 1 / params.gamma[1], 1 / params.gamma[2]);
  u.gain.value.fromArray(params.gain); u.saturation.value = params.saturation; u.vignette.value = params.vignette; u.dither.value = params.dither;
  setDefine("USE_GRADE", !(params.vignette === 0 && params.saturation === 1));
  pfx.bindFinal(u, setDefine, sceneRT);                // <- postfx2 hook 2
  timer.begin("final");
  quad.material = finalMat; renderer.setRenderTarget(null); quad.render(renderer);
  timer.end();
  renderer.autoClear = autoClear;
}

// ---------------------------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------------------------
const lutSel = document.getElementById("lut"), themeSel = document.getElementById("theme");
for (const k of Object.keys(LUT_PRESETS)) lutSel.add(new Option("LUT: " + k, k));
THEMES.forEach((_, i) => themeSel.add(new Option(`theme ${i}: ${themeLut(i)}`, i)));
function syncUI() {
  for (const b of document.querySelectorAll("#ui button")) b.classList.toggle("on", !!cfg[b.dataset.k]);
  document.getElementById("tier").value = cfg.tier; lutSel.value = cfg.lut; themeSel.value = theme;
}
for (const b of document.querySelectorAll("#ui button")) b.onclick = () => {
  const k = b.dataset.k; configure({ [k]: k === "sharpen" ? (cfg.sharpen ? 0 : "auto") : !cfg[k] }); syncUI();
};
document.getElementById("tier").onchange = (e) => { configure({ tier: e.target.value }); syncUI(); };
lutSel.onchange = (e) => { configure({ lut: e.target.value }); syncUI(); };
themeSel.onchange = (e) => { setTheme(+e.target.value); configure({ lut: themeLut(+e.target.value) }); syncUI(); };
window.addEventListener("resize", () => configure());

let tAnim = 0, last = performance.now();
function loop(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now; tAnim += dt;
  const k = 1 + Math.sin(tAnim * 3) * 0.06; halo.scale.set(k, k, k);
  draw();
  document.getElementById("info").textContent = JSON.stringify(info()) + "  " + JSON.stringify(timer.results());
  if (!q.has("static")) requestAnimationFrame(loop);
}

// ---------------------------------------------------------------------------------------------
// Automation (tools/postfx2-preview-shot.cjs)
// ---------------------------------------------------------------------------------------------
function grabCanvas() { draw(); const c = document.createElement("canvas"); c.width = canvas.width; c.height = canvas.height; c.getContext("2d").drawImage(canvas, 0, 0); return c; }
function pixels(c) { return c.getContext("2d").getImageData(0, 0, c.width, c.height); }
const shots = new Map();
window.__shot = (name, o, themeIdx) => {
  if (themeIdx != null && themeIdx !== theme) setTheme(themeIdx);
  const i = configure(o);
  const c = grabCanvas(); shots.set(name, c);
  return { name, info: i, png: c.toDataURL("image/png") };
};
// Diff two stored shots. skyRows: fraction of rows at the top that are pure sky in this framing.
window.__diff = (a, b, skyRows = 0.06) => {
  const A = pixels(shots.get(a)), B = pixels(shots.get(b));
  if (A.width !== B.width || A.height !== B.height) return { error: "size mismatch" };
  const n = A.width * A.height, skyEnd = Math.floor(A.height * skyRows) * A.width;
  let sum = 0, max = 0, over2 = 0, skyMax = 0, darker = 0;
  for (let p = 0, i = 0; p < n; p++, i += 4) {
    let m = 0;
    for (let ch = 0; ch < 3; ch++) { const v = B.data[i + ch] - A.data[i + ch]; sum += Math.abs(v); m = Math.max(m, Math.abs(v)); if (v < -2) darker++; }
    if (m > max) max = m; if (m > 2) over2++; if (p < skyEnd && m > skyMax) skyMax = m;
  }
  return { a, b, meanAbs: +(sum / (n * 3)).toFixed(3), max, pctOver2: +(100 * over2 / n).toFixed(2), pctDarker: +(100 * darker / (n * 3)).toFixed(2), skyMax };
};
// Longest run of identical 8-bit values along a column in the sky (banding detector; dither breaks runs).
window.__banding = (name, x = 0.5) => {
  const P = pixels(shots.get(name)), col = Math.floor(P.width * x), h = Math.floor(P.height * 0.06);
  let best = 0, run = 1;
  for (let y = 1; y < h; y++) { const i = (y * P.width + col) * 4, j = ((y - 1) * P.width + col) * 4; if (P.data[i] === P.data[j] && P.data[i + 1] === P.data[j + 1]) run++; else run = 1; best = Math.max(best, run); }
  return best;
};
const px1 = new Uint8Array(4);
function syncGL() { const gl = renderer.getContext(); renderer.setRenderTarget(null); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px1); }
window.__time = (o, frames = 5) => {
  configure(o); draw(); syncGL(); draw(); syncGL();
  const ts = [];
  for (let i = 0; i < frames; i++) { const t0 = performance.now(); draw(); syncGL(); ts.push(performance.now() - t0); }
  ts.sort((a, b) => a - b);
  return { frameMs: +ts[Math.floor(frames / 2)].toFixed(1), info: info() };   // median
};
window.__sheet = (names, cols, cellW, labels) => {
  const first = shots.get(names[0]); const cellH = Math.round(cellW * first.height / first.width), pad = 22;
  const rows = Math.ceil(names.length / cols), c = document.createElement("canvas");
  c.width = cols * cellW; c.height = rows * (cellH + pad);
  const g = c.getContext("2d"); g.fillStyle = "#111"; g.fillRect(0, 0, c.width, c.height);
  g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
  names.forEach((n, i) => {
    const s = shots.get(n), x = (i % cols) * cellW, y = Math.floor(i / cols) * (cellH + pad);
    g.drawImage(s, x, y + pad, cellW, cellH);
    g.fillStyle = "#ddd"; g.font = "13px sans-serif"; g.fillText((labels && labels[i]) || n, x + 4, y + 15);
  });
  return c.toDataURL("image/png");
};
window.__crop = (name, x0, y0, x1, y1, scale = 2) => {   // fractions; nearest-neighbour zoom for artefact checks
  const s = shots.get(name), sx = Math.floor(x0 * s.width), sy = Math.floor(y0 * s.height), w = Math.floor((x1 - x0) * s.width), h = Math.floor((y1 - y0) * s.height);
  const c = document.createElement("canvas"); c.width = w * scale; c.height = h * scale;
  const g = c.getContext("2d"); g.imageSmoothingEnabled = false; g.drawImage(s, sx, sy, w, h, 0, 0, w * scale, h * scale);
  return c.toDataURL("image/png");
};
window.__crops = (names, x0, y0, x1, y1, scale = 2, labels) => {
  const tmp = names.map((n) => { const img = new Image(); img.src = window.__crop(n, x0, y0, x1, y1, scale); return img; });
  return Promise.all(tmp.map((im) => im.decode())).then(() => {
    const w = tmp[0].width, h = tmp[0].height, c = document.createElement("canvas"); c.width = w * tmp.length; c.height = h + 20;
    const g = c.getContext("2d"); g.fillStyle = "#111"; g.fillRect(0, 0, c.width, c.height);
    tmp.forEach((im, i) => { g.drawImage(im, i * w, 20); g.fillStyle = "#ddd"; g.font = "13px sans-serif"; g.fillText((labels && labels[i]) || names[i], i * w + 4, 15); });
    return c.toDataURL("image/png");
  });
};

setTheme(theme);
configure({
  tier: q.get("tier") || "High", ssao: q.has("ssao"), dof: q.has("dof"), rays: q.has("rays"),
  sharpen: q.has("sharpen") ? (q.get("sharpen") || "auto") : 0, lut: q.get("lut") || "neutral",
});
syncUI();
requestAnimationFrame(loop);
window.__ready = true;
