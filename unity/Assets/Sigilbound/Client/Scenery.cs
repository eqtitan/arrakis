// Battle arenas after game3d/scenery.mjs: the ten chapter themes (same colours, scaled like the web
// rig), a two-tone ground with a worn patch around the rune circle and a winding dirt path, water or
// lava where the theme has them, scatter (grass tufts, rocks, trees with themed leaves, crystals,
// mushrooms, badland strata), dark silhouettes on the horizon, and drifting motes (leaves, spray,
// dust, fireflies, sparks, petals, embers). Everything is built in code, deterministic per chapter.
using System.Collections.Generic;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public static class Scenery
    {
        sealed class Theme
        {
            public string Name, Grass, Grass2, Worn, Hill, Rock, Bark, Tuft, Cloth, Sil, Water, Motes, MoteColor; public string[] Leaves, Strata; public bool Crystals, Mushrooms;
        }
        // scenery.mjs THEMES and TITAN_THEME.
        static readonly Theme[] Themes =
        {
            new Theme { Name = "dusk forest", Grass = "#4f6a2a", Grass2 = "#6f7432", Worn = "#8a6844", Hill = "#41582a", Rock = "#7d746a", Bark = "#4e3726", Leaves = new[] { "#3c6a26", "#557a2a", "#a8702a", "#b8522a" }, Tuft = "#5f7a2c", Cloth = "#7a2a22", Sil = "#2e2c46", Motes = "leaves", MoteColor = "#e08a3a" },
            new Theme { Name = "teal shore", Grass = "#c2a87e", Grass2 = "#b39b72", Worn = "#8c7a5e", Hill = "#a8956a", Rock = "#6a7078", Bark = "#9a8a76", Leaves = new[] { "#4a6a3a", "#5a7a40" }, Tuft = "#8f9a52", Water = "#1f5f6c", Cloth = "#d8d0b8", Sil = "#24404e", Motes = "spray", MoteColor = "#e8f6ff" },
            new Theme { Name = "red badlands", Grass = "#94503a", Grass2 = "#ad6844", Worn = "#c09070", Hill = "#8a4632", Rock = "#a0553a", Bark = "#5e4636", Strata = new[] { "#8a4430", "#b06a46", "#6e3426", "#c4885a" }, Tuft = "#857040", Cloth = "#d0a040", Sil = "#44201f", Motes = "dust", MoteColor = "#ffc890" },
            new Theme { Name = "green marsh", Grass = "#3a5630", Grass2 = "#4f6236", Worn = "#6e5a40", Hill = "#34502e", Rock = "#58605a", Bark = "#433a30", Leaves = new[] { "#4a5a30" }, Tuft = "#7a8a44", Water = "#22402f", Cloth = "#5a4a30", Sil = "#223c36", Motes = "fireflies", MoteColor = "#d8ff7a" },
            new Theme { Name = "gold ruins", Grass = "#58652f", Grass2 = "#76763c", Worn = "#8e8474", Hill = "#4c5a2c", Rock = "#a49a88", Bark = "#5a4636", Leaves = new[] { "#4c682c", "#667a32" }, Tuft = "#6a7a34", Cloth = "#7a2a4a", Sil = "#36304c", Motes = "sparks", MoteColor = "#ffd27a", Crystals = true },
            new Theme { Name = "blossom forest", Grass = "#557636", Grass2 = "#748646", Worn = "#977660", Hill = "#4a6a34", Rock = "#8a8088", Bark = "#4a3036", Leaves = new[] { "#e89ac0", "#f0b0cc", "#d880aa", "#f8cade" }, Tuft = "#6a8a3c", Cloth = "#5a3a7a", Sil = "#463858", Motes = "petals", MoteColor = "#ffc0dc" },
            new Theme { Name = "moonlit shore", Grass = "#a39c8c", Grass2 = "#958e80", Worn = "#77705f", Hill = "#8a8474", Rock = "#5c6272", Bark = "#8a8478", Leaves = new[] { "#3a5a4a" }, Tuft = "#6a7a5a", Water = "#1a3658", Cloth = "#c8d0e0", Sil = "#1a2642", Motes = "spray", MoteColor = "#cfe2ff" },
            new Theme { Name = "amethyst badlands", Grass = "#5e4e6c", Grass2 = "#6f5c80", Worn = "#9584a6", Hill = "#54466a", Rock = "#5e4c70", Bark = "#4a3c4e", Strata = new[] { "#56466c", "#6f5c86", "#463a5a", "#88729e" }, Tuft = "#6a5a7a", Cloth = "#3a2a5a", Sil = "#221a36", Motes = "sparks", MoteColor = "#c890ff", Crystals = true },
            new Theme { Name = "glow marsh", Grass = "#2c4846", Grass2 = "#385850", Worn = "#5e586c", Hill = "#284242", Rock = "#4a5460", Bark = "#38384a", Leaves = new[] { "#2a4a4a" }, Tuft = "#4a7a6a", Water = "#123040", Cloth = "#2a3a5a", Sil = "#122838", Motes = "fireflies", MoteColor = "#80e8ff", Mushrooms = true },
            new Theme { Name = "burning ruins", Grass = "#665834", Grass2 = "#7a6238", Worn = "#8a7a6a", Hill = "#5a4a30", Rock = "#7a6e64", Bark = "#4a3a2e", Leaves = new[] { "#5a5a2a", "#7a5a26" }, Tuft = "#7a6a3a", Cloth = "#6a1a1a", Sil = "#381410", Motes = "embers", MoteColor = "#ff8a3a", Crystals = true },
        };
        static readonly Theme TitanTheme = new Theme { Name = "titan caldera", Grass = "#3a3436", Grass2 = "#463e3e", Worn = "#6a625e", Hill = "#332e30", Rock = "#2e2a2e", Bark = "#2a2222", Tuft = "#3a3030", Cloth = "#5a1a10", Sil = "#1e0c0a", Motes = "embers", MoteColor = "#ff7a2a" };
        public static string ThemeName(int chapter, bool titan) => titan ? TitanTheme.Name : Themes[((chapter % 10) + 10) % 10].Name;

        const float AG = 0.42f, AP = 0.55f; // the web's albedo scaling for its bright rig
        static Color D(string hex, float k) { var c = Palette.Hex(hex) * k; c.a = 1; return c; }

        // Builds the arena under `root`. scale: scatter density (quality tier).
        public static void Build(Transform root, int chapter, bool titan, float density, Color fog)
        {
            var th = titan ? TitanTheme : Themes[((chapter % 10) + 10) % 10];
            var rng = new System.Random(titan ? 1337 : 101 + chapter * 7);
            float R(float a, float b) => a + (float)rng.NextDouble() * (b - a);

            // ---- ground: two tones, worn patch around the circle, dirt path ----
            var ground = GameObject.CreatePrimitive(PrimitiveType.Plane);
            Object.Destroy(ground.GetComponent<Collider>());
            ground.name = "Ground"; ground.transform.SetParent(root, false);
            ground.transform.localScale = new Vector3(9, 1, 9);
            var gm = Materials.Lit(Color.white, 0, 0.08f);
            gm = new Material(gm) { mainTexture = GroundTexture(th, chapter) };
            if (gm.HasProperty("_BaseMap")) gm.SetTexture("_BaseMap", gm.mainTexture);
            ground.GetComponent<Renderer>().sharedMaterial = gm;
            ground.GetComponent<Renderer>().receiveShadows = true;

            // ---- water / lava beyond the far side ----
            if (th.Water != null || titan)
            {
                var w = GameObject.CreatePrimitive(PrimitiveType.Plane);
                Object.Destroy(w.GetComponent<Collider>());
                w.name = titan ? "Lava" : "Water"; w.transform.SetParent(root, false);
                w.transform.localPosition = new Vector3(0, titan ? 0.02f : 0.015f, titan ? 16 : 18); w.transform.localScale = new Vector3(6, 1, 1.4f);
                w.GetComponent<Renderer>().sharedMaterial = titan ? Materials.Glow(Palette.Hex("#3a0a04"), Palette.Hex("#ff5a10"), 1.6f) : Materials.Lit(D(th.Water, 0.9f), 0.2f, 0.92f);
                w.AddComponent<SceneryWave>().Lava = titan;
            }

            // ---- scatter (kept off the arena ellipse and the camera side) ----
            bool Clear(float x, float z) => Mathf.Pow(x / 6.2f, 2) + Mathf.Pow((z - 0.6f) / 5.6f, 2) < 1 || z < -7;
            int n = Mathf.RoundToInt(70 * density);
            var rock = Materials.Lit(D(th.Rock, AP), 0, 0.15f); var bark = Materials.Lit(D(th.Bark, AP), 0, 0.1f); var tuft = Materials.Lit(D(th.Tuft, AG * 1.1f), 0, 0.1f);
            for (int i = 0; i < n; i++)
            {
                float a = R(0, Mathf.PI * 2), r = R(6.5f, 22f), x = Mathf.Cos(a) * r, z = Mathf.Sin(a) * r * 0.9f + 4f;
                if (Clear(x, z)) continue;
                float s = R(0.6f, 1.6f), pick = R(0, 1);
                if (th.Leaves != null && pick < 0.35f) Tree(root, new Vector3(x, 0, z), s, bark, th.Leaves, R);
                else if (pick < 0.6f) Prop(root, PrimitiveType.Sphere, new Vector3(x, 0.25f * s, z), new Vector3(1.1f, 0.6f, 0.9f) * s, rock, new Vector3(R(-20, 20), R(0, 360), R(-20, 20)));
                else if (th.Strata != null && pick < 0.8f) Mesa(root, new Vector3(x, 0, z), s, th.Strata, R);
                else if (th.Crystals && pick < 0.75f) Prop(root, PrimitiveType.Cube, new Vector3(x, 0.6f * s, z), new Vector3(0.3f, 1.2f, 0.3f) * s, Materials.Glow(Palette.Hex(th.MoteColor) * 0.4f, Palette.Hex(th.MoteColor), 1.2f), new Vector3(R(-15, 15), 45, R(-15, 15)));
                else if (th.Mushrooms && pick < 0.8f) { Prop(root, PrimitiveType.Cylinder, new Vector3(x, 0.2f * s, z), new Vector3(0.12f, 0.2f, 0.12f) * s, bark); Prop(root, PrimitiveType.Sphere, new Vector3(x, 0.42f * s, z), new Vector3(0.6f, 0.25f, 0.6f) * s, Materials.Glow(Palette.Hex("#103038"), Palette.Hex(th.MoteColor), 0.9f)); }
                else for (int k = 0; k < 3; k++) Prop(root, PrimitiveType.Capsule, new Vector3(x + R(-0.3f, 0.3f), 0.15f, z + R(-0.3f, 0.3f)), new Vector3(0.05f, 0.18f, 0.05f) * s, tuft, new Vector3(R(-25, 25), 0, R(-25, 25)));
            }
            // grass tufts near the arena edge (drawn small; they read as texture)
            for (int i = 0; i < Mathf.RoundToInt(60 * density); i++)
            {
                float a = R(0, Mathf.PI * 2), k = R(1.05f, 1.5f); float x = Mathf.Sin(a) * 6.2f * k, z = 0.6f + Mathf.Cos(a) * 5.6f * k;
                if (z < -6.5f) continue;
                Prop(root, PrimitiveType.Capsule, new Vector3(x, 0.08f, z), new Vector3(0.04f, 0.1f, 0.04f), tuft, new Vector3(R(-30, 30), 0, R(-30, 30)));
            }

            // ---- horizon silhouettes ----
            var sil = Materials.Unlit(Color.Lerp(Palette.Hex(th.Sil), fog, 0.35f));
            for (int i = 0; i < 18; i++)
            {
                float a = Mathf.Lerp(-1.25f, 1.25f, i / 17f) + R(-0.04f, 0.04f), dist = R(34, 44);
                var p = new Vector3(Mathf.Sin(a) * dist, 0, Mathf.Cos(a) * dist + 6);
                var q = GameObject.CreatePrimitive(PrimitiveType.Quad); Object.Destroy(q.GetComponent<Collider>());
                q.transform.SetParent(root, false);
                float h = R(5, th.Strata != null ? 9 : 14), w = R(7, 12);
                q.transform.position = p + Vector3.up * h * 0.45f; q.transform.localScale = new Vector3(w, h, 1);
                q.transform.rotation = Quaternion.LookRotation(p - new Vector3(0, 0, -6));
                q.GetComponent<Renderer>().sharedMaterial = sil;
                q.GetComponent<Renderer>().shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            }

            // ---- drifting motes ----
            Motes(root, th, density);
        }

        static void Prop(Transform root, PrimitiveType t, Vector3 pos, Vector3 scale, Material m, Vector3? euler = null)
        {
            var go = GameObject.CreatePrimitive(t);
            Object.Destroy(go.GetComponent<Collider>());
            go.transform.SetParent(root, false);
            go.transform.localPosition = pos; go.transform.localScale = scale;
            if (euler.HasValue) go.transform.localEulerAngles = euler.Value;
            go.GetComponent<Renderer>().sharedMaterial = m;
        }

        static void Tree(Transform root, Vector3 p, float s, Material bark, string[] leaves, System.Func<float, float, float> R)
        {
            Prop(root, PrimitiveType.Cylinder, p + Vector3.up * 0.9f * s, new Vector3(0.22f, 0.9f, 0.22f) * s, bark);
            for (int i = 0; i < 4; i++)
            {
                var c = D(leaves[(int)R(0, leaves.Length - 0.01f)], AP);
                Prop(root, PrimitiveType.Sphere, p + new Vector3(R(-0.5f, 0.5f), R(1.8f, 2.6f), R(-0.5f, 0.5f)) * s, Vector3.one * R(0.9f, 1.4f) * s, Materials.Lit(c, 0, 0.1f));
            }
        }

        static void Mesa(Transform root, Vector3 p, float s, string[] strata, System.Func<float, float, float> R)
        {
            float y = 0;
            for (int i = 0; i < 4; i++)
            {
                float h = R(0.3f, 0.6f) * s, w = (1.6f - i * 0.25f) * s;
                Prop(root, PrimitiveType.Cylinder, p + Vector3.up * (y + h / 2), new Vector3(w, h / 2, w * 0.8f), Materials.Lit(D(strata[i % strata.Length], AP), 0, 0.1f));
                y += h;
            }
        }

        // Ground texture: noise between the two grass tones, the worn ellipse around the rune circle,
        // and the dirt path from the camera side into the background (scenery.mjs terrain).
        static Texture2D GroundTexture(Theme th, int chapter)
        {
            const int N = 256; const float extent = 45f; // the plane is 90 m wide
            var t = new Texture2D(N, N, TextureFormat.RGBA32, true) { wrapMode = TextureWrapMode.Clamp, filterMode = FilterMode.Bilinear };
            Color g1 = D(th.Grass, AG), g2 = D(th.Grass2, AG), worn = D(th.Worn, AG * 0.9f);
            var px = new Color[N * N];
            float[][] path = { new[] { 0.6f, -14f }, new[] { 0.4f, -5f }, new[] { 0f, 0.5f }, new[] { -0.8f, 6.5f }, new[] { -2.6f, 13f }, new[] { -1.2f, 21f }, new[] { 2.6f, 30f }, new[] { 4.5f, 42f } };
            float PathDist(float x, float z)
            {
                float best = 1e9f;
                for (int i = 0; i < path.Length - 1; i++)
                {
                    float ax = path[i][0], az = path[i][1], dx = path[i + 1][0] - ax, dz = path[i + 1][1] - az;
                    float u = Mathf.Clamp01(((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz));
                    best = Mathf.Min(best, Mathf.Sqrt(Mathf.Pow(x - ax - dx * u, 2) + Mathf.Pow(z - az - dz * u, 2)));
                }
                return best;
            }
            for (int y = 0; y < N; y++)
                for (int x = 0; x < N; x++)
                {
                    // Unity's Plane maps u to -X and v to -Z; invert so world (wx, wz) lines up.
                    float wx = -(x / (N - 1f) * 2 - 1) * extent, wz = -(y / (N - 1f) * 2 - 1) * extent;
                    float n = Mathf.PerlinNoise(wx * 0.18f + chapter * 3.1f, wz * 0.18f) * 0.65f + Mathf.PerlinNoise(wx * 0.9f, wz * 0.9f + chapter) * 0.35f;
                    var c = Color.Lerp(g1, g2, n);
                    float e = Mathf.Sqrt(Mathf.Pow(wx / 5.4f, 2) + Mathf.Pow((wz - 0.6f) / 5.0f, 2));
                    float wornK = Mathf.Clamp01((1.25f - e) / 0.5f) * (0.75f + 0.25f * n);
                    float pathK = Mathf.Clamp01((1.3f - PathDist(wx, wz)) / 0.8f) * 0.8f;
                    c = Color.Lerp(c, worn, Mathf.Max(wornK, pathK));
                    c *= 0.9f + 0.2f * Mathf.PerlinNoise(wx * 3f, wz * 3f);
                    c.a = 1;
                    px[y * N + x] = c;
                }
            t.SetPixels(px); t.Apply(true);
            return t;
        }

        static void Motes(Transform root, Theme th, float density)
        {
            var go = new GameObject("Motes"); go.transform.SetParent(root, false); go.transform.localPosition = new Vector3(0, 2, 2);
            var ps = go.AddComponent<ParticleSystem>();
            ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            var main = ps.main; main.loop = true; main.startLifetime = 8; main.maxParticles = Mathf.RoundToInt(160 * density); main.simulationSpace = ParticleSystemSimulationSpace.World;
            var c = Palette.Hex(th.MoteColor);
            bool glowy = th.Motes == "fireflies" || th.Motes == "sparks" || th.Motes == "embers";
            main.startColor = new ParticleSystem.MinMaxGradient(c, Color.Lerp(c, Color.white, 0.3f));
            main.startSize = th.Motes == "leaves" || th.Motes == "petals" ? new ParticleSystem.MinMaxCurve(0.08f, 0.16f) : new ParticleSystem.MinMaxCurve(0.03f, 0.08f);
            main.startSpeed = 0.2f;
            main.gravityModifier = th.Motes == "embers" || th.Motes == "sparks" ? -0.02f : th.Motes == "leaves" || th.Motes == "petals" ? 0.01f : 0f;
            var em = ps.emission; em.rateOverTime = 20 * density;
            var sh = ps.shape; sh.shapeType = ParticleSystemShapeType.Box; sh.scale = new Vector3(16, 4, 12);
            var noise = ps.noise; noise.enabled = true; noise.strength = th.Motes == "fireflies" ? 0.6f : 0.35f; noise.frequency = 0.3f;
            var col = ps.colorOverLifetime; col.enabled = true;
            var g = new Gradient(); g.SetKeys(new[] { new GradientColorKey(Color.white, 0), new GradientColorKey(Color.white, 1) }, new[] { new GradientAlphaKey(0, 0), new GradientAlphaKey(glowy ? 1 : 0.8f, 0.2f), new GradientAlphaKey(glowy ? 1 : 0.8f, 0.8f), new GradientAlphaKey(0, 1) });
            col.color = g;
            var r = go.GetComponent<ParticleSystemRenderer>();
            var add = Shader.Find("Legacy Shaders/Particles/Additive");
            r.sharedMaterial = glowy && add != null ? new Material(add) : Materials.Unlit(Color.white);
            ps.Play();
        }
    }

    // Gentle swell on water, slow pulse on lava.
    public sealed class SceneryWave : MonoBehaviour
    {
        public bool Lava; Vector3 _p;
        void Start() { _p = transform.localPosition; }
        void Update() { transform.localPosition = _p + Vector3.up * Mathf.Sin(Time.time * (Lava ? 0.8f : 1.2f)) * (Lava ? 0.01f : 0.03f); }
    }
}
