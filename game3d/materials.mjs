// Sigilbound 3D — procedural materials, environment light and kit-part geometry helpers.
//
// Everything here is generated in code (Canvas 2D + seeded noise); no downloaded textures.
// Targets Three.js r149 with sRGB output, ColorManagement.legacyMode = false, ACES tone mapping.
//
// Texture budget (default size 128):
//   each kind = 1 colour map (RGBA8, sRGB) + 1 packed data map (RGBA8, linear: R = bump height,
//   G = roughness — three.js reads bumpMap.r and roughnessMap.g, so one texture serves both).
//   128² × 4 B × 1.33 (mips) ≈ 87 KB per texture → ≈ 175 KB per kind, ≈ 1.2 MB for all 7 kinds.
//   (size 256 → ≈ 4.9 MB for all 7.) Clones made for opts.repeat share the GPU upload (r149 Source).
//
// Env map: default size 64 (cube render → PMREM) ≈ 0.7 MB half-float; size 256 uses
//   PMREMGenerator.fromScene directly ≈ 6.3 MB. Generated once per renderer.

import * as T from "three";

// ---------------------------------------------------------------------------------------------
// Seeded noise (all tileable: lattice periods are integers that divide the tile)
// ---------------------------------------------------------------------------------------------

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const smooth = (t) => t * t * (3 - 2 * t);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const fract = (v) => v - Math.floor(v);
const smoothstep = (a, b, v) => smooth(clamp01((v - a) / (b - a)));

// Tileable value-noise layer with integer periods px × py; returns sampler (u,v in [0,1)) → [0,1].
function valueLayer(rand, px, py) {
  const g = new Float32Array(px * py);
  for (let i = 0; i < g.length; i++) g[i] = rand();
  return (u, v) => {
    const x = fract(u) * px, y = fract(v) * py;
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = smooth(x - x0), fy = smooth(y - y0);
    const x1 = (x0 + 1) % px, y1 = (y0 + 1) % py;
    const a = g[y0 * px + x0], b = g[y0 * px + x1], c = g[y1 * px + x0], d = g[y1 * px + x1];
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
}

// Tileable fBm; px/py are the base periods (anisotropic when they differ).
function fbm(rand, px, py, octaves = 4, gain = 0.5) {
  const layers = [];
  let amp = 1, norm = 0;
  for (let o = 0; o < octaves; o++) {
    layers.push([valueLayer(rand, px << o, py << o), amp]);
    norm += amp; amp *= gain;
  }
  return (u, v) => {
    let s = 0;
    for (let i = 0; i < layers.length; i++) s += layers[i][0](u, v) * layers[i][1];
    return s / norm;
  };
}

// Tileable Worley/cellular noise on an n × n grid. Returns sampler → {f1, f2, id} (distances in cell units).
function worley(rand, n, jitter = 0.85) {
  const pts = new Float32Array(n * n * 2), ids = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) {
    pts[i * 2] = 0.5 + (rand() - 0.5) * jitter;
    pts[i * 2 + 1] = 0.5 + (rand() - 0.5) * jitter;
    ids[i] = rand();
  }
  const out = { f1: 0, f2: 0, id: 0 };
  return (u, v) => {
    const x = fract(u) * n, y = fract(v) * n;
    const cx = Math.floor(x), cy = Math.floor(y);
    let f1 = 1e9, f2 = 1e9, id = 0;
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
      const gx = cx + i, gy = cy + j;
      const k = ((gy + n) % n) * n + ((gx + n) % n);
      const dx = gx + pts[k * 2] - x, dy = gy + pts[k * 2 + 1] - y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < f1) { f2 = f1; f1 = d; id = ids[k]; } else if (d < f2) f2 = d;
    }
    out.f1 = f1; out.f2 = f2; out.id = id;
    return out;
  };
}

// ---------------------------------------------------------------------------------------------
// Texture generators. Each fills H (height 0..1), A (albedo multiplier 0..1), R (roughness 0..1).
// A is kept in a narrow bright band so the map tints rather than darkens the material colour.
// ---------------------------------------------------------------------------------------------

