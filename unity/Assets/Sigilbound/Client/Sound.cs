// Sound effects and battle music, ported from public/game/audio.js: the same CC0 files
// (Assets/Resources/Audio, credits in CREDITS.md), the same names, slight pitch variety on
// repeats, one looping battle theme that fades out, music at 0.55 of its slider, and volume
// sliders saved with the game (settings.sfxVol / musicVol, shared with the web save).
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Sigilbound.Client
{
    public sealed class Sound : MonoBehaviour
    {
        public static Sound I;
        static readonly Dictionary<string, string> Files = new Dictionary<string, string>
        {
            ["hit"] = "hit", ["crit"] = "impact", ["kill"] = "kill", ["downed"] = "downed", ["swing"] = "dash", ["cast"] = "shoot",
            ["heal"] = "revive", ["buff"] = "gem", ["victory"] = "level_up", ["legendary"] = "boss", ["coin"] = "coin",
            ["tap"] = "ui", ["confirm"] = "confirm", ["bigKill"] = "big_kill", ["hurt"] = "hurt",
        };
        const float MusicMax = 0.55f;
        readonly Dictionary<string, AudioClip> _clips = new Dictionary<string, AudioClip>();
        readonly List<AudioSource> _sfx = new List<AudioSource>();
        AudioSource _music; Coroutine _fade;
        App _app;
        float SfxVol => (float)(_app?.G?.S.settings.sfxVol ?? 0.8);
        float MusicVol => (float)(_app?.G?.S.settings.musicVol ?? 0.6);

        public static Sound Create(App app)
        {
            var s = app.gameObject.AddComponent<Sound>();
            s._app = app; I = s;
            foreach (var kv in Files) { var c = Resources.Load<AudioClip>("Audio/" + kv.Value); if (c != null) s._clips[kv.Key] = c; }
            s._music = app.gameObject.AddComponent<AudioSource>();
            s._music.loop = true; s._music.playOnAwake = false; s._music.clip = Resources.Load<AudioClip>("Audio/battle_theme");
            for (int i = 0; i < 8; i++) { var a = app.gameObject.AddComponent<AudioSource>(); a.playOnAwake = false; s._sfx.Add(a); }
            return s;
        }

        // play(name, { volume, rate, jitter }) from audio.js.
        public void Play(string name, float volume = 1, float rate = 1, float jitter = 0.06f)
        {
            if (SfxVol <= 0 || !_clips.TryGetValue(name, out var clip)) return;
            AudioSource src = null;
            foreach (var a in _sfx) if (!a.isPlaying) { src = a; break; }
            if (src == null) src = _sfx[Random.Range(0, _sfx.Count)];
            src.pitch = rate * (1 + Random.Range(-1f, 1f) * jitter);
            src.PlayOneShot(clip, volume * SfxVol);
        }

        public void StartMusic()
        {
            if (_music.clip == null) return;
            if (_fade != null) { StopCoroutine(_fade); _fade = null; }
            _music.volume = Mathf.Min(1, MusicVol * MusicMax);
            if (MusicVol > 0 && !_music.isPlaying) _music.Play();
        }
        public void StopMusic() { if (_music.isPlaying && _fade == null) _fade = StartCoroutine(Fade()); }
        IEnumerator Fade()
        {
            // short fade so it doesn't cut off abruptly
            for (float v = _music.volume; v > 0; v -= 0.1f * Mathf.Max(0.05f, MusicVol * MusicMax)) { _music.volume = v; yield return new WaitForSecondsRealtime(0.04f); }
            _music.Stop(); _fade = null;
        }

        // Volume sliders apply instantly.
        public void ApplyVolumes()
        {
            if (_music.isPlaying) { _music.volume = Mathf.Min(1, MusicVol * MusicMax); if (MusicVol <= 0) _music.Stop(); }
        }

        void OnApplicationPause(bool paused) { if (paused) _music.Pause(); else if (MusicVol > 0 && _music.clip != null && _fade == null && _music.time > 0) _music.UnPause(); }
    }
}
