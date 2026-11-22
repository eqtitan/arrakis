// Serves the worktree root and screenshots tools/scenery-preview.html for all 10 chapters + the
// Titan arena at 390×844 (DPR 2) from the battle camera, prints renderer.info per arena and
// builds a contact sheet with Python PIL.
// Usage: node tools/scenery-preview-shot.cjs [outdir] [quality=high] [cams=battle|old (comma list)] [only=ch list, e.g. 0,4,titan]
const { spawn, execFileSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8794;
const OUT = process.argv[2] || "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/scenery";
const Q = process.argv[3] || "high";
const CAMS = (process.argv[4] || "battle").split(",");
const ONLY = process.argv[5] ? process.argv[5].split(",") : null;
const ARENAS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "titan"].filter((a) => !ONLY || ONLY.includes(a));

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  let code = 0;
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  const rows = [];
  try {
    for (const cam of CAMS) {
      const files = [];
      for (const ch of ARENAS) {
        const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
        page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") console.log("[page]", m.type(), m.text()); });
        page.on("pageerror", (e) => { console.log("[pageerror]", e.message); code = 1; });
        await page.goto(`http://127.0.0.1:${PORT}/tools/scenery-preview.html?ch=${ch}&q=${Q}&cam=${cam}`);
        await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
        const info = await page.evaluate(() => window.__previewInfo);
        const file = path.join(OUT, `arena-${ch}-${Q}-${cam}.png`);
        await page.screenshot({ path: file });
        files.push(file);
        rows.push(info);
        console.log(`${cam.padEnd(5)} ${String(ch).padEnd(5)} ${info.stats.theme.padEnd(18)} scenery calls ${String(info.sceneryOnly.calls).padStart(3)}  tris ${String(info.sceneryOnly.triangles).padStart(7)}  | with units calls ${info.total.calls} tris ${info.total.triangles} | own meshes ${info.stats.drawCalls} tex ${info.stats.textureMB} MB | build ${info.buildMs} ms`);
        await page.close();
      }
      const sheet = path.join(OUT, `contact-${Q}-${cam}.png`);
      execFileSync("python3", ["-c", `
import sys
from PIL import Image, ImageDraw
files = sys.argv[2:]
ims = [Image.open(f).convert("RGB").resize((312, 675), Image.LANCZOS) for f in files]
cols = 6
rows = (len(ims) + cols - 1) // cols
sheet = Image.new("RGB", (cols * 316 + 4, rows * 679 + 4), (20, 20, 20))
for i, im in enumerate(ims):
    sheet.paste(im, (4 + (i % cols) * 316, 4 + (i // cols) * 679))
sheet.save(sys.argv[1])
`, sheet, ...files]);
      console.log("contact sheet", sheet);
    }
    fs.writeFileSync(path.join(OUT, `stats-${Q}.json`), JSON.stringify(rows, null, 1));
  } catch (e) { console.error(e); code = 1; }
  await browser.close();
  srv.kill();
  process.exit(code);
})();