const GEN = {
  metal(S, rand, H, A, R) { // brushed streaks + faint smudges + a few scratches
    const streak = fbm(rand, 2, 96, 3, 0.55);
    const smudge = fbm(rand, 3, 3, 3);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      const s = streak(u, v), m = smudge(u, v);
      H[i] = s * 0.6 + m * 0.4;
      A[i] = 0.88 + s * 0.08 + m * 0.04;
      R[i] = 0.68 + s * 0.15 + smoothstep(0.45, 0.8, m) * 0.12;
    }
    // scratches: short, faint diagonal-ish lines, wrapped
    for (let k = 0; k < 14; k++) {
      let px = rand() * S, py = rand() * S;
      const ang = (rand() - 0.5) * 0.9, len = S * (0.08 + rand() * 0.18);
      const dx = Math.cos(ang), dy = Math.sin(ang);
      for (let t = 0; t < len; t++) {
        const xi = ((Math.round(px + dx * t) % S) + S) % S, yi = ((Math.round(py + dy * t) % S) + S) % S;
        const i = yi * S + xi;
        H[i] = Math.max(0, H[i] - 0.18); A[i] = Math.min(1, A[i] + 0.05); R[i] *= 0.7;
      }
    }
  },
  hammered(S, rand, H, A, R) { // overlapping peen dents on plate
    const w1 = worley(rand, 7, 0.9), w2 = worley(rand, 13, 0.9);
    const n = fbm(rand, 4, 4, 3);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      const a = w1(u, v).f1, b = w2(u, v).f1, m = n(u, v);
      const d = Math.min(1, a * a * 1.4) * 0.65 + Math.min(1, b * b * 1.6) * 0.35; // 0 at dent centre
      H[i] = d * 0.85 + m * 0.15;
      A[i] = 0.88 + d * 0.09 + m * 0.03;
      R[i] = 0.66 + (1 - d) * 0.22 + m * 0.08;
    }
  },
  leather(S, rand, H, A, R) { // pebbled grain + creases + patchy wear
    const cells = worley(rand, 22, 1.0), creases = fbm(rand, 3, 5, 4), patch = fbm(rand, 2, 2, 3), fine = fbm(rand, 32, 32, 2);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      const c = cells(u, v), edge = smoothstep(0.0, 0.22, c.f2 - c.f1);
      const cr = 1 - smoothstep(0.0, 0.05, Math.abs(creases(u, v) - 0.5));
      const p = patch(u, v);
      H[i] = edge * 0.7 + fine(u, v) * 0.2 + 0.1 - cr * 0.35;
      A[i] = 0.8 + p * 0.14 + edge * 0.06 - cr * 0.06;
      R[i] = 0.7 + (1 - p) * 0.2 + (1 - edge) * 0.1;
    }
  },
  cloth(S, rand, H, A, R) { // plain weave
    const N = 24; // threads per tile
    const slub = fbm(rand, 2, 48, 2), slub2 = fbm(rand, 48, 2, 2), dirt = fbm(rand, 3, 3, 3);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      const gx = u * N, gy = v * N, ix = Math.floor(gx), iy = Math.floor(gy);
      const fx = gx - ix, fy = gy - iy;
      const warpTop = ((ix + iy) & 1) === 0;
      const across = warpTop ? fx : fy, along = warpTop ? fy : fx;
      const prof = Math.sin(Math.PI * across); // thread cross-section
      const arch = 0.6 + 0.4 * Math.sin(Math.PI * along); // thread dips under its neighbour
      const thread = warpTop ? slub(u, v) : slub2(u, v);
      H[i] = prof * arch * (0.8 + thread * 0.2);
      A[i] = 0.8 + prof * 0.1 + thread * 0.06 + dirt(u, v) * 0.04;
      R[i] = 0.92 + (1 - prof) * 0.08;
    }
  },
  wood(S, rand, H, A, R) { // long grain along U, rings warped by noise
    const warp = fbm(rand, 2, 3, 4), fiber = fbm(rand, 3, 64, 2), knot = worley(rand, 3, 0.8);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      const k = knot(u, v), kd = Math.max(0, 1 - k.f1 * 2.4);
      const ring = fract(v * 7 + warp(u, v) * 1.6 + kd * kd * 0.6);
      const r = Math.pow(Math.sin(Math.PI * ring), 0.6); // soft early wood, sharp late wood
      const f = fiber(u, v);
      H[i] = r * 0.55 + f * 0.45;
      A[i] = 0.74 + r * 0.16 + f * 0.1 - kd * kd * 0.1;
      R[i] = 0.75 + (1 - r) * 0.12 + f * 0.13;
    }
  },
  stone(S, rand, H, A, R) { // cracked basalt: polygonal plates, dark cracks, pitted surface
    const plates = worley(rand, 5, 0.9), small = worley(rand, 11, 0.9), body = fbm(rand, 4, 4, 5), pits = fbm(rand, 24, 24, 2);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      const p = plates(u, v), crack = 1 - smoothstep(0.0, 0.06, p.f2 - p.f1);
      const pid = p.id;
      const s = small(u, v), hair = 1 - smoothstep(0.0, 0.03, s.f2 - s.f1);
      const b = body(u, v), pt = smoothstep(0.62, 0.8, pits(u, v));
      H[i] = 0.25 + b * 0.55 + pid * 0.2 - crack * 0.55 - hair * 0.12 - pt * 0.15;
      A[i] = 0.8 + b * 0.1 + pid * 0.08 - crack * 0.2 - hair * 0.05 - pt * 0.06;
      R[i] = 0.82 + b * 0.12 + crack * 0.06;
    }
  },
  scale(S, rand, H, A, R) { // overlapping pointed-round scales, upper rows lie over lower rows
    const cols = 8, rows = 8; // per tile (offset rows → tileable because rows is even)
    const dy = 1 / rows, sw = 0.5 / cols, L = dy * 1.75;
    const jit = fbm(rand, 8, 8, 2), n = fbm(rand, 6, 6, 3);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S, i = y * S + x;
      let best = null;
      // candidate rows whose scales can cover v; iterate bottom row first so upper rows win
      const r0 = Math.floor(v / dy);
      for (let r = r0 + 2; r >= r0 - 1; r--) {
        const bottom = (r + 1) * dy; // bottom tip of row r
        const top = bottom - L;
        if (v > bottom + 1e-6 || v < top) continue;
        const off = (((r % 2) + 2) % 2) * 0.5;
        const cu = (Math.round(u * cols - off) + off) / cols; // nearest scale centre in this row
        let dx = u - cu; dx -= Math.round(dx); // wrap
        const rr = sw * 1.02;
        const cyR = bottom - rr; // centre of rounded bottom
        let inside, edge;
        if (v <= cyR) { inside = Math.abs(dx) <= rr; edge = (rr - Math.abs(dx)) / rr; }
        else { const d = Math.hypot(dx, v - cyR); inside = d <= rr; edge = (rr - d) / rr; }
        if (inside) best = { t: (v - top) / L, edge, dx: dx / rr, id: jit(cu, bottom) };
      }
      if (!best) { H[i] = 0; A[i] = 0.6; R[i] = 0.9; continue; }
      const rim = smoothstep(0.0, 0.18, best.edge); // falls to 0 at the scale outline
      const dome = 1 - best.dx * best.dx * 0.35;
      const h = (0.35 + best.t * 0.65) * dome * rim;
      const m = n(u, v);
      H[i] = h * 0.9 + m * 0.1;
      A[i] = 0.72 + rim * 0.14 + best.id * 0.08 + m * 0.06;
      R[i] = 0.6 + (1 - rim) * 0.25 + best.id * 0.15;
    }
  },
};

