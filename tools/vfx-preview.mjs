// Test bench for game3d/vfx.mjs: a battle-like portrait scene (game light rig, dark ground, dummy
// units on the game's ally/enemy rows, the game's battle camera) rendered through game3d/post.mjs
// (UnrealBloomPass bloom on display brightness, as in the game).
// Query: ?tier=High &clean (hide UI) &static (no auto loop; driven by window.__run)
import * as T from "three";
import { createPipeline } from "../game3d/post.mjs";
import { createVFX, VFX_ELEMENTS } from "../game3d/vfx.mjs";

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

// ---- scene: the game's rig (three3d.mjs mount), darker arena
const sc = ["#141a2a", "#3a3040", "#1c1a1c", "#0e0c12"];
const mix = (a, b, k) => "#" + new T.Color(a).lerp(new T.Color(b), k).getHexString();
function gradientTexture(top, bottom) {
  const c = document.createElement("canvas"); c.width = 2; c.height = 256;
  const g = c.getContext("2d"), grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, top); grd.addColorStop(1, bottom); g.fillStyle = grd; g.fillRect(0, 0, 2, 256);
  const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
}
function groundTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d"); g.fillStyle = "#b8b8b8"; g.fillRect(0, 0, 128, 128);
  let s = 7; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 260; i++) { const v = 150 + Math.floor(rnd() * 105), r = 2 + rnd() * 9; g.fillStyle = `rgba(${v},${v},${v},0.35)`; g.beginPath(); g.arc(rnd() * 128, rnd() * 128, r, 0, Math.PI * 2); g.fill(); }
  const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.encoding = T.sRGBEncoding; return t;
}
const scene = new T.Scene();
scene.background = gradientTexture(sc[0], sc[1]);
scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
scene.add(new T.HemisphereLight(new T.Color(mix(sc[1], "#ffffff", 0.35)), new T.Color(sc[2]), 1.25));
const sun = new T.DirectionalLight(0xfff1dd, 2.0);
sun.position.set(-5, 10, 6); sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 30 });
scene.add(sun);
const rim = new T.DirectionalLight(0x99aaff, 0.8); rim.position.set(4, 5, -8); scene.add(rim);
const front = new T.DirectionalLight(0xffffff, 0.6); front.position.set(0, 4, 10); scene.add(front);
const groundMat = new T.MeshStandardMaterial({ color: new T.Color(mix(sc[2], "#8c8680", 0.12)), roughness: 1, map: groundTexture() });
groundMat.map.repeat.set(24, 24);
const ground = new T.Mesh(new T.PlaneGeometry(120, 120), groundMat);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

// ---- dummy units (~1.9 tall)
const bodyGeo = new T.CapsuleGeometry(0.28, 0.9, 4, 12), headGeo = new T.SphereGeometry(0.22, 16, 12);
function dummy(x, z, color) {
  const g = new T.Group(), m = new T.MeshStandardMaterial({ color, roughness: 0.7 });
  const b = new T.Mesh(bodyGeo, m); b.position.y = 0.73; b.castShadow = true;
  const h = new T.Mesh(headGeo, m); h.position.y = 1.62; h.castShadow = true;
  g.add(b, h); g.position.set(x, 0, z); scene.add(g); return g;
}
const allies = [-1.6, 0, 1.6].map((x) => dummy(x, 2.3, "#6c7a94"));
const enemies = [-1.8, 0, 1.8].map((x) => dummy(x, -3.4, "#94706c"));
const caster = allies[1], target = enemies[1];
const centre = (u) => u.position.clone().setY(1.05);

