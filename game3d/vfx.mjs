// Sigilbound — skill VFX library (pooled, mobile-friendly). Bundled into public/game/three3d.js
// through three3d.mjs (esbuild IIFE); no downloaded assets, every texture is drawn in code.
//
//   const vfx = createVFX(scene, camera, { quality: "High", speed: () => G.settings.speed });
//   vfx.update(dt)            // once per frame (dt in seconds; speed() is applied inside)
//   vfx.impact(pos, "flame", { crit: true })
//
// Rendering model (at most 6 draw calls whatever is playing; idle pools are hidden = 0 calls):
//   under  — instanced quads, premultiplied blending, mostly alpha (smoke, dark cores, leaves)
//   walls  — instanced open cylinders/cones (pillars, splash crowns, tornadoes, shock walls)
//   domes  — instanced spheres with fresnel + pattern (shields)
//   ribbons— one dynamic strip buffer (projectile trails, slashes, wind arcs, beams, heat ribbons)
//   over   — instanced quads, premultiplied blending, mostly additive (glows, sparks, flames, decals)
//   flash  — fullscreen quad, only while a crit flash plays
// Premultiplied output (rgb*a, a*(1-add)) lets one draw mix additive and alpha-blended sprites.
// Everything is toneMapped:false with HDR colours (x2–4) so it crosses the 0.88 bloom threshold.
// Particles are CPU-simulated in a fixed-size Float32Array per tier and written to instanced
// attributes; nothing GPU-side is allocated after createVFX().
import * as T from "three";

// ---------------------------------------------------------------------------------------------
// Tiers: fixed pool sizes. `mult` scales every effect's particle counts (Medium = 0.6 of High).
// ---------------------------------------------------------------------------------------------
export const VFX_TIERS = Object.freeze({
  Ultra: { over: 3000, under: 900, ribbons: 32, seg: 28, walls: 28, domes: 8, mult: 1.2, radial: 32, rings: 6, extras: true },
  High: { over: 2200, under: 640, ribbons: 24, seg: 24, walls: 24, domes: 6, mult: 1.0, radial: 28, rings: 6, extras: true },
  Medium: { over: 1320, under: 384, ribbons: 16, seg: 18, walls: 16, domes: 4, mult: 0.6, radial: 22, rings: 4, extras: true },
  Low: { over: 640, under: 160, ribbons: 10, seg: 12, walls: 8, domes: 3, mult: 0.35, radial: 16, rings: 3, extras: false },
});

// Element palettes, linear HDR. core = white-hot centre, main = body, deep = edges/embers,
// dark = alpha-blended smoke/core tint. row = strip-atlas row used for walls/ribbons.
const PAL = {
  flame: { core: [4.2, 2.3, 0.8], main: [3.4, 0.85, 0.16], deep: [1.5, 0.22, 0.04], dark: [0.09, 0.035, 0.02], row: 2, hex: "#e8553a" },
  gale: { core: [1.9, 3.6, 2.2], main: [0.45, 2.6, 1.1], deep: [0.12, 0.8, 0.32], dark: [0.04, 0.12, 0.05], row: 1, hex: "#3fb57a" },
  tide: { core: [1.9, 3.0, 4.0], main: [0.3, 1.3, 3.6], deep: [0.06, 0.35, 1.3], dark: [0.02, 0.06, 0.14], row: 3, hex: "#3a8ee8" },
  light: { core: [4.2, 3.8, 2.6], main: [3.6, 2.5, 0.65], deep: [1.4, 0.8, 0.14], dark: [0.12, 0.09, 0.03], row: 4, hex: "#e8c23a" },
  shadow: { core: [2.6, 1.1, 4.0], main: [1.4, 0.35, 3.0], deep: [0.4, 0.06, 0.9], dark: [0.018, 0.004, 0.035], row: 5, hex: "#9a5ae8" },
  physical: { core: [3.4, 3.2, 2.9], main: [2.4, 2.1, 1.75], deep: [0.8, 0.65, 0.5], dark: [0.06, 0.05, 0.045], row: 0, hex: "#d8d0c4" },
};
export const VFX_ELEMENTS = Object.keys(PAL);
const elKey = (e) => (PAL[e] ? e : "physical");
const HEAL = { core: [2.2, 4.0, 2.0], main: [0.55, 3.0, 0.8], deep: [0.15, 1.0, 0.25] };
const GOLD = { core: [4.0, 3.4, 1.8], main: [3.4, 2.2, 0.5], deep: [1.2, 0.6, 0.1] };
const CURSE = { core: [2.6, 1.2, 4.0], main: [1.5, 0.4, 3.0], deep: [0.4, 0.08, 0.9] };
const AQUA = { core: [1.8, 3.4, 4.2], main: [0.5, 1.9, 3.8], deep: [0.1, 0.5, 1.4] };
const WHITE = [1, 1, 1], BLACK = [0, 0, 0];

// Atlas frames (sprite atlas 4x4 @64px, then decal atlas 2x2 @128px).
const F = { FLAME: 0, SMOKE: 4, GLOW: 8, STREAK: 9, STAR: 10, PLUS: 11, LEAF: 12, DROP: 13, SHARD: 14, RING: 15, RUNE: 16, SHOCK: 17, CRACK: 18, BURST: 19 };
// Strip atlas rows (256x32 each).
const R = { BLADE: 0, WIND: 1, FIRE: 2, WATER: 3, RAYS: 4, WISP: 5, SPARKLE: 6, HEX: 7 };

// ---------------------------------------------------------------------------------------------
// Canvas textures (module-level cache, ref-counted across createVFX instances).
// ---------------------------------------------------------------------------------------------
let TEX = null, texRefs = 0;
function seeded(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function canvas(w, h) { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; }
// Soft blob: heat (rgb) and coverage (alpha) both follow a radial falloff.
function blob(g, x, y, r, a = 1, heat = 1) {
  const v = Math.round(255 * heat), grd = g.createRadialGradient(x, y, 0, x, y, r);
  grd.addColorStop(0, `rgba(${v},${v},${v},${a})`); grd.addColorStop(0.45, `rgba(${v},${v},${v},${a * 0.55})`); grd.addColorStop(1, `rgba(${v},${v},${v},0)`);
  g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
}

function drawSpriteAtlas() {
  const S = 64, c = canvas(256, 256), g = c.getContext("2d"), rnd = seeded(11);
  const cell = (i, fn) => { g.save(); g.translate((i % 4) * S, Math.floor(i / 4) * S); g.beginPath(); g.rect(1, 1, S - 2, S - 2); g.clip(); fn(); g.restore(); };
  g.globalCompositeOperation = "lighter";
  // 0-3 flame tongue flipbook: soft blobs along a licking spine, tip up; frames sway and split.
  for (let f = 0; f < 4; f++) cell(F.FLAME + f, () => {
    const ph = f * 1.6;
    for (let i = 0; i < 26; i++) {
      const t = i / 25, y = 56 - t * 48;
      const x = 32 + Math.sin(t * 3.2 + ph) * 7 * t + Math.sin(t * 9 + ph * 2) * 2.5 * t;
      const r = (1 - t) * 15 + 2.5;
      blob(g, x, y, r, 0.22 + 0.12 * (1 - t), 0.45 + 0.55 * (1 - t) * (1 - t));
    }
    // a side lick that detaches over the frames
    for (let i = 0; i < 8; i++) { const t = i / 7; blob(g, 32 + (f % 2 ? 1 : -1) * (6 + t * 6), 38 - t * 18 - f * 3, (1 - t) * 5 + 1.5, 0.18, 0.5); }
    blob(g, 32, 48, 10, 0.5, 1); // hot base core
  });
  // 4-7 smoke / wisp flipbook: a curling cluster that grows and thins.
  for (let f = 0; f < 4; f++) cell(F.SMOKE + f, () => {
    const n = 9, grow = 0.6 + f * 0.17;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + f * 0.5, d = (4 + rnd() * 9) * grow;
      blob(g, 32 + Math.cos(a) * d + Math.sin(i * 1.7) * 3, 32 + Math.sin(a) * d * 0.8, (9 + rnd() * 7) * grow, 0.32 - f * 0.05, 0.75);
    }
    blob(g, 32, 32, 16 * grow, 0.25 - f * 0.04, 0.9);
  });
  // 8 glow: gaussian
  cell(F.GLOW, () => {
    const d = g.createImageData(S, S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const r = Math.hypot(x - 31.5, y - 31.5) / 30, v = Math.max(0, Math.exp(-r * r * 4.2) - 0.012 * r);
      const o = (y * S + x) * 4; d.data[o] = d.data[o + 1] = d.data[o + 2] = 255; d.data[o + 3] = Math.round(255 * Math.min(1, v));
    }
    g.putImageData(d, (F.GLOW % 4) * S, Math.floor(F.GLOW / 4) * S);
  });
  // 9 streak: long axis vertical, bright thin core with soft halo
  cell(F.STREAK, () => {
    const d = g.createImageData(S, S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const ax = (x - 31.5) / 31, ay = (y - 31.5) / 30;
      const along = Math.max(0, 1 - ay * ay), core = Math.exp(-ax * ax * 260), halo = Math.exp(-ax * ax * 30) * 0.35;
      const v = along * along * (core + halo);
      const o = (y * S + x) * 4; d.data[o] = d.data[o + 1] = d.data[o + 2] = Math.round(255 * Math.min(1, 0.55 + core)); d.data[o + 3] = Math.round(255 * Math.min(1, v));
    }
    g.putImageData(d, (F.STREAK % 4) * S, Math.floor(F.STREAK / 4) * S);
  });
  // 10 star: 4 spikes + faint diagonals + core
  cell(F.STAR, () => {
    const d = g.createImageData(S, S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const ax = (x - 31.5) / 30, ay = (y - 31.5) / 30, r = Math.hypot(ax, ay);
      const sp = Math.exp(-Math.abs(ax) * 40) * Math.max(0, 1 - Math.abs(ay)) + Math.exp(-Math.abs(ay) * 40) * Math.max(0, 1 - Math.abs(ax));
      const u = (ax + ay) * 0.707, w = (ax - ay) * 0.707;
      const dg = 0.35 * (Math.exp(-Math.abs(u) * 50) * Math.max(0, 1 - Math.abs(w) * 1.6) + Math.exp(-Math.abs(w) * 50) * Math.max(0, 1 - Math.abs(u) * 1.6));
      const v = Math.min(1, sp * 0.9 + dg + Math.exp(-r * r * 30));
      const o = (y * S + x) * 4; d.data[o] = d.data[o + 1] = d.data[o + 2] = 255; d.data[o + 3] = Math.round(255 * v);
    }
    g.putImageData(d, (F.STAR % 4) * S, Math.floor(F.STAR / 4) * S);
  });
  g.globalCompositeOperation = "source-over";
  // 11 plus (heal)
  cell(F.PLUS, () => {
    g.shadowColor = "rgba(255,255,255,0.9)"; g.shadowBlur = 8;
    g.fillStyle = "rgba(255,255,255,1)";
    const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.fill(); };
    rr(25, 12, 14, 40, 5); rr(12, 25, 40, 14, 5);
    g.shadowBlur = 0;
  });
  // 12 leaf: almond with midrib (heat lower on the rib), tip up
  cell(F.LEAF, () => {
    g.save(); g.translate(32, 32); g.rotate(0.35);
    const grd = g.createLinearGradient(-12, 0, 12, 0);
    grd.addColorStop(0, "rgba(150,150,150,1)"); grd.addColorStop(0.5, "rgba(255,255,255,1)"); grd.addColorStop(1, "rgba(190,190,190,1)");
    g.fillStyle = grd; g.beginPath(); g.moveTo(0, -26); g.bezierCurveTo(16, -12, 14, 14, 0, 26); g.bezierCurveTo(-14, 14, -16, -12, 0, -26); g.fill();
    g.strokeStyle = "rgba(90,90,90,1)"; g.lineWidth = 1.6; g.beginPath(); g.moveTo(0, -22); g.lineTo(0, 27); g.stroke();
    g.lineWidth = 1; for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(0, i * 7); g.lineTo(8, i * 7 - 6); g.moveTo(0, i * 7 + 2); g.lineTo(-8, i * 7 - 4); g.stroke(); }
    g.restore();
  });
  // 13 droplet: round head at top (= direction of travel when stretched), tail below
  cell(F.DROP, () => {
    const grd = g.createRadialGradient(28, 22, 1, 32, 26, 16);
    grd.addColorStop(0, "rgba(255,255,255,1)"); grd.addColorStop(0.6, "rgba(200,200,200,0.95)"); grd.addColorStop(1, "rgba(150,150,150,0.0)");
    g.fillStyle = grd; g.beginPath(); g.arc(32, 24, 13, Math.PI, 0); g.quadraticCurveTo(45, 40, 32, 60); g.quadraticCurveTo(19, 40, 19, 24); g.fill();
    blob(g, 27, 19, 5, 0.9, 1);
  });
  // 14 shard: faceted diamond, long axis vertical
  cell(F.SHARD, () => {
    g.fillStyle = "rgba(255,255,255,1)"; g.beginPath(); g.moveTo(32, 2); g.lineTo(41, 30); g.lineTo(32, 62); g.closePath(); g.fill();
    g.fillStyle = "rgba(150,150,150,1)"; g.beginPath(); g.moveTo(32, 2); g.lineTo(23, 30); g.lineTo(32, 62); g.closePath(); g.fill();
    g.strokeStyle = "rgba(255,255,255,0.9)"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(32, 2); g.lineTo(41, 30); g.lineTo(32, 62); g.lineTo(23, 30); g.closePath(); g.stroke();
  });
  // 15 ring
  cell(F.RING, () => {
    const d = g.createImageData(S, S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const r = Math.hypot(x - 31.5, y - 31.5) / 30, e = (r - 0.82) / 0.07;
      const v = Math.exp(-e * e) + (r < 0.82 ? 0.12 * r * r : 0);
      const o = (y * S + x) * 4; d.data[o] = d.data[o + 1] = d.data[o + 2] = 255; d.data[o + 3] = Math.round(255 * Math.min(1, v));
    }
    g.putImageData(d, (F.RING % 4) * S, Math.floor(F.RING / 4) * S);
  });
  return c;
}

