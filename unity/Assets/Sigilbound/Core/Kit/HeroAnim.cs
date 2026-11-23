// Animation choices per hero (three3d.mjs styleOf / TITAN_STYLE) and the retargeted CC0 UAL
// clips (models/anims_ual.json), plus the three.js -> Unity conversion glTFast uses.
using System;
using System.Collections.Generic;
using System.Linq;

namespace Sigilbound.Core
{
    public sealed class AnimStyle
    {
        public string Idle; public string[] Strike; public string Cast, Support; public string[] Hit, BigHit, Death, Fidget; public string Win; public bool Titan;

        static readonly HashSet<string> Brawlers = new HashSet<string> { "odo", "kettle", "gorrum", "thrain" };
        static readonly HashSet<string> SmallFocus = new HashSet<string> { "candle", "mirror", "bell", "orb", "lantern" };

        public static AnimStyle For(string heroId)
        {
            string p = Looks.Of(heroId).Prop;
            return new AnimStyle
            {
                Idle = SmallFocus.Contains(p) ? "Idle_Neutral" : p == "bow" ? "Idle_Gun" : "Idle_Sword",
                Strike = Brawlers.Contains(heroId) ? new[] { "Punch_Right", "Punch_Left", "Kick_Right" } : p == "daggers" ? new[] { "Sword_Slash", "Punch_Left", "Kick_Left" }
                    : p == "spear" || p == "trident" ? new[] { "Sword_Slash", "Kick_Right" } : new[] { "Sword_Slash", "Sword_Slash", "Kick_Right" },
                Cast = p == "bow" ? "Gun_Shoot" : "Spell_Simple_Shoot", Support = "Spell_Simple_Enter",
                Hit = new[] { "Hit_Chest", "HitRecieve" }, BigHit = new[] { "Hit_Head", "HitRecieve_2" }, Death = new[] { "Death01", "Death" },
                Fidget = new[] { "Idle", "Idle_Neutral", "Interact" }, Win = "Wave",
            };
        }
        public static readonly AnimStyle TitanStyle = new AnimStyle
        {
            Idle = "Idle", Strike = new[] { "Punch", "Weapon", "Punch" }, Cast = "Punch", Support = "Yes", Hit = new[] { "HitReact" }, BigHit = new[] { "HitReact" },
            Death = new[] { "Death" }, Fidget = new[] { "No" }, Win = "Yes", Titan = true,
        };
    }

    public sealed class UalClip
    {
        public string Name; public double Fps; public int Frames;
        public readonly Dictionary<string, float[]> Rotations = new Dictionary<string, float[]>(); // bone -> xyzw per frame (three.js)
        public readonly Dictionary<string, float[]> Positions = new Dictionary<string, float[]>(); // bone -> xyz per frame (three.js)
        public double Length => (Frames - 1) / Fps;
    }

    public static class UalClips
    {
        // anims_ual.json: { "monarch": { clip: { fps, frames, tracks: { Bone: [xyzw...], BonePos: [xyz...] } } }, "hooded_adventurer": {...} }
        public static Dictionary<string, List<UalClip>> Parse(string json)
        {
            var root = (Dictionary<string, object>)Json.Parse(json);
            var outp = new Dictionary<string, List<UalClip>>();
            foreach (var src in root)
            {
                var list = new List<UalClip>();
                foreach (var kv in (Dictionary<string, object>)src.Value)
                {
                    var c = new UalClip { Name = kv.Key, Fps = Json.Num(kv.Value, "fps", 24), Frames = Json.Int(kv.Value, "frames") };
                    foreach (var t in Json.Obj(kv.Value, "tracks"))
                    {
                        var vals = ((List<object>)t.Value).Select(x => (float)(double)x).ToArray();
                        if (t.Key.EndsWith("Pos", StringComparison.Ordinal)) c.Positions[t.Key.Substring(0, t.Key.Length - 3)] = vals;
                        else c.Rotations[t.Key] = vals;
                    }
                    list.Add(c);
                }
                outp[src.Key] = list;
            }
            return outp;
        }

        // Which UAL source rig each base model uses (three3d.mjs preload): adventurer shares the monarch's skeleton.
        public static string SourceFor(string baseModel) => baseModel == "hooded" ? "hooded_adventurer" : baseModel == "titan" ? null : "monarch";
    }

    // glTF/three.js (right-handed) -> Unity (left-handed), as glTFast imports: mirror the X axis.
    public static class ThreeToUnity
    {
        public static V3 Vec(V3 v) => new V3(-v.X, v.Y, v.Z);
        public static Quat Rot(Quat q) => new Quat(q.X, -q.Y, -q.Z, q.W);
    }
}