export const TEXTURE_KINDS = Object.keys(GEN);

function makeCanvas(S) {
  if (typeof document !== "undefined") {
    const c = document.createElement("canvas"); c.width = S; c.height = S; return c;
  }
  return new OffscreenCanvas(S, S);
}

function normalize(H) {
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < H.length; i++) { if (H[i] < lo) lo = H[i]; if (H[i] > hi) hi = H[i]; }
  const k = hi > lo ? 1 / (hi - lo) : 0;
  for (let i = 0; i < H.length; i++) H[i] = (H[i] - lo) * k;
}

const _texBase = new Map();
const _texVariant = new Map();

/**
 * proceduralTexture(kind, opts?) → { map, roughnessMap, bumpMap }
 *   kind: "metal" | "hammered" | "leather" | "cloth" | "wood" | "stone" | "scale"
 *   opts.size (default 128, max 256, power of two), opts.seed (default 1),
 *   opts.repeat (number or [u,v], default 1), opts.anisotropy (default 1).
 * map is neutral grey (sRGB) to multiply with material colour; roughnessMap and bumpMap are the
 * same linear texture (R = height, G = roughness). Cached per kind+opts.
 */
export function proceduralTexture(kind, opts = {}) {
  if (!GEN[kind]) throw new Error("proceduralTexture: unknown kind " + kind);
  const S = Math.min(256, Math.max(16, 1 << Math.round(Math.log2(opts.size || 128))));
  const seed = opts.seed == null ? 1 : opts.seed | 0;
  const rep = opts.repeat == null ? [1, 1] : Array.isArray(opts.repeat) ? opts.repeat : [opts.repeat, opts.repeat];
  const aniso = opts.anisotropy || 1;
  const baseKey = kind + "|" + S + "|" + seed + "|" + aniso;
  let base = _texBase.get(baseKey);
  if (!base) {
    const rand = mulberry32(seed * 7919 + kind.length * 104729 + kind.charCodeAt(0) * 31);
    const N = S * S, H = new Float32Array(N), A = new Float32Array(N), R = new Float32Array(N);
    GEN[kind](S, rand, H, A, R);
    normalize(H);
    const cMap = makeCanvas(S), cData = makeCanvas(S);
    const gMap = cMap.getContext("2d"), gData = cData.getContext("2d");
    const iMap = gMap.createImageData(S, S), iData = gData.createImageData(S, S);
    for (let i = 0; i < N; i++) {
      const a = Math.round(clamp01(A[i]) * 255), o = i * 4;
      iMap.data[o] = a; iMap.data[o + 1] = a; iMap.data[o + 2] = a; iMap.data[o + 3] = 255;
      iData.data[o] = Math.round(H[i] * 255);
      iData.data[o + 1] = Math.round(clamp01(R[i]) * 255);
      iData.data[o + 2] = 0; iData.data[o + 3] = 255;
    }
    gMap.putImageData(iMap, 0, 0); gData.putImageData(iData, 0, 0);
    const map = new T.CanvasTexture(cMap), data = new T.CanvasTexture(cData);
    for (const t of [map, data]) { t.wrapS = t.wrapT = T.RepeatWrapping; t.anisotropy = aniso; }
    map.encoding = T.sRGBEncoding; data.encoding = T.LinearEncoding;
    map.name = "pt-" + kind + "-map"; data.name = "pt-" + kind + "-data";
    base = { map, roughnessMap: data, bumpMap: data };
    _texBase.set(baseKey, base);
  }
  if (rep[0] === 1 && rep[1] === 1) return base;
  const vKey = baseKey + "|" + rep[0] + "x" + rep[1];
  let v = _texVariant.get(vKey);
  if (!v) {
    const map = base.map.clone(), data = base.roughnessMap.clone(); // clones share the GPU upload
    map.repeat.set(rep[0], rep[1]); data.repeat.set(rep[0], rep[1]);
    v = { map, roughnessMap: data, bumpMap: data };
    _texVariant.set(vKey, v);
  }
  return v;
}

