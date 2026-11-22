// Runtime materials. Prefers the URP Lit templates the editor setup puts in
// Resources/SigilMaterials (so their shader variants are in the build), and falls back to the
// pipeline's default material (what a primitive gets) when they're missing. Works with URP
// (_BaseColor/_Smoothness) and the built-in pipeline (_Color/_Glossiness).
using System.Collections.Generic;
using UnityEngine;

namespace Sigilbound.Client
{
    public static class Materials
    {
        static Material _lit, _glow, _unlit, _sprite, _invisible;
        static readonly Dictionary<string, Material> _cache = new Dictionary<string, Material>();

        static Material DefaultLit()
        {
            var tmp = GameObject.CreatePrimitive(PrimitiveType.Cube);
            var m = tmp.GetComponent<Renderer>().sharedMaterial; // the active pipeline's default material
            Object.Destroy(tmp);
            return m;
        }
        static Material LitTemplate => _lit != null ? _lit : (_lit = Resources.Load<Material>("SigilMaterials/HeroLit") ?? DefaultLit());
        static Material GlowTemplate => _glow != null ? _glow : (_glow = Resources.Load<Material>("SigilMaterials/HeroGlow") ?? LitTemplate);
        static Material SpriteTemplate => _sprite != null ? _sprite : (_sprite = new Material(Shader.Find("Sprites/Default")));
        // Sprites/Default: unlit, alpha-blended, always in builds, and drawn by URP as well.
        static Material UnlitTemplate => _unlit != null ? _unlit : (_unlit = SpriteTemplate);

        static void SetColor(Material m, Color c)
        {
            if (m.HasProperty("_BaseColor")) m.SetColor("_BaseColor", c);
            if (m.HasProperty("_Color")) m.SetColor("_Color", c);
        }
        public static Color BaseColor(Material m) =>
            m == null ? Color.grey : m.HasProperty("_BaseColor") ? m.GetColor("_BaseColor") : m.HasProperty("_Color") ? m.GetColor("_Color") : Color.grey;

        // Shared opaque material (cached per colour/finish so units share draw state).
        public static Material Lit(Color c, float metallic = 0f, float smoothness = 0.2f)
        {
            string key = $"lit{ColorUtility.ToHtmlStringRGBA(c)}{metallic:0.00}{smoothness:0.00}";
            if (_cache.TryGetValue(key, out var m) && m != null) return m;
            m = new Material(LitTemplate);
            SetColor(m, c);
            if (m.HasProperty("_Metallic")) m.SetFloat("_Metallic", metallic);
            if (m.HasProperty("_Smoothness")) m.SetFloat("_Smoothness", smoothness);
            if (m.HasProperty("_Glossiness")) m.SetFloat("_Glossiness", smoothness);
            _cache[key] = m;
            return m;
        }

        // Emissive (glowing eyes, the Titan's maw, gems).
        public static Material Glow(Color baseColor, Color emission, float intensity)
        {
            string key = $"glow{ColorUtility.ToHtmlStringRGBA(baseColor)}{ColorUtility.ToHtmlStringRGBA(emission)}{intensity:0.0}";
            if (_cache.TryGetValue(key, out var m) && m != null) return m;
            m = new Material(GlowTemplate);
            SetColor(m, baseColor);
            if (m.HasProperty("_EmissionColor")) { m.EnableKeyword("_EMISSION"); m.SetColor("_EmissionColor", emission * intensity); }
            _cache[key] = m;
            return m;
        }

        // Unlit, alpha-blended (effects, rings, sky). A new instance each call: callers tweak them.
        public static Material Unlit(Color c)
        {
            var m = new Material(UnlitTemplate);
            SetColor(m, c);
            return m;
        }

        public static Material Invisible() => _invisible != null ? _invisible : (_invisible = Unlit(new Color(0, 0, 0, 0)));
    }
}
