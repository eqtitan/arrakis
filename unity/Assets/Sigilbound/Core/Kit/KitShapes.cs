// Unit shapes for the code-built kit, matching the three.js geometries in three3d.mjs geos()
// (same sizes, orientation and origin), as plain triangle lists in three.js space.
using System;
using System.Collections.Generic;

namespace Sigilbound.Core
{
    public sealed class MeshData
    {
        public string Name;  // e.g. "sheet:0.24,0.42,0.52,0.09" (tests compare it with the web's call)
        public readonly List<V3> Pos = new List<V3>();
        public readonly List<V3> Nrm = new List<V3>();
        public readonly List<int> Idx = new List<int>();
        public int Add(V3 p, V3 n) { Pos.Add(p); Nrm.Add(n); return Pos.Count - 1; }
        public void Tri(int a, int b, int c) { Idx.Add(a); Idx.Add(b); Idx.Add(c); }
        public int Triangles => Idx.Count / 3;

        // Appends this mesh transformed by m (normals by its normal matrix). Mirrored transforms
        // (negative determinant) flip the winding so faces stay outward.
        public void AppendTo(MeshData dst, Mat4 m, bool doubleSided = false)
        {
            int b = dst.Pos.Count;
            for (int i = 0; i < Pos.Count; i++) dst.Add(m.Point(Pos[i]), m.Normal(Nrm[i]));
            bool flip = m.Determinant3 < 0;
            for (int i = 0; i < Idx.Count; i += 3)
            {
                if (flip) dst.Tri(b + Idx[i], b + Idx[i + 2], b + Idx[i + 1]);
                else dst.Tri(b + Idx[i], b + Idx[i + 1], b + Idx[i + 2]);
            }
            if (doubleSided)
            {
                int b2 = dst.Pos.Count;
                for (int i = 0; i < Pos.Count; i++) dst.Add(m.Point(Pos[i]), m.Normal(Nrm[i]) * -1);
                for (int i = 0; i < Idx.Count; i += 3)
                {
                    if (flip) dst.Tri(b2 + Idx[i], b2 + Idx[i + 1], b2 + Idx[i + 2]);
                    else dst.Tri(b2 + Idx[i], b2 + Idx[i + 2], b2 + Idx[i + 1]);
                }
            }
        }
    }

    public static class KitShapes
    {
        static readonly Dictionary<string, MeshData> _cache = new Dictionary<string, MeshData>();
        const double PI = Math.PI;

        public static MeshData Get(string kind)
        {
            if (_cache.TryGetValue(kind, out var m)) return m;
            m = kind switch
            {
                "box" => RoundedBox(0, 1),
                "bbox" => RoundedBox(0.14, 3),
                "sphere" => Sphere(0.5, 16, 12, 0, PI),
                "dome" => Sphere(0.5, 20, 8, 0, PI / 2),
                "capsule" => Capsule(0.5, 1.0, 12, 4),
                "cyl" => Cylinder(0.5, 0.5, 2, 16, 1, 0, 2 * PI),
                "rod" => Cylinder(0.5, 0.5, 1, 14, 1, 0, 2 * PI),
                "disc" => Cylinder(0.5, 0.5, 1, 28, 1, 0, 2 * PI),
                "cone" => Cylinder(0, 0.5, 1, 14, 1, 0, 2 * PI),
                "taper" => Cylinder(0.5, 0.32, 1, 28, 4, 0, 2 * PI),
                "bell" => Cylinder(0.22, 0.5, 1, 14, 1, 0, 2 * PI),
                "half" => Cylinder(0.5, 0.5, 1, 10, 1, 0, PI),
                "ring" => Torus(0.5, 0.07, 8, 32, 2 * PI),
                "hook" => Torus(0.5, 0.18, 6, 12, PI * 1.25),
                "crook" => Torus(0.5, 0.2, 6, 10, PI),
                "octa" => Octa(),
                "gem" => Octa(),
                "helm" => Lathe(new[] { (0.53, -0.04), (0.55, 0.0), (0.52, 0.04), (0.5, 0.12), (0.48, 0.3), (0.42, 0.5), (0.33, 0.66), (0.2, 0.79), (0.07, 0.86), (0.0, 0.875) }, 24),
                "shell" => Lathe(new[] { (0.54, -0.02), (0.53, 0.03), (0.5, 0.06), (0.47, 0.18), (0.4, 0.36), (0.3, 0.5), (0.18, 0.58), (0.1, 0.63), (0.0, 0.64) }, 20),
                "boss" => Lathe(new[] { (0.5, 0.0), (0.5, 0.1), (0.42, 0.18), (0.36, 0.42), (0.22, 0.62), (0.08, 0.72), (0.0, 0.74) }, 20),
                "breast" => Breastplate(),
                _ => RoundedBox(0, 1),
            };
            _cache[kind] = m;
            return m;
        }

