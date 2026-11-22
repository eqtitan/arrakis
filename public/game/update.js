// Sigilbound — update check for test builds of the Android app.
// On launch, every few minutes while the app is open, and whenever it comes back to the
// foreground, look at the "android-latest" GitHub release. If its build number is newer than this app's,
// show a banner whose button downloads the new APK (Android then asks to install it).
// Does nothing on the website or in local "dev" copies.

const UPDATE = {
  releaseApi: "https://api.github.com/repos/eqtitan/arrakis/releases/tags/android-latest",
  apkUrl: "https://github.com/eqtitan/arrakis/releases/download/android-latest/Sigilbound.apk",
  latest: null,      // { version, build } when a newer build exists
  lastCheck: 0,
  announced: 0,      // build number we've already popped a notice for
  pollMs: 5 * 60 * 1000,
};

async function checkForUpdate(force = false) {
  const mine = Number(SBV.build);
  if (!NATIVE.isNative || !Number.isFinite(mine)) return;
  if (!force && Date.now() - UPDATE.lastCheck < 2 * 60 * 1000) return;
  UPDATE.lastCheck = Date.now();
  try {
    const res = await fetch(UPDATE.releaseApi, { headers: { accept: "application/vnd.github+json" }, cache: "no-store" });
    if (!res.ok) return;
    const rel = await res.json();
    const m = /v(\d+\.\d+\.\d+)\s*\(build\s*(\d+)\)/.exec(rel.name || "");
    if (!m) return;
    const build = Number(m[2]);
    const had = UPDATE.latest ? UPDATE.latest.build : 0;
    UPDATE.latest = build > mine ? { version: m[1], build } : null;
    // Mid-battle the notice waits for the next check; the Home banner appears after the battle.
    if (UPDATE.latest && build > UPDATE.announced && !B) {
      UPDATE.announced = build;
      toast(`Update available: v${m[1]} · build ${build}. Download it from Home.`);
    }
    if ((UPDATE.latest ? UPDATE.latest.build : 0) !== had && !B) render();
  } catch (_) { /* offline: try again later */ }
}

function updateBanner() {
  if (!UPDATE.latest) return "";
  const u = UPDATE.latest;
  return `<div class="card row spread update-card">
    <div><b>Update available</b><div class="small dim">v${u.version} · build ${u.build} (you have build ${SBV.build})</div></div>
    <a class="btn sm" href="${UPDATE.apkUrl}" target="_blank" rel="noopener">Download</a></div>`;
}

document.addEventListener("visibilitychange", () => { if (!document.hidden) checkForUpdate(); });
setTimeout(() => checkForUpdate(true), 2500);
// Keep checking while the app stays open, so a new build shows up without a restart.
setInterval(() => { if (!document.hidden) checkForUpdate(true); }, UPDATE.pollMs);