function drawDecalAtlas() {
  const S = 128, c = canvas(256, 256), g = c.getContext("2d"), rnd = seeded(7);
  const cell = (i, fn) => { g.save(); g.translate((i % 2) * S, Math.floor(i / 2) * S); g.beginPath(); g.rect(1, 1, S - 2, S - 2); g.clip(); g.translate(64, 64); fn(); g.restore(); };
  // 0 rune circle
  cell(0, () => {
    g.strokeStyle = "#fff"; g.fillStyle = "#fff"; g.shadowColor = "#fff"; g.shadowBlur = 4;
    const ring = (r, w) => { g.lineWidth = w; g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.stroke(); };
    ring(60, 2.4); ring(55, 1.1); ring(38, 1.6); ring(13, 1.4);
    for (let i = 0; i < 48; i++) { const a = i / 48 * Math.PI * 2, l = i % 4 === 0 ? 5 : 2.5; g.lineWidth = 1; g.beginPath(); g.moveTo(Math.cos(a) * 55, Math.sin(a) * 55); g.lineTo(Math.cos(a) * (55 - l), Math.sin(a) * (55 - l)); g.stroke(); }
    // glyphs between the rings
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2 + 0.13; g.save(); g.rotate(a); g.translate(0, -45); g.lineWidth = 1.5; g.beginPath();
      const k = Math.floor(rnd() * 4);
      if (k === 0) { g.moveTo(-3, -4); g.lineTo(0, 4); g.lineTo(3, -4); }
      else if (k === 1) { g.arc(0, 0, 3.5, 0.3, Math.PI * 1.7); g.moveTo(0, -4); g.lineTo(0, 4); }
      else if (k === 2) { g.moveTo(-4, 0); g.lineTo(4, 0); g.moveTo(-2, -4); g.lineTo(-2, 4); g.moveTo(2, -4); g.lineTo(2, 2); }
      else { g.moveTo(0, -4); g.lineTo(4, 3); g.lineTo(-4, 3); g.closePath(); }
      g.stroke(); g.restore();
    }
    // hexagram
    g.lineWidth = 1.6;
    for (let t = 0; t < 2; t++) { g.beginPath(); for (let i = 0; i <= 3; i++) { const a = -Math.PI / 2 + t * Math.PI + i * Math.PI * 2 / 3; const x = Math.cos(a) * 37, y = Math.sin(a) * 37; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
    g.shadowBlur = 0;
    const grd = g.createRadialGradient(0, 0, 0, 0, 0, 62); grd.addColorStop(0, "rgba(255,255,255,0.18)"); grd.addColorStop(0.6, "rgba(255,255,255,0.05)"); grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd; g.beginPath(); g.arc(0, 0, 62, 0, Math.PI * 2); g.fill();
  });
  // 1 shock ring: crisp outer edge, soft inner fade
  cell(1, () => {
    const id = g.createImageData(S, S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const r = Math.hypot(x - 63.5, y - 63.5) / 62;
      let v = r > 1 ? 0 : r > 0.9 ? Math.exp(-Math.pow((r - 0.9) / 0.05, 2)) : Math.pow(Math.max(0, (r - 0.35) / 0.55), 2.2) * 0.85 + Math.exp(-Math.pow((r - 0.9) / 0.04, 2)) * 0.15;
      const o = (y * S + x) * 4; id.data[o] = id.data[o + 1] = id.data[o + 2] = 255; id.data[o + 3] = Math.round(255 * Math.min(1, v));
    }
    g.putImageData(id, S, 0);
  });
  // 2 crack splat: jagged branching cracks + central scorch glow
  cell(2, () => {
    const grd = g.createRadialGradient(0, 0, 0, 0, 0, 34); grd.addColorStop(0, "rgba(255,255,255,0.85)"); grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd; g.beginPath(); g.arc(0, 0, 34, 0, Math.PI * 2); g.fill();
    g.strokeStyle = "#fff"; g.lineCap = "round"; g.shadowColor = "#fff"; g.shadowBlur = 3;
    const crack = (x, y, a, len, w, depth) => {
      let px = x, py = y;
      const steps = 6;
      for (let i = 0; i < steps; i++) {
        a += (rnd() - 0.5) * 0.9; const l = len / steps;
        const nx = px + Math.cos(a) * l, ny = py + Math.sin(a) * l;
        g.lineWidth = Math.max(0.6, w * (1 - i / steps)); g.beginPath(); g.moveTo(px, py); g.lineTo(nx, ny); g.stroke();
        if (depth > 0 && rnd() < 0.35) crack(nx, ny, a + (rnd() < 0.5 ? -1 : 1) * (0.5 + rnd() * 0.6), len * 0.45, w * 0.6, depth - 1);
        px = nx; py = ny;
      }
    };
    for (let i = 0; i < 9; i++) crack(0, 0, i / 9 * Math.PI * 2 + rnd() * 0.4, 38 + rnd() * 22, 3.2, 2);
  });
  // 3 starburst rays
  cell(3, () => {
    g.globalCompositeOperation = "lighter";
    for (let i = 0; i < 22; i++) {
      const a = i / 22 * Math.PI * 2 + rnd() * 0.2, len = 28 + rnd() * 34, w = 1.5 + rnd() * 3.5;
      const grd = g.createLinearGradient(0, 0, Math.cos(a) * len, Math.sin(a) * len);
      grd.addColorStop(0, "rgba(255,255,255,0.9)"); grd.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grd; g.beginPath(); g.moveTo(Math.cos(a + Math.PI / 2) * w, Math.sin(a + Math.PI / 2) * w); g.lineTo(Math.cos(a) * len, Math.sin(a) * len); g.lineTo(Math.cos(a - Math.PI / 2) * w, Math.sin(a - Math.PI / 2) * w); g.fill();
    }
    blob(g, 0, 0, 22, 0.9, 1);
  });
  return c;
}

// Strip atlas: 8 rows of 256x32, each tileable in x (and y, for scrolling walls).
function drawStripAtlas() {
  const W = 256, H = 32, c = canvas(W, H * 8), g = c.getContext("2d"), rnd = seeded(23);
  const row = (r, fn) => { g.save(); g.translate(0, r * H); g.beginPath(); g.rect(0, 0, W, H); g.clip(); fn(); g.restore(); };
  // draw fn at the 9 wrap offsets so the row tiles
  const wrap = (fn) => { for (const ox of [-W, 0, W]) for (const oy of [-H, 0, H]) { g.save(); g.translate(ox, oy); fn(); g.restore(); } };
  const pix = (r, f) => {
    const id = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const v = Math.max(0, Math.min(1, f(x, y))); const o = (y * W + x) * 4; id.data[o] = id.data[o + 1] = id.data[o + 2] = Math.round(255 * v); id.data[o + 3] = Math.round(255 * v); }
    g.putImageData(id, 0, r * H);
  };
  // 0 blade profile: s = 1 - y/H (row top = s 1 = hot edge). Bright edge line, soft body.
  pix(R.BLADE, (x, y) => { const s = 1 - (y + 0.5) / H; return Math.pow(s, 2.2) * 0.55 + Math.exp(-(((1 - s) / 0.09) ** 2)) * 1.0; });
  // 1 wind: thin tapered streak lines
  row(R.WIND, () => {
    g.globalCompositeOperation = "lighter";
    const lines = []; for (let i = 0; i < 26; i++) lines.push([rnd() * W, 3 + rnd() * (H - 6), 30 + rnd() * 130, 0.6 + rnd() * 1.4, 0.4 + rnd() * 0.6]);
    wrap(() => { for (const [x, y, l, w, a] of lines) { const grd = g.createLinearGradient(x, 0, x + l, 0); grd.addColorStop(0, "rgba(255,255,255,0)"); grd.addColorStop(0.7, `rgba(255,255,255,${a})`); grd.addColorStop(1, "rgba(255,255,255,0)"); g.strokeStyle = grd; g.lineWidth = w; g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y); g.stroke(); } });
  });
  // 2 fire noise: vertical licking blobs
  row(R.FIRE, () => {
    g.globalCompositeOperation = "lighter";
    const bs = []; for (let i = 0; i < 70; i++) bs.push([rnd() * W, rnd() * H, 3 + rnd() * 6, 0.25 + rnd() * 0.3]);
    wrap(() => { for (const [x, y, r, a] of bs) { g.save(); g.translate(x, y); g.scale(0.6, 1.8); blob(g, 0, 0, r, a); g.restore(); } });
  });
  // 3 water: wavy bands + foam flecks
  pix(R.WATER, (x, y) => {
    const u = x / W * Math.PI * 2, v = y / H * Math.PI * 2;
    const w1 = Math.sin(v * 2 + Math.sin(u * 3) * 1.4 + Math.sin(u * 7) * 0.4), w2 = Math.sin(v + u * 2 + Math.sin(u * 5) * 0.8);
    const band = Math.pow(Math.max(0, w1), 6) * 0.9 + Math.pow(Math.max(0, w2), 10) * 0.6;
    return 0.18 + band;
  });
  row(R.WATER, () => { g.globalCompositeOperation = "lighter"; const fl = []; for (let i = 0; i < 40; i++) fl.push([rnd() * W, rnd() * H, 0.8 + rnd() * 1.6]); wrap(() => { for (const [x, y, r] of fl) blob(g, x, y, r * 1.8, 0.7); }); });
  // 4 light rays: vertical bars
  row(R.RAYS, () => {
    g.globalCompositeOperation = "lighter";
    const bars = []; for (let i = 0; i < 20; i++) bars.push([rnd() * W, 1 + rnd() * 5, 0.25 + rnd() * 0.6]);
    wrap(() => { for (const [x, w, a] of bars) { const grd = g.createLinearGradient(x - w, 0, x + w, 0); grd.addColorStop(0, "rgba(255,255,255,0)"); grd.addColorStop(0.5, `rgba(255,255,255,${a})`); grd.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = grd; g.fillRect(x - w, 0, w * 2, H); } });
  });
  // 5 shadow tendrils: diagonal curling wisps
  row(R.WISP, () => {
    g.globalCompositeOperation = "lighter";
    const ws = []; for (let i = 0; i < 16; i++) ws.push([rnd() * W, rnd() * H, rnd() * 6.28]);
    wrap(() => { for (const [x0, y0, ph] of ws) for (let k = 0; k < 14; k++) { const t = k / 13; blob(g, x0 + t * 34, y0 + Math.sin(t * 5 + ph) * 6 - t * 8, 5 * (1 - t) + 1.5, 0.22); } });
  });
  // 6 sparkle: dots + tiny stars
  row(R.SPARKLE, () => {
    g.globalCompositeOperation = "lighter";
    const ds = []; for (let i = 0; i < 46; i++) ds.push([rnd() * W, rnd() * H, 0.8 + rnd() * 2.2]);
    wrap(() => { for (const [x, y, r] of ds) { blob(g, x, y, r * 2.2, 0.9); g.fillStyle = "rgba(255,255,255,0.5)"; g.fillRect(x - r * 2.5, y - 0.4, r * 5, 0.8); g.fillRect(x - 0.4, y - r * 2.5, 0.8, r * 5); } });
  });
  // 7 hex grid (8 hexes across, 2 rows down: tiles in both axes)
  row(R.HEX, () => {
    g.strokeStyle = "rgba(255,255,255,0.95)"; g.lineWidth = 1.4;
    const sx = W / 8 / 3, sy = H / 2 / 2; // hex "radius" in x / y
    const hex = (cx, cy) => { g.beginPath(); for (let i = 0; i <= 6; i++) { const a = i * Math.PI / 3; const x = cx + Math.cos(a) * sx * 1.5 * 0.95, y = cy + Math.sin(a) * sy * 0.95 * 1.15; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); };
    wrap(() => { for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) { hex(i * sx * 3, j * sy * 2); hex(i * sx * 3 + sx * 1.5, j * sy * 2 + sy); } });
  });
  return c;
}

function acquireTextures() {
  if (!TEX) {
    const mk = (cv, mip) => { const t = new T.CanvasTexture(cv); t.generateMipmaps = mip; t.minFilter = mip ? T.LinearMipmapLinearFilter : T.LinearFilter; t.magFilter = T.LinearFilter; return t; };
    const sprite = mk(drawSpriteAtlas(), true), decal = mk(drawDecalAtlas(), true), strip = mk(drawStripAtlas(), false);
    strip.wrapS = T.RepeatWrapping; strip.wrapT = T.ClampToEdgeWrapping;
    TEX = { sprite, decal, strip, bytes: (256 * 256 * 4) * (4 / 3) * 2 + 256 * 256 * 4 };
  }
  texRefs++;
  return TEX;
}
function releaseTextures() {
  if (--texRefs > 0 || !TEX) return;
  TEX.sprite.dispose(); TEX.decal.dispose(); TEX.strip.dispose(); TEX = null;
}

// ---------------------------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------------------------
const PREMUL = { transparent: true, depthWrite: false, depthTest: true, blending: T.CustomBlending, blendEquation: T.AddEquation, blendSrc: T.OneFactor, blendDst: T.OneMinusSrcAlphaFactor, blendSrcAlpha: T.OneFactor, blendDstAlpha: T.OneMinusSrcAlphaFactor, toneMapped: false, fog: false, forceSinglePass: true };
const OUT = /* glsl */`
  vec4 premul(vec3 c, float a, float add) { vec4 e = linearToOutputTexel(vec4(max(c, 0.0), 1.0)); return vec4(e.rgb * a, a * (1.0 - add)); }`;
const ROWV = /* glsl */`
  float rowv(float f, float row) { return (7.0 - row + 0.06 + fract(f) * 0.88) / 8.0; }`;

const SPRITE_VS = /* glsl */`
  attribute vec4 iPos; attribute vec4 iVel; attribute vec4 iCol; attribute vec4 iMisc;
  varying vec2 vUv; varying vec4 vCol; varying float vFrame; varying float vY; varying float vSoft; varying float vAdd;
  void main() {
    vec2 q = position.xy;
    float size = iMisc.x, mode = floor(iMisc.z / 4.0 + 0.001);
    vAdd = iMisc.z - mode * 4.0;
    float c = cos(iPos.w), s = sin(iPos.w);
    vec3 wp = iPos.xyz;
    if (mode > 0.5) {
      vec2 r = vec2(c * q.x - s * q.y, s * q.x + c * q.y) * size;
      wp += vec3(r.x, 0.0, -r.y);
      gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      vSoft = 0.0;
    } else {
      vec4 mv = viewMatrix * vec4(wp, 1.0);
      vec2 off;
      if (iVel.w > 0.0) {
        vec2 d = (viewMatrix * vec4(iVel.xyz, 0.0)).xy;
        float L = length(d);
        vec2 dir = L > 1e-5 ? d / L : vec2(0.0, 1.0);
        off = dir * (q.y * size * (1.0 + iVel.w * L)) + vec2(-dir.y, dir.x) * (q.x * size);
      } else off = vec2(c * q.x - s * q.y, s * q.x + c * q.y) * size;
      mv.xy += off;
      gl_Position = projectionMatrix * mv;
      // world height of this corner (camera right/up from the view matrix rows) for ground fade
      wp += vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]) * off.x + vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]) * off.y;
      vSoft = iMisc.w;
    }
    vY = wp.y; vUv = uv; vCol = iCol; vFrame = iMisc.y;
  }`;
const SPRITE_FS = /* glsl */`
  uniform sampler2D uMap; uniform sampler2D uDecal;
  varying vec2 vUv; varying vec4 vCol; varying float vFrame; varying float vY; varying float vSoft; varying float vAdd;
  ${OUT}
  void main() {
    float f = floor(vFrame + 0.5);
    vec4 t;
    if (f < 15.5) t = texture2D(uMap, (vec2(mod(f, 4.0), 3.0 - floor(f / 4.0)) + vUv) * 0.25);
    else { float g = f - 16.0; t = texture2D(uDecal, (vec2(mod(g, 2.0), 1.0 - floor(g / 2.0)) + vUv) * 0.5); }
    float a = t.a * vCol.a * (vSoft > 0.0 ? smoothstep(0.0, vSoft, vY) : 1.0);
    if (a < 0.003) discard;
    gl_FragColor = premul(vCol.rgb * t.rgb, a, vAdd);
  }`;

const RIBBON_VS = /* glsl */`
  attribute vec4 aCol; attribute vec4 aMisc;
  varying vec2 vUv; varying vec4 vCol; varying vec4 vMisc; varying float vY;
  void main() { vUv = uv; vCol = aCol; vMisc = aMisc; vY = position.y; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }`;
const RIBBON_FS = /* glsl */`
  uniform sampler2D uStrip;
  varying vec2 vUv; varying vec4 vCol; varying vec4 vMisc; varying float vY;
  ${OUT}${ROWV}
  void main() {
    float row = vMisc.x, mirror = vMisc.z;
    float s = mirror > 0.5 ? 1.0 - abs(2.0 * vUv.y - 1.0) : vUv.y;
    float t = texture2D(uStrip, vec2(vUv.x, rowv(s * 0.999, row))).r;
    if (row > 0.5) { float e = 1.0 - abs(2.0 * vUv.y - 1.0); t *= smoothstep(0.0, 0.55, e); t += 0.35 * pow(e, 3.0) * vMisc.w; }
    float a = t * vCol.a * smoothstep(0.0, 0.12, vY);
    if (a < 0.003) discard;
    gl_FragColor = premul(vCol.rgb * (0.65 + 0.35 * t), a, vMisc.y);
  }`;

const WALL_VS = /* glsl */`
  attribute vec4 iA; attribute vec4 iB; attribute vec4 iC; attribute vec4 iD;
  varying vec2 vUv; varying vec4 vCol; varying vec4 vD; varying float vRow; varying vec3 vN; varying vec3 vV; varying float vH;
  void main() {
    float y = position.y;
    float r = mix(iB.x, iB.y, y);
    vec3 wp = iA.xyz + vec3(position.x * r, y * iA.w, position.z * r);
    vN = normalize(vec3(position.x, (iB.x - iB.y) / max(iA.w, 1e-3), position.z));
    vV = cameraPosition - wp;
    vUv = vec2(uv.x * iD.z + iB.z * y, y);
    vCol = iC; vD = iD; vRow = iB.w; vH = y;
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }`;
const WALL_FS = /* glsl */`
  uniform sampler2D uStrip;
  varying vec2 vUv; varying vec4 vCol; varying vec4 vD; varying float vRow; varying vec3 vN; varying vec3 vV; varying float vH;
  ${OUT}${ROWV}
  void main() {
    float row = floor(vRow + 0.5);
    float t1 = texture2D(uStrip, vec2(vUv.x + vD.x, rowv(vUv.y - vD.y, row))).r;
    float t2 = texture2D(uStrip, vec2(vUv.x * 0.5 + 0.31 - vD.x * 0.6, rowv(vUv.y * 0.7 - vD.y * 1.37 + 0.5, row))).r;
    float m = t1 * (0.35 + 1.1 * t2);
    float edge = 1.0 - abs(dot(normalize(vN), normalize(vV)));
    float fres = 0.3 + 0.9 * pow(edge, 1.6);
    float fade = smoothstep(0.0, 0.1, vH) * (1.0 - smoothstep(0.45, 1.0, vH));
    float a = clamp(m * fres * fade * vCol.a, 0.0, 1.0);
    if (a < 0.003) discard;
    gl_FragColor = premul(vCol.rgb * (0.7 + 0.5 * m), a, vD.w);
  }`;

const DOME_VS = /* glsl */`
  attribute vec4 iA; attribute vec4 iC; attribute vec4 iD;
  varying vec2 vUv; varying vec4 vCol; varying vec4 vD; varying vec3 vN; varying vec3 vV; varying float vY;
  void main() {
    vec3 wp = iA.xyz + position * iA.w;
    vN = normal; vV = cameraPosition - wp; vUv = uv; vCol = iC; vD = iD; vY = wp.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }`;
const DOME_FS = /* glsl */`
  uniform sampler2D uStrip;
  varying vec2 vUv; varying vec4 vCol; varying vec4 vD; varying vec3 vN; varying vec3 vV; varying float vY;
  ${OUT}${ROWV}
  void main() {
    float edge = 1.0 - abs(dot(normalize(vN), normalize(vV)));
    float fres = pow(edge, vD.z);
    float p = texture2D(uStrip, vec2(vUv.x * 2.0, rowv(vUv.y * 5.0 - vD.y, vD.x))).r;
    float sweep = smoothstep(0.08, 0.0, abs(fract(vUv.y * 1.0 - vD.y * 0.35) - 0.5));
    float a = clamp((fres * 0.9 + p * (0.18 + 0.8 * fres) + sweep * p * 0.6) * vCol.a, 0.0, 1.0) * smoothstep(0.0, 0.08, vY);
    if (a < 0.003) discard;
    gl_FragColor = premul(vCol.rgb * (0.6 + 0.6 * fres), a, vD.w);
  }`;

