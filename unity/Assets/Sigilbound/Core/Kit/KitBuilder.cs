// The signature kit: code-built weapons, shields, headgear, hair pieces, faces, robes, belts,
// pauldrons, mantles, capes, wings and equipped-gear visuals, attached to bones.
// A line-by-line port of buildKit() in game3d/three3d.mjs (same parts, sizes, colours and
// rules), producing data (KitSocket trees) in three.js space. The client turns it into meshes.
using System;
using System.Collections.Generic;
using System.Linq;

namespace Sigilbound.Core
{
    public sealed class KitBuilder
    {
        const double D2R = Math.PI / 180;

        // Head-bone offsets per head type: top of the head (or hood), radius, face front, eye height, crown height.
        sealed class HeadDims { public double Top, R, Face, Eye, Crown; }
        static readonly Dictionary<string, HeadDims> HEAD = new Dictionary<string, HeadDims>
        {
            ["monarch"] = new HeadDims { Top = 0.26, R = 0.13, Face = 0.15, Eye = 0.09, Crown = 0.18 },
            ["adventurer"] = new HeadDims { Top = 0.25, R = 0.12, Face = 0.14, Eye = 0.09, Crown = 0.18 },
            ["hooded"] = new HeadDims { Top = 0.27, R = 0.15, Face = 0.16, Eye = 0.09, Crown = 0.25 },
            ["hair"] = new HeadDims { Top = 0.25, R = 0.12, Face = 0.14, Eye = 0.1, Crown = 0.2 },
            ["bald"] = new HeadDims { Top = 0.235, R = 0.11, Face = 0.135, Eye = 0.09, Crown = 0.17 },
        };
        public static readonly string[] GearMetal = { "", "#6b5d50", "#9aa3ad", "#c6ced8", "#dfe3ea", "#f0e6d0" };
        public static readonly string[] GearTrim = { "", "#8a7a68", "#5bc46a", "#4aa3ff", "#b46cff", "#ffb02e" };
        public static readonly Dictionary<string, string> SetGlow = new Dictionary<string, string> { ["fury"] = "#ff4a3a", ["vigor"] = "#4ae07a", ["bulwark"] = "#b8b4aa", ["haste"] = "#3ad8cc", ["keen"] = "#ffd040" };
        static readonly HashSet<string> HelmGear = new HashSet<string> { "helm", "horns" };
        static readonly HashSet<string> AdornGear = new HashSet<string> { "crown", "halo", "circlet", "veil", "mask" };
        static readonly Dictionary<string, double> TILT = new Dictionary<string, double> { ["spear"] = 25, ["staff"] = 32, ["lantern"] = 32, ["candle"] = 42, ["bell"] = 35, ["orb"] = 40, ["mirror"] = 30, ["bow"] = 15, ["trident"] = 30, ["club"] = 12, ["hammer"] = 15, ["axe"] = 15, ["hook"] = 25, ["whip"] = 10 };
        static readonly Dictionary<string, double> ROLL = new Dictionary<string, double> { ["bow"] = 90 };
        static readonly double[] RSCALE = { 1, 1, 1.04, 1.08, 1.13, 1.18 };
        static readonly V3 GRIP = new V3(0, 0.075, 0.01);

        readonly string id; readonly HeroLook L; readonly Dictionary<string, object> K; readonly string baseModel; readonly bool hollow;
        readonly BodySpec B; readonly GearLook gear; readonly double hipY;
        readonly List<KitSocket> sockets = new List<KitSocket>();

        KitBuilder(string id, string baseModel, bool hollow, GearLook gear, double hipY)
        {
            this.id = id; L = Looks.Of(id); K = HeroArt.Kit(id); this.baseModel = baseModel; this.hollow = hollow; B = HeroArt.Body(id); this.gear = gear; this.hipY = hipY;
        }

        // hipY: rest-pose height of the Hips bone above the feet, in model metres (boneY()).
        public static List<KitSocket> Build(string heroId, bool hollow, GearLook gear, double hipY = 0.9)
        {
            var kb = new KitBuilder(heroId, Looks.Of(heroId).Base, hollow, gear, hipY);
            kb.Run();
            return kb.sockets;
        }

        // ---------- kit option access (LOOKS[id].kit) ----------
        bool KB(string k) => K.TryGetValue(k, out var v) && v != null && !(v is bool b && !b) && !(v is string s && s.Length == 0);
        string KS(string k) => K.TryGetValue(k, out var v) && v is string s ? s : null;
        double KN(string k, double d) => K.TryGetValue(k, out var v) && v is double n ? n : d;
        bool KFalse(string k) => K.TryGetValue(k, out var v) && v is bool b && !b;

        // ---------- colours & materials ----------
        string Tint(string c) => hollow ? Looks.Mix(c, "#2e1f33", 0.5) : c;
        static string Mix(string a, string b, double k) => Looks.Mix(a, b, k);
        static string Mul(string a, double k) => Looks.Mul(a, k);
        KitMat M(string c, double metal = 0) => new KitMat { Finish = metal >= 0.5 ? KitFinish.Metal : metal > 0 ? KitFinish.LeatherMetal : KitFinish.Leather, Color = Tint(c) };
        KitMat Mc(string c) => new KitMat { Finish = KitFinish.Cloth, Color = Tint(c) };
        KitMat Mw(string c) => new KitMat { Finish = KitFinish.Wood, Color = Tint(c) };
        KitMat Mg(string c) => new KitMat { Finish = KitFinish.Gold, Color = Tint(c) };
        KitMat Mhair(string c) => new KitMat { Finish = KitFinish.Hair, Color = Tint(c) };
        KitMat Mbone(string c) => new KitMat { Finish = KitFinish.Bone, Color = Tint(c) };
        KitMat Gl(string c, double op = 1) => new KitMat { Finish = KitFinish.Glow, Color = hollow ? Mix(c, "#ff3355", 0.45) : c, Opacity = op };
        static KitMat Glow(string c, double op = 1) => new KitMat { Finish = KitFinish.Glow, Color = c, Opacity = op }; // untinted glow()

        // ---------- node helpers (P, pivot, liveMesh, liveGroup) ----------
        static KitNode P(KitNode g, string kind, double[] pos, double[] scale, KitMat mat, double[] rot = null)
        {
            var n = new KitNode { Shape = kind == "box" ? "bbox" : kind, Mat = mat, Pos = new V3(pos[0], pos[1], pos[2]), Scale = new V3(scale[0], scale[1], scale[2]) };
            if (rot != null) { n.EulerOrder = "YXZ"; n.Ex = rot[0] * D2R; n.Ey = rot[1] * D2R; n.Ez = rot[2] * D2R; }
            g.Children.Add(n);
            return n;
        }
        static KitNode PMesh(KitNode g, MeshData mesh, double[] pos, double[] scale, KitMat mat)
        {
            var n = new KitNode { Mesh = mesh, Mat = mat, Pos = new V3(pos[0], pos[1], pos[2]), Scale = new V3(scale[0], scale[1], scale[2]) };
            g.Children.Add(n);
            return n;
        }
        static KitNode Pivot(KitNode g, double[] pos) { var n = new KitNode { Pos = new V3(pos[0], pos[1], pos[2]) }; g.Children.Add(n); return n; }
        static KitNode LiveMesh(KitNode g, string kind, double[] pos, double[] s, KitMat mat, LiveSpec fn, double[] rot = null)
        {
            var m = P(g, kind, pos, s, mat, rot); m.Live = fn; return m;
        }
        static KitNode LiveMesh(KitNode g, string kind, double[] pos, double s, KitMat mat, LiveSpec fn, double[] rot = null) => LiveMesh(g, kind, pos, new[] { s, s, s }, mat, fn, rot);
        static KitNode LiveGroup(KitNode g, double[] pos, LiveKind kind, double spring = 0, double side = 1)
        {
            var p = Pivot(g, pos); p.Live = new LiveSpec { Kind = kind, Spring = spring, Side = side }; return p;
        }
        static LiveSpec Flicker => new LiveSpec { Kind = LiveKind.Flicker };
        static LiveSpec Pulse => new LiveSpec { Kind = LiveKind.Pulse };
        static LiveSpec Spin(char axis, double rate) => new LiveSpec { Kind = LiveKind.Spin, Axis = axis, Rate = rate };
        static double[] A(params double[] v) => v;

        KitSocket Socket(string slot, string bone, double[] pos, V3? dir, double roll = 0, string sig = "")
        {
            var s = new KitSocket { Slot = slot, Bone = bone, Mode = SocketMode.Bone, Pos = new V3(pos[0], pos[1], pos[2]), Dir = dir, Roll = roll, CacheKey = $"{id}|{(hollow ? 1 : 0)}|{slot}|{sig}" };
            sockets.Add(s); return s;
        }
        KitSocket SocketM(string slot, string bone, double[] pos, string sig = "")
        {
            var s = new KitSocket { Slot = slot, Bone = bone, Mode = SocketMode.Model, Pos = new V3(pos[0], pos[1], pos[2]), CacheKey = $"{id}|{(hollow ? 1 : 0)}|{slot}|{sig}" };
            sockets.Add(s); return s;
        }
        static V3 GripDir(string side, double tilt) => new V3(side == "R" ? -Math.Cos(tilt * D2R) : Math.Cos(tilt * D2R), -Math.Sin(tilt * D2R), 0);
        static string GearSig(GearLook.Item g) => GearLook.Sig(g);

        // ---------- the build ----------
        string headSrc; HashSet<string> hide; bool hooded; HeadDims H;
        Dictionary<string, KitMat> C;
        GearLook.Item gw;

