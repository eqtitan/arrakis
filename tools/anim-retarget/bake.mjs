// Retargets clips from the CC0 Quaternius Universal Animation Library (Rigify DEF-* rig) onto the
// game's Quaternius character rig and bakes them to a compact JSON the game loads at runtime.
// Run with: node tools/anim-retarget/run.cjs (bundles this file, opens it in headless Chromium).
//
// Method (per frame, in model space, rotations only + hips/feet positions):
//   Δ(t) = Qs(t) · Qs0⁻¹                 source bone's world rotation change from its rest
//   C    = swing taking the source rest bone direction onto the destination's rest direction
//   Qd(t) = Δ(t) · C⁻¹ · Qd0             destination world rotation (direction follows the source)
//   local = parentWorld_d(t)⁻¹ · Qd(t)   evaluated top-down so parents are already posed
// The game rig's feet hang off Root (IK-style), so their positions come from the source feet,
// scaled by leg length. Body (the hips' parent) takes the source hips' translation change.
import * as T from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

const MAP = {
  "DEF-hips": "Hips", "DEF-spine.001": "Abdomen", "DEF-spine.002": "Torso", "DEF-spine.003": "Chest",
  "DEF-neck": "Neck", "DEF-head": "Head",
  "DEF-shoulder.L": "ShoulderL", "DEF-upper_arm.L": "UpperArmL", "DEF-forearm.L": "LowerArmL", "DEF-hand.L": "WristL",
  "DEF-shoulder.R": "ShoulderR", "DEF-upper_arm.R": "UpperArmR", "DEF-forearm.R": "LowerArmR", "DEF-hand.R": "WristR",
  "DEF-thigh.L": "UpperLegL", "DEF-shin.L": "LowerLegL", "DEF-foot.L": "FootL",
  "DEF-thigh.R": "UpperLegR", "DEF-shin.R": "LowerLegR", "DEF-foot.R": "FootR",
};
// Direction child used to measure each bone's rest direction (first mapped child in each rig).
const DIR_CHILD_S = { "DEF-hips": "DEF-spine.001", "DEF-spine.001": "DEF-spine.002", "DEF-spine.002": "DEF-spine.003", "DEF-spine.003": "DEF-neck", "DEF-neck": "DEF-head",
  "DEF-shoulder.L": "DEF-upper_arm.L", "DEF-upper_arm.L": "DEF-forearm.L", "DEF-forearm.L": "DEF-hand.L", "DEF-hand.L": "DEF-f_middle.01.L",
  "DEF-shoulder.R": "DEF-upper_arm.R", "DEF-upper_arm.R": "DEF-forearm.R", "DEF-forearm.R": "DEF-hand.R", "DEF-hand.R": "DEF-f_middle.01.R",
  "DEF-thigh.L": "DEF-shin.L", "DEF-shin.L": "DEF-foot.L", "DEF-foot.L": "DEF-toe.L", "DEF-thigh.R": "DEF-shin.R", "DEF-shin.R": "DEF-foot.R", "DEF-foot.R": "DEF-toe.R" };
const DIR_CHILD_D = { Hips: "Abdomen", Abdomen: "Torso", Torso: "Chest", Chest: "Neck", Neck: "Head",
  ShoulderL: "UpperArmL", UpperArmL: "LowerArmL", LowerArmL: "WristL", WristL: "Middle1L",
  ShoulderR: "UpperArmR", UpperArmR: "LowerArmR", LowerArmR: "WristR", WristR: "Middle1R",
  UpperLegL: "LowerLegL", LowerLegL: "FootL", FootL: "PTL", UpperLegR: "LowerLegR", LowerLegR: "FootR", FootR: "PTR" };
const CLIPS = ["Spell_Simple_Enter", "Spell_Simple_Shoot", "Spell_Simple_Exit", "Spell_Simple_Idle_Loop", "Hit_Chest", "Hit_Head", "Death01"];
const FPS = 24;

const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
const load = (url) => new Promise((res, rej) => loader.load(url, res, undefined, rej));
const bonesOf = (root) => { const b = {}; root.traverse((o) => { if (o.isBone || o.type === "Object3D" || o.isObject3D) if (o.name) b[o.name.replace(/[.:]/g, "")] = b[o.name.replace(/[.:]/g, "")] || o; }); return b; };
const byName = (root) => { const b = {}; root.traverse((o) => { if (o.name) b[o.name] = o; }); return b; };

function worldQ(o, rootInv) { const q = new T.Quaternion(); o.updateWorldMatrix(true, false); const m = new T.Matrix4().multiplyMatrices(rootInv, o.matrixWorld); m.decompose(new T.Vector3(), q, new T.Vector3()); return q; }
function worldP(o, rootInv) { o.updateWorldMatrix(true, false); return new T.Vector3().setFromMatrixPosition(new T.Matrix4().multiplyMatrices(rootInv, o.matrixWorld)); }

