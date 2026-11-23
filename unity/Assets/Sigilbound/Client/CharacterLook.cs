// Character materials: the "Sigilbound/Character" shader (Shaders/SigilCharacter.shader) with
// per-role finishes from shading.mjs ROLE_PARAMS / materials.mjs ROLES and code-generated detail
// textures (Core.DetailTextures, cached, 128-512 px by quality tier). Falls back to URP Lit
// (colour, metallic, smoothness) if the shader isn't available or supported on the device.
using System.Collections.Generic;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public static class CharacterLook
    {
        // role -> (wrap, sheen, metallic, smoothness, rim scale, ramp scale, detail tiles/metre, detail strength)
        sealed class RoleFinish { public float Wrap, Sheen, Metal, Smooth, Rim = 1, Ramp = 1, Tiles = 3, Detail = 0.5f; }
        static readonly Dictionary<string, RoleFinish> Roles = new Dictionary<string, RoleFinish>
        {
            ["default"] = new RoleFinish { Wrap = 0.18f, Metal = 0, Smooth = 0.3f, Tiles = 3, Detail = 0 },
            ["skin"] = new RoleFinish { Wrap = 0.3f, Metal = 0, Smooth = 0.4f, Rim = 0.75f, Ramp = 0.45f, Tiles = 7, Detail = 0.15f },
            ["hair"] = new RoleFinish { Wrap = 0.28f, Metal = 0, Smooth = 0.45f, Tiles = 9, Detail = 0.45f },
            ["cloth"] = new RoleFinish { Wrap = 0.3f, Sheen = 0.4f, Metal = 0, Smooth = 0.12f, Tiles = 7, Detail = 0.55f },
            ["leather"] = new RoleFinish { Wrap = 0.2f, Sheen = 0.15f, Metal = 0, Smooth = 0.45f, Rim = 0.9f, Tiles = 5, Detail = 0.55f },
            ["metal"] = new RoleFinish { Wrap = 0.06f, Metal = 0.88f, Smooth = 0.7f, Rim = 0.75f, Ramp = 0.7f, Tiles = 3, Detail = 0.45f },
            ["gold"] = new RoleFinish { Wrap = 0.06f, Metal = 1f, Smooth = 0.74f, Rim = 0.75f, Ramp = 0.7f, Tiles = 4, Detail = 0.4f },
            ["wood"] = new RoleFinish { Wrap = 0.2f, Metal = 0, Smooth = 0.28f, Tiles = 3, Detail = 0.6f },
            ["bone"] = new RoleFinish { Wrap = 0.25f, Metal = 0, Smooth = 0.45f, Tiles = 4, Detail = 0.3f },
            ["stone"] = new RoleFinish { Wrap = 0.15f, Metal = 0, Smooth = 0.1f, Rim = 0.6f, Tiles = 1.6f, Detail = 0.7f },
        };
        const float BaseRim = 0.7f, BaseRamp = 0.35f; // shading.mjs DEFAULTS

        static Material _template; static bool _checked;
        public static bool ShaderAvailable
        {
            get
            {
                if (!_checked)
                {
                    _checked = true;
                    _template = Resources.Load<Material>("SigilMaterials/Character");
                    if (_template == null) { var sh = Shader.Find("Sigilbound/Character"); if (sh != null) _template = new Material(sh); }
                    if (_template != null && (_template.shader == null || !_template.shader.isSupported)) _template = null;
                }
                return _template != null;
            }
        }

        static readonly Dictionary<string, Texture2D> _tex = new Dictionary<string, Texture2D>();
        public static int TextureSize => Quality.I == null ? 256 : new[] { 128, 256, 256, 512 }[Quality.I.Tier];
        public static Texture2D DetailTexture(string kind)
        {
            if (kind == null) return null;
            string key = kind + TextureSize;
            if (_tex.TryGetValue(key, out var t) && t != null) return t;
            var maps = DetailTextures.Generate(kind, TextureSize);
            int S = maps.Size;
            t = new Texture2D(S, S, TextureFormat.RGBA32, true, true) { wrapMode = TextureWrapMode.Repeat, filterMode = FilterMode.Trilinear, anisoLevel = 2, name = "Detail_" + kind };
            var px = new Color32[S * S];
            for (int i = 0; i < px.Length; i++) px[i] = new Color32((byte)(maps.A[i] * 255), (byte)(maps.H[i] * 255), (byte)(maps.R[i] * 255), 255);
            t.SetPixels32(px); t.Apply(true, true);
            _tex[key] = t;
            return t;
        }

        static readonly Dictionary<string, Material> _cache = new Dictionary<string, Material>();

        // A character material for a colour role (shading role names as in shading.mjs).
        public static Material For(Color color, string role, Color rim, bool crack = false, Color? crackColor = null)
        {
            if (!Roles.TryGetValue(role ?? "default", out var R)) R = Roles["default"];
            if (!ShaderAvailable)
                return crack ? Materials.Glow(color, (crackColor ?? Color.black) * 0.25f, 1f) : Materials.Lit(color, R.Metal, R.Smooth);
            string key = $"{role}|{ColorUtility.ToHtmlStringRGB(color)}|{ColorUtility.ToHtmlStringRGB(rim)}|{crack}|{(crackColor.HasValue ? ColorUtility.ToHtmlStringRGB(crackColor.Value) : "")}|{TextureSize}";
            if (_cache.TryGetValue(key, out var m) && m != null) return m;
            m = new Material(_template) { name = "Char_" + role };
            m.SetColor("_BaseColor", color);
            var tex = DetailTexture(DetailTextures.KindForRole(role));
            if (tex != null) m.SetTexture("_DetailTex", tex);
            m.SetFloat("_DetailScale", R.Tiles); m.SetFloat("_DetailStrength", tex != null ? R.Detail : 0);
            m.SetFloat("_Metallic", R.Metal); m.SetFloat("_Smoothness", R.Smooth);
            m.SetFloat("_Wrap", R.Wrap); m.SetFloat("_Sheen", R.Sheen);
            m.SetFloat("_Ramp", Quality.I != null && Quality.I.Tier == 0 ? 0 : BaseRamp * R.Ramp); // Low: no painterly ramp (Q0)
            m.SetColor("_RimColor", rim); m.SetFloat("_Rim", BaseRim * R.Rim);
            if (crack) { m.SetColor("_CrackColor", (crackColor ?? Color.red) * 0.75f); m.SetFloat("_CrackScale", 3.2f); m.SetFloat("_CrackPulse", 1f); SeamPulse.Register(m); }
            _cache[key] = m;
            return m;
        }

        // shading.mjs roleFromGame(): body colour roles -> shading roles.
        public static string RoleFromGame(string gameRole, string baseModel, string matName)
        {
            switch (gameRole)
            {
                case "skin": return "skin";
                case "hair": case "brow": return "hair";
                case "crown": return "gold";
                case "trim": case "blade": return "metal";
                case "accent": return matName != null && matName.ToLowerInvariant().Contains("gold") ? "gold" : "leather";
                case "armor": return baseModel == "monarch" ? "metal" : baseModel == "hooded" ? "leather" : "cloth";
                case "boot": case "wood": return "leather";
                case "cloth": case "pants": case "hood": return "cloth";
                case "stone": case "stoneDark": return "stone";
                default: return "default";
            }
        }

        public static string RoleFromFinish(KitFinish f) => f switch
        {
            KitFinish.Metal => "metal", KitFinish.LeatherMetal => "leather", KitFinish.Leather => "leather", KitFinish.Cloth => "cloth",
            KitFinish.Wood => "wood", KitFinish.Gold => "gold", KitFinish.Hair => "hair", KitFinish.Bone => "bone", KitFinish.Stone => "stone", _ => "default",
        };

        // Rest positions in model metres (TEXCOORD1) so detail textures stick to the body while it
        // animates. At the rest pose every bone gives the same mapping: world = bone * bindpose * v.
        static readonly HashSet<int> _restDone = new HashSet<int>();
        public static void WriteRestPositions(SkinnedMeshRenderer r, Transform modelRoot)
        {
            var mesh = r.sharedMesh;
            if (mesh == null || !mesh.isReadable || r.bones.Length == 0 || mesh.bindposes.Length == 0 || !_restDone.Add(mesh.GetInstanceID())) return;
            int bi = System.Array.FindIndex(r.bones, b => b != null);
            if (bi < 0) return;
            var m = modelRoot.worldToLocalMatrix * r.bones[bi].localToWorldMatrix * mesh.bindposes[bi];
            var v = mesh.vertices; var rest = new Vector3[v.Length];
            for (int i = 0; i < v.Length; i++) rest[i] = m.MultiplyPoint3x4(v[i]);
            mesh.SetUVs(1, rest);
        }
    }

    // Pulses the crack seams (crackMaterial: 0.75 + sin(t·1.6)·0.25), shared per material.
    public sealed class SeamPulse : MonoBehaviour
    {
        static readonly List<Material> _mats = new List<Material>(); static SeamPulse _i;
        public static void Register(Material m)
        {
            _mats.Add(m);
            if (_i == null) { var go = new GameObject("SeamPulse"); DontDestroyOnLoad(go); _i = go.AddComponent<SeamPulse>(); }
        }
        void Update() { float p = 0.75f + Mathf.Sin(Time.time * 1.6f) * 0.25f; foreach (var m in _mats) if (m != null) m.SetFloat("_CrackPulse", p); }
    }
}