        string GMetal(int r, double k = 0.7) => r == 1 ? "#5a4232" : Mix(GearMetal[r], L.Armor, k);
        KitMat GTrim(int r) => hollow ? M(Mix(GearTrim[r], "#3a3340", 0.75), 0.5) : r >= 4 ? Mg(GearTrim[r]) : M(GearTrim[r], 0.4);

        void Run()
        {
            headSrc = B.Parts.TryGetValue("head", out var hs) ? hs : baseModel;
            hide = new HashSet<string>(B.Hide);
            hooded = headSrc == "hooded" && !hide.Contains("hood");
            H = hooded ? HEAD["hooded"] : headSrc == "hooded" ? HEAD["hair"] : B.Bald || hide.Contains("hair") ? HEAD["bald"] : HEAD.TryGetValue(headSrc, out var hd) ? hd : HEAD["adventurer"];
            gw = gear?.Weapon;
            C = new Dictionary<string, KitMat>
            {
                ["steel"] = M(gw != null ? GearMetal[gw.R] : "#c4ccd6", gw != null && gw.R == 1 ? 0.3 : 0.6), ["iron"] = M("#4a4a52", 0.5), ["wood"] = Mw("#6b4a29"), ["leather"] = M("#3a2a20"),
                ["acc"] = M(L.Accent, 0.35), ["accG"] = Gl(L.Accent), ["accH"] = Gl(L.Accent, 0.28), ["armor"] = M(L.Armor),
                ["armorD"] = M(Mul(L.Armor, 0.6)), ["gold"] = Mg(Mix(L.Accent, "#e8c070", 0.5)),
                ["glowC"] = Gl(L.Glow ?? L.Accent), ["glowH"] = Gl(L.Glow ?? L.Accent, 0.3),
                ["cloth"] = Mc(L.Cloth ?? Mul(L.Armor, 0.62)), ["hair"] = Mhair(L.Hair),
            };
            Weapons();
            Headgear();
            Body();
            Shoulders();
            Back();
            BootsGear();
        }

        // ---- weapons, built along +Y from the fist at the origin ----
        void Weapon(string kind, KitNode g)
        {
            switch (kind)
            {
                case "spear":
                    P(g, "rod", A(0, 0.3, 0), A(0.042, 1.75, 0.042), C["wood"]);
                    P(g, "rod", A(0, 1.15, 0), A(0.06, 0.07, 0.06), C["acc"]);
                    P(g, "cone", A(0, 1.32, 0), A(0.09, 0.28, 0.03), C["steel"]);
                    P(g, "cone", A(0, 1.08, 0), A(0.09, 0.12, 0.09), C["acc"], A(180, 0, 0));
                    if (KB("pennant"))
                    {
                        var f = Mc(KS("pennant"));
                        P(g, "box", A(0.0, 1.0, 0.11), A(0.012, 0.13, 0.2), f);
                        P(g, "cone", A(0.0, 1.0, 0.27), A(0.12, 0.14, 0.012), f, A(90, 90, 0));
                    }
                    break;
                case "staff":
                {
                    string style = KS("staff") ?? "orb";
                    double f = KN("staffLen", 1), dy = 1.5 * (f - 1);
                    var shaft = style == "ice" ? M("#cfe8f4", 0.2) : style == "sun" ? C["gold"] : style == "drift" ? M("#8a7458") : C["wood"];
                    P(g, "rod", A(0, 0.3 + dy / 2, 0), A(0.05, 1.5 * f, 0.05), shaft);
                    if (style == "ice")
                    {
                        P(g, "octa", A(0, 1.17 + dy, 0), A(0.13, 0.32, 0.13), C["accG"]);
                        P(g, "octa", A(0.07, 1.06 + dy, 0), A(0.06, 0.16, 0.06), C["accG"], A(0, 0, -30));
                        P(g, "octa", A(-0.07, 1.06 + dy, 0), A(0.06, 0.16, 0.06), C["accG"], A(0, 0, 30));
                        LiveMesh(g, "sphere", A(0, 1.17 + dy, 0), 0.34, C["accH"], Pulse);
                    }
                    else if (style == "sun")
                    {
                        P(g, "sphere", A(0, 1.16 + dy, 0), A(0.16, 0.16, 0.16), C["glowC"]);
                        for (int i = 0; i < 8; i++) { double a = i * 45 * D2R; P(g, "cone", A(Math.Cos(a) * 0.15, 1.16 + dy + Math.Sin(a) * 0.15, 0), A(0.04, 0.1, 0.04), C["gold"], A(0, 0, i * 45 - 90)); }
                        LiveMesh(g, "sphere", A(0, 1.16 + dy, 0), 0.42, C["glowH"], Pulse);
                    }
                    else
                    {
                        if (style == "drift")
                        {
                            foreach (var s in new[] { -1.0, 1.0 }) P(g, "rod", A(s * 0.06, 1.04 + dy, 0), A(0.035, 0.22, 0.035), shaft, A(0, 0, s * -25));
                            P(g, "sphere", A(0, 0.86 + dy, 0), A(0.08, 0.06, 0.08), shaft);
                            P(g, "cone", A(0.06, 0.8 + dy, 0.03), A(0.06, 0.08, 0.02), M("#f0e0c8"), A(180, 0, 0));
                        }
                        else
                        {
                            P(g, "ring", A(0, 1.12 + dy, 0), A(0.2, 0.2, 0.2), C["acc"]);
                            P(g, "cone", A(0, 1.01 + dy, 0), A(0.07, 0.1, 0.07), C["acc"], A(180, 0, 0));
                        }
                        P(g, "sphere", A(0, 1.12 + dy, 0), A(0.13, 0.13, 0.13), C["accG"]);
                        LiveMesh(g, "sphere", A(0, 1.12 + dy, 0), 0.3, C["accH"], Pulse);
                    }
                    break;
                }
                case "hammer":
                {
                    bool big = KB("big"); double bs = big ? 1.25 : 1;
                    P(g, "rod", A(0, big ? 0.2 : 0.25, 0), A(0.045 * bs, big ? 0.85 : 0.95, 0.045 * bs), C["wood"]);
                    if (big)
                    {
                        P(g, "box", A(0, 0.62, 0), A(0.32, 0.2, 0.2), M("#2a2426", 0.5));
                        P(g, "box", A(0, 0.62, 0), A(0.34, 0.045, 0.21), C["accG"]);
                        P(g, "box", A(0, 0.62, 0), A(0.045, 0.22, 0.22), C["accG"]);
                        P(g, "cone", A(0.19, 0.62, 0), A(0.11, 0.11, 0.11), M("#2a2426", 0.5), A(0, 0, -90));
                        P(g, "rod", A(0, -0.2, 0), A(0.07, 0.06, 0.07), C["iron"]);
                    }
                    else
                    {
                        P(g, "box", A(0, 0.68, 0), A(0.3, 0.16, 0.16), C["iron"]);
                        P(g, "box", A(0, 0.68, 0), A(0.32, 0.04, 0.17), C["acc"]);
                        P(g, "box", A(0.16, 0.68, 0), A(0.02, 0.15, 0.15), C["accG"]);
                        P(g, "box", A(-0.16, 0.68, 0), A(0.02, 0.15, 0.15), C["accG"]);
                        LiveMesh(g, "sphere", A(0.16, 0.68, 0), 0.22, C["accH"], Pulse);
                    }
                    break;
                }
                case "club":
                {
                    var moss = M(L.Accent);
                    P(g, "taper", A(0, 0.38, 0), A(0.16, 0.8, 0.16), C["wood"]);
                    P(g, "sphere", A(0, 0.78, 0), A(0.16, 0.14, 0.16), C["wood"]);
                    P(g, "sphere", A(0.07, 0.62, 0.04), A(0.08, 0.08, 0.08), C["wood"]);
                    P(g, "sphere", A(-0.06, 0.74, -0.05), A(0.07, 0.07, 0.07), C["wood"]);
                    P(g, "sphere", A(0.02, 0.84, 0.05), A(0.12, 0.07, 0.1), moss);
                    P(g, "sphere", A(-0.08, 0.66, 0.02), A(0.07, 0.1, 0.07), moss);
                    P(g, "rod", A(0, 0.08, 0), A(0.11, 0.12, 0.11), C["leather"]);
                    break;
                }
                case "trident":
                    P(g, "rod", A(0, 0.28, 0), A(0.042, 1.6, 0.042), C["armorD"]);
                    P(g, "box", A(0, 1.08, 0), A(0.3, 0.04, 0.04), C["gold"]);
                    P(g, "cone", A(0, 1.27, 0), A(0.06, 0.34, 0.06), C["acc"]);
                    foreach (var x in new[] { -0.13, 0.13 })
                    {
                        P(g, "rod", A(x, 1.16, 0), A(0.03, 0.16, 0.03), C["acc"]);
                        P(g, "cone", A(x, 1.3, 0), A(0.05, 0.14, 0.05), C["acc"]);
                    }
                    P(g, "sphere", A(0, 1.08, 0), A(0.07, 0.07, 0.07), C["accG"]);
                    break;
                case "katana":
                    P(g, "rod", A(0, 0.03, 0), A(0.04, 0.26, 0.04), M("#1c1c22"));
                    P(g, "disc", A(0, 0.17, 0), A(0.1, 0.02, 0.1), C["gold"]);
                    P(g, "box", A(0, 0.48, 0), A(0.012, 0.6, 0.045), C["steel"]);
                    P(g, "box", A(0, 0.92, -0.025), A(0.012, 0.3, 0.04), C["steel"], A(-9, 0, 0));
                    P(g, "box", A(0, 0.48, 0.03), A(0.014, 0.6, 0.016), C["glowC"]);
                    P(g, "box", A(0, 0.91, 0.006), A(0.014, 0.3, 0.016), C["glowC"], A(-9, 0, 0));
                    break;
                case "sword":
                {
                    double s = KS("side") == "sword" && L.Prop == "shield" ? 0.8 : 1;
                    P(g, "rod", A(0, 0.02, 0), A(0.04, 0.22, 0.04), C["leather"]);
                    P(g, "sphere", A(0, -0.1, 0), A(0.06, 0.06, 0.06), C["gold"]);
                    P(g, "box", A(0, 0.14, 0), A(0.26, 0.04, 0.05), C["gold"]);
                    P(g, "box", A(0, 0.16 + 0.45 * s, 0), A(0.075, 0.9 * s, 0.022), C["steel"]);
                    P(g, "cone", A(0, 0.16 + 0.9 * s + 0.05, 0), A(0.075, 0.1, 0.022), C["steel"]);
                    if (L.Glow != null || KB("flame"))
                    {
                        var fl = KB("flame") ? Gl(L.Accent, 0.55) : C["glowH"];
                        LiveMesh(g, "box", A(0, 0.16 + 0.47 * s, 0), A(0.13, 0.98 * s, 0.05), fl, KB("flame") ? Flicker : Pulse);
                    }
                    break;
                }
                case "axe":
                    P(g, "rod", A(0, 0.25, 0), A(0.045, 0.85, 0.045), C["wood"]);
                    P(g, "half", A(0, 0.6, 0), A(0.34, 0.025, 0.3), C["steel"], A(90, 90, 0));
                    P(g, "box", A(0, 0.6, 0), A(0.08, 0.12, 0.06), C["acc"]);
                    P(g, "cone", A(0, 0.72, 0), A(0.05, 0.1, 0.05), C["acc"]);
                    break;
                case "dagger":
                    P(g, "rod", A(0, 0.01, 0), A(0.034, 0.13, 0.034), C["leather"]);
                    P(g, "box", A(0, 0.09, 0), A(0.12, 0.025, 0.03), C["acc"]);
                    P(g, "cone", A(0, 0.28, 0), A(0.065, 0.36, 0.015), C["steel"]);
                    P(g, "cone", A(0, 0.28, 0), A(0.09, 0.4, 0.02), C["glowH"]);
                    break;
                case "whip":
                    P(g, "rod", A(0, 0.06, 0), A(0.045, 0.3, 0.045), C["leather"]);
                    P(g, "sphere", A(0, -0.1, 0), A(0.055, 0.055, 0.055), C["acc"]);
                    P(g, "rod", A(0, 0.2, 0), A(0.06, 0.04, 0.06), C["acc"]);
                    break;
                case "hook":
                    P(g, "rod", A(0, 0.2, 0), A(0.04, 0.7, 0.04), M("#5a4034", 0.4));
                    P(g, "hook", A(0.09, 0.56, 0), A(0.18, 0.18, 0.18), M("#7a5a48", 0.5), A(0, 0, -20));
                    P(g, "cone", A(0.2, 0.52, 0), A(0.04, 0.1, 0.04), M("#7a5a48", 0.5), A(0, 0, 150));
                    P(g, "rod", A(0, -0.12, 0), A(0.06, 0.05, 0.06), C["acc"]);
                    P(g, "rod", A(0, -0.2, 0), A(0.012, 0.14, 0.012), C["iron"]);
                    break;
                case "bow":
                    P(g, "rod", A(0, 0, 0), A(0.04, 0.16, 0.04), C["leather"]);
                    foreach (var sgn in new[] { 1.0, -1.0 })
                    {
                        P(g, "rod", A(0, sgn * 0.22, -0.02), A(0.03, 0.32, 0.03), C["wood"], A(sgn * -8, 0, 0));
                        P(g, "rod", A(0, sgn * 0.5, -0.09), A(0.024, 0.28, 0.024), C["wood"], A(sgn * -28, 0, 0));
                        P(g, "sphere", A(0, sgn * 0.63, -0.16), A(0.035, 0.035, 0.035), C["acc"]);
                    }
                    P(g, "rod", A(0, 0, -0.16), A(0.006, 1.26, 0.006), C["accG"]);
                    break;
                case "lantern":
                    P(g, "rod", A(0, 0.3, 0), A(0.04, 1.5, 0.04), C["wood"]);
                    P(g, "crook", A(0.1, 1.05, 0), A(0.2, 0.2, 0.2), C["gold"]);
                    P(g, "rod", A(0.2, 0.97, 0), A(0.008, 0.12, 0.008), C["gold"]);
                    P(g, "box", A(0.2, 0.84, 0), A(0.13, 0.17, 0.13), M(Mix(L.Accent, "#6a4a20", 0.6), 0.5));
                    P(g, "cone", A(0.2, 0.95, 0), A(0.16, 0.06, 0.16), C["gold"]);
                    P(g, "sphere", A(0.2, 0.84, 0), A(0.15, 0.13, 0.15), C["accG"]);
                    LiveMesh(g, "sphere", A(0.2, 0.84, 0), 0.4, C["accH"], Pulse);
                    break;
                case "candle":
                    P(g, "disc", A(0, 0.06, 0), A(0.22, 0.03, 0.22), C["gold"]);
                    P(g, "rod", A(0, -0.03, 0), A(0.045, 0.16, 0.045), C["gold"]);
                    P(g, "rod", A(0, 0.2, 0), A(0.11, 0.28, 0.11), M("#f2e6c8"));
                    P(g, "ring", A(0.13, 0.03, 0), A(0.08, 0.08, 0.2), C["gold"], A(90, 0, 0));
                    LiveMesh(g, "cone", A(0, 0.42, 0), A(0.11, 0.22, 0.11), C["accG"], Flicker);
                    LiveMesh(g, "sphere", A(0, 0.4, 0), 0.42, C["accH"], Pulse);
                    break;
                case "mirror":
                    P(g, "rod", A(0, 0.05, 0), A(0.035, 0.2, 0.035), C["gold"]);
                    P(g, "ring", A(0, 0.3, 0), A(0.24, 0.24, 0.3), C["gold"]);
                    P(g, "disc", A(0, 0.3, 0), A(0.22, 0.012, 0.22), C["accG"], A(90, 0, 0));
                    LiveMesh(g, "sphere", A(0, 0.3, 0), 0.4, C["accH"], Pulse);
                    break;
                case "bell":
                    P(g, "rod", A(0, 0.05, 0), A(0.04, 0.18, 0.04), C["wood"]);
                    P(g, "sphere", A(0, -0.08, 0), A(0.12, 0.1, 0.12), C["gold"]);
                    P(g, "bell", A(0, -0.22, 0), A(0.32, 0.28, 0.32), C["gold"], A(180, 0, 0));
                    P(g, "ring", A(0, -0.36, 0), A(0.32, 0.32, 0.4), C["gold"], A(90, 0, 0));
                    P(g, "sphere", A(0, -0.39, 0), A(0.07, 0.07, 0.07), C["glowC"]);
                    LiveMesh(g, "sphere", A(0, -0.24, 0), 0.55, C["glowH"], Pulse);
                    break;
                case "orb":
                    P(g, "sphere", A(0, 0.22, 0), A(0.18, 0.18, 0.18), M("#140a1e", 0.3));
                    LiveMesh(g, "sphere", A(0, 0.22, 0), 0.3, C["accH"], Pulse);
                    LiveMesh(g, "ring", A(0, 0.22, 0), 0.3, C["accG"], Spin('y', 2.2), A(70, 0, 0));
                    LiveMesh(g, "ring", A(0, 0.22, 0), 0.24, C["glowC"], Spin('x', -1.6), A(0, 0, 60));
                    break;
            }
        }
        static readonly HashSet<string> WeaponKinds = new HashSet<string> { "spear", "staff", "hammer", "club", "trident", "katana", "sword", "axe", "dagger", "whip", "hook", "bow", "lantern", "candle", "mirror", "bell", "orb" };

