// Shading preview: the three base GLBs, recoloured like three3d.mjs does, rendered as
// original vs upgraded (High) vs upgraded + subdivided (Ultra) vs + outline, at the battle
// camera angle and in close-up, with the game's light rig, env map and post pipeline (bloom).
// Query: ?q=battle,close,alt (sections), &cell=320x360, &ramp=0.35, &rim=0.55
import * as T from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { envMap } from "../game3d/materials.mjs";
import { createPipeline } from "../game3d/post.mjs";
import { applyCharacterLook, roleFromGame, tagRole, triCount } from "../game3d/shading.mjs";

T.ColorManagement.legacyMode = false; // like three3d.mjs: hex colours are sRGB
const Q = new URLSearchParams(location.search);
const [CW, CH] = (Q.get("cell") || "320x360").split("x").map(Number);
const SECTIONS = (Q.get("q") || "battle,close,alt").split(",");
const LOOK = { ramp: Q.has("ramp") ? +Q.get("ramp") : undefined, rim: Q.has("rim") ? +Q.get("rim") : undefined };
const status = document.getElementById("status");

// Same material→role table as three3d.mjs (ROLES).
const ROLES = {
  hooded: { DarkBrown: "armor", Black: "cloth", Brown: "cloth", LightBrown: "accent", Gold: "accent", Metal: "trim", Metal_Dark: "blade", Brown2: "wood", Skin: "skin",
    "head:Black": "cloth", "head:Brown": "eye", "head:DarkBrown": "hood", White: "hair" },
  adventurer: { LightGreen: "armor", Green: "cloth", Brown: "pants", Brown2: "pants", Black: "boot", Grey: "boot", Hair: "hair", Eyebrows: "hair", Gold: "accent", Skin: "skin", Eye: "eye" },
  monarch: { Metal: "armor", Metal_Dark: "trim", Blue: "cloth", DarkBrown: "pants", Beige: "accent", Gold: "crown", Hair_White: "hair", Skin: "skin", Eye: "eye" },
};
const FILES = { hooded: "hooded_adventurer", adventurer: "adventurer", monarch: "monarch" };
const ELEMENT = { void: "#b070ff", water: "#4ac8ff", light: "#ffd060", nature: "#7cff9a", fire: "#ff6a3a", storm: "#8ab4ff" };

// Hero palettes (sRGB hex), one main + one alternative per base: dark and light extremes.
const PALETTES = {
  hooded: {
    main: { name: "dusk rogue (dark)", el: "void", c: { armor: "#3a2c40", cloth: "#1e1b24", accent: "#b08a3a", trim: "#9aa0aa", blade: "#c8d0dc", wood: "#5a3a22", skin: "#7a4a32", hair: "#e8e4dc", hood: "#3a2c40", eye: "#1a141f" } },
    alt: { name: "white pilgrim (light)", el: "nature", c: { armor: "#e9e4d6", cloth: "#d8d2c2", accent: "#d8b45a", trim: "#c8ccd4", blade: "#c8d0dc", wood: "#8a6a44", skin: "#f3d2b8", hair: "#3a2a1e", hood: "#f0ece2", eye: "#1a141f" } },
  },
  adventurer: {
    main: { name: "sun ranger (light)", el: "water", c: { armor: "#ece2c6", cloth: "#c9b48a", pants: "#7a6248", boot: "#3a2a20", hair: "#f0c860", skin: "#f1c6a6", accent: "#d4a64a", eye: "#1a141f" } },
    alt: { name: "ember duelist (dark)", el: "fire", c: { armor: "#2a1a1e", cloth: "#7a1e22", pants: "#1c1618", boot: "#141012", hair: "#121014", skin: "#4a2c20", accent: "#d4a64a", eye: "#1a141f" } },
  },
  monarch: {
    main: { name: "steel king", el: "light", c: { armor: "#a8b2c2", trim: "#3a3f4a", cloth: "#2a4aa0", pants: "#3a2a22", accent: "#d8c8a0", crown: "#e0b040", hair: "#f4f0e8", skin: "#d9a07a", eye: "#1a141f" } },
    alt: { name: "obsidian warden", el: "storm", c: { armor: "#2a2c34", trim: "#c89a3a", cloth: "#5a1a2a", pants: "#1a1618", accent: "#c8a86a", crown: "#e0b040", hair: "#2a2220", skin: "#8a5a3e", eye: "#1a141f" } },
  },
};

const VARIANTS = [
  { key: "orig", label: "original (game today)" },
  { key: "high", label: "upgraded · High" },
  { key: "ultra", label: "upgraded + subdiv · Ultra" },
  { key: "outline", label: "Ultra + outline" },
];

