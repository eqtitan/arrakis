// Serves the worktree root and renders tools/shading-preview.html: saves every cell as a PNG and
// the whole page as a contact sheet.
// Usage: node tools/shading-preview-shot.cjs [outdir] [query]
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8797;
const OUT = process.argv[2] || "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/shading";
const QUERY = process.argv[3] || "";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  let code = 0;
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    page.on("console", (m) => { if (m.type() !== "debug") console.log("[page]", m.type(), m.text()); });
    page.on("pageerror", (e) => { console.log("[pageerror]", e.message); code = 1; });
    await page.goto(`http://127.0.0.1:${PORT}/tools/shading-preview.html${QUERY}`);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 600000, polling: 1000 });
    const err = await page.evaluate(() => window.__error);
    if (err) { console.log(err); code = 1; }
    console.log(JSON.stringify(await page.evaluate(() => window.__previewInfo)));
    const cells = await page.evaluate(() => window.__cells || []);
    for (const c of cells) fs.writeFileSync(path.join(OUT, `${c.name}.png`), Buffer.from(c.url.split(",")[1], "base64"));
    const sheet = path.join(OUT, "contact-sheet.png");
    await page.locator("#sheet").screenshot({ path: sheet });
    console.log("saved", cells.length, "cells and", sheet);
  } catch (e) { console.error(e); code = 1; }
  await browser.close();
  srv.kill();
  process.exit(code);
})();