        // BoxGeometry(1,1,1) or, with r > 0, a rounded box (three3d.mjs bevelBox) of unit size.
        static MeshData RoundedBox(double r, int seg)
        {
            var m = new MeshData();
            // Each face: a grid on the unit cube, pushed onto the rounded shell.
            V3[] normals = { new V3(1, 0, 0), new V3(-1, 0, 0), new V3(0, 1, 0), new V3(0, -1, 0), new V3(0, 0, 1), new V3(0, 0, -1) };
            foreach (var n in normals)
            {
                V3 u = Math.Abs(n.Y) > 0.5 ? new V3(1, 0, 0) : new V3(0, 1, 0);
                V3 v = n.Cross(u);
                int b = m.Pos.Count, s = Math.Max(1, seg);
                for (int j = 0; j <= s; j++)
                    for (int i = 0; i <= s; i++)
                    {
                        double a = i / (double)s - 0.5, c = j / (double)s - 0.5;
                        var p = n * 0.5 + u * a + v * c;
                        V3 nn = n;
                        if (r > 0)
                        {
                            var inner = new V3(Clamp(p.X, -0.5 + r, 0.5 - r), Clamp(p.Y, -0.5 + r, 0.5 - r), Clamp(p.Z, -0.5 + r, 0.5 - r));
                            var d = p - inner;
                            if (d.Length > 1e-9) { nn = d.Normalized; p = inner + nn * r; }
                        }
                        m.Add(p, nn);
                    }
                for (int j = 0; j < s; j++)
                    for (int i = 0; i < s; i++)
                    {
                        int k = b + j * (s + 1) + i;
                        m.Tri(k, k + 1, k + s + 1); m.Tri(k + 1, k + s + 2, k + s + 1);
                    }
            }
            FixWinding(m);
            return m;
        }
        static double Clamp(double x, double a, double b) => x < a ? a : x > b ? b : x;

        // SphereGeometry(radius, w, h, 0, 2π, 0, thetaLength): +Y pole at theta 0.
        static MeshData Sphere(double rad, int w, int h, double t0, double tLen)
        {
            var m = new MeshData();
            for (int y = 0; y <= h; y++)
                for (int x = 0; x <= w; x++)
                {
                    double u = x / (double)w, v = y / (double)h, th = t0 + v * tLen, ph = u * 2 * PI;
                    var n = new V3(-Math.Cos(ph) * Math.Sin(th), Math.Cos(th), Math.Sin(ph) * Math.Sin(th));
                    m.Add(n * rad, n);
                }
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int a = y * (w + 1) + x + 1, b = y * (w + 1) + x, c = (y + 1) * (w + 1) + x, d = (y + 1) * (w + 1) + x + 1;
                    m.Tri(a, b, d); m.Tri(b, c, d);
                }
            FixWinding(m);
            return m;
        }

        static MeshData Capsule(double rad, double len, int seg, int capSeg)
        {
            var m = new MeshData();
            // Hemispheres joined by a cylinder along Y (total height len + 2·rad).
            int rings = capSeg * 2 + 1;
            var profile = new List<(double r, double y, double ny)>();
            for (int i = 0; i <= capSeg; i++) { double a = PI / 2 * (1 - i / (double)capSeg); profile.Add((Math.Cos(a) * rad, len / 2 + Math.Sin(a) * rad, Math.Sin(a))); }
            for (int i = 0; i <= capSeg; i++) { double a = -PI / 2 * (i / (double)capSeg); profile.Add((Math.Cos(a) * rad, -len / 2 + Math.Sin(a) * rad, Math.Sin(a))); }
            for (int j = 0; j < profile.Count; j++)
                for (int i = 0; i <= seg; i++)
                {
                    double ph = i / (double)seg * 2 * PI; var (r, y, ny) = profile[j]; double nr = Math.Sqrt(Math.Max(0, 1 - ny * ny));
                    m.Add(new V3(Math.Sin(ph) * r, y, Math.Cos(ph) * r), new V3(Math.Sin(ph) * nr, ny, Math.Cos(ph) * nr));
                }
            for (int j = 0; j < profile.Count - 1; j++)
                for (int i = 0; i < seg; i++)
                {
                    int a = j * (seg + 1) + i, b = a + seg + 1;
                    m.Tri(a, b, a + 1); m.Tri(a + 1, b, b + 1);
                }
            _ = rings;
            FixWinding(m);
            return m;
        }

        // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, false,
        // thetaStart, thetaLength): axis Y, centred; x = r·sin(θ), z = r·cos(θ). Caps included.
        static MeshData Cylinder(double rt, double rb, double h, int rs, int hs, double t0, double tLen)
        {
            var m = new MeshData();
            double slope = (rb - rt) / h;
            for (int y = 0; y <= hs; y++)
            {
                double v = y / (double)hs, r = v * (rb - rt) + rt;
                for (int x = 0; x <= rs; x++)
                {
                    double th = t0 + x / (double)rs * tLen, s = Math.Sin(th), c = Math.Cos(th);
                    m.Add(new V3(r * s, -v * h + h / 2, r * c), new V3(s, slope, c).Normalized);
                }
            }
            for (int x = 0; x < rs; x++)
                for (int y = 0; y < hs; y++)
                {
                    int a = y * (rs + 1) + x, b = (y + 1) * (rs + 1) + x, c = (y + 1) * (rs + 1) + x + 1, d = y * (rs + 1) + x + 1;
                    m.Tri(a, b, d); m.Tri(b, c, d);
                }
            foreach (var top in new[] { true, false })
            {
                double r = top ? rt : rb; if (r <= 0) continue;
                double yy = top ? h / 2 : -h / 2; var n = new V3(0, top ? 1 : -1, 0);
                int centre = m.Add(new V3(0, yy, 0), n), first = m.Pos.Count;
                for (int x = 0; x <= rs; x++) { double th = t0 + x / (double)rs * tLen; m.Add(new V3(r * Math.Sin(th), yy, r * Math.Cos(th)), n); }
                for (int x = 0; x < rs; x++) m.Tri(centre, first + x, first + x + 1);
            }
            if (tLen < 2 * PI - 1e-6) // flat sides of a partial cylinder ("half")
                foreach (var th in new[] { t0, t0 + tLen })
                {
                    var side = new V3(Math.Sin(th), 0, Math.Cos(th)); var n = new V3(0, 1, 0).Cross(side).Normalized;
                    int a = m.Add(new V3(0, h / 2, 0), n), b = m.Add(new V3(0, -h / 2, 0), n), c = m.Add(new V3(side.X * rb, -h / 2, side.Z * rb), n), d = m.Add(new V3(side.X * rt, h / 2, side.Z * rt), n);
                    m.Tri(a, b, c); m.Tri(a, c, d);
                }
            FixWinding(m);
            return m;
        }

        // TorusGeometry(radius, tube, radialSegments, tubularSegments, arc) in the XY plane.
        static MeshData Torus(double R, double tube, int rseg, int tseg, double arc)
        {
            var m = new MeshData();
            for (int j = 0; j <= rseg; j++)
                for (int i = 0; i <= tseg; i++)
                {
                    double u = i / (double)tseg * arc, v = j / (double)rseg * PI * 2;
                    var p = new V3((R + tube * Math.Cos(v)) * Math.Cos(u), (R + tube * Math.Cos(v)) * Math.Sin(u), tube * Math.Sin(v));
                    var c = new V3(R * Math.Cos(u), R * Math.Sin(u), 0);
                    m.Add(p, (p - c).Normalized);
                }
            for (int j = 1; j <= rseg; j++)
                for (int i = 1; i <= tseg; i++)
                {
                    int a = (tseg + 1) * j + i - 1, b = (tseg + 1) * (j - 1) + i - 1, c = (tseg + 1) * (j - 1) + i, d = (tseg + 1) * j + i;
                    m.Tri(a, b, d); m.Tri(b, c, d);
                }
            FixWinding(m);
            return m;
        }

        // OctahedronGeometry(0.5): flat-shaded.
        static MeshData Octa()
        {
            var m = new MeshData();
            V3[] v = { new V3(0.5, 0, 0), new V3(-0.5, 0, 0), new V3(0, 0.5, 0), new V3(0, -0.5, 0), new V3(0, 0, 0.5), new V3(0, 0, -0.5) };
            int[] f = { 0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2 };
            for (int i = 0; i < f.Length; i += 3)
            {
                var n = (v[f[i + 1]] - v[f[i]]).Cross(v[f[i + 2]] - v[f[i]]).Normalized;
                m.Tri(m.Add(v[f[i]], n), m.Add(v[f[i + 1]], n), m.Add(v[f[i + 2]], n));
            }
            FixWinding(m);
            return m;
        }

