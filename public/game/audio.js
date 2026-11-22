// Sigilbound — sound effects and battle music (CC0, see audio/CREDITS.md).
// Web Audio for low-latency, overlapping effects; one looping music track in battles.
// Phones only allow audio after the player touches the screen, so everything unlocks
// on the first tap. Sound and music can each be turned off on the Home screen.

const SOUND = (() => {
  const FILES = {
    hit: "hit", crit: "impact", kill: "kill", downed: "downed", swing: "dash", cast: "shoot",
    heal: "revive", buff: "gem", victory: "level_up", legendary: "boss", coin: "coin",
    tap: "ui", confirm: "confirm", bigKill: "big_kill", hurt: "hurt",
  };
  let ctx = null, sfxGain = null, musicGain = null, music = null, musicWanted = false;
  const buffers = {};
  const settings = () => (typeof G !== "undefined" && G.settings) || {};
  // Volumes are 0..1 (0 = off). Older saves used on/off switches; respect those.
  const sfxVol = () => { const s = settings(); return typeof s.sfxVol === "number" ? s.sfxVol : s.sound === false ? 0 : 0.8; };
  const musicVol = () => { const s = settings(); return typeof s.musicVol === "number" ? s.musicVol : s.music === false ? 0 : 0.6; };
  const sfxOn = () => sfxVol() > 0;
  const musicOn = () => musicVol() > 0;
  const MUSIC_MAX = 0.55; // full slider = comfortable background level under the effects
  let musicRouted = false;
  function applyVolumes() {
    if (sfxGain) sfxGain.gain.value = sfxVol();
    if (musicGain) musicGain.gain.value = musicVol() * MUSIC_MAX;
    if (music && !musicRouted) music.volume = Math.min(1, musicVol() * MUSIC_MAX);
    refreshMusic();
  }

  function unlock() {
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    sfxGain = ctx.createGain(); sfxGain.gain.value = sfxVol(); sfxGain.connect(ctx.destination);
    musicGain = ctx.createGain(); musicGain.gain.value = musicVol() * MUSIC_MAX; musicGain.connect(ctx.destination);
    for (const [key, file] of Object.entries(FILES)) {
      fetch(`audio/${file}.ogg`).then((r) => r.arrayBuffer()).then((b) => ctx.decodeAudioData(b))
        .then((buf) => { buffers[key] = buf; }).catch(() => {});
    }
    if (musicWanted) startMusic();
  }

  function play(name, { volume = 1, rate = 1, jitter = 0.06 } = {}) {
    if (!ctx || !sfxOn() || !buffers[name]) return;
    const src = ctx.createBufferSource();
    src.buffer = buffers[name];
    src.playbackRate.value = rate * (1 + (Math.random() * 2 - 1) * jitter); // slight variety on repeats
    const g = ctx.createGain(); g.gain.value = volume;
    src.connect(g); g.connect(sfxGain);
    src.start();
  }

  function startMusic() {
    musicWanted = true;
    if (!ctx || !musicOn() || music) return;
    music = new Audio("audio/battle_theme.mp3");
    music.loop = true;
    try {
      const node = ctx.createMediaElementSource(music);
      node.connect(musicGain);
      musicRouted = true;
    } catch (_) { musicRouted = false; music.volume = Math.min(1, musicVol() * MUSIC_MAX); }
    music.play().catch(() => { music = null; });
  }
  function stopMusic() {
    musicWanted = false;
    if (!music) return;
    const m = music; music = null;
    // short fade so it doesn't cut off abruptly
    let v = 1;
    const t = setInterval(() => { v -= 0.1; if (v <= 0) { clearInterval(t); m.pause(); } else if (m.volume !== undefined) m.volume = Math.max(0, v); }, 40);
  }
  function refreshMusic() { if (musicOn() && musicWanted) startMusic(); else if (!musicOn() && music) { const w = musicWanted; stopMusic(); musicWanted = w; } }

  // Pause music when the app goes to the background.
  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.hidden) { ctx.suspend(); if (music) music.pause(); }
    else { ctx.resume(); if (music && musicOn()) music.play().catch(() => {}); }
  });
  ["pointerdown", "touchstart", "keydown"].forEach((ev) => document.addEventListener(ev, unlock, { passive: true }));

  const status = () => ({ unlocked: !!ctx, loaded: Object.keys(buffers).length, total: Object.keys(FILES).length, music: !!music && !music.paused });
  return { play, startMusic, stopMusic, refreshMusic, applyVolumes, unlock, status, sfxVol, musicVol };
})();
