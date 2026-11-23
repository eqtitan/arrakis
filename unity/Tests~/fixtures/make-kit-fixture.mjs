// Runs the WEB game's own buildKit() (game3d/three3d.mjs) on a stub skeleton and records every
// kit part it makes (socket, shape, material, transform), for the Unity KitBuilder parity test.
// Run from the repo root after `npm ci` (for three):  node unity/Tests~/fixtures/make-kit-fixture.mjs
import * as T from "three";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

T.ColorManagement.legacyMode = false;
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../../..");
const t3 = fs.readFileSync(path.join(root, "game3d/three3d.mjs"), "utf8");
const art = fs.readFileSync(path.join(root, "public/game/art.js"), "utf8");

// Source text of a top-level-in-module declaration, by brace matching.
function block(src, startText) {
  const i = src.indexOf(startText);
  if (i < 0) throw new Error("missing " + startText);
  let depth = 0;
  // Functions: the body's brace is the last one on the signature line (defaults like `B = {}`).
  const k0 = startText.startsWith("function") ? src.lastIndexOf("{", src.indexOf("\n", i)) : src.indexOf("{", i);
  for (let k = k0; k < src.length; k++) {
    if (src[k] === "{") depth++;
    else if (src[k] === "}") { depth--; if (!depth) { let e = k + 1; if (src[e] === ";") e++; return src.slice(i, e); } }
  }
  throw new Error("unbalanced " + startText);
}
const lineOf = (src, startText) => { const i = src.indexOf(startText); return src.slice(i, src.indexOf("\n", i)); };

const pieces = [
  block(art, "const SKIN = {"), block(art, "const LOOKS = {"),
  block(t3, "const BODY = {"), block(t3, "const FACE = {"), block(t3, "const HEAD = {"),
  lineOf(t3, "const GEAR_METAL ="), lineOf(t3, "const GEAR_TRIM ="), lineOf(t3, "const SET_GLOW ="), lineOf(t3, "const gearSig ="),
  lineOf(t3, "const HELM_GEAR ="), lineOf(t3, "const ADORN_GEAR ="), lineOf(t3, "const gripDir ="), lineOf(t3, "const GRIP_POS ="),
  block(t3, "function buildKit("),
  block(fs.readFileSync(path.join(root, "public/game/data.js"), "utf8"), "const ELEMENTS = {"),
  lineOf(t3, "const EYE ="), block(t3, "function buildTitanKit("),
];

// ---------- stubs for the module helpers buildKit uses ----------
const D2R = Math.PI / 180;
const mix = (a, b, k) => "#" + new T.Color(a).lerp(new T.Color(b), k).getHexString();
const mul = (a, k) => "#" + new T.Color(a).multiplyScalar(k).getHexString();
function part(kind, parent, pos, scale, mat, rot) {
  const m = new T.Object3D();
  m.userData.kind = typeof kind === "string" ? kind : kind.sheet ? "sheet:" + kind.sheet.join(",") : "?";
  m.userData.mat = mat;
  m.position.set(pos[0], pos[1], pos[2]); m.scale.set(scale[0], scale[1], scale[2]);
  if (rot) { m.rotation.order = "YXZ"; m.rotation.set(rot[0] * D2R, rot[1] * D2R, rot[2] * D2R); }
  parent.add(m);
  return m;
}
const geos = () => new Proxy({}, { get: (_, k) => k });
const sheet = (...args) => ({ sheet: args.map((x) => +x) });
function pivot(parent, pos) { const g = new T.Group(); g.position.set(pos[0], pos[1], pos[2]); parent.add(g); return g; }
const detailMaterial = (finish, color, opts = {}) => ({ finish, color, metalness: opts.metalness || 0 });
const glow = (color, opacity = 1) => ({ finish: "glow", color, opacity });
function socket(bone, model, pos, dir, roll = 0) { const g = new T.Group(); g.userData.sock = { mode: "bone", bone: bone.name, pos, dir, roll }; bone.add(g); return g; }
function socketM(bone, model, pos = [0, 0, 0]) { const g = new T.Group(); g.userData.sock = { mode: "model", bone: bone.name, pos }; bone.add(g); return g; }
const boneY = () => 0.9;
const springy = (fn) => fn;
const instantiate = (baked) => { const g = new T.Group(); g.userData.baked = baked; return g; };
let recorded = [];
function bake(g) {
  g.updateMatrixWorld(true);
  const parts = [];
  g.traverse((o) => { if (o.userData.kind) parts.push(rec(o, o.matrixWorld)); });
  return parts;
}
const r6 = (x) => Math.round(x * 1e5) / 1e5 + 0; // 5 decimals (+0 drops -0)
function matName(m) {
  if (!m) return null;
  if (m.finish === "glow") return { finish: "Glow", color: m.color, opacity: m.opacity };
  const f = m.finish === "leather" && m.metalness > 0 && m.metalness < 0.5 ? "LeatherMetal" : m.finish[0].toUpperCase() + m.finish.slice(1);
  return { finish: f, color: m.color, opacity: 1 };
}
const rec = (o, mw) => ({ kind: o.userData.kind, mat: matName(o.userData.mat), m: mw.elements.map(r6) });
class RecMap extends Map { set(k, v) { recorded.push({ key: k, entry: v }); return super.set(k, v); } }

const src = pieces.join("\n") + "\nreturn { buildKit, buildTitanKit, LOOKS, BODY };";
const kitCacheRef = { v: null };
const factory = new Function("T", "D2R", "mix", "mul", "part", "geos", "sheet", "pivot", "detailMaterial", "glow", "socket", "socketM", "boneY", "springy", "instantiate", "bake", "kitCacheRef", "qm", "lit", "crackMaterial",
  src.replace("function buildKit(", "const kitCache = kitCacheRef.v;\n  function buildKit("));