// ---------------------------------------------------------------------------------------------
// Materials
// ---------------------------------------------------------------------------------------------

// tex: texture kind (null = none); bump: bumpScale in world units for a ~0.3-unit kit part.
const ROLES = {
  metal:   { tex: "metal",    rough: 0.42, metal: 0.9,  bump: 0.0035, env: 0.9,  color: 0x9aa0a8 },
  gold:    { tex: "hammered", rough: 0.36, metal: 1.0,  bump: 0.0025, env: 1.0,  color: 0xd9a845 },
  leather: { tex: "leather",  rough: 0.78, metal: 0.0,  bump: 0.006,  env: 0.3,  color: 0x6b4a33 },
  cloth:   { tex: "cloth",    rough: 0.95, metal: 0.0,  bump: 0.005,  env: 0.2,  color: 0x7a2e2e },
  wood:    { tex: "wood",     rough: 0.72, metal: 0.0,  bump: 0.006,  env: 0.3,  color: 0x7a5434 },
  stone:   { tex: "stone",    rough: 0.9,  metal: 0.0,  bump: 0.009,  env: 0.25, color: 0x55545a },
  gem:     { tex: null,       rough: 0.1,  metal: 0.3,  bump: 0,      env: 1.0,  color: 0x3a8cff },
  bone:    { tex: "leather",  rough: 0.55, metal: 0.0,  bump: 0.0015, env: 0.35, color: 0xd8cdb0 },
  skin:    { tex: "leather",  rough: 0.62, metal: 0.0,  bump: 0.0008, env: 0.25, color: 0xc89a7a },
  hair:    { tex: "metal",    rough: 0.5,  metal: 0.0,  bump: 0.002,  env: 0.35,  color: 0x3a2a1e },
};
export const MATERIAL_ROLES = Object.keys(ROLES);

const _matCache = new Map();

function colorKey(c) {
  if (c == null) return "d";
  if (c.isColor) return "c" + c.getHexString();
  return String(c);
}

/**
 * detailMaterial(role, color?, opts?) → cached MeshStandardMaterial
 *   role: "metal"|"gold"|"leather"|"cloth"|"wood"|"stone"|"gem"|"bone"|"skin"|"hair"
 *   color: hex number, CSS string or T.Color (sRGB); omitted → role default.
 *   opts: { glow (gem emissive colour, default = color), glowIntensity (0.7), roughness, metalness,
 *           texture (kind name or false), repeat, size, seed, bump (multiplier, default 1),
 *           envMap (texture; else rely on scene.environment), envMapIntensity, flatShading, side }
 */
