// Sigilbound — update check for test builds of the Android app.
// On launch and whenever the app comes back to the foreground, look at the
// "android-latest" GitHub release. If its build number is newer than this app's,
// show a banner whose button downloads the new APK (Android then asks to install it).
// Does nothing on the website or in local "dev" copies.

const UPDATE = {
  releaseApi: "https://api.github.com/repos/eqtitan/arrakis/releases/tags/android-latest",
  apkUrl: "https://github.com/eqtitan/arrakis/releases/download/android-latest/Sigilbound.apk",
  latest: null,      // { version, build } when a newer build exists
  lastCheck: 0,
};

async function checkForUpdate(force = false) {
  const mine = Number(SBV.build);
  if (!NATIVE.isNative || !Number.isFinite(mine)) return;
  if (!force && Date.now() - UPDATE.lastCheck < 10 * 60 * 1000) return;
  UPDATE.lastCheck = Date.now();
  try {
    const res = await fetch(UPDATE.releaseApi, { headers: { accept: "application/vnd.github+json" }, cache: "no-store" });
    if (!res.ok) return;
    const rel = await res.json();
    const m = /v(\d+\.\d+\.\d+)\s*\(build\s*(\d+)\)/.exec(rel.name || "");
    if (!m) return;
    const build = Number(m[2]);
    const had = !!UPDATE.latest;
    UPDATE.latest = build > mine ? { version: m[1], build } : null;
    if (!!UPDATE.latest !== had && !B) render();
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
