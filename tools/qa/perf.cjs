#!/usr/bin/env node
// 3D performance probe: a real battle (5 allies vs the stage's enemies) plus a per-hero
// cost sweep in the hero viewer. Counts come from WebGL draw calls (see GL_COUNTER in lib.cjs),
// so they include the shadow-map pass.
//
//   node tools/qa/perf.cjs [--stage=0|N|auto] [--team=ysolde,pell,odo,brannoc,mira] [--gear=r5|r3|none]
//                          [--secs=3] [--no-sweep] [--no-build]
//
// Prints JSON to stdout and writes <OUT>/perf.json.
"use strict";
const fs = require("fs");
const path = require("path");
const Q = require("./lib.cjs");

const args = Object.fromEntries(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v === undefined ? true : v]; }));
if (args["no-build"]) process.env.QA_NO_BUILD = "1";
const STAGE = args.stage === "auto" ? "auto" : +(args.stage || 0);
const TEAM = String(args.team || "ysolde,pell,odo,brannoc,mira").split(",");
const GEARS = { none: [0, null], r3: [3, "bulwark"], r5: [5, "fury"] };
const GEAR = String(args.gear || "r5");
const SECS = +(args.secs || 3);
const BUDGET = { callsPerHero: 10, trisPerHero: 25000 };

const stats = (a) => {
  if (!a.length) return null;
  const s = [...a].sort((x, y) => x - y), q = (p) => s[Math.min(s.length - 1, Math.floor(p * s.length))];
  return { median: q(0.5), p95: q(0.95), min: s[0], max: s[s.length - 1], mean: +(a.reduce((x, y) => x + y, 0) / a.length).toFixed(2) };
};

// Sample the window.__qa counters for `secs` seconds, for one canvas class.
async function sample(page, cls, secs) {
  const t0 = await page.evaluate(() => ({ raf: window.__qa.rafFrames, now: performance.now() }));
  await Q.sleep(secs * 1000);
  return page.evaluate(([cls, t0]) => {
    const S = window.__qa, now = performance.now();
    const fr = S.frames.filter((f) => f.ts >= t0.now && f.by[cls]).map((f) => f.by[cls]);
    const cb = S.cbs.filter((c) => c.ts >= t0.now && c.canvas === cls).map((c) => c.ms);
    return { wallMs: now - t0.now, rafFrames: S.rafFrames - t0.raf, frames: fr, cbMs: cb };
  }, [cls, t0]);
}

