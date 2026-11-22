// Loads the CC0 Quaternius hero models (StreamingAssets/Models/*.glb, prepared by
// unity/Tools~/models) at runtime with glTFast, recolours them per hero from Core.Looks (the web
// game's art.js LOOKS), and plays their clips (idle, attack, cast, hit, death) with the legacy
// Animation component. If glTFast isn't installed or a model fails to load, CharacterView keeps
// its placeholder figure.
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEngine;
using UnityEngine.Networking;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public enum Clip { Idle, Attack, Cast, Hit, Death }

    // A loaded, recoloured model instance with its clips.
    public sealed class HeroModel
    {
        public GameObject Root;
        public Animation Anim;
        public float Height;
        readonly Dictionary<Clip, string> _clips = new Dictionary<Clip, string>();

        public HeroModel(GameObject root, Animation anim, float height, bool titan)
        {
            Root = root; Anim = anim; Height = height;
            if (anim == null) return;
            // Clip names come from the glTF ("CharacterArmature|Idle_Sword"); match on the part after '|'.
            var names = new List<string>();
            foreach (AnimationState s in anim) names.Add(s.name);
            string Find(params string[] wanted)
            {
                foreach (var w in wanted)
                {
                    var hit = names.FirstOrDefault(n => n == w || n.EndsWith("|" + w, StringComparison.Ordinal));
                    if (hit != null) return hit;
                }
                return null;
            }
            // Same choices as three3d.mjs ANIMS.
            _clips[Clip.Idle] = titan ? Find("Idle") : Find("Idle_Sword", "Idle");
            _clips[Clip.Attack] = titan ? Find("Punch", "Weapon") : Find("Sword_Slash", "Punch_Right", "Punch");
            _clips[Clip.Cast] = titan ? Find("Weapon", "Punch") : Find("Gun_Shoot", "Interact", "Weapon", "Punch");
            _clips[Clip.Hit] = Find("HitRecieve", "HitReact");
            _clips[Clip.Death] = Find("Death");
            foreach (AnimationState s in anim)
            {
                bool loop = s.name == _clips[Clip.Idle];
                s.wrapMode = loop ? WrapMode.Loop : WrapMode.ClampForever;
                s.layer = loop ? 0 : 1;
            }
            Play(Clip.Idle);
        }

        public bool Has(Clip c) => _clips.TryGetValue(c, out var n) && n != null;
        public float Length(Clip c) => Has(c) && Anim[_clips[c]] != null ? Anim[_clips[c]].length : 0.4f;

        public void Play(Clip c)
        {
            if (Anim == null || !Has(c)) return;
            var name = _clips[c];
            if (c == Clip.Idle) { Anim.CrossFade(name, 0.2f); return; }
            Anim[name].time = 0;
            Anim.CrossFade(name, 0.08f);
            if (c != Clip.Death && Has(Clip.Idle)) Anim.CrossFadeQueued(_clips[Clip.Idle], 0.2f, QueueMode.CompleteOthers);
        }
    }

    public static class HeroModels
    {
        public static bool Available
        {
            get
            {
#if SB_GLTFAST
                return true;
#else
                return false;
#endif
            }
        }

#if SB_GLTFAST
        static readonly Dictionary<string, byte[]> _bytes = new Dictionary<string, byte[]>();
        static readonly HashSet<string> _failed = new HashSet<string>();

        // Reads a GLB from StreamingAssets (a jar: URL on Android, so it goes through UnityWebRequest).
        static IEnumerator ReadBytes(string file, Action<byte[]> done)
        {
            if (_bytes.TryGetValue(file, out var cached)) { done(cached); yield break; }
            var path = Path.Combine(Application.streamingAssetsPath, "Models", file);
            byte[] data = null;
            if (path.Contains("://"))
            {
                using (var req = UnityWebRequest.Get(path))
                {
                    yield return req.SendWebRequest();
                    if (req.result == UnityWebRequest.Result.Success) data = req.downloadHandler.data;
                }
            }
            else if (File.Exists(path)) data = File.ReadAllBytes(path);
            if (data != null) _bytes[file] = data;
            done(data);
        }

        // Builds a recoloured model under `parent`. Calls done(null) if it can't.
        public static IEnumerator Build(Unit unit, Transform parent, Action<HeroModel> done)
        {
            bool titan = unit.Titan;
            var look = titan ? null : Looks.Of(unit.Template.Id);
            string baseModel = titan ? "titan" : look.Base;
            string file = Looks.Files[baseModel];
            if (_failed.Contains(file)) { done(null); yield break; }
            byte[] bytes = null;
            yield return ReadBytes(file, b => bytes = b);
            if (bytes == null) { _failed.Add(file); done(null); yield break; }

            var gltf = new GLTFast.GltfImport(null, null, new SigilMaterialGenerator());
            var settings = new GLTFast.ImportSettings { AnimationMethod = GLTFast.AnimationMethod.Legacy, GenerateMipMaps = false };
            var load = gltf.LoadGltfBinary(bytes, null, settings);
            while (!load.IsCompleted) yield return null;
            if (load.IsFaulted || !load.Result) { Debug.LogWarning($"Sigilbound: couldn't load {file}"); _failed.Add(file); gltf.Dispose(); done(null); yield break; }
            if (parent == null) { gltf.Dispose(); yield break; } // the unit was removed while loading
            var holder = new GameObject("Model");
            holder.transform.SetParent(parent, false);
            var inst = gltf.InstantiateMainSceneAsync(holder.transform);
            while (!inst.IsCompleted) yield return null;
            if (inst.IsFaulted || !inst.Result || holder == null) { if (holder) UnityEngine.Object.Destroy(holder); done(null); yield break; }

            Recolour(holder, baseModel, look, !unit.Ally && !unit.Rival && !titan, unit.El);
            // Normalize height: base models are ~1.8 m; heroes stand about 2 units tall (three3d.mjs).
            var bounds = BoundsOf(holder);
            float targetHead = titan ? 3.6f : 1.85f;
            float h = (float)(look?.Height ?? 1);
            float k = bounds.size.y > 0.01f ? targetHead / bounds.size.y * h : 1f;
            holder.transform.localScale = Vector3.one * k;
            foreach (var r in holder.GetComponentsInChildren<Renderer>())
            {
                r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
                if (r is SkinnedMeshRenderer smr) smr.updateWhenOffscreen = true; // skinned bounds can lag behind big swings
            }
            done(new HeroModel(holder, holder.GetComponentInChildren<Animation>(), (titan ? 4.7f : 2.3f) * h, titan));
        }

        static Bounds BoundsOf(GameObject go)
        {
            var rs = go.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0) return new Bounds(go.transform.position, Vector3.one * 1.8f);
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            return b;
        }

        // Applies the hero's colour roles (three3d.mjs buildRigged recolour), hides hoods/hair/crowns
        // that the hero doesn't wear, and gives the Titan its glowing element maw.
        static void Recolour(GameObject root, string baseModel, HeroLook look, bool hollow, Element el)
        {
            var colors = look == null ? Looks.TitanColors : Looks.RoleColors(look, hollow);
            var hide = new HashSet<string>(look?.Hide ?? new string[0]);
            bool showCrown = look != null && look.Gear == "crown" && !hide.Contains("crown");
            string headMesh = Looks.HeadMesh.TryGetValue(baseModel, out var hm) ? hm : null;
            var elColor = Palette.Element(el);
            foreach (var r in root.GetComponentsInChildren<Renderer>(true))
            {
                bool isHead = headMesh != null && IsUnder(r.transform, headMesh);
                var mats = r.sharedMaterials;
                for (int i = 0; i < mats.Length; i++)
                {
                    if (mats[i] == null) continue;
                    string role = Looks.RoleOf(baseModel, isHead, StripName(mats[i].name));
                    var m = mats[i];
                    if ((role == "crown" && !showCrown) || role == "tongue" || (role != null && hide.Contains(role)))
                    {
                        mats[i] = Materials.Invisible(); continue;
                    }
                    if (role == "maw") { mats[i] = Materials.Glow(elColor * 0.8f, elColor, 1.8f); continue; }
                    if (role == "eye" && (hollow || (look != null && look.Glow != null))) { var c = Palette.Hex(colors["eye"]); mats[i] = Materials.Glow(c, c, 3f); continue; }
                    Color col = role != null && colors.TryGetValue(role, out var hex) ? Palette.Hex(hex) : hollow ? Color.Lerp(Materials.BaseColor(m), Palette.Hex("#2e1f33"), 0.5f) : Materials.BaseColor(m);
                    bool shiny = (role == "armor" && baseModel == "monarch") || role == "trim" || role == "blade" || role == "crown";
                    mats[i] = Materials.Lit(col, look == null ? 0f : shiny ? 0.3f : 0f, look == null ? 0.05f : shiny ? 0.5f : 0.2f);
                }
                r.sharedMaterials = mats;
            }
        }
        static string StripName(string n) => n.Replace(" (Instance)", "");
        static bool IsUnder(Transform t, string name) { for (var p = t; p != null; p = p.parent) if (p.name == name) return true; return false; }

        // glTFast material generator that makes our URP materials directly (so glTFast's own shader
        // graphs aren't needed in the build); colours are replaced by Recolour right after.
        sealed class SigilMaterialGenerator : GLTFast.Materials.IMaterialGenerator
        {
            public Material GetDefaultMaterial(bool pointsSupport = false) => Materials.Lit(Color.grey, 0, 0.2f);
            public Material GenerateMaterial(GLTFast.Schema.MaterialBase gltfMaterial, GLTFast.IGltfReadable gltf, bool pointsSupport = false)
            {
                var c = gltfMaterial.PbrMetallicRoughness != null ? gltfMaterial.PbrMetallicRoughness.BaseColor : Color.white;
                var m = Materials.Lit(c.gamma, 0, 0.2f); // glTF factors are linear; material colours are sRGB
                m.name = gltfMaterial.name;
                return m;
            }
            public void SetLogger(GLTFast.Logging.ICodeLogger logger) { }
        }
#else
        public static IEnumerator Build(Unit unit, Transform parent, Action<HeroModel> done) { done(null); yield break; }
#endif
    }
}
