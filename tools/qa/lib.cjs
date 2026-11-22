// Shared helpers for the Sigilbound QA harness (hero-sheet.cjs, perf.cjs).
// Starts/reuses a static server for public/game, rebuilds the 3D bundle when stale,
// launches headless Chromium with SwiftShader WebGL and boots a fresh game.
"use strict";
const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const http = require("http");

const ROOT = path.resolve(__dirname, "..", "..");
const PORT = +(process.env.QA_PORT || 8792);
const BASE = `http://127.0.0.1:${PORT}/`;
const OUT = process.env.QA_OUT ||
  "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/qa";
fs.mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.error("[qa]", ...a);

function ping() {
  return new Promise((res) => {
    const req = http.get(BASE + "index.html", (r) => { r.resume(); res(r.statusCode === 200); });
    req.on("error", () => res(false));
    req.setTimeout(1500, () => { req.destroy(); res(false); });
  });
}

// Reuse a server already on PORT, else start `python3 -m http.server`. Returns a stop() fn.
async function ensureServer() {
  if (await ping()) { log(`reusing server on :${PORT}`); return () => {}; }
  const p = spawn("python3", ["-m", "http.server", String(PORT), "-d", path.join(ROOT, "public/game"), "--bind", "127.0.0.1"],
    { stdio: "ignore", detached: false });
  for (let i = 0; i < 50; i++) { if (await ping()) break; await sleep(200); }
  if (!(await ping())) throw new Error("static server did not come up on :" + PORT);
  log(`started server on :${PORT} (pid ${p.pid})`);
  return () => { try { p.kill(); } catch (e) {} };
}

// Rebuild public/game/three3d.js if game3d/three3d.mjs is newer. Another agent may be
// mid-edit, so retry a failing build up to 5 times, a minute apart.
async function ensureBuild({ tries = 5, wait = 60000 } = {}) {
  if (process.env.QA_NO_BUILD) return "skipped (QA_NO_BUILD)";
  const src = path.join(ROOT, "game3d/three3d.mjs"), out = path.join(ROOT, "public/game/three3d.js");
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) return "up to date";
  for (let i = 1; i <= tries; i++) {
    try {
      execSync("npm run -s build:game3d", { cwd: ROOT, stdio: ["ignore", "ignore", "pipe"] });
      return `rebuilt (try ${i})`;
    } catch (e) {
      log(`build failed (try ${i}/${tries}): ${String(e.stderr || e.message).split("\n").slice(0, 4).join(" | ")}`);
      if (i < tries) await sleep(wait);
    }
  }
  throw new Error("build:game3d kept failing");
}

async function launch({ width = 420, height = 900, dpr = 2, initScript } = {}) {
  const { chromium } = require("playwright");
  const browser = await chromium.launch({
    headless: true,
    args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
  });
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: dpr, serviceWorkers: "block" });
  if (initScript) await ctx.addInitScript(initScript);
  const page = await ctx.newPage();
  page.on("pageerror", (e) => log("pageerror:", e.message));
  page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") log(`console.${m.type()}:`, m.text().slice(0, 300)); });
  return { browser, ctx, page };
}

// Fresh save -> pick Ysolde -> close the welcome modal -> wait for the 3D models.
async function bootGame(page) {
  await page.goto(BASE + "index.html?qa=" + Date.now(), { waitUntil: "load" });
  await page.evaluate(() => { try { localStorage.clear(); } catch (e) {} });
  await page.reload({ waitUntil: "load" });
  await page.click("[data-act=pickStarter][data-id=ysolde]");
  await page.click("[data-act=closeModal]");
  const ok = await page.waitForFunction(() => window.W3D && (W3D.modelsReady || !W3D.supported()), null, { timeout: 120000 })
    .then(() => page.evaluate(() => ({ supported: W3D.supported(), ready: W3D.modelsReady })));
  if (!ok.supported) throw new Error("W3D.supported() is false (no WebGL in this browser)");
  return ok;
}

// Run a python helper from tools/qa with a JSON payload on stdin; returns stdout.
function runPython(script, input) {
  return execSync(`python3 -I ${JSON.stringify(path.join(__dirname, script))}`,
    { input: JSON.stringify(input), encoding: "utf8", maxBuffer: 1 << 26 });
}

// Init script: counts WebGL draw calls / triangles per animation frame, per canvas class
// (".w3d-canvas" = battle, ".show3d" = hero viewer; __qa.n[cls] = frames drawn so far), and times every rAF callback that
// issued draws (that's W3D's render loop). Read back through window.__qa.
const GL_COUNTER = `(() => {
  const S = window.__qa = { frames: [], cur: {}, cbs: [], rafFrames: 0, draws: 0, lastCanvas: "", n: {} };
  const tri = (m, c, n) => (m === 4 ? Math.floor(c / 3) : (m === 5 || m === 6) ? Math.max(0, c - 2) : 0) * n;
  const add = (gl, m, c, n) => {
    const k = (gl.canvas && gl.canvas.className) || "other";
    const a = S.cur[k] || (S.cur[k] = { calls: 0, tris: 0 });
    a.calls++; a.tris += tri(m, c, n); S.draws++; S.lastCanvas = k;
  };
  for (const P of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
    if (!P) continue;
    const p = P.prototype;
    const de = p.drawElements, da = p.drawArrays, dei = p.drawElementsInstanced, dai = p.drawArraysInstanced;
    p.drawElements = function (m, c, t, o) { add(this, m, c, 1); return de.call(this, m, c, t, o); };
    p.drawArrays = function (m, f, c) { add(this, m, c, 1); return da.call(this, m, f, c); };
    if (dei) p.drawElementsInstanced = function (m, c, t, o, n) { add(this, m, c, n); return dei.call(this, m, c, t, o, n); };
    if (dai) p.drawArraysInstanced = function (m, f, c, n) { add(this, m, c, n); return dai.call(this, m, f, c, n); };
  }
  const raf = window.requestAnimationFrame.bind(window);
  let lastTs = -1;
  window.requestAnimationFrame = function (cb) {
    return raf(function (ts) {
      if (ts !== lastTs) {
        lastTs = ts; S.rafFrames++;
        if (Object.keys(S.cur).length) { for (const k in S.cur) S.n[k] = (S.n[k] || 0) + 1; S.frames.push({ ts, by: S.cur }); S.cur = {}; if (S.frames.length > 3000) S.frames.shift(); }
      }
      const d0 = S.draws, t0 = performance.now();
      try { return cb(ts); } finally {
        if (S.draws > d0) { S.cbs.push({ ts, ms: performance.now() - t0, canvas: S.lastCanvas }); if (S.cbs.length > 3000) S.cbs.shift(); }
      }
    });
  };
})();`;

// Wait until canvas class `cls` has drawn `n` more frames (node-side polling; robust to rAF starvation).
async function waitFrames(page, cls, n, timeout = 30000) {
  const get = () => page.evaluate((c) => (window.__qa.n[c] || 0), cls);
  const start = await get(), t0 = Date.now();
  while (Date.now() - t0 < timeout) { if ((await get()) >= start + n) return; await sleep(50); }
  throw new Error(`waitFrames: ${cls} drew < ${n} frames in ${timeout} ms`);
}

module.exports = { waitFrames, ROOT, PORT, BASE, OUT, GL_COUNTER, sleep, log, ensureServer, ensureBuild, launch, bootGame, runPython };