async function bakeFor(srcGltf, dstUrl) {
  const dst = await load(dstUrl);
  const S0 = bonesOf(srcGltf.scene), D = bonesOf(dst.scene);
  const S = new Proxy(S0, { get: (o, k) => o[String(k).replace(/[.:]/g, "")] }); // GLTFLoader strips dots from names
  const sRoot = srcGltf.scene, dRoot = dst.scene;
  sRoot.updateMatrixWorld(true); dRoot.updateMatrixWorld(true);
  const sInv = new T.Matrix4().copy(sRoot.matrixWorld).invert(), dInv = new T.Matrix4().copy(dRoot.matrixWorld).invert();
  // Rest (bind) pose from the source's A_TPose clip frame 0 isn't needed: node defaults are the rest.
  const rest = {};
  for (const [s, d] of Object.entries(MAP)) {
    const sb = S[s], db = D[d];
    if (!sb || !db) throw new Error("missing bone " + s + " / " + d);
    // Bones without a measurable direction (the head) transfer the rotation change as is.
    let C = new T.Quaternion();
    if (DIR_CHILD_S[s] && DIR_CHILD_D[d] && S[DIR_CHILD_S[s]] && D[DIR_CHILD_D[d]]) {
      const sDir = worldP(S[DIR_CHILD_S[s]], sInv).sub(worldP(sb, sInv)).normalize();
      const dDir = worldP(D[DIR_CHILD_D[d]], dInv).sub(worldP(db, dInv)).normalize();
      C = new T.Quaternion().setFromUnitVectors(sDir, dDir);
    }
    rest[s] = { Qs0: worldQ(sb, sInv), Qd0: worldQ(db, dInv), Cinv: C.clone().invert() };
  }
  const sHip0 = worldP(S["DEF-hips"], sInv), dBodyW0 = worldP(D.Body, dInv);
  const sLeg = worldP(S["DEF-thigh.L"], sInv).distanceTo(worldP(S["DEF-foot.L"], sInv));
  const dLeg = worldP(D.UpperLegL, dInv).distanceTo(worldP(D.FootL, dInv));
  const k = dLeg / sLeg;
  const dFoot0 = { L: worldP(D.FootL, dInv), R: worldP(D.FootR, dInv) }, sFoot0 = { L: worldP(S["DEF-foot.L"], sInv), R: worldP(S["DEF-foot.R"], sInv) };
  const order = Object.keys(MAP); // parents come before children in MAP's order
  const out = {};
  const mixer = new T.AnimationMixer(sRoot);
  for (const name of CLIPS) {
    const clip = srcGltf.animations.find((a) => a.name === name);
    if (!clip) throw new Error("no clip " + name);
    mixer.stopAllAction(); const act = mixer.clipAction(clip); act.setLoop(T.LoopOnce, 1); act.clampWhenFinished = true; act.reset().play();
    const n = Math.max(2, Math.round(clip.duration * FPS) + 1), tracks = {};
    for (const d of Object.values(MAP)) tracks[d] = [];
    tracks.BodyPos = []; tracks.FootLPos = []; tracks.FootRPos = [];
    for (let i = 0; i < n; i++) {
      mixer.setTime(Math.min(clip.duration - 1e-4, i / FPS));
      sRoot.updateMatrixWorld(true);
      const dWorld = {};
      // Body position: source hips change from rest, scaled (model space Y-up; the game models face +Z like the source).
      const hip = worldP(S["DEF-hips"], sInv).sub(sHip0).multiplyScalar(k);
      const bodyTarget = dBodyW0.clone().add(hip);
      D.Body.position.copy(bodyTarget.applyMatrix4(new T.Matrix4().multiplyMatrices(dInv, D.Body.parent.matrixWorld).invert()));
      D.Body.updateMatrixWorld(true);
      tracks.BodyPos.push(...D.Body.position.toArray().map((x) => +x.toFixed(4)));
      for (const s of order) {
        const d = MAP[s], db = D[d], r = rest[s];
        const Qs = worldQ(S[s], sInv);
        const Qd = Qs.clone().multiply(r.Qs0.clone().invert()).multiply(r.Cinv).multiply(r.Qd0);
        const pW = worldQ(db.parent, dInv);
        db.quaternion.copy(pW.invert().multiply(Qd));
        if (d === "FootL" || d === "FootR") {
          const side = d === "FootL" ? "L" : "R";
          const target = dFoot0[side].clone().add(worldP(S["DEF-foot." + side], sInv).sub(sFoot0[side]).multiplyScalar(k));
          const pm = new T.Matrix4().multiplyMatrices(dInv, db.parent.matrixWorld).invert();
          db.position.copy(target.applyMatrix4(pm));
          tracks[d + "Pos"].push(...db.position.toArray().map((x) => +x.toFixed(4)));
        }
        db.updateMatrixWorld(true);
        tracks[d].push(...db.quaternion.toArray().map((x) => +x.toFixed(4)));
      }
    }
    out[name] = { fps: FPS, frames: n, tracks };
  }
  return out;
}

(async () => {
  try {
    const src = await load("ual/AnimationLibrary_Godot_Standard.gltf");
    const res = {};
    for (const base of ["monarch", "hooded_adventurer"]) res[base] = await bakeFor(src, `models/${base}.glb`);
    window.__baked = res;
  } catch (e) { window.__bakeError = String(e && e.stack || e); }
})();