// ---- camera: three3d.mjs resize() (pitch 34, fit both rows, portrait lens 62)
const camera = new T.PerspectiveCamera(50, 1, 0.1, 150);
const camTarget = new T.Vector3(0, 1.0, -0.5);
let pipe = null, tier = q.get("tier") || "High", vfx = null, speedMul = 1;
function resize() {
  const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
  if (pipe) pipe.setSize(w, h); else renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.fov = camera.aspect < 0.75 ? 62 : 50;
  const pitch = 34 * Math.PI / 180, pts = [];
  for (const sx of [-1, 1]) { for (const y of [0, 2.75]) { pts.push([sx * 2.45, y, 2.6]); pts.push([sx * 2.45, y, 2.0]); } for (const y of [0, 3.2]) pts.push([sx * 2.85, y, -3.6]); }
  pts.push([0, 3.75, -3.95]);
  const v = new T.Vector3();
  const fits = (d) => { camera.position.set(camTarget.x, camTarget.y + Math.sin(pitch) * d, camTarget.z + Math.cos(pitch) * d); camera.lookAt(camTarget); camera.updateMatrixWorld(); camera.updateProjectionMatrix(); return pts.every((p) => { v.set(p[0], p[1], p[2]).project(camera); return Math.abs(v.x) <= 0.95 && v.y <= 0.84 && v.y >= -0.84; }); };
  let lo = 5, hi = 40; for (let i = 0; i < 22; i++) { const mid = (lo + hi) / 2; if (fits(mid)) hi = mid; else lo = mid; } fits(hi);
}
function setTier(name) {
  tier = name;
  if (pipe) { pipe.dispose(); pipe = null; }
  try { pipe = createPipeline(renderer, scene, camera, { quality: tier }); } catch (e) { console.warn("no pipeline", e); }
  if (vfx) vfx.dispose();
  vfx = createVFX(scene, camera, { quality: tier, speed: () => speedMul });
  resize();
}

// ---- effect catalogue: name -> { run(el), t (key time for stills), focus() -> world point, els }
const ALL = VFX_ELEMENTS;
const kinds = ["poison", "burn", "bleed", "freeze", "stun", "curse"];
const shoot = (kind) => (el) => vfx.projectile(centre(caster).add(new T.Vector3(0.25, 0.1, -0.3)), centre(target), el, kind).then(() => vfx.impact(centre(target), el));
const FX = {
  castCircle: { run: (el) => vfx.castCircle(caster.position, el), t: 0.4, focus: () => caster.position.clone().setY(0.6) },
  charge: { run: (el) => vfx.charge(caster, el, 0.9), t: 0.65, focus: () => centre(caster) },
  orb: { run: shoot("orb"), t: 0.28, focus: () => new T.Vector3(0, 1.6, -0.8) },
  bolt: { run: shoot("bolt"), t: 0.16, focus: () => new T.Vector3(0, 1.2, -0.8) },
  arrow: { run: shoot("arrow"), t: 0.2, focus: () => new T.Vector3(0, 1.4, -0.8) },
  shard: { run: shoot("shard"), t: 0.18, focus: () => new T.Vector3(0, 1.2, -0.8) },
  slash: { run: (el) => vfx.slash(centre(target), el, new T.Vector3(1, 0, -0.3)), t: 0.11, focus: () => centre(target) },
  impact: { run: (el) => vfx.impact(centre(target), el), t: 0.13, focus: () => centre(target) },
  impactCrit: { run: (el) => { vfx.impact(centre(target), el, { crit: true }); vfx.critFlash(); }, t: 0.1, focus: () => centre(target) },
  aoe: { run: (el) => vfx.aoe(new T.Vector3(0, 0, -3.4), 2.2, el), t: 0.5, focus: () => new T.Vector3(0, 0.9, -3.4) },
  beam: { run: (el) => vfx.beam(centre(caster).add(new T.Vector3(0.25, 0.1, -0.3)), centre(target), el), t: 0.35, focus: () => new T.Vector3(0, 1.0, -0.6) },
  shockwave: { run: (el) => vfx.shockwave(target.position, el, 2.6), t: 0.18, focus: () => target.position.clone().setY(0.4) },
  heal: { run: () => vfx.heal(allies[0].position), t: 0.5, focus: () => allies[0].position.clone().setY(1), els: ["-"] },
  buff: { run: () => vfx.buff(allies[2].position, true), t: 0.35, focus: () => allies[2].position.clone().setY(1), els: ["-"] },
  debuff: { run: () => vfx.buff(enemies[2].position, false), t: 0.35, focus: () => enemies[2].position.clone().setY(1), els: ["-"] },
  shield: { run: () => vfx.shield(allies[1].position), t: 0.32, focus: () => allies[1].position.clone().setY(1), els: ["-"] },
  debuffTick: { run: (k) => vfx.debuffTick(target.position, k), t: 0.25, focus: () => centre(target), els: kinds },
  deathFade: { run: (el) => vfx.deathFade(target.position, el), t: 0.6, focus: () => centre(target) },
  titanSlam: { run: (el) => vfx.titanSlam(new T.Vector3(0, 0, -3.0), el), t: 0.16, focus: () => new T.Vector3(0, 0.5, -3.0) },
};