        // Gear trim on a held weapon: rarity wraps, a set gem (Superior+), quillons (Heroic+), glow (Mythic).
        void WeaponGear(KitNode g, GearLook.Item w)
        {
            var trim = GTrim(w.R); var gem = Gl(SetGlow.TryGetValue(w.S ?? "", out var sg) ? sg : L.Accent);
            P(g, "ring", A(0, 0.06, 0), A(0.075, 0.075, 0.3), trim, A(90, 0, 0));
            if (w.R >= 2) P(g, "ring", A(0, -0.02, 0), A(0.07, 0.07, 0.3), trim, A(90, 0, 0));
            if (w.R >= 3) P(g, "gem", A(0, -0.14, 0), A(0.065, 0.085, 0.065), gem);
            if (w.R >= 4) foreach (var s in new[] { -1.0, 1.0 }) P(g, "cone", A(s * 0.06, 0.12, 0), A(0.03, 0.09, 0.03), trim, A(0, 0, s * -60));
            if (w.R >= 5)
            {
                P(g, "octa", A(0, 0.13, 0), A(0.07, 0.09, 0.07), gem);
                LiveMesh(g, "sphere", A(0, 0.13, 0), 0.13, Gl(SetGlow.TryGetValue(w.S ?? "", out var sg2) ? sg2 : L.Accent, 0.3), Pulse);
            }
        }

