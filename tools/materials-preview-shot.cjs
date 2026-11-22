// Serves the worktree root and screenshots tools/materials-preview.html.
// Usage: node tools/materials-preview-shot.cjs [outfile] [query]
const { spawn } = require("child_process");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8791;
const OUT = process.argv[2] || "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/materials-preview.png";
const QUERY = process.argv[3] || "";

(async () => {
  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  let code = 0;
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1400, height: 1180 } });
    page.on("console", (m) => console.log("[page]", m.type(), m.text()));
    page.on("pageerror", (e) => { console.log("[pageerror]", e.message); code = 1; });
    await page.goto(`http://127.0.0.1:${PORT}/tools/materials-preview.html${QUERY}`);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
    console.log(JSON.stringify(await page.evaluate(() => window.__previewInfo)));
    await page.screenshot({ path: OUT, fullPage: true });
    console.log("saved", OUT);
  } catch (e) { console.error(e); code = 1; }
  await browser.close();
  srv.kill();
  process.exit(code);
})();
