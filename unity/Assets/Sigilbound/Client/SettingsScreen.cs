// Settings (the web game's Settings dialog): camera angle, frame rate, graphics quality, promo
// code, and save codes — copy this device's code, or paste one from the web game to carry
// progress over.
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public sealed partial class App
    {
        string _promoInput = "", _loadInput = "";

        public void OpenSettings()
        {
            Modal("Settings", Mathf.Min(Ui.Safe.height - 40, 740), DrawSettings);
        }

        void SettingRow(ref float y, Rect b, string title, string sub)
        {
            Ui.Text(new Rect(b.x, y, b.width, 22), title, 15, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
            if (!string.IsNullOrEmpty(sub)) Ui.Text(new Rect(b.x, y + 20, b.width, 18), sub, 11, Palette.Dim);
            y += string.IsNullOrEmpty(sub) ? 26 : 42;
        }

        void Chips(ref float y, Rect b, string[] labels, int on, System.Action<int> pick)
        {
            float x = b.x;
            for (int i = 0; i < labels.Length; i++)
            {
                float w = Mathf.Max(54, labels[i].Length * 7.6f + 18);
                if (x + w > b.xMax) { x = b.x; y += 36; }
                if (Ui.Button(new Rect(x, y, w, 30), labels[i], i == on ? Ui.Kind.ChipOn : Ui.Kind.Chip, 12)) pick(i);
                x += w + 6;
            }
            y += 40;
        }

        void Slider(ref float y, Rect b, string title, double value, System.Action<double> set)
        {
            int pct = Mathf.RoundToInt((float)value * 100);
            Ui.Text(new Rect(b.x, y, b.width - 60, 22), title, 15, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
            Ui.Text(new Rect(b.xMax - 60, y, 60, 22), pct > 0 ? pct + "%" : "Off", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            float v = GUI.HorizontalSlider(new Rect(b.x, y + 26, b.width, 20), pct, 0, 100);
            int nv = Mathf.RoundToInt(v / 5) * 5; // 5% steps like the web slider
            if (nv != pct) { set(nv / 100.0); Save(); }
            y += 52;
        }

        void DrawSettings(Rect b)
        {
            float y = b.y;
            var st = G.S.settings;
            // Volume sliders (0 = off) that apply instantly, as audio.js.
            Slider(ref y, b, "Music", st.musicVol, v => { st.musicVol = v; Sound.I?.ApplyVolumes(); });
            Slider(ref y, b, "Sound effects", st.sfxVol, v => { st.sfxVol = v; Sound.I?.ApplyVolumes(); });
            var cams = BattleLayout.Cameras;
            SettingRow(ref y, b, "Camera angle", "Also switchable during battle with Cam.");
            Chips(ref y, b, System.Array.ConvertAll(cams, c => c.Name), System.Array.FindIndex(cams, c => c.Key == BattleLayout.Camera(st.cam).Key), i => { st.cam = cams[i].Key; Save(); Toast("Camera: " + cams[i].Name); });

            SettingRow(ref y, b, "Frame rate", "30 fps keeps the phone cooler and saves battery.");
            Chips(ref y, b, new[] { "30 · Cooler", "60 · Smoother" }, st.fpsCap == 30 ? 0 : 1, i =>
            {
                st.fpsCap = i == 0 ? 30 : 60; Save(); Quality.I?.Set(st.quality, st.fpsCap);
                Toast(i == 0 ? "30 fps: cooler and longer battery" : "60 fps: smoother");
            });

            var q = Quality.I;
            string[] qKeys = { "auto", "Ultra", "High", "Medium", "Low" };
            string qSub = st.quality == "auto" ? $"Auto picks what your phone runs smoothly{(q != null ? $" (now: {q.TierName})" : "")}"
                : st.quality == "Ultra" ? "Maximum detail at full resolution. Uses more battery." : "Lower it if battles stutter or the phone gets warm.";
            SettingRow(ref y, b, "Graphics quality", qSub);
            Chips(ref y, b, new[] { "Auto", "Ultra", "High", "Medium", "Low" }, System.Array.IndexOf(qKeys, st.quality), i =>
            {
                st.quality = qKeys[i]; Save(); Quality.I?.Set(st.quality, st.fpsCap);
                Toast("Graphics: " + (i == 0 ? "Auto" : qKeys[i]));
            });

            if (Screen != ScreenId.Battle)
            {
                SettingRow(ref y, b, "Promo code", "Got a code? Enter it here for free rewards.");
                _promoInput = Ui.Field(new Rect(b.x, y, b.width - 100, 34), _promoInput, 32, false);
                if (Ui.Button(new Rect(b.xMax - 92, y, 92, 34), "Redeem", Ui.Kind.Primary, 13))
                {
                    switch (Promo.Redeem(G, _promoInput, out var entry))
                    {
                        case PromoResult.Empty: Toast("Enter a code first."); break;
                        case PromoResult.Invalid: Toast("That code isn't valid."); break;
                        case PromoResult.AlreadyUsed: Toast("You've already used this code."); break;
                        default: Save(); _promoInput = ""; Sound.I?.Play("legendary", 1, 1, 0); Toast($"{entry.Label}: {entry.Reward}"); break;
                    }
                }
                y += 46;

                SettingRow(ref y, b, "Save code", "Paste a code from the web game to load that progress here. It replaces this device's progress.");
                _loadInput = Ui.Field(new Rect(b.x, y, b.width, 64), _loadInput, 200000, true);
                y += 70;
                float bw = (b.width - 12) / 3;
                if (Ui.Button(new Rect(b.x, y, bw, 38), "Paste", Ui.Kind.Secondary, 13)) _loadInput = GUIUtility.systemCopyBuffer ?? "";
                if (Ui.Button(new Rect(b.x + bw + 6, y, bw, 38), "Load code", Ui.Kind.Primary, 13)) ConfirmLoad();
                if (Ui.Button(new Rect(b.x + (bw + 6) * 2, y, bw, 38), "Copy mine", Ui.Kind.Secondary, 13))
                { GUIUtility.systemCopyBuffer = ExportSaveCode(); Toast("Save code copied"); }
                y += 48;
            }
            Ui.Text(new Rect(b.x, b.yMax - 70, b.width, 18), $"Sigilbound (Unity) v{Application.version}", 11, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter);
            if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width, 44), "Done")) CloseModal();
        }

        void ConfirmLoad()
        {
            var code = _loadInput.Trim();
            if (code.Length == 0) { Toast("Paste a save code first."); return; }
            var preview = SaveCodec.FromCode(code);
            if (preview == null) { Toast("That code didn't work. Check that you copied all of it."); return; }
            Modal("Load this save?", 250, b =>
            {
                Ui.Text(new Rect(b.x, b.y, b.width, 110),
                    $"{preview.heroes.Count} heroes · campaign {preview.cleared}/{GameData.TotalStages} · {Ui.Fmt(preview.gold)} gold" +
                    (string.IsNullOrEmpty(preview.playerName) ? "" : $"\nPlayer: {preview.playerName}") +
                    "\n\nThis replaces the progress on this device.", 14, Palette.Text, FontStyle.Normal, TextAnchor.UpperCenter, true);
                if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width / 2 - 5, 44), "Cancel", Ui.Kind.Secondary)) OpenSettings();
                if (Ui.Button(new Rect(b.x + b.width / 2 + 5, b.yMax - 46, b.width / 2 - 5, 44), "Load"))
                {
                    if (ImportSaveCode(code)) { _loadInput = ""; CloseModal(); Toast("Save loaded"); }
                    else Toast("That code didn't work. Check that you copied all of it.");
                }
            });
        }
    }
}