let lastRun = { fx: "impact", el: "flame" };
function render() { if (pipe) pipe.render(1 / 60); else renderer.render(scene, camera); }
// Deterministic still: clear, fire the effect, step `t` seconds at 60 Hz, render once.
window.__run = (fx, el, t, tierName) => {
  if (tierName && tierName !== tier) setTier(tierName);
  vfx.clear();
  const F = FX[fx];
  F.run(el);
  const steps = Math.round((t == null ? F.t : t) * 60);
  let peakDC = 0;
  for (let i = 0; i < steps; i++) { vfx.update(1 / 60); peakDC = Math.max(peakDC, vfx.stats().drawCalls); }
  render();
  const p = F.focus().project(camera);
  const r = canvas.getBoundingClientRect();
  return { cx: (p.x * 0.5 + 0.5) * r.width, cy: (-p.y * 0.5 + 0.5) * r.height, stats: vfx.stats(), peakDC };
};
window.__catalog = () => Object.fromEntries(Object.entries(FX).map(([k, v]) => [k, { t: v.t, els: v.els || ALL }]));
// Budget probe: run every effect for every element at once-ish (a busy frame) and report.
window.__stress = (tierName) => {
  if (tierName && tierName !== tier) setTier(tierName);
  vfx.clear();
  FX.aoe.run("flame"); FX.orb.run("tide"); FX.slash.run("gale"); FX.impactCrit.run("light"); FX.heal.run(); FX.shield.run(); FX.beam.run("shadow"); FX.castCircle.run("light");
  let peak = null, dc = 0;
  for (let i = 0; i < 40; i++) { vfx.update(1 / 60); const s = vfx.stats(); dc = Math.max(dc, s.drawCalls); if (!peak || s.sprites.over > peak.sprites.over) peak = s; }
  render();
  return { drawCallsPeak: dc, peak, renderInfo: renderer.info.render };
};

// ---- UI
const elsBox = document.getElementById("els"), fxBox = document.getElementById("fx"), info = document.getElementById("info");
for (const el of ALL) { const b = document.createElement("button"); b.textContent = el; b.onclick = () => { lastRun.el = el; fire(); }; elsBox.appendChild(b); }
for (const k of Object.keys(FX)) { const b = document.createElement("button"); b.textContent = k; b.onclick = () => { lastRun.fx = k; fire(); }; fxBox.appendChild(b); }
document.getElementById("tier").onchange = (e) => setTier(e.target.value);
document.getElementById("speed").onchange = (e) => { speedMul = +e.target.value; };
function fire() {
  const F = FX[lastRun.fx], el = F.els ? (F.els.includes(lastRun.el) ? lastRun.el : F.els[0]) : lastRun.el;
  F.run(el);
  for (const b of document.querySelectorAll("#ui button")) b.classList.toggle("on", b.textContent === lastRun.fx || b.textContent === lastRun.el);
}

setTier(tier);
addEventListener("resize", resize);
const isStatic = q.has("static");
let last = performance.now(), acc = 0;
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (!isStatic) {
    acc += dt * speedMul;
    if (document.getElementById("loop").checked && acc > 1.6) { acc = 0; fire(); }
    vfx.update(dt);
    render();
    const s = vfx.stats();
    info.textContent = `${tier}  draw calls ${s.drawCalls}/${s.maxDrawCalls}  sprites ${s.sprites.over}+${s.sprites.under}  ribbons ${s.ribbons.active}  walls ${s.walls.active}`;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
window.__ready = true;