        void Weapons()
        {
            string right = L.Prop == "shield" ? KS("side") : L.Prop == "daggers" ? "dagger" : L.Prop;
            if (right != null && WeaponKinds.Contains(right))
            {
                double tilt = right == "hammer" && KB("big") ? 58 : TILT.TryGetValue(right, out var t) ? t : 0;
                var sock = Socket("R", "WristR", A(GRIP.X, GRIP.Y, GRIP.Z), GripDir("R", tilt), ROLL.TryGetValue(right, out var r) ? r : 0, GearSig(gw));
                if (gw != null) sock.ScaleMul = RSCALE[gw.R];
                Weapon(right, sock.Root);
                if (gw != null) WeaponGear(sock.Root, gw);
            }
            // The whip's lash hangs from the fist and trails on the ground, snaking slowly.
            if (L.Prop == "whip")
            {
                var sock = SocketM("Wl", "WristR", A(0, 0, 0));
                var lash = LiveGroup(sock.Root, A(0, 0, 0), LiveKind.Lash, 0.6);
                var pts = new List<V3>();
                for (int i = 0; i <= 12; i++)
                {
                    double k = i / 12.0, y = k < 0.7 ? -Math.Pow(k / 0.7, 1.4) * 0.92 : -0.92, fwd = 0.12 + k * 0.75, side = Math.Sin(k * 9) * 0.1 * k;
                    pts.Add(new V3(-0.08 - side, y, fwd));
                }
                for (int i = 0; i < 12; i++)
                {
                    V3 a = pts[i], b = pts[i + 1]; double len = (b - a).Length;
                    var m = P(lash, "rod", A((a.X + b.X) / 2, (a.Y + b.Y) / 2, (a.Z + b.Z) / 2), A(0.035 - i * 0.002, len + 0.01, 0.035 - i * 0.002), C["accG"]);
                    m.RotQ = Quat.FromUnitVectors(new V3(0, 1, 0), (b - a).Normalized);
                }
                var tip = pts[12];
                P(lash, "sphere", A(tip.X, tip.Y + 0.03, tip.Z), A(0.09, 0.07, 0.09), C["glowC"]);
                P(lash, "cone", A(tip.X, tip.Y + 0.12, tip.Z), A(0.08, 0.2, 0.08), C["glowC"]);
            }
            if (L.Prop == "daggers")
            {
                var sock = Socket("L", "WristL", A(GRIP.X, GRIP.Y, GRIP.Z), GripDir("L", 0), 0, GearSig(gw));
                Weapon("dagger", sock.Root); if (gw != null) WeaponGear(sock.Root, gw);
            }
            if (L.Prop == "shield")
            {
                var sock = Socket("S", "WristL", A(0, 0.0, 0.08), null, 0, gw != null && gw.R >= 3 ? gw.R.ToString() : "");
                sock.Basis = Quat.FromBasis(new V3(0, 0, 1), new V3(0, -1, 0), new V3(1, 0, 0));
                string style = KS("shield") ?? "round";
                var g = sock.Root;
                var face = M(KS("shieldFace") ?? Mix(L.Armor, L.Accent, 0.25), 0.4);
                var rim = M(gw != null && gw.R >= 3 ? GearTrim[gw.R] : Mix(L.Accent, "#c8ccd4", 0.4), 0.6);
                if (style == "kite")
                {
                    P(g, "box", A(0, 0.1, 0), A(0.4, 0.42, 0.035), face);
                    P(g, "cone", A(0, -0.27, 0), A(0.4, 0.32, 0.035), face, A(180, 0, 0));
                    P(g, "box", A(0, 0.0, 0.022), A(0.06, 0.62, 0.012), rim);
                    P(g, "box", A(0, 0.14, 0.022), A(0.34, 0.06, 0.012), rim);
                    P(g, "ring", A(0, 0.1, 0.0), A(0.4, 0.42, 0.35), rim, A(0, 0, 0));
                }
                else if (style == "tower")
                {
                    P(g, "box", A(0, 0.05, 0), A(0.44, 0.78, 0.04), M(L.Armor, 0.4));
                    P(g, "box", A(0, 0.05, -0.006), A(0.5, 0.84, 0.03), Gl(L.Glow ?? L.Accent, 0.7));
                    P(g, "sphere", A(0, 0.12, 0.03), A(0.14, 0.14, 0.05), C["glowC"]);
                    P(g, "box", A(0, 0.05, 0.024), A(0.05, 0.66, 0.012), C["gold"]);
                }
                else
                {
                    double r = KB("big") ? 0.62 : 0.56;
                    P(g, "disc", A(0, 0, 0), A(r, 0.035, r), face, A(90, 0, 0));
                    P(g, "ring", A(0, 0, 0), A(r, r, 0.6), KB("big") ? Gl(L.Accent) : rim);
                    P(g, "boss", A(0, 0, 0.012), A(0.16, 0.16, 0.12), rim, A(90, 0, 0));
                    if (KB("studs")) for (int i = 0; i < 6; i++) { double a = i * 60 * D2R; P(g, "sphere", A(Math.Cos(a) * r * 0.36, Math.Sin(a) * r * 0.36, 0.02), A(0.045, 0.045, 0.03), M(L.Accent)); }
                    if (KB("big")) for (int i = 0; i < 8; i++) { double a = i * 45 * D2R; P(g, "box", A(Math.Cos(a) * r * 0.3, Math.Sin(a) * r * 0.3, 0.02), A(0.03, r * 0.5, 0.012), rim, A(0, 0, i * 45 + 90)); }
                }
            }
        }

