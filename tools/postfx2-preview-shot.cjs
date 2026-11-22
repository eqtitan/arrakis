// Serves the worktree and renders tools/postfx2-preview.html: baseline vs +SSAO / AO view / +LUT / +DoF /
// +sharpen / +rays / all, every LUT preset on its matching arena theme, neutral-equivalence diffs,
// artefact crops and SwiftShader per-pass timings. Portrait Note20-ish viewport (412x915 CSS @ dpr 2.625).
// Usage: node tools/postfx2-preview-shot.cjs [outdir]
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const PORT = 8798;
const OUT = process.argv[2] || "/tmp/claude-0/-home-user-arrakis/73965507-eba1-5e21-9691-e49803ce6e6e/scratchpad/postfx2";
const save = (name, dataUrl) => { const f = path.join(OUT, name); fs.writeFileSync(f, Buffer.from(dataUrl.split(",")[1], "base64")); return f; };

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  // the preview carries a copy of post.mjs's FINAL_FRAG: make sure the real one still has the splice anchors
  const postSrc = fs.readFileSync(path.join(ROOT, "game3d/post.mjs"), "utf8");
  const anchors = [
    "float hash(vec2 p)", "vec3 col = srgbToLinear(clamp(texture2D(tScene, vUv).rgb, 0.0, 1.0));",
    "#ifdef USE_GRADE", "vec3 o = linearToSrgb(clamp(col, 0.0, 1.0));",
  ];
  const missing = anchors.filter((a) => !postSrc.includes(a));
  console.log("post.mjs anchors:", missing.length ? "MISSING " + JSON.stringify(missing) : "all present");

  const srv = spawn("python3", ["-m", "http.server", String(PORT), "--bind", "127.0.0.1"], { cwd: ROOT, stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  let code = 0;
  const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  try {
    const page = await browser.newPage({ viewport: { width: 412, height: 915 }, deviceScaleFactor: 2.625 });
    page.on("console", (m) => { if (m.type() !== "log" || /error|warn/i.test(m.text())) console.log("[page]", m.type(), m.text()); });
    page.on("pageerror", (e) => { console.log("[pageerror]", e.message); code = 1; });
    await page.goto(`http://127.0.0.1:${PORT}/tools/postfx2-preview.html?static&clean`);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 90000 });

    const shot = async (name, o, theme = 0) => {
      const r = await page.evaluate(([n, oo, t]) => window.__shot(n, oo, t), [name, o, theme]);
      save(name + ".png", r.png);
      console.log(name.padEnd(22), JSON.stringify(r.info));
      return r;
    };
    const H = { tier: "High", ssao: false, dof: false, rays: false, sharpen: 0, lut: "neutral", aoDebug: false, depth: null, identityLut: false };
    const U = Object.assign({}, H, { tier: "Ultra" });
    await shot("01-baseline-High", H);
    await shot("02-ssao-High", { ...H, ssao: true });
    await shot("03-ao-view-High", { ...H, ssao: true, aoDebug: true });
    await shot("04-lut-dusk-High", { ...H, lut: "dusk forest" });
    await shot("05-sharpen-High", { ...H, sharpen: "auto" });
    await shot("06-baseline-Ultra", U);
    await shot("07-dof-Ultra", { ...U, dof: true });
    await shot("08-rays-Ultra", { ...U, rays: true });
    await shot("09-all-Ultra", { ...U, ssao: true, dof: true, rays: true, lut: "dusk forest" });
    await shot("10-all-High", { ...H, ssao: true, lut: "dusk forest", sharpen: "auto" });
    // neutral checks
    await shot("n1-depth-attached-High", { ...H, depth: true });
    await shot("n2-identity-lut-High", { ...H, identityLut: true });

    const diffs = [];
    for (const [a, b] of [
      ["01-baseline-High", "n1-depth-attached-High"], ["01-baseline-High", "n2-identity-lut-High"],
      ["01-baseline-High", "02-ssao-High"], ["01-baseline-High", "04-lut-dusk-High"], ["01-baseline-High", "05-sharpen-High"],
      ["06-baseline-Ultra", "07-dof-Ultra"], ["06-baseline-Ultra", "08-rays-Ultra"],
    ]) diffs.push(await page.evaluate(([x, y]) => window.__diff(x, y), [a, b]));
    for (const d of diffs) console.log("diff", JSON.stringify(d));
    for (const n of ["01-baseline-High", "02-ssao-High", "04-lut-dusk-High", "08-rays-Ultra"]) console.log("sky banding run", n, await page.evaluate((x) => window.__banding(x), n));

    save("contact-sheet.png", await page.evaluate(() => window.__sheet(
      ["01-baseline-High", "02-ssao-High", "03-ao-view-High", "04-lut-dusk-High", "05-sharpen-High", "10-all-High",
        "06-baseline-Ultra", "07-dof-Ultra", "08-rays-Ultra", "09-all-Ultra"], 5, 300,
      ["High baseline", "High +SSAO", "AO term", "High +LUT dusk", "High +sharpen", "High all", "Ultra baseline", "Ultra +DoF", "Ultra +rays", "Ultra all"])));
    // artefact crops: feet/crates contact (allies' row), enemy silhouettes vs far background
    save("crop-contact.png", await page.evaluate(() => window.__crops(["01-baseline-High", "02-ssao-High", "03-ao-view-High"], 0.0, 0.62, 0.5, 0.86, 2)));
    save("crop-silhouette.png", await page.evaluate(() => window.__crops(["06-baseline-Ultra", "09-all-Ultra"], 0.25, 0.28, 0.75, 0.5, 2)));

    // LUT presets, each on its arena theme: theme baseline vs LUT
    const names = [], labels = [];
    const themes = await page.evaluate(() => [...document.querySelectorAll("#theme option")].map((o) => o.textContent.replace(/^theme \d+: /, "")));
    for (let i = 0; i < themes.length; i++) {
      await shot(`t${String(i).padStart(2, "0")}-base`, { ...H, lut: "neutral" }, i);
      await shot(`t${String(i).padStart(2, "0")}-lut`, { ...H, lut: themes[i] }, i);
      names.push(`t${String(i).padStart(2, "0")}-base`, `t${String(i).padStart(2, "0")}-lut`); labels.push(themes[i], "+LUT");
    }
    save("contact-sheet-luts.png", await page.evaluate(([n, l]) => window.__sheet(n, 8, 200, l), [names, labels]));

    // timings (SwiftShader CPU raster: relative only)
    await page.evaluate(() => window.__shot("tmp", {}, 0));
    for (const [label, o] of [
      ["High base", H], ["High +SSAO8", { ...H, ssao: true }], ["High all", { ...H, ssao: true, lut: "dusk forest", sharpen: "auto" }],
      ["Ultra base", U], ["Ultra all", { ...U, ssao: true, dof: true, rays: true, lut: "dusk forest" }],
      ["Ultra +SSAO12", { ...U, ssao: true }], ["Ultra +DoF", { ...U, dof: true }], ["Ultra +rays", { ...U, rays: true }],
      ["High +LUT", { ...H, lut: "dusk forest" }], ["High +sharpen", { ...H, sharpen: "auto" }], ["High depth only", { ...H, depth: true }],
    ]) console.log("time", label.padEnd(16), JSON.stringify(await page.evaluate(([oo]) => window.__time(oo, 5), [o])));
  } catch (e) { console.error(e); code = 1; }
  await browser.close();
  srv.kill();
  console.log("out:", OUT);
  process.exit(code);
})();