export function detailMaterial(role, color, opts = {}) {
  const R = ROLES[role];
  if (!R) throw new Error("detailMaterial: unknown role " + role);
  const keyOpts = {};
  for (const k of Object.keys(opts).sort()) {
    const v = opts[k];
    keyOpts[k] = v && v.isTexture ? "tex:" + v.uuid : v && v.isColor ? "#" + v.getHexString() : v;
  }
  const key = role + "|" + colorKey(color) + "|" + JSON.stringify(keyOpts);
  let m = _matCache.get(key);
  if (m) return m;

  const col = new T.Color(color == null ? R.color : color);
  m = new T.MeshStandardMaterial({
    color: col,
    roughness: opts.roughness ?? R.rough,
    metalness: opts.metalness ?? R.metal,
    flatShading: !!opts.flatShading,
    side: opts.side ?? T.FrontSide,
  });
  const kind = opts.texture === false ? null : (opts.texture || R.tex);
  if (kind) {
    const t = proceduralTexture(kind, { size: opts.size, seed: opts.seed, repeat: opts.repeat });
    m.map = t.map;
    m.roughnessMap = t.roughnessMap;
    const bs = R.bump * (opts.bump ?? 1);
    if (bs > 0) { m.bumpMap = t.bumpMap; m.bumpScale = bs; }
    // roughnessMap multiplies .roughness; its G channel averages ≈0.75, so compensate.
    m.roughness = Math.min(1, m.roughness / 0.78);
  }
  if (role === "gem") {
    // dark body + coloured glow keeps the hue saturated under ACES instead of clipping to white
    m.emissive = new T.Color(opts.glow == null ? col : opts.glow);
    m.emissiveIntensity = opts.glowIntensity ?? 0.7;
    m.color.multiplyScalar(0.25);
  }
  if (opts.envMap) m.envMap = opts.envMap;
  m.envMapIntensity = opts.envMapIntensity ?? R.env;
  m.name = "dm-" + role;
  m.userData.shared = true; // callers: do not dispose per-mesh
  _matCache.set(key, m);
  return m;
}

/** Dispose every cached material and texture (e.g. when leaving 3D mode entirely). */
export function disposeMaterials() {
  for (const m of _matCache.values()) m.dispose();
  _matCache.clear();
  for (const cache of [_texVariant, _texBase]) {
    for (const t of cache.values()) { t.map.dispose(); t.roughnessMap.dispose(); }
    cache.clear();
  }
}

// ---------------------------------------------------------------------------------------------
// Environment map
// ---------------------------------------------------------------------------------------------

const _envCache = new WeakMap();

function buildEnvScene() {
  const scene = new T.Scene();
  // Gradient sky dome: warm-ish zenith, neutral horizon, dark ground. Vertex colours (linear).
  const dome = new T.SphereGeometry(10, 32, 16);
  const pos = dome.attributes.position, cols = new Float32Array(pos.count * 3);
  const zen = new T.Color(0.2, 0.21, 0.25), hor = new T.Color(0.2, 0.18, 0.16), gnd = new T.Color(0.025, 0.022, 0.02);
  const c = new T.Color();
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 10;
    if (y >= 0) c.copy(hor).lerp(zen, Math.pow(y, 0.6));
    else c.copy(hor).lerp(gnd, Math.min(1, Math.pow(-y * 4, 0.5)));
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  dome.setAttribute("color", new T.BufferAttribute(cols, 3));
  scene.add(new T.Mesh(dome, new T.MeshBasicMaterial({ vertexColors: true, side: T.BackSide, fog: false })));
  // Emissive panels give metals their highlights (values > 1 = HDR).
  const panel = (w, h, rgb, p) => {
    const mat = new T.MeshBasicMaterial({ color: new T.Color().setRGB(rgb[0], rgb[1], rgb[2], T.LinearSRGBColorSpace), side: T.DoubleSide, fog: false });
    const m = new T.Mesh(new T.PlaneGeometry(w, h), mat);
    m.position.set(p[0], p[1], p[2]); m.lookAt(0, 0, 0); scene.add(m);
  };
  panel(5, 3.5, [5.0, 3.9, 2.8], [-4.5, 6, 5]);  // warm key (matches the game's sun direction)
  panel(3, 6, [1.6, 2.1, 3.6], [5, 3, -6]);      // cool rim
  panel(9, 4, [0.9, 0.86, 0.8], [0, 2.5, 8.5]);    // broad soft front fill (camera side) so flat plates facing the view catch light
  panel(2.5, 2.5, [0.9, 0.8, 0.7], [-8, 0.5, -2]); // faint side bounce
  return scene;
}

/**
 * envMap(renderer, opts?) → PMREM texture (cached per renderer). Use as scene.environment or material.envMap.
 *   opts.size: 64 (default, ≈0.7 MB) | 128 | 256 (uses PMREMGenerator.fromScene directly, ≈6.3 MB).
 */
export function envMap(renderer, opts = {}) {
  const hit = _envCache.get(renderer);
  if (hit) return hit.texture;
  const size = opts.size || 64;
  const scene = buildEnvScene();
  const pmrem = new T.PMREMGenerator(renderer);
  let rt;
  if (size >= 256) {
    rt = pmrem.fromScene(scene, 0.02, 0.1, 50);
  } else {
    const cubeRT = new T.WebGLCubeRenderTarget(size, { type: T.HalfFloatType, generateMipmaps: false });
    const cam = new T.CubeCamera(0.1, 50, cubeRT);
    const prevTarget = renderer.getRenderTarget(), prevTone = renderer.toneMapping, prevEnc = renderer.outputEncoding;
    renderer.toneMapping = T.NoToneMapping; renderer.outputEncoding = T.LinearEncoding; // keep HDR linear
    cam.update(renderer, scene);
    renderer.toneMapping = prevTone; renderer.outputEncoding = prevEnc;
    renderer.setRenderTarget(prevTarget);
    rt = pmrem.fromCubemap(cubeRT.texture);
    cubeRT.dispose();
  }
  pmrem.dispose();
  scene.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
  rt.texture.name = "sigil-env";
  _envCache.set(renderer, rt);
  return rt.texture;
}

