// Renders one battle arena from game3d/scenery.mjs with the game's light rig and placeholder
// capsules where units stand. Query: ?ch=0..9 | ch=titan, q=high|medium|low, cam=battle|old|side|top,
// t=<seconds of animation>, hud=0.
import * as T from "three";
import { envMap } from "../game3d/materials.mjs";
import { buildArena } from "../game3d/scenery.mjs";

T.ColorManagement.legacyMode = false;
const qs = new URLSearchParams(location.search);
const titan = qs.get("ch") === "titan";
const chapter = titan ? 0 : +(qs.get("ch") || 0);
const quality = qs.get("q") || "high";
const camMode = qs.get("cam") || "battle";
const tSec = +(qs.get("t") || 3);

const canvas = document.getElementById("view");
const W = innerWidth, H = innerHeight;
const renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1));
renderer.setSize(W, H, false);
renderer.outputEncoding = T.sRGBEncoding;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;

// Same colours as three3d.mjs sceneColors() for the light rig.
const SC = [
  ["#1f2b46", "#c9805a", "#2a2a22", "#16141f"], ["#16283a", "#4f7c8a", "#1c2a2a", "#0e1a22"],
  ["#2a1a1e", "#a8483a", "#2e1a1c", "#160c0e"], ["#1a2e2a", "#7fa088", "#23362a", "#101c16"],
  ["#28203a", "#c8a870", "#2c2640", "#14101e"], ["#2a2438", "#e0b0d0", "#3a2e4a", "#ffd0f0"],
  ["#101a2e", "#5a7ab0", "#1a2440", "#0c1220"], ["#0e0a16", "#3a2a5a", "#180f26", "#b080ff"],
  ["#0e1a2a", "#2a5a7a", "#10283c", "#80e0ff"], ["#1a0a0a", "#ff6a2a", "#24100c", "#100606"],
];
const sc = titan ? ["#1a0a0a", "#c0401a", "#24100c", "#100606"] : SC[chapter];
const mix = (a, b, k) => new T.Color(a).lerp(new T.Color(b), k);

const scene = new T.Scene();
scene.background = new T.Color(sc[1]);
scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
scene.environment = envMap(renderer);
scene.add(new T.HemisphereLight(mix(sc[1], "#ffffff", 0.35), new T.Color(sc[2]), 1.25));
const sun = new T.DirectionalLight(0xfff1dd, 2.0);
sun.position.set(-5, 10, 6); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 34 });
scene.add(sun);
const rim = new T.DirectionalLight(0x99aaff, 0.8); rim.position.set(4, 5, -8); scene.add(rim);
const front = new T.DirectionalLight(0xffffff, 0.6); front.position.set(0, 4, 10); scene.add(front);

const t0 = performance.now();
const arena = buildArena(scene, { chapter, titan, quality, renderer });
const buildMs = performance.now() - t0;
for (const name of (qs.get("hide") || "").split(",")) { const o = name && arena.root.getObjectByName(name); if (o) o.visible = false; }

// Placeholder units: 5 allies (z=+1.6), 5 enemies (z=-2.6) or the Titan (z=-3.2).
const units = new T.Group();
const capsule = new T.CapsuleGeometry(0.32, 0.9, 4, 12);
const allyCols = ["#3a7bd5", "#e0c040", "#c84a4a", "#4ab86a", "#9a5ad0"];
const enemyCols = ["#6a2a2a", "#3a3a4a", "#8a6a3a", "#2a5a3a", "#5a2a5a"];
const mkUnit = (x, z, c, s = 1) => {
  const m = new T.Mesh(capsule, new T.MeshStandardMaterial({ color: c, roughness: 0.6 }));
  m.position.set(x, 0.77 * s, z); m.scale.setScalar(s); m.castShadow = true; m.receiveShadow = true; units.add(m);
};
// Layout (art-director update): allies z 2.0 / 2.5 alternating, |x| <= 1.85; enemies z -3.2 / -3.7, |x| <= 2.0; Titan z -3.8.
for (let i = 0; i < 5; i++) mkUnit(-1.85 + i * 0.925, i % 2 ? 2.5 : 2.0, allyCols[i]);
if (titan) mkUnit(0, -3.8, "#5a3a3a", 2.6);
else for (let i = 0; i < 5; i++) mkUnit(-2.0 + i * 1.0, i % 2 ? -3.7 : -3.2, enemyCols[i]);
scene.add(units);

const camera = new T.PerspectiveCamera(62, W / H, 0.1, 150);
const target = new T.Vector3(0, 1.0, -0.5);
if (camMode === "side") { camera.position.set(28, 6, -16); target.set(0, 0, -16); }
else if (camMode === "top") { camera.position.set(0, 60, -14.01); target.set(0, 0, -14); camera.fov = 60; }
else if (camMode === "old") { // the pre-refit three3d.mjs camera (fov 50, distance fitted to aspect)
  camera.fov = 50; target.set(0, 0.9, -0.5);
  const halfW = 3.25, halfH = 3.7, tanV = Math.tan(camera.fov * Math.PI / 360);
  const dist = Math.max(halfW / (tanV * camera.aspect), halfH / tanV), pitch = 36 * Math.PI / 180;
  camera.position.set(target.x, target.y + Math.sin(pitch) * dist, target.z + Math.cos(pitch) * dist);
} else { // battle camera after the portrait refit: fov 62, pitch 34°, ≈ (0, 7.4, 9.5) → (0, 1, -0.5)
  const pitch = 34 * Math.PI / 180, dist = 10 / Math.cos(pitch);
  camera.position.set(0, 1.0 + Math.sin(pitch) * dist, -0.5 + Math.cos(pitch) * dist);
}
camera.lookAt(target); camera.updateProjectionMatrix();

function measure() {
  renderer.info.autoReset = false;
  units.visible = false;
  renderer.info.reset(); renderer.render(scene, camera);
  const sceneryOnly = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, points: renderer.info.render.points };
  units.visible = true;
  renderer.info.reset(); renderer.render(scene, camera);
  const total = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles };
  renderer.info.autoReset = true;
  return { sceneryOnly, total };
}

arena.update(tSec);
renderer.render(scene, camera); // compile + warm up
const info = { chapter: titan ? "titan" : chapter, quality, cam: camMode, buildMs: Math.round(buildMs), stats: arena.stats, ...measure(),
  memory: { geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures }, cameraPos: camera.position.toArray().map((v) => +v.toFixed(2)) };
window.__previewInfo = info;
if (qs.get("hud") !== "0") document.getElementById("hud").textContent =
  `${titan ? "Titan" : "Ch " + chapter} · ${arena.stats.theme} · ${quality} · calls ${info.sceneryOnly.calls} · tris ${(info.sceneryOnly.triangles / 1000).toFixed(1)}k`;

if (qs.has("anim")) {
  const start = performance.now();
  const loop = () => { arena.update(tSec + (performance.now() - start) / 1000); renderer.render(scene, camera); requestAnimationFrame(loop); };
  loop();
}
if (qs.has("dispose")) { // dispose test: everything created must be freed
  const before = { ...renderer.info.memory };
  arena.dispose();
  scene.remove(units); renderer.render(scene, camera);
  window.__previewInfo.afterDispose = { before, after: { ...renderer.info.memory } };
}
window.__ready = true;
