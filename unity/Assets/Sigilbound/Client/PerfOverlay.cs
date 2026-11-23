// Debug performance overlay (Settings > Performance overlay; hidden by default, remembered on this
// device only): frame rate and frame time, draw calls / batches / SetPass calls from the render
// profiler counters (shown as n/a where the player doesn't expose them), quality tier, frame cap
// and the Android thermal status.
using Unity.Profiling;
using UnityEngine;

namespace Sigilbound.Client
{
    public sealed class PerfOverlay : MonoBehaviour
    {
        const string PrefKey = "sb.perfOverlay";
        static PerfOverlay _i;

        public static bool Enabled
        {
            get => PlayerPrefs.GetInt(PrefKey, 0) == 1;
            set { PlayerPrefs.SetInt(PrefKey, value ? 1 : 0); PlayerPrefs.Save(); Sync(); }
        }

        // Creates or removes the overlay to match the setting.
        public static void Sync()
        {
            bool on = Enabled;
            if (on && _i == null) { var go = new GameObject("PerfOverlay"); DontDestroyOnLoad(go); _i = go.AddComponent<PerfOverlay>(); }
            else if (!on && _i != null) { Destroy(_i.gameObject); _i = null; }
        }

        ProfilerRecorder _draws, _batches, _setPass;
        float _acc, _fps, _ms, _worst, _worstWindow; int _frames;
        GUIStyle _style; Texture2D _bg;

        void OnEnable()
        {
            _draws = ProfilerRecorder.StartNew(ProfilerCategory.Render, "Draw Calls Count");
            _batches = ProfilerRecorder.StartNew(ProfilerCategory.Render, "Batches Count");
            _setPass = ProfilerRecorder.StartNew(ProfilerCategory.Render, "SetPass Calls Count");
        }
        void OnDisable() { _draws.Dispose(); _batches.Dispose(); _setPass.Dispose(); }

        void Update()
        {
            float dt = Time.unscaledDeltaTime;
            _acc += dt; _frames++; _worstWindow = Mathf.Max(_worstWindow, dt);
            if (_acc >= 0.5f) { _fps = _frames / _acc; _ms = _acc / _frames * 1000f; _worst = _worstWindow * 1000f; _acc = 0; _frames = 0; _worstWindow = 0; }
        }

        static string Count(ProfilerRecorder r) => r.Valid ? r.LastValue.ToString() : "n/a";
        static readonly string[] Thermal = { "none", "light", "moderate", "severe", "critical", "emergency", "shutdown" };

        void OnGUI()
        {
            GUI.depth = -1000; // above the game's UI
            if (_style == null)
            {
                _style = new GUIStyle(GUI.skin.label) { fontSize = Mathf.RoundToInt(11 * Mathf.Max(1f, Screen.dpi / 160f)), richText = true, wordWrap = false };
                _style.normal.textColor = Color.white;
                _bg = new Texture2D(1, 1); _bg.SetPixel(0, 0, new Color(0, 0, 0, 0.6f)); _bg.Apply();
            }
            var q = Quality.I;
            string fpsCol = q == null || _fps >= q.TargetFps * 0.9f ? "#7CFC9A" : _fps >= q.TargetFps * 0.7f ? "#FFD166" : "#FF6B6B";
            string text = $"<color={fpsCol}><b>{_fps:0} fps</b></color>  {_ms:0.0} ms (worst {_worst:0})\n" +
                          $"draws {Count(_draws)}  batches {Count(_batches)}  setpass {Count(_setPass)}\n" +
                          (q == null ? "" : $"{q.TierName}{(q.Choice == "auto" ? " (auto)" : "")}  cap {q.TargetFps}" +
                                            $"  thermal {(q.ThermalStatus < 0 ? "n/a" : Thermal[Mathf.Clamp(q.ThermalStatus, 0, 6)])}{(q.ThermalLimited ? " (limited)" : "")}");
            var size = _style.CalcSize(new GUIContent(text));
            var safe = Screen.safeArea;
            var r = new Rect(safe.x + 6, Screen.height - safe.yMax + 56, size.x + 12, size.y + 8);
            GUI.DrawTexture(r, _bg);
            GUI.Label(new Rect(r.x + 6, r.y + 4, size.x, size.y), text, _style);
        }
    }
}
