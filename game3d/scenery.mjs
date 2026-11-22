// Sigilbound 3D — battle arenas (ground, scatter, framing props, horizon, atmosphere).
//
// buildArena(scene, opts) → { update(t), dispose(), lights, colors, stats }
//   opts: { chapter: 0..9, titan: bool, palette: [skyTop, horizon, ground, prop, accent],
//           quality: "high"|"medium"|"low", renderer, fog: true (set scene.fog/background) }
//
// Scenery kind = chapter % 5: 0 forest, 1 shore, 2 badlands, 3 marsh, 4 ruins + crystals; titan =
// volcanic basalt with lava and embers. Each chapter also has its own material theme (THEMES).
//
// Everything is generated in code. Ground textures are DataTextures (no canvas premultiply):
//   map  RGBA = albedo A, albedo B, macro noise, glow mask      (linear)
//   data RGBA = height A, roughness A, height B, roughness B    (linear)
// and a custom ground shader mixes A (base) / B (worn) per vertex (attribute aSb.x = wear,
// aSb.y = glow). Rocks, bark and cloth reuse the cached textures from materials.mjs.
//
// Battlefield kept clear: no props in |x| < 4.5 for z in -6..+4 (allies z=+1.6, enemies z=-2.6,
// titan z=-3.2). Camera ≈ (0, 6..10, 9..12) looking at (0, 0.9, -0.5), portrait.
import * as T from "three";
import { proceduralTexture } from "./materials.mjs";

// ---------------------------------------------------------------------------------------------
// Palettes and themes
// ---------------------------------------------------------------------------------------------

// Same sky/horizon/ground/prop as three3d.mjs sceneColors(), plus an accent.
const PALETTES = [
  ["#1f2b46", "#c9805a", "#2a2a22", "#16141f", "#ffc068"], ["#16283a", "#4f7c8a", "#1c2a2a", "#0e1a22", "#e8f4ff"],
  ["#2a1a1e", "#a8483a", "#2e1a1c", "#160c0e", "#ff9a4a"], ["#1a2e2a", "#7fa088", "#23362a", "#101c16", "#d8ff8a"],
  ["#28203a", "#c8a870", "#2c2640", "#14101e", "#ffcf6a"], ["#2a2438", "#e0b0d0", "#3a2e4a", "#ffd0f0", "#ffb0d8"],
  ["#101a2e", "#5a7ab0", "#1a2440", "#0c1220", "#bcd8ff"], ["#0e0a16", "#3a2a5a", "#180f26", "#b080ff", "#c890ff"],
  ["#0e1a2a", "#2a5a7a", "#10283c", "#80e0ff", "#80e0ff"], ["#1a0a0a", "#ff6a2a", "#24100c", "#100606", "#ff7a30"],
];
const TITAN_PALETTE = ["#1a0a0a", "#c0401a", "#24100c", "#100606", "#ff6a20"];

// Ground: base (2 tones), worn (arena/path), hill. Props: rock, bark, leaves[], cloth, water, sil.
const THEMES = [
  { name: "dusk forest", grass: "#4f6a2a", grass2: "#6f7432", worn: "#8a6844", hill: "#41582a", rock: "#7d746a", bark: "#4e3726",
    leaves: ["#3c6a26", "#557a2a", "#a8702a", "#b8522a"], tuft: "#5f7a2c", cloth: "#7a2a22", sil: "#2e2c46", motes: "leaves", moteColor: "#e08a3a" },
  { name: "teal shore", grass: "#c2a87e", grass2: "#b39b72", worn: "#8c7a5e", hill: "#a8956a", rock: "#6a7078", bark: "#9a8a76",
    leaves: ["#4a6a3a", "#5a7a40"], tuft: "#8f9a52", water: "#1f5f6c", cloth: "#d8d0b8", sil: "#24404e", motes: "spray", moteColor: "#e8f6ff" },
  { name: "red badlands", grass: "#94503a", grass2: "#ad6844", worn: "#c09070", hill: "#8a4632", rock: "#a0553a", bark: "#5e4636",
    strata: ["#8a4430", "#b06a46", "#6e3426", "#c4885a"], tuft: "#857040", cloth: "#d0a040", sil: "#44201f", motes: "dust", moteColor: "#ffc890" },
  { name: "green marsh", grass: "#3a5630", grass2: "#4f6236", worn: "#6e5a40", hill: "#34502e", rock: "#58605a", bark: "#433a30",
    leaves: ["#4a5a30"], tuft: "#7a8a44", water: "#22402f", cloth: "#5a4a30", sil: "#223c36", motes: "fireflies", moteColor: "#d8ff7a" },
  { name: "gold ruins", grass: "#58652f", grass2: "#76763c", worn: "#8e8474", hill: "#4c5a2c", rock: "#a49a88", bark: "#5a4636",
    leaves: ["#4c682c", "#667a32"], tuft: "#6a7a34", cloth: "#7a2a4a", sil: "#36304c", motes: "sparks", moteColor: "#ffd27a", crystals: true },
  { name: "blossom forest", grass: "#557636", grass2: "#748646", worn: "#977660", hill: "#4a6a34", rock: "#8a8088", bark: "#4a3036",
    leaves: ["#e89ac0", "#f0b0cc", "#d880aa", "#f8cade"], tuft: "#6a8a3c", cloth: "#5a3a7a", sil: "#463858", motes: "petals", moteColor: "#ffc0dc" },
  { name: "moonlit shore", grass: "#a39c8c", grass2: "#958e80", worn: "#77705f", hill: "#8a8474", rock: "#5c6272", bark: "#8a8478",
    leaves: ["#3a5a4a"], tuft: "#6a7a5a", water: "#1a3658", cloth: "#c8d0e0", sil: "#1a2642", motes: "spray", moteColor: "#cfe2ff" },
  { name: "amethyst badlands", grass: "#5e4e6c", grass2: "#6f5c80", worn: "#9584a6", hill: "#54466a", rock: "#5e4c70", bark: "#4a3c4e",
    strata: ["#56466c", "#6f5c86", "#463a5a", "#88729e"], tuft: "#6a5a7a", cloth: "#3a2a5a", sil: "#221a36", motes: "sparks", moteColor: "#c890ff", crystals: true },
  { name: "glow marsh", grass: "#2c4846", grass2: "#385850", worn: "#5e586c", hill: "#284242", rock: "#4a5460", bark: "#38384a",
    leaves: ["#2a4a4a"], tuft: "#4a7a6a", water: "#123040", cloth: "#2a3a5a", sil: "#122838", motes: "fireflies", moteColor: "#80e8ff", mushrooms: true },
  { name: "burning ruins", grass: "#665834", grass2: "#7a6238", worn: "#8a7a6a", hill: "#5a4a30", rock: "#7a6e64", bark: "#4a3a2e",
    leaves: ["#5a5a2a", "#7a5a26"], tuft: "#7a6a3a", cloth: "#6a1a1a", sil: "#381410", motes: "embers", moteColor: "#ff8a3a", crystals: true },
];
const TITAN_THEME = { name: "titan caldera", grass: "#3a3436", grass2: "#463e3e", worn: "#6a625e", hill: "#332e30", rock: "#2e2a2e",
  bark: "#2a2222", tuft: "#3a3030", cloth: "#5a1a10", sil: "#1e0c0a", motes: "embers", moteColor: "#ff7a2a" };

// Per-kind ground patterns (A = base, B = worn) and hill amplitude.
const KIND = [
  { a: "grass", b: "soil", hills: 4.5, sil: "trees", silFar: "peaks" },
  { a: "sand", b: "shingle", hills: 2.0, sil: "islands", silFar: "peaks" },
  { a: "cracked", b: "gravel", hills: 3.0, sil: "mesa", silFar: "mesa" },
  { a: "grass", b: "mud", hills: 1.6, sil: "trees", silFar: "peaks" },
  { a: "grass", b: "flagstone", hills: 3.5, sil: "ruins", silFar: "peaks" },
  { a: "basalt", b: "ash", hills: 4.0, sil: "peaks", silFar: "volcano" },
];

const QUALITY = {
  high:   { tex: 512, grid: 120, tufts: 1500, scatter2: 420, rocks: 190, props: 1, motes: 160, aniso: 4, casters: true, ringSeg: 220 },
  medium: { tex: 256, grid: 90,  tufts: 850,  scatter2: 240, rocks: 120, props: 0.7, motes: 90, aniso: 2, casters: true, ringSeg: 160 },
  low:    { tex: 128, grid: 64,  tufts: 380,  scatter2: 100, rocks: 60,  props: 0.45, motes: 0, aniso: 1, casters: false, ringSeg: 110 },
};

// ---------------------------------------------------------------------------------------------
// Noise
// ---------------------------------------------------------------------------------------------

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hash2(ix, iy, s) {
  let h = Math.imul(ix | 0, 374761393) ^ Math.imul(iy | 0, 668265263) ^ Math.imul(s | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
const sm = (t) => t * t * (3 - 2 * t);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const sstep = (a, b, v) => sm(clamp01((v - a) / (b - a)));
const lerp = (a, b, k) => a + (b - a) * k;

// Value noise; px/py > 0 makes it tile with those integer periods.
function vnoise(x, y, s, px = 0, py = 0) {
  const x0 = Math.floor(x), y0 = Math.floor(y), fx = sm(x - x0), fy = sm(y - y0);
  let xa = x0, xb = x0 + 1, ya = y0, yb = y0 + 1;
  if (px) { xa = ((xa % px) + px) % px; xb = ((xb % px) + px) % px; }
  if (py) { ya = ((ya % py) + py) % py; yb = ((yb % py) + py) % py; }
  const a = hash2(xa, ya, s), b = hash2(xb, ya, s), c = hash2(xa, yb, s), d = hash2(xb, yb, s);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}
function fbm(x, y, s, oct = 4) {
  let sum = 0, amp = 1, norm = 0, f = 1;
  for (let o = 0; o < oct; o++) { sum += vnoise(x * f, y * f, s + o * 17) * amp; norm += amp; amp *= 0.5; f *= 2; }
  return sum / norm;
}
// Tileable fBm over the unit square, base periods px × py.
function tfbm(u, v, px, py, s, oct = 4) {
  let sum = 0, amp = 1, norm = 0, f = 1;
  for (let o = 0; o < oct; o++) {
    sum += vnoise(u * px * f, v * py * f, s + o * 31, px * f, py * f) * amp;
    norm += amp; amp *= 0.5; f *= 2;
  }
  return sum / norm;
}
// Tileable Worley on an n × n grid → writes f1, f2 (cell units) and id into out.
function worleyGrid(n, s, jitter = 0.85) {
  const pts = new Float32Array(n * n * 2);
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    pts[(j * n + i) * 2] = i + 0.5 + (hash2(i, j, s) - 0.5) * jitter;
    pts[(j * n + i) * 2 + 1] = j + 0.5 + (hash2(i, j, s + 9) - 0.5) * jitter;
  }
  return (u, v, out) => {
    const x = u * n, y = v * n, cx = Math.floor(x), cy = Math.floor(y);
    let f1 = 9, f2 = 9, id = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const gx = cx + dx, gy = cy + dy, wx = ((gx % n) + n) % n, wy = ((gy % n) + n) % n, k = (wy * n + wx) * 2;
      const px = pts[k] + (gx - wx), py = pts[k + 1] + (gy - wy);
      const d = Math.hypot(px - x, py - y);
      if (d < f1) { f2 = f1; f1 = d; id = wy * n + wx; } else if (d < f2) f2 = d;
    }
    out.f1 = f1; out.f2 = f2; out.id = id;
  };
}

// ---------------------------------------------------------------------------------------------
// Ground textures (cached per pattern pair + size; generated once, ~1.4 MB each at 512 incl. mips)
// ---------------------------------------------------------------------------------------------