// kitCache is read inside buildKit at call time; give it a fresh recorder per build.
const lit = (color, metal = 0) => ({ finish: "plain", color, metalness: metal });
const crackMaterial = (m) => m; // a material effect; the Unity port applies it to the stone separately
const BONES = ["WristR", "WristL", "Head", "Hips", "Chest", "UpperArmL", "UpperArmR", "LowerLegL", "LowerLegR", "FootL", "FootR"];

function run(id, hollow, gear) {
  kitCacheRef.v = new RecMap(); recorded = [];
  const api = factory(T, D2R, mix, mul, part, geos, sheet, pivot, detailMaterial, glow, socket, socketM, boneY, springy, instantiate, bake, kitCacheRef, null, lit, crackMaterial);
  const model = new T.Group();
  const bones = {};
  for (const n of BONES) { const b = new T.Bone(); b.name = n; model.add(b); bones[n] = b; }
  api.buildKit(id, api.LOOKS[id], ({ hask: "monarch", ulfgar: "monarch", gorrum: "monarch", thrain: "monarch", corvan: "monarch", odo: "monarch", aurelia: "monarch", maelis: "monarch", mira: "hooded", wren: "hooded", ysolde: "hooded", nyx: "hooded", tamsin: "hooded", velka: "hooded", sable: "hooded", morwenna: "hooded", seraphine: "hooded" })[id] || "adventurer",
    model, hollow, [], Object.assign({}, api.BODY[id]), gear);
  // Sockets in creation order, with the baked parts and live parts attached to each.
  const out = [];
  for (const b of Object.values(bones)) for (const s of b.children) {
    const info = s.userData.sock; if (!info) continue;
    // One record per attach() (several can share a socket, e.g. the helm gear on the head socket).
    for (const inst of s.children.filter((c) => c.userData.baked)) {
    const entry = recorded.find((r) => r.entry.baked === inst.userData.baked);
    const slot = entry ? entry.key.split("|")[2] : "?";
    const live = (entry ? entry.entry.live : []).map((l) => {
      l.obj.updateMatrixWorld(true);
      const inv = new T.Matrix4().copy(l.obj.matrixWorld).invert();
      const parts = [];
      l.obj.traverse((o) => { if (o.userData.kind) parts.push(rec(o, new T.Matrix4().multiplyMatrices(inv, o.matrixWorld))); });
      return { pos: l.obj.position.toArray().map(r6), scale: l.obj.scale.toArray().map(r6), q: l.obj.quaternion.toArray().map(r6), parts };
    });
    out.push({ slot, mode: info.mode, bone: info.bone, pos: info.pos, dir: info.dir || null, roll: info.roll || 0,
      q: s.quaternion.toArray().map(r6), scale: r6(s.scale.x), parts: entry ? entry.entry.baked : [], live });
    }
  }
  return out;
}

const factoryProbe = factory(T, D2R, mix, mul, part, geos, sheet, pivot, detailMaterial, glow, socket, socketM, boneY, springy, instantiate, bake, kitCacheRef, null, lit, crackMaterial);
const ids = Object.keys(factoryProbe.LOOKS);
const G = (r, s) => ({ weapon: { r, s }, helm: { r, s }, chest: { r, s }, boots: { r, s } });
const cases = [];
for (const id of ids) {
  cases.push({ id, hollow: false, gear: null });
  cases.push({ id, hollow: false, gear: G(5, "keen") });
}
for (const id of ["hask", "aurelia", "nyx", "seraphine", "pell", "wren", "gorrum", "tamsin"]) {
  cases.push({ id, hollow: false, gear: G(1, "fury") });
  cases.push({ id, hollow: false, gear: G(3, "vigor") });
  cases.push({ id, hollow: true, gear: { helm: { r: 2, s: "" }, chest: { r: 2, s: "" } } });
}
const fixture = cases.map((c) => ({ ...c, sockets: run(c.id, c.hollow, c.gear) }));
// The Titan (buildTitanKit) for each element of the day.
function runTitan(el) {
  kitCacheRef.v = new RecMap(); recorded = [];
  const api = factory(T, D2R, mix, mul, part, geos, sheet, pivot, detailMaterial, glow, socket, socketM, boneY, springy, instantiate, bake, kitCacheRef, null, lit, crackMaterial);
  const model = new T.Group(), bones = {};
  for (const n of ["Head", "Torso", "UpperArmL", "UpperArmR"]) { const b = new T.Bone(); b.name = n; model.add(b); bones[n] = b; }
  api.buildTitanKit(model, el, []);
  const out = [];
  for (const b of Object.values(bones)) for (const s of b.children) {
    const info = s.userData.sock; if (!info) continue;
    for (const inst of s.children.filter((c) => c.userData.baked)) {
      const entry = recorded.find((r) => r.entry.baked === inst.userData.baked);
      out.push({ slot: entry.key.slice(("titan|" + el).length), mode: info.mode, bone: info.bone, pos: info.pos, dir: null, roll: 0, q: s.quaternion.toArray().map(r6), scale: 1, parts: entry.entry.baked, live: [] });
    }
  }
  return out;
}
for (const el of ["flame", "gale", "tide", "light", "shadow"]) fixture.push({ id: "titan", el, hollow: false, gear: null, sockets: runTitan(el) });
fs.writeFileSync(path.join(here, "kit-fixture.json"), JSON.stringify(fixture) + "\n");
const nParts = fixture.reduce((s, c) => s + c.sockets.reduce((a, k) => a + k.parts.length + k.live.reduce((b, l) => b + l.parts.length, 0), 0), 0);
console.log(`kit-fixture.json: ${fixture.length} builds, ${nParts} parts`);
