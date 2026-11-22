// Sigilbound — native app glue (Capacitor). Does nothing in a normal browser.
// Loaded first. Plugins are reached through window.Capacitor.Plugins, which the
// native shell injects, so no bundler is needed.

const NATIVE = (() => {
  const cap = window.Capacitor;
  const isNative = !!(cap && cap.isNativePlatform && cap.isNativePlatform());
  const P = (isNative && cap.Plugins) || {};
  const platform = isNative ? cap.getPlatform() : "web";
  // Keys mirrored into native storage, which the OS won't purge like WebView storage.
  const MIRRORED = ["sigilbound.save.v1", "sigilbound.online.v1"];

  // Write-through: every localStorage write of a mirrored key is copied to Preferences.
  function persist(key, value) {
    if (!isNative || !P.Preferences || !MIRRORED.includes(key)) return;
    const op = value == null ? P.Preferences.remove({ key }) : P.Preferences.set({ key, value });
    op.catch(() => {});
  }

  // On launch, if the WebView lost its storage but Preferences still has it, restore and reload.
  async function restore() {
    if (!isNative || !P.Preferences) return;
    let restored = false;
    for (const key of MIRRORED) {
      try {
        const local = localStorage.getItem(key);
        const { value } = await P.Preferences.get({ key });
        if (!local && value) { localStorage.setItem(key, value); restored = true; }
        else if (local && !value) persist(key, local);
      } catch (_) { /* ignore */ }
    }
    if (restored) location.reload();
  }

  function haptic(kind = "light") {
    if (!isNative || !P.Haptics) return;
    if (kind === "success") P.Haptics.notification({ type: "SUCCESS" }).catch(() => {});
    else P.Haptics.impact({ style: kind === "heavy" ? "HEAVY" : kind === "medium" ? "MEDIUM" : "LIGHT" }).catch(() => {});
  }

  function onBack(handler) {
    if (isNative && P.App) P.App.addListener("backButton", handler);
  }
  function exit() { if (isNative && P.App) P.App.exitApp(); }

  if (isNative) {
    document.documentElement.classList.add("native", `native-${platform}`);
    if (P.StatusBar) {
      P.StatusBar.setStyle({ style: "DARK" }).catch(() => {});
      if (platform === "android") P.StatusBar.setBackgroundColor({ color: "#14111c" }).catch(() => {});
    }
    restore();
    window.addEventListener("load", () => { if (P.SplashScreen) P.SplashScreen.hide().catch(() => {}); });
  }
  return { isNative, platform, persist, haptic, onBack, exit };
})();