// Each pattern factory returns (u, v, o) → sets o.a (albedo mult), o.h (height 0..1), o.r (roughness), o.g (glow mask).
const PAT = {
  grass(s) {
    return (u, v, o) => {
      const blades = vnoise(u * 160, v * 48, s, 160, 48), blades2 = vnoise(u * 64, v * 200, s + 3, 64, 200);
      const clump = tfbm(u, v, 6, 6, s + 5, 3), fleck = vnoise(u * 256, v * 256, s + 7, 256, 256);
      const hf = blades * 0.55 + blades2 * 0.45;
      o.a = 0.58 + 0.28 * hf + 0.2 * clump - (fleck > 0.86 ? 0.16 : 0) + (fleck < 0.06 ? 0.12 : 0);
      o.h = hf * 0.6 + clump * 0.4; o.r = 0.92; o.g = 0;
    };
  },
  soil(s) {
    const W = worleyGrid(22, s), w = {};
    return (u, v, o) => {
      W(u, v, w);
      const base = tfbm(u, v, 5, 5, s + 2, 4), grain = vnoise(u * 220, v * 220, s + 4, 220, 220);
      const peb = sstep(0.42, 0.18, w.f1) * (hash2(w.id, 1, s) > 0.45 ? 1 : 0);
      o.a = 0.66 + 0.22 * base + 0.1 * grain + peb * (0.12 + 0.12 * hash2(w.id, 2, s));
      o.h = base * 0.5 + peb * 0.5 + grain * 0.1; o.r = 0.95 - peb * 0.15; o.g = 0;
    };
  },
  sand(s) {
    return (u, v, o) => {
      const warp = tfbm(u, v, 3, 3, s, 3);
      const rip = Math.sin((v + warp * 0.35 + u * 0.15) * Math.PI * 2 * 18) * 0.5 + 0.5;
      const grain = vnoise(u * 256, v * 256, s + 2, 256, 256), mac = tfbm(u, v, 4, 4, s + 6, 3);
      o.a = 0.8 + 0.1 * rip + 0.08 * grain + 0.06 * mac - (grain > 0.93 ? 0.2 : 0);
      o.h = rip * 0.7 + grain * 0.15 + mac * 0.15; o.r = 0.96; o.g = 0;
    };
  },
  shingle(s) {
    const W = worleyGrid(26, s, 0.9), w = {};
    return (u, v, o) => {
      W(u, v, w);
      const stone = sstep(0.0, 0.32, w.f2 - w.f1), tone = hash2(w.id, 3, s);
      o.a = 0.5 + stone * (0.28 + 0.25 * tone);
      o.h = stone * (0.6 + 0.4 * (1 - w.f1)); o.r = 0.55 + 0.3 * (1 - stone); o.g = 0;
    };
  },
  cracked(s) {
    const W = worleyGrid(9, s, 0.9), w = {};
    return (u, v, o) => {
      W(u, v, w);
      const n = tfbm(u, v, 8, 8, s + 1, 4), crack = sstep(0.07, 0.015, w.f2 - w.f1 + (n - 0.5) * 0.03);
      const plate = hash2(w.id, 5, s);
      o.a = 0.72 + 0.16 * plate + 0.12 * n - crack * 0.42;
      o.h = (0.7 + 0.3 * n) * (1 - crack) + 0.05; o.r = 0.95; o.g = crack;
    };
  },
  gravel(s) {
    const W = worleyGrid(40, s, 0.95), w = {};
    return (u, v, o) => {
      W(u, v, w);
      const st = sstep(0.0, 0.25, w.f2 - w.f1), dust = tfbm(u, v, 6, 6, s + 2, 3);
      o.a = 0.68 + st * 0.26 * hash2(w.id, 4, s) + dust * 0.12;
      o.h = st * 0.7 + dust * 0.3; o.r = 0.93; o.g = 0;
    };
  },
  mud(s) {
    return (u, v, o) => {
      const n = tfbm(u, v, 4, 4, s, 5), d = tfbm(u, v, 12, 12, s + 3, 3);
      const wet = sstep(0.55, 0.66, n);
      o.a = 0.72 + 0.16 * d - wet * 0.22;
      o.h = n * 0.8 + d * 0.2 - wet * 0.3; o.r = lerp(0.85, 0.28, wet); o.g = 0;
    };
  },
  flagstone(s) {
    const W = worleyGrid(6, s, 0.75), w = {};
    return (u, v, o) => {
      W(u, v, w);
      const gap = w.f2 - w.f1, n = tfbm(u, v, 10, 10, s + 2, 4), chip = vnoise(u * 180, v * 180, s + 4, 180, 180);
      const joint = sstep(0.09, 0.03, gap), bevel = sstep(0.03, 0.2, gap);
      const tone = hash2(w.id, 6, s);
      o.a = (0.7 + 0.2 * tone + 0.1 * n - (chip > 0.9 ? 0.1 : 0)) * (1 - joint * 0.5);
      o.h = bevel * (0.75 + 0.25 * n); o.r = 0.82 + joint * 0.1; o.g = 0;
    };
  },
  basalt(s) {
    const W = worleyGrid(10, s, 0.4), w = {};
    return (u, v, o) => {
      W(u, v, w);
      const gap = w.f2 - w.f1, n = tfbm(u, v, 8, 8, s + 1, 4);
      const crack = sstep(0.08, 0.02, gap), tone = hash2(w.id, 8, s);
      o.a = 0.66 + 0.16 * tone + 0.14 * n - crack * 0.4;
      o.h = (1 - crack) * (0.7 + 0.3 * n); o.r = 0.78 + 0.15 * n; o.g = crack;
    };
  },
  ash(s) {
    return (u, v, o) => {
      const n = tfbm(u, v, 6, 6, s, 4), g = vnoise(u * 240, v * 240, s + 2, 240, 240);
      o.a = 0.72 + 0.18 * n + 0.1 * g; o.h = n * 0.7 + g * 0.3; o.r = 0.97; o.g = 0;
    };
  },
};

const _groundTex = new Map();
function groundTextures(a, b, S, aniso) {
  const key = a + "|" + b + "|" + S + "|" + aniso;
  const hit = _groundTex.get(key);
  if (hit) { hit.refs++; return hit; }
  const pa = PAT[a](11), pb = PAT[b](23), oa = {}, ob = {};
  const M = new Uint8Array(S * S * 4), D = new Uint8Array(S * S * 4);
  const b8 = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const u = x / S, v = y / S, k = (y * S + x) * 4;
    pa(u, v, oa); pb(u, v, ob);
    M[k] = b8(oa.a); M[k + 1] = b8(ob.a); M[k + 2] = b8(tfbm(u, v, 3, 3, 77, 3)); M[k + 3] = b8(oa.g);
    D[k] = b8(oa.h); D[k + 1] = b8(oa.r); D[k + 2] = b8(ob.h); D[k + 3] = b8(ob.r);
  }
  const mk = (arr, name) => {
    const t = new T.DataTexture(arr, S, S, T.RGBAFormat, T.UnsignedByteType);
    t.wrapS = t.wrapT = T.RepeatWrapping; t.magFilter = T.LinearFilter; t.minFilter = T.LinearMipmapLinearFilter;
    t.generateMipmaps = true; t.anisotropy = aniso; t.name = name; t.needsUpdate = true;
    return t;
  };
  const rec = { map: mk(M, "arena-ground-map"), data: mk(D, "arena-ground-data"), refs: 1, key, bytes: S * S * 4 * 2 * 1.333 };
  _groundTex.set(key, rec);
  return rec;
}
function releaseGround(rec) {
  if (--rec.refs > 0) return;
  rec.map.dispose(); rec.data.dispose(); _groundTex.delete(rec.key);
}

// ---------------------------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------------------------

const _m = new T.Matrix4(), _q = new T.Quaternion(), _e = new T.Euler(), _v = new T.Vector3(), _s = new T.Vector3();
function mat(pos, rot = [0, 0, 0], scl = 1) {
  _e.set(rot[0], rot[1], rot[2]); _q.setFromEuler(_e);
  if (typeof scl === "number") _s.set(scl, scl, scl); else _s.set(scl[0], scl[1], scl[2]);
  return new T.Matrix4().compose(_v.set(pos[0], pos[1], pos[2]), _q, _s);
}

// Deform a geometry radially by value noise (positions-keyed, so shared verts stay welded).
function lumpy(g, amt, seed, freq = 1.6) {
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = fbm(x * freq + 13.1, z * freq + y * freq * 0.7 + 7.7, seed, 2) - 0.5;
    const k = 1 + n * amt * 2;
    p.setXYZ(i, x * k, y * (1 + n * amt), z * k);
  }
  g.computeVertexNormals();
  return g;
}

// Merge parts [{g, m, c}] into one geometry with position/normal/uv/color.
function mergeParts(parts) {
  let nv = 0, ni = 0;
  for (const p of parts) { nv += p.g.attributes.position.count; ni += p.g.index ? p.g.index.count : p.g.attributes.position.count; }
  const P = new Float32Array(nv * 3), N = new Float32Array(nv * 3), U = new Float32Array(nv * 2), C = new Float32Array(nv * 3);
  const I = nv > 65535 ? new Uint32Array(ni) : new Uint16Array(ni);
  const nm = new T.Matrix3(), v = new T.Vector3();
  let vo = 0, io = 0;
  for (const { g, m, c } of parts) {
    const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv, col = g.attributes.color;
    nm.getNormalMatrix(m);
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(m); P.set([v.x, v.y, v.z], (vo + i) * 3);
      if (nor) { v.fromBufferAttribute(nor, i).applyMatrix3(nm).normalize(); N.set([v.x, v.y, v.z], (vo + i) * 3); }
      if (uv) { U[(vo + i) * 2] = uv.getX(i); U[(vo + i) * 2 + 1] = uv.getY(i); }
      const k = col ? col.getX(i) : 1;
      C[(vo + i) * 3] = c.r * k; C[(vo + i) * 3 + 1] = c.g * (col ? col.getY(i) : 1); C[(vo + i) * 3 + 2] = c.b * (col ? col.getZ(i) : 1);
    }
    if (g.index) for (let i = 0; i < g.index.count; i++) I[io++] = g.index.getX(i) + vo;
    else for (let i = 0; i < pos.count; i++) I[io++] = i + vo;
    vo += pos.count;
  }
  const out = new T.BufferGeometry();
  out.setAttribute("position", new T.BufferAttribute(P, 3));
  out.setAttribute("normal", new T.BufferAttribute(N, 3));
  out.setAttribute("uv", new T.BufferAttribute(U, 2));
  out.setAttribute("color", new T.BufferAttribute(C, 3));
  out.setIndex(new T.BufferAttribute(I, 1));
  out.computeBoundingSphere(); out.computeBoundingBox();
  return out;
}

// Grass/reed tuft: n tapered blades fanning out, vertex colour dark base → light tip, upward normals.
function tuftGeometry(n, h, spread, lean, seed, bladeW = 0.035) {
  const rnd = mulberry32(seed), P = [], N = [], C = [], U = [];
  for (let b = 0; b < n; b++) {
    const a = (b / n) * Math.PI * 2 + rnd() * 0.8, r = spread * (0.2 + rnd() * 0.8);
    const bh = h * (0.6 + rnd() * 0.5), w = bladeW * (0.7 + rnd() * 0.6);
    const ox = Math.cos(a) * r * 0.3, oz = Math.sin(a) * r * 0.3;
    const tx = Math.cos(a) * (r + lean * bh), tz = Math.sin(a) * (r + lean * bh);
    const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
    const mx = (ox + tx) * 0.5, mz = (oz + tz) * 0.5;
    // two triangles: base quad → tip
    const v = [[ox - px, 0, oz - pz], [ox + px, 0, oz + pz], [mx + px * 0.6, bh * 0.55, mz + pz * 0.6], [mx - px * 0.6, bh * 0.55, mz - pz * 0.6], [tx, bh, tz]];
    const tri = [[0, 1, 2], [0, 2, 3], [3, 2, 4]];
    for (const t of tri) for (const i of t) {
      P.push(...v[i]);
      N.push(Math.cos(a) * 0.35, 0.9, Math.sin(a) * 0.35);
      const k = v[i][1] / bh; C.push(0.45 + 0.65 * k, 0.5 + 0.6 * k, 0.45 + 0.55 * k);
      U.push(0, k);
    }
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(P, 3));
  g.setAttribute("normal", new T.Float32BufferAttribute(N, 3));
  g.setAttribute("color", new T.Float32BufferAttribute(C, 3));
  g.setAttribute("uv", new T.Float32BufferAttribute(U, 2));
  return g;
}