        // ---- headgear, hair pieces, face, helm gear ----
        void Headgear()
        {
            var gh = gear?.Helm;
            string headClass = HelmGear.Contains(L.Gear ?? "") ? "helm" : AdornGear.Contains(L.Gear ?? "") || hooded || KB("hat") ? "adorn" : "open";
            double top = H.Top, r = H.R;
            var sock = Socket("H", "Head", A(0, 0, 0), null);
            var g = sock.Root;
            void Helm(KitNode gg, KitMat metal, bool open)
            {
                P(gg, "helm", A(0, top - 0.12, -0.01), A(r * 2.2, r * 1.75, r * 2.3), metal);
                P(gg, "ring", A(0, top - 0.105, -0.01), A(r * 2.28, r * 2.4, 0.4), metal, A(90, 0, 0));
                for (int i = 0; i < 8; i++) { double a = i / 8.0 * Math.PI * 2; P(gg, "sphere", A(Math.Sin(a) * r * 1.13, top - 0.1, -0.01 + Math.Cos(a) * r * 1.18), A(0.016, 0.016, 0.016), metal); }
                P(gg, "box", A(0, top - 0.17, H.Face + 0.012), A(0.03, 0.1, 0.02), metal);
                if (open) foreach (var s in new[] { -1.0, 1.0 }) P(gg, "box", A(s * r * 0.98, top - 0.21, 0.04), A(0.03, 0.12, 0.1), metal);
            }
            string gearHead = L.Gear;
            string helmStyle = KS("helm");
            if (gearHead == "helm")
            {
                var metal = M(gh != null ? Mix(GearMetal[gh.R], L.Armor, 0.3) : Mix(L.Armor, "#c8ccd4", helmStyle == "winged" ? 0.2 : 0.5), 0.6);
                Helm(g, metal, helmStyle != "great");
                if (helmStyle == "winged")
                    foreach (var s in new[] { -1.0, 1.0 })
                    {
                        P(g, "cone", A(s * (r + 0.03), top - 0.0, -0.05), A(0.1, 0.32, 0.03), M("#ffffff", 0.2), A(-35, 90, s * -35));
                        P(g, "cone", A(s * (r + 0.02), top - 0.06, -0.08), A(0.08, 0.24, 0.025), C["glowC"], A(-50, 90, s * -50));
                    }
                else if (helmStyle == "horned")
                {
                    foreach (var s in new[] { -1.0, 1.0 })
                    {
                        P(g, "cone", A(s * (r + 0.05), top + 0.0, 0), A(0.075, 0.3, 0.075), M("#e8e4da"), A(0, 0, s * -35));
                        P(g, "cone", A(s * (r + 0.13), top + 0.15, 0), A(0.035, 0.08, 0.035), C["accG"], A(0, 0, s * -35));
                    }
                    P(g, "box", A(0, top + 0.0, 0), A(0.03, 0.07, 0.26), C["acc"]);
                }
                else if (helmStyle == "great")
                {
                    P(g, "rod", A(0, top - 0.2, 0.0), A(r * 2.25, 0.16, r * 2.3), metal);
                    P(g, "box", A(0, H.Eye + 0.005, H.Face + 0.005), A(0.17, 0.022, 0.02), M("#141418"));
                    P(g, "box", A(0, top - 0.04, 0), A(0.025, 0.05, r * 2.1), C["acc"]);
                    foreach (var s in new[] { -1.0, 1.0 }) P(g, "sphere", A(s * r * 1.1, top - 0.15, 0), A(0.04, 0.04, 0.04), C["acc"]);
                }
            }
            else if (gearHead == "horns")
            {
                P(g, "dome", A(0, top - 0.12, -0.01), A(r * 2.3, r * 1.7, r * 2.45), M("#26201e", 0.5));
                var bone = Mbone("#e8dcc0");
                foreach (var s in new[] { -1.0, 1.0 })
                {
                    P(g, "rod", A(s * (r + 0.03), top - 0.08, 0.01), A(0.085, 0.12, 0.085), bone, A(0, 0, s * 75));
                    P(g, "rod", A(s * (r + 0.1), top - 0.03, 0.02), A(0.07, 0.12, 0.07), bone, A(-10, 0, s * 35));
                    P(g, "cone", A(s * (r + 0.13), top + 0.07, 0.04), A(0.065, 0.16, 0.065), bone, A(-20, 0, s * 5));
                }
                P(g, "box", A(0, top - 0.15, H.Face + 0.01), A(0.16, 0.025, 0.02), C["glowC"]);
            }
            else if (gearHead == "halo")
            {
                var hp = Pivot(g, A(0, top + 0.13, -0.06)); hp.Ex = 70 * D2R;
                P(hp, "ring", A(0, 0, 0), A(0.34, 0.34, 0.5), C["glowC"]);
                if (KS("staff") == "sun") for (int i = 0; i < 8; i++) { double a = i * 45 * D2R; P(hp, "cone", A(Math.Cos(a) * 0.23, Math.Sin(a) * 0.23, 0), A(0.035, 0.08, 0.035), C["gold"], A(0, 0, i * 45 - 90)); }
                LiveMesh(g, "sphere", A(0, top + 0.13, -0.06), A(0.42, 0.12, 0.42), C["glowH"], Pulse);
            }
            else if (gearHead == "circlet")
            {
                double cy = H.Eye + 0.07;
                P(g, "ring", A(0, cy, 0.0), A(r * 1.85, r * 1.95, 0.2), C["gold"], A(80, 0, 0));
                P(g, "octa", A(0, cy - 0.005, r * 0.95 + 0.02), A(0.05, 0.075, 0.03), C["glowC"]);
            }
            else if (gearHead == "bandana")
            {
                var cloth = Mc(KS("band") ?? L.Accent);
                double by = H.Eye + 0.08;
                P(g, "ring", A(0, by, 0), A(r * 2.25, r * 2.4, 0.35), cloth, A(80, 0, 0));
                var tails = LiveGroup(g, A(0, by, -r - 0.03), LiveKind.BandanaTails, 1.6);
                P(tails, "box", A(0.03, -0.12, -0.02), A(0.05, 0.26, 0.012), cloth, A(0, 0, 10));
                P(tails, "box", A(-0.03, -0.15, -0.01), A(0.05, 0.32, 0.012), cloth, A(0, 0, -8));
                if (L.Glow != null) P(g, "sphere", A(0, by, r * 1.1), A(0.04, 0.04, 0.02), C["glowC"]);
            }
            else if (gearHead == "crown")
            {
                var band = M(KS("crownBand") ?? Mix(L.Accent, "#e8c070", 0.4), 0.6);
                double cy = H.Crown, cr = r * 1.05;
                P(g, "ring", A(0, cy, 0), A(cr * 2, cr * 2.1, 0.6), band, A(90, 0, 0));
                int n = 7; string style = KS("crown") ?? "spike";
                for (int i = 0; i < n; i++)
                {
                    double a = (i / (double)n) * Math.PI * 2 + Math.PI / 2, x = Math.Cos(a) * cr, z = Math.Sin(a) * cr * 1.05;
                    double h = style == "jagged" ? (i % 2 == 1 ? 0.12 : 0.24) : style == "coral" ? 0.12 + (i % 3) * 0.05 : (i == 0 ? 0.16 : 0.11);
                    double tilt = style == "coral" ? (i % 2 == 1 ? 18 : -14) : 0;
                    P(g, "cone", A(x, cy + h / 2, z), A(0.05, h, 0.05), style == "jagged" ? M("#1a1020", 0.4) : band, A(0, 0, tilt));
                    if (style != "spike" || i == 0) P(g, "sphere", A(x, cy + h + 0.005, z), A(0.035, 0.035, 0.035), C["glowC"]);
                }
                if (KB("flame")) for (int i = 0; i < 3; i++) LiveMesh(g, "cone", A((i - 1) * 0.07, cy + 0.13, cr * 0.95), A(0.05, 0.13, 0.05), C["glowC"], Flicker);
            }
            else if (gearHead == "mask")
            {
                var wrap = Mc(Mix(L.Armor, "#000000", 0.25));
                P(g, "dome", A(0, H.Eye - 0.07, H.Face - 0.06), A(0.22, 0.1, 0.17), wrap, A(90, 0, 0));
                P(g, "box", A(0, H.Eye - 0.035, H.Face + 0.0), A(0.2, 0.01, 0.03), C["acc"]);
            }
            else if (gearHead == "veil")
            {
                P(g, "cone", A(0, top + 0.02, -0.01), A(0.3, 0.24, 0.3), M("#1a1028"));
                P(g, "disc", A(0, top - 0.09, -0.01), A(0.42, 0.012, 0.42), M("#1a1028"));
                P(g, "cone", A(0, top - 0.2, -0.04), A(0.5, 0.42, 0.5), Gl("#1a1028", 0.55));
                P(g, "ring", A(0, top - 0.09, 0), A(0.21, 0.21, 0.3), C["accG"], A(90, 0, 0));
            }

            // ---- hair pieces ----
            var hair = C["hair"];
            string hairStyle = KS("hair");
            if (hairStyle == "ponytail")
            {
                P(g, "sphere", A(0, top - 0.05, -r * 0.95), A(0.07, 0.07, 0.07), C["acc"]);
                var pt = LiveGroup(g, A(0, top - 0.05, -r - 0.02), LiveKind.Ponytail, 1.3);
                P(pt, "capsule", A(0, -0.1, -0.06), A(0.11, 0.1, 0.09), hair, A(-30, 0, 0));
                P(pt, "capsule", A(0, -0.24, -0.1), A(0.08, 0.1, 0.07), hair, A(-12, 0, 0));
                P(pt, "cone", A(0, -0.37, -0.11), A(0.07, 0.12, 0.06), hair, A(180, 0, 0));
            }
            else if (hairStyle == "braid")
            {
                for (int i = 0; i < 6; i++) P(g, "sphere", A(0, top - 0.12 - i * 0.075, -r - 0.03 - i * 0.008), A(0.085 - i * 0.006, 0.09, 0.08 - i * 0.005), hair);
                P(g, "ring", A(0, top - 0.6, -r - 0.07), A(0.05, 0.05, 0.4), C["acc"], A(90, 0, 0));
                P(g, "cone", A(0, top - 0.66, -r - 0.07), A(0.06, 0.1, 0.05), hair, A(180, 0, 0));
            }
            else if (hairStyle == "bun")
            {
                P(g, "sphere", A(0, top - 0.02, -r * 0.8), A(0.13, 0.12, 0.12), hair);
                P(g, "rod", A(0.04, top + 0.02, -r * 0.8), A(0.015, 0.2, 0.015), C["gold"], A(0, 0, 60));
            }
            else if (hairStyle == "flame")
            {
                for (int i = 0; i < 5; i++)
                {
                    double a = (i - 2) * 0.5;
                    LiveMesh(g, "cone", A(Math.Sin(a) * 0.08, top + 0.04 - Math.Abs(i - 2) * 0.03, -0.04 - Math.Cos(a) * 0.03), A(0.09, 0.26 - Math.Abs(i - 2) * 0.05, 0.09), i % 2 == 1 ? C["glowC"] : Gl(L.Hair), Flicker, A(-20, 0, (i - 2) * -14));
                }
            }
            else if (hairStyle == "long")
            {
                P(g, "box", A(0, top - 0.33, -r * 0.6), A(r * 1.9, 0.36, 0.08), hair, A(8, 0, 0));
                P(g, "cone", A(0, top - 0.55, -r * 0.62), A(r * 1.9, 0.12, 0.08), hair, A(180, 0, 0));
            }
            if (KB("beardBraid"))
            {
                P(g, "ring", A(0, -0.06, 0.13), A(0.05, 0.05, 0.4), C["gold"], A(90, 0, 0));
                for (int i = 0; i < 3; i++) P(g, "sphere", A(0, -0.1 - i * 0.05, 0.13 + i * 0.01), A(0.055 - i * 0.008, 0.06, 0.05), hair);
                P(g, "sphere", A(0, -0.25, 0.155), A(0.04, 0.04, 0.04), C["gold"]);
            }
            if (KS("hat") == "straw")
            {
                var straw = M("#d8bb6a"); var hband = M(L.Accent);
                P(g, "disc", A(0, top - 0.04, 0), A(0.62, 0.02, 0.62), straw, A(-6, 0, 0));
                P(g, "cone", A(0, top + 0.06, -0.01), A(0.32, 0.2, 0.32), straw);
                P(g, "rod", A(0, top - 0.02, -0.01), A(0.27, 0.04, 0.27), hband);
            }
            // ---- face: eyes, brows and mouth ----
            if (!hollow && !KFalse("face"))
            {
                var F = HeroArt.Face(id);
                double ex = headSrc == "hooded" ? 0.046 : 0.045, ey = headSrc == "hooded" ? 0.113 : 0.109, ez = headSrc == "hooded" ? 0.118 : 0.11;
                bool masked = gearHead == "mask";
                var iris = Glow(F.Iris); var white = Glow("#fbf6ee"); var browM = M(Mul(L.Hair, 0.55));
                var lip = M(Mix(Looks.Skins.TryGetValue(L.Skin ?? "", out var sk) ? sk : "#c99068", "#5a2a2a", 0.55));
                foreach (var s in new[] { -1.0, 1.0 })
                {
                    P(g, "sphere", A(s * ex, ey, ez), A(0.026, 0.028, 0.008), white);
                    P(g, "sphere", A(s * ex, ey - 0.001, ez + 0.003), A(0.016, 0.02, 0.006), iris);
                    P(g, "sphere", A(s * ex + 0.004, ey + 0.005, ez + 0.006), A(0.006, 0.006, 0.003), white);
                    if (!(gearHead == "helm" && helmStyle == "great")) P(g, "box", A(s * (ex + 0.002), ey + 0.026, ez + 0.002), A(0.036, 0.009, 0.008), browM, A(0, 0, s * F.Brow));
                }
                bool hasBeard = headSrc != "hooded" && !B.Shave && !hide.Contains("hair");
                if (!hasBeard && !masked)
                {
                    double my = ey - 0.06, mz = ez + 0.004;
                    if (F.Mouth == "smile") foreach (var s in new[] { -1.0, 1.0 }) P(g, "box", A(s * 0.011, my + 0.002, mz), A(0.022, 0.005, 0.006), lip, A(0, 0, s * 14));
                    else if (F.Mouth == "frown") foreach (var s in new[] { -1.0, 1.0 }) P(g, "box", A(s * 0.011, my, mz), A(0.022, 0.005, 0.006), lip, A(0, 0, s * -12));
                    else if (F.Mouth == "smirk") { P(g, "box", A(-0.004, my, mz), A(0.022, 0.005, 0.006), lip); P(g, "box", A(0.013, my + 0.003, mz), A(0.012, 0.005, 0.006), lip, A(0, 0, 22)); }
                    else P(g, "box", A(0, my, mz), A(0.03, 0.005, 0.006), lip);
                }
            }
            if (hooded && (L.Glow != null || hollow) && gearHead != "halo")
                foreach (var x in new[] { -0.05, 0.05 }) P(g, "sphere", A(x, H.Eye, H.Face), A(0.035, 0.022, 0.02), Gl(hollow ? "#ff2a2a" : L.Glow));

            // ---- helm gear ----
            if (gh != null)
            {
                var gs = Socket("gH", "Head", A(0, 0, 0), null, 0, headClass + GearSig(gh));
                var gg = gs.Root;
                var metal = M(GMetal(gh.R, 0.4), gh.R == 1 ? 0 : 0.6); var trim = GTrim(gh.R); var gem = Gl(SetGlow.TryGetValue(gh.S ?? "", out var sg) ? sg : L.Accent);
                var leather = M("#5a4232");
                if (headClass == "open" || headClass == "adorn")
                {
                    double by = hooded ? H.Eye + 0.11 : H.Eye + 0.065, br = r * (hooded ? 1.02 : 1.0);
                    bool hat = KB("hat");
                    if (hat) P(gg, "rod", A(0, top - 0.005, -0.01), A(0.28, 0.025, 0.28), trim);
                    else P(gg, "ring", A(0, by, -0.005), A(br * 1.98, br * 2.08, gh.R == 1 ? 0.22 : 0.16), gh.R == 1 ? leather : trim, A(80, 0, 0));
                    double fy = hat ? top : by, fz = hat ? 0.14 : (hooded ? H.Face : br * 0.98 + 0.012);
                    if (gh.R >= 2) P(gg, "octa", A(0, fy, fz), A(0.035 + gh.R * 0.005, 0.045 + gh.R * 0.007, 0.022), gh.R >= 3 ? gem : metal);
                    if (gh.R >= 3 && !hat && !hooded) foreach (var s in new[] { -1.0, 1.0 }) P(gg, "box", A(s * (br + 0.005), by - 0.035, -0.01), A(0.022, 0.07, 0.09), metal);
                    if (gh.R >= 4) foreach (var s in new[] { -1.0, 1.0 }) P(gg, "cone", A(s * (br + 0.02), by + 0.025, -0.03), A(0.045, 0.11 + (gh.R - 4) * 0.06, 0.016), trim, A(-40, 90, s * -40));
                    if (gh.R >= 5 && !hat) P(gg, "octa", A(0, by + 0.03, -br - 0.01), A(0.05, 0.08, 0.03), gem);
                    if (hat && gh.R >= 3) P(gg, "cone", A(0.1, top + 0.08, -0.08), A(0.035, 0.22 + gh.R * 0.02, 0.018), gem, A(-30, 0, -30));
                }
                else
                {
                    P(gg, "rod", A(0, top - 0.115, -0.01), A(r * 2.4, 0.03, r * 2.5), trim);
                    if (gh.R >= 2) P(gg, "box", A(0, top - 0.085, H.Face - 0.01), A(0.12 + gh.R * 0.01, 0.03, 0.025), metal);
                    if (gh.R >= 3) P(gg, "octa", A(0, top - 0.06, H.Face + 0.0), A(0.04, 0.055, 0.028), gem);
                    if (gh.R >= 4) P(gg, "box", A(0, top + 0.02, -0.02), A(0.025, 0.06 + (gh.R - 4) * 0.04, r * 2.0), trim);
                }
            }
        }