const FLASH_VS = /* glsl */`varying vec2 vP; void main() { vP = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const FLASH_FS = /* glsl */`
  uniform float uA; uniform float uAspect; uniform float uSeed; uniform vec3 uColor;
  varying vec2 vP;
  ${OUT}
  void main() {
    vec2 p = vec2(vP.x * uAspect, vP.y);
    float r = length(p), ang = atan(p.y, p.x) * 44.0 / 3.14159;
    float id = floor(ang + uSeed);
    float h = fract(sin(id * 91.7 + uSeed) * 43758.5);
    float line = step(0.5, h) * smoothstep(0.12, 0.0, abs(fract(ang + uSeed) - 0.5) - 0.3 * h) * smoothstep(0.55 + h * 0.35, 1.5, r);
    float a = uA * (0.07 * smoothstep(1.4, 0.0, r) + 0.6 * line + 0.14 * smoothstep(0.9, 1.7, r));
    gl_FragColor = premul(uColor, clamp(a, 0.0, 1.0), 1.0);
  }`;

// ---------------------------------------------------------------------------------------------
// Sprite pool (CPU-simulated, instanced quads)
// ---------------------------------------------------------------------------------------------
// Per-particle record layout (stride ST).
const PX = 0, PY = 1, PZ = 2, VX = 3, VY = 4, VZ = 5, GR = 6, DR = 7, AGE = 8, LIFE = 9, S0 = 10, S1 = 11, SP = 12, ROT = 13, RV = 14,
  C0 = 15, C1 = 18, AL = 21, FI = 22, FO = 23, FR = 24, FN = 25, FPS = 26, STR = 27, MODE = 28, SOFT = 29, ADD = 30,
  ORB = 31, CX = 32, CY = 33, CZ = 34, TH = 35, RAD = 36, OM = 37, VR = 38, PULL = 39, PH = 40, ST = 41;

function makeSpritePool(cap, tex, order, defAdd) {
  const geo = new T.InstancedBufferGeometry(), quad = new T.PlaneGeometry(1, 1);
  geo.index = quad.index; geo.setAttribute("position", quad.attributes.position); geo.setAttribute("uv", quad.attributes.uv);
  const mk = (name) => { const a = new T.InstancedBufferAttribute(new Float32Array(cap * 4), 4); a.setUsage(T.DynamicDrawUsage); geo.setAttribute(name, a); return a; };
  const aPos = mk("iPos"), aVel = mk("iVel"), aCol = mk("iCol"), aMisc = mk("iMisc");
  geo.instanceCount = 0;
  const mat = new T.ShaderMaterial(Object.assign({ uniforms: { uMap: { value: tex.sprite }, uDecal: { value: tex.decal } }, vertexShader: SPRITE_VS, fragmentShader: SPRITE_FS }, PREMUL));
  const mesh = new T.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = order; mesh.visible = false; mesh.name = "vfx-sprites";
  const D = new Float32Array(cap * ST);
  const pool = { cap, n: 0, D, mesh, geo, mat, quad, attached: [], peak: 0, dropped: 0 };

  pool.add = (o) => {
    if (pool.n + pool.attached.length >= cap) { pool.dropped++; return; }
    const b = pool.n++ * ST, c0 = o.c0 || WHITE, c1 = o.c1 || c0, k = o.k == null ? 1 : o.k, k1 = o.k1 == null ? k : o.k1;
    D[b + PX] = o.x || 0; D[b + PY] = o.y || 0; D[b + PZ] = o.z || 0;
    D[b + VX] = o.vx || 0; D[b + VY] = o.vy || 0; D[b + VZ] = o.vz || 0;
    D[b + GR] = o.g || 0; D[b + DR] = o.drag || 0; D[b + AGE] = -(o.delay || 0); D[b + LIFE] = o.life || 1;
    D[b + S0] = o.s0 == null ? 0.3 : o.s0; D[b + S1] = o.s1 == null ? D[b + S0] : o.s1; D[b + SP] = o.sp || 1;
    D[b + ROT] = o.rot || 0; D[b + RV] = o.rv || 0;
    D[b + C0] = c0[0] * k; D[b + C0 + 1] = c0[1] * k; D[b + C0 + 2] = c0[2] * k;
    D[b + C1] = c1[0] * k1; D[b + C1 + 1] = c1[1] * k1; D[b + C1 + 2] = c1[2] * k1;
    D[b + AL] = o.a == null ? 1 : o.a; D[b + FI] = o.fi == null ? 0.08 : o.fi; D[b + FO] = o.fo == null ? 0.5 : o.fo;
    D[b + FR] = o.f == null ? F.GLOW : o.f; D[b + FN] = o.fn || 1; D[b + FPS] = o.fps || 0;
    D[b + STR] = o.st || 0; D[b + MODE] = o.gnd ? 1 : 0; D[b + SOFT] = o.gnd ? 0 : (o.soft == null ? 0.22 : o.soft);
    D[b + ADD] = o.add == null ? defAdd : o.add;
    D[b + ORB] = o.orb ? 1 : 0; D[b + CX] = o.cx || 0; D[b + CY] = o.cy || 0; D[b + CZ] = o.cz || 0;
    D[b + TH] = o.th || 0; D[b + RAD] = o.rad || 0; D[b + OM] = o.om || 0; D[b + VR] = o.vr || 0; D[b + PULL] = o.pull || 0;
    D[b + PH] = Math.random() * 8;
    if (o.orb) { D[b + PX] = D[b + CX] + Math.cos(D[b + TH]) * D[b + RAD]; D[b + PZ] = D[b + CZ] + Math.sin(D[b + TH]) * D[b + RAD]; }
  };
  // Attached sprites: owned objects whose fields the caller animates (projectile heads, cores).
  pool.attach = (o) => { const a = Object.assign({ x: 0, y: 0, z: 0, s: 0.3, rot: 0, c: WHITE, k: 1, a: 1, f: F.GLOW, fn: 1, fps: 0, st: 0, vx: 0, vy: 0, vz: 0, gnd: 0, soft: 0, add: defAdd, dead: false }, o); pool.attached.push(a); return a; };

  const aP = aPos.array, aV = aVel.array, aC = aCol.array, aM = aMisc.array;
  pool.update = (dt, time) => {
    let n = pool.n, w = 0;
    for (let i = 0; i < n;) {
      const b = i * ST;
      const age = (D[b + AGE] += dt), life = D[b + LIFE];
      if (age >= life || (D[b + PY] < -0.05 && D[b + MODE] === 0 && D[b + VY] < 0)) { n--; if (i < n) D.copyWithin(b, n * ST, n * ST + ST); continue; }
      i++;
      if (age < 0) continue;
      const k = age / life;
      if (D[b + ORB] > 0) {
        D[b + TH] += D[b + OM] * dt; D[b + RAD] = Math.max(0, D[b + RAD] + D[b + VR] * dt);
        D[b + VY] += D[b + GR] * dt; D[b + PY] += D[b + VY] * dt;
        if (D[b + PULL] > 0) D[b + PY] += (D[b + CY] - D[b + PY]) * Math.min(1, D[b + PULL] * dt);
        const th = D[b + TH], r = D[b + RAD], om = D[b + OM], vr = D[b + VR];
        const nx = D[b + CX] + Math.cos(th) * r, nz = D[b + CZ] + Math.sin(th) * r;
        D[b + VX] = -Math.sin(th) * om * r + Math.cos(th) * vr; D[b + VZ] = Math.cos(th) * om * r + Math.sin(th) * vr;
        D[b + PX] = nx; D[b + PZ] = nz;
      } else {
        const dr = Math.max(0, 1 - D[b + DR] * dt);
        D[b + VY] += D[b + GR] * dt;
        D[b + VX] *= dr; D[b + VY] *= dr; D[b + VZ] *= dr;
        D[b + PX] += D[b + VX] * dt; D[b + PY] += D[b + VY] * dt; D[b + PZ] += D[b + VZ] * dt;
      }
      D[b + ROT] += D[b + RV] * dt;
    }
    pool.n = n;
    // write instances
    for (let i = 0; i < n; i++) {
      const b = i * ST, age = D[b + AGE];
      if (age < 0) continue;
      const life = D[b + LIFE], k = age / life, o = w * 4;
      const sp = D[b + SP], ke = sp === 1 ? k : 1 - Math.pow(1 - k, sp);
      const fi = D[b + FI], fo = D[b + FO];
      let al = D[b + AL] * (fi > 0 ? Math.min(1, k / fi) : 1);
      if (k > fo) al *= 1 - (k - fo) / (1 - fo);
      const fn = D[b + FN], fps = D[b + FPS];
      const fr = D[b + FR] + (fn > 1 ? (fps > 0 ? Math.floor(age * fps + D[b + PH]) % fn : Math.min(fn - 1, Math.floor(k * fn))) : 0);
      aP[o] = D[b + PX]; aP[o + 1] = D[b + PY]; aP[o + 2] = D[b + PZ]; aP[o + 3] = D[b + ROT];
      aV[o] = D[b + VX]; aV[o + 1] = D[b + VY]; aV[o + 2] = D[b + VZ]; aV[o + 3] = D[b + STR];
      aC[o] = D[b + C0] + (D[b + C1] - D[b + C0]) * k; aC[o + 1] = D[b + C0 + 1] + (D[b + C1 + 1] - D[b + C0 + 1]) * k; aC[o + 2] = D[b + C0 + 2] + (D[b + C1 + 2] - D[b + C0 + 2]) * k; aC[o + 3] = al;
      aM[o] = D[b + S0] + (D[b + S1] - D[b + S0]) * ke; aM[o + 1] = fr; aM[o + 2] = D[b + MODE] * 4 + D[b + ADD]; aM[o + 3] = D[b + SOFT];
      w++;
    }
    const at = pool.attached;
    for (let i = at.length - 1; i >= 0; i--) if (at[i].dead) at.splice(i, 1);
    for (const a of at) {
      if (a.a <= 0.001) continue;
      const o = w * 4, fr = a.f + (a.fn > 1 ? Math.floor(time * a.fps) % a.fn : 0);
      aP[o] = a.x; aP[o + 1] = a.y; aP[o + 2] = a.z; aP[o + 3] = a.rot;
      aV[o] = a.vx; aV[o + 1] = a.vy; aV[o + 2] = a.vz; aV[o + 3] = a.st;
      aC[o] = a.c[0] * a.k; aC[o + 1] = a.c[1] * a.k; aC[o + 2] = a.c[2] * a.k; aC[o + 3] = a.a;
      aM[o] = a.s; aM[o + 1] = fr; aM[o + 2] = (a.gnd ? 4 : 0) + a.add; aM[o + 3] = a.gnd ? 0 : a.soft;
      w++;
    }
    pool.peak = Math.max(pool.peak, w);
    geo.instanceCount = w; mesh.visible = w > 0;
    if (w) for (const a of [aPos, aVel, aCol, aMisc]) { a.updateRange.offset = 0; a.updateRange.count = w * 4; a.needsUpdate = true; }
  };
  pool.clear = () => { pool.n = 0; pool.attached.length = 0; geo.instanceCount = 0; mesh.visible = false; };
  pool.dispose = () => { geo.dispose(); quad.dispose(); mat.dispose(); };
  return pool;
}

// ---------------------------------------------------------------------------------------------
// Ribbon pool: R strips x S points, one dynamic buffer.
// ---------------------------------------------------------------------------------------------
function makeRibbons(RN, S, tex, order) {
  const V = RN * S * 2;
  const pos = new Float32Array(V * 3), uv = new Float32Array(V * 2), col = new Float32Array(V * 4), misc = new Float32Array(V * 4);
  const idx = new (V > 65535 ? Uint32Array : Uint16Array)(RN * (S - 1) * 6);
  let q = 0;
  for (let r = 0; r < RN; r++) for (let i = 0; i < S - 1; i++) { const a = (r * S + i) * 2; idx[q++] = a; idx[q++] = a + 1; idx[q++] = a + 2; idx[q++] = a + 1; idx[q++] = a + 3; idx[q++] = a + 2; }
  const geo = new T.BufferGeometry();
  const mk = (name, arr, n) => { const a = new T.BufferAttribute(arr, n); a.setUsage(T.DynamicDrawUsage); geo.setAttribute(name, a); return a; };
  const aPos = mk("position", pos, 3), aUv = mk("uv", uv, 2), aCol = mk("aCol", col, 4), aMisc = mk("aMisc", misc, 4);
  geo.setIndex(new T.BufferAttribute(idx, 1));
  geo.setDrawRange(0, 0);
  const mat = new T.ShaderMaterial(Object.assign({ uniforms: { uStrip: { value: tex.strip } }, vertexShader: RIBBON_VS, fragmentShader: RIBBON_FS, side: T.DoubleSide }, PREMUL));
  const mesh = new T.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = order; mesh.visible = false; mesh.name = "vfx-ribbons";
  const slots = [];
  for (let r = 0; r < RN; r++) slots.push({ on: false, pts: new Float32Array(S * 3), born: new Float32Array(S), m: 0 });
  const rb = { slots, mesh, geo, mat, S, peak: 0, dropped: 0 };
  // o: { kind: "path"|"trail", fn(u, k, out), w, c, k, a, row, add, mirror, rep, scroll, life, fi, fo,
  //      headEnd, tailStart, tl (trail seconds), lead (brighter head), glow (edge glow on textured rows), wk(k) }
  rb.add = (o) => {
    const s = slots.find((x) => !x.on);
    if (!s) { rb.dropped++; return null; }
    Object.assign(s, { kind: "path", fn: null, w: 0.2, c: WHITE, k: 1, a: 1, row: 0, add: 1, mirror: 0, rep: 1, scroll: 0, life: 0.5, fi: 0.1, fo: 0.6, headEnd: 0.35, tailStart: 0.3, tl: 0.2, lead: 1, glow: 1, wk: null, age: 0, live: true, m: 0, delay: 0 }, o, { on: true });
    s.age = -(s.delay || 0);
    return s;
  };
  rb.push = (s, x, y, z, now) => {
    if (!s || !s.on) return;
    if (s.m === S) { s.pts.copyWithin(0, 3); s.born.copyWithin(0, 1); s.m--; }
    s.pts[s.m * 3] = x; s.pts[s.m * 3 + 1] = y; s.pts[s.m * 3 + 2] = z; s.born[s.m] = now; s.m++;
  };
  const P = new T.Vector3(), Tg = new T.Vector3(), E = new T.Vector3(), Sd = new T.Vector3(), out = new T.Vector3(), cam = new T.Vector3();
  const tmpP = new Float32Array(S * 3), tmpW = new Float32Array(S), tmpA = new Float32Array(S), tmpU = new Float32Array(S);
  rb.update = (dt, now, camera) => {
    camera.getWorldPosition(cam);
    let maxSlot = -1;
    for (let r = 0; r < RN; r++) {
      const s = slots[r];
      if (!s.on) continue;
      s.age += dt;
      let m = 0;
      if (s.kind === "trail") {
        // drop expired points from the tail
        let drop = 0; while (drop < s.m && now - s.born[drop] > s.tl) drop++;
        if (drop) { s.pts.copyWithin(0, drop * 3, s.m * 3); s.born.copyWithin(0, drop, s.m); s.m -= drop; }
        if (!s.live && s.m < 2) { s.on = false; collapse(r); continue; }
        m = s.m;
        let dist = 0;
        for (let i = m - 1; i >= 0; i--) {
          const j = m - 1 - i; // 0 = head
          tmpP[j * 3] = s.pts[i * 3]; tmpP[j * 3 + 1] = s.pts[i * 3 + 1]; tmpP[j * 3 + 2] = s.pts[i * 3 + 2];
          if (j > 0) dist += Math.hypot(tmpP[j * 3] - tmpP[j * 3 - 3], tmpP[j * 3 + 1] - tmpP[j * 3 - 2], tmpP[j * 3 + 2] - tmpP[j * 3 - 1]);
          const t = Math.min(1, (now - s.born[i]) / s.tl);
          tmpW[j] = s.w * Math.pow(1 - t, 0.6); tmpA[j] = s.a * Math.pow(1 - t, 1.4); tmpU[j] = dist * s.rep + now * s.scroll;
        }
      } else {
        if (s.age >= s.life) { s.on = false; collapse(r); continue; }
        if (s.age < 0) { collapse(r); maxSlot = r; continue; }
        const k = s.age / s.life;
        let al = s.a * (s.fi > 0 ? Math.min(1, k / s.fi) : 1); if (k > s.fo) al *= 1 - (k - s.fo) / (1 - s.fo);
        const head = Math.min(1, k / s.headEnd), tail = k < s.tailStart ? 0 : Math.min(1, (k - s.tailStart) / (1 - s.tailStart));
        const wk = s.wk ? s.wk(k) : 1;
        m = S;
        for (let i = 0; i < S; i++) {
          const f = i / (S - 1), u = tail + (head - tail) * f;
          s.fn(u, k, out);
          tmpP[i * 3] = out.x; tmpP[i * 3 + 1] = out.y; tmpP[i * 3 + 2] = out.z;
          tmpW[i] = s.w * wk * Math.pow(Math.sin(Math.PI * Math.min(1, Math.max(0, f))), 0.55);
          tmpA[i] = al * (s.lead ? 0.3 + 0.7 * Math.pow(f, 0.8) : 1);
          tmpU[i] = u * s.rep - now * s.scroll;
        }
      }
      if (m < 2) { collapse(r); maxSlot = r; continue; }
      maxSlot = r;
      const base = r * S * 2;
      const cr = s.c[0] * s.k, cg = s.c[1] * s.k, cb = s.c[2] * s.k;
      for (let i = 0; i < S; i++) {
        const j = Math.min(i, m - 1), v0 = (base + i * 2) * 3;
        P.set(tmpP[j * 3], tmpP[j * 3 + 1], tmpP[j * 3 + 2]);
        const a = Math.max(0, j - 1), b = Math.min(m - 1, j + 1);
        Tg.set(tmpP[b * 3] - tmpP[a * 3], tmpP[b * 3 + 1] - tmpP[a * 3 + 1], tmpP[b * 3 + 2] - tmpP[a * 3 + 2]);
        E.subVectors(cam, P);
        Sd.crossVectors(Tg, E); const L = Sd.length();
        const hw = i < m ? tmpW[j] * 0.5 : 0;
        if (L > 1e-6) Sd.multiplyScalar(hw / L); else Sd.set(0, hw, 0);
        pos[v0] = P.x - Sd.x; pos[v0 + 1] = P.y - Sd.y; pos[v0 + 2] = P.z - Sd.z;
        pos[v0 + 3] = P.x + Sd.x; pos[v0 + 4] = P.y + Sd.y; pos[v0 + 5] = P.z + Sd.z;
        const u0 = (base + i * 2) * 2; uv[u0] = tmpU[j]; uv[u0 + 1] = 0; uv[u0 + 2] = tmpU[j]; uv[u0 + 3] = 1;
        const c0 = (base + i * 2) * 4, al = i < m ? tmpA[j] : 0;
        col[c0] = col[c0 + 4] = cr; col[c0 + 1] = col[c0 + 5] = cg; col[c0 + 2] = col[c0 + 6] = cb; col[c0 + 3] = col[c0 + 7] = al;
        misc[c0] = misc[c0 + 4] = s.row; misc[c0 + 1] = misc[c0 + 5] = s.add; misc[c0 + 2] = misc[c0 + 6] = s.mirror; misc[c0 + 3] = misc[c0 + 7] = s.glow;
      }
    }
    const used = maxSlot + 1;
    rb.peak = Math.max(rb.peak, slots.filter((s) => s.on).length);
    geo.setDrawRange(0, used * (S - 1) * 6);
    mesh.visible = used > 0;
    if (used) {
      const nv = used * S * 2;
      for (const [a, n] of [[aPos, 3], [aUv, 2], [aCol, 4], [aMisc, 4]]) { a.updateRange.offset = 0; a.updateRange.count = nv * n; a.needsUpdate = true; }
    }
  };
  function collapse(r) {
    const base = r * S * 2;
    for (let i = 0; i < S * 2; i++) col[(base + i) * 4 + 3] = 0;
    for (let i = 0; i < S * 2 * 3; i++) pos[base * 3 + i] = 0;
  }
  rb.clear = () => { for (let r = 0; r < RN; r++) { slots[r].on = false; collapse(r); } geo.setDrawRange(0, 0); mesh.visible = false; };
  rb.dispose = () => { geo.dispose(); mat.dispose(); };
  return rb;
}

// ---------------------------------------------------------------------------------------------
// Instanced shells: walls (open cylinders / cones) and domes (spheres).
// ---------------------------------------------------------------------------------------------
function makeShells(cap, baseGeo, attrs, vs, fs, tex, order, name, side) {
  const geo = new T.InstancedBufferGeometry();
  geo.index = baseGeo.index; for (const k of ["position", "uv", "normal"]) if (baseGeo.attributes[k]) geo.setAttribute(k, baseGeo.attributes[k]);
  const A = {};
  for (const n of attrs) { const a = new T.InstancedBufferAttribute(new Float32Array(cap * 4), 4); a.setUsage(T.DynamicDrawUsage); geo.setAttribute(n, a); A[n] = a; }
  geo.instanceCount = 0;
  const mat = new T.ShaderMaterial(Object.assign({ uniforms: { uStrip: { value: tex.strip } }, vertexShader: vs, fragmentShader: fs, side }, PREMUL));
  const mesh = new T.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = order; mesh.visible = false; mesh.name = name;
  const items = [];
  const sh = { cap, items, A, geo, mat, mesh, peak: 0, dropped: 0 };
  sh.add = (o) => { if (items.length >= cap) { sh.dropped++; return null; } const it = Object.assign({ age: -(o.delay || 0) }, o); items.push(it); return it; };
  sh.finish = (w) => { sh.peak = Math.max(sh.peak, w); geo.instanceCount = w; mesh.visible = w > 0; if (w) for (const a of Object.values(A)) { a.updateRange.offset = 0; a.updateRange.count = w * 4; a.needsUpdate = true; } };
  sh.clear = () => { items.length = 0; geo.instanceCount = 0; mesh.visible = false; };
  sh.dispose = () => { geo.dispose(); baseGeo.dispose(); mat.dispose(); };
  return sh;
}
const lerp = (a, b, k) => a + (b - a) * k;
const easeOut = (k) => 1 - Math.pow(1 - k, 3);
const fadeAlpha = (k, fi, fo) => (fi > 0 ? Math.min(1, k / fi) : 1) * (k > fo ? 1 - (k - fo) / (1 - fo) : 1);

// ---------------------------------------------------------------------------------------------
// createVFX
// ---------------------------------------------------------------------------------------------
export function createVFX(scene, camera, opts = {}) {
  const tierName = VFX_TIERS[opts.quality] ? opts.quality : "High";
  const Q = VFX_TIERS[tierName];
  const speed = typeof opts.speed === "function" ? opts.speed : () => 1;
  const tex = acquireTextures();
  const root = new T.Group(); root.name = "vfx";
  scene.add(root);

  const under = makeSpritePool(Q.under, tex, 40, 0);
  const cyl = new T.CylinderGeometry(1, 1, 1, Q.radial, 6, true); cyl.translate(0, 0.5, 0);
  const walls = makeShells(Q.walls, cyl, ["iA", "iB", "iC", "iD"], WALL_VS, WALL_FS, tex, 41, "vfx-walls", T.DoubleSide);
  const sph = new T.SphereGeometry(1, Q.radial, Math.round(Q.radial * 0.6));
  const domes = makeShells(Q.domes, sph, ["iA", "iC", "iD"], DOME_VS, DOME_FS, tex, 42, "vfx-domes", T.FrontSide);
  const ribbons = makeRibbons(Q.ribbons, Q.seg, tex, 43);
  const over = makeSpritePool(Q.over, tex, 44, 1);
  const flashMat = new T.ShaderMaterial(Object.assign({}, PREMUL, { depthTest: false, uniforms: { uA: { value: 0 }, uAspect: { value: 1 }, uSeed: { value: 0 }, uColor: { value: new T.Vector3(3, 2.8, 2.5) } }, vertexShader: FLASH_VS, fragmentShader: FLASH_FS }));
  const flashGeo = new T.PlaneGeometry(2, 2);
  const flash = new T.Mesh(flashGeo, flashMat); flash.frustumCulled = false; flash.renderOrder = 60; flash.visible = false; flash.name = "vfx-flash";
  root.add(under.mesh, walls.mesh, domes.mesh, ribbons.mesh, over.mesh, flash);

  let now = 0, flashT = 0, flashDur = 0.2, disposed = false;
  let tasks = [];
  const N = (x) => Math.max(1, Math.round(x * Q.mult));
  const rnd = (a = 0, b = 1) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pal = (el) => PAL[elKey(el)];
  const v3 = (p, dy = 0) => ({ x: p ? p.x : 0, y: (p ? p.y : 0) + dy, z: p ? p.z : 0 });
  // Camera basis (refreshed each update; used to orient slashes and offset toward the viewer).
  const camPos = new T.Vector3(), camRight = new T.Vector3(1, 0, 0), camUp = new T.Vector3(0, 1, 0), camFwd = new T.Vector3(0, 0, -1);
  function camBasis() {
    camera.updateMatrixWorld();
    camera.getWorldPosition(camPos);
    const e = camera.matrixWorld.elements;
    camRight.set(e[0], e[1], e[2]).normalize(); camUp.set(e[4], e[5], e[6]).normalize(); camFwd.set(-e[8], -e[9], -e[10]).normalize();
  }
  camBasis();
  // Move a point toward the camera so unit-centred effects draw in front of the body.
  const fwd = (p, d) => ({ x: p.x - camFwd.x * d, y: p.y - camFwd.y * d, z: p.z - camFwd.z * d });

  // Task scheduler (scaled time). fn(dt) returns true while running.
  const run = (fn) => { tasks.push(fn); };
  const after = (delay, fn) => { let t = 0; run((dt) => { t += dt; if (t >= delay) { fn(); return false; } return true; }); };
  // Emit at `rate` per second (already tier-scaled by caller via N) for `dur`; fn(k) per particle.
  const stream = (dur, rate, fn, delay = 0) => { let t = -delay, acc = 0; run((dt) => { t += dt; if (t < 0) return true; acc += rate * dt; while (acc >= 1) { acc--; fn(Math.min(1, t / dur)); } return t < dur; }); };

  // ---- shorthands for the pools
  const O = (o) => over.add(o), U = (o) => under.add(o);
  const wall = (o) => walls.add(Object.assign({ x: 0, y: 0, z: 0, h0: 1, h1: 1, r0a: 0.8, r0b: 0.8, r1a: 0.8, r1b: 0.8, twist: 0, row: 0, c: WHITE, k: 1, a: 1, life: 1, fi: 0.15, fo: 0.5, us: 0, vs: 0.8, rep: 2, add: 1, y0: null, y1: null }, o));
  const dome = (o) => domes.add(Object.assign({ x: 0, y: 0, z: 0, r0: 1, r1: 1, c: WHITE, k: 1, a: 1, life: 1, fi: 0.15, fo: 0.6, row: R.HEX, scroll: 0.3, pow: 2.2, add: 1 }, o));
  const ribbon = (o) => ribbons.add(o);

  // ---- shared building blocks -----------------------------------------------------------
  function groundGlow(x, y, z, size, c, k, life, a = 1) { k *= 0.6; O({ x, y: y + 0.035, z, gnd: 1, f: F.GLOW, s0: size * 0.7, s1: size, sp: 2, c0: c, k, a, life, fi: 0.12, fo: 0.35 }); }
  function groundRing(x, y, z, s0, s1, c, k, life, a = 1) { k *= 0.55; O({ x, y: y + 0.04, z, gnd: 1, f: F.SHOCK, s0, s1, sp: 3, c0: c, k, a, life, fi: 0.04, fo: 0.3, rot: rnd(0, 6) }); }
  function flashAt(p, size, c, k = 1, life = 0.16) {
    O({ x: p.x, y: p.y, z: p.z, f: F.GLOW, s0: size * 0.6, s1: size, sp: 2, c0: c, k, life, fi: 0, fo: 0.15, soft: 0 });
    O({ x: p.x, y: p.y, z: p.z, f: F.GLOW, s0: size * 0.25, s1: size * 0.45, c0: WHITE, k: 3 * k, life: life * 0.8, fi: 0, fo: 0.1, soft: 0 });
  }
  function sparks(p, n, c, spd, opt = {}) {
    for (let i = 0; i < n; i++) {
      const th = rnd(0, 6.283), ph = Math.acos(rnd(-0.6, 1)), s = spd * rnd(0.45, 1);
      O({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * Math.sin(ph) * s, vy: Math.cos(ph) * s * 0.9 + (opt.up || 0), vz: Math.sin(th) * Math.sin(ph) * s, g: opt.g == null ? -5 : opt.g, drag: 2.2, f: F.STREAK, st: opt.st || 0.09, s0: opt.size || 0.07, s1: 0.02, c0: c, c1: opt.c1, k: opt.k || 1, life: rnd(0.25, 0.5) * (opt.life || 1), fi: 0, fo: 0.4 });
    }
  }
  function smoke(x, y, z, n, c, opt = {}) {
    for (let i = 0; i < n; i++) U({ x: x + rnd(-1, 1) * (opt.r || 0.3), y: y + rnd(0, opt.h || 0.3), z: z + rnd(-1, 1) * (opt.r || 0.3), vx: rnd(-0.3, 0.3) * (opt.spread || 1), vy: rnd(0.3, 0.9) * (opt.rise || 1), vz: rnd(-0.3, 0.3) * (opt.spread || 1), drag: 1.5, f: F.SMOKE, fn: 4, s0: opt.s0 || 0.35, s1: opt.s1 || 0.9, sp: 2, rot: rnd(0, 6), rv: rnd(-1, 1), c0: c, a: opt.a || 0.55, life: rnd(0.7, 1.1) * (opt.life || 1), fi: 0.15, fo: 0.3, delay: opt.delay ? rnd(0, opt.delay) : 0 });
  }

  // ---- element flourishes used by several effects ----------------------------------------
  // burst(el, p, scale): the element's signature "pop" (impact core). p = {x,y,z}, scale ~1.
  const burstFx = {
    flame(p, s, P) {
      for (let i = 0; i < N(14 * s); i++) {
        const th = rnd(0, 6.283), sp = rnd(1.2, 2.6) * s;
        O({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * sp, vy: rnd(0.4, 2.2) * s, vz: Math.sin(th) * sp, drag: 4, g: 2.2, f: F.FLAME, fn: 4, fps: 14, s0: 0.42 * s, s1: 0.16 * s, c0: P.core, c1: P.deep, k: 1.1, life: rnd(0.35, 0.6), fi: 0.05, fo: 0.35 });
      }
      for (let i = 0; i < N(18 * s); i++) O({ x: p.x, y: p.y, z: p.z, vx: rnd(-2.5, 2.5) * s, vy: rnd(0.5, 3.5) * s, vz: rnd(-2.5, 2.5) * s, g: -1.5, drag: 1.4, f: F.GLOW, s0: rnd(0.05, 0.1), s1: 0.02, c0: P.core, c1: P.main, k: 1.4, life: rnd(0.6, 1.2), fi: 0, fo: 0.6, st: 0.04 });
      smoke(p.x, p.y - 0.2, p.z, N(5 * s), P.dark, { r: 0.25 * s, s0: 0.4 * s, s1: 1.1 * s, a: 0.5, delay: 0.1 });
    },
    gale(p, s, P) {
      // curved wind arcs whipping round the point
      for (let i = 0; i < (Q.extras ? 3 : 2); i++) {
        const r0 = rnd(0.35, 0.6) * s, a0 = rnd(0, 6.283), tilt = rnd(-0.5, 0.5), dir = i % 2 ? 1 : -1, cx = p.x, cy = p.y + rnd(-0.25, 0.25), cz = p.z;
        ribbon({ fn: (u, k, o) => { const a = a0 + dir * u * 3.6, r = r0 * (0.75 + 0.6 * k + 0.2 * u); o.set(cx + Math.cos(a) * r, cy + Math.sin(a) * r * tilt + u * 0.3, cz + Math.sin(a) * r * 0.6); }, w: 0.16 * s, c: i ? P.core : P.main, k: 1, row: R.WIND, rep: 1.2, scroll: 1.5, life: 0.42, headEnd: 0.45, tailStart: 0.3, fi: 0.05, fo: 0.55 });
      }
      for (let i = 0; i < N(12 * s); i++) { const th = rnd(0, 6.283), sp = rnd(2, 4.5) * s; O({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * sp, vy: rnd(-0.6, 1.2), vz: Math.sin(th) * sp * 0.7, drag: 3.5, f: F.STREAK, st: 0.16, s0: 0.06, s1: 0.03, c0: P.core, k: 0.9, life: rnd(0.25, 0.45), fi: 0, fo: 0.3 }); }
      for (let i = 0; i < N(7 * s); i++) { const th = rnd(0, 6.283), sp = rnd(1, 2.2) * s; U({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * sp, vy: rnd(0.4, 1.8), vz: Math.sin(th) * sp, g: -1.6, drag: 1.6, f: F.LEAF, s0: 0.16, rot: rnd(0, 6), rv: rnd(-9, 9), c0: [0.35, 0.95, 0.3], k: 1, a: 1, life: rnd(0.8, 1.2), fi: 0.02, fo: 0.6, soft: 0.1 }); }
      for (let i = 0; i < N(4 * s); i++) { const th = rnd(0, 6.283), sp = rnd(1, 2) * s; O({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * sp, vy: rnd(0.5, 1.6), vz: Math.sin(th) * sp, g: -1.4, drag: 1.6, f: F.LEAF, s0: 0.14, rot: rnd(0, 6), rv: rnd(-9, 9), c0: P.main, k: 0.8, life: rnd(0.6, 1.0), fi: 0.02, fo: 0.5 }); }
    },
    tide(p, s, P) {
      // splash crown: droplets launched up and out in a ring, falling back
      const n = N(22 * s);
      for (let i = 0; i < n; i++) {
        const th = i / n * 6.283 + rnd(-0.1, 0.1), sp = rnd(1.0, 2.0) * s;
        O({ x: p.x + Math.cos(th) * 0.15, y: p.y - 0.1, z: p.z + Math.sin(th) * 0.15, vx: Math.cos(th) * sp, vy: rnd(2.2, 3.8) * s, vz: Math.sin(th) * sp, g: -9, f: F.DROP, st: 0.12, s0: rnd(0.08, 0.13) * s, s1: 0.05, c0: P.core, c1: P.main, k: 0.9, life: rnd(0.55, 0.85), fi: 0, fo: 0.6, soft: 0.1 });
      }
      wall({ x: p.x, y: p.y - 0.35, z: p.z, h0: 0.25, h1: 0.8 * s, r0a: 0.15, r0b: 0.35 * s, r1a: 0.3, r1b: 0.85 * s, row: R.WATER, c: P.main, k: 0.9, life: 0.5, fi: 0.05, fo: 0.4, vs: -1.2, rep: 3 });
      for (let i = 0; i < 2; i++) O({ x: p.x, y: p.y, z: p.z, f: F.RING, s0: 0.3 * s, s1: (1.3 + i * 0.5) * s, sp: 3, c0: P.core, k: 0.7, life: 0.35 + i * 0.12, fi: 0, fo: 0.2, soft: 0, delay: i * 0.05 });
      for (let i = 0; i < N(8 * s); i++) O({ x: p.x, y: p.y, z: p.z, vx: rnd(-1.4, 1.4), vy: rnd(0, 1.5), vz: rnd(-1.4, 1.4), drag: 3, f: F.GLOW, s0: 0.1, s1: 0.32, c0: AQUA.core, k: 0.35, life: rnd(0.4, 0.7), fi: 0.05, fo: 0.3 });
    },
    light(p, s, P) {
      // radiant rays (static starburst decal + needle streaks) and drifting motes, with a halo ring
      O({ x: p.x, y: p.y, z: p.z, f: F.BURST, s0: 0.8 * s, s1: 2.0 * s, sp: 3, rot: rnd(0, 6), rv: 0.6, c0: P.main, k: 1, life: 0.42, fi: 0, fo: 0.3, soft: 0 });
      for (let i = 0; i < N(10 * s); i++) { const th = rnd(0, 6.283), ph = rnd(-1.2, 1.2), sp = rnd(4, 7) * s; O({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * Math.cos(ph) * sp, vy: Math.sin(ph) * sp, vz: Math.sin(th) * Math.cos(ph) * sp, drag: 7, f: F.STREAK, st: 0.22, s0: 0.07, s1: 0.03, c0: P.core, k: 1.1, life: rnd(0.25, 0.4), fi: 0, fo: 0.2 }); }
      for (let i = 0; i < N(14 * s); i++) O({ x: p.x + rnd(-0.4, 0.4) * s, y: p.y + rnd(-0.4, 0.5) * s, z: p.z + rnd(-0.4, 0.4) * s, vy: rnd(0.2, 0.8), drag: 1, f: F.STAR, s0: rnd(0.12, 0.22), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.5, 0.9), fi: 0.1, fo: 0.4, delay: rnd(0, 0.15) });
      O({ x: p.x, y: p.y + 0.05, z: p.z, f: F.RING, s0: 0.4 * s, s1: 1.4 * s, sp: 3, c0: P.core, k: 0.9, life: 0.4, fi: 0, fo: 0.3, soft: 0 });
    },
    shadow(p, s, P) {
      // dark core with purple rim; particles collapse inward then the core pops
      U({ x: p.x, y: p.y, z: p.z, f: F.GLOW, s0: 1.1 * s, s1: 0.35 * s, sp: 2, c0: P.dark, a: 0.95, life: 0.45, fi: 0.05, fo: 0.75, soft: 0, add: 0 });
      O({ x: p.x, y: p.y, z: p.z, f: F.RING, s0: 1.0 * s, s1: 0.3 * s, sp: 2, c0: P.core, k: 1.2, life: 0.4, fi: 0.05, fo: 0.8, soft: 0 });
      for (let i = 0; i < N(18 * s); i++) O({ orb: 1, cx: p.x, cy: p.y, cz: p.z, th: rnd(0, 6.283), rad: rnd(0.6, 1.1) * s, om: rnd(3, 6) * (i % 2 ? 1 : -1), vr: -2.4 * s, y: p.y + rnd(-0.6, 0.6) * s, pull: 5, f: F.STREAK, st: 0.06, s0: 0.07, s1: 0.03, c0: P.core, c1: P.main, k: 1, life: 0.38, fi: 0.15, fo: 0.8 });
      for (let i = 0; i < N(6 * s); i++) U({ x: p.x + rnd(-0.6, 0.6) * s, y: p.y + rnd(-0.4, 0.5), z: p.z + rnd(-0.6, 0.6) * s, vx: 0, vy: 0.2, f: F.SMOKE, fn: 4, s0: 0.6 * s, s1: 0.2, rot: rnd(0, 6), rv: rnd(-2, 2), c0: P.dark, a: 0.7, life: 0.45, fi: 0.2, fo: 0.6, add: 0 });
      after(0.34, () => {
        flashAt(p, 1.0 * s, P.main, 0.8, 0.18);
        for (let i = 0; i < N(14 * s); i++) { const th = rnd(0, 6.283), sp = rnd(2, 4) * s; O({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * sp, vy: rnd(-1, 2), vz: Math.sin(th) * sp, drag: 4, f: F.STREAK, st: 0.12, s0: 0.07, s1: 0.02, c0: P.core, k: 1, life: rnd(0.25, 0.45), fi: 0, fo: 0.3 }); }
        for (let i = 0; i < N(5 * s); i++) { const th = rnd(0, 6.283); U({ x: p.x, y: p.y, z: p.z, vx: Math.cos(th) * 1.2, vy: rnd(0.2, 0.9), vz: Math.sin(th) * 1.2, drag: 2, f: F.SMOKE, fn: 4, s0: 0.3 * s, s1: 0.9 * s, rot: rnd(0, 6), rv: rnd(-1.5, 1.5), c0: P.dark, a: 0.6, life: rnd(0.6, 0.9), fi: 0.05, fo: 0.3, add: 0 }); }
      });
    },
    physical(p, s, P) {
      for (let i = 0; i < N(6 * s); i++) U({ x: p.x, y: p.y - 0.3, z: p.z, vx: rnd(-1, 1), vy: rnd(0.2, 0.8), vz: rnd(-1, 1), drag: 2, f: F.SMOKE, fn: 4, s0: 0.3 * s, s1: 0.8 * s, rot: rnd(0, 6), c0: [0.25, 0.22, 0.2], a: 0.45, life: rnd(0.5, 0.8), fi: 0.05, fo: 0.3 });
      O({ x: p.x, y: p.y, z: p.z, f: F.BURST, s0: 0.6 * s, s1: 1.4 * s, sp: 3, rot: rnd(0, 6), c0: P.core, k: 0.6, life: 0.2, fi: 0, fo: 0.2, soft: 0 });
    },
  };

  // =======================================================================================
  // Public effects
  // =======================================================================================

  // Ground spell circle under a caster. pos = unit ground position.
  function castCircle(pos, el) {
    const P = pal(el), e = elKey(el), x = pos.x, y = pos.y || 0, z = pos.z;
    O({ x, y: y + 0.04, z, gnd: 1, f: F.RUNE, s0: 0.8, s1: 2.0, sp: 4, rot: rnd(0, 6), rv: 1.4, c0: P.main, k: 1.05, life: 1.05, fi: 0.1, fo: 0.6 });
    O({ x, y: y + 0.045, z, gnd: 1, f: F.RUNE, s0: 0.4, s1: 1.15, sp: 4, rot: rnd(0, 6), rv: -2.6, c0: P.core, k: 0.55, life: 0.95, fi: 0.15, fo: 0.55 });
    groundGlow(x, y, z, 2.6, P.main, 0.45, 1.0);
    wall({ x, y, z, h0: 0.15, h1: 0.8, r0a: 0.7, r0b: 0.92, r1a: 0.7, r1b: 0.9, row: P.row || R.RAYS, c: P.main, k: 0.75, life: 0.85, fi: 0.2, fo: 0.45, vs: 1.4, rep: 3, us: 0.2 });
    const n = N(e === "physical" ? 10 : 16);
    if (e === "flame") {
      for (let i = 0; i < n; i++) { const th = i / n * 6.283, r = 0.85; O({ x: x + Math.cos(th) * r, y: y + 0.12, z: z + Math.sin(th) * r, vy: rnd(0.5, 1.1), f: F.FLAME, fn: 4, fps: 12, s0: rnd(0.3, 0.42), s1: 0.12, c0: P.core, c1: P.deep, k: 1, life: rnd(0.45, 0.7), fi: 0.15, fo: 0.4, delay: rnd(0, 0.35), soft: 0.08 }); }
      for (let i = 0; i < N(14); i++) O({ x: x + rnd(-0.8, 0.8), y: y + 0.1, z: z + rnd(-0.8, 0.8), vx: rnd(-0.3, 0.3), vy: rnd(1.0, 2.2), vz: rnd(-0.3, 0.3), drag: 0.8, f: F.GLOW, s0: 0.07, s1: 0.02, c0: P.core, c1: P.main, k: 1.4, life: rnd(0.7, 1.1), fi: 0, fo: 0.5, delay: rnd(0, 0.4) });
    } else if (e === "gale") {
      for (let i = 0; i < n; i++) O({ orb: 1, cx: x, cy: y, cz: z, th: rnd(0, 6.283), rad: rnd(0.55, 0.95), om: rnd(4, 6.5), vr: -0.15, y: y + 0.1, vy: rnd(0.6, 1.2), f: i % 3 ? F.STREAK : F.LEAF, st: i % 3 ? 0.12 : 0, s0: i % 3 ? 0.06 : 0.13, rot: rnd(0, 6), rv: 6, c0: i % 3 ? P.core : P.main, k: 0.9, life: rnd(0.6, 0.9), fi: 0.1, fo: 0.5, delay: rnd(0, 0.3) });
      for (let i = 0; i < (Q.extras ? 2 : 1); i++) { const a0 = rnd(0, 6.283); ribbon({ fn: (u, k, o) => { const a = a0 + u * 4.2, r = 0.95 - u * 0.25; o.set(x + Math.cos(a) * r, y + 0.1 + u * 0.7, z + Math.sin(a) * r); }, w: 0.14, c: P.core, k: 0.8, row: R.WIND, rep: 1, scroll: 1, life: 0.7, headEnd: 0.5, tailStart: 0.35, delay: i * 0.15 }); }
    } else if (e === "tide") {
      for (let i = 0; i < 3; i++) O({ x, y: y + 0.05, z, gnd: 1, f: F.RING, s0: 0.3, s1: 2.2, sp: 2, c0: P.core, k: 0.6, life: 0.7, fi: 0.05, fo: 0.3, delay: i * 0.18 });
      for (let i = 0; i < n; i++) { const th = rnd(0, 6.283), r = rnd(0.4, 0.85); O({ x: x + Math.cos(th) * r, y: y + 0.05, z: z + Math.sin(th) * r, vx: Math.cos(th) * 0.3, vy: rnd(1.6, 2.8), vz: Math.sin(th) * 0.3, g: -6, f: F.DROP, st: 0.12, s0: 0.09, s1: 0.05, c0: P.core, c1: P.main, k: 0.9, life: rnd(0.6, 0.85), fi: 0, fo: 0.6, delay: rnd(0, 0.35), soft: 0.1 }); }
    } else if (e === "light") {
      for (let i = 0; i < n; i++) O({ x: x + rnd(-0.8, 0.8), y: y + rnd(0.1, 0.4), z: z + rnd(-0.8, 0.8), vy: rnd(0.4, 1.0), f: F.STAR, s0: rnd(0.12, 0.2), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.6, 1.0), fi: 0.15, fo: 0.4, delay: rnd(0, 0.35) });
      for (let i = 0; i < N(7); i++) { const th = rnd(0, 6.283), r = rnd(0.2, 0.8); O({ x: x + Math.cos(th) * r, y: y + 0.4, z: z + Math.sin(th) * r, vy: 2.6, drag: 3, f: F.STREAK, st: 0.4, s0: 0.06, s1: 0.03, c0: P.core, k: 1, life: 0.45, fi: 0.1, fo: 0.3, delay: rnd(0, 0.3) }); }
    } else if (e === "shadow") {
      for (let i = 0; i < N(8); i++) { const th = rnd(0, 6.283); U({ orb: 1, cx: x, cy: y + 0.25, cz: z, th, rad: rnd(0.9, 1.2), om: 1.5, vr: -1.1, y: y + 0.2, f: F.SMOKE, fn: 4, s0: 0.45, s1: 0.15, rot: rnd(0, 6), rv: 1.5, c0: P.dark, a: 0.65, life: 0.8, fi: 0.2, fo: 0.6, add: 0, delay: rnd(0, 0.2), soft: 0.08 }); }
      for (let i = 0; i < n; i++) O({ orb: 1, cx: x, cy: y + 0.3, cz: z, th: rnd(0, 6.283), rad: rnd(0.8, 1.1), om: 2.5, vr: -1.2, y: y + rnd(0.05, 0.5), pull: 1.5, f: F.STREAK, st: 0.1, s0: 0.06, s1: 0.02, c0: P.core, k: 1, life: rnd(0.55, 0.8), fi: 0.2, fo: 0.7, delay: rnd(0, 0.3) });
      U({ x, y: y + 0.035, z, gnd: 1, f: F.GLOW, s0: 1.2, s1: 1.8, c0: P.dark, a: 0.85, life: 1.0, fi: 0.15, fo: 0.6, add: 0 });
    } else {
      for (let i = 0; i < n; i++) O({ x: x + rnd(-0.8, 0.8), y: y + 0.1, z: z + rnd(-0.8, 0.8), vy: rnd(0.8, 1.6), drag: 1, f: F.GLOW, s0: 0.08, s1: 0.02, c0: P.core, k: 1, life: rnd(0.5, 0.8), fi: 0.1, fo: 0.4, delay: rnd(0, 0.3) });
    }
  }

  // Energy gathering into a unit for `dur` seconds (follows unitRoot.position). Resolves after dur.
  function charge(unitRoot, el, dur = 0.8) {
    const P = pal(el), e = elKey(el), src = unitRoot && unitRoot.position ? unitRoot.position : unitRoot;
    const at = () => fwd({ x: src.x, y: (src.y || 0) + 1.1, z: src.z }, 0.4);
    const core = over.attach({ f: F.GLOW, s: 0.05, c: P.main, k: 1.2, soft: 0 });
    const hot = over.attach({ f: F.STAR, s: 0.05, c: P.core, k: 1.2, soft: 0 });
    const ring = over.attach({ f: F.RING, s: 0.5, c: P.main, k: 0.5, a: 0, soft: 0 });
    const aura = over.attach({ f: F.GLOW, s: 1.6, c: P.main, k: 0.35, a: 0, gnd: 1 });
    let t = 0, acc = 0;
    const rate = N(e === "physical" ? 30 : 46);
    stream(dur * 0.85, rate, () => {
      const c = at(), th = rnd(0, 6.283), r = rnd(0.9, 1.5);
      if (e === "shadow" && Math.random() < 0.35) { U({ orb: 1, cx: c.x, cy: c.y, cz: c.z, th, rad: r, om: 2, vr: -r / 0.45, y: c.y + rnd(-0.9, 0.6), pull: 4, f: F.SMOKE, fn: 4, s0: 0.5, s1: 0.1, rot: rnd(0, 6), c0: P.dark, a: 0.6, life: 0.45, fi: 0.3, fo: 0.7, add: 0 }); return; }
      const f = e === "flame" ? (Math.random() < 0.5 ? F.FLAME : F.GLOW) : e === "gale" ? (Math.random() < 0.3 ? F.LEAF : F.STREAK) : e === "tide" ? F.DROP : e === "light" ? (Math.random() < 0.5 ? F.STAR : F.STREAK) : F.STREAK;
      O({ orb: 1, cx: c.x, cy: c.y, cz: c.z, th, rad: r, om: (e === "gale" ? 5 : 2) * (Math.random() < 0.5 ? 1 : -1), vr: -r / 0.42, y: c.y + rnd(-1.0, 0.7), pull: 4.5, f, fn: f === F.FLAME ? 4 : 1, fps: 12, st: f === F.STREAK || f === F.DROP ? 0.08 : 0, s0: f === F.FLAME ? 0.3 : f === F.LEAF ? 0.15 : 0.11, s1: 0.03, rot: rnd(0, 6), rv: f === F.LEAF ? 6 : 0, c0: Math.random() < 0.5 ? P.core : P.main, k: 1, life: 0.42, fi: 0.3, fo: 0.85 });
    });
    if (e === "flame") stream(dur, N(14), () => { const th = rnd(0, 6.283), r = rnd(0.2, 0.55); O({ x: src.x + Math.cos(th) * r, y: (src.y || 0) + 0.08, z: src.z + Math.sin(th) * r, vy: rnd(0.5, 1.2), f: F.FLAME, fn: 4, fps: 12, s0: 0.3, s1: 0.1, c0: P.core, c1: P.deep, k: 0.9, life: 0.5, fi: 0.15, fo: 0.4, soft: 0.06 }); });
    if (e === "tide" || e === "gale") stream(dur, N(e === "gale" ? 6 : 5), () => { const c = at(); ribbon({ fn: ((a0, cx, cz, by, rr) => (u, k, o) => { const a = a0 + u * 5, r = rr * (1 - u * 0.5); o.set(cx + Math.cos(a) * r, by + u * 1.6, cz + Math.sin(a) * r); })(rnd(0, 6.283), c.x, c.z, (src.y || 0) + 0.05, rnd(0.45, 0.7)), w: 0.1, c: P.core, k: 0.7, row: P.row, rep: 1, scroll: 1.5, life: 0.5, headEnd: 0.5, tailStart: 0.4 }); });
    if (e === "light") stream(dur, N(8), () => { const th = rnd(0, 6.283), r = rnd(0.25, 0.6); O({ x: src.x + Math.cos(th) * r, y: (src.y || 0) + 0.1, z: src.z + Math.sin(th) * r, vy: 3.2, drag: 2.5, f: F.STREAK, st: 0.35, s0: 0.05, s1: 0.03, c0: P.core, k: 1, life: 0.5, fi: 0.1, fo: 0.4 }); });
    return new Promise((done) => {
      run((dt) => {
        t += dt; const k = Math.min(1, t / dur), c = at();
        const pulse = 1 + Math.sin(t * 30) * 0.08;
        core.x = hot.x = ring.x = c.x; core.y = hot.y = ring.y = c.y; core.z = hot.z = ring.z = c.z + 0.05;
        aura.x = src.x; aura.y = (src.y || 0) + 0.04; aura.z = src.z;
        core.s = (0.15 + 0.55 * easeOut(k)) * pulse; hot.s = (0.12 + 0.35 * k) * pulse; hot.rot += dt * 3;
        ring.s = 1.5 - 1.1 * ((t * 2.2) % 1); ring.a = 0.45 * Math.sin(((t * 2.2) % 1) * Math.PI) * Math.min(1, k * 3);
        aura.a = Math.min(1, k * 2) * 0.9; aura.s = 1.4 + 0.3 * k;
        if (e === "shadow") { core.c = P.main; core.k = 0.8; }
        if (k >= 1) {
          core.dead = hot.dead = ring.dead = aura.dead = true;
          flashAt(c, 0.9, P.main, 0.9, 0.14);
          done(); return false;
        }
        return true;
      });
    });
  }

  // Projectile from -> to. kind: "orb" | "bolt" | "arrow" | "shard". Resolves on arrival.
  function projectile(from, to, el, kind = "orb") {
    const P = pal(el), e = elKey(el), a = v3(from), b = v3(to);
    const dist = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z);
    const spd = { orb: 11, bolt: 22, arrow: 16, shard: 18 }[kind] || 11;
    const dur = Math.min(0.62, Math.max(0.2, dist / spd));
    const arc = { orb: 0.7, bolt: 0.12, arrow: 0.45, shard: 0.2 }[kind] || 0.5;
    const big = kind === "orb";
    // heads
    const halo = over.attach({ f: F.GLOW, s: big ? 0.95 : 0.45, c: P.main, k: big ? 0.9 : 0.8, soft: 0 });
    const head = over.attach({ f: kind === "shard" ? F.SHARD : kind === "orb" ? F.GLOW : F.STREAK, s: big ? 0.38 : kind === "arrow" ? 0.1 : 0.16, st: kind === "orb" ? 0 : kind === "shard" ? 0.06 : 0.25, c: kind === "shard" ? P.core : WHITE, k: big ? 2.2 : 1.6, soft: 0 });
    let darkCore = null, rim = null, star = null;
    if (big && e === "shadow") { darkCore = under.attach({ f: F.GLOW, s: 0.55, c: P.dark, a: 0.95, add: 0 }); rim = over.attach({ f: F.RING, s: 0.6, c: P.core, k: 1.3, soft: 0 }); head.c = P.main; head.k = 0.9; head.s = 0.18; halo.k = 0.6; }
    if (big && e === "light") star = over.attach({ f: F.STAR, s: 0.9, c: P.core, k: 1, soft: 0 });
    if (big && e === "tide") rim = over.attach({ f: F.RING, s: 0.55, c: P.core, k: 0.8, soft: 0 });
    const gglow = over.attach({ f: F.GLOW, s: 1.1, c: P.main, k: 0.35, gnd: 1, a: 0.8 });
    // trails
    const trailW = big ? 0.42 : kind === "arrow" ? 0.07 : kind === "shard" ? 0.14 : 0.2;
    const tr1 = ribbon({ kind: "trail", w: trailW, c: e === "shadow" ? P.main : P.core, k: 1, row: R.BLADE, mirror: 1, tl: big ? 0.22 : 0.14, rep: 1, scroll: 0 });
    const tr2 = Q.extras && e !== "physical" ? ribbon({ kind: "trail", w: trailW * (big ? 2.0 : 2.6), c: e === "shadow" ? P.dark : P.main, k: e === "shadow" ? 1 : 0.85, add: e === "shadow" ? 0 : 1, row: e === "shadow" ? R.WISP : P.row, tl: big ? 0.3 : 0.2, rep: 1.4, scroll: 2.2 }) : null;
    let t = 0, px = a.x, py = a.y, pz = a.z;
    const wob = e === "gale" ? 0.35 : e === "light" && kind === "bolt" ? 0.18 : 0;
    const sx = (b.z - a.z), sz = -(b.x - a.x), sl = Math.hypot(sx, sz) || 1;
    return new Promise((done) => {
      run((dt) => {
        t += dt; const k = Math.min(1, t / dur);
        const kk = kind === "arrow" ? k : kind === "orb" ? k * k * (3 - 2 * k) * 0.25 + k * 0.75 : k;
        let x = lerp(a.x, b.x, kk), y = lerp(a.y, b.y, kk) + Math.sin(kk * Math.PI) * arc, z = lerp(a.z, b.z, kk);
        if (wob) { const w = Math.sin(kk * Math.PI * (e === "light" ? 9 : 3)) * wob * Math.sin(kk * Math.PI); x += sx / sl * w; z += sz / sl * w; }
        const vx = (x - px) / Math.max(dt, 1e-4), vy = (y - py) / Math.max(dt, 1e-4), vz = (z - pz) / Math.max(dt, 1e-4);
        for (const h of [halo, head, darkCore, rim, star]) if (h) { h.x = x; h.y = y; h.z = z; h.vx = vx; h.vy = vy; h.vz = vz; }
        if (star) star.rot += dt * 4;
        if (rim) rim.s = 0.55 + Math.sin(t * 25) * 0.06;
        halo.s = (big ? 0.95 : 0.45) * (1 + Math.sin(t * 40) * 0.08);
        gglow.x = x; gglow.y = 0.04; gglow.z = z; gglow.a = 0.8 * Math.max(0, 1 - y / 4);
        ribbons.push(tr1, x, y, z, now); if (tr2) ribbons.push(tr2, x, y, z, now);
        // element flair along the path
        const n = Math.random() < (big ? 0.9 : 0.5) * Q.mult * 1.2 ? (big ? 2 : 1) : 0;
        for (let i = 0; i < n; i++) {
          if (e === "flame") O({ x: x + rnd(-0.1, 0.1), y: y + rnd(-0.1, 0.1), z: z + rnd(-0.1, 0.1), vx: -vx * 0.08, vy: rnd(0.4, 1.2), vz: -vz * 0.08, drag: 2, f: Math.random() < 0.6 ? F.FLAME : F.GLOW, fn: 4, fps: 14, s0: big ? 0.36 : 0.18, s1: 0.06, c0: P.core, c1: P.deep, k: 1, life: rnd(0.25, 0.45), fi: 0, fo: 0.3 });
          else if (e === "gale") O({ orb: 1, cx: x, cy: y, cz: z, th: rnd(0, 6.283), rad: big ? 0.35 : 0.2, om: 14, vr: 0.6, y, f: F.STREAK, st: 0.06, s0: 0.05, s1: 0.02, c0: P.core, k: 0.9, life: 0.25, fi: 0, fo: 0.4 });
          else if (e === "tide") O({ x, y, z, vx: rnd(-0.8, 0.8) - vx * 0.05, vy: rnd(0, 1.2), vz: rnd(-0.8, 0.8) - vz * 0.05, g: -7, f: F.DROP, st: 0.1, s0: 0.07, s1: 0.03, c0: P.core, k: 0.8, life: rnd(0.3, 0.5), fi: 0, fo: 0.5 });
          else if (e === "light") O({ x: x + rnd(-0.15, 0.15), y: y + rnd(-0.15, 0.15), z: z + rnd(-0.15, 0.15), f: F.STAR, s0: rnd(0.1, 0.2), s1: 0.01, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.3, 0.5), fi: 0, fo: 0.3 });
          else if (e === "shadow") U({ x: x + rnd(-0.1, 0.1), y: y + rnd(-0.1, 0.1), z: z + rnd(-0.1, 0.1), vy: 0.3, f: F.SMOKE, fn: 4, s0: big ? 0.45 : 0.25, s1: 0.1, rot: rnd(0, 6), rv: rnd(-3, 3), c0: P.dark, a: 0.7, life: 0.4, fi: 0, fo: 0.3, add: 0 });
          else O({ x, y, z, vx: rnd(-0.4, 0.4), vy: rnd(-0.4, 0.4), vz: rnd(-0.4, 0.4), f: F.GLOW, s0: 0.08, s1: 0.01, c0: P.core, k: 0.8, life: 0.25 });
        }
        px = x; py = y; pz = z;
        if (k >= 1) {
          for (const h of [halo, head, darkCore, rim, star, gglow]) if (h) h.dead = true;
          if (tr1) tr1.live = false; if (tr2) tr2.live = false;
          done(); return false;
        }
        return true;
      });
    });
  }

  // Melee slash across a hit point. dir (optional Vector3) = swing travel direction (attacker -> target).
  function slash(pos, el, dir) {
    const P = pal(el), e = elKey(el), p = v3(pos);
    // put the arc a little in front of the target, toward the camera
    const tc = 0.45;
    const cx = p.x - camFwd.x * tc, cy = p.y - camFwd.y * tc, cz = p.z - camFwd.z * tc;
    let sign = Math.random() < 0.5 ? 1 : -1;
    if (dir) { const d = dir.x * camRight.x + dir.y * camRight.y + dir.z * camRight.z; if (Math.abs(d) > 0.05) sign = d > 0 ? 1 : -1; }
    const tilt = rnd(-0.55, 0.55) + (sign > 0 ? -0.35 : 0.35);
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    const e1x = camRight.x * ct + camUp.x * st, e1y = camRight.y * ct + camUp.y * st, e1z = camRight.z * ct + camUp.z * st;
    const e2x = -camRight.x * st + camUp.x * ct, e2y = -camRight.y * st + camUp.y * ct, e2z = -camRight.z * st + camUp.z * ct;
    const arcFn = (Rr, flat, a0, span, off = 0) => (u, k, o) => {
      const a = sign > 0 ? a0 + span * (1 - u) : a0 + span * u; // sweep direction
      const r = Rr * (1 + 0.08 * k), ca = Math.cos(a) * r, sa = Math.sin(a) * r * flat;
      o.set(cx + e1x * ca + e2x * sa + camFwd.x * off, cy + e1y * ca + e2y * sa + camFwd.y * off, cz + e1z * ca + e2z * sa + camFwd.z * off);
    };
    const a0 = sign > 0 ? -0.4 : Math.PI + 0.4 - 2.6, span = 2.6;
    const life = 0.3;
    // dark underlay for shadow, then the main crescent, then a hot inner edge
    if (e === "shadow") ribbon({ fn: arcFn(0.82, 0.5, a0 - 0.1, span + 0.2, 0.02), w: 0.62, c: P.dark, k: 1, add: 0, a: 0.95, row: R.BLADE, life: life * 1.15, headEnd: 0.32, tailStart: 0.3, fi: 0, fo: 0.5 });
    ribbon({ fn: arcFn(0.82, 0.5, a0, span), w: 0.5, c: P.main, k: 1.1, row: R.BLADE, life, headEnd: 0.32, tailStart: 0.25, fi: 0, fo: 0.45 });
    ribbon({ fn: arcFn(0.86, 0.5, a0 + 0.1, span - 0.2, -0.01), w: 0.16, c: e === "shadow" ? P.core : WHITE, k: e === "shadow" ? 1 : 2.2, row: R.BLADE, life: life * 0.85, headEnd: 0.32, tailStart: 0.25, fi: 0, fo: 0.4 });
    if (Q.extras) ribbon({ fn: arcFn(0.62, 0.42, a0 + 0.25, span - 0.4, -0.02), w: 0.22, c: e === "physical" ? P.main : P.core, k: 0.6, row: e === "physical" ? R.WIND : P.row, rep: 1.5, scroll: 2, life: life * 1.1, headEnd: 0.4, tailStart: 0.3, delay: 0.03, fi: 0, fo: 0.5 });
    flashAt({ x: cx, y: cy, z: cz }, 0.9, P.main, 0.8, 0.14);
    sparks({ x: cx, y: cy, z: cz }, N(10), P.core, 4.2, { st: 0.1 });
    // element flair along the arc
    const along = (u) => { const o = new T.Vector3(); arcFn(0.82, 0.5, a0, span)(u, 0.2, o); return o; };
    if (e === "flame") for (let i = 0; i < N(10); i++) { const q = along(rnd(0.1, 0.95)); O({ x: q.x, y: q.y, z: q.z, vx: rnd(-0.4, 0.4), vy: rnd(0.6, 1.5), vz: rnd(-0.4, 0.4), drag: 2, f: F.FLAME, fn: 4, fps: 14, s0: 0.28, s1: 0.08, c0: P.core, c1: P.deep, k: 1, life: rnd(0.3, 0.5), fi: 0.05, fo: 0.35, delay: rnd(0, 0.1) }); O({ x: q.x, y: q.y, z: q.z, vx: rnd(-2, 2), vy: rnd(0.5, 2.5), vz: rnd(-2, 2), g: -2, drag: 1.5, f: F.GLOW, s0: 0.06, s1: 0.02, c0: P.core, k: 1.4, life: rnd(0.5, 0.9), fi: 0, fo: 0.5 }); }
    else if (e === "gale") { for (let i = 0; i < N(5); i++) { const q = along(rnd(0, 1)); U({ x: q.x, y: q.y, z: q.z, vx: sign * camRight.x * rnd(1.5, 3), vy: rnd(0, 1), vz: sign * camRight.z * rnd(1.5, 3), g: -1.5, drag: 1.5, f: F.LEAF, s0: 0.15, rot: rnd(0, 6), rv: rnd(-10, 10), c0: [0.35, 0.95, 0.3], life: rnd(0.6, 0.9), fi: 0, fo: 0.6, soft: 0.1 }); } if (Q.extras) ribbon({ fn: arcFn(1.1, 0.55, a0 - 0.2, span + 0.3, 0.05), w: 0.14, c: P.core, k: 0.7, row: R.WIND, rep: 1.4, scroll: 3, life: 0.36, headEnd: 0.4, tailStart: 0.3, delay: 0.05 }); }
    else if (e === "tide") for (let i = 0; i < N(14); i++) { const u = rnd(0.1, 1), q = along(u); O({ x: q.x, y: q.y, z: q.z, vx: (q.x - cx) * 2.5 + rnd(-0.5, 0.5), vy: rnd(0.8, 2.2), vz: (q.z - cz) * 2.5 + rnd(-0.5, 0.5), g: -8, f: F.DROP, st: 0.12, s0: rnd(0.07, 0.11), s1: 0.04, c0: P.core, c1: P.main, k: 0.9, life: rnd(0.4, 0.7), fi: 0, fo: 0.6, delay: u * 0.08, soft: 0.1 }); }
    else if (e === "light") { for (let i = 0; i < N(10); i++) { const q = along(rnd(0, 1)); O({ x: q.x, y: q.y, z: q.z, vy: rnd(0.1, 0.5), f: F.STAR, s0: rnd(0.14, 0.24), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.35, 0.6), fi: 0, fo: 0.35, delay: rnd(0, 0.1) }); } O({ x: cx, y: cy, z: cz, f: F.BURST, s0: 0.6, s1: 1.5, sp: 3, rot: rnd(0, 6), c0: P.main, k: 0.8, life: 0.3, fi: 0, fo: 0.3, soft: 0 }); }
    else if (e === "shadow") for (let i = 0; i < N(6); i++) { const q = along(rnd(0, 1)); U({ x: q.x, y: q.y, z: q.z, vx: rnd(-0.3, 0.3), vy: rnd(0.2, 0.6), vz: rnd(-0.3, 0.3), f: F.SMOKE, fn: 4, s0: 0.25, s1: 0.6, rot: rnd(0, 6), rv: rnd(-2, 2), c0: P.dark, a: 0.65, life: rnd(0.5, 0.7), fi: 0.05, fo: 0.4, add: 0, delay: rnd(0, 0.1) }); }
  }

  // Hit impact at a world point (unit centre). opts.crit = bigger, with extra ring.
  function impact(pos, el, o = {}) {
    const P = pal(el), e = elKey(el), g0 = v3(pos), p = fwd(g0, 0.55), crit = !!o.crit, s = crit ? 1.35 : 1;
    flashAt(p, 1.2 * s, P.main, 0.9, 0.14);
    O({ x: p.x, y: p.y, z: p.z, f: F.SHOCK, s0: 0.3, s1: 1.4 * s, sp: 3, c0: P.main, k: 0.4, life: 0.24, fi: 0, fo: 0.1, soft: 0 });
    sparks(p, N(crit ? 22 : 12), P.core, crit ? 5.5 : 4.2, { c1: P.main });
    // ground decal under the hit: cracks + glow that linger
    O({ x: g0.x, y: 0.035, z: g0.z, gnd: 1, f: F.CRACK, s0: 1.0 * s, s1: 1.2 * s, sp: 3, rot: rnd(0, 6), c0: P.main, k: 0.45, life: 0.9, fi: 0, fo: 0.25 });
    groundGlow(g0.x, 0, g0.z, 1.8 * s, P.main, 0.25, 0.5);
    burstFx[e](p, s, P);
    if (crit) {
      O({ x: p.x, y: p.y, z: p.z, f: F.RING, s0: 0.4, s1: 2.2, sp: 3, c0: P.core, k: 0.8, life: 0.26, fi: 0, fo: 0.1, soft: 0 });
      O({ x: p.x, y: p.y, z: p.z, f: F.BURST, s0: 1, s1: 2.4, sp: 3, rot: rnd(0, 6), c0: P.core, k: 0.7, life: 0.24, fi: 0, fo: 0.2, soft: 0 });
      groundRing(g0.x, 0, g0.z, 0.3, 2.6, P.main, 0.5, 0.45);
    }
  }

  // Area burst on the ground. centre = ground point, radius in world units.
  function aoe(centre, radius = 2, el) {
    const P = pal(el), e = elKey(el), x = centre.x, y = centre.y || 0, z = centre.z, Rr = radius;
    O({ x, y: y + 0.04, z, gnd: 1, f: F.RUNE, s0: Rr * 1.4, s1: Rr * 2.2, sp: 4, rot: rnd(0, 6), rv: 0.8, c0: P.main, k: 0.65, life: 1.3, fi: 0.1, fo: 0.55 });
    groundGlow(x, y, z, Rr * 2.4, P.main, 0.3, 1.3);
    groundRing(x, y, z, Rr * 0.4, Rr * 2.5, P.main, 0.9, 0.6);
    after(0.2, () => groundRing(x, y, z, Rr * 0.4, Rr * 2.3, P.main, 0.7, 0.6));
    for (let i = 0; i < (Q.extras ? 5 : 3); i++) { const th = rnd(0, 6.283), r = rnd(0, Rr * 0.75); O({ x: x + Math.cos(th) * r, y: y + 0.03, z: z + Math.sin(th) * r, gnd: 1, f: F.CRACK, s0: 0.9, s1: 1.2, rot: rnd(0, 6), c0: P.main, k: 0.4, life: 1.4, fi: 0.05, fo: 0.4, delay: rnd(0, 0.3) }); }
    const area = () => { const th = rnd(0, 6.283), r = Math.sqrt(Math.random()) * Rr; return [x + Math.cos(th) * r, z + Math.sin(th) * r]; };
    if (e === "flame") {
      wall({ x, y, z, h0: 0.3, h1: 2.0, r0a: Rr * 0.7, r0b: Rr * 0.95, r1a: Rr * 0.6, r1b: Rr * 0.7, row: R.FIRE, c: P.main, k: 1, life: 1.1, fi: 0.1, fo: 0.45, vs: 1.6, rep: 4 });
      stream(0.75, N(70), () => { const [px, pz] = area(); O({ x: px, y: y + 0.1, z: pz, vy: rnd(1.0, 2.2), drag: 1, f: F.FLAME, fn: 4, fps: 12, s0: rnd(0.5, 0.8), s1: 0.18, c0: P.core, c1: P.deep, k: 1, life: rnd(0.45, 0.75), fi: 0.1, fo: 0.35, soft: 0.1 }); });
      stream(1.0, N(50), () => { const [px, pz] = area(); O({ x: px, y: y + 0.2, z: pz, vx: rnd(-0.5, 0.5), vy: rnd(2, 4), vz: rnd(-0.5, 0.5), g: -1, drag: 0.8, f: F.GLOW, s0: rnd(0.06, 0.11), s1: 0.02, c0: P.core, c1: P.main, k: 1.4, life: rnd(0.8, 1.3), fi: 0, fo: 0.5, st: 0.04 }); });
      for (let i = 0; i < (Q.extras ? 5 : 2); i++) { const [bx, bz] = area(), ph = rnd(0, 6); ribbon({ fn: (u, k, o) => o.set(bx + Math.sin(u * 7 + ph + k * 8) * 0.18, y + 0.1 + u * (1.6 + k), bz + Math.cos(u * 6 + ph) * 0.12), w: 0.3, c: P.main, k: 0.9, row: R.FIRE, rep: 0.8, scroll: 2, life: 0.9, headEnd: 0.4, tailStart: 0.45, delay: rnd(0, 0.3), lead: 0 }); }
      smoke(x, y + 0.3, z, N(12), P.dark, { r: Rr * 0.7, s0: 0.6, s1: 1.6, a: 0.45, delay: 0.5, life: 1.3 });
    } else if (e === "gale") {
      wall({ x, y, z, h0: 1.2, h1: 2.8, r0a: Rr * 0.25, r0b: Rr * 0.4, r1a: Rr * 0.8, r1b: Rr * 1.0, twist: 1.2, row: R.WIND, c: P.main, k: 1, life: 1.2, fi: 0.15, fo: 0.55, us: 2.2, vs: 0.3, rep: 3 });
      if (Q.extras) wall({ x, y, z, h0: 1, h1: 2.4, r0a: Rr * 0.15, r0b: Rr * 0.3, r1a: Rr * 0.6, r1b: Rr * 0.75, twist: -0.8, row: R.WIND, c: P.core, k: 0.6, life: 1.1, fi: 0.15, fo: 0.5, us: -3, vs: 0.2, rep: 2 });
      stream(0.9, N(60), () => { const h = rnd(0, 2.5); O({ orb: 1, cx: x, cy: y, cz: z, th: rnd(0, 6.283), rad: Rr * (0.3 + h / 2.5 * 0.7) * rnd(0.8, 1.1), om: rnd(5, 8), vr: 0.3, y: y + h, vy: rnd(0.8, 1.6), f: F.STREAK, st: 0.07, s0: 0.07, s1: 0.03, c0: P.core, k: 0.9, life: rnd(0.4, 0.7), fi: 0.1, fo: 0.5 }); });
      stream(0.9, N(18), () => U({ orb: 1, cx: x, cy: y, cz: z, th: rnd(0, 6.283), rad: Rr * rnd(0.3, 0.9), om: rnd(4, 6), vr: 0.4, y: y + rnd(0.1, 1.5), vy: rnd(0.8, 1.8), f: F.LEAF, s0: 0.17, rot: rnd(0, 6), rv: rnd(-10, 10), c0: [0.35, 0.95, 0.3], life: rnd(0.7, 1.0), fi: 0.05, fo: 0.6, soft: 0.1 }));
      for (let i = 0; i < (Q.extras ? 4 : 2); i++) { const a0 = rnd(0, 6.283), dir = i % 2 ? 1 : -1; ribbon({ fn: (u, k, o) => { const a = a0 + dir * u * 5, r = Rr * (0.4 + u * 0.55); o.set(x + Math.cos(a) * r, y + 0.2 + u * 2.2, z + Math.sin(a) * r); }, w: 0.22, c: P.core, k: 0.8, row: R.WIND, rep: 1.5, scroll: 2, life: 0.8, headEnd: 0.45, tailStart: 0.4, delay: i * 0.12 }); }
      smoke(x, y, z, N(10), [0.2, 0.24, 0.18], { r: Rr * 0.8, s0: 0.5, s1: 1.4, a: 0.3, spread: 3 });
    } else if (e === "tide") {
      wall({ x, y, z, h0: 0.2, h1: 1.6, r0a: Rr * 0.35, r0b: Rr * 1.0, r1a: Rr * 0.4, r1b: Rr * 1.15, row: R.WATER, c: P.main, k: 1, life: 0.9, fi: 0.05, fo: 0.4, vs: -1, rep: 5 });
      for (let j = 0; j < (Q.extras ? 5 : 3); j++) after(j * 0.1, () => { const [px, pz] = area(); burstFx.tide({ x: px, y: y + 0.25, z: pz }, 0.9, P); });
      for (let i = 0; i < 3; i++) O({ x, y: y + 0.05, z, gnd: 1, f: F.RING, s0: Rr * 0.3, s1: Rr * 2.6, sp: 2, c0: P.core, k: 0.6, life: 0.8, fi: 0.05, fo: 0.3, delay: i * 0.15 });
      stream(0.5, N(60), () => { const [px, pz] = area(); O({ x: px, y: y + 0.05, z: pz, vx: rnd(-0.5, 0.5), vy: rnd(2.5, 4.5), vz: rnd(-0.5, 0.5), g: -9, f: F.DROP, st: 0.12, s0: rnd(0.08, 0.13), s1: 0.05, c0: P.core, c1: P.main, k: 0.9, life: rnd(0.6, 0.9), fi: 0, fo: 0.6, soft: 0.1 }); });
      smoke(x, y, z, N(8), [0.5, 0.65, 0.8], { r: Rr * 0.7, s0: 0.5, s1: 1.4, a: 0.25, delay: 0.3 });
    } else if (e === "light") {
      wall({ x, y, z, h0: 3, h1: 4.5, r0a: Rr * 0.5, r0b: Rr * 0.8, r1a: Rr * 0.5, r1b: Rr * 0.65, row: R.RAYS, c: P.main, k: 0.7, life: 1.1, fi: 0.1, fo: 0.4, vs: 0.8, rep: 3, us: 0.1 });
      stream(0.6, N(40), () => { const [px, pz] = area(); O({ x: px, y: y + 5, z: pz, vy: -14, f: F.STREAK, st: 0.07, s0: 0.1, s1: 0.06, c0: P.core, k: 1.2, life: 0.36, fi: 0, fo: 0.8, soft: 0.3 }); });
      stream(1.0, N(36), () => { const [px, pz] = area(); O({ x: px, y: y + rnd(0.1, 1.5), z: pz, vy: rnd(0.3, 0.9), f: F.STAR, s0: rnd(0.14, 0.26), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.5, 0.9), fi: 0.15, fo: 0.4 }); });
      O({ x, y: y + 3.2, z, gnd: 1, f: F.RUNE, s0: Rr * 1.2, s1: Rr * 1.7, rot: 0, rv: -0.8, c0: P.core, k: 0.7, life: 1.0, fi: 0.15, fo: 0.5 });
      after(0.25, () => { flashAt({ x, y: y + 0.6, z }, Rr * 1.6, P.main, 0.8, 0.25); for (let i = 0; i < 2; i++) O({ x, y: y + 0.8, z, f: F.BURST, s0: Rr, s1: Rr * 2.2, sp: 3, rot: rnd(0, 6), rv: 0.5, c0: P.main, k: 0.8, life: 0.45, fi: 0, fo: 0.3, soft: 0 }); });
    } else if (e === "shadow") {
      U({ x, y: y + 0.035, z, gnd: 1, f: F.GLOW, s0: Rr * 2.4, s1: Rr * 2.0, c0: P.dark, a: 0.92, life: 1.3, fi: 0.1, fo: 0.6, add: 0 });
      wall({ x, y, z, h0: 1.4, h1: 0.6, r0a: Rr * 1.0, r0b: Rr * 0.35, r1a: Rr * 1.1, r1b: Rr * 0.3, row: R.WISP, c: P.dark, k: 1, a: 1, add: 0, life: 0.85, fi: 0.15, fo: 0.6, vs: -0.6, us: 0.8, rep: 3 });
      wall({ x, y, z, h0: 1.2, h1: 0.5, r0a: Rr * 1.05, r0b: Rr * 0.4, r1a: Rr * 1.15, r1b: Rr * 0.35, row: R.WISP, c: P.main, k: 0.9, life: 0.85, fi: 0.15, fo: 0.6, vs: -0.6, us: -0.6, rep: 4 });
      stream(0.7, N(70), () => O({ orb: 1, cx: x, cy: y + 0.6, cz: z, th: rnd(0, 6.283), rad: Rr * rnd(0.7, 1.15), om: rnd(1.5, 3) * (Math.random() < 0.5 ? 1 : -1), vr: -Rr * 1.6, y: y + rnd(0.05, 1.4), pull: 2, f: F.STREAK, st: 0.08, s0: 0.08, s1: 0.03, c0: P.core, c1: P.main, k: 1, life: 0.55, fi: 0.15, fo: 0.8 }));
      stream(0.6, N(22), () => U({ orb: 1, cx: x, cy: y + 0.5, cz: z, th: rnd(0, 6.283), rad: Rr * rnd(0.6, 1.0), om: 1.4, vr: -Rr * 1.3, y: y + rnd(0.1, 0.9), pull: 1, f: F.SMOKE, fn: 4, s0: 0.7, s1: 0.25, rot: rnd(0, 6), rv: rnd(-1.5, 1.5), c0: P.dark, a: 0.7, life: 0.6, fi: 0.2, fo: 0.7, add: 0, soft: 0.1 }));
      after(0.75, () => { burstFx.shadow({ x, y: y + 0.7, z }, 1.4, P); groundRing(x, y, z, 0.3, Rr * 2.4, P.core, 1, 0.5); });
    } else {
      wall({ x, y, z, h0: 0.8, h1: 0.3, r0a: Rr * 0.3, r0b: Rr * 1.0, r1a: Rr * 0.35, r1b: Rr * 1.05, row: R.WIND, c: P.main, k: 0.8, life: 0.6, fi: 0.05, fo: 0.3, vs: 0, us: 1, rep: 4 });
      smoke(x, y, z, N(16), [0.25, 0.22, 0.2], { r: Rr * 0.8, s0: 0.5, s1: 1.4, a: 0.4, spread: 2.5 });
      sparks({ x, y: y + 0.4, z }, N(24), P.core, 5);
    }
  }

  // Sustained beam from -> to (~0.75 s).
  function beam(from, to, el) {
    const P = pal(el), e = elKey(el), a = v3(from), b = v3(to), life = 0.75, bf = fwd(b, 0.5);
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, len = Math.hypot(dx, dy, dz) || 1;
    // perpendicular basis for helix/wobble
    const ux = -dz / len, uz = dx / len;
    const line = (amp, freq, ph, helix, rad) => (u, k, o) => {
      const w = Math.sin(u * freq + now * 20 + ph) * amp * Math.sin(u * Math.PI);
      let hx = 0, hy = 0, hz = 0;
      if (helix) { const ang = u * len * 3.5 - now * 14 + ph; hx = ux * Math.cos(ang) * rad; hz = uz * Math.cos(ang) * rad; hy = Math.sin(ang) * rad; }
      o.set(a.x + dx * u + ux * w + hx, a.y + dy * u + w * 0.5 + hy, a.z + dz * u + uz * w + hz);
    };
    const wk = (k) => (k < 0.12 ? k / 0.12 : k > 0.75 ? 1 - (k - 0.75) / 0.25 * 0.9 : 1 + Math.sin(now * 40) * 0.08);
    const common = { life, headEnd: 0.1, tailStart: 0.85, fi: 0.02, fo: 0.75, lead: 0, wk };
    if (e === "shadow") ribbon(Object.assign({ fn: line(0.03, 12, 0, false), w: 1.0, c: P.dark, add: 0, a: 0.9, row: R.WISP, rep: 0.6, scroll: 3, glow: 0 }, common));
    ribbon(Object.assign({ fn: line(e === "light" ? 0.0 : 0.04, 14, 1, false), w: e === "light" ? 1.0 : 0.85, c: P.main, k: e === "light" ? 0.8 : 1, row: e === "light" || e === "physical" ? R.BLADE : P.row, mirror: e === "light" || e === "physical" ? 1 : 0, rep: 0.5, scroll: 4 }, common));
    ribbon(Object.assign({ fn: line(0.01, 20, 2, false), w: 0.34, c: e === "shadow" ? P.core : WHITE, k: e === "shadow" ? 1.2 : 2.4, row: R.BLADE, mirror: 1 }, common));
    if (Q.extras && (e === "gale" || e === "tide" || e === "flame" || e === "shadow")) for (let i = 0; i < 2; i++) ribbon(Object.assign({ fn: line(0, 1, i * Math.PI, true, e === "flame" ? 0.22 : 0.3), w: 0.12, c: P.core, k: 0.9, row: R.BLADE, mirror: 1 }, common));
    const startG = over.attach({ f: F.GLOW, s: 0.9, c: P.main, k: 1.2, soft: 0 }), endG = over.attach({ f: F.GLOW, s: 1.3, c: P.main, k: 1.2, soft: 0 });
    const endS = over.attach({ f: F.STAR, s: 1.0, c: P.core, k: 1, soft: 0 });
    Object.assign(startG, a); Object.assign(endG, bf); Object.assign(endS, bf);
    groundGlow(b.x, 0, b.z, 2.2, P.main, 0.45, life);
    O({ x: b.x, y: 0.035, z: b.z, gnd: 1, f: F.CRACK, s0: 1.1, s1: 1.4, rot: rnd(0, 6), c0: P.main, k: 0.7, life: 1.1, fi: 0.05, fo: 0.4 });
    let t = 0;
    stream(life * 0.8, N(40), () => {
      sparks(bf, 1, P.core, 3.5, { c1: P.main });
      const u = Math.random(), q = { x: a.x + dx * u, y: a.y + dy * u, z: a.z + dz * u };
      if (e === "flame") O({ x: q.x, y: q.y, z: q.z, vy: rnd(0.5, 1.4), f: F.FLAME, fn: 4, fps: 14, s0: 0.3, s1: 0.08, c0: P.core, c1: P.deep, k: 1, life: rnd(0.25, 0.4), fi: 0.05, fo: 0.3 });
      else if (e === "tide") O({ x: q.x, y: q.y, z: q.z, vx: rnd(-1, 1), vy: rnd(0.5, 2), vz: rnd(-1, 1), g: -7, f: F.DROP, st: 0.1, s0: 0.08, s1: 0.04, c0: P.core, k: 0.9, life: 0.45, fi: 0, fo: 0.5 });
      else if (e === "light") O({ x: q.x + rnd(-0.2, 0.2), y: q.y + rnd(-0.2, 0.2), z: q.z + rnd(-0.2, 0.2), f: F.STAR, s0: rnd(0.12, 0.22), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: 0.4, fi: 0.1, fo: 0.3 });
      else if (e === "shadow") U({ x: q.x, y: q.y, z: q.z, vy: 0.3, f: F.SMOKE, fn: 4, s0: 0.35, s1: 0.6, rot: rnd(0, 6), c0: P.dark, a: 0.6, life: 0.45, fi: 0.1, fo: 0.4, add: 0 });
      else if (e === "gale") O({ x: q.x, y: q.y, z: q.z, vx: dx / len * 6, vy: rnd(-0.3, 0.3), vz: dz / len * 6, f: F.STREAK, st: 0.1, s0: 0.05, s1: 0.03, c0: P.core, k: 0.9, life: 0.25, fi: 0, fo: 0.4 });
    });
    run((dt) => {
      t += dt; const k = Math.min(1, t / life), w = wk(k);
      startG.s = 0.9 * w; endG.s = (1.3 + Math.sin(t * 50) * 0.12) * w; endS.s = 1.1 * w; endS.rot += dt * 5;
      if (k >= 1) { startG.dead = endG.dead = endS.dead = true; burstFx[e](bf, 0.8, P); return false; }
      return true;
    });
    return new Promise((done) => after(life, done));
  }

  // Expanding ground shock wave. pos = ground point.
  function shockwave(pos, el, radius = 3) {
    const P = pal(el), x = pos.x, y = pos.y || 0, z = pos.z, Rr = radius;
    groundRing(x, y, z, 0.4, Rr * 2.1, P.main, 1.0, 0.5);
    groundRing(x, y, z, 0.3, Rr * 1.6, P.main, 0.6, 0.6, 0.7);
    groundGlow(x, y, z, Rr * 1.4, P.main, 0.35, 0.45);
    wall({ x, y, z, h0: 0.7, h1: 0.12, r0a: 0.4, r0b: Rr, r1a: 0.45, r1b: Rr * 1.04, row: P.row || R.WIND, c: P.main, k: 0.75, life: 0.55, fi: 0.03, fo: 0.35, vs: 0, us: 1.5, rep: 6 });
    const n = N(26);
    for (let i = 0; i < n; i++) { const th = i / n * 6.283; const sp = Rr * 1.6; U({ x: x + Math.cos(th) * 0.3, y: y + 0.12, z: z + Math.sin(th) * 0.3, vx: Math.cos(th) * sp, vy: rnd(0.2, 0.6), vz: Math.sin(th) * sp, drag: 2.5, f: F.SMOKE, fn: 4, s0: 0.35, s1: 0.9, rot: rnd(0, 6), rv: rnd(-1, 1), c0: [0.3, 0.27, 0.24], a: 0.4, life: rnd(0.6, 0.9), fi: 0.05, fo: 0.3, soft: 0.08 }); }
    for (let i = 0; i < N(18); i++) { const th = rnd(0, 6.283), sp = Rr * rnd(1.2, 2); O({ x, y: y + 0.1, z, vx: Math.cos(th) * sp, vy: rnd(1, 3), vz: Math.sin(th) * sp, g: -8, drag: 1, f: F.STREAK, st: 0.08, s0: 0.07, s1: 0.03, c0: P.core, k: 1, life: rnd(0.35, 0.6), fi: 0, fo: 0.4 }); }
  }

  // Heal on a unit. pos = unit ground position.
  function heal(pos) {
    const P = HEAL, x = pos.x, y = pos.y || 0, z = pos.z;
    groundGlow(x, y, z, 1.9, P.main, 0.5, 1.1);
    O({ x, y: y + 0.045, z, gnd: 1, f: F.RING, s0: 0.6, s1: 1.8, sp: 3, c0: P.core, k: 0.7, life: 0.8, fi: 0.05, fo: 0.4 });
    wall({ x, y, z, h0: 1.4, h1: 2.3, r0a: 0.55, r0b: 0.6, r1a: 0.45, r1b: 0.5, row: R.SPARKLE, c: P.main, k: 0.9, life: 1.1, fi: 0.15, fo: 0.5, vs: 0.9, rep: 3 });
    stream(0.75, N(16), () => { const th = rnd(0, 6.283), r = rnd(0.15, 0.55); O({ x: x + Math.cos(th) * r, y: y + rnd(0.3, 1.2), z: z + Math.sin(th) * r, vy: rnd(0.6, 1.1), f: F.PLUS, s0: rnd(0.16, 0.26), s1: 0.1, c0: P.core, c1: P.main, k: 0.8, life: rnd(0.6, 0.9), fi: 0.15, fo: 0.5 }); });
    stream(0.9, N(34), () => O({ orb: 1, cx: x, cy: y, cz: z, th: rnd(0, 6.283), rad: rnd(0.45, 0.7), om: rnd(2.5, 4), vr: -0.2, y: y + rnd(0, 0.4), vy: rnd(1.0, 1.8), f: F.GLOW, st: 0.05, s0: rnd(0.07, 0.12), s1: 0.02, c0: P.core, k: 1.2, life: rnd(0.7, 1.0), fi: 0.1, fo: 0.5 }));
    if (Q.extras) for (let i = 0; i < 2; i++) { const a0 = rnd(0, 6.283); ribbon({ fn: (u, k, o) => { const a = a0 + u * 7 + i * Math.PI, r = 0.6 - u * 0.2; o.set(x + Math.cos(a) * r, y + 0.1 + u * 1.9, z + Math.sin(a) * r); }, w: 0.1, c: P.core, k: 0.8, row: R.BLADE, mirror: 1, life: 0.9, headEnd: 0.5, tailStart: 0.35, delay: i * 0.1 }); }
  }

  // Buff (good=true: golden rise) or debuff (good=false: violet sink). pos = ground position.
  function buff(pos, good = true) {
    const P = good ? GOLD : CURSE, x = pos.x, y = pos.y || 0, z = pos.z;
    groundGlow(x, y, z, 1.6, P.main, 0.4, 0.9);
    for (let i = 0; i < 2; i++) wall({ x, y: good ? y : y + 1.8, y0: good ? y : y + 1.8, y1: good ? y + 1.6 : y + 0.05, z, h0: 0.28, h1: 0.18, r0a: 0.62, r0b: 0.55, r1a: 0.66, r1b: 0.58, row: good ? R.RAYS : R.WISP, c: P.main, k: 1, life: 0.75, fi: 0.15, fo: 0.5, vs: 0, us: good ? 1 : -1, rep: 4, delay: i * 0.2 });
    stream(0.6, N(22), () => { const th = rnd(0, 6.283), r = rnd(0.2, 0.6); O({ x: x + Math.cos(th) * r, y: good ? y + rnd(0.1, 0.8) : y + rnd(1.3, 2.0), z: z + Math.sin(th) * r, vy: good ? rnd(1.8, 2.8) : -rnd(1.5, 2.4), drag: 1.5, f: F.STREAK, st: 0.25, s0: 0.07, s1: 0.04, c0: P.core, k: 1, life: rnd(0.4, 0.6), fi: 0.1, fo: 0.4 }); });
    stream(0.6, N(12), () => { const th = rnd(0, 6.283), r = rnd(0.2, 0.6); O({ x: x + Math.cos(th) * r, y: y + rnd(0.4, 1.6), z: z + Math.sin(th) * r, vy: good ? 0.6 : -0.5, f: good ? F.STAR : F.GLOW, s0: rnd(0.12, 0.2), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.5, 0.8), fi: 0.15, fo: 0.4 }); });
    if (!good) stream(0.5, N(6), () => U({ x: x + rnd(-0.4, 0.4), y: y + rnd(0.8, 1.6), z: z + rnd(-0.4, 0.4), vy: -0.6, f: F.SMOKE, fn: 4, s0: 0.3, s1: 0.6, rot: rnd(0, 6), c0: PAL.shadow.dark, a: 0.5, life: 0.7, fi: 0.15, fo: 0.4, add: 0 }));
  }

  // Shield bubble. pos = unit ground position.
  function shield(pos) {
    const P = AQUA, x = pos.x, y = pos.y || 0, z = pos.z;
    dome({ x, y: y + 0.85, z, r0: 0.55, r1: 1.05, c: P.main, k: 1, life: 1.2, fi: 0.08, fo: 0.6, row: R.HEX, scroll: 0.6, pow: 2.4 });
    flashAt({ x, y: y + 0.9, z }, 1.5, P.main, 0.6, 0.2);
    O({ x, y: y + 0.045, z, gnd: 1, f: F.RUNE, s0: 1.3, s1: 2.0, sp: 3, rot: rnd(0, 6), rv: 1, c0: P.main, k: 0.7, life: 1.0, fi: 0.1, fo: 0.5 });
    stream(0.8, N(20), () => { const th = rnd(0, 6.283), ph = rnd(0.1, 1.4); O({ orb: 1, cx: x, cy: y, cz: z, th, rad: Math.cos(ph) * 1.0, om: 1.5, y: y + 0.85 + Math.sin(ph) * 1.0, f: F.STAR, s0: rnd(0.1, 0.18), s1: 0.02, rot: rnd(0, 1), c0: P.core, k: 1, life: rnd(0.4, 0.7), fi: 0.2, fo: 0.4 }); });
  }

  // Damage-over-time tick. kind: "poison" | "burn" | "bleed" | "freeze" | "stun" | "curse". pos = ground.
  function debuffTick(pos, kind = "poison") {
    const g0 = fwd({ x: pos.x, y: pos.y || 0, z: pos.z }, 0.45), x = g0.x, y = g0.y, z = g0.z, cy = y + 1.0;
    // readability anchor: a coloured pulse + small ring on every tick
    const TC = { poison: [0.6, 2.6, 0.35], burn: PAL.flame.main, bleed: [2.6, 0.12, 0.1], freeze: AQUA.main, stun: GOLD.main, curse: CURSE.main }[kind] || [0.6, 2.6, 0.35];
    O({ x, y: cy, z, f: F.GLOW, s0: 0.5, s1: 0.9, sp: 2, c0: TC, k: 0.45, life: 0.35, fi: 0.1, fo: 0.3, soft: 0 });
    O({ x, y: cy, z, f: F.RING, s0: 0.35, s1: 1.0, sp: 3, c0: TC, k: 0.6, life: 0.4, fi: 0.05, fo: 0.3, soft: 0 });
    if (kind === "burn") { const P = PAL.flame; for (let i = 0; i < N(8); i++) O({ x: x + rnd(-0.35, 0.35), y: y + rnd(0.3, 1.3), z: z + rnd(-0.3, 0.3), vy: rnd(0.6, 1.2), f: F.FLAME, fn: 4, fps: 12, s0: rnd(0.32, 0.45), s1: 0.1, c0: P.core, c1: P.deep, k: 1, life: rnd(0.4, 0.6), fi: 0.1, fo: 0.4, delay: rnd(0, 0.15) }); sparks({ x, y: cy, z }, N(6), P.core, 1.5, { g: 2, up: 1 }); smoke(x, cy, z, N(3), P.dark, { a: 0.4 }); }
    else if (kind === "bleed") { const c = [2.6, 0.12, 0.1]; flashAt({ x, y: cy, z }, 0.6, c, 0.6, 0.14); for (let i = 0; i < N(16); i++) { const th = rnd(0, 6.283); U({ x, y: cy + rnd(-0.2, 0.3), z, vx: Math.cos(th) * rnd(0.6, 1.4), vy: rnd(0.5, 1.8), vz: Math.sin(th) * rnd(0.6, 1.4), g: -8, f: F.DROP, st: 0.12, s0: rnd(0.1, 0.15), s1: 0.06, c0: [0.7, 0.02, 0.02], life: rnd(0.45, 0.7), fi: 0, fo: 0.7, soft: 0.08 }); } groundGlow(x, y, z, 0.8, c, 0.3, 0.6); }
    else if (kind === "freeze") { const P = AQUA; for (let i = 0; i < N(14); i++) { const th = rnd(0, 6.283), sp = rnd(0.6, 1.4); O({ x, y: cy, z, vx: Math.cos(th) * sp, vy: rnd(-0.3, 1.2), vz: Math.sin(th) * sp, drag: 3, f: F.SHARD, st: 0.05, s0: rnd(0.18, 0.28), s1: 0.08, c0: P.core, k: 1.1, life: rnd(0.5, 0.75), fi: 0, fo: 0.6 }); } smoke(x, cy - 0.4, z, N(4), [0.6, 0.75, 0.9], { a: 0.35, s0: 0.3, s1: 0.8 }); }
    else if (kind === "stun") { const P = GOLD; for (let i = 0; i < 4; i++) O({ orb: 1, cx: x, cy: y + 2.05, cz: z, th: i / 4 * 6.283, rad: 0.32, om: 6, y: y + 2.05, f: F.STAR, s0: 0.3, s1: 0.22, rot: 0, rv: 3, c0: P.core, k: 1, life: 0.9, fi: 0.1, fo: 0.7 }); }
    else if (kind === "curse") { const P = PAL.shadow; for (let i = 0; i < N(6); i++) U({ x: x + rnd(-0.3, 0.3), y: y + rnd(0.4, 1.4), z: z + rnd(-0.3, 0.3), vy: rnd(0.3, 0.7), f: F.SMOKE, fn: 4, s0: 0.3, s1: 0.6, rot: rnd(0, 6), rv: rnd(-2, 2), c0: P.dark, a: 0.6, life: 0.6, fi: 0.1, fo: 0.4, add: 0 }); for (let i = 0; i < N(8); i++) O({ x: x + rnd(-0.4, 0.4), y: y + rnd(0.4, 1.6), z: z + rnd(-0.4, 0.4), vy: 0.5, f: F.STREAK, st: 0.2, s0: 0.08, s1: 0.03, c0: P.core, k: 1, life: 0.5, fi: 0.2, fo: 0.4 }); }
    else { // poison: rising bubbles + sickly smoke
      const c = [0.6, 2.6, 0.35];
      for (let i = 0; i < N(10); i++) O({ x: x + rnd(-0.35, 0.35), y: y + rnd(0.3, 1.2), z: z + rnd(-0.3, 0.3), vx: rnd(-0.1, 0.1), vy: rnd(0.5, 1.0), f: F.RING, s0: rnd(0.12, 0.2), s1: rnd(0.24, 0.34), c0: c, k: 0.9, life: rnd(0.5, 0.8), fi: 0.1, fo: 0.7, delay: rnd(0, 0.2) });
      for (let i = 0; i < N(4); i++) U({ x: x + rnd(-0.3, 0.3), y: y + rnd(0.4, 1.2), z: z + rnd(-0.3, 0.3), vy: 0.3, f: F.SMOKE, fn: 4, s0: 0.3, s1: 0.7, rot: rnd(0, 6), c0: [0.06, 0.16, 0.03], a: 0.55, life: 0.7, fi: 0.1, fo: 0.4 });
      flashAt({ x, y: cy, z }, 0.7, c, 0.5, 0.16);
    }
  }

  // Unit dissolves into ash and element motes. pos = unit ground position.
  function deathFade(pos, el) {
    const P = pal(el), x = pos.x, y = pos.y || 0, z = pos.z;
    groundGlow(x, y, z, 1.8, P.main, 0.35, 1.6);
    O({ x, y: y + 0.045, z, gnd: 1, f: F.RING, s0: 0.5, s1: 1.9, sp: 2, c0: P.core, k: 0.5, life: 1.2, fi: 0.05, fo: 0.3 });
    wall({ x, y, z, h0: 1.6, h1: 2.6, r0a: 0.45, r0b: 0.3, r1a: 0.35, r1b: 0.15, row: R.SPARKLE, c: P.main, k: 0.35, life: 1.5, fi: 0.2, fo: 0.4, vs: 1.2, rep: 3 });
    stream(1.2, N(60), (k) => { const th = rnd(0, 6.283), r = rnd(0, 0.35); O({ x: x + Math.cos(th) * r, y: y + rnd(0.1, 1.8) * (1 - k * 0.6), z: z + Math.sin(th) * r, vx: rnd(-0.15, 0.15), vy: rnd(0.6, 1.4), vz: rnd(-0.15, 0.15), drag: 0.5, f: Math.random() < 0.3 ? F.STAR : F.GLOW, s0: rnd(0.06, 0.13), s1: 0.01, rot: rnd(0, 1), c0: P.core, c1: P.main, k: 1, life: rnd(0.9, 1.5), fi: 0.1, fo: 0.4 }); });
    stream(1.0, N(16), (k) => U({ x: x + rnd(-0.3, 0.3), y: y + rnd(0.2, 1.5) * (1 - k * 0.5), z: z + rnd(-0.3, 0.3), vx: rnd(-0.2, 0.2), vy: rnd(0.4, 0.8), f: F.SMOKE, fn: 4, s0: 0.35, s1: 0.9, rot: rnd(0, 6), rv: rnd(-1, 1), c0: [0.08, 0.075, 0.08], a: 0.55, life: rnd(0.9, 1.3), fi: 0.1, fo: 0.4 }));
    stream(1.0, N(14), () => U({ x: x + rnd(-0.3, 0.3), y: y + rnd(0.3, 1.6), z: z + rnd(-0.3, 0.3), vx: rnd(-0.3, 0.3), vy: rnd(0.5, 1.2), f: F.SHARD, s0: rnd(0.05, 0.09), rot: rnd(0, 6), rv: rnd(-6, 6), c0: [0.12, 0.11, 0.12], life: rnd(0.8, 1.3), fi: 0.05, fo: 0.5 }));
  }

  // Titan ground slam. pos = ground point of impact.
  function titanSlam(pos, el) {
    const P = pal(el), e = elKey(el), x = pos.x, y = pos.y || 0, z = pos.z, Rr = 4.2;
    flashAt({ x, y: y + 0.6, z }, 3.2, P.main, 1.2, 0.24);
    O({ x, y: y + 0.035, z, gnd: 1, f: F.CRACK, s0: 4.2, s1: 5, sp: 3, rot: rnd(0, 6), c0: P.main, k: 0.6, life: 2.0, fi: 0, fo: 0.35 });
    O({ x, y: y + 0.03, z, gnd: 1, f: F.CRACK, s0: 2.5, s1: 2.8, rot: rnd(0, 6), c0: P.main, k: 0.5, life: 1.4, fi: 0, fo: 0.3 });
    groundGlow(x, y, z, 5, P.main, 0.35, 1.0);
    groundRing(x, y, z, 0.6, Rr * 2.3, P.core, 0.8, 0.5);
    after(0.08, () => groundRing(x, y, z, 0.5, Rr * 2.0, P.main, 1, 0.7));
    wall({ x, y, z, h0: 1.6, h1: 0.15, r0a: 0.6, r0b: Rr, r1a: 0.75, r1b: Rr * 1.05, row: P.row || R.WIND, c: P.main, k: 0.5, life: 0.7, fi: 0.02, fo: 0.3, vs: 0.5, us: 1, rep: 8 });
    const n = N(40);
    for (let i = 0; i < n; i++) { const th = i / n * 6.283 + rnd(-0.05, 0.05), sp = rnd(4, 7); U({ x: x + Math.cos(th) * 0.6, y: y + 0.15, z: z + Math.sin(th) * 0.6, vx: Math.cos(th) * sp, vy: rnd(0.3, 1.2), vz: Math.sin(th) * sp, drag: 2.2, f: F.SMOKE, fn: 4, s0: 0.6, s1: 1.6, rot: rnd(0, 6), rv: rnd(-1, 1), c0: [0.16, 0.14, 0.12], a: 0.38, life: rnd(0.9, 1.3), fi: 0.03, fo: 0.3, soft: 0.1 }); }
    for (let i = 0; i < N(24); i++) { const th = rnd(0, 6.283), sp = rnd(2, 5); U({ x, y: y + 0.2, z, vx: Math.cos(th) * sp, vy: rnd(3, 7), vz: Math.sin(th) * sp, g: -14, f: F.SHARD, s0: rnd(0.12, 0.26), rot: rnd(0, 6), rv: rnd(-12, 12), c0: [0.16, 0.13, 0.11], life: rnd(0.8, 1.2), fi: 0, fo: 0.8, soft: 0.05 }); }
    sparks({ x, y: y + 0.4, z }, N(36), P.core, 8, { up: 2, g: -7, size: 0.1 });
    // element eruptions around the ring
    const m = Q.extras ? 6 : 3;
    for (let i = 0; i < m; i++) after(0.08 + i * 0.05, () => { const th = i / m * 6.283 + rnd(-0.3, 0.3), r = rnd(1.6, 2.6); burstFx[e]({ x: x + Math.cos(th) * r, y: y + 0.4, z: z + Math.sin(th) * r }, 0.85, P); });
  }

  // Short fullscreen crit flash with radial speed lines.
  function critFlash(color) {
    flashT = 0; flashDur = 0.22; flash.visible = true;
    flashMat.uniforms.uSeed.value = Math.random() * 100;
    if (color && PAL[color]) { const c = PAL[color].core; flashMat.uniforms.uColor.value.set(c[0] * 0.8, c[1] * 0.8, c[2] * 0.8); } else flashMat.uniforms.uColor.value.set(3, 2.8, 2.5);
  }

  // ---------------------------------------------------------------------------------------
  // Per-frame
  // ---------------------------------------------------------------------------------------
  function updateWalls(dt) {
    const it = walls.items, A = walls.A, a = A.iA.array, b = A.iB.array, c = A.iC.array, d = A.iD.array;
    let w = 0;
    for (let i = it.length - 1; i >= 0; i--) { const o = it[i]; o.age += dt; if (o.age >= o.life) it.splice(i, 1); }
    for (const o of it) {
      if (o.age < 0) continue;
      const k = o.age / o.life, ke = easeOut(k), q = w * 4;
      a[q] = o.x; a[q + 1] = o.y0 != null ? lerp(o.y0, o.y1, ke) : o.y; a[q + 2] = o.z; a[q + 3] = lerp(o.h0, o.h1, ke);
      b[q] = lerp(o.r0a, o.r0b, ke); b[q + 1] = lerp(o.r1a, o.r1b, ke); b[q + 2] = o.twist; b[q + 3] = o.row;
      const al = o.a * fadeAlpha(k, o.fi, o.fo);
      c[q] = o.c[0] * o.k; c[q + 1] = o.c[1] * o.k; c[q + 2] = o.c[2] * o.k; c[q + 3] = al;
      d[q] = o.us * o.age; d[q + 1] = o.vs * o.age; d[q + 2] = o.rep; d[q + 3] = o.add;
      w++;
    }
    walls.finish(w);
  }
  function updateDomes(dt) {
    const it = domes.items, A = domes.A, a = A.iA.array, c = A.iC.array, d = A.iD.array;
    let w = 0;
    for (let i = it.length - 1; i >= 0; i--) { const o = it[i]; o.age += dt; if (o.age >= o.life) it.splice(i, 1); }
    for (const o of it) {
      if (o.age < 0) continue;
      const k = o.age / o.life, q = w * 4;
      const pop = k < 0.2 ? easeOut(k / 0.2) * 1.06 : 1.06 - 0.06 * Math.min(1, (k - 0.2) / 0.15);
      a[q] = o.x; a[q + 1] = o.y; a[q + 2] = o.z; a[q + 3] = lerp(o.r0, o.r1, Math.min(1, pop));
      const al = o.a * fadeAlpha(k, o.fi, o.fo);
      c[q] = o.c[0] * o.k; c[q + 1] = o.c[1] * o.k; c[q + 2] = o.c[2] * o.k; c[q + 3] = al;
      d[q] = o.row; d[q + 1] = o.scroll * o.age; d[q + 2] = o.pow; d[q + 3] = o.add;
      w++;
    }
    domes.finish(w);
  }

  function update(dt) {
    if (disposed) return;
    dt = Math.min(0.1, Math.max(0, dt)) * Math.max(0, speed() || 1);
    now += dt;
    camBasis();
    if (tasks.length) { const cur = tasks; tasks = []; const keep = cur.filter((fn) => fn(dt)); tasks = keep.concat(tasks); }
    under.update(dt, now);
    over.update(dt, now);
    ribbons.update(dt, now, camera);
    updateWalls(dt);
    updateDomes(dt);
    if (flash.visible) {
      flashT += dt;
      const k = flashT / flashDur;
      flashMat.uniforms.uA.value = k < 0.15 ? k / 0.15 : Math.max(0, 1 - (k - 0.15) / 0.85) ** 1.5;
      flashMat.uniforms.uAspect.value = camera.aspect || 1;
      if (k >= 1) flash.visible = false;
    }
  }

  function clear() { tasks = []; under.clear(); over.clear(); ribbons.clear(); walls.clear(); domes.clear(); flash.visible = false; }

  function dispose() {
    if (disposed) return;
    disposed = true; clear();
    root.removeFromParent();
    under.dispose(); over.dispose(); ribbons.dispose(); walls.dispose(); domes.dispose();
    flashGeo.dispose(); flashMat.dispose();
    releaseTextures();
  }

  function stats() {
    const pools = [under.mesh, walls.mesh, domes.mesh, ribbons.mesh, over.mesh, flash];
    return {
      tier: tierName, drawCalls: pools.filter((m) => m.visible).length, maxDrawCalls: pools.length,
      sprites: { over: over.n + over.attached.length, under: under.n + under.attached.length, overCap: Q.over, underCap: Q.under, peakOver: over.peak, peakUnder: under.peak, dropped: over.dropped + under.dropped },
      ribbons: { active: ribbons.slots.filter((s) => s.on).length, cap: Q.ribbons, seg: Q.seg, peak: ribbons.peak, dropped: ribbons.dropped },
      walls: { active: walls.items.length, cap: Q.walls, peak: walls.peak }, domes: { active: domes.items.length, cap: Q.domes, peak: domes.peak },
      tasks: tasks.length, textureBytes: tex.bytes,
    };
  }

  return {
    update, dispose, clear, stats, get quality() { return tierName; }, get time() { return now; }, palette: (el) => pal(el).hex,
    castCircle, charge, projectile, slash, impact, aoe, beam, shockwave, heal, buff, shield, debuffTick, deathFade, titanSlam, critFlash,
  };
}
