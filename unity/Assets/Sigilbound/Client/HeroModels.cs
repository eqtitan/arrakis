// Loads the CC0 Quaternius hero models (StreamingAssets/Models/*.glb, prepared by
// unity/Tools~/models) at runtime with glTFast and builds each hero as the web game does
// (three3d.mjs buildRigged): borrowed body parts, shaved/bald heads, recolours from art.js LOOKS,
// height, the code-built kit with equipped-gear visuals (Core.KitBuilder + KitAssembler),
// proportions, and the clips (base clips plus the retargeted CC0 UAL spell/hit/death clips),
// chosen per hero (Core.AnimStyle). If glTFast isn't installed or a model fails to load,
// CharacterView keeps its placeholder figure.
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
    // A built hero with its animation controller (three3d.mjs makeAnim).
    public sealed class HeroModel
    {
        public GameObject Root;
        public Animation Anim;
        public float Height;
        public AnimStyle Style;
        readonly Dictionary<string, string> _names = new Dictionary<string, string>(); // short name -> state name
        int _strikeN;

        public HeroModel(GameObject root, Animation anim, float height, AnimStyle style)
        {
            Root = root; Anim = anim; Height = height; Style = style;
            if (anim != null) foreach (AnimationState s in anim) { var shortName = s.name.Split('|').Last(); if (!_names.ContainsKey(shortName)) _names[shortName] = s.name; }
            Idle(0);
        }

        public bool Has(string name) => name != null && _names.ContainsKey(name);
        string IdleName => Has(Style.Idle) ? Style.Idle : _names.Keys.FirstOrDefault(n => n.StartsWith("Idle", StringComparison.Ordinal));
        public float Length(string name) => Has(name) ? Anim[_names[name]].length : 0;

        // Crossfade to `name`: loops when loop; otherwise plays once and returns to idle (or holds
        // the last frame with clamp, e.g. deaths).
        public AnimationState Play(string name, bool loop = false, float fade = 0.18f, float speed = 1f, bool clamp = false)
        {
            if (Anim == null || !Has(name)) return null;
            var st = Anim[_names[name]];
            st.wrapMode = loop ? WrapMode.Loop : clamp ? WrapMode.ClampForever : WrapMode.Once;
            st.speed = speed;
            st.time = 0;
            Anim.CrossFade(st.name, fade);
            if (!loop && !clamp && IdleName != null && IdleName != name) Anim.CrossFadeQueued(_names[IdleName], 0.22f, QueueMode.CompleteOthers).wrapMode = WrapMode.Loop;
            return st;
        }
        public void Idle(float fade = 0.25f) { var n = IdleName; if (n != null) Play(n, true, fade, Style.Titan ? 0.7f : 1f); }
        public float Strike()
        {
            var list = Style.Strike.Where(Has).ToArray();
            var n = list.Length > 0 ? list[_strikeN++ % list.Length] : "Sword_Slash";
            Play(n, false, 0.1f); return Length(n);
        }
        public float Cast(bool support)
        {
            var n = support && Has(Style.Support) ? Style.Support : Has(Style.Cast) ? Style.Cast : "Gun_Shoot";
            Play(n, false, 0.12f); return Length(n);
        }
        public void Hit(bool big)
        {
            if (Style.Titan) { Play(Has("HitReact") ? "HitReact" : "Idle", false, 0.1f); return; }
            var list = big ? Style.BigHit : Style.Hit;
            Play(list.FirstOrDefault(Has) ?? "HitRecieve", false, 0.08f);
        }
        public bool Roll() => Has("Roll") && Play("Roll", false, 0.1f, 1.5f) != null;
        public bool Die() { var n = Style.Death.FirstOrDefault(Has); return n != null && Play(n, false, 0.12f, 1f, true) != null; }
        public void Win() => Play(Style.Win, true, 0.25f);
        public void Run(bool back = false) => Play(back && Has("Run_Back") ? "Run_Back" : "Run", true, 0.15f, back ? 1.5f : 1.4f);
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
        sealed class Library
        {
            public GLTFast.GltfImport Gltf; public Transform Prototype; public float HeadY = 1.55f;
            public List<AnimationClip> Ual; public bool Failed;
        }
        static readonly Dictionary<string, Library> _libs = new Dictionary<string, Library>();
        static readonly HashSet<string> _loading = new HashSet<string>();
        static Dictionary<string, List<UalClip>> _ualData; static bool _ualTried;
        static GameObject _libRoot;

        static IEnumerator ReadBytes(string file, Action<byte[]> done)
        {
            var path = Path.Combine(Application.streamingAssetsPath, "Models", file);
            byte[] data = null;
            if (path.Contains("://")) // Android: inside the APK
            {
                using (var req = UnityWebRequest.Get(path))
                {
                    yield return req.SendWebRequest();
                    if (req.result == UnityWebRequest.Result.Success) data = req.downloadHandler.data;
                }
            }
            else if (File.Exists(path)) data = File.ReadAllBytes(path);
            done(data);
        }

        // Loads a base model once: the parsed glTF (instantiated per unit) and a hidden prototype
        // instance that other heroes borrow body parts from.
        static IEnumerator EnsureLibrary(string baseModel)
        {
            while (_loading.Contains(baseModel)) yield return null;
            if (_libs.ContainsKey(baseModel)) yield break;
            _loading.Add(baseModel);
            var lib = new Library();
            byte[] bytes = null;
            yield return ReadBytes(Looks.Files[baseModel], b => bytes = b);
            if (bytes != null)
            {
                lib.Gltf = new GLTFast.GltfImport(null, null, new SigilMaterialGenerator());
                var load = lib.Gltf.LoadGltfBinary(bytes, null, new GLTFast.ImportSettings { AnimationMethod = GLTFast.AnimationMethod.Legacy, GenerateMipMaps = false });
                while (!load.IsCompleted) yield return null;
                if (load.IsFaulted || !load.Result) lib.Failed = true;
                else
                {
                    if (_libRoot == null) { _libRoot = new GameObject("HeroLibrary"); UnityEngine.Object.DontDestroyOnLoad(_libRoot); _libRoot.SetActive(false); }
                    var proto = new GameObject(baseModel).transform; proto.SetParent(_libRoot.transform, false);
                    var inst = lib.Gltf.InstantiateMainSceneAsync(proto);
                    while (!inst.IsCompleted) yield return null;
                    lib.Prototype = proto;
                    var head = BodyShaper.Find(proto, "Head");
                    if (head != null) lib.HeadY = proto.InverseTransformPoint(head.position).y;
                }
            }
            else lib.Failed = true;
            if (lib.Failed) Debug.LogWarning($"Sigilbound: couldn't load {Looks.Files[baseModel]}");
            _libs[baseModel] = lib;
            _loading.Remove(baseModel);
        }

        static IEnumerator EnsureUal()
        {
            if (_ualTried) yield break;
            _ualTried = true;
            byte[] bytes = null;
            var path = Path.Combine(Application.streamingAssetsPath, "Models", "anims_ual.json");
            if (path.Contains("://")) { using (var req = UnityWebRequest.Get(path)) { yield return req.SendWebRequest(); if (req.result == UnityWebRequest.Result.Success) bytes = req.downloadHandler.data; } }
            else if (File.Exists(path)) bytes = File.ReadAllBytes(path);
            if (bytes == null) yield break;
            try { _ualData = UalClips.Parse(System.Text.Encoding.UTF8.GetString(bytes)); }
            catch (Exception e) { Debug.LogWarning("Sigilbound: anims_ual.json unreadable: " + e.Message); }
        }

        // Legacy clips from the retargeted UAL data, with paths relative to the Animation component.
        static List<AnimationClip> BuildUal(string baseModel, Transform animRoot)
        {
            var src = UalClips.SourceFor(baseModel);
            if (_ualData == null || src == null || !_ualData.TryGetValue(src, out var clips)) return new List<AnimationClip>();
            var paths = new Dictionary<string, string>();
            void Index(Transform t, string p) { foreach (Transform c in t) { var cp = p.Length == 0 ? c.name : p + "/" + c.name; if (!paths.ContainsKey(c.name)) paths[c.name] = cp; Index(c, cp); } }
            Index(animRoot, "");
            var outp = new List<AnimationClip>();
            foreach (var c in clips)
            {
                var clip = new AnimationClip { name = c.Name, legacy = true, frameRate = (float)c.Fps };
                foreach (var tr in c.Rotations)
                {
                    if (!paths.TryGetValue(tr.Key, out var path)) continue;
                    var cx = new AnimationCurve(); var cy = new AnimationCurve(); var cz = new AnimationCurve(); var cw = new AnimationCurve();
                    Quaternion prev = Quaternion.identity;
                    for (int i = 0; i < c.Frames; i++)
                    {
                        float t = i / (float)c.Fps; var v = tr.Value;
                        var q = new Quaternion(v[i * 4], -v[i * 4 + 1], -v[i * 4 + 2], v[i * 4 + 3]); // three.js -> Unity (mirror X)
                        if (i > 0 && Quaternion.Dot(prev, q) < 0) q = new Quaternion(-q.x, -q.y, -q.z, -q.w);
                        prev = q;
                        cx.AddKey(t, q.x); cy.AddKey(t, q.y); cz.AddKey(t, q.z); cw.AddKey(t, q.w);
                    }
                    clip.SetCurve(path, typeof(Transform), "localRotation.x", cx); clip.SetCurve(path, typeof(Transform), "localRotation.y", cy);
                    clip.SetCurve(path, typeof(Transform), "localRotation.z", cz); clip.SetCurve(path, typeof(Transform), "localRotation.w", cw);
                }
                foreach (var tr in c.Positions)
                {
                    if (!paths.TryGetValue(tr.Key, out var path)) continue;
                    var px = new AnimationCurve(); var py = new AnimationCurve(); var pz = new AnimationCurve();
                    for (int i = 0; i < c.Frames; i++) { float t = i / (float)c.Fps; var v = tr.Value; px.AddKey(t, -v[i * 3]); py.AddKey(t, v[i * 3 + 1]); pz.AddKey(t, v[i * 3 + 2]); }
                    clip.SetCurve(path, typeof(Transform), "localPosition.x", px); clip.SetCurve(path, typeof(Transform), "localPosition.y", py); clip.SetCurve(path, typeof(Transform), "localPosition.z", pz);
                }
                clip.EnsureQuaternionContinuity();
                outp.Add(clip);
            }
            return outp;
        }

        // Builds a hero under `parent`. Calls done(null) if it can't.
        public static IEnumerator Build(Unit unit, GearLook gear, Transform parent, Action<HeroModel> done)
        {
            bool titan = unit.Titan;
            string id = unit.Template.Id;
            var look = titan ? null : Looks.Of(id);
            string baseModel = titan ? "titan" : look.Base;
            var body = titan ? new BodySpec() : HeroArt.Body(id);
            var kit = titan ? new Dictionary<string, object>() : HeroArt.Kit(id);
            bool hollow = !unit.Ally && !unit.Rival && !titan;
            var parts = new Dictionary<string, string>(body.Parts);
            if (kit.TryGetValue("robe", out var robe) && (robe as string) == "long" && !parts.ContainsKey("legs")) parts["legs"] = "none"; // a long robe replaces the legs

            yield return EnsureLibrary(baseModel);
            foreach (var src in parts.Values.Where(v => v != "none" && v != baseModel).Distinct()) yield return EnsureLibrary(src);
            yield return EnsureUal();
            var lib = _libs[baseModel];
            if (lib.Failed || parent == null) { done(null); yield break; }

            var holder = new GameObject("Model").transform;
            holder.SetParent(parent, false);
            var inst = lib.Gltf.InstantiateMainSceneAsync(holder);
            while (!inst.IsCompleted) yield return null;
            if (inst.IsFaulted || !inst.Result || holder == null) { if (holder) UnityEngine.Object.Destroy(holder.gameObject); done(null); yield break; }

            var bones = new Dictionary<string, Transform>();
            foreach (var t in holder.GetComponentsInChildren<Transform>(true)) if (!bones.ContainsKey(t.name)) bones[t.name] = t;
            if (!titan)
            {
                BodyShaper.TagParts(holder, baseModel);
                var protos = _libs.Where(kv => kv.Value.Prototype != null).ToDictionary(kv => kv.Key, kv => kv.Value.Prototype);
                BodyShaper.SwapParts(holder, baseModel, parts, bones, protos);
                // The code-built sword replaces the hooded model's own; packs go under capes and backpieces.
                if (bones.TryGetValue("Sword", out var sword)) sword.gameObject.SetActive(false);
                bool packOff = kit.ContainsKey("cape") || (kit.TryGetValue("pack", out var pk) && pk is bool pb && !pb) || kit.ContainsKey("back");
                if (packOff && bones.TryGetValue("Backpack", out var pack)) pack.gameObject.SetActive(false);
            }
            // Rest positions for the character shader's detail textures (before anything moves).
            foreach (var smr0 in holder.GetComponentsInChildren<SkinnedMeshRenderer>(true)) CharacterLook.WriteRestPositions(smr0, holder);
            Recolour(holder, baseModel, look, body, hollow, unit.El);

            // Height: head at 1.85 m (3.6 for the Titan) times the hero's build (three3d.mjs).
            float k = (titan ? 3.6f : 1.85f) / Mathf.Max(0.1f, lib.HeadY) * (float)body.H;
            holder.localScale = Vector3.one * k;
            foreach (var r in holder.GetComponentsInChildren<Renderer>())
            {
                r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
                if (r is SkinnedMeshRenderer smr) smr.updateWhenOffscreen = true;
            }

            // Fresnel rim in the element colour (red for Hollow enemies), as applyCharacterLook.
            var rim = hollow ? Palette.Hex("#ff3355") : Palette.Element(unit.El);
            if (!titan)
            {
                float hipY = bones.TryGetValue("Hips", out var hips) ? holder.InverseTransformPoint(hips.position).y : 0.9f;
                var sockets = KitBuilder.Build(id, hollow, gear, hipY);
                KitAssembler.Attach(holder, bones, sockets, $"{id}|{(hollow ? 1 : 0)}|{baseModel}|{gear?.Key ?? "-"}|{string.Join(",", parts.Select(p => p.Key + p.Value))}", rim);
                BodyShaper.ShapeBody(holder, bones, body);
            }
            else KitAssembler.Attach(holder, bones, KitBuilder.BuildTitan(unit.El), $"titan|{unit.El}", Color.black); // stone horns, brow, tusks, shards

            var anim = holder.GetComponentInChildren<Animation>();
            if (anim != null && !titan)
            {
                if (lib.Ual == null) lib.Ual = BuildUal(baseModel, anim.transform);
                foreach (var c in lib.Ual) anim.AddClip(c, c.name);
            }
            done(new HeroModel(holder.gameObject, anim, (titan ? 4.7f : 2.3f) * (float)body.H, titan ? AnimStyle.TitanStyle : AnimStyle.For(id)));
        }

        // Applies the hero's colour roles (three3d.mjs buildRigged recolour), trims hair for shaved
        // or bald heroes, hides hoods/hair/crowns the hero doesn't wear, and gives the Titan its
        // glowing element maw.
        static void Recolour(Transform root, string baseModel, HeroLook look, BodySpec body, bool hollow, Element el)
        {
            var colors = look == null ? Looks.TitanColors : Looks.RoleColors(look, hollow);
            var hide = new HashSet<string>(body.Hide ?? new string[0]);
            bool showCrown = look != null && look.Gear == "crown" && !hide.Contains("crown");
            var elColor = Palette.Element(el);
            foreach (var r in root.GetComponentsInChildren<Renderer>(true))
            {
                if (r.name.StartsWith("Kit", StringComparison.Ordinal)) continue;
                string srcBase = baseModel, kind = "";
                for (var p = r.transform; p != null && p != root; p = p.parent) { var tag = p.GetComponent<BodyShaper.PartTag>(); if (tag != null) { srcBase = tag.SrcBase; kind = tag.Kind; break; } }
                bool isHead = kind == "head";
                var mats = r.sharedMaterials;
                if (look != null && isHead && srcBase != "hooded" && (body.Shave || body.Bald) && r is SkinnedMeshRenderer smr)
                    for (int i = 0; i < mats.Length; i++)
                        if (mats[i] != null && Looks.RoleOf(srcBase, true, StripName(mats[i].name)) == "hair") BodyShaper.TrimHair(smr, i, body.Bald ? "beard" : "scalp");
                for (int i = 0; i < mats.Length; i++)
                {
                    if (mats[i] == null) continue;
                    string role = Looks.RoleOf(srcBase, isHead, StripName(mats[i].name));
                    var m = mats[i];
                    if ((role == "crown" && !showCrown) || role == "tongue" || (role != null && (hide.Contains(role) || hide.Contains(kind + ":" + role)))) { mats[i] = Materials.Invisible(); continue; }
                    if (role == "maw") { mats[i] = Materials.Glow(elColor * 0.3f, elColor, 1.8f); continue; }
                    if (role == "eye" && (hollow || (look != null && look.Glow != null))) { var c = Palette.Hex(colors["eye"]); mats[i] = Materials.Glow(c, c, 3f); continue; }
                    Color col = role != null && colors.TryGetValue(role, out var hex) ? Palette.Hex(hex) : hollow ? Color.Lerp(Materials.BaseColor(m), Palette.Hex("#2e1f33"), 0.5f) : Materials.BaseColor(m);
                    bool shiny = (role == "armor" && srcBase == "monarch") || role == "trim" || role == "blade" || role == "crown";
                    if (look == null)
                    {
                        // Titan: dark basalt with glowing seams in the day's element (crackMaterial on Yeti_Main/Secondary).
                        bool seams = role == "stone" || role == "stoneDark";
                        mats[i] = CharacterLook.ShaderAvailable ? CharacterLook.For(col, seams ? "stone" : "default", Color.black, seams, elColor) : Materials.Lit(col, 0f, 0.05f);
                    }
                    else if (CharacterLook.ShaderAvailable)
                        mats[i] = CharacterLook.For(col, CharacterLook.RoleFromGame(role, srcBase, StripName(m.name)), hollow ? Palette.Hex("#ff3355") : elColor);
                    else mats[i] = Materials.Lit(col, shiny ? 0.3f : 0f, shiny ? 0.5f : 0.2f);
                }
                r.sharedMaterials = mats;
            }
        }
        static string StripName(string n) => n.Replace(" (Instance)", "");

        // glTFast material generator that makes our URP materials directly (so glTFast's own shader
        // graphs aren't needed in the build); colours are replaced by Recolour right after.
        sealed class SigilMaterialGenerator : GLTFast.Materials.IMaterialGenerator
        {
            public Material GetDefaultMaterial(bool pointsSupport = false) => Materials.Lit(Color.grey, 0, 0.2f);
            public Material GenerateMaterial(GLTFast.Schema.MaterialBase gltfMaterial, GLTFast.IGltfReadable gltf, bool pointsSupport = false)
            {
                var c = gltfMaterial.PbrMetallicRoughness != null ? gltfMaterial.PbrMetallicRoughness.BaseColor : Color.white;
                var m = new Material(Materials.Lit(c.gamma, 0, 0.2f)) { name = gltfMaterial.name }; // own instance: the name carries the role
                return m;
            }
            public void SetLogger(GLTFast.Logging.ICodeLogger logger) { }
        }
#else
        public static IEnumerator Build(Unit unit, GearLook gear, Transform parent, Action<HeroModel> done) { done(null); yield break; }
#endif
    }
}
