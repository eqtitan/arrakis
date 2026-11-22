// Per-hero looks for the 3D models: the LOOKS table from public/game/art.js plus each hero's base
// model, height and hidden parts from game3d/three3d.mjs (BASE, BODY), and the material-name ->
// colour-role mapping (ROLES) used to recolour the CC0 Quaternius models. roleColors() is ported
// with three.js colour management (mixes happen in linear space), so colours match the web.
// The table rows were generated from those files; keep them in sync when hero art changes.
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Sigilbound.Core
{
    public sealed class HeroLook
    {
        public string Skin, Hair, Style, Gear, Armor, Accent, Cloth, Pants, Trim, Boot, Hood, Prop, Beard, Glow;
        public bool Cape; public string CapeColor, Robe, RobeColor;
        public string Base; public double Height = 1; public string[] Hide = new string[0]; public bool Shave, Bald;
    }

    public static class Looks
    {
        public static readonly Dictionary<string, string> Skins = new Dictionary<string, string>
        {
            ["pale"] = "#f3d6c1", ["fair"] = "#e9c09f", ["tan"] = "#c99068", ["brown"] = "#9a6544", ["deep"] = "#6b412b", ["ash"] = "#b9b4c4", ["blue"] = "#8fb3d9",
        };

        // GLB file (StreamingAssets/Models) per base model.
        public static readonly Dictionary<string, string> Files = new Dictionary<string, string>
        {
            ["hooded"] = "hooded_adventurer.glb", ["adventurer"] = "adventurer.glb", ["monarch"] = "monarch.glb", ["titan"] = "yeti.glb",
        };

        // Material name -> colour role, per base model ("head:Black" = only on the head mesh).
        public static readonly Dictionary<string, Dictionary<string, string>> Roles = new Dictionary<string, Dictionary<string, string>>
        {
            ["hooded"] = new Dictionary<string, string> { ["DarkBrown"] = "armor", ["Black"] = "cloth", ["Brown"] = "cloth", ["LightBrown"] = "accent", ["Gold"] = "accent", ["Metal"] = "trim", ["Metal_Dark"] = "blade", ["Brown2"] = "wood", ["Skin"] = "skin",
                ["head:Black"] = "cloth", ["head:Brown"] = "eye", ["head:DarkBrown"] = "hood", ["White"] = "hair" },
            ["adventurer"] = new Dictionary<string, string> { ["LightGreen"] = "armor", ["Green"] = "cloth", ["Brown"] = "pants", ["Brown2"] = "pants", ["Black"] = "boot", ["Grey"] = "boot", ["Hair"] = "hair", ["Eyebrows"] = "hair", ["Gold"] = "accent", ["Skin"] = "skin", ["Eye"] = "eye" },
            ["monarch"] = new Dictionary<string, string> { ["Metal"] = "armor", ["Metal_Dark"] = "trim", ["Blue"] = "cloth", ["DarkBrown"] = "pants", ["Beige"] = "accent", ["Gold"] = "crown", ["Hair_White"] = "hair", ["Skin"] = "skin", ["Eye"] = "eye" },
            ["titan"] = new Dictionary<string, string> { ["Yeti_Main"] = "stone", ["Yeti_Secondary"] = "stoneDark", ["Eye_White"] = "socket", ["Eye_Black"] = "maw", ["Yeti_Teeth"] = "fang", ["Tongue"] = "tongue" },
        };
        // Mesh node names per base, to tell the head from the body ("head:" roles).
        public static readonly Dictionary<string, string> HeadMesh = new Dictionary<string, string> { ["monarch"] = "King_Head", ["hooded"] = "Medieval_Head", ["adventurer"] = "Adventurer_Head" };

        public static string RoleOf(string baseModel, bool isHead, string material)
        {
            if (material == null || !Roles.TryGetValue(baseModel, out var map)) return null;
            if (isHead && map.TryGetValue("head:" + material, out var hr)) return hr;
            return map.TryGetValue(material, out var r) ? r : null;
        }

        public static HeroLook Of(string heroId) => Table.TryGetValue(heroId ?? "", out var l) ? l : Table["brannoc"];
        public static readonly string[] Ranged = { "staff", "orb", "bell", "lantern", "candle", "mirror", "bow" };
        public static bool IsCaster(string heroId) => Array.IndexOf(Ranged, Of(heroId).Prop) >= 0;

        // ---------- colour maths (three.js Color with colour management) ----------
        static double ToLinear(double c) => c < 0.04045 ? c * 0.0773993808 : Math.Pow(c * 0.9478672986 + 0.0521327014, 2.4);
        static double ToSrgb(double c) => c < 0.0031308 ? c * 12.92 : 1.055 * Math.Pow(c, 0.41666) - 0.055;
        static double[] Lin(string hex)
        {
            int v = int.Parse(hex.TrimStart('#'), NumberStyles.HexNumber, CultureInfo.InvariantCulture);
            return new[] { ToLinear((v >> 16 & 255) / 255.0), ToLinear((v >> 8 & 255) / 255.0), ToLinear((v & 255) / 255.0) };
        }
        static string Hex(double[] lin)
        {
            int B(double c) => (int)Math.Max(0, Math.Min(255, ToSrgb(c) * 255)); // getHex() truncates (<<)
            return "#" + B(lin[0]).ToString("x2") + B(lin[1]).ToString("x2") + B(lin[2]).ToString("x2");
        }
        public static string Mix(string a, string b, double k) { var x = Lin(a); var y = Lin(b); return Hex(new[] { x[0] + (y[0] - x[0]) * k, x[1] + (y[1] - x[1]) * k, x[2] + (y[2] - x[2]) * k }); }
        public static string Mul(string a, double k) { var x = Lin(a); return Hex(new[] { x[0] * k, x[1] * k, x[2] * k }); }

        // roleColors(L, hollow) from three3d.mjs. Enemies ("Hollow") are tinted toward violet-grey.
        public static Dictionary<string, string> RoleColors(HeroLook L, bool hollow)
        {
            string T(string c) => hollow ? Mix(c, "#2e1f33", 0.5) : c;
            return new Dictionary<string, string>
            {
                ["armor"] = T(L.Armor), ["cloth"] = T(L.Cloth ?? Mul(L.Armor, 0.62)), ["pants"] = T(L.Pants ?? Mix(L.Cloth ?? L.Armor, "#2a2522", L.Cloth != null ? 0.35 : 0.6)),
                ["accent"] = T(L.Accent), ["trim"] = T(L.Trim ?? Mix(L.Accent, "#c8ccd4", 0.4)), ["blade"] = T("#c8d0dc"), ["wood"] = T("#6b4a29"), ["boot"] = T(L.Boot ?? "#2a1f1a"),
                ["hair"] = T(L.Hair), ["brow"] = T(Mul(L.Hair, 0.8)), ["hood"] = T(L.Hood ?? L.Armor), ["skin"] = T(Skins[L.Skin]), ["crown"] = T(L.Accent),
                ["eye"] = hollow ? "#ff2a2a" : L.Glow ?? "#1a141f",
            };
        }
        public static readonly Dictionary<string, string> TitanColors = new Dictionary<string, string>
        {
            ["stone"] = "#16130f", ["stoneDark"] = "#0c0a09", ["fang"] = "#0e0c0a", ["socket"] = "#040303", ["tongue"] = "#0a0606",
        };

        public static readonly Dictionary<string, HeroLook> Table = new Dictionary<string, HeroLook>
        {
            ["brannoc"] = new HeroLook { Skin = "tan", Hair = "#5a3a22", Style = "short", Gear = "bandana", Armor = "#4f7a34", Accent = "#d8b04a", Cloth = "#7a5232", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "spear", Beard = "stubble", Glow = null, Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "adventurer", Height = 1, Hide = new string[0], Shave = false, Bald = false },
            ["mira"] = new HeroLook { Skin = "fair", Hair = "#2f8f8f", Style = "ponytail", Gear = "none", Armor = "#3f7f9a", Accent = "#e8e0c8", Cloth = "#2a5a70", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "shield", Beard = null, Glow = null, Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "hooded", Height = 0.95, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["pell"] = new HeroLook { Skin = "pale", Hair = "#c8642a", Style = "messy", Gear = "none", Armor = "#8a4a2a", Accent = "#ffb347", Cloth = "#6a3420", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "candle", Beard = null, Glow = null, Cape = false, CapeColor = null, Robe = "short", RobeColor = "#8a4a2a", Base = "adventurer", Height = 0.9, Hide = new string[0], Shave = true, Bald = false },
            ["odo"] = new HeroLook { Skin = "brown", Hair = "#1e1610", Style = "bald", Gear = "none", Armor = "#4e3626", Accent = "#9ab84a", Cloth = "#6b7a3a", Pants = "#3a3026", Trim = null, Boot = null, Hood = null, Prop = "club", Beard = "full", Glow = null, Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "monarch", Height = 1.03, Hide = new string[0], Shave = false, Bald = true },
            ["wren"] = new HeroLook { Skin = "fair", Hair = "#e8e2d0", Style = "hood", Gear = "none", Armor = "#7a5a3e", Accent = "#ffc84a", Cloth = "#5c4330", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "lantern", Beard = null, Glow = null, Cape = false, CapeColor = null, Robe = "long", RobeColor = "#6e5038", Base = "hooded", Height = 0.94, Hide = new string[0], Shave = false, Bald = false },
            ["kettle"] = new HeroLook { Skin = "ash", Hair = "#2a2a30", Style = "long", Gear = "none", Armor = "#5a5560", Accent = "#9a5ae8", Cloth = "#2a2a30", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "hook", Beard = null, Glow = null, Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "adventurer", Height = 1.02, Hide = new string[0], Shave = true, Bald = false },
            ["ysolde"] = new HeroLook { Skin = "fair", Hair = "#c8281e", Style = "long", Gear = "circlet", Armor = "#5a1e1e", Accent = "#ff7a3a", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "whip", Beard = null, Glow = "#ffb347", Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "hooded", Height = 1, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["corvan"] = new HeroLook { Skin = "brown", Hair = "#d0e6f0", Style = "long", Gear = "none", Armor = "#20507a", Accent = "#7fd4ff", Cloth = "#173a5a", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "staff", Beard = "full", Glow = null, Cape = false, CapeColor = null, Robe = "short", RobeColor = "#20507a", Base = "monarch", Height = 0.97, Hide = new string[0], Shave = false, Bald = false },
            ["hask"] = new HeroLook { Skin = "tan", Hair = "#4a4036", Style = "short", Gear = "helm", Armor = "#5c656e", Accent = "#d8e8c8", Cloth = "#2f6b3a", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "shield", Beard = "full", Glow = null, Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "monarch", Height = 1, Hide = new string[0], Shave = false, Bald = false },
            ["lumen"] = new HeroLook { Skin = "fair", Hair = "#f2d27a", Style = "swept", Gear = "none", Armor = "#c8d0dc", Accent = "#ffcc33", Cloth = "#4f5a6c", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "sword", Beard = null, Glow = "#fff2b0", Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "adventurer", Height = 1.06, Hide = new string[0], Shave = true, Bald = false },
            ["nyx"] = new HeroLook { Skin = "pale", Hair = "#1e1a2a", Style = "hood", Gear = "mask", Armor = "#26203a", Accent = "#b48cff", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "daggers", Beard = null, Glow = "#c9a3ff", Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "hooded", Height = 0.97, Hide = new string[0], Shave = false, Bald = false },
            ["tamsin"] = new HeroLook { Skin = "tan", Hair = "#8a6a2a", Style = "braid", Gear = "none", Armor = "#5f7f3a", Accent = "#e8d07a", Cloth = "#4a6a2a", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "bow", Beard = null, Glow = null, Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "hooded", Height = 0.98, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["gorrum"] = new HeroLook { Skin = "deep", Hair = "#1a1410", Style = "bald", Gear = "horns", Armor = "#3a2a22", Accent = "#ff5a1a", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "hammer", Beard = "full", Glow = "#ff7a2a", Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "monarch", Height = 1.1, Hide = new string[0], Shave = false, Bald = true },
            ["velka"] = new HeroLook { Skin = "blue", Hair = "#e8f4ff", Style = "long", Gear = "circlet", Armor = "#3a6a8a", Accent = "#bfefff", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "staff", Beard = null, Glow = null, Cape = false, CapeColor = null, Robe = "long", RobeColor = "#3a6a8a", Base = "hooded", Height = 1.03, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["aurelia"] = new HeroLook { Skin = "fair", Hair = "#e8b84a", Style = "long", Gear = "helm", Armor = "#d9b24a", Accent = "#f5f0e0", Cloth = "#2a3f8f", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "shield", Beard = null, Glow = "#fff2b0", Cape = true, CapeColor = "#2a3f8f", Robe = null, RobeColor = null, Base = "monarch", Height = 1.03, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["sable"] = new HeroLook { Skin = "pale", Hair = "#3a2050", Style = "swept", Gear = "veil", Armor = "#232a48", Accent = "#c8d8ff", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "mirror", Beard = null, Glow = null, Cape = true, CapeColor = "#161a30", Robe = "long", RobeColor = "#1c2240", Base = "hooded", Height = 1, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["kaito"] = new HeroLook { Skin = "fair", Hair = "#1a1a1a", Style = "spiky", Gear = "bandana", Armor = "#2f5a4a", Accent = "#7affc0", Cloth = "#1e3a30", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "katana", Beard = null, Glow = "#a8ffdf", Cape = false, CapeColor = null, Robe = null, RobeColor = null, Base = "adventurer", Height = 1.02, Hide = new string[0], Shave = true, Bald = false },
            ["maelis"] = new HeroLook { Skin = "brown", Hair = "#163a5a", Style = "long", Gear = "crown", Armor = "#1a4a6a", Accent = "#4ad0ff", Cloth = "#123048", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "trident", Beard = null, Glow = null, Cape = true, CapeColor = null, Robe = null, RobeColor = null, Base = "monarch", Height = 1.04, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["thrain"] = new HeroLook { Skin = "tan", Hair = "#a8321a", Style = "short", Gear = "none", Armor = "#5a3a2a", Accent = "#ffa040", Cloth = "#7a5034", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "hammer", Beard = "braided", Glow = null, Cape = true, CapeColor = "#5a2a1a", Robe = null, RobeColor = null, Base = "monarch", Height = 0.88, Hide = new string[0], Shave = false, Bald = false },
            ["oriel"] = new HeroLook { Skin = "deep", Hair = "#f0e6c8", Style = "swept", Gear = "halo", Armor = "#e08a2c", Accent = "#ffe27a", Cloth = "#b5521f", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "staff", Beard = null, Glow = "#ffe27a", Cape = false, CapeColor = null, Robe = "long", RobeColor = "#c4561e", Base = "adventurer", Height = 1.04, Hide = new string[0], Shave = true, Bald = false },
            ["vaelith"] = new HeroLook { Skin = "fair", Hair = "#ff5a2a", Style = "flame", Gear = "crown", Armor = "#3a1010", Accent = "#ffb020", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "sword", Beard = null, Glow = "#ffd060", Cape = true, CapeColor = null, Robe = null, RobeColor = null, Base = "adventurer", Height = 1.06, Hide = new[] { "hair" }, Shave = false, Bald = false },
            ["morwenna"] = new HeroLook { Skin = "ash", Hair = "#120a1a", Style = "long", Gear = "crown", Armor = "#1a0f24", Accent = "#a050ff", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "orb", Beard = null, Glow = "#d090ff", Cape = true, CapeColor = null, Robe = "long", RobeColor = "#140b1e", Base = "hooded", Height = 1.06, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["seraphine"] = new HeroLook { Skin = "pale", Hair = "#fff4d8", Style = "long", Gear = "halo", Armor = "#f0e8d8", Accent = "#ffd870", Cloth = null, Pants = null, Trim = null, Boot = null, Hood = null, Prop = "bell", Beard = null, Glow = "#fff0a0", Cape = false, CapeColor = null, Robe = "long", RobeColor = "#f4eee0", Base = "hooded", Height = 1.02, Hide = new[] { "hood" }, Shave = false, Bald = false },
            ["ulfgar"] = new HeroLook { Skin = "tan", Hair = "#c8ccd0", Style = "long", Gear = "helm", Armor = "#8a9aac", Accent = "#bfe8ff", Cloth = "#3a4a62", Pants = null, Trim = null, Boot = null, Hood = null, Prop = "shield", Beard = "braided", Glow = null, Cape = true, CapeColor = "#2a3a52", Robe = null, RobeColor = null, Base = "monarch", Height = 1.08, Hide = new string[0], Shave = false, Bald = false },
        };
    }
}
