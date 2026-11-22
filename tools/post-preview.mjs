// Test bench for game3d/post.mjs: a battle-like scene (game lighting rig, gradient sky, fog, shadows,
// low-poly figures with metal kit + emissive gems, spell FX, glows) rendered direct vs the pipeline.
// Query: ?mode=direct|High|Medium|Low  &neutral  &nobloom  &static  &clean (hide UI)
import * as T from "three";
import { createPipeline, QUALITY, NEUTRAL, DEFAULT_PARAMS, deviceHint, gpuString } from "../game3d/post.mjs";
import { detailMaterial, envMap, bevelBox } from "../game3d/materials.mjs";

const q = new URLSearchParams(location.search);
if (q.has("clean")) document.body.classList.add("clean");
T.ColorManagement.legacyMode = false;

const canvas = document.getElementById("view");
const renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance", preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.outputEncoding = T.sRGBEncoding;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;

// ---- scene: mirrors three3d.mjs mount() for chapter 0
const sc = ["#1f2b46", "#c9805a", "#2a2a22", "#16141f"];
const mix = (a, b, k) => "#" + new T.Color(a).lerp(new T.Color(b), k).getHexString();
function gradientTexture(top, bottom) {
  const c = document.createElement("canvas"); c.width = 2; c.height = 256;
  const g = c.getContext("2d"), grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, top); grd.addColorStop(1, bottom);
  g.fillStyle = grd; g.fillRect(0, 0, 2, 256);
  const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
}
function groundTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = "#b8b8b8"; g.fillRect(0, 0, 128, 128);
  let s = 7; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 260; i++) {
    const v = 150 + Math.floor(rnd() * 105), r = 2 + rnd() * 9;
    g.fillStyle = `rgba(${v},${v},${v},0.35)`; g.beginPath(); g.arc(rnd() * 128, rnd() * 128, r, 0, Math.PI * 2); g.fill();
  }
  const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.encoding = T.sRGBEncoding; return t;
}

const scene = new T.Scene();
scene.background = gradientTexture(sc[0], sc[1]);
scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
scene.environment = envMap(renderer);
scene.add(new T.HemisphereLight(new T.Color(mix(sc[1], "#ffffff", 0.35)), new T.Color(sc[2]), 1.25));
const sun = new T.DirectionalLight(0xfff1dd, 2.0);
sun.position.set(-5, 10, 6); sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
scene.add(sun);
const rim = new T.DirectionalLight(0x99aaff, 0.8); rim.position.set(4, 5, -8); scene.add(rim);
const front = new T.DirectionalLight(0xffffff, 0.6); front.position.set(0, 4, 10); scene.add(front);

const groundMat = new T.MeshStandardMaterial({ color: new T.Color(mix(sc[2], "#8c8680", 0.3)), roughness: 1, map: groundTexture() });
groundMat.map.repeat.set(24, 24);
const ground = new T.Mesh(new T.PlaneGeometry(120, 120), groundMat);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
const ringMat = new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.08, depthWrite: false });
const ring = new T.Mesh(new T.RingGeometry(3.4, 3.6, 64), ringMat);
ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.01, -0.6); ring.scale.set(1.25, 1, 1); scene.add(ring);

// ---- figures
const capsule = new T.CapsuleGeometry(0.32, 0.6, 4, 10);
const head = new T.SphereGeometry(0.24, 14, 10);
const gemGeo = new T.OctahedronGeometry(0.09, 0);
const pauldron = bevelBox(0.3, 0.16, 0.3, 0.05, 1);
const blade = bevelBox(0.07, 0.9, 0.02, 0.01, 1);
const figures = [];
function figure(x, z, cloth, gemCol, enemy) {
  const g = new T.Group(); g.position.set(x, 0, z); scene.add(g);
  const add = (geo, mat, p, s = [1, 1, 1], r = [0, 0, 0]) => {
    const m = new T.Mesh(geo, mat); m.position.set(...p); m.scale.set(...s); m.rotation.set(...r);
    m.castShadow = true; m.receiveShadow = true; g.add(m); return m;
  };
  add(capsule, detailMaterial("cloth", cloth), [0, 0.62, 0]);
  add(head, detailMaterial(enemy ? "bone" : "skin"), [0, 1.36, 0]);
  add(pauldron, detailMaterial("metal", 0x9aa0a8), [-0.33, 1.08, 0], [1, 1, 1], [0, 0, 0.3]);
  add(pauldron, detailMaterial("gold"), [0.33, 1.08, 0], [1, 1, 1], [0, 0, -0.3]);
  add(blade, detailMaterial("metal", 0xd0d4da), [0.48, 0.85, 0.12], [1, 1, 1], [0.3, 0, -0.2]);
  add(gemGeo, detailMaterial("gem", gemCol, { flatShading: true }), [0, 0.92, enemy ? -0.31 : 0.31]);
  if (enemy) { // glowing eyes (emissiveIntensity 1.5 like the game's hollow eyes)
    const eye = new T.MeshStandardMaterial({ color: 0xff3a2a, emissive: 0xff3a2a, emissiveIntensity: 1.5 });
    add(new T.SphereGeometry(0.04, 8, 6), eye, [-0.08, 1.4, -0.21]); add(new T.SphereGeometry(0.04, 8, 6), eye, [0.08, 1.4, -0.21]);
  }
  g.rotation.y = enemy ? Math.PI : 0;
  figures.push(g);
  return g;
}
[[-2.4, 0x2b3f6b, 0x3a8cff], [-0.8, 0x7a2e2e, 0x40ffb0], [0.8, 0x3a5a2a, 0xffc040], [2.4, 0xe8e0cc, 0xc02040]]
  .forEach(([x, c, gc]) => figure(x, 1.2, c, gc, false));
