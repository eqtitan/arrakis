// Serves the worktree root and screenshots tools/vfx-preview.html: every effect x element at its key
// time (cropped around the action, as seen on a phone), plus a few full frames and a contact sheet.
// Usage: node tools/vfx-preview-shot.cjs [outdir] [tier] [filter]
// Viewport: portrait phone, 390x780 CSS @ dpr 2.
const { spawn, execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8796;
const OUT = process.argv[2] || "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/vfx";
const TIER = process.argv[3] || "High";
const FILTER = process.argv[4] ? new RegExp(process.argv[4]) : null;
const W = 390, H = 780, DPR = 2, CROP = 240; // crop box in CSS px

(async () => {
  fs.mkdirSync(path.join(OUT, "frames"), { recursive: true });
  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  let code = 0;
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  const manifest = [];
  try {
    const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: DPR });
    page.on("console", (m) => { if (m.type() !== "log") console.log("[page]", m.type(), m.text()); });
    page.on("pageerror", (e) => { console.log("[pageerror]", e.message); code = 1; });
    await page.goto(`http://127.0.0.1:${PORT}/tools/vfx-preview.html?static&clean&tier=${TIER}`);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
    const cat = await page.evaluate(() => window.__catalog());
    for (const [fx, { els }] of Object.entries(cat)) {
      if (FILTER && !FILTER.test(fx)) continue;
      for (const el of els) {
        const r = await page.evaluate(([a, b, c]) => window.__run(a, b, null, c), [fx, el, TIER]);
        const x = Math.max(0, Math.min(W - CROP, r.cx - CROP / 2)), y = Math.max(0, Math.min(H - CROP, r.cy - CROP / 2));
        const file = path.join(OUT, "frames", `${fx}-${el}.png`);
        await page.screenshot({ path: file, clip: { x, y, width: CROP, height: CROP } });
        manifest.push({ fx, el, file, dc: r.peakDC, over: r.stats.sprites.peakOver });
        console.log(fx, el, "dc", r.peakDC, "sprites", r.stats.sprites.over, "+", r.stats.sprites.under, "ribbons", r.stats.ribbons.active, "walls", r.stats.walls.active);
      }
    }
    // a few full frames
    for (const [fx, el, t] of [["aoe", "flame", 0.5], ["orb", "shadow", 0.3], ["titanSlam", "light", 0.2], ["impactCrit", "tide", 0.06]]) {
      if (FILTER && !FILTER.test(fx)) continue;
      await page.evaluate(([a, b, c, d]) => window.__run(a, b, c, d), [fx, el, t, TIER]);
      await page.screenshot({ path: path.join(OUT, `full-${fx}-${el}.png`) });
    }
    for (const tn of ["Ultra", "High", "Medium", "Low"]) {
      const s = await page.evaluate((x) => window.__stress(x), tn);
      console.log("stress", tn, JSON.stringify({ dc: s.drawCallsPeak, over: s.peak.sprites.peakOver, under: s.peak.sprites.peakUnder, ribbons: s.peak.ribbons.peak, walls: s.peak.walls.peak, dropped: s.peak.sprites.dropped, calls: s.renderInfo.calls }));
      await page.screenshot({ path: path.join(OUT, `stress-${tn}.png`) });
    }
  } catch (e) { console.error(e); code = 1; }
  await browser.close();
  srv.kill();
  fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 1));
  // contact sheet: rows = effects, columns = elements/kinds
  const py = `
import json, sys
from PIL import Image, ImageDraw
out = sys.argv[1]
m = json.load(open(out + "/manifest.json"))
fxs = []
for e in m:
    if e["fx"] not in fxs: fxs.append(e["fx"])
cols = max(sum(1 for e in m if e["fx"] == f) for f in fxs) if fxs else 1
T, L, HD = 200, 96, 18
sheet = Image.new("RGB", (L + cols * T, HD + len(fxs) * T), (16, 16, 20))
d = ImageDraw.Draw(sheet)
for r, f in enumerate(fxs):
    d.text((6, HD + r * T + T // 2 - 6), f, fill=(230, 230, 230))
    for c, e in enumerate([e for e in m if e["fx"] == f]):
        im = Image.open(e["file"]).convert("RGB").resize((T - 4, T - 4), Image.LANCZOS)
        sheet.paste(im, (L + c * T + 2, HD + r * T + 2))
        d.text((L + c * T + 6, HD + r * T + 4), e["el"], fill=(255, 255, 255))
sheet.save(out + "/contact-sheet.png")
print("sheet", out + "/contact-sheet.png", sheet.size)
`;
  try { console.log(execFileSync("python3", ["-c", py, OUT]).toString().trim()); } catch (e) { console.error(e.message); code = 1; }
  process.exit(code);
})();