/** Free the env map generated for this renderer. */
export function disposeEnv(renderer) {
  const rt = _envCache.get(renderer);
  if (rt) { rt.dispose(); _envCache.delete(renderer); }
}

// ---------------------------------------------------------------------------------------------
// Geometry helpers (indexed BufferGeometry with normals + UVs; UVs ≈ 1 tile per largest dimension)
// ---------------------------------------------------------------------------------------------

function geomFrom(positions, normals, uvs, indices) {
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
  if (normals) g.setAttribute("normal", new T.Float32BufferAttribute(normals, 3));
  g.setAttribute("uv", new T.Float32BufferAttribute(uvs, 2));
  g.setIndex(indices);
  if (!normals) g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}

/**
 * bevelBox(w, h, d, r = 0.1·min, seg = 2, opts?) — box with rounded edges/corners, centred.
 * Tris = 12·(2·seg+1)²  → seg 1: 108, seg 2 (default): 300, seg 3: 588.
 * opts.uvScale: UV units per world unit (default 1 / max(w,h,d)).
 */
export function bevelBox(w = 1, h = 1, d = 1, r, seg = 2, opts = {}) {
  const hx = w / 2, hy = h / 2, hz = d / 2;
  r = Math.min(r == null ? Math.min(w, h, d) * 0.1 : r, hx, hy, hz);
  seg = Math.max(1, seg | 0);
  const s = 2 * seg + 1;
  const g = new T.BoxGeometry(1, 1, 1, s, s, s);
  const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv;
  const uvs = opts.uvScale || 1 / Math.max(w, h, d);
  // piecewise remap of a grid coordinate in [-0.5,0.5] (s segments): seg cells per bevel, 1 flat cell
  const remap = (t, half) => {
    const i = Math.round((t + 0.5) * s);
    if (i <= seg) return -half + r * (i / seg);
    if (i >= s - seg) return half - r * ((s - i) / seg);
    return -half + r;
  };
  const p = new T.Vector3(), c = new T.Vector3(), n = new T.Vector3();
  for (let i = 0; i < pos.count; i++) {
    p.set(remap(pos.getX(i), hx), remap(pos.getY(i), hy), remap(pos.getZ(i), hz));
    // vertices exactly at the inner edge of the bevel band snap onto the flat region boundary
    const fn = new T.Vector3(nor.getX(i), nor.getY(i), nor.getZ(i));
    if (fn.x) p.x = Math.sign(fn.x) * hx; if (fn.y) p.y = Math.sign(fn.y) * hy; if (fn.z) p.z = Math.sign(fn.z) * hz;
    c.set(Math.max(-hx + r, Math.min(hx - r, p.x)), Math.max(-hy + r, Math.min(hy - r, p.y)), Math.max(-hz + r, Math.min(hz - r, p.z)));
    n.subVectors(p, c);
    if (n.lengthSq() < 1e-12) n.copy(fn); else n.normalize();
    p.copy(c).addScaledVector(n, r);
    pos.setXYZ(i, p.x, p.y, p.z);
    nor.setXYZ(i, n.x, n.y, n.z);
    // planar UV per face from the original face axis
    let a, b;
    if (fn.x) { a = p.z * -Math.sign(fn.x); b = p.y; } else if (fn.y) { a = p.x; b = p.z * -Math.sign(fn.y); } else { a = p.x * Math.sign(fn.z); b = p.y; }
    uv.setXY(i, a * uvs + 0.5, b * uvs + 0.5);
  }
  g.computeBoundingSphere();
  return g;
}

/**
 * roundedPlate(w, h, thickness, r, opts?) — armour plate with rounded corners, front faces +Z.
 *   opts.curve: cylinder radius to bend the width around (convex front; 0 = flat). e.g. w·0.8 for a breastplate.
 *   opts.curveY: second radius bending the height (dome-like pauldron when both are set).
 *   opts.cornerSeg (3), opts.seg (middle segments; default 4 when curved, else 1), opts.back (true).
 * Tris (default cornerSeg 3): flat ≈ 252, curved ≈ 480 (back face included; back:false ≈ halves the faces).
 */