        // ---- body: robes, coats, tabards, aprons, belts (hip-mounted, model-aligned) ----
        void Body()
        {
            if (!(KB("robe") || KB("coat") || KB("tabard") || KB("apron") || KB("belt") || KB("scabbard") || KB("coil"))) return;
            var g = SocketM("Hp", "Hips", A(0, 0, 0)).Root;
            var robeC = Mc(KS("robeColor") ?? L.Cloth ?? L.Armor); var trimC = M(L.Accent, 0.3);
            string robe = KS("robe");
            if (robe != null)
            {
                double top = 0.12, len = robe == "long" ? hipY + top - 0.07 : 0.45, w = KN("robeW", 1);
                P(g, "taper", A(0, top - len / 2, 0.0), A(0.5 * w, len, 0.42 * w), robeC, A(180, 0, 0));
                if (robe == "long")
                {
                    double ol = len * 0.42; var over = Mc(Mix(KS("robeColor") ?? L.Cloth ?? L.Armor, "#000000", 0.18));
                    P(g, "taper", A(0, top - ol / 2 + 0.01, 0.0), A(0.53 * w, ol, 0.45 * w), over, A(180, 0, 0));
                    P(g, "taper", A(0, top - ol + 0.02, 0.0), A(0.555 * w, 0.03, 0.47 * w), trimC, A(180, 0, 0));
                }
                P(g, "taper", A(0, top - len + 0.03, 0.0), A(0.53 * w, 0.06, 0.45 * w), trimC, A(180, 0, 0));
                if (robe == "long" && !KFalse("stole")) P(g, "box", A(0, top - len / 2, 0.205 * w), A(0.12, len * 0.96, 0.02), trimC, A(-9, 0, 0));
                if (KB("bells")) for (int i = 0; i < 6; i++)
                {
                    double a = (i / 6.0) * Math.PI * 2 + 0.3;
                    P(g, "bell", A(Math.Sin(a) * 0.235 * w, top - len + 0.05, Math.Cos(a) * 0.195 * w), A(0.05, 0.06, 0.05), C["gold"], A(180, 0, 0));
                }
            }
            if (KB("coat"))
            {
                var coatC = Mc(KS("coat") ?? L.Armor); double len = 0.5;
                P(g, "box", A(0, 0.02 - len / 2, -0.12), A(0.36, len, 0.03), coatC, A(8, 0, 0));
                foreach (var s in new[] { -1.0, 1.0 })
                {
                    P(g, "box", A(s * 0.15, 0.02 - len / 2, 0.0), A(0.03, len, 0.22), coatC, A(0, 0, s * 4));
                    P(g, "box", A(s * 0.12, 0.02 - len / 2, 0.1), A(0.1, len, 0.03), coatC, A(-6, s * 20, 0));
                }
                P(g, "box", A(0, 0.02 - len + 0.02, -0.135), A(0.37, 0.03, 0.035), trimC, A(8, 0, 0));
            }
            if (KB("tabard"))
            {
                var tc = Mc(KS("tabard")); double len = 0.5;
                P(g, "box", A(0, 0.25 - len / 2 + 0.05, 0.16), A(0.22, len + 0.25, 0.02), tc, A(-6, 0, 0));
                P(g, "box", A(0, 0.25 - len / 2 + 0.05, -0.14), A(0.22, len + 0.25, 0.02), tc, A(6, 0, 0));
                P(g, "box", A(0, 0.25 - len - 0.05, 0.19), A(0.24, 0.03, 0.025), trimC, A(-6, 0, 0));
                P(g, "box", A(0, 0.25 - len - 0.05, -0.17), A(0.24, 0.03, 0.025), trimC, A(6, 0, 0));
                if (KB("emblem")) P(g, "octa", A(0, 0.2, 0.18), A(0.08, 0.11, 0.02), M(KS("emblem"), 0.3));
            }
            if (KB("apron"))
            {
                var ac = M("#4a3426");
                P(g, "box", A(0, 0.05, 0.17), A(0.3, 0.75, 0.025), ac, A(-4, 0, 0));
                P(g, "box", A(0, -0.31, 0.19), A(0.31, 0.03, 0.03), C["acc"], A(-4, 0, 0));
                P(g, "box", A(0.08, -0.05, 0.19), A(0.1, 0.1, 0.02), M("#3a281c"), A(-4, 0, 0));
                P(g, "rod", A(0.08, -0.01, 0.205), A(0.012, 0.12, 0.012), C["iron"], A(0, 0, 20));
            }
            if (KB("belt"))
            {
                string beltC = KS("belt") ?? "#3a2a20"; var bc = M(beltC);
                P(g, "rod", A(0, 0.1, 0.0), A(0.38, 0.05, 0.32), bc);
                P(g, "ring", A(0, 0.1, 0.162), A(0.06, 0.05, 0.3), C["gold"]);
                P(g, "box", A(0, 0.1, 0.165), A(0.008, 0.045, 0.01), C["gold"]);
                P(g, "box", A(-0.16, 0.04, 0.05), A(0.065, 0.1, 0.08), bc);
                P(g, "box", A(-0.165, 0.08, 0.06), A(0.07, 0.035, 0.085), M(Mul(beltC, 0.8)), A(-12, 0, 0));
                P(g, "sphere", A(-0.165, 0.065, 0.1), A(0.014, 0.014, 0.014), C["gold"]);
                P(g, "rod", A(0.16, 0.05, 0.07), A(0.03, 0.07, 0.03), Glow(Mix(L.Accent, "#ffffff", 0.2), 0.85));
                P(g, "rod", A(0.16, 0.095, 0.07), A(0.02, 0.02, 0.02), C["wood"]);
            }
            if (KB("scabbard"))
            {
                P(g, "box", A(-0.19, -0.05, -0.02), A(0.03, 0.7, 0.05), M("#1c1c22"), A(62, 0, -8));
                P(g, "box", A(-0.19, -0.05, -0.02), A(0.035, 0.05, 0.06), C["gold"], A(62, 0, -8));
            }
            if (KB("coil")) for (int i = 0; i < 3; i++) P(g, "ring", A(0.2, 0.0 - i * 0.012, 0.03), A(0.14, 0.14, 0.3), i == 1 ? C["accG"] : C["leather"], A(10, 90, 0));
        }

