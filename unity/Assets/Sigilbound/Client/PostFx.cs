// URP post-processing built in code: ACES tone mapping (as the web), bloom on bright glows
// (post.mjs threshold 0.88), and a per-arena colour grade translated from postfx2.mjs LUT_PRESETS
// (temperature/tint, saturation, contrast, split toning). Quality tiers: Low has no post-processing,
// Medium grades without bloom, High and Ultra grade with bloom (as post.mjs).
using UnityEngine;
#if SB_URP
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;
#endif

namespace Sigilbound.Client
{
    public static class PostFx
    {
        // postfx2.mjs LUT_PRESETS (temperature, tint, saturation, contrast, shadowHue, shadowAmount,
        // highlightHue, highlightAmount, splitBalance), by scenery theme.
        sealed class Grade { public float Temp, Tint, Sat = 1, Contrast, ShHue = 220, ShAmt, HiHue = 40, HiAmt, Balance; }
        static readonly Grade[] Themes =
        {
            new Grade { Temp = 0.12f, ShHue = 235, ShAmt = 0.10f, HiHue = 32, HiAmt = 0.10f, Contrast = 0.10f, Sat = 1.03f },  // dusk forest
            new Grade { Temp = -0.06f, ShHue = 195, ShAmt = 0.12f, HiHue = 35, HiAmt = 0.07f, Contrast = 0.08f },              // teal shore
            new Grade { Temp = 0.10f, ShHue = 215, ShAmt = 0.09f, HiHue = 30, HiAmt = 0.10f, Contrast = 0.12f, Sat = 0.98f },  // red badlands
            new Grade { Tint = -0.06f, ShHue = 165, ShAmt = 0.12f, HiHue = 58, HiAmt = 0.06f, Contrast = 0.06f, Sat = 0.94f }, // green marsh
            new Grade { Temp = 0.10f, ShHue = 260, ShAmt = 0.09f, HiHue = 45, HiAmt = 0.14f, Contrast = 0.10f },               // gold ruins
            new Grade { ShHue = 275, ShAmt = 0.09f, HiHue = 335, HiAmt = 0.06f, Contrast = 0.05f, Sat = 1.03f },               // blossom forest
            new Grade { Temp = -0.20f, ShHue = 225, ShAmt = 0.16f, HiHue = 200, HiAmt = 0.05f, Contrast = 0.09f, Sat = 0.88f },// moonlit shore
            new Grade { ShHue = 268, ShAmt = 0.14f, HiHue = 340, HiAmt = 0.07f, Contrast = 0.11f },                            // amethyst badlands
            new Grade { ShHue = 182, ShAmt = 0.15f, HiHue = 175, HiAmt = 0.05f, Contrast = 0.09f, Sat = 0.96f },               // glow marsh
            new Grade { Temp = 0.18f, ShHue = 200, ShAmt = 0.07f, HiHue = 26, HiAmt = 0.16f, Contrast = 0.15f },               // burning ruins
        };
        static readonly Grade Titan = new Grade { Temp = 0.14f, ShHue = 350, ShAmt = 0.12f, HiHue = 28, HiAmt = 0.13f, Contrast = 0.17f, Sat = 1.02f };
        static readonly Grade Neutral = new Grade();

#if SB_URP
        static Volume _volume; static Bloom _bloom; static ColorAdjustments _color; static WhiteBalance _wb; static SplitToning _split;
        static Camera _cam; static int _tier = 2;

        static void Ensure()
        {
            if (_volume != null) return;
            var go = new GameObject("PostFx"); Object.DontDestroyOnLoad(go);
            _volume = go.AddComponent<Volume>();
            _volume.isGlobal = true; _volume.priority = 10;
            var profile = ScriptableObject.CreateInstance<VolumeProfile>();
            _volume.sharedProfile = profile;
            profile.Add<Tonemapping>(true).mode.Override(TonemappingMode.ACES);
            _bloom = profile.Add<Bloom>(true);
            _bloom.threshold.Override(0.88f); _bloom.scatter.Override(0.65f); _bloom.intensity.Override(0.8f); _bloom.highQualityFiltering.Override(false);
            _color = profile.Add<ColorAdjustments>(true);
            _wb = profile.Add<WhiteBalance>(true);
            _split = profile.Add<SplitToning>(true);
        }
#endif

        public static void Init(Camera cam)
        {
#if SB_URP
            _cam = cam; Ensure(); SetTier(_tier);
#endif
        }

        // Tiers 0 Low .. 3 Ultra: Low no post at all, Medium grade only, High/Ultra grade + bloom.
        public static void SetTier(int tier)
        {
#if SB_URP
            _tier = tier;
            if (_cam != null) { var data = _cam.GetUniversalAdditionalCameraData(); if (data != null) data.renderPostProcessing = tier >= 1; }
            if (_bloom != null) { _bloom.active = tier >= 2; _bloom.intensity.Override(tier >= 3 ? 0.9f : 0.8f); _bloom.highQualityFiltering.Override(tier >= 3); }
#endif
        }

        // Battle arena grade (postfx2 lutPresetForChapter: chapter % 10 themes, the Titan caldera).
        public static void SetArena(int chapter, bool titan, bool battle)
        {
#if SB_URP
            Ensure();
            var g = !battle ? Neutral : titan ? Titan : Themes[((chapter % 10) + 10) % 10];
            _wb.temperature.Override(g.Temp * 60f); _wb.tint.Override(g.Tint * 60f);
            _color.saturation.Override((g.Sat - 1) * 100f); _color.contrast.Override(g.Contrast * 100f);
            _split.shadows.Override(Toned(g.ShHue, g.ShAmt)); _split.highlights.Override(Toned(g.HiHue, g.HiAmt)); _split.balance.Override(g.Balance * 100f);
#endif
        }
        // SplitToning colours: grey is neutral; push toward the hue by the preset's amount.
        static Color Toned(float hue, float amount) => Color.Lerp(Color.grey, Color.HSVToRGB(hue / 360f, 1f, 1f), Mathf.Clamp01(amount * 2.5f));
    }
}