// ---------------------------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------------------------

const GROUND_BUMP = T.ShaderChunk.bumpmap_pars_fragment
  .replace("uniform float bumpScale;", "uniform float bumpScale;\n\tfloat sbH( vec2 uv ) { vec4 t = texture2D( bumpMap, uv ); return mix( t.x, t.z, vSb.x ); }")
  .replace(/texture2D\( bumpMap, (vUv[^)]*)\)\.x/g, "sbH( $1 )");

function groundMaterial(tex, U, glowColor) {
  const m = new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 1, metalness: 0, map: tex.map, roughnessMap: tex.data, bumpMap: tex.data, bumpScale: 0.035 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uGlow = { value: glowColor };
    sh.uniforms.uTime = U.uTime;
    sh.vertexShader = "attribute vec2 aSb;\nvarying vec2 vSb;\n" + sh.vertexShader.replace("#include <begin_vertex>", "#include <begin_vertex>\nvSb = aSb;");
    sh.fragmentShader = "varying vec2 vSb;\nuniform vec3 uGlow;\nuniform float uTime;\n" + sh.fragmentShader
      .replace("#include <bumpmap_pars_fragment>", GROUND_BUMP)
      .replace("#include <map_fragment>", `
        vec4 sbT = texture2D( map, vUv );
        float sbM = texture2D( map, vUv * 0.0917 + vec2( 0.31, 0.17 ) ).b;
        diffuseColor.rgb *= mix( sbT.r, sbT.g, vSb.x ) * ( 0.78 + 0.44 * sbM );`)
      .replace("#include <roughnessmap_fragment>", `
        float roughnessFactor = roughness;
        vec4 texelRoughness = texture2D( roughnessMap, vUv );
        roughnessFactor *= mix( texelRoughness.g, texelRoughness.a, vSb.x );`)
      .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        totalEmissiveRadiance += uGlow * sbT.a * vSb.y * ( 0.75 + 0.25 * sin( uTime * 1.7 + vUv.x * 3.0 + vUv.y * 2.0 ) );`);
  };
  m.customProgramCacheKey = () => "sb-ground";
  return m;
}

// Adds a time-driven vertex wobble to a standard material. `snippet` runs after begin_vertex.
// Double-sided blades keep their (upward) normal on both faces instead of flipping dark.
const NO_FLIP = T.ShaderChunk.normal_fragment_begin.replace("normal = normal * faceDirection;", "");
function withWind(m, U, key, snippet) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = U.uTime;
    sh.vertexShader = "uniform float uTime;\n" + sh.vertexShader.replace("#include <begin_vertex>", "#include <begin_vertex>\n" + snippet);
    if (m.side === T.DoubleSide && key !== "cloth") sh.fragmentShader = sh.fragmentShader.replace("#include <normal_fragment_begin>", NO_FLIP);
  };
  m.customProgramCacheKey = () => "sb-wind-" + key;
  return m;
}

const POINTS_VS = `
uniform float uTime, uScale, uSway, uFlicker, uFall;
uniform vec3 uDrift, uBox, uCenter;
attribute vec4 aSeed;
attribute vec3 aColor;
attribute float aSize;
varying vec3 vColor;
varying float vAlpha;
varying float vSpin;
void main() {
  vec3 p = position;
  float t = uTime + aSeed.x * 100.0;
  vAlpha = 1.0;
  if ( uBox.x > 0.0 ) {
    p += uDrift * uTime * ( 0.6 + 0.8 * aSeed.y );
    p = uCenter + mod( p - uCenter + uBox, 2.0 * uBox ) - uBox;
    p.x += sin( t * 1.3 + aSeed.z * 6.28 ) * uSway;
    p.z += cos( t * 0.9 + aSeed.w * 6.28 ) * uSway;
    p.y += sin( t * 0.7 ) * uSway * 0.4;
    vec3 q = abs( p - uCenter ) / uBox;
    vAlpha = smoothstep( 1.0, 0.7, max( q.x, max( q.y, q.z ) ) );
  }
  vAlpha *= 1.0 - uFlicker + uFlicker * ( 0.5 + 0.5 * sin( t * ( 2.0 + aSeed.y * 4.0 ) ) );
  vSpin = abs( sin( t * ( 1.5 + aSeed.z * 2.0 ) ) ) * uFall;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4( p, 1.0 );
  gl_PointSize = aSize * uScale / max( 0.5, -mv.z );
  gl_Position = projectionMatrix * mv;
}`;
const POINTS_FS = `
uniform float uOpacity, uHard;
varying vec3 vColor;
varying float vAlpha;
varying float vSpin;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  c.x /= max( 0.25, 1.0 - vSpin * 0.75 );
  float d = length( c ) * 2.0;
  float a = mix( pow( clamp( 1.0 - d, 0.0, 1.0 ), 1.6 ), smoothstep( 1.0, 0.75, d ), uHard );
  if ( a < 0.01 ) discard;
  gl_FragColor = vec4( vColor, a * vAlpha * uOpacity );
  #include <encodings_fragment>
}`;

function pointsMaterial(U, o) {
  return new T.ShaderMaterial({
    uniforms: {
      uTime: U.uTime, uScale: U.uScale, uSway: { value: o.sway || 0 }, uFlicker: { value: o.flicker || 0 }, uFall: { value: o.fall || 0 },
      uDrift: { value: new T.Vector3().fromArray(o.drift || [0, 0, 0]) }, uBox: { value: new T.Vector3().fromArray(o.box || [0, 0, 0]) },
      uCenter: { value: new T.Vector3().fromArray(o.center || [0, 0, 0]) }, uOpacity: { value: o.opacity ?? 1 }, uHard: { value: o.hard || 0 },
    },
    vertexShader: POINTS_VS, fragmentShader: POINTS_FS, transparent: true, depthWrite: false,
    blending: o.additive === false ? T.NormalBlending : T.AdditiveBlending,
  });
}

// ---------------------------------------------------------------------------------------------
// buildArena
// ---------------------------------------------------------------------------------------------

export function buildArena(scene, opts = {}) {
  const chapter = (((opts.chapter | 0) % 10) + 10) % 10;
  const titan = !!opts.titan;
  const kindIdx = titan ? 5 : chapter % 5;
  const K = KIND[kindIdx];
  const Q = QUALITY[opts.quality] || QUALITY.high;
  const pal = (opts.palette && opts.palette.length >= 4 ? opts.palette : (titan ? TITAN_PALETTE : PALETTES[chapter])).slice();
  if (!pal[4]) pal[4] = (titan ? TITAN_PALETTE : PALETTES[chapter])[4];
  const TH = titan ? TITAN_THEME : THEMES[chapter];
  const C = (h) => new T.Color(h);
  // The game's rig is bright (hemi 1.25 + sun 2.0 + exposure 1.3 ≈ ×4.5 on albedo), so theme
  // colours are authored as "look" colours and scaled down here to keep the ground mid-dark.
  const AG = 0.42, AP = 0.55;
  const D = (h, k) => new T.Color(h).multiplyScalar(k);
  const col = {
    skyTop: C(pal[0]), horizon: C(pal[1]), accent: C(pal[4]),
    grass: D(TH.grass, AG), grass2: D(TH.grass2, AG), worn: D(TH.worn, AG * 0.9), hill: D(TH.hill, AG), rock: D(TH.rock, AP), bark: D(TH.bark, AP),
    tuft: D(TH.tuft, AG * 1.1), cloth: D(TH.cloth, AP), sil: C(TH.sil),
  };
  // Fog: horizon pulled toward the sky top and darkened, so distance reads as depth, not grey wash.
  col.fog = col.horizon.clone().lerp(col.skyTop, 0.45).multiplyScalar(0.85);
  const seed = titan ? 1337 : 101 + chapter * 7;
  const rnd = mulberry32(seed);
  const R = (a, b) => a + (b - a) * rnd();

  const root = new T.Group(); root.name = "arena";
  scene.add(root);
  const owned = { geos: new Set(), mats: new Set(), texs: new Set() };
  const own = (x) => {
    if (!x) return x;
    if (x.isBufferGeometry) owned.geos.add(x);
    else if (x.isMaterial) { if (!x.userData.shared) owned.mats.add(x); }
    else if (x.isTexture) owned.texs.add(x);
    return x;
  };
  let texBytes = 0;
  const U = { uTime: { value: 0 }, uScale: { value: 800 } };
  const updaters = [];
  const vh = () => {
    if (!opts.renderer) return 1688;
    const v = new T.Vector2(); opts.renderer.getDrawingBufferSize(v); return v.y;
  };
  U.uScale.value = vh() * 0.5 * 1.07; // ≈ projection[1][1] for fov 50

  // ---------------- terrain ----------------
  const waterLevel = K === KIND[1] ? -0.12 : kindIdx === 3 ? -0.1 : null;
  const lavaLevel = titan ? -0.25 : null;
  // Dirt path: from the camera side through the arena, winding off into the background.
  const path = [[0.6, 14], [0.4, 5], [0, -0.5], [-0.8, -6.5], [-2.6, -13], [-1.2, -21], [2.6, -30], [4.5, -42]];
  const pathDist = (x, z) => {
    let best = 1e9;
    for (let i = 0; i < path.length - 1; i++) {
      const [ax, az] = path[i], [bx, bz] = path[i + 1], dx = bx - ax, dz = bz - az;
      const t = clamp01(((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz));
      const d = Math.hypot(x - ax - dx * t, z - az - dz * t);
      if (d < best) best = d;
    }
    return best;
  };
  // Arena ellipse metric (1 = edge of the worn patch).
  const arenaR = (x, z) => Math.hypot(x / 4.8, (z + 0.6) / 4.5);
  const flatR = (x, z) => Math.hypot(x / 6.8, (z + 1.2) / 6.8);
  const heightAt = (x, z) => {
    const flat = sstep(1.0, 2.3, flatR(x, z));
    let h = (fbm(x * 0.07, z * 0.07, seed + 1, 3) - 0.5) * 1.4 * flat;
    const back = sstep(-9, -38, z), side = sstep(9, 26, Math.abs(x));
    h += K.hills * Math.max(back, side * 0.85) * (0.35 + 0.9 * fbm(x * 0.035 + 3, z * 0.035, seed + 2, 3)) * flat;
    if (kindIdx === 1) { // sea to the back-left: ground drops below the water line
      const shore = -11 - x * 0.3 + (fbm(x * 0.08, z * 0.08, seed + 3, 3) - 0.5) * 6;
      const s = sstep(shore + 1.5, shore - 2.5, z) * flat;
      h = lerp(h, -1.6, s);
    } else if (kindIdx === 3) { // marsh pools
      const pn = fbm(x * 0.09 + 5, z * 0.09, seed + 4, 3), s = sstep(0.5, 0.6, pn) * sstep(1.05, 1.5, flatR(x, z));
      h = lerp(h, -0.9, s);
    } else if (titan) { // lava chasm crossing behind the enemies, plus pools
      const cz = -14 + Math.sin(x * 0.18) * 2.2 + (fbm(x * 0.1, 3, seed + 5, 2) - 0.5) * 2;
      const s = sstep(2.4, 1.2, Math.abs(z - cz)) * sstep(0.9, 1.4, flatR(x, z));
      const pool = sstep(0.62, 0.7, fbm(x * 0.08 + 9, z * 0.08, seed + 6, 3)) * sstep(1.3, 1.8, flatR(x, z));
      h = lerp(h, -1.4, Math.max(s, pool));
    }
    const pd = pathDist(x, z);
    h = lerp(h, Math.min(h, 0.15 + h * 0.2), sstep(2.5, 0.8, pd) * flat);
    return h;
  };
  const wearAt = (x, z) => {
    const n = fbm(x * 0.6, z * 0.6, seed + 7, 3);
    const arena = sstep(1.08, 0.78, arenaR(x, z) + (n - 0.5) * 0.35);
    const pw = 0.85 + (fbm(x * 0.2, z * 0.2, seed + 8, 2) - 0.5) * 0.6;
    const pth = sstep(pw, pw * 0.45, pathDist(x, z) + (n - 0.5) * 0.4);
    let w = Math.max(arena * (0.75 + 0.25 * n), pth * 0.9);
    w = Math.max(w, sstep(0.72, 0.8, fbm(x * 0.15 + 2, z * 0.15, seed + 9, 3)) * 0.8); // bare patches
    return clamp01(w);
  };

  // Ground grid: dense near the arena, coarse at the edges (x = 95·(0.22u + 0.78u³)).
  // groundY() samples the triangulated grid itself, so props sit on the mesh even at steep edges.
  const GN = Q.grid, EXT = 95, GH = new Float32Array((GN + 1) * (GN + 1));
  const remap = (u) => EXT * (0.22 * u + 0.78 * u * u * u);
  const unmap = (x) => { let lo = -1, hi = 1; for (let k = 0; k < 24; k++) { const m = (lo + hi) / 2; if (remap(m) < x) lo = m; else hi = m; } return (lo + hi) / 2; };
  const groundY = (x, z) => {
    const gx = (unmap(x) + 1) / 2 * GN, gz = (unmap(z + 6) + 1) / 2 * GN;
    const i = Math.min(GN - 1, Math.max(0, Math.floor(gx))), j = Math.min(GN - 1, Math.max(0, Math.floor(gz)));
    const fx = clamp01(gx - i), fz = clamp01(gz - j), W = GN + 1;
    const a = GH[j * W + i], b = GH[j * W + i + 1], d = GH[(j + 1) * W + i], e = GH[(j + 1) * W + i + 1];
    return fx + fz <= 1 ? a + (b - a) * fx + (d - a) * fz : e + (d - e) * (1 - fx) + (b - e) * (1 - fz);
  };
  {
    const N = GN;
    const nv = (N + 1) * (N + 1);
    const P = new Float32Array(nv * 3), UV = new Float32Array(nv * 2), CO = new Float32Array(nv * 3), SB = new Float32Array(nv * 2);
    const tile = 4.2, c = new T.Color();
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
      const x = remap(i / N * 2 - 1), z = remap(j / N * 2 - 1) - 6, k = j * (N + 1) + i;
      const h = heightAt(x, z), w = wearAt(x, z);
      P[k * 3] = x; P[k * 3 + 1] = h; P[k * 3 + 2] = z; GH[k] = h;
      UV[k * 2] = x / tile; UV[k * 2 + 1] = -z / tile;
      const n = fbm(x * 0.12, z * 0.12, seed + 10, 3), n2 = fbm(x * 0.5, z * 0.5, seed + 11, 2);
      c.copy(col.grass).lerp(col.grass2, sstep(0.35, 0.7, n));
      c.lerp(col.hill, clamp01(h / Math.max(1, K.hills)) * 0.8);
      c.multiplyScalar(0.9 + 0.2 * n2);
      c.lerp(col.worn, w);
      let glow = 0;
      if (waterLevel != null) {
        const wet = sstep(waterLevel + 0.5, waterLevel + 0.05, h); c.multiplyScalar(1 - wet * 0.4);
        if (kindIdx === 1) c.lerp(D("#e8f0f0", 0.55), sstep(0.09, 0.0, Math.abs(h - waterLevel - 0.04)) * 0.8);
      }
      if (titan) {
        glow = sstep(lavaLevel + 0.9, lavaLevel + 0.15, h) + sstep(0.9, 0.55, arenaR(x, z)) * 0.3 + 0.06;
        c.lerp(new T.Color("#2a1210"), sstep(lavaLevel + 0.6, lavaLevel, h) * 0.6);
      }
      CO[k * 3] = c.r; CO[k * 3 + 1] = c.g; CO[k * 3 + 2] = c.b;
      SB[k * 2] = w; SB[k * 2 + 1] = glow;
    }
    const I = new Uint32Array(N * N * 6);
    let o = 0;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const a = j * (N + 1) + i, b = a + 1, d = a + N + 1, e = d + 1;
      I[o++] = a; I[o++] = d; I[o++] = b; I[o++] = b; I[o++] = d; I[o++] = e;
    }
    const g = own(new T.BufferGeometry());
    g.setAttribute("position", new T.BufferAttribute(P, 3));
    g.setAttribute("uv", new T.BufferAttribute(UV, 2));
    g.setAttribute("color", new T.BufferAttribute(CO, 3));
    g.setAttribute("aSb", new T.BufferAttribute(SB, 2));
    g.setIndex(new T.BufferAttribute(I, 1));
    g.computeVertexNormals(); g.computeBoundingSphere();
    const aniso = Math.min(Q.aniso, opts.renderer ? opts.renderer.capabilities.getMaxAnisotropy() : Q.aniso);
    var groundTex = groundTextures(K.a, K.b, Q.tex, aniso);
    texBytes += groundTex.bytes;
    const glowCol = titan ? new T.Color("#ff5a14").multiplyScalar(2.2) : new T.Color(0, 0, 0);
    const gm = own(groundMaterial(groundTex, U, glowCol));
    const ground = new T.Mesh(g, gm);
    ground.receiveShadow = true; ground.name = "arena-ground";
    root.add(ground);
  }

  // ---------------- water / lava ----------------
  if (waterLevel != null || titan) {
    const S = 128, data = new Uint8Array(S * S * 4);
    // Tileable normal map from a ripple height field.
    const hf = (x, y) => tfbm(x / S, y / S, 6, 6, seed + 40, 3) * 0.7 + vnoise(x / S * 24, y / S * 24, seed + 41, 24, 24) * 0.3;
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const k = (y * S + x) * 4;
      if (titan) {
        const n = tfbm(x / S, y / S, 4, 4, seed + 42, 4), w = tfbm(x / S, y / S, 9, 9, seed + 43, 3);
        const vein = sstep(0.1, 0.0, Math.abs(n - 0.5)) * 0.8 + w * 0.35;
        data[k] = 255 * clamp01(0.55 + vein * 0.45); data[k + 1] = 255 * clamp01(0.18 + vein * 0.55); data[k + 2] = 255 * clamp01(0.05 + vein * 0.2); data[k + 3] = 255;
      } else {
        const dx = hf(x + 1, y) - hf(x - 1, y), dy = hf(x, y + 1) - hf(x, y - 1);
        const nx = -dx * 6, ny = -dy * 6, nz = 1, l = Math.hypot(nx, ny, nz);
        data[k] = (nx / l * 0.5 + 0.5) * 255; data[k + 1] = (ny / l * 0.5 + 0.5) * 255; data[k + 2] = (nz / l * 0.5 + 0.5) * 255; data[k + 3] = 255;
      }
    }
    const tex = own(new T.DataTexture(data, S, S, T.RGBAFormat, T.UnsignedByteType));
    tex.wrapS = tex.wrapT = T.RepeatWrapping; tex.magFilter = T.LinearFilter; tex.minFilter = T.LinearMipmapLinearFilter;
    tex.generateMipmaps = true; tex.repeat.set(18, 18); tex.needsUpdate = true;
    if (titan) tex.encoding = T.sRGBEncoding;
    texBytes += S * S * 4 * 1.33;
    let m;
    if (titan) {
      m = own(new T.MeshBasicMaterial({ map: tex, color: new T.Color(1.5, 1.05, 0.85), toneMapped: false }));
      updaters.push((t) => { tex.offset.set(t * 0.004, t * 0.007); });
    } else {
      const wc = D(TH.water, 0.5);
      m = own(new T.MeshStandardMaterial({ color: wc, roughness: 0.18, metalness: 0.2, normalMap: tex, normalScale: new T.Vector2(0.3, 0.3), envMapIntensity: 0.55 }));
      updaters.push((t) => { tex.offset.set(t * 0.006, t * 0.011); });
    }
    const g = own(new T.PlaneGeometry(190, 190, 1, 1)); g.rotateX(-Math.PI / 2);
    const w = new T.Mesh(g, m);
    w.position.set(0, titan ? lavaLevel : waterLevel, -6); w.receiveShadow = !titan; w.name = titan ? "arena-lava" : "arena-water";
    root.add(w);
  }

  // ---------------- decal: cracked rune circle under the fight ----------------
  {
    const S = Q.tex >= 512 ? 512 : Q.tex >= 256 ? 512 : 256;
    const glowing = titan || TH.crystals || kindIdx === 3 && chapter === 8;
    const mkCanvas = () => { const c = document.createElement("canvas"); c.width = c.height = S; return c; };
    const ca = mkCanvas(), ga = ca.getContext("2d");
    const cg = glowing ? mkCanvas() : null, gg = cg && cg.getContext("2d");
    const drnd = mulberry32(seed + 99);
    const cx = S / 2, cy = S / 2, R0 = S * 0.43;
    const both = (fn) => { fn(ga, 1); if (gg) fn(gg, 0); };
    // Opaque black base: the alphaMap reads G, so coverage must be composited grey, not canvas alpha.
    ga.fillStyle = "#000"; ga.fillRect(0, 0, S, S); if (gg) { gg.fillStyle = "#000"; gg.fillRect(0, 0, S, S); }
    ga.lineCap = "round"; ga.lineJoin = "round"; if (gg) { gg.lineCap = "round"; gg.lineJoin = "round"; }
    // rings
    both((g, a) => {
      g.strokeStyle = a ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.9)";
      g.lineWidth = S * 0.011; g.beginPath(); g.arc(cx, cy, R0, 0, Math.PI * 2); g.stroke();
      g.lineWidth = S * 0.006; g.beginPath(); g.arc(cx, cy, R0 * 0.86, 0, Math.PI * 2); g.stroke();
      if (a) { g.lineWidth = S * 0.004; g.beginPath(); g.arc(cx, cy, R0 * 0.42, 0, Math.PI * 2); g.stroke(); }
    });
    // glyphs: seeded stroke sets placed around the band (original abstract marks)
    const glyphs = [];
    for (let i = 0; i < 6; i++) {
      const gl = [];
      const n = 2 + Math.floor(drnd() * 3);
      for (let k = 0; k < n; k++) gl.push([drnd() * 2 - 1, drnd() * 2 - 1, drnd() * 2 - 1, drnd() * 2 - 1, drnd() < 0.3]);
      glyphs.push(gl);
    }
    const NG = 18;
    for (let i = 0; i < NG; i++) {
      const a = (i / NG) * Math.PI * 2, gx = cx + Math.cos(a) * R0 * 0.93, gy = cy + Math.sin(a) * R0 * 0.93, sz = S * 0.018;
      const gl = glyphs[i % glyphs.length];
      both((g, al) => {
        g.save(); g.translate(gx, gy); g.rotate(a + Math.PI / 2);
        g.strokeStyle = al ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,1)"; g.lineWidth = S * 0.0045;
        for (const [x0, y0, x1, y1, arc] of gl) {
          g.beginPath();
          if (arc) g.arc(x0 * sz * 0.5, y0 * sz * 0.5, sz * 0.5, 0, Math.PI * (1 + Math.abs(x1)));
          else { g.moveTo(x0 * sz, y0 * sz); g.lineTo(x1 * sz, y1 * sz); }
          g.stroke();
        }
        g.restore();
      });
    }
    // radial cracks starting on the ring, branching outward and inward
    const crack = (x, y, ang, len, w, depth) => {
      let px = x, py = y;
      const steps = 6 + Math.floor(drnd() * 6);
      for (let s = 0; s < steps; s++) {
        ang += (drnd() - 0.5) * 0.9;
        const nx = px + Math.cos(ang) * len / steps, ny = py + Math.sin(ang) * len / steps;
        both((g, al) => {
          g.strokeStyle = al ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.8)";
          g.lineWidth = Math.max(1, w * (1 - s / steps)); g.beginPath(); g.moveTo(px, py); g.lineTo(nx, ny); g.stroke();
        });
        if (depth < 2 && drnd() < 0.18) crack(nx, ny, ang + (drnd() < 0.5 ? 0.7 : -0.7), len * 0.45, w * 0.6, depth + 1);
        px = nx; py = ny;
      }
    };
    for (let i = 0; i < 9; i++) {
      const a = drnd() * Math.PI * 2, out = drnd() < 0.6;
      crack(cx + Math.cos(a) * R0, cy + Math.sin(a) * R0, a + (out ? 0 : Math.PI) + (drnd() - 0.5) * 0.6, S * (0.08 + drnd() * 0.12), S * 0.008, 0);
    }
    // scuffs and scorch blotches (alpha only)
    // faint soot ring just inside the outer circle
    { const gr = ga.createRadialGradient(cx, cy, R0 * 0.7, cx, cy, R0 * 1.02); gr.addColorStop(0, "rgba(255,255,255,0)"); gr.addColorStop(0.88, "rgba(255,255,255,0.08)"); gr.addColorStop(1, "rgba(255,255,255,0)");
      ga.fillStyle = gr; ga.fillRect(0, 0, S, S); }
    // alpha texture: put coverage in G (alphaMap reads .g)
    const at = own(new T.CanvasTexture(ca)); at.anisotropy = Math.min(4, Q.aniso);
    texBytes += S * S * 4 * 1.33;
    const dm = own(new T.MeshStandardMaterial({
      color: titan ? new T.Color("#120806") : col.worn.clone().multiplyScalar(0.28), roughness: 0.95, metalness: 0,
      alphaMap: at, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    }));
    if (cg) {
      const et = own(new T.CanvasTexture(cg)); et.encoding = T.sRGBEncoding;
      texBytes += S * S * 4 * 1.33;
      dm.emissiveMap = et; dm.emissive = col.accent.clone(); dm.emissiveIntensity = titan ? 3.0 : 2.2;
      updaters.push((t) => { dm.emissiveIntensity = (titan ? 2.8 : 2.0) + Math.sin(t * 1.6) * 0.4; });
    }
    const g = own(new T.PlaneGeometry(1, 1)); g.rotateX(-Math.PI / 2);
    const decal = new T.Mesh(g, dm);
    decal.scale.set(10.4, 1, 9.8); decal.position.set(0, 0.02, -0.6); decal.receiveShadow = true; decal.renderOrder = 1;
    decal.name = "arena-decal";
    root.add(decal);
  }

  // ---------------- props (merged per material, split into shadow casters / non-casters) ----------------
  const stoneT = proceduralTexture("stone", { size: Q.tex >= 512 ? 256 : 128, repeat: 1 });
  const woodT = proceduralTexture("wood", { size: Q.tex >= 512 ? 256 : 128 });
  const clothT = proceduralTexture("cloth", { size: 128 });
  const M = {
    stone: own(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, map: stoneT.map, roughnessMap: stoneT.roughnessMap, bumpMap: stoneT.bumpMap, bumpScale: 0.03, roughness: 1, flatShading: true, envMapIntensity: 0.3 })),
    bark: own(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, map: woodT.map, roughnessMap: woodT.roughnessMap, bumpMap: woodT.bumpMap, bumpScale: 0.02, roughness: 1, envMapIntensity: 0.3 })),
    leaf: own(withWind(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.85, flatShading: true, envMapIntensity: 0.4 }), U, "leaf",
      "transformed.x += sin( uTime * 1.3 + position.x * 0.35 + position.z * 0.2 ) * 0.04 * max( position.y - 1.5, 0.0 );")),
    cloth: own(withWind(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, map: clothT.map, roughness: 0.95, side: T.DoubleSide, envMapIntensity: 0.3 }), U, "cloth",
      "transformed.z += sin( uTime * 2.6 - uv.y * 5.0 + position.x * 0.7 ) * 0.09 * ( 1.0 - uv.y );")),
    metal: own(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.45, metalness: 0.8, envMapIntensity: 1.0 })),
    crystal: own(new T.MeshStandardMaterial({ color: col.accent.clone().multiplyScalar(0.25), emissive: col.accent, emissiveIntensity: 2.5, roughness: 0.2, metalness: 0.1, flatShading: true, envMapIntensity: 1.2 })),
    glow: own(new T.MeshBasicMaterial({ vertexColors: true, color: new T.Color(2.2, 2.2, 2.2), toneMapped: false })),
  };
  if (TH.crystals || TH.mushrooms) updaters.push((t) => { M.crystal.emissiveIntensity = 2.5 + Math.sin(t * 1.9) * 0.4; });
  const groups = {}; // key = mat|near → parts
  const tmpGeos = new Set();
  const tg = (g) => { tmpGeos.add(g); return g; };
  const sm = (near) => (near ? "s" : 0); // small prop near the field: casts on High, tagged userData.prop
  const add = (mk, g, pos, rot, scl, c, near) => {
    const key = mk + "|" + (near === "s" ? "s" : near ? 1 : 0);
    (groups[key] || (groups[key] = [])).push({ g, m: mat(pos, rot, scl), c: c.isColor ? c : C(c) });
  };
  const vary = (c, amt = 0.12) => c.clone().multiplyScalar(1 - amt + rnd() * amt * 2);

  // shared base geometries
  const G = {
    cyl6: tg(new T.CylinderGeometry(0.5, 0.5, 1, 6, 1)),
    cyl8: tg(new T.CylinderGeometry(0.5, 0.5, 1, 8, 1)),
    trunk: tg(new T.CylinderGeometry(0.32, 0.5, 1, 7, 2)),
    cone: tg(new T.ConeGeometry(0.5, 1, 7, 1)),
    blob: tg(lumpy(new T.IcosahedronGeometry(1, 1), 0.18, seed + 3, 1.2)),
    blob2: tg(lumpy(new T.IcosahedronGeometry(1, 1), 0.22, seed + 5, 1.6)),
    boulder: tg(lumpy(new T.IcosahedronGeometry(1, 1), 0.25, seed + 7, 1.1)),
    box: tg(new T.BoxGeometry(1, 1, 1)),
    col: tg(new T.CylinderGeometry(0.3, 0.34, 1, 10, 1)),
    oct: tg(new T.OctahedronGeometry(0.5, 0)),
    hex: tg(new T.CylinderGeometry(0.5, 0.5, 1, 6, 1)),
    rockCyl: tg(lumpy(new T.CylinderGeometry(0.5, 0.56, 1, 9, 3), 0.12, seed + 9, 2.2)),
    banner: tg(new T.PlaneGeometry(0.7, 1.5, 3, 6)),
    bowl: tg(new T.CylinderGeometry(0.42, 0.22, 0.28, 10, 1, true)),
    cap: tg(new T.SphereGeometry(0.5, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2)),
  };
  G.banner.translate(0, -0.75, 0); // hang from the top edge

  // glow sprites (one Points draw) and their positions
  const glowPts = [];
  const glowAt = (x, y, z, c, size) => glowPts.push({ p: [x, y, z], c: c.isColor ? c : C(c), s: size });

  // Placement: rejection-sample positions in a region, keeping the battlefield + path clear.
  const clearOK = (x, z, m = 0) => !(Math.abs(x) < 4.5 + m && z > -7 - m && z < 4.5 + m) && pathDist(x, z) > 1.3 + m * 0.5;
  const placed = [];
  const spot = (x0, x1, z0, z1, minD, margin = 0, tries = 40) => {
    for (let k = 0; k < tries; k++) {
      const x = R(x0, x1), z = R(z0, z1);
      if (!clearOK(x, z, margin)) continue;
      if (waterLevel != null && groundY(x, z) < waterLevel + 0.05 && kindIdx !== 1) continue;
      if (lavaLevel != null && groundY(x, z) < 0) continue;
      if (placed.some((p) => Math.hypot(p[0] - x, p[1] - z) < Math.max(minD, p[2]))) continue;
      placed.push([x, z, minD]);
      return [x, groundY(x, z), z];
    }
    return null;
  };
  const nProps = (n) => Math.max(1, Math.round(n * Q.props));
  // Frame slots: left / right of the field and a back row behind the enemies.
  const frameSlots = (fn, nSide, nBack, nMid, sizeK = 1) => {
    // sides: just outside the clear zone so canopies/tops enter the frame edges
    for (let side of [-1, 1]) for (let i = 0; i < nSide; i++) {
      const s = spot(side * 4.8, side * 7.5, -8.5, -1, 2.4 * sizeK); if (s) fn(s, true, 1);
    }
    for (let i = 0; i < nBack; i++) { const s = spot(-10, 10, -15, -8.2, 2.6 * sizeK); if (s) fn(s, s[2] > -13, 0.95); }
    for (let i = 0; i < nProps(nMid); i++) { const s = spot(-28, 28, -42, -14, 3 * sizeK); if (s) fn(s, false, 1.2); }
  };

  // ---- prop builders ----
  const broadTree = ([x, y, z], near, k = 1) => {
    const s = R(0.85, 1.35) * k, lean = [R(-0.08, 0.08), 0, R(-0.08, 0.08)];
    add("bark", G.trunk, [x, y + 1.3 * s, z], lean, [0.42 * s, 2.6 * s, 0.42 * s], vary(col.bark), near);
    const leaves = TH.leaves || ["#4a6a30"];
    const nb = 3 + Math.floor(rnd() * 2);
    for (let i = 0; i < nb; i++) {
      const a = rnd() * 6.28, r = i === 0 ? 0 : R(0.6, 1.0) * s;
      add("leaf", i % 2 ? G.blob2 : G.blob, [x + Math.cos(a) * r, y + (i === 0 ? 3.3 : R(2.5, 3.2)) * s, z + Math.sin(a) * r * 0.8],
        [rnd() * 3, rnd() * 3, 0], [R(1.0, 1.35) * s, R(0.8, 1.0) * s, R(1.0, 1.35) * s], vary(D(leaves[Math.floor(rnd() * leaves.length)], AP), 0.1), near);
    }
  };
  const pine = ([x, y, z], near, k = 1) => {
    const s = R(0.9, 1.5) * k;
    add("bark", G.trunk, [x, y + 0.8 * s, z], [0, 0, 0], [0.3 * s, 1.6 * s, 0.3 * s], vary(col.bark), near);
    const lc = vary(D((TH.leaves || ["#3a5a2a"])[0], AP * 0.75), 0.1);
    for (let i = 0; i < 3; i++) add("leaf", G.cone, [x, y + (1.5 + i * 1.05) * s, z], [0, rnd() * 3, 0], [(2.2 - i * 0.55) * s, 1.8 * s, (2.2 - i * 0.55) * s], lc, near);
  };
  const deadTree = ([x, y, z], near, k = 1) => {
    const s = R(0.9, 1.4) * k, c = vary(col.bark.clone().multiplyScalar(0.85));
    add("bark", G.trunk, [x, y + 1.2 * s, z], [R(-0.12, 0.12), 0, R(-0.12, 0.12)], [0.36 * s, 2.4 * s, 0.36 * s], c, near);
    for (let i = 0; i < 4; i++) {
      const a = rnd() * 6.28, h = R(1.4, 2.3) * s, tilt = R(0.6, 1.1);
      add("bark", G.trunk, [x + Math.cos(a) * 0.35 * s, y + h + 0.35 * s, z + Math.sin(a) * 0.35 * s], [Math.sin(a) * tilt, 0, -Math.cos(a) * tilt], [0.12 * s, R(1.0, 1.6) * s, 0.12 * s], c, near);
    }
  };
  const boulder = ([x, y, z], near, k = 1, c = col.rock) => {
    const s = R(0.6, 1.3) * k;
    add("stone", G.boulder, [x, y + 0.25 * s, z], [rnd() * 3, rnd() * 3, rnd() * 3], [s * R(0.9, 1.4), s * R(0.6, 0.9), s * R(0.9, 1.3)], vary(c), sm(near));
  };
  const hoodoo = ([x, y, z], near, k = 1, cap = true) => {
    const s = R(0.8, 1.3) * k, strata = TH.strata || [TH.rock];
    let h = y, r = R(1.0, 1.6) * s;
    const n = 3 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const sh = R(0.9, 1.6) * s;
      add("stone", G.rockCyl, [x + R(-0.1, 0.1), h + sh / 2, z + R(-0.1, 0.1)], [0, rnd() * 6, 0], [r * 2, sh, r * 2], vary(D(strata[i % strata.length], AP), 0.08), near);
      h += sh * 0.96; r *= R(0.72, 1.02);
    }
    if (cap) add("stone", G.boulder, [x, h + 0.2 * s, z], [rnd(), rnd() * 3, rnd()], [r * 1.5, 0.5 * s, r * 1.4], vary(D(strata[strata.length - 1], AP), 0.05), near);
  };
  const mesa = ([x, y, z], near, k = 1) => {
    const s = R(1.0, 1.6) * k, strata = TH.strata || [TH.rock];
    let h = y - 0.5, r = R(3.5, 6) * s;
    for (let i = 0; i < 3; i++) {
      const sh = R(1.6, 3.2) * s;
      add("stone", G.rockCyl, [x, h + sh / 2, z], [0, rnd() * 6, 0], [r * 2, sh, r * 1.6], vary(D(strata[(i + 1) % strata.length], AP), 0.06), near);
      h += sh * 0.97; r *= R(0.8, 0.95);
    }
  };
  const column = ([x, y, z], near, k = 1, broken = rnd() < 0.55) => {
    const s = R(0.9, 1.2) * k, h = broken ? R(1.2, 3.2) * s : 4.4 * s, c = vary(col.rock, 0.06);
    add("stone", G.box, [x, y + 0.2 * s, z], [0, 0, 0], [1.0 * s, 0.4 * s, 1.0 * s], c, near);
    add("stone", G.col, [x, y + 0.4 * s + h / 2, z], [broken ? R(-0.06, 0.06) : 0, rnd(), broken ? R(-0.06, 0.06) : 0], [1.25 * s, h, 1.25 * s], c, near);
    if (!broken) add("stone", G.box, [x, y + 0.4 * s + h + 0.18 * s, z], [0, 0, 0], [1.05 * s, 0.36 * s, 1.05 * s], c, near);
    else add("stone", G.col, [x + R(0.8, 1.6) * (rnd() < 0.5 ? -1 : 1), y + 0.35 * s, z + R(-0.8, 0.8)], [0, rnd() * 6, Math.PI / 2], [1.2 * s, R(0.7, 1.3) * s, 1.2 * s], vary(col.rock, 0.06), false);
  };
  const arch = ([x, y, z], near, k = 1) => {
    const s = k, c = vary(col.rock, 0.05), ry = R(-0.25, 0.25);
    const dx = Math.cos(ry) * 1.7 * s, dz = -Math.sin(ry) * 1.7 * s;
    for (const sg of [-1, 1]) {
      add("stone", G.box, [x + dx * sg, y + 2.0 * s, z + dz * sg], [0, ry, 0], [0.9 * s, 4.0 * s, 0.9 * s], c, near);
    }
    add("stone", G.box, [x, y + 4.3 * s, z], [0, ry, R(-0.04, 0.04)], [4.5 * s, 0.7 * s, 1.0 * s], c, near);
  };
  const wall = ([x, y, z], near, k = 1) => {
    const s = k, c = col.rock, ry = R(-0.4, 0.4), n = 4 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const off = (i - n / 2) * 0.95 * s, hh = R(0.8, 2.6) * s * (i === 0 || i === n - 1 ? 0.6 : 1);
      add("stone", G.box, [x + Math.cos(ry) * off, y + hh / 2, z - Math.sin(ry) * off], [0, ry, 0], [0.92 * s, hh, 0.7 * s], vary(c, 0.08), near);
    }
  };
  const crystals = ([x, y, z], near, k = 1) => {
    const s = R(0.7, 1.2) * k, n = 3 + Math.floor(rnd() * 4);
    add("stone", G.boulder, [x, y + 0.1, z], [rnd(), rnd() * 3, rnd()], [0.9 * s, 0.4 * s, 0.9 * s], vary(col.rock.clone().multiplyScalar(0.7)), sm(near));
    for (let i = 0; i < n; i++) {
      const a = rnd() * 6.28, t = i === 0 ? 0 : R(0.3, 0.7), h = (i === 0 ? 2.2 : R(0.9, 1.6)) * s;
      add("crystal", G.oct, [x + Math.cos(a) * 0.25 * s, y + h * 0.4, z + Math.sin(a) * 0.25 * s], [Math.sin(a) * t, rnd() * 3, -Math.cos(a) * t], [0.45 * s, h, 0.45 * s], col.accent, sm(near));
    }
    glowAt(x, y + 1.0 * s, z, col.accent, 3.2 * s);
  };
  const brazier = ([x, y, z], near) => {
    add("stone", G.cyl8, [x, y + 0.5, z], [0, 0, 0], [0.5, 1.0, 0.5], vary(col.rock), sm(near));
    add("metal", G.bowl, [x, y + 1.12, z], [0, 0, 0], 1, D("#6a5a48", AP), sm(near));
    add("glow", G.cone, [x, y + 1.42, z], [0, 0, 0], [0.5, 0.6, 0.5], C(chapter === 9 || titan ? "#ff8a30" : "#ffb050"), false);
    glowAt(x, y + 1.5, z, chapter === 7 ? col.accent : C("#ff9a40"), 3.4);
    emberSources.push([x, y + 1.5, z]);
  };
  const banner = ([x, y, z], near, k = 1) => {
    const s = k;
    add("bark", G.cyl6, [x, y + 1.7 * s, z], [0, 0, 0], [0.09 * s, 3.4 * s, 0.09 * s], vary(col.bark), sm(near));
    add("bark", G.cyl6, [x, y + 3.25 * s, z + 0.05], [0, 0, Math.PI / 2], [0.06 * s, 0.9 * s, 0.06 * s], vary(col.bark), sm(near));
    add("cloth", G.banner, [x, y + 3.2 * s, z + 0.08], [0, R(-0.15, 0.15), 0], [s, s, s], vary(col.cloth, 0.08), sm(near));
  };
  const post = ([x, y, z], near, k = 1, lantern = false) => {
    const s = R(0.8, 1.2) * k, tilt = [R(-0.12, 0.12), 0, R(-0.12, 0.12)];
    add("bark", G.cyl6, [x, y + 0.9 * s, z], tilt, [0.18 * s, 2.6 * s, 0.18 * s], vary(col.bark.clone().multiplyScalar(0.8)), sm(near));
    if (lantern) {
      add("glow", G.box, [x + 0.25, y + 2.0 * s, z], [0, 0.5, 0], [0.2, 0.28, 0.2], col.accent, false);
      glowAt(x + 0.25, y + 2.0 * s, z, col.accent, 2.6);
    }
  };
  const log = ([x, y, z], near, k = 1) => {
    const s = R(0.8, 1.3) * k;
    add("bark", G.trunk, [x, y + 0.22 * s, z], [Math.PI / 2, 0, rnd() * 3], [0.45 * s, R(2.2, 3.4) * s, 0.45 * s], vary(col.bark), sm(near));
  };
  const stump = ([x, y, z], near) => add("bark", G.trunk, [x, y + 0.3, z], [0, rnd() * 3, 0], [0.6, 0.6, 0.6], vary(col.bark), sm(near));
  const basalt = ([x, y, z], near, k = 1) => {
    const n = 5 + Math.floor(rnd() * 6), s = R(0.8, 1.3) * k;
    for (let i = 0; i < n; i++) {
      const a = rnd() * 6.28, r = Math.sqrt(rnd()) * 1.3 * s, h = R(1.2, 4.6) * s * (1 - r / (2 * s));
      const cx = x + Math.cos(a) * r, cz = z + Math.sin(a) * r, top = y + h - 0.2, bot = Math.min(y, groundY(cx, cz)) - 0.4;
      add("stone", G.hex, [cx, (top + bot) / 2, cz], [0, rnd(), 0], [0.75 * s, top - bot, 0.75 * s], vary(col.rock, 0.15), near);
    }
  };
  const mushroom = ([x, y, z], near) => {
    for (let i = 0; i < 3; i++) {
      const s = R(0.4, 0.9), ox = R(-0.5, 0.5), oz = R(-0.5, 0.5);
      add("bark", G.cyl6, [x + ox, y + 0.35 * s, z + oz], [0, 0, 0], [0.12 * s, 0.7 * s, 0.12 * s], D("#c8d8d8", AP), sm(near));
      add("crystal", G.cap, [x + ox, y + 0.68 * s, z + oz], [0, 0, 0], [0.9 * s, 0.5 * s, 0.9 * s], col.accent, sm(near));
    }
    glowAt(x, y + 0.6, z, col.accent, 2.2);
  };
  const emberSources = [];

  // ---- per-kind layouts ----
  if (titan) {
    frameSlots((s, near, k) => basalt(s, near, k * 1.15), 2, 3, 12, 1.2);
    for (let i = 0; i < nProps(16); i++) { const s = spot(-24, 24, -40, -7.2, 1.6); if (s) boulder(s, false, R(0.8, 2.2), col.rock); }
    for (let i = 0; i < 2; i++) { const s = spot(-9, 9, -12, -7, 3); if (s) brazier(s, true); }
  } else if (kindIdx === 0) {
    frameSlots((s, near, k) => (rnd() < 0.7 ? broadTree : pine)(s, near, k), 2, 4, 30, 1.1);
    for (let i = 0; i < nProps(8); i++) { const s = spot(-14, 14, -20, -7.2, 1.5); if (s) (i % 3 ? boulder : i % 2 ? log : stump)(s, s[2] > -12, 0.9); }
    for (let i = 0; i < nProps(10); i++) { const s = spot(-30, 30, -45, -20, 4); if (s) pine(s, false, 1.6); }
  } else if (kindIdx === 1) {
    for (let side of [-1, 1]) for (let i = 0; i < 2; i++) { const s = spot(side * 5.2, side * 10, -10, 0, 2.5); if (s) (i ? boulder(s, true, 1.6) : post(s, true, 1.3)); }
    for (let i = 0; i < nProps(9); i++) { const s = spot(-26, 10, -34, -12, 2); if (s) post(s, false, 1.2); } // old pier pylons in the water
    for (let i = 0; i < nProps(6); i++) { const s = spot(-30, 20, -45, -16, 6); if (s) hoodooStack(s); } // sea stacks
    for (let i = 0; i < nProps(8); i++) { const s = spot(-14, 18, -18, -7.2, 1.8); if (s) (i % 2 ? log : boulder)(s, s[2] > -12, 1.0); }
    for (let i = 0; i < nProps(8); i++) { const s = spot(8, 30, -40, -10, 3); if (s) (rnd() < 0.6 ? pine : boulder)(s, false, 1.2); }
  } else if (kindIdx === 2) {
    frameSlots((s, near, k) => hoodoo(s, near, k), 2, 3, 10, 1.3);
    for (let i = 0; i < nProps(5); i++) { const s = spot(-34, 34, -48, -24, 8); if (s) mesa(s, false, 1.2); }
    for (let i = 0; i < nProps(12); i++) { const s = spot(-16, 16, -24, -7.2, 1.6); if (s) boulder(s, s[2] > -12, R(0.6, 1.4)); }
    for (let i = 0; i < 3; i++) { const s = spot(-10, 10, -14, -7.5, 2.5); if (s) (i < 2 ? banner(s, true, 1) : deadTree(s, true)); }
    if (TH.crystals) for (let i = 0; i < nProps(6); i++) { const s = spot(-14, 14, -22, -7.5, 2.5); if (s) crystals(s, s[2] > -12, 1.1); }
  } else if (kindIdx === 3) {
    frameSlots((s, near, k) => deadTree(s, near, k * 1.1), 2, 4, 18, 1.0);
    for (let i = 0; i < nProps(6); i++) { const s = spot(-12, 12, -18, -7.5, 2.4); if (s) post(s, s[2] > -12, 1, true); }
    for (let i = 0; i < nProps(8); i++) { const s = spot(-16, 16, -24, -7.2, 1.6); if (s) (i % 2 ? stump : boulder)(s, s[2] > -12, 0.8); }
    if (TH.mushrooms) for (let i = 0; i < nProps(8); i++) { const s = spot(-12, 12, -20, -7.5, 1.8); if (s) mushroom(s, false); }
    for (let i = 0; i < nProps(10); i++) { const s = spot(-30, 30, -45, -22, 4); if (s) broadTree(s, false, 1.3); }
  } else {
    // ruins: colonnade flanking the field, a gate over the path, broken walls, crystals and braziers
    for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
      const z = -10 + i * 3.6 + R(-0.4, 0.4), x = side * R(5.4, 6.6);
      if (clearOK(x, z)) { placed.push([x, z, 1.8]); column([x, groundY(x, z), z], true, 1, i !== 1); }
    }
    { const z = -16, x = pathXAt(-16); placed.push([x, z, 3]); arch([x, groundY(x, z), z], false, 1.1); }
    for (let i = 0; i < nProps(7); i++) { const s = spot(-26, 26, -38, -11, 4); if (s) wall(s, false, 1.1); }
    for (let i = 0; i < nProps(8); i++) { const s = spot(-26, 26, -40, -11, 3); if (s) column(s, false, 1.1); }
    for (let i = 0; i < nProps(5); i++) { const s = spot(-12, 12, -18, -7.5, 2.4); if (s) crystals(s, s[2] > -12, 1.1); }
    for (let i = 0; i < 2; i++) { const s = spot(-8, 8, -9.5, -6.5, 3); if (s) brazier(s, true); }
    for (let i = 0; i < 2; i++) { const s = spot(-10, 10, -14, -7, 3); if (s) banner(s, true, 1.1); }
    for (let i = 0; i < nProps(8); i++) { const s = spot(-30, 30, -46, -20, 4); if (s) broadTree(s, false, 1.2); }
  }
  function hoodooStack(s) { // sea stack: broad, tapering, flat-topped (no cap stone)
    const [x, , z] = s, base = Math.min(groundY(x, z), -0.6), w = R(1.6, 2.6);
    let h = base, r = w;
    for (let i = 0; i < 4; i++) { const sh = R(1.2, 2.2); add("stone", G.rockCyl, [x + R(-0.3, 0.3), h + sh / 2, z + R(-0.3, 0.3)], [R(-0.08, 0.08), rnd() * 6, R(-0.08, 0.08)], [r * 2, sh, r * 1.7], vary(col.rock, 0.1), false); h += sh * 0.95; r *= R(0.7, 0.9); }
  }
  function pathXAt(z) { for (let i = 0; i < path.length - 1; i++) { const [ax, az] = path[i], [bx, bz] = path[i + 1]; if (z <= az && z >= bz) return lerp(ax, bx, (z - az) / (bz - az)); } return 0; }

  for (const key of Object.keys(groups)) {
    const [mk, near] = key.split("|");
    const g = own(mergeParts(groups[key]));
    const mesh = new T.Mesh(g, M[mk]);
    mesh.receiveShadow = mk !== "glow";
    mesh.castShadow = (near === "1" || near === "s") && Q.casters && mk !== "glow" && mk !== "cloth";
    if (near === "s") mesh.userData.prop = true;
    mesh.name = "arena-props-" + mk + (near === "1" ? "-near" : near === "s" ? "-small" : "");
    root.add(mesh);
  }
  for (const g of tmpGeos) g.dispose();

  // ---------------- instanced scatter: rocks/pebbles, tufts, secondary (reeds, ferns, shards...) ----------------
  const inView = () => { // sample (x, z) roughly evenly in screen space over the visible ground
    const u = rnd(), z = 6.5 - 44 * Math.pow(u, 1.25), hw = 3.2 + (6.5 - z) * 0.32;
    return [R(-hw, hw), z];
  };
  // units: allies z 2.0/2.5 (|x| ≤ 1.85), enemies z -3.2/-3.7 (|x| ≤ 2.0), titan z -3.8
  const unitClear = (x, z, r) => !(z > 1.6 - r && z < 2.9 + r && Math.abs(x) < 2.35 + r) && !(z > -4.1 - r && z < -2.8 + r && Math.abs(x) < 2.5 + r) && !(titan && Math.hypot(x, z + 3.8) < 2.2 + r);
  const scatterOK = (x, y, z) => (waterLevel == null || y > waterLevel + 0.04) && (lavaLevel == null || y > lavaLevel + 0.5);
  const _o = new T.Object3D();
  const instanced = (geo, material, count, place, name) => {
    const im = new T.InstancedMesh(own(geo), material, count);
    let n = 0;
    for (let k = 0; k < count * 6 && n < count; k++) {
      const r = place(_o, n);
      if (!r) continue;
      _o.updateMatrix(); im.setMatrixAt(n, _o.matrix); im.setColorAt(n, r); n++;
    }
    im.count = n; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.receiveShadow = true; im.name = name; im.frustumCulled = false;
    root.add(im);
    return im;
  };

  // rocks + pebbles (one InstancedMesh, flat shaded)
  {
    const g = lumpy(new T.IcosahedronGeometry(1, 1), 0.28, seed + 21, 1.4);
    const rm = own(new T.MeshStandardMaterial({ color: 0xffffff, map: stoneT.map, roughnessMap: stoneT.roughnessMap, roughness: 1, flatShading: true, envMapIntensity: 0.3 }));
    const n = Q.rocks;
    instanced(g, rm, n, (o, i) => {
      let x, z, s;
      const kind = i / n;
      if (kind < 0.45) { // pebbles around the arena rim and the path
        const a = rnd() * 6.28, rr = R(0.85, 1.25);
        if (rnd() < 0.6) { x = Math.cos(a) * 5.0 * rr; z = Math.sin(a) * 3.9 * rr - 0.5; } else { [x, z] = inView(); if (pathDist(x, z) > 1.4) return null; }
        s = R(0.04, 0.12);
      } else if (kind < 0.85) { [x, z] = inView(); s = R(0.12, 0.38); if (arenaR(x, z) < 0.9) return null; }
      else { [x, z] = inView(); s = R(0.4, 0.9); if (!clearOK(x, z, 0.3)) return null; }
      if (!unitClear(x, z, s)) return null;
      const y = groundY(x, z);
      if (lavaLevel != null && y < lavaLevel + 0.3) return null;
      o.position.set(x, y + s * 0.15, z); o.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3); o.scale.set(s * R(0.9, 1.5), s * R(0.5, 0.9), s * R(0.9, 1.4));
      return vary(col.rock, 0.18);
    }, "arena-rocks");
  }

  // grass / dune grass / dry scrub tufts
  if (!titan) {
    const g = tuftGeometry(kindIdx === 2 ? 9 : 8, kindIdx === 2 ? 0.18 : 0.22, 0.1, kindIdx === 2 ? 0.6 : 0.4, seed + 31, kindIdx === 2 ? 0.014 : 0.024);
    const tm = own(withWind(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.9, side: T.DoubleSide, envMapIntensity: 0.3 }), U, "tuft",
      "transformed.x += sin( uTime * 2.1 + instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.5 ) * 0.25 * position.y * position.y;"));
    instanced(g, tm, Q.tufts, () => {
      const [x, z] = inView(), y = groundY(x, z);
      if (!scatterOK(x, y, z)) return null;
      const w = wearAt(x, z), dens = fbm(x * 0.25, z * 0.25, seed + 33, 2);
      if (rnd() < w * 1.2 || rnd() > 0.35 + dens || !unitClear(x, z, 0.2)) return null;
      const s = R(0.6, 1.2) * (kindIdx === 1 ? 1.15 : 1);
      _o.position.set(x, y, z); _o.rotation.set(0, rnd() * 6.28, 0); _o.scale.set(s, s * R(0.8, 1.3), s);
      return vary(col.tuft, 0.2);
    }, "arena-tufts");
  }

  // secondary scatter: reeds (shore/marsh), ferns (forest), flowers (ruins), thorn scrub (badlands), obsidian shards (titan)
  {
    let g, m, place;
    if (kindIdx === 1 || kindIdx === 3) {
      g = tuftGeometry(9, 0.9, 0.14, 0.12, seed + 41, 0.018);
      m = own(withWind(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.85, side: T.DoubleSide }), U, "reed",
        "transformed.x += sin( uTime * 1.6 + instanceMatrix[3].x * 0.4 + instanceMatrix[3].z * 0.3 ) * 0.08 * position.y * position.y;"));
      place = () => { // hug the water line
        for (let k = 0; k < 8; k++) {
          const [x, z] = inView(), y = groundY(x, z);
          if (y > waterLevel - 0.45 && y < waterLevel + 0.35 && unitClear(x, z, 0.4) && clearOK(x, z, -2.5)) {
            const s = R(0.7, 1.3); _o.position.set(x, y, z); _o.rotation.set(0, rnd() * 6.28, 0); _o.scale.set(s, s * R(0.8, 1.4), s);
            return vary(col.tuft.clone().lerp(D("#a89a58", AG), 0.3), 0.15);
          }
        }
        return null;
      };
    } else if (titan) {
      g = new T.OctahedronGeometry(0.5, 0); g.scale(0.55, 1.2, 0.5);
      m = own(new T.MeshStandardMaterial({ color: "#151216", roughness: 0.15, metalness: 0.3, flatShading: true, envMapIntensity: 1.4 }));
      place = () => {
        const [x, z] = inView(), y = groundY(x, z);
        if (y < lavaLevel + 0.4 || !unitClear(x, z, 0.4) || arenaR(x, z) < 1.0 || z < -8) return null;
        if (rnd() < 0.6) return null;
        const s = R(0.15, 0.4); _o.position.set(x, y + s * 0.1, z); _o.rotation.set(R(-0.5, 0.5), rnd() * 6, R(-0.5, 0.5)); _o.scale.set(s, s, s);
        return C("#ffffff");
      };
    } else {
      const flowers = kindIdx === 4 || chapter === 5;
      g = kindIdx === 2 ? tuftGeometry(14, 0.5, 0.2, 0.9, seed + 43, 0.012) : flowers ? tuftGeometry(5, 0.22, 0.08, 0.3, seed + 45, 0.04) : tuftGeometry(8, 0.55, 0.15, 0.8, seed + 47, 0.07);
      m = own(withWind(new T.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.85, side: T.DoubleSide }), U, "s2",
        "transformed.x += sin( uTime * 1.8 + instanceMatrix[3].x * 0.5 ) * 0.12 * position.y;"));
      const fcols = flowers ? [D(pal[4], 0.6), D("#f4f0e0", 0.6), D(chapter === 5 ? "#ff9ac8" : "#e8d070", 0.6)] : null;
      place = () => {
        const [x, z] = inView(), y = groundY(x, z);
        if (!unitClear(x, z, 0.3) || wearAt(x, z) > 0.4 || arenaR(x, z) < 1.05) return null;
        const s = R(0.7, 1.3); _o.position.set(x, y, z); _o.rotation.set(0, rnd() * 6.28, 0); _o.scale.set(s, s, s);
        return flowers ? fcols[Math.floor(rnd() * 3)].clone() : kindIdx === 2 ? vary(D("#6a5034", AG), 0.2) : vary(col.tuft.clone().multiplyScalar(0.8), 0.15);
      };
    }
    instanced(g, m, titan ? Math.round(Q.scatter2 * 0.25) : Q.scatter2, place, "arena-scatter2");
  }

  // ---------------- sky dome + silhouette rings ----------------
  const sunDir = new T.Vector3(-0.35, 0.1, -1).normalize();
  {
    const g = own(new T.SphereGeometry(140, 32, 16));
    const p = g.attributes.position, cols = new Float32Array(p.count * 3), c = new T.Color(), d = new T.Vector3();
    const glowC = col.horizon.clone().lerp(new T.Color(1, 1, 1), 0.15);
    for (let i = 0; i < p.count; i++) {
      d.fromBufferAttribute(p, i).normalize();
      if (d.y >= 0) {
        c.copy(glowC).lerp(col.skyTop, Math.pow(Math.min(1, d.y * 2.2), 0.55));
        const s = Math.pow(Math.max(0, d.dot(sunDir)), 6); c.lerp(glowC.clone().multiplyScalar(1.3), s * 0.6);
      } else c.copy(col.fog);
      cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
    }
    g.setAttribute("color", new T.BufferAttribute(cols, 3));
    const sky = new T.Mesh(g, own(new T.MeshBasicMaterial({ vertexColors: true, side: T.BackSide, fog: false, depthWrite: false })));
    sky.position.set(0, 0, -4); sky.renderOrder = -10; sky.name = "arena-sky";
    root.add(sky);
  }
  const profile = (type, a, sd) => { // a: angle (0 = straight behind the arena), returns height
    const n = (f, o = 4) => fbm(Math.cos(a) * f + 50, Math.sin(a) * f + 50, sd, o);
    switch (type) {
      case "peaks": { const r = 1 - Math.abs(n(2.2) * 2 - 1); return 3 + Math.pow(r, 2.2) * 16 + n(9, 2) * 2; }
      case "mesa": { const v = n(1.8); const q = Math.floor(v * 4) / 4; return 2 + sstep(0.35, 0.5, v) * (4 + q * 14) + n(14, 2) * 0.8; }
      case "trees": { const base = 4 + n(1.5) * 6; const sp = Math.abs(((a * 70) % 2 + 2) % 2 - 1); return base + sp * 2.2 * (0.6 + n(20, 2)); }
      case "ruins": { const seg = Math.floor((a + 7) * 22), r = hash2(seg, 3, sd); const base = 2 + n(1.4) * 5; return base + (r > 0.82 ? 9 + r * 6 : r > 0.4 ? r * 5 : 0.3); }
      case "islands": { const v = n(1.6); return -1 + sstep(0.48, 0.62, v) * (4 + n(6, 2) * 5); }
      case "volcano": { const da = Math.abs(Math.atan2(Math.sin(a - 0.15), Math.cos(a - 0.15))); const cone = Math.max(0, 1 - da / 0.5); const crater = sstep(0.05, 0.0, da) * 2.5; const ridge = 1 - Math.abs(n(4, 3) * 2 - 1); return 3 + Math.pow(cone, 1.6) * 20 - crater + ridge * 6; }
      default: return 4;
    }
  };
  const ring = (type, radius, hScale, atmos, sd, name) => {
    const M_ = Q.ringSeg, P = [], CO = [], c = new T.Color(), top = [];
    for (let i = 0; i <= M_; i++) { const a = (i / M_) * Math.PI * 2 - Math.PI; top.push(Math.max(0.5, profile(type, a, sd)) * hScale); }
    const vtx = (i, y) => { const a = (i / M_) * Math.PI * 2 - Math.PI; return [Math.sin(a) * radius, y, -Math.cos(a) * radius - 4]; };
    const silC = col.sil.clone().lerp(col.fog, atmos);
    const tri = (A, B, Cc) => {
      const e1 = new T.Vector3(B[0] - A[0], B[1] - A[1], B[2] - A[2]), e2 = new T.Vector3(Cc[0] - A[0], Cc[1] - A[1], Cc[2] - A[2]);
      const nrm = e1.cross(e2).normalize();
      const lit = 0.75 + 0.5 * Math.max(0, -nrm.dot(sunDir) * 0.6 + nrm.y * 0.5);
      for (const V of [A, B, Cc]) {
        P.push(V[0], V[1], V[2]);
        const k = sstep(-3, Math.max(4, V[1]) * 0.9 + 1, V[1]);
        c.copy(col.fog).lerp(silC.clone().multiplyScalar(lit), 0.35 + 0.65 * k);
        CO.push(c.r, c.g, c.b);
      }
    };
    for (let i = 0; i < M_; i++) {
      const h0 = top[i], h1 = top[i + 1], m0 = h0 * 0.55, m1 = h1 * 0.55;
      const a0 = vtx(i, -4), a1 = vtx(i + 1, -4);
      const b0 = vtx(i, m0), b1 = vtx(i + 1, m1);
      const j = 1 + 0.03 * Math.sin(i * 2.3);
      b0[0] *= j; b0[2] = (b0[2] + 4) * j - 4; b1[0] *= 1 + 0.03 * Math.sin((i + 1) * 2.3); b1[2] = (b1[2] + 4) * (1 + 0.03 * Math.sin((i + 1) * 2.3)) - 4;
      const t0 = vtx(i, h0), t1 = vtx(i + 1, h1);
      tri(a0, b0, a1); tri(a1, b0, b1); tri(b0, t0, b1); tri(b1, t0, t1);
    }
    const g = own(new T.BufferGeometry());
    g.setAttribute("position", new T.Float32BufferAttribute(P, 3));
    g.setAttribute("color", new T.Float32BufferAttribute(CO, 3));
    g.computeBoundingSphere();
    const mesh = new T.Mesh(g, ringMat);
    mesh.name = name; mesh.renderOrder = -5;
    root.add(mesh);
  };
  const ringMat = own(new T.MeshBasicMaterial({ vertexColors: true, fog: false, side: T.DoubleSide }));
  ring(K.silFar, 112, 1.25, 0.55, seed + 61, "arena-horizon-far");
  ring(K.sil, 74, kindIdx === 1 ? 0.8 : 0.75, 0.25, seed + 62, "arena-horizon-mid");

  // ---------------- glow sprites + motes ----------------
  const pointsFrom = (list, material, name) => {
    const n = list.length, P = new Float32Array(n * 3), Cc = new Float32Array(n * 3), S = new Float32Array(n), SD = new Float32Array(n * 4);
    list.forEach((o, i) => {
      P.set(o.p, i * 3); Cc.set([o.c.r, o.c.g, o.c.b], i * 3); S[i] = o.s;
      SD.set([rnd(), rnd(), rnd(), rnd()], i * 4);
    });
    const g = own(new T.BufferGeometry());
    g.setAttribute("position", new T.BufferAttribute(P, 3));
    g.setAttribute("aColor", new T.BufferAttribute(Cc, 3));
    g.setAttribute("aSize", new T.BufferAttribute(S, 1));
    g.setAttribute("aSeed", new T.BufferAttribute(SD, 4));
    const pts = new T.Points(g, material);
    pts.frustumCulled = false; pts.name = name; pts.renderOrder = 5;
    root.add(pts);
    return pts;
  };
  if (titan) for (let i = 0; i < 18; i++) { // lava glow pools along the chasm
    const x = R(-22, 22), z = -14 + Math.sin(x * 0.18) * 2.2;
    glowAt(x, lavaLevel + 0.6, z, C("#ff6a20"), R(5, 9));
  }
  if (glowPts.length) pointsFrom(glowPts, own(pointsMaterial(U, { flicker: 0.35, opacity: 0.55 })), "arena-glows");

  if (Q.motes > 0) {
    const mode = TH.motes, mc = C(TH.moteColor), list = [], n = Q.motes;
    const cfg = {
      leaves: { drift: [0.25, -0.32, 0.05], sway: 0.5, additive: false, size: 0.13, hard: 1, fall: 1, opacity: 0.95 },
      petals: { drift: [0.3, -0.25, 0.08], sway: 0.5, additive: false, size: 0.12, hard: 1, fall: 1, opacity: 0.95 },
      spray: { drift: [0.4, 0.05, 0.1], sway: 0.3, size: 0.12, opacity: 0.55 },
      dust: { drift: [0.6, 0.02, 0.1], sway: 0.25, size: 0.14, opacity: 0.45 },
      fireflies: { drift: [0.05, 0.04, 0.0], sway: 0.9, size: 0.2, flicker: 0.9, opacity: 1 },
      sparks: { drift: [0.0, 0.25, 0.0], sway: 0.4, size: 0.14, flicker: 0.6, opacity: 0.9 },
      embers: { drift: [0.12, 0.7, 0.0], sway: 0.35, size: 0.12, flicker: 0.7, opacity: 1 },
    }[mode];
    const box = [12, 4, 10], center = [0, 3.4, -5];
    for (let i = 0; i < n; i++) {
      const c = mc.clone().multiplyScalar(cfg.additive === false ? R(0.4, 0.6) : R(0.8, 1.6));
      list.push({ p: [R(-box[0], box[0]) + center[0], R(-box[1], box[1]) + center[1], R(-box[2], box[2]) + center[2]], c, s: cfg.size * R(0.7, 1.4) });
    }
    pointsFrom(list, own(pointsMaterial(U, { ...cfg, box, center })), "arena-motes");
  }

  // ---------------- lights / fog ----------------
  const lights = {};
  if (titan && opts.quality !== "low") {
    const ember = new T.PointLight(0xff6a2a, 3.0, 26, 1.6);
    ember.position.set(0, 1.5, -11); root.add(ember); lights.ember = ember;
    updaters.push((t) => { ember.intensity = 2.6 + Math.sin(t * 3.1) * 0.3 + Math.sin(t * 7.3) * 0.15; });
  }
  const prevFog = scene.fog, prevBg = scene.background;
  if (opts.fog !== false) {
    scene.fog = new T.Fog(col.fog.clone(), 25, 70);
    scene.background = col.fog.clone();
  }

  // ---------------- stats ----------------
  let tris = 0, calls = 0;
  root.traverse((o) => {
    if (!o.isMesh && !o.isPoints) return;
    calls++;
    const g = o.geometry, n = g.index ? g.index.count / 3 : g.attributes.position.count / 3;
    if (o.isMesh) tris += n * (o.isInstancedMesh ? o.count : 1);
  });

  return {
    root,
    lights,
    colors: {
      fog: col.fog, accent: col.accent,
      hemiSky: col.horizon.clone().lerp(new T.Color(1, 1, 1), 0.35), hemiGround: col.worn.clone().multiplyScalar(0.6),
    },
    stats: { drawCalls: calls, triangles: Math.round(tris), textureMB: +(texBytes / 1048576).toFixed(2), kind: titan ? "titan" : ["forest", "shore", "badlands", "marsh", "ruins"][kindIdx], theme: TH.name },
    update(t) {
      U.uTime.value = t;
      for (const f of updaters) f(t);
    },
    dispose() {
      scene.remove(root);
      for (const g of owned.geos) g.dispose();
      for (const m of owned.mats) m.dispose();
      for (const t of owned.texs) t.dispose();
      releaseGround(groundTex);
      if (opts.fog !== false && scene.fog && scene.fog.isFog) { scene.fog = prevFog; scene.background = prevBg; }
      owned.geos.clear(); owned.mats.clear(); owned.texs.clear(); updaters.length = 0;
    },
  };
}

export const ARENA_THEMES = THEMES.map((t) => t.name).concat(TITAN_THEME.name);