// ---------------------------------------------------------------------------------------------
const glCanvas = document.getElementById("gl");
const renderer = new T.WebGLRenderer({ canvas: glCanvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(CW, CH, false);
renderer.outputEncoding = T.sRGBEncoding;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;

const scene = new T.Scene();
scene.background = gradientTexture("#1f2b46", "#c9805a");
scene.environment = envMap(renderer, { size: 64 });
const mix = (a, b, t) => new T.Color(a).lerp(new T.Color(b), t);
const sky = mix("#c9805a", "#ffffff", 0.35);
scene.add(new T.HemisphereLight(sky, new T.Color("#2a2a22"), 1.25));
const sun = new T.DirectionalLight(0xfff1dd, 2.0);
sun.position.set(-5, 10, 6); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024); sun.shadow.radius = 3; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
Object.assign(sun.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: 1, far: 30 });
scene.add(sun);
const rim = new T.DirectionalLight(0x99aaff, 0.8); rim.position.set(4, 5, -8); scene.add(rim);
const front = new T.DirectionalLight(0xffffff, 0.6); front.position.set(0, 4, 10); scene.add(front);
const ground = new T.Mesh(new T.PlaneGeometry(40, 40), new T.MeshStandardMaterial({ color: mix("#2a2a22", "#8c8680", 0.3), roughness: 1 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

const camera = new T.PerspectiveCamera(62, CW / CH, 0.1, 100);
const pipe = createPipeline(renderer, scene, camera, { quality: "High" });
pipe.setSize(CW, CH);

function gradientTexture(top, bottom) {
  const c = document.createElement("canvas"); c.width = 4; c.height = 256;
  const g = c.getContext("2d"), gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, top); gr.addColorStop(1, bottom);
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding;
  return t;
}

// ---------------------------------------------------------------------------------------------
// Build a hero the way three3d.mjs does (recolour per role, two finishes, vertex colours), plus
// the per-vertex shading role (tagRole) the integration adds in prepGeo.
const finishes = {
  matte: new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.8, metalness: 0, envMapIntensity: 0.25 }),
  shiny: new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.5, metalness: 0.3, envMapIntensity: 0.8 }),
};
const plain = (a) => {
  const n = a.count, s = a.itemSize, out = new Float32Array(n * s), get = [a.getX, a.getY, a.getZ, a.getW];
  for (let i = 0; i < n; i++) for (let c = 0; c < s; c++) out[i * s + c] = get[c].call(a, i);
  return new T.BufferAttribute(out, s);
};
function prepGeo(src, color, shadeRole) {
  const g = new T.BufferGeometry();
  for (const n of ["position", "normal", "skinIndex", "skinWeight"]) if (src.attributes[n]) g.setAttribute(n, plain(src.attributes[n]));
  if (src.index) g.setIndex(src.index);
  const out = g.index ? g.toNonIndexed() : g;
  const n = out.attributes.position.count, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = color.r; col[i * 3 + 1] = color.g; col[i * 3 + 2] = color.b; }
  out.setAttribute("color", new T.BufferAttribute(col, 3));
  if (shadeRole !== undefined) tagRole(out, shadeRole || "default");
  return out;
}
const PARTMESH = { monarch: "King_Head", hooded: "Medieval_Head", adventurer: "Adventurer_Head" };

function buildHero(lib, base, pal, variant) {
  const model = cloneSkinned(lib.scene);
  const tagged = variant !== "orig";
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true; o.frustumCulled = false;
    let kind = "";
    for (let p = o; p && p !== model; p = p.parent) if (p.name && p.name.startsWith(PARTMESH[base])) kind = "head";
    const mname = o.material.name, role = (ROLES[base][`${kind}:${mname}`]) || ROLES[base][mname];
    const color = new T.Color(pal.c[role] || "#" + o.material.color.getHexString());
    const shiny = (role === "armor" && base === "monarch") || role === "trim" || role === "blade" || role === "crown";
    o.geometry = prepGeo(o.geometry, color, tagged ? roleFromGame(role, base, mname) : undefined);
    o.material = shiny ? finishes.shiny : finishes.matte;
  });
  const root = new T.Group(); root.add(model);
  model.scale.setScalar(1.85 / lib.headY);
  const mixer = new T.AnimationMixer(model);
  const clip = lib.clips.Idle_Sword || lib.clips.Idle;
  if (clip) { mixer.clipAction(clip).play(); mixer.update(0.7); }
  let info = { tris: 0 };
  if (variant !== "orig") {
    info = applyCharacterLook(root, {
      quality: variant === "high" ? "high" : "ultra", rimColor: ELEMENT[pal.el], ...LOOK,
      outline: variant === "outline" ? { color: "#120c18", width: 1.4 } : false,
    });
  } else root.traverse((o) => { if (o.isMesh) info.tris += triCount(o.geometry); });
  root.updateMatrixWorld(true);
  return { root, info };
}

