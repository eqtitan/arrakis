// Frame-rate cap and graphics quality tiers (Settings: Auto / Ultra / High / Medium / Low, like the
// web game's Graphics quality). Each tier maps to URP settings on the active pipeline asset:
// render scale, MSAA, shadow distance and resolution, plus the sun's shadows. Auto starts from a
// device guess and steps down when the frame rate can't hold the cap (and back up when it's easy),
// up to High; Ultra is manual only, as on the web.
using UnityEngine;
using UnityEngine.Rendering;
#if SB_URP
using UnityEngine.Rendering.Universal;
#endif

namespace Sigilbound.Client
{
    public sealed class Quality : MonoBehaviour
    {
        public static readonly string[] Tiers = { "Low", "Medium", "High", "Ultra" };
        public static Quality I;
        public string Choice = "auto";    // auto | Ultra | High | Medium | Low (saved in settings.quality)
        public int Tier { get; private set; } = 2;
        public int FpsCap = 60;
        public Light Sun;

        float _acc; int _frames; float _settle; float _noUpUntil;

        public static Quality Create(GameObject host, string choice, int fpsCap)
        {
            var q = host.AddComponent<Quality>();
            I = q;
            q.Choice = string.IsNullOrEmpty(choice) ? "auto" : choice;
            q.FpsCap = fpsCap == 30 ? 30 : 60;
            q.Tier = q.Choice == "auto" ? GuessTier() : System.Array.IndexOf(Tiers, q.Choice) is int i && i >= 0 ? i : 2;
            q.Apply();
            return q;
        }

        public string TierName => Tiers[Tier];

        // Phones with plenty of memory and cores (S26+ class) start on High; the Note20 class on Medium.
        static int GuessTier()
        {
            int mem = SystemInfo.systemMemorySize, cores = SystemInfo.processorCount;
            if (mem >= 7000 && cores >= 8) return 2;
            if (mem >= 3500) return 1;
            return 0;
        }

        public void Set(string choice, int fpsCap)
        {
            Choice = choice; FpsCap = fpsCap == 30 ? 30 : 60;
            if (choice != "auto") { int i = System.Array.IndexOf(Tiers, choice); Tier = i >= 0 ? i : 2; }
            Apply();
        }

        public void Apply()
        {
            // Low always runs at 30 fps (as on the web); otherwise the player's cap.
            QualitySettings.vSyncCount = 0;
            Application.targetFrameRate = Tier == 0 ? 30 : FpsCap;
            if (Sun != null) Sun.shadows = Tier == 0 ? LightShadows.None : Tier >= 2 ? LightShadows.Soft : LightShadows.Hard;
#if SB_URP
            if (GraphicsSettings.currentRenderPipeline is UniversalRenderPipelineAsset urp)
            {
                urp.renderScale = new[] { 0.6f, 0.75f, 0.9f, 1f }[Tier];
                urp.msaaSampleCount = new[] { 1, 2, 2, 4 }[Tier];
                urp.shadowDistance = new[] { 0f, 16f, 22f, 28f }[Tier];
                urp.mainLightShadowmapResolution = new[] { 512, 1024, 2048, 4096 }[Tier];
            }
#else
            QualitySettings.shadowDistance = new[] { 0f, 16f, 22f, 28f }[Tier];
            QualitySettings.antiAliasing = new[] { 0, 2, 2, 4 }[Tier];
#endif
            SkillFx.I?.SetTier(Tier);
            PostFx.SetTier(Tier);
            _acc = 0; _frames = 0; _settle = 3f;
        }

        // Auto: average the frame rate over 4-second windows (after a settle period) and step.
        void Update()
        {
            if (Choice != "auto") return;
            if (_settle > 0) { _settle -= Time.unscaledDeltaTime; return; }
            _acc += Time.unscaledDeltaTime; _frames++;
            if (_acc < 4f) return;
            float fps = _frames / _acc;
            int target = Application.targetFrameRate;
            if (fps < target * 0.85f && Tier > 0) { Tier--; _noUpUntil = Time.unscaledTime + 60f; Apply(); }
            else if (fps > target * 0.97f && Tier < 2 && Time.unscaledTime > _noUpUntil) { Tier++; Apply(); }
            else { _acc = 0; _frames = 0; }
        }
    }
}