        // ---- shoulders: pauldrons (kit and/or chest gear), aura orbs, breastplate, mantles ----
        void Shoulders()
        {
            var gc = gear?.Chest;
            string pStyle = KS("pauldrons") ?? (gc != null ? (gc.R == 1 ? "leather" : "plate") : null);
            if (pStyle != null)
                foreach (var (side, bn) in new[] { (1.0, "UpperArmL"), (-1.0, "UpperArmR") })
                {
                    var g = SocketM("P" + side, bn, A(side * 0.02, 0.01, 0), gc != null ? $"{gc.R}{(string.IsNullOrEmpty(gc.S) ? "" : gc.S.Substring(0, 1))}" : "").Root;
                    double size = KN("pauldronSize", 1) * (gc != null ? 0.72 + gc.R * 0.05 : 1);
                    var base0 = gc != null ? M(GMetal(gc.R, 0.75), gc.R == 1 ? 0 : 0.55) : M(KS("pauldronColor") ?? Mix(L.Armor, "#c8ccd4", 0.25), 0.4);
                    var trim = gc != null ? GTrim(gc.R) : C["acc"];
                    double tiltZ = side * -50;
                    var pg = Pivot(g, A(0, 0, 0)); pg.Scale = new V3(size, size, size);
                    if (pStyle == "leather") P(pg, "sphere", A(side * 0.02, 0.0, 0), A(0.2, 0.12, 0.2), M("#5a4232"), A(0, 0, tiltZ));
                    else if (pStyle == "shell")
                    {
                        P(pg, "shell", A(side * 0.02, -0.03, 0), A(0.24, 0.26, 0.22), base0, A(0, 0, tiltZ));
                        for (int i = -1; i <= 1; i++) P(pg, "box", A(side * 0.06, 0.03, i * 0.05), A(0.02, 0.1, 0.02), trim, A(i * 20, 0, tiltZ));
                    }
                    else if (pStyle == "ice")
                    {
                        P(pg, "shell", A(side * 0.01, -0.03, 0), A(0.2, 0.2, 0.2), base0, A(0, 0, tiltZ));
                        for (int i = -1; i <= 1; i++) P(pg, "octa", A(side * (0.06 + Math.Abs(i) * 0.01), 0.07 - Math.Abs(i) * 0.02, i * 0.05), A(0.04, 0.16 - Math.Abs(i) * 0.04, 0.04), C["accG"], A(i * 15, 0, side * -25));
                    }
                    else if (pStyle == "spike")
                    {
                        P(pg, "shell", A(side * 0.02, -0.03, 0), A(0.24, 0.27, 0.24), base0, A(0, 0, tiltZ));
                        for (int i = -1; i <= 1; i++) P(pg, "cone", A(side * 0.08, 0.06, i * 0.06), A(0.04, 0.14, 0.04), trim, A(i * 15, 0, side * -45));
                    }
                    else
                    {
                        P(pg, "shell", A(side * 0.02, -0.03, 0), A(0.26, 0.27, 0.25), base0, A(0, 0, tiltZ));
                        P(pg, "ring", A(side * 0.0, -0.035, 0), A(0.13, 0.13, 0.4), trim, A(90, 0, tiltZ));
                        for (int i = 1; i <= 2; i++) P(pg, "dome", A(side * (0.03 + i * 0.012), -0.035 - i * 0.03, 0), A(0.24 - i * 0.025, 0.1, 0.23 - i * 0.025), base0, A(0, 0, tiltZ - side * 8 * i));
                        for (int i = -1; i <= 1; i++) P(pg, "sphere", A(side * 0.075, 0.035, i * 0.06), A(0.018, 0.018, 0.018), trim);
                        if (gc != null && gc.R >= 3) P(pg, "dome", A(side * 0.05, -0.07, 0), A(0.22, 0.12, 0.22), base0, A(0, 0, side * -65));
                        if (gc != null && gc.R >= 4) P(pg, "ring", A(side * 0.035, -0.075, 0), A(0.12, 0.12, 0.35), trim, A(90, 0, side * -65));
                    }
                    if (gc != null && gc.R >= 3 && pStyle != "leather") P(pg, "octa", A(side * 0.1, 0.02, 0.0), A(0.035, 0.045, 0.035), Gl(SetGlow.TryGetValue(gc.S ?? "", out var sg) ? sg : L.Accent));
                    if (KB("aura"))
                    {
                        P(g, "sphere", A(side * 0.05, 0.06, 0), A(0.11, 0.11, 0.11), C["glowC"]);
                        LiveMesh(g, "sphere", A(side * 0.05, 0.06, 0), 0.2, C["glowH"], Pulse);
                    }
                }
            else if (KB("aura"))
                foreach (var (side, bn) in new[] { (1.0, "UpperArmL"), (-1.0, "UpperArmR") })
                {
                    var g = SocketM("A" + side, bn, A(side * 0.03, 0.04, 0)).Root;
                    P(g, "sphere", A(0, 0, 0), A(0.15, 0.15, 0.15), C["glowC"]);
                    LiveMesh(g, "sphere", A(0, 0, 0), 0.3, C["glowH"], Pulse);
                }
            // Chest gear: gorget and breastplate (Fine+).
            if (gc != null && gc.R >= 2)
            {
                var g = SocketM("gC", "Chest", A(0, 0, 0), GearSig(gc)).Root;
                var metal = M(GMetal(gc.R), 0.55); var trim = GTrim(gc.R); var gem = Gl(SetGlow.TryGetValue(gc.S ?? "", out var sg) ? sg : L.Accent);
                double fz = baseModel == "hooded" ? 0.035 : 0.045;
                P(g, "rod", A(0, 0.13, 0.0), A(0.24, 0.05, 0.2), metal);
                P(g, "rod", A(0, 0.13, 0.0), A(0.25, 0.012, 0.21), trim);
                double ps = 0.92 + gc.R * 0.03;
                P(g, "breast", A(0, 0.0, fz + 0.075), A(ps, ps, 1), metal, A(-6, 0, 0));
                P(g, "box", A(0, 0.0, fz + 0.1), A(0.022, 0.24, 0.02), trim, A(-6, 0, 0));
                if (gc.R >= 3) P(g, "octa", A(0, 0.03, fz + 0.115), A(0.045 + gc.R * 0.004, 0.06 + gc.R * 0.005, 0.025), gem);
                if (gc.R >= 4) P(g, "box", A(0, -0.13, fz + 0.085), A(0.24, 0.025, 0.03), trim, A(-6, 0, 0));
                if (gc.R >= 5) foreach (var s in new[] { -1.0, 1.0 }) P(g, "box", A(s * 0.1, 0.08, fz + 0.1), A(0.07, 0.02, 0.02), trim, A(-6, 0, s * -25));
            }
            if (KB("mantle") || KB("collar") || KB("scarf"))
            {
                var g = SocketM("Mn", "Chest", A(0, 0, 0)).Root;
                string mantle = KS("mantle");
                if (mantle == "fur" || mantle == "moss")
                {
                    string fc = mantle == "fur" ? (KS("furColor") ?? "#e8e4dc") : L.Accent;
                    var fur = M(fc); var furD = M(Mul(fc, 0.75));
                    for (int i = 0; i < 9; i++)
                    {
                        double a = (i / 8.0) * Math.PI * 1.25 - Math.PI * 0.625;
                        P(g, "sphere", A(Math.Sin(a) * 0.2, 0.14 - Math.Abs(Math.Sin(a)) * 0.03, -Math.Cos(a) * 0.1 - 0.02), A(0.16, 0.12, 0.14), i % 2 == 1 ? fur : furD);
                    }
                    P(g, "sphere", A(0, 0.06, -0.15), A(0.36, 0.2, 0.14), furD);
                    if (mantle == "moss") for (int i = 0; i < 5; i++) P(g, "cone", A(-0.16 + i * 0.08, 0.2, -0.12), A(0.02, 0.16, 0.02), M("#8a9a50"), A(-20 + i * 5, 0, (i - 2) * 12));
                }
                else if (mantle == "ember")
                {
                    for (int i = 0; i < 5; i++) foreach (var s in new[] { -1.0, 1.0 })
                        LiveMesh(g, "cone", A(s * (0.12 + i * 0.03), 0.17 - i * 0.015, -0.06 - i * 0.02), A(0.06, 0.2 - i * 0.02, 0.06), i % 2 == 1 ? C["glowC"] : C["accG"], Flicker, A(-25, 0, s * (-20 - i * 8)));
                }
                if (KS("collar") == "spike")
                    for (int i = 0; i < 7; i++)
                    {
                        double a = (i - 3) * 0.32;
                        P(g, "cone", A(Math.Sin(a) * 0.17, 0.27 + Math.Cos(a * 1.4) * 0.05, -0.1 - Math.Cos(a) * 0.03), A(0.05, 0.26 - Math.Abs(i - 3) * 0.03, 0.03), i % 2 == 1 ? M("#1a1020", 0.4) : C["acc"], A(-15, 0, -a * 40));
                    }
                if (KB("scarf"))
                {
                    var sc = Mc(KS("scarf"));
                    P(g, "rod", A(0, 0.16, 0.0), A(0.22, 0.07, 0.2), sc);
                    var tails = LiveGroup(g, A(0.06, 0.15, -0.1), LiveKind.ScarfTails, 1.6);
                    P(tails, "box", A(0.0, -0.18, 0), A(0.07, 0.36, 0.012), sc, A(0, 0, 6));
                    P(tails, "box", A(-0.06, -0.14, 0), A(0.06, 0.28, 0.012), sc, A(0, 0, -8));
                }
            }
        }