        // LatheGeometry around +Y from (x, y) profile points.
        static MeshData Lathe((double x, double y)[] pts, int seg)
        {
            var m = new MeshData();
            for (int i = 0; i <= seg; i++)
            {
                double ph = i / (double)seg * 2 * PI, s = Math.Sin(ph), c = Math.Cos(ph);
                for (int j = 0; j < pts.Length; j++)
                {
                    // Profile normal from neighbouring points (outward).
                    var a = pts[Math.Max(0, j - 1)]; var b = pts[Math.Min(pts.Length - 1, j + 1)];
                    double dx = b.x - a.x, dy = b.y - a.y, nx = dy, ny = -dx, l = Math.Sqrt(nx * nx + ny * ny); if (l < 1e-9) { nx = 0; ny = 1; l = 1; }
                    nx /= l; ny /= l;
                    m.Add(new V3(pts[j].x * s, pts[j].y, pts[j].x * c), new V3(nx * s, ny, nx * c));
                }
            }
            for (int i = 0; i < seg; i++)
                for (int j = 0; j < pts.Length - 1; j++)
                {
                    int a = i * pts.Length + j, b = a + pts.Length;
                    m.Tri(a, b, a + 1); m.Tri(b, b + 1, a + 1);
                }
            FixWinding(m);
            return m;
        }

        // roundedPlate(0.3, 0.27, 0.03, 0.07, { curve 0.17 }): a curved breastplate panel.
        static MeshData Breastplate()
        {
            var flat = RoundedBox(0.3, 3);
            var m = new MeshData();
            for (int i = 0; i < flat.Pos.Count; i++)
            {
                var p = flat.Pos[i]; double x = p.X * 0.3, y = p.Y * 0.27, z = p.Z * 0.03;
                z -= 0.17 * (x * x * 4 + y * y * 1.6); // bow back at the edges, like a chest
                m.Add(new V3(x, y, z), flat.Nrm[i]);
            }
            m.Idx.AddRange(flat.Idx);
            RecomputeNormals(m);
            return m;
        }

        // A curved cloth sheet hanging from y = 0 (three3d.mjs sheet()): drawn double-sided.
        public static MeshData Sheet(double w0, double w1, double h, double curve, int sx = 16, int sy = 8)
        {
            string key = $"sheet{w0}|{w1}|{h}|{curve}|{sx}|{sy}";
            if (_cache.TryGetValue(key, out var cached)) return cached;
            string F(double x) => x.ToString("R", System.Globalization.CultureInfo.InvariantCulture);
            var m = new MeshData { Name = "sheet:" + F(w0) + "," + F(w1) + "," + F(h) + "," + F(curve) + (sx != 16 || sy != 8 ? "," + sx + "," + sy : "") };
            for (int j = 0; j <= sy; j++)
                for (int i = 0; i <= sx; i++)
                {
                    double u = i / (double)sx, v = j / (double)sy, w = w0 + (w1 - w0) * v, a = u * 2 - 1;
                    m.Add(new V3(a * w / 2, -v * h, -curve * (1 - a * a) * (0.7 + 0.3 * v) + Math.Sin(a * 3 + 1) * 0.012 * v), new V3(0, 0, 1));
                }
            for (int j = 0; j < sy; j++)
                for (int i = 0; i < sx; i++)
                {
                    int a = j * (sx + 1) + i, b = a + 1, c = a + sx + 1, d = c + 1;
                    m.Tri(a, c, b); m.Tri(b, c, d);
                }
            RecomputeNormals(m);
            _cache[key] = m;
            return m;
        }

        static void RecomputeNormals(MeshData m)
        {
            var acc = new V3[m.Pos.Count];
            for (int i = 0; i < m.Idx.Count; i += 3)
            {
                int a = m.Idx[i], b = m.Idx[i + 1], c = m.Idx[i + 2];
                var n = (m.Pos[b] - m.Pos[a]).Cross(m.Pos[c] - m.Pos[a]);
                acc[a] = acc[a] + n; acc[b] = acc[b] + n; acc[c] = acc[c] + n;
            }
            for (int i = 0; i < acc.Length; i++) m.Nrm[i] = acc[i].Length > 1e-12 ? acc[i].Normalized : new V3(0, 1, 0);
        }

        // Makes every triangle wind counter-clockwise seen from its vertex normals' side (three.js
        // front faces), whatever order the generator produced.
        static void FixWinding(MeshData m)
        {
            for (int i = 0; i < m.Idx.Count; i += 3)
            {
                int a = m.Idx[i], b = m.Idx[i + 1], c = m.Idx[i + 2];
                var fn = (m.Pos[b] - m.Pos[a]).Cross(m.Pos[c] - m.Pos[a]);
                var vn = m.Nrm[a] + m.Nrm[b] + m.Nrm[c];
                if (fn.Dot(vn) < 0) { m.Idx[i + 1] = c; m.Idx[i + 2] = b; }
            }
        }
    }
}