// ---------------------------------------------------------------------------------------------
const D2R = Math.PI / 180;
function frame(view, headY) {
  if (view === "close") {
    camera.fov = 30; camera.aspect = CW / CH;
    const target = new T.Vector3(0, 1.62, 0), pitch = 8 * D2R, dist = 2.1;
    camera.position.set(target.x, target.y + Math.sin(pitch) * dist, target.z + Math.cos(pitch) * dist);
    camera.lookAt(target);
  } else {
    // Battle: the game's 34° pitch; distance chosen so the hero is ~250 px tall in a 360 px cell.
    camera.fov = 62; camera.aspect = CW / CH;
    const target = new T.Vector3(0, 1.0, 0), pitch = 34 * D2R, dist = 1.95 * CH / (250 * 2 * Math.tan(31 * D2R));
    camera.position.set(target.x, target.y + Math.sin(pitch) * dist, target.z + Math.cos(pitch) * dist);
    camera.lookAt(target);
  }
  camera.updateProjectionMatrix();
}

async function main() {
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  const libs = {};
  for (const [base, file] of Object.entries(FILES)) {
    const g = await loader.loadAsync(`../public/game/models/${file}.glb`);
    g.scene.updateMatrixWorld(true);
    let headY = 1.55;
    g.scene.traverse((o) => { if (o.isBone && o.name === "Head") { const v = new T.Vector3(); o.getWorldPosition(v); headY = v.y; } });
    const clips = {};
    for (const a of g.animations) clips[a.name.split("|").pop()] = a;
    libs[base] = { scene: g.scene, clips, headY };
  }

  const rows = [];
  for (const s of SECTIONS) for (const base of Object.keys(FILES)) {
    if (s === "battle") rows.push({ view: "battle", base, pal: PALETTES[base].main });
    if (s === "close") rows.push({ view: "close", base, pal: PALETTES[base].main });
    if (s === "alt") rows.push({ view: "battle", base, pal: PALETTES[base].alt });
  }
  const LABEL = 18, HEAD = 26;
  const sheet = document.getElementById("sheet");
  sheet.width = CW * VARIANTS.length; sheet.height = HEAD + rows.length * (CH + LABEL);
  const ctx = sheet.getContext("2d");
  ctx.fillStyle = "#0d0c10"; ctx.fillRect(0, 0, sheet.width, sheet.height);
  ctx.font = "bold 13px system-ui, sans-serif"; ctx.fillStyle = "#ddd";
  VARIANTS.forEach((v, i) => ctx.fillText(v.label, i * CW + 8, 18));
  const cells = [], info = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    for (let c = 0; c < VARIANTS.length; c++) {
      status.textContent = `rendering ${r * VARIANTS.length + c + 1}/${rows.length * VARIANTS.length}`;
      const t0 = performance.now();
      const { root, info: hi } = buildHero(libs[row.base], row.base, row.pal, VARIANTS[c].key);
      const buildMs = performance.now() - t0;
      root.rotation.y = row.view === "close" ? -0.45 : -0.6;
      scene.add(root);
      frame(row.view, libs[row.base].headY);
      pipe.render();
      const y = HEAD + r * (CH + LABEL);
      ctx.drawImage(glCanvas, 0, 0, glCanvas.width, glCanvas.height, c * CW, y, CW, CH);
      ctx.font = "11px system-ui, sans-serif"; ctx.fillStyle = "#aaa";
      ctx.fillText(`${row.base} · ${row.pal.name} · ${row.view} · ${hi.tris} tris`, c * CW + 6, y + CH + 13);
      const name = `${row.view}-${row.base}-${row.pal === PALETTES[row.base].alt ? "alt" : "main"}-${VARIANTS[c].key}`;
      cells.push({ name, url: glCanvas.toDataURL("image/png") });
      info.push({ name, tris: hi.tris, buildMs: Math.round(buildMs) });
      scene.remove(root);
      await new Promise((res) => setTimeout(res, 0));
    }
  }
  status.textContent = "done";
  window.__cells = cells;
  window.__previewInfo = { info, programs: renderer.info.programs.length };
  window.__ready = true;
}
main().catch((e) => { console.error(e); status.textContent = "error: " + e.message; window.__error = String(e && e.stack || e); window.__ready = true; });