        // ---- back: cape (two hinged panels), quiver, shovel, wings, sunburst; floating shards ----
        void Back()
        {
            if (KB("cape") || L.Prop == "bow" || KB("back"))
            {
                var g = SocketM("B", "Chest", A(0, 0, 0)).Root;
                double z = baseModel == "hooded" ? -0.15 : -0.14;
                if (KB("cape"))
                {
                    var cloth = Mc(KS("capeColor") ?? Mul(L.Armor, 0.55)); var trim = Mc(L.Accent);
                    double capeLen = KN("capeLen", 1);
                    foreach (var sx in new[] { -1.0, 1.0 }) P(g, "sphere", A(sx * 0.12, 0.14, z + 0.04), A(0.05, 0.05, 0.03), C["gold"]);
                    var upper = LiveGroup(g, A(0, 0.14, z), LiveKind.Cape, 1);
                    PMesh(upper, KitShapes.Sheet(0.24, 0.42, 0.52, 0.09), A(0, 0, -0.01), A(1, 1, 1), cloth);
                    PMesh(upper, KitShapes.Sheet(0.22, 0.39, 0.5, 0.085), A(0, -0.01, -0.002), A(1, 1, 1), Mc(Mix(L.Accent, "#000000", 0.35)));
                    var lower = Pivot(upper, A(0, -0.47, -0.01)); // the last child: the cape animation swings it
                    PMesh(lower, KitShapes.Sheet(0.4, 0.56, 0.06 + 0.5 * capeLen, 0.11), A(0, 0.06, 0), A(1, 1, 1), cloth);
                    PMesh(lower, KitShapes.Sheet(0.56, 0.57, 0.045, 0.11, 10, 1), A(0, -0.5 * capeLen + 0.02, 0.003), A(1.01, 1, 1.01), trim);
                }
                if (L.Prop == "bow")
                {
                    P(g, "rod", A(0.06, -0.05, -0.2), A(0.12, 0.46, 0.12), C["leather"], A(0, 0, -25));
                    for (int i = 0; i < 3; i++) P(g, "cone", A(0.15 + i * 0.03, 0.2 + i * 0.01, -0.2 + (i - 1) * 0.03), A(0.04, 0.08, 0.015), C["acc"], A(0, 0, -25));
                }
                string back = KS("back");
                if (back == "shovel")
                {
                    P(g, "rod", A(0, 0.0, z - 0.04), A(0.04, 1.0, 0.04), C["wood"], A(0, 0, 35));
                    P(g, "box", A(0.3, -0.42, z - 0.04), A(0.2, 0.26, 0.02), C["iron"], A(0, 0, 35));
                    P(g, "box", A(-0.28, 0.4, z - 0.04), A(0.14, 0.04, 0.04), C["wood"], A(0, 0, 35));
                }
                else if (back == "wings")
                {
                    var feather = Mbone("#fbf6ea"); var tip = Mg(Mix(L.Accent, "#ffffff", 0.3));
                    foreach (var s in new[] { -1.0, 1.0 })
                    {
                        var w = LiveGroup(g, A(s * 0.07, 0.12, z - 0.03), LiveKind.Wing, 0, s);
                        for (int i = 0; i < 4; i++) P(w, "sphere", A(s * (0.06 + i * 0.07), 0.2 + i * 0.03, -0.04), A(0.13, 0.1, 0.035), feather, A(0, 0, s * -20));
                        for (int i = 0; i < 7; i++)
                        {
                            double ang = (10 + i * 13) * D2R, len = 0.48 - Math.Abs(i - 3) * 0.04, dx = Math.Cos(ang) * len / 2, dy = -Math.Sin(ang) * len / 2;
                            P(w, "sphere", A(s * (0.24 + dx), 0.28 + dy, -0.05 - i * 0.004), A(0.12, len, 0.025), i < 2 ? tip : feather, A(0, 0, s * (90 - (10 + i * 13))));
                        }
                    }
                }
                else if (back == "sunburst")
                {
                    var hp = Pivot(g, A(0, 0.3, z - 0.08));
                    P(hp, "ring", A(0, 0, 0), A(0.46, 0.46, 0.5), C["gold"]);
                    for (int i = 0; i < 12; i++) { double a = i * 30 * D2R; P(hp, "cone", A(Math.Cos(a) * 0.3, Math.Sin(a) * 0.3, 0), A(0.05, i % 2 == 1 ? 0.14 : 0.22, 0.02), C["gold"], A(0, 0, i * 30 - 90)); }
                    LiveMesh(g, "sphere", A(0, 0.3, z - 0.1), A(0.5, 0.5, 0.1), C["glowH"], Pulse);
                }
            }
            if (KB("shards"))
            {
                var g = SocketM("Sh", "Hips", A(0, 0.35, 0)).Root;
                var ring = LiveGroup(g, A(0, 0, 0), LiveKind.ShardRing);
                for (int i = 0; i < 5; i++)
                {
                    double a = i * 72 * D2R;
                    P(ring, "octa", A(Math.Cos(a) * 0.45, Math.Sin(i * 2.1) * 0.12, Math.Sin(a) * 0.45), A(0.06, 0.13, 0.02), i % 2 == 1 ? C["accG"] : M("#cfe4ff", 0.6), A(0, -i * 72 + 90, 20));
                }
            }
        }

        // ---- boots gear: shin greaves (or toe caps under a long robe) ----
        void BootsGear()
        {
            var gb = gear?.Boots;
            if (gb == null) return;
            bool longRobe = KS("robe") == "long";
            foreach (var (side, ln, fn) in new[] { (1.0, "LowerLegL", "FootL"), (-1.0, "LowerLegR", "FootR") })
            {
                var metal = M(GMetal(gb.R), gb.R == 1 ? 0 : 0.55); var trim = GTrim(gb.R); string gemC = SetGlow.TryGetValue(gb.S ?? "", out var sg) ? sg : L.Accent; var gem = Gl(gemC);
                if (!longRobe)
                {
                    var g = SocketM("gL" + side, ln, A(0, 0, 0), GearSig(gb)).Root;
                    if (gb.R == 1) { P(g, "rod", A(0, -0.24, 0.0), A(0.125, 0.22, 0.125), M("#5a4232")); P(g, "rod", A(0, -0.16, 0), A(0.13, 0.02, 0.13), M("#3a2a20")); }
                    else
                    {
                        P(g, "taper", A(0, -0.21, 0.005), A(0.13, 0.3, 0.13), metal);
                        P(g, "rod", A(0, -0.355, 0.005), A(0.115, 0.025, 0.115), trim);
                        P(g, "box", A(0, -0.2, 0.06), A(0.03, 0.26, 0.02), trim);
                        if (gb.R >= 3) P(g, "sphere", A(0, -0.03, 0.035), A(0.11, 0.1, 0.09), metal);
                        if (gb.R >= 4) P(g, "cone", A(side * 0.065, -0.04, 0.0), A(0.03, 0.12 + (gb.R - 4) * 0.06, 0.03), trim, A(0, 0, side * -70));
                        if (gb.R >= 5) { P(g, "octa", A(0, -0.03, 0.085), A(0.035, 0.045, 0.02), gem); LiveMesh(g, "sphere", A(0, -0.03, 0.08), 0.1, Gl(gemC, 0.35), Pulse); }
                    }
                }
                var f = SocketM("gF" + side, fn, A(0, 0, 0), GearSig(gb) + (longRobe ? "r" : "")).Root;
                if (gb.R == 1) { P(f, "rod", A(0, 0.06, -0.01), A(0.12, 0.05, 0.14), M("#5a4232")); continue; }
                P(f, "dome", A(0, 0.02, 0.06), A(0.12, 0.08, 0.14), metal);
                P(f, "rod", A(0, 0.08, -0.01), A(0.13, 0.035, 0.14), trim);
                if (longRobe && gb.R >= 3) P(f, "octa", A(0, 0.06, 0.12), A(0.03, 0.04, 0.02), gem);
            }
        }

        // ---------- baking (static parts of a socket, merged per material) ----------
        public sealed class Baked { public readonly Dictionary<string, (KitMat mat, MeshData mesh)> ByMat = new Dictionary<string, (KitMat, MeshData)>(); }

        // Merges `root`'s geometry (in its own space) and its descendants into one mesh per material.
        // Stops at live nodes (the client gives each its own animated transform) and, with
        // splitPivots, at geometry-less sub-pivots (e.g. the cape's swinging lower panel).
        public static Baked Bake(KitNode root, bool splitPivots = false)
        {
            var b = new Baked();
            void Walk(KitNode n, Mat4 parent, bool isRoot)
            {
                if (!isRoot && n.Live != null) return;
                if (!isRoot && splitPivots && IsPivot(n)) return;
                var m = isRoot ? parent : parent * Mat4.From(n.Local);
                var geo = n.Geometry;
                if (geo != null && n.Mat != null)
                {
                    if (!b.ByMat.TryGetValue(n.Mat.Key, out var e)) { e = (n.Mat, new MeshData()); b.ByMat[n.Mat.Key] = e; }
                    geo.AppendTo(e.mesh, m, n.Mat.DoubleSided);
                }
                foreach (var c in n.Children) Walk(c, m, false);
            }
            Walk(root, Mat4.Identity(), true);
            return b;
        }
        public static bool IsPivot(KitNode n) => !n.HasGeometry && n.Children.Count > 0;

        // Total triangles a kit adds (for tests and budgets).
        public static int Triangles(IEnumerable<KitSocket> sockets) =>
            sockets.Sum(s => s.Root.All().Where(n => n.HasGeometry).Sum(n => n.Geometry.Triangles * (n.Mat != null && n.Mat.DoubleSided ? 2 : 1)));
    }
}
