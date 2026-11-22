// Serves the worktree root and screenshots tools/post-preview.html: direct vs High / Medium / Low,
// plus a neutral-grade/no-bloom diff against the direct render.
// Usage: node tools/post-preview-shot.cjs [outdir]
// Viewport = Galaxy Note20 landscape at FHD+ (914x411 CSS @ dpr 2.625 -> 2400x1080).
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8793;
const OUT = process.argv[2] || "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/post";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  let code = 0;
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 914, height: 411 }, deviceScaleFactor: 2.625 });
    page.on("console", (m) => console.log("[page]", m.type(), m.text()));
    page.on("pageerror", (e) => { console.log("[pageerror]", e.message); code = 1; });
    await page.goto(`http://127.0.0.1:${PORT}/tools/post-preview.html?static&clean`);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
    const shots = [
      ["direct", {}], ["High", {}], ["Medium", {}], ["Low", {}],
      ["High", { neutral: true, nobloom: true }, "High-neutral"],
      ["High", { neutral: false, nobloom: true }, "High-nobloom"],
    ];
    for (const [mode, o, name] of shots) {
      const info = await page.evaluate(([m, oo]) => window.__setMode(m, oo), [mode, o]);
      const file = path.join(OUT, `${name || mode}.png`);
      await page.screenshot({ path: file });
      console.log(name || mode, JSON.stringify(info), "->", file);
    }
    const d = await page.evaluate(() => window.__diff("High"));
    if (d.png) { fs.writeFileSync(path.join(OUT, "diff-direct-vs-High-neutral.png"), Buffer.from(d.png.split(",")[1], "base64")); delete d.png; }
    console.log("diff", JSON.stringify(d));
  } catch (e) { console.error(e); code = 1; }
  await browser.close();
  srv.kill();
  process.exit(code);
})();
