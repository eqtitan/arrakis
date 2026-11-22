#!/usr/bin/env node
// Hero contact sheets: every hero in HEROES, rendered in the hero-detail live viewer
// (W3D.showcase) from the front, 3/4 and back, at three gear levels.
//
//   node tools/qa/hero-sheet.cjs [--only=id1,id2] [--per-sheet=8] [--no-build]
//
// Writes <OUT>/hero-sheet-N.png, <OUT>/hero-sheet.json and raw shots in <OUT>/shots/.
// OUT defaults to the session scratchpad qa/ dir (override with QA_OUT).
"use strict";
const fs = require("fs");
const path = require("path");
const Q = require("./lib.cjs");

const args = Object.fromEntries(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v === undefined ? true : v]; }));
if (args["no-build"]) process.env.QA_NO_BUILD = "1";
const ONLY = args.only ? String(args.only).split(",") : null;
const PER_SHEET = +(args["per-sheet"] || 8);

const LEVELS = [
  { key: "none", label: "No gear", r: 0, set: null },
  { key: "r3-bulwark", label: "Superior (3) Bulwark", r: 3, set: "bulwark" },
  { key: "r5-fury", label: "Mythic (5) Fury", r: 5, set: "fury" },
];
// Showcase yaw in radians. The viewer starts every new hero at -0.35; drag = 0.012 rad/px.
const VIEWS = [{ key: "front", yaw: 0 }, { key: "3/4", yaw: -0.8 }, { key: "back", yaw: Math.PI }];
const RAD_PER_PX = 0.012, START_YAW = -0.35;

const CSS = `
  .show-sprite.has3d { width: 240px !important; height: 360px !important; margin: 0 !important; background: #4b4660 !important; }
  .showcase { background: #2a2634 !important; }
  .show3d { cursor: default; }
`;

const waitFrames = Q.waitFrames;

async function drag(page, box, dx) {
  const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
  while (Math.abs(dx) >= 6) {
    const step = Math.max(-110, Math.min(110, dx));
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + step, cy, { steps: 1 });
    await Q.sleep(140); // > 80 ms still before release => no fling spin
    await page.mouse.up();
    dx -= step;
  }
  return dx; // leftover (< 6 px, ignored)
}

(async () => {
  const build = await Q.ensureBuild();
  Q.log("three3d.js:", build);
  const stop = await Q.ensureServer();
  const { browser, page } = await Q.launch({ initScript: Q.GL_COUNTER });
  const summary = { build, gearMode: "", heroes: [] };
  try {
    await Q.bootGame(page);
    await page.addStyleTag({ content: CSS });
    const info = await page.evaluate(() => {
      const src = W3D.showcase.toString();
      const m = src.match(/^[^(]*\(([^)]*)\)/);
      const params = m ? m[1].split(",").filter((s) => s.trim()).length : W3D.showcase.length;
      return { params, heroes: HEROES.map((h) => ({ id: h.id, name: h.name, rarity: h.rarity, role: h.role, el: h.el })) };
    });
    const directGear = info.params >= 4;
    summary.gearMode = directGear
      ? "W3D.showcase(host,id,el,gear) called directly + hero gear equipped in G"
      : "W3D.showcase has no gear param: gear only equipped in G (shows only if ui.js/three3d wire it)";
    Q.log("gear mode:", summary.gearMode);
    const heroes = info.heroes.filter((h) => !ONLY || ONLY.includes(h.id));
    const shotDir = path.join(Q.OUT, "shots");
    fs.mkdirSync(shotDir, { recursive: true });

    for (const h of heroes) {
      const rec = { ...h, levels: {} };
      for (const L of LEVELS) {
        // Equip (or strip) gear on this hero, open its detail page, force a fresh viewer.
        await page.evaluate(([id, r, set, direct]) => {
          let hero = G.heroes.find((x) => x.id === id) || addHero(id);
          hero.gear = {};
          G.gear = G.gear.filter((g) => G.heroes.some((o) => o.gear[g.slot] === g.uid));
          const gear3d = {};
          if (r) for (const slot of GEAR_SLOT_KEYS) {
            const g = makeGear(r, slot); g.set = set; equip(hero, g);
            gear3d[slot] = { r, s: set, rarity: r, set, slot };
          }
          save();
          W3D.showcaseStop();
          UI.heroUid = hero.uid; UI.screen = "hero"; render();
          if (direct) {
            const host = document.querySelector(".show-sprite[data-hero]");
            W3D.showcaseStop();
            W3D.showcase(host, id, host.dataset.el, r ? gear3d : null);
          }
        }, [h.id, L.r, L.set, directGear]);
        await page.waitForSelector(".show-sprite.has3d canvas.show3d", { timeout: 30000 });
        await waitFrames(page, "show3d", 4);
        // Per-hero cost in the viewer: draws/triangles per frame minus the aura disc (1 call, 40 tris).
        const cost = await page.evaluate(() => {
          const fr = window.__qa.frames.filter((f) => f.by.show3d).slice(-4).map((f) => f.by.show3d);
          const med = (a) => a.sort((x, y) => x - y)[Math.floor(a.length / 2)];
          return { calls: med(fr.map((f) => f.calls)) - 1, tris: med(fr.map((f) => f.tris)) - 40 };
        });
        const box = await page.locator("canvas.show3d").boundingBox();
        let yaw = START_YAW;
        const shots = [];
        for (const V of VIEWS) {
          const want = Math.round((V.yaw - yaw) / RAD_PER_PX);
          const left = await drag(page, box, want);
          yaw += (want - left) * RAD_PER_PX;
          await waitFrames(page, "show3d", 3);
          const file = path.join(shotDir, `${h.id}_${L.key}_${V.key.replace("/", "-")}.png`);
          await page.locator(".show-sprite.has3d").screenshot({ path: file });
          shots.push(file);
        }
        rec.levels[L.key] = { ...cost, shots };
        Q.log(`${h.id.padEnd(10)} ${L.key.padEnd(11)} calls=${cost.calls} tris=${cost.tris}`);
      }
      summary.heroes.push(rec);
    }
  } finally {
    await browser.close();
    stop();
  }

  // Did gear change anything? (draw-call/triangle delta between none and r5)
  for (const r of summary.heroes) {
    const a = r.levels.none, b = r.levels["r5-fury"];
    r.gearDelta = b ? { calls: b.calls - a.calls, tris: b.tris - a.tris } : null;
  }
  fs.writeFileSync(path.join(Q.OUT, "hero-sheet.json"), JSON.stringify(summary, null, 2));
  const rows = summary.heroes.map((r) => ({
    label: r.name,
    sub: `${r.id} · ${r.rarity} · ${r.role} · ${r.el}\n` +
      LEVELS.map((L) => `${L.key}: ${r.levels[L.key].calls} calls, ${(r.levels[L.key].tris / 1000).toFixed(1)}k tris`).join("\n"),
    cells: LEVELS.flatMap((L) => r.levels[L.key].shots),
  }));
  const out = Q.runPython("contact-sheet.py", {
    out: path.join(Q.OUT, "hero-sheet"), per_sheet: PER_SHEET, cell: [200, 300],
    title: `Sigilbound hero QA · ${new Date().toISOString().slice(0, 16)} · ${summary.gearMode}`,
    groups: LEVELS.map((L) => L.label), views: VIEWS.map((V) => V.key), rows,
  });
  console.log(out.trim());
  console.log(path.join(Q.OUT, "hero-sheet.json"));
})().catch((e) => { console.error(e); process.exit(1); });