[[-1.6, 0x3a2a4a, 0xb080ff], [0, 0x4a2a20, 0xff6a2a], [1.6, 0x2a3a3a, 0x80e0ff]].forEach(([x, c, gc]) => figure(x, -2.6, c, gc, true));

// ---- spell FX: unlit orb + additive halo + a trail of sparks
const orb = new T.Mesh(new T.SphereGeometry(0.18, 16, 12), new T.MeshBasicMaterial({ color: 0xff8a3a }));
orb.position.set(0.4, 1.2, -0.6); scene.add(orb);
const halo = new T.Mesh(new T.SphereGeometry(0.34, 16, 12), new T.MeshBasicMaterial({ color: 0xff6a2a, transparent: true, opacity: 0.35, blending: T.AdditiveBlending, depthWrite: false }));
halo.position.copy(orb.position); scene.add(halo);
for (let i = 0; i < 8; i++) {
  const s = new T.Mesh(new T.OctahedronGeometry(0.04, 0), new T.MeshBasicMaterial({ color: 0xffe0a0 }));
  s.position.set(0.4 - i * 0.18, 1.2 - i * 0.04, -0.6 + i * 0.22); scene.add(s);
}
// healing ring under an ally (additive, cyan)
const heal = new T.Mesh(new T.RingGeometry(0.45, 0.6, 40), new T.MeshBasicMaterial({ color: 0x60ffd0, transparent: true, opacity: 0.6, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide }));
heal.rotation.x = -Math.PI / 2; heal.position.set(-0.8, 0.02, 1.2); scene.add(heal);

// ---- scenery: pillars with glow crystals, some reaching into the sky
const propMat = new T.MeshStandardMaterial({ color: new T.Color(sc[3]), roughness: 0.65 });
const glowMat = new T.MeshBasicMaterial({ color: new T.Color(mix(sc[1], "#ffffff", 0.3)), transparent: true, opacity: 0.7, depthWrite: false });
for (const [x, z, h] of [[-7, -7, 3], [-4.5, -11, 5], [5, -9, 4], [8, -6, 2.5], [1.5, -16, 7], [-10, -14, 6]]) {
  const p = new T.Mesh(new T.BoxGeometry(0.6, h, 0.6), propMat); p.position.set(x, h / 2, z); p.castShadow = true; p.receiveShadow = true;
  p.userData.prop = true; scene.add(p);
  const c = new T.Mesh(new T.OctahedronGeometry(0.45, 0), glowMat); c.position.set(x, h + 0.6, z); c.scale.set(0.7, 1.4, 0.7); scene.add(c);
}

// ---- camera: same framing maths as three3d.mjs resize()
const camera = new T.PerspectiveCamera(50, 1, 0.1, 150);
function frame(w, h) {
  camera.aspect = w / h;
  const halfW = 3.25, halfH = 3.7, tanV = Math.tan(camera.fov * Math.PI / 360);
  const dist = Math.max(halfW / (tanV * camera.aspect), halfH / tanV);
  const target = new T.Vector3(0, 0.9, -0.5), pitch = 36 * Math.PI / 180;
  camera.position.set(target.x, target.y + Math.sin(pitch) * dist, target.z + Math.cos(pitch) * dist);
  camera.lookAt(target); camera.updateProjectionMatrix();
}

