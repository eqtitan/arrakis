// Data model for the code-built hero kit (weapons, helms, capes, gear...), ported from
// three3d.mjs buildKit. The kit is a set of sockets on bones, each holding a tree of nodes.
// Static nodes are merged into one mesh per material by the client; "live" nodes animate
// (flames, pulsing glows, swaying capes and hair).
using System;
using System.Collections.Generic;
using System.Globalization;

namespace Sigilbound.Core
{
    public enum KitFinish { Metal, LeatherMetal, Leather, Cloth, Wood, Gold, Hair, Bone, Glow }

    public sealed class KitMat
    {
        public KitFinish Finish; public string Color; public double Opacity = 1;
        public string Key => $"{Finish}|{Color}|{Opacity.ToString("0.00", CultureInfo.InvariantCulture)}";
        public bool DoubleSided => Finish == KitFinish.Cloth;
        public bool IsGlow => Finish == KitFinish.Glow;
    }

    public enum LiveKind
    {
        None, Flicker, Pulse, Spin, Lash, BandanaTails, Ponytail, ScarfTails, Cape, Wing, ShardRing,
    }

    public sealed class LiveSpec
    {
        public LiveKind Kind; public double Spring;   // spring gain (0 = no secondary motion)
        public char Axis = 'y'; public double Rate;    // Spin
        public double Side = 1;                        // Wing
    }

    public sealed class KitNode
    {
        public string Shape;              // KitShapes kind, or null for a pivot (group)
        public MeshData Mesh;             // explicit geometry (cloth sheets), overrides Shape
        public KitMat Mat;
        public V3 Pos = new V3(0, 0, 0), Scale = new V3(1, 1, 1);
        public double Ex, Ey, Ez;         // Euler rotation (radians) in EulerOrder
        public string EulerOrder = "XYZ";
        public Quat? RotQ;                // explicit quaternion (overrides the Euler angles)
        public LiveSpec Live;
        public readonly List<KitNode> Children = new List<KitNode>();
        public bool HasGeometry => Mesh != null || Shape != null;

        public Quat Rotation => RotQ ?? Quat.FromEuler(Ex, Ey, Ez, EulerOrder);
        public Xform Local => new Xform { Pos = Pos, Rot = Rotation, Scale = Scale };
        public MeshData Geometry => Mesh ?? (Shape != null ? KitShapes.Get(Shape) : null);

        public IEnumerable<KitNode> All()
        {
            yield return this;
            foreach (var c in Children) foreach (var n in c.All()) yield return n;
        }
    }

    public enum SocketMode { Bone, Model }

    // A group on a bone, in the model's metres (three3d.mjs socket / socketM).
    // Bone: `Pos` and `Dir` (where the group's +Y points) are in bone space, then `Roll` about +Y,
    // or an explicit `Basis` rotation. Model: aligned with the model's rest-pose axes
    // (+Y up, +Z forward), `Pos` in those axes.
    public sealed class KitSocket
    {
        public string Slot, Bone; public SocketMode Mode;
        public V3 Pos = new V3(0, 0, 0); public V3? Dir; public double Roll; public Quat? Basis;
        public double ScaleMul = 1;
        public string CacheKey;
        public readonly KitNode Root = new KitNode();

        // Inner rotation for Bone sockets (fromUnitVectors(+Y, dir) then roll about +Y).
        public Quat BoneRotation
        {
            get
            {
                if (Basis.HasValue) return Basis.Value;
                if (!Dir.HasValue) return Quat.Identity;
                var q = Quat.FromUnitVectors(new V3(0, 1, 0), Dir.Value.Normalized);
                if (Roll != 0) q = q * Quat.AxisAngle(new V3(0, 1, 0), Roll * Math.PI / 180);
                return q;
            }
        }
    }

    // Per-hero 3D build (three3d.mjs BODY) and face (FACE).
    public sealed class BodySpec
    {
        public Dictionary<string, string> Parts = new Dictionary<string, string>();
        public string[] Hide = new string[0];
        public bool Shave, Bald;
        public double H = 1, Head, Arms, Legs, Sh;
        public double[] Bulk;
    }
    public sealed class FaceSpec { public double Brow = 6; public string Mouth = "flat"; public string Iris = "#4a3a2a"; }

    // Equipped gear as the 3D model shows it (heroGearLook in art.js): rarity 1-5 and set key.
    public sealed class GearLook
    {
        public sealed class Item { public int R; public string S = ""; }
        public Item Weapon, Helm, Chest, Boots;
        public string Key => $"{Sig(Weapon)}.{Sig(Helm)}.{Sig(Chest)}.{Sig(Boots)}";
        public static string Sig(Item g) => g == null ? "0" : $"{g.R}{(string.IsNullOrEmpty(g.S) ? "-" : g.S.Substring(0, 1))}";

        // Hollow enemies: plain gear that gets finer with level (unitGear in three3d.mjs).
        public static GearLook ForEnemy(int level, bool boss)
        {
            if (level < 8) return null;
            int r = Math.Min(5, 1 + level / 12);
            var g = new GearLook { Helm = new Item { R = r }, Chest = new Item { R = r } };
            if (level >= 20 || boss) { g.Boots = new Item { R = r }; g.Weapon = new Item { R = r }; }
            return g;
        }
        public static GearLook ForRival(int level)
        {
            int r = Math.Min(5, 1 + level / 12);
            return new GearLook { Helm = new Item { R = r }, Chest = new Item { R = r }, Boots = new Item { R = r }, Weapon = new Item { R = r } };
        }
    }

    public static partial class HeroArt
    {
        public static Dictionary<string, object> Kit(string id) => KitTable.TryGetValue(id ?? "", out var k) ? k : new Dictionary<string, object>();
        public static BodySpec Body(string id) => BodyTable.TryGetValue(id ?? "", out var b) ? b : new BodySpec();
        public static FaceSpec Face(string id) => FaceTable.TryGetValue(id ?? "", out var f) ? f : new FaceSpec();
    }
}
