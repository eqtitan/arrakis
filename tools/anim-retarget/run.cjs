// Bundles bake.mjs, serves it with the models and the UAL source, runs it in headless Chromium and
// writes public/game/models/anims_ual.json. Source: assets-candidates/quaternius_ual_standard
// (override with UAL_DIR). Usage: node tools/anim-retarget/run.cjs
const { execSync } = require("child_process");
const fs = require("fs"), path = require("path"), http = require("http");
const ROOT = path.resolve(__dirname, "..", "..");
const SRC = process.env.UAL_DIR || path.join(ROOT, "assets-candidates/quaternius_ual_standard");
const OUT_DIR = path.join(__dirname, ".out");
fs.mkdirSync(OUT_DIR, { recursive: true });
execSync(`npx esbuild ${path.join(__dirname, "bake.mjs")} --bundle --format=iife --outfile=${path.join(OUT_DIR, "bake.js")}`, { cwd: ROOT, stdio: "inherit" });
fs.writeFileSync(path.join(OUT_DIR, "index.html"), `<!doctype html><script src="bake.js"></script>`);
const types = { ".js": "text/javascript", ".html": "text/html", ".glb": "model/gltf-binary", ".gltf": "model/gltf+json", ".bin": "application/octet-stream" };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  const f = u.startsWith("/models/") ? path.join(ROOT, "public/game", u) : u.startsWith("/ual/") ? path.join(SRC, u.slice(5)) : path.join(OUT_DIR, u === "/" ? "index.html" : u);
  fs.readFile(f, (e, d) => { if (e) { res.statusCode = 404; return res.end(); } res.setHeader("content-type", types[path.extname(f)] || "application/octet-stream"); res.end(d); });
}).listen(0, async () => {
  const { chromium } = require("playwright");
  const b = await chromium.launch();
  const p = await b.newPage();
  p.on("console", (m) => console.log("page:", m.text()));
  await p.goto(`http://127.0.0.1:${server.address().port}/`);
  await p.waitForFunction(() => window.__baked || window.__bakeError, null, { timeout: 120000 });
  const err = await p.evaluate(() => window.__bakeError);
  if (err) { console.error(err); process.exit(1); }
  const data = await p.evaluate(() => JSON.stringify(window.__baked));
  const out = path.join(ROOT, "public/game/models/anims_ual.json");
  fs.writeFileSync(out, data);
  console.log("wrote", out, (data.length / 1024).toFixed(0), "KB");
  await b.close(); server.close();
});
