// Battle layout and camera framing, ported from game3d/three3d.mjs (v0.19.x), as plain math so it
// is testable outside Unity. Coordinates here are Unity's (left-handed, +Z away from the default
// camera): the web's three.js (x, y, z) maps to (x, y, -z), which keeps the same picture on screen.
using System;

namespace Sigilbound.Core
{
    public struct V3
    {
        public double X, Y, Z;
        public V3(double x, double y, double z) { X = x; Y = y; Z = z; }
        public static V3 operator +(V3 a, V3 b) => new V3(a.X + b.X, a.Y + b.Y, a.Z + b.Z);
        public static V3 operator -(V3 a, V3 b) => new V3(a.X - b.X, a.Y - b.Y, a.Z - b.Z);
        public static V3 operator *(V3 a, double k) => new V3(a.X * k, a.Y * k, a.Z * k);
        public double Dot(V3 b) => X * b.X + Y * b.Y + Z * b.Z;
        public V3 Cross(V3 b) => new V3(Y * b.Z - Z * b.Y, Z * b.X - X * b.Z, X * b.Y - Y * b.X);
        public double Length => Math.Sqrt(Dot(this));
        public V3 Normalized => this * (1 / Length);
        public override string ToString() => $"({X:0.###}, {Y:0.###}, {Z:0.###})";
    }

    public sealed class CameraPreset { public string Key, Name; public double Yaw, Pitch; }

    public static class BattleLayout
    {
        // The rune circle's rim (an ellipse): three.js RIM { cx 0, cz -0.6, rx 4.2, rz 3.95 }.
        public const double RimCx = 0, RimCz = 0.6, RimRx = 4.2, RimRz = 3.95;
        public const double Spacing = 2.2;               // metres of arc between neighbours
        public static readonly V3 Centre = new V3(RimCx, 0, RimCz);
        public static readonly V3 CamTarget = new V3(0, 1.0, 0.5); // three.js camTarget (0, 1, -0.5)

        // Allies along the near arc, enemies along the far arc, ~2.2 m apart (three3d.mjs slot()).
        public static V3 Slot(bool ally, int i, int n)
        {
            double step = Spacing / ((RimRx + RimRz) / 2);
            double half = n <= 1 ? 0 : Math.Min(70 * Math.PI / 180, step * (n - 1) / 2);
            double t = n <= 1 ? 0 : -half + i * (2 * half / (n - 1));
            double a = ally ? t : Math.PI - t;               // 0 = near side (camera), PI = far side
            return new V3(RimCx + Math.Sin(a) * RimRx, 0, RimCz - Math.Cos(a) * RimRz);
        }

        // Yaw (degrees, Unity: 0 = facing +Z) that turns a unit at p toward the circle's centre.
        public static double FacingCentreYaw(V3 p) => Math.Atan2(Centre.X - p.X, Centre.Z - p.Z) * 180 / Math.PI;

        public static readonly CameraPreset[] Cameras =
        {
            new CameraPreset { Key = "classic", Name = "Classic", Yaw = 0, Pitch = 34 },
            new CameraPreset { Key = "high", Name = "Overhead", Yaw = 0, Pitch = 60 },
            new CameraPreset { Key = "low", Name = "Cinematic", Yaw = 0, Pitch = 16 },
            new CameraPreset { Key = "angle", Name = "Three-quarter", Yaw = 38, Pitch = 30 },
            new CameraPreset { Key = "front", Name = "Hero view", Yaw = 180, Pitch = 30 },
        };
        public const string DefaultCamera = "angle";
        public static CameraPreset Camera(string key) => Array.Find(Cameras, c => c.Key == key) ?? Array.Find(Cameras, c => c.Key == DefaultCamera);

        // Portrait screens get a wider lens so a full row fits without pulling far back.
        public static double FovFor(double aspect) => aspect < 0.75 ? 62 : 50;

        public static V3 CameraPosition(CameraPreset c, double dist)
        {
            double pitch = c.Pitch * Math.PI / 180, yaw = c.Yaw * Math.PI / 180, h = Math.Cos(pitch) * dist;
            return new V3(CamTarget.X + Math.Sin(yaw) * h, CamTarget.Y + Math.Sin(pitch) * dist, CamTarget.Z - Math.Cos(yaw) * h);
        }

        // Points that must stay on screen: the whole rim with head height and HUD-tag points above it.
        public static V3[] FramePoints(bool titan)
        {
            var pts = new System.Collections.Generic.List<V3>();
            foreach (int sx in new[] { -1, 1 })
                for (int k = 0; k <= 6; k++)
                {
                    double ang = k / 6.0 * Math.PI, x = sx * Math.Sin(ang) * (RimRx + 0.4), zThree = -0.6 + Math.Cos(ang) * (RimRz + 0.4);
                    pts.Add(new V3(x, 0, -zThree)); pts.Add(new V3(x, zThree > 0 ? 2.75 : 3.3, -zThree));
                }
            pts.Add(new V3(0, 3.75, 3.95));                    // HUD tags above the back row
            if (titan) { pts.Add(new V3(0, 5.6, 4.0)); pts.Add(new V3(-2.3, 3.4, 4.0)); pts.Add(new V3(2.3, 3.4, 4.0)); }
            return pts.ToArray();
        }

        // Projects p for a camera at `eye` looking at CamTarget (vertical fov in degrees);
        // returns normalized device coordinates (-1..1), or null if behind the camera.
        public static (double x, double y)? Project(V3 eye, double fovDeg, double aspect, V3 p)
        {
            var f = (CamTarget - eye).Normalized;
            var r = new V3(0, 1, 0).Cross(f).Normalized;   // left-handed: right = up x forward
            var u = f.Cross(r);
            var d = p - eye;
            double z = d.Dot(f);
            if (z <= 1e-6) return null;
            double t = Math.Tan(fovDeg * Math.PI / 360);
            return (d.Dot(r) / (z * t * aspect), d.Dot(u) / (z * t));
        }

        // The closest distance (binary search, as in three3d.mjs resize()) at which every frame
        // point projects inside |x| <= 0.95 and |y| <= 0.84.
        public static double FitDistance(CameraPreset c, double aspect, bool titan)
        {
            var pts = FramePoints(titan);
            double fov = FovFor(aspect);
            bool Fits(double dist)
            {
                var eye = CameraPosition(c, dist);
                foreach (var p in pts)
                {
                    var q = Project(eye, fov, aspect, p);
                    if (q == null || Math.Abs(q.Value.x) > 0.95 || q.Value.y > 0.84 || q.Value.y < -0.84) return false;
                }
                return true;
            }
            double lo = 5, hi = 40;
            for (int i = 0; i < 22; i++) { double mid = (lo + hi) / 2; if (Fits(mid)) hi = mid; else lo = mid; }
            return hi;
        }
    }
}
