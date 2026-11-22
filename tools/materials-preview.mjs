// Renders every material role (default / dark / light tints), the geometry helpers and the raw
// procedural textures under the game's lighting rig + the generated env map.
import * as T from "three";
import { proceduralTexture, detailMaterial, envMap, bevelBox, roundedPlate, rivetRing, strap, TEXTURE_KINDS, MATERIAL_ROLES } from "../game3d/materials.mjs";

const W = 1400, H = 900;
const canvas = document.getElementById("view");
const renderer = new T.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(W, H, false);
renderer.outputEncoding = T.sRGBEncoding;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;

const scene = new T.Scene();
scene.background = new T.Color("#1f2b46");
// the game's rig (chapter 0 colours)
scene.add(new T.HemisphereLight(new T.Color("#c9805a").lerp(new T.Color("#ffffff"), 0.35), new T.Color("#2a2a22"), 1.25));
const sun = new T.DirectionalLight(0xfff1dd, 2.0); sun.position.set(-5, 10, 6); scene.add(sun);
const rim = new T.DirectionalLight(0x99aaff, 0.8); rim.position.set(4, 5, -8); scene.add(rim);
const front = new T.DirectionalLight(0xffffff, 0.6); front.position.set(0, 4, 10); scene.add(front);
const useEnv = !/noenv/.test(location.search);
if (useEnv) scene.environment = envMap(renderer, { size: /env256/.test(location.search) ? 256 : 64 });

const camera = new T.PerspectiveCamera(24, W / H, 0.1, 100);
camera.position.set(0, 0.3, 17.5); camera.lookAt(0, 0.05, 0); camera.updateMatrixWorld();

const labels = document.getElementById("labels");
const label = (text, pos) => {
  const v = pos.clone().project(camera);
  const d = document.createElement("div");
  d.textContent = text;
  d.style.left = ((v.x + 1) / 2 * W) + "px"; d.style.top = ((1 - v.y) / 2 * H) + "px";
  labels.appendChild(d);
};

const tints = {
  dark: { metal: 0x3c4048, gold: 0x8a5a2a, leather: 0x231a15, cloth: 0x1c2440, wood: 0x3a2618, stone: 0x26262a, gem: 0xc02040, bone: 0x8f8670, skin: 0x5a3a28, hair: 0x15110e },
  light: { metal: 0xe0e4ea, gold: 0xf2d68a, leather: 0xc9a27a, cloth: 0xe8e0cc, wood: 0xd0a878, stone: 0xb8b4ac, gem: 0x40ffb0, bone: 0xf4eedc, skin: 0xf0c8a8, hair: 0xe0c070 },
};
const sphere = new T.SphereGeometry(0.42, 40, 24);
const cols = MATERIAL_ROLES.length, dx = 1.08;
const rows = [["default", null], ["dark", tints.dark], ["light", tints.light]];
rows.forEach(([name, tint], r) => {
  const y = 2.2 - r * 1.05;
  MATERIAL_ROLES.forEach((role, c) => {
    const m = new T.Mesh(sphere, detailMaterial(role, tint ? tint[role] : undefined));
    m.position.set((c - (cols - 1) / 2) * dx, y, 0);
    m.rotation.y = 0.6;
    scene.add(m);
    if (r === 0) label(role, m.position.clone().add(new T.Vector3(0, 0.55, 0)));
  });
  label(name, new T.Vector3(-(cols / 2) * dx - 0.25, y + 0.05, 0));
});

// geometry helpers row
const g = [];
const add = (geo, mat, x, y, rot = [0, 0, 0], text) => {
  const m = new T.Mesh(geo, mat); m.position.set(x, y, 0); m.rotation.set(...rot); scene.add(m); g.push(m);
  if (text) label(text, new T.Vector3(x, y - 0.72, 0));
  return m;
};
const yG = -1.25;
add(bevelBox(0.8, 0.8, 0.8, 0.08, 2), detailMaterial("metal", 0x8a9098), -4.8, yG, [0.4, 0.6, 0], "bevelBox metal");
add(bevelBox(0.9, 0.5, 0.6, 0.05, 1), detailMaterial("wood"), -3.6, yG, [0.4, -0.5, 0], "bevelBox wood");
const plate = add(roundedPlate(0.95, 0.8, 0.04, 0.16, { curve: 0.55 }), detailMaterial("metal", 0x7f858e, { texture: "hammered" }), -2.3, yG, [0.25, 0.35, 0], "curved plate hammered");
add(roundedPlate(0.9, 0.9, 0.05, 0.2, { curve: 0.6, curveY: 0.8 }), detailMaterial("metal", 0x6b7078, { texture: "scale", bump: 1.6 }), -1.0, yG, [0.25, -0.3, 0], "pauldron scale");
add(roundedPlate(0.9, 0.9, 0.05, 0.12, { curve: 0.7 }), detailMaterial("leather", 0x4a3020), 0.3, yG, [0.25, 0.3, 0], "plate leather");
const plateG = add(roundedPlate(0.85, 0.85, 0.04, 0.42, {}), detailMaterial("gold"), 1.55, yG, [0.2, -0.3, 0], "disc gold + rivets");
const rv = new T.Mesh(rivetRing(10, 0.33), detailMaterial("metal", 0x9aa0a8)); rv.position.z = 0.02; plateG.add(rv);
add(strap(2 * Math.PI * 0.32, 0.12, 0.025, 0.32), detailMaterial("leather", 0x5a3a24), 2.8, yG, [0.5, 0.4, 0], "strap loop");
add(strap(0.9, 0.18, 0.03, 0), detailMaterial("cloth", 0x2b3f6b), 4.0, yG + 0.2, [0.3, -0.3, 0.2]);
add(roundedPlate(0.8, 0.5, 0.15, 0.1, {}), detailMaterial("stone"), 4.0, yG - 0.25, [0.3, 0.3, 0], "strap cloth / stone");
add(new T.IcosahedronGeometry(0.22, 0), detailMaterial("gem", 0x8040ff, { flatShading: true }), 5.0, yG, [0.3, 0.3, 0], "gem flat");

// tiny 'game scale' row: the same roles at ~the size a kit part covers on a phone
const tiny = new T.SphereGeometry(0.11, 20, 12);
MATERIAL_ROLES.forEach((role, c) => {
  const m = new T.Mesh(tiny, detailMaterial(role)); m.position.set((c - (cols - 1) / 2) * 0.32, -2.55, 0); scene.add(m);
});
label("game-scale", new T.Vector3(-(cols / 2) * 0.32 - 0.5, -2.5, 0));

let tris = 0;
for (const m of g) tris += (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3;
renderer.render(scene, camera);

// raw texture swatches
const sw = document.getElementById("swatches");
for (const k of TEXTURE_KINDS) {
  const t = proceduralTexture(k);
  for (const [nm, img] of [["map", t.map.image], ["bump/rough", t.roughnessMap.image]]) {
    const f = document.createElement("figure"), im = document.createElement("img");
    im.src = img.toDataURL(); f.appendChild(im);
    const cap = document.createElement("figcaption"); cap.textContent = k + " " + nm; f.appendChild(cap);
    sw.appendChild(f);
  }
}
window.__previewInfo = { tris, env: useEnv, info: renderer.info.memory, programs: renderer.info.programs.length };
window.__ready = true;