(async () => {
  const build = await Q.ensureBuild();
  Q.log("three3d.js:", build);
  const stop = await Q.ensureServer();
  const { browser, page } = await Q.launch({ width: 420, height: 860, dpr: 2, initScript: Q.GL_COUNTER });
  const report = {
    when: new Date().toISOString(), build, note: "Headless Chromium + SwiftShader (CPU rasteriser): FPS/frame times are far slower than a phone GPU; use calls/triangles as the portable numbers.",
    viewport: "420x860 CSS @2x", budget: BUDGET,
  };
  try {
    await Q.bootGame(page);
    // ---- per-hero sweep in the hero viewer (no ground, no shadows: hero + 1 aura disc) ----
    if (!args["no-sweep"]) {
      report.perHero = [];
      const ids = await page.evaluate(() => HEROES.map((h) => h.id));
      for (const id of ids) {
        const row = { id };
        for (const [gk, [r, set]] of [["none", GEARS.none], ["r5", GEARS.r5]]) {
          await page.evaluate(([id, r, set]) => {
            const gear = {};
            if (r) for (const slot of GEAR_SLOT_KEYS) gear[slot] = { r, s: set, rarity: r, set, slot };
            let host = document.getElementById("qa-host");
            if (!host) {
              host = document.createElement("div"); host.id = "qa-host";
              host.style.cssText = "position:fixed;left:0;top:0;width:140px;height:200px;z-index:9999";
              document.body.appendChild(host);
            }
            W3D.showcaseStop();
            return W3D.showcase(host, id, HERO[id].el, r ? gear : null);
          }, [id, r, set]).then((ok) => { if (!ok) Q.log("showcase() returned false for", id); });
          await Q.waitFrames(page, "show3d", 3);
          const c = await page.evaluate(() => {
            const fr = window.__qa.frames.filter((f) => f.by.show3d).slice(-3).map((f) => f.by.show3d);
            const med = (a) => a.sort((x, y) => x - y)[1];
            return { calls: med(fr.map((f) => f.calls)) - 1, tris: med(fr.map((f) => f.tris)) - 40 };
          });
          row[gk] = c;
        }
        row.overBudget = ["none", "r5"].filter((k) => row[k].calls > BUDGET.callsPerHero || row[k].tris > BUDGET.trisPerHero);
        report.perHero.push(row);
        Q.log(`${id.padEnd(10)} none ${row.none.calls}c/${row.none.tris}t   r5 ${row.r5.calls}c/${row.r5.tris}t`);
      }
      await page.evaluate(() => { W3D.showcaseStop(); const h = document.getElementById("qa-host"); if (h) h.remove(); });
      const pc = (k, f) => stats(report.perHero.map((r) => r[k][f]));
      report.perHeroSummary = { none: { calls: pc("none", "calls"), tris: pc("none", "tris") }, r5: { calls: pc("r5", "calls"), tris: pc("r5", "tris") },
        overBudget: report.perHero.filter((r) => r.overBudget.length).map((r) => r.id) };
    }

    // ---- battle ----
    const setup = await page.evaluate(([team, r, set, stageArg]) => {
      let stage = stageArg;
      const heroes = team.map((id) => G.heroes.find((h) => h.id === id) || addHero(id));
      for (const h of heroes) {
        h.gear = {};
        if (r) for (const slot of GEAR_SLOT_KEYS) { const g = makeGear(r, slot); g.set = set; equip(h, g); }
      }
      G.team = heroes.map((h) => h.uid);
      save();
      // "auto": first stage whose opening wave has >= 5 enemies (else the largest), for a 5v5.
      if (stage === "auto") {
        let best = 0, bestN = 0;
        for (let i = 0; i < TOTAL_STAGES; i++) { const n = stageWaves(i)[0].length; if (n > bestN) { best = i; bestN = n; } if (n >= 5) break; }
        stage = best;
      }
      startBattle({ mode: "stage", idx: stage });
      return { team: heroes.map((h) => h.id) };
    }, [TEAM, ...GEARS[GEAR], STAGE]);
    await page.waitForSelector(".w3d-canvas", { timeout: 60000 });
    await page.waitForFunction(() => (window.__qa.n["w3d-canvas"] || 0) > 10, null, { timeout: 60000 });
    await Q.sleep(1500); // let the enemies drop in and shaders compile
    const units = await page.evaluate(() => ({ allies: B.battle.allies.length, enemies: B.battle.enemies.length,
      enemyIds: B.battle.enemies.map((u) => u.template.id), stage: B.idx, canvas: [document.querySelector(".w3d-canvas").width, document.querySelector(".w3d-canvas").height] }));
    const s = await sample(page, "w3d-canvas", SECS);
    // Baseline: same scene with every unit removed (public W3D.removeSide), to isolate unit cost.
    await page.evaluate(() => { W3D.removeSide("A"); W3D.removeSide("B"); });
    await Q.sleep(500);
    const base = await sample(page, "w3d-canvas", 1.5);
    const calls = stats(s.frames.map((f) => f.calls)), tris = stats(s.frames.map((f) => f.tris));
    const bCalls = stats(base.frames.map((f) => f.calls)), bTris = stats(base.frames.map((f) => f.tris));
    const n = units.allies + units.enemies;
    report.battle = {
      ...setup, gear: GEAR, ...units,
      perFrame: { calls, triangles: tris },
      sceneBaseline: { calls: bCalls && bCalls.median, triangles: bTris && bTris.median },
      perUnitInBattle: bCalls ? {
        calls: +((calls.median - bCalls.median) / n).toFixed(1), triangles: Math.round((tris.median - bTris.median) / n),
        note: "includes the shadow-map pass (each caster drawn twice) and battle FX; hero-viewer numbers above are the single-pass cost",
      } : null,
      fps: +(s.rafFrames / (s.wallMs / 1000)).toFixed(1),
      w3dFramesPerSec: +(s.frames.length / (s.wallMs / 1000)).toFixed(1),
      w3dLoopCpuMs: stats(s.cbMs.map((x) => +x.toFixed(2))),
      sampleSecs: +(s.wallMs / 1000).toFixed(2),
    };
  } finally {
    await browser.close();
    stop();
  }
  const json = JSON.stringify(report, null, 2);
  fs.writeFileSync(path.join(Q.OUT, "perf.json"), json);
  console.log(json);
})().catch((e) => { console.error(e); process.exit(1); });