// ---- modes
let pipe = null, mode = "direct", lastTier = "High";
const opts = { neutral: q.has("neutral"), nobloom: q.has("nobloom"), sameShadows: false };
function applyParams() {
  if (!pipe) return;
  Object.assign(pipe.params, opts.neutral ? NEUTRAL : { lift: DEFAULT_PARAMS.lift, gamma: DEFAULT_PARAMS.gamma, gain: DEFAULT_PARAMS.gain, saturation: DEFAULT_PARAMS.saturation, vignette: DEFAULT_PARAMS.vignette });
  pipe.params.bloomStrength = opts.nobloom ? 0 : null;
}
function setMode(m, o = {}) {
  Object.assign(opts, o);
  if (pipe) { pipe.dispose(); pipe = null; }
  mode = m;
  if (m !== "direct") {
    lastTier = m;
    pipe = createPipeline(renderer, scene, camera, { quality: m, applyShadows: !opts.sameShadows });
    applyParams();
  } else {
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    sun.shadow.mapSize.set(1024, 1024); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    scene.traverse((o2) => { if (o2.userData.prop) o2.castShadow = true; if (o2.material) o2.material.needsUpdate = true; });
  }
  resize();
  for (const b of document.querySelectorAll("#ui button")) b.classList.toggle("on", b.dataset.mode === m);
  document.getElementById("neutral").checked = opts.neutral;
  document.getElementById("nobloom").checked = opts.nobloom;
}
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  if (pipe) pipe.setSize(w, h); else renderer.setSize(w, h, false);
  frame(w, h);
}
window.addEventListener("resize", resize);

let t = 0, lastNow = performance.now(), fpsAcc = 0, fpsN = 0, fpsShow = 0;
function draw() {
  const k = 1 + Math.sin(t * 3) * 0.06;
  halo.scale.set(k, k, k);
  if (pipe) pipe.render(1 / 60); else renderer.render(scene, camera);
}
function loop(now) {
  const dt = Math.min(0.1, (now - lastNow) / 1000); lastNow = now;
  if (document.getElementById("spin").checked && !q.has("static")) { t += dt; for (const f of figures) f.rotation.y += dt * 0.3; }
  draw();
  fpsAcc += dt; fpsN++; if (fpsAcc > 0.5) { fpsShow = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; }
  const i = pipe ? pipe.info() : { quality: "direct" };
  document.getElementById("info").textContent = `${mode}  ${JSON.stringify(i)}  ${fpsShow.toFixed(0)} fps  hint=${deviceHint(renderer)}  gpu=${gpuString(renderer)}`;
  if (!q.has("static")) requestAnimationFrame(loop);
}

for (const b of document.querySelectorAll("#ui button")) b.onclick = () => setMode(b.dataset.mode);
document.getElementById("neutral").onchange = (e) => { opts.neutral = e.target.checked; applyParams(); };
document.getElementById("nobloom").onchange = (e) => { opts.nobloom = e.target.checked; applyParams(); };
window.addEventListener("keydown", (e) => { if (e.key === "t" || e.key === "T") setMode(mode === "direct" ? lastTier : "direct"); });

// ---- automation hooks (tools/post-preview-shot.cjs)
function grab() {
  draw();
  const w = canvas.width, h = canvas.height;
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const g = c.getContext("2d"); g.drawImage(canvas, 0, 0);
  return g.getImageData(0, 0, w, h);
}
// Diff the direct render against the pipeline at `tier` with neutral grade and bloom off.
window.__diff = (tier = "High") => {
  setMode("direct"); draw(); const a = grab();
  setMode(tier, { neutral: true, nobloom: true, sameShadows: true }); draw(); const b = grab();
  opts.sameShadows = false;
  if (a.width !== b.width || a.height !== b.height) return { error: `size mismatch ${a.width}x${a.height} vs ${b.width}x${b.height}` };
  const n = a.width * a.height, d = new ImageData(a.width, a.height);
  let sum = 0, max = 0, over2 = 0, over8 = 0, sumSigned = 0;
  for (let i = 0; i < n * 4; i += 4) {
    let m = 0;
    for (let ch = 0; ch < 3; ch++) { const v = b.data[i + ch] - a.data[i + ch]; sumSigned += v; const av = Math.abs(v); sum += av; if (av > m) m = av; }
    if (m > max) max = m; if (m > 2) over2++; if (m > 8) over8++;
    const amp = Math.min(255, m * 16);
    d.data[i] = amp; d.data[i + 1] = amp; d.data[i + 2] = amp; d.data[i + 3] = 255;
  }
  const c = document.createElement("canvas"); c.width = a.width; c.height = a.height; c.getContext("2d").putImageData(d, 0, 0);
  return { tier, size: `${a.width}x${a.height}`, meanAbs: +(sum / (n * 3)).toFixed(3), meanSigned: +(sumSigned / (n * 3)).toFixed(3), max,
    pctOver2: +(100 * over2 / n).toFixed(3), pctOver8: +(100 * over8 / n).toFixed(3), png: c.toDataURL("image/png") };
};
window.__setMode = (m, o) => { setMode(m, o || {}); draw(); return pipe ? pipe.info() : { quality: "direct" }; };
window.__QUALITY = QUALITY;

setMode(q.get("mode") || "direct");
requestAnimationFrame(loop);
window.__ready = true;