export function roundedPlate(w = 1, h = 1, thickness = 0.04, r, opts = {}) {
  r = Math.min(r == null ? Math.min(w, h) * 0.2 : r, w / 2 - 1e-4, h / 2 - 1e-4);
  const curve = opts.curve || 0, curveY = opts.curveY || 0;
  const cs = Math.max(1, opts.cornerSeg ?? 3);
  const ms = Math.max(1, opts.seg ?? (curve || curveY ? 4 : 1));
  const axis = (len) => {
    const a = [], half = len / 2;
    for (let i = 0; i <= cs; i++) a.push(-half + r * (i / cs));
    for (let i = 1; i < ms; i++) a.push(-half + r + (len - 2 * r) * (i / ms));
    for (let i = cs; i >= 0; i--) a.push(half - r * (i / cs));
    return a;
  };
  const xs = axis(w), ys = axis(h), nx = xs.length, ny = ys.length;
  const uvs = 1 / Math.max(w, h);
  // 2D outline mapping: corner squares → quarter discs
  const shape = (x, y) => {
    const cx = w / 2 - r, cy = h / 2 - r;
    const ax = Math.abs(x), ay = Math.abs(y);
    if (ax > cx + 1e-9 && ay > cy + 1e-9) {
      const qx = ax - cx, qy = ay - cy, m = Math.max(qx, qy), l = Math.hypot(qx, qy);
      const k = m / l;
      return [Math.sign(x) * (cx + qx * k), Math.sign(y) * (cy + qy * k)];
    }
    return [x, y];
  };
  const bend = (x, y, z, out) => {
    let X = x, Y = y, Z = z;
    if (curve) { const th = X / curve, rr = curve + Z; X = rr * Math.sin(th); Z = rr * Math.cos(th) - curve; }
    if (curveY) { const th = Y / curveY, rr = curveY + Z; Y = rr * Math.sin(th); Z = rr * Math.cos(th) - curveY; }
    out.push(X, Y, Z);
  };
  const P = [], U = [], I = [];
  const t2 = thickness / 2;
  const faces = opts.back === false ? [1] : [1, -1];
  for (const side of faces) {
    const base = P.length / 3;
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const [x, y] = shape(xs[i], ys[j]);
      bend(x, y, side * t2, P);
      U.push((side > 0 ? x : -x) * uvs + 0.5, y * uvs + 0.5);
    }
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = base + j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      if (side > 0) I.push(a, b, d, a, d, c); else I.push(a, d, b, a, c, d);
    }
  }
  // rim: walk the grid outline (counter-clockwise seen from +Z)
  const ring = [];
  for (let i = 0; i < nx; i++) ring.push([i, 0]);
  for (let j = 1; j < ny; j++) ring.push([nx - 1, j]);
  for (let i = nx - 2; i >= 0; i--) ring.push([i, ny - 1]);
  for (let j = ny - 2; j > 0; j--) ring.push([0, j]);
  const rb = P.length / 3;
  let acc = 0, prev = null;
  for (let k = 0; k <= ring.length; k++) {
    const [i, j] = ring[k % ring.length];
    const [x, y] = shape(xs[i], ys[j]);
    if (prev) acc += Math.hypot(x - prev[0], y - prev[1]);
    prev = [x, y];
    bend(x, y, t2, P); bend(x, y, -t2, P);
    U.push(acc * uvs, 0, acc * uvs, thickness * uvs);
  }
  for (let k = 0; k < ring.length; k++) {
    const a = rb + k * 2, b = a + 1, c = a + 2, d = a + 3;
    I.push(a, b, d, a, d, c);
  }
  return geomFrom(P, null, U, I);
}

/**
 * rivetRing(n = 8, radius = 0.1, opts?) — n domed rivets on a circle in the XY plane, domes facing +Z.
 *   opts.size (rivet radius, default radius·0.12), opts.height (dome height, default size·0.6),
 *   opts.arc ([a0, a1] radians, default full circle), opts.sides (6).
 * Tris = n · 3·sides → default 8 × 18 = 144.
 */
export function rivetRing(n = 8, radius = 0.1, opts = {}) {
  const size = opts.size || radius * 0.12, hgt = opts.height || size * 0.6, sides = opts.sides || 6;
  const [a0, a1] = opts.arc || [0, Math.PI * 2];
  const full = Math.abs(a1 - a0 - Math.PI * 2) < 1e-6;
  const P = [], N = [], U = [], I = [];
  for (let k = 0; k < n; k++) {
    const a = a0 + (a1 - a0) * (full ? k / n : n === 1 ? 0.5 : k / (n - 1));
    const cx = Math.cos(a) * radius, cy = Math.sin(a) * radius;
    const base = P.length / 3;
    P.push(cx, cy, hgt); N.push(0, 0, 1); U.push(0.5, 0.5);
    for (const [rf, zf] of [[0.62, 0.78], [1, 0]]) { // mid ring, base ring
      for (let s = 0; s < sides; s++) {
        const t = (s / sides) * Math.PI * 2, ct = Math.cos(t), st = Math.sin(t);
        P.push(cx + ct * size * rf, cy + st * size * rf, hgt * zf);
        // ellipsoid normal
        const nx = ct * rf / size, ny = st * rf / size, nz = zf / hgt, l = Math.hypot(nx, ny, nz);
        N.push(nx / l, ny / l, nz / l);
        U.push(0.5 + ct * rf * 0.5, 0.5 + st * rf * 0.5);
      }
    }
    for (let s = 0; s < sides; s++) {
      const s1 = (s + 1) % sides, m0 = base + 1 + s, m1 = base + 1 + s1, b0 = m0 + sides, b1 = m1 + sides;
      I.push(base, m0, m1, m0, b0, b1, m0, b1, m1);
    }
  }
  return geomFrom(P, N, U, I);
}

/**
 * strap(length = 1, width = 0.08, thickness = 0.015, curve = 0, opts?) — rectangular band along +X,
 * width along Y, thickness along Z (outer face +Z). curve > 0 bends it around a circle of that radius
 * in the XZ plane (centre at z = -curve), e.g. a belt or bracer wrap; length ≥ 2π·curve closes the loop.
 *   opts.segments (default: one per 15° of bend, min 1).
 * Tris = 8·segments + 4 (caps) → straight: 12, full loop: 8·24 + 4 = 196.
 */
export function strap(length = 1, width = 0.08, thickness = 0.015, curve = 0, opts = {}) {
  const ang = curve > 0 ? length / curve : 0;
  const segs = Math.max(1, opts.segments || Math.ceil(Math.abs(ang) / (Math.PI / 12)));
  const loop = curve > 0 && ang >= Math.PI * 2 - 1e-6;
  const hw = width / 2, ht = thickness / 2;
  const uvs = 1 / Math.max(width * 4, thickness); // a tile covers ~4 strap widths
  const frame = (t) => { // centre-line point and outward normal at length fraction t
    const s = t * length;
    if (!curve) return { p: [s - length / 2, 0, 0], n: [0, 0, 1], tan: [1, 0, 0] };
    const th = s / curve - ang / 2;
    return { p: [Math.sin(th) * curve, 0, Math.cos(th) * curve - curve], n: [Math.sin(th), 0, Math.cos(th)], tan: [Math.cos(th), 0, -Math.sin(th)] };
  };
  const P = [], N = [], U = [], I = [];
  // four sides: outer (+n), top (+y), inner (-n), bottom (-y); each with its own verts for hard edges
  const sides = [
    { o: [[ht, -hw], [ht, hw]], nrm: (f) => f.n, v: [0, width] },
    { o: [[ht, hw], [-ht, hw]], nrm: () => [0, 1, 0], v: [width, width + thickness] },
    { o: [[-ht, hw], [-ht, -hw]], nrm: (f) => [-f.n[0], -f.n[1], -f.n[2]], v: [width + thickness, 2 * width + thickness] },
    { o: [[-ht, -hw], [ht, -hw]], nrm: () => [0, -1, 0], v: [2 * width + thickness, 2 * (width + thickness)] },
  ];
  for (const sd of sides) {
    const base = P.length / 3;
    for (let k = 0; k <= segs; k++) {
      const f = frame(k / segs), nn = sd.nrm(f);
      for (let e = 0; e < 2; e++) {
        const [dn, dy] = sd.o[e];
        P.push(f.p[0] + f.n[0] * dn, f.p[1] + dy, f.p[2] + f.n[2] * dn);
        N.push(nn[0], nn[1], nn[2]);
        U.push((k / segs) * length * uvs, sd.v[e] * uvs);
      }
    }
    for (let k = 0; k < segs; k++) {
      const a = base + k * 2, b = a + 1, c = a + 2, d = a + 3;
      I.push(a, c, d, a, d, b);
    }
  }
  if (!loop) { // end caps
    for (const t of [0, 1]) {
      const f = frame(t), dir = t ? 1 : -1, base = P.length / 3;
      const corners = [[ht, -hw], [ht, hw], [-ht, hw], [-ht, -hw]];
      for (const [dn, dy] of corners) {
        P.push(f.p[0] + f.n[0] * dn, f.p[1] + dy, f.p[2] + f.n[2] * dn);
        N.push(f.tan[0] * dir, 0, f.tan[2] * dir);
        U.push((dy + hw) * uvs, (dn + ht) * uvs);
      }
      if (t) I.push(base, base + 1, base + 2, base, base + 2, base + 3);
      else I.push(base, base + 2, base + 1, base, base + 3, base + 2);
    }
  }
  return geomFrom(P, N, U, I);
}
