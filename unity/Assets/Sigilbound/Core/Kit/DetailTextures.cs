// Procedural detail textures, ported from game3d/materials.mjs GEN (same patterns, same seeded
// noise: mulberry32, tileable value-noise fBm and Worley cells): metal (brushed streaks and
// scratches), hammered (peen dents), leather (pebbled grain and creases), cloth (plain weave),
// wood (warped rings and fibres), stone (cracked basalt plates) and scale (overlapping scales).
// Each fills H (height 0..1, normalized), A (albedo multiplier, a narrow bright band) and
// R (roughness). Pure maths; the client packs them into a Texture2D.
using System;

namespace Sigilbound.Core
{
    public static class DetailTextures
    {
        public static readonly string[] Kinds = { "metal", "hammered", "leather", "cloth", "wood", "stone", "scale" };

        // materials.mjs ROLES: role -> texture kind (gem: none).
        public static string KindForRole(string role) => role switch
        {
            "metal" => "metal", "gold" => "hammered", "leather" => "leather", "cloth" => "cloth", "wood" => "wood",
            "stone" => "stone", "bone" => "leather", "skin" => "leather", "hair" => "metal", "scale" => "scale", _ => null,
        };

        sealed class Rand
        {
            uint a;
            public Rand(uint seed) { a = seed; }
            public double Next()
            {
                unchecked
                {
                    a += 0x6d2b79f5;
                    uint t = a;
                    t = (t ^ (t >> 15)) * (t | 1);
                    t ^= t + (t ^ (t >> 7)) * (t | 61);
                    return (t ^ (t >> 14)) / 4294967296.0;
                }
            }
        }
        static double Smooth(double t) => t * t * (3 - 2 * t);
        static double Clamp01(double v) => v < 0 ? 0 : v > 1 ? 1 : v;
        static double Fract(double v) => v - Math.Floor(v);
        static double SmoothStep(double a, double b, double v) => Smooth(Clamp01((v - a) / (b - a)));

        static Func<double, double, double> ValueLayer(Rand rand, int px, int py)
        {
            var g = new double[px * py];
            for (int i = 0; i < g.Length; i++) g[i] = rand.Next();
            return (u, v) =>
            {
                double x = Fract(u) * px, y = Fract(v) * py;
                int x0 = (int)Math.Floor(x), y0 = (int)Math.Floor(y);
                double fx = Smooth(x - x0), fy = Smooth(y - y0);
                int x1 = (x0 + 1) % px, y1 = (y0 + 1) % py;
                double a = g[y0 * px + x0], b = g[y0 * px + x1], c = g[y1 * px + x0], d = g[y1 * px + x1];
                return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
            };
        }
        static Func<double, double, double> Fbm(Rand rand, int px, int py, int octaves = 4, double gain = 0.5)
        {
            var layers = new (Func<double, double, double> f, double amp)[octaves];
            double amp = 1, norm = 0;
            for (int o = 0; o < octaves; o++) { layers[o] = (ValueLayer(rand, px << o, py << o), amp); norm += amp; amp *= gain; }
            return (u, v) => { double s = 0; foreach (var l in layers) s += l.f(u, v) * l.amp; return s / norm; };
        }
        struct Cell { public double F1, F2, Id; }
        static Func<double, double, Cell> Worley(Rand rand, int n, double jitter = 0.85)
        {
            var pts = new double[n * n * 2]; var ids = new double[n * n];
            for (int i = 0; i < n * n; i++) { pts[i * 2] = 0.5 + (rand.Next() - 0.5) * jitter; pts[i * 2 + 1] = 0.5 + (rand.Next() - 0.5) * jitter; ids[i] = rand.Next(); }
            return (u, v) =>
            {
                double x = Fract(u) * n, y = Fract(v) * n; int cx = (int)Math.Floor(x), cy = (int)Math.Floor(y);
                double f1 = 1e9, f2 = 1e9, id = 0;
                for (int j = -1; j <= 1; j++)
                    for (int i = -1; i <= 1; i++)
                    {
                        int gx = cx + i, gy = cy + j, k = ((gy + n) % n) * n + ((gx + n) % n);
                        double dx = gx + pts[k * 2] - x, dy = gy + pts[k * 2 + 1] - y, d = Math.Sqrt(dx * dx + dy * dy);
                        if (d < f1) { f2 = f1; f1 = d; id = ids[k]; } else if (d < f2) f2 = d;
                    }
                return new Cell { F1 = f1, F2 = f2, Id = id };
            };
        }

        public sealed class Maps { public int Size; public float[] H, A, R; }

        public static Maps Generate(string kind, int size, uint seed = 1)
        {
            int S = size; var H = new double[S * S]; var A = new double[S * S]; var R = new double[S * S];
            var rand = new Rand(seed * 2654435761u ^ (uint)Array.IndexOf(Kinds, kind));
            switch (kind)
            {
                case "metal":
                {
                    var streak = Fbm(rand, 2, 96, 3, 0.55); var smudge = Fbm(rand, 3, 3, 3);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x; double s = streak(u, v), m = smudge(u, v);
                        H[i] = s * 0.6 + m * 0.4; A[i] = 0.88 + s * 0.08 + m * 0.04; R[i] = 0.68 + s * 0.15 + SmoothStep(0.45, 0.8, m) * 0.12;
                    }
                    for (int k = 0; k < 14; k++)
                    {
                        double px = rand.Next() * S, py = rand.Next() * S, ang = (rand.Next() - 0.5) * 0.9, len = S * (0.08 + rand.Next() * 0.18), dx = Math.Cos(ang), dy = Math.Sin(ang);
                        for (int t = 0; t < len; t++)
                        {
                            int xi = (((int)Math.Round(px + dx * t) % S) + S) % S, yi = (((int)Math.Round(py + dy * t) % S) + S) % S, i = yi * S + xi;
                            H[i] = Math.Max(0, H[i] - 0.18); A[i] = Math.Min(1, A[i] + 0.05); R[i] *= 0.7;
                        }
                    }
                    break;
                }
                case "hammered":
                {
                    var w1 = Worley(rand, 7, 0.9); var w2 = Worley(rand, 13, 0.9); var n = Fbm(rand, 4, 4, 3);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x; double a = w1(u, v).F1, b = w2(u, v).F1, m = n(u, v);
                        double d = Math.Min(1, a * a * 1.4) * 0.65 + Math.Min(1, b * b * 1.6) * 0.35;
                        H[i] = d * 0.85 + m * 0.15; A[i] = 0.88 + d * 0.09 + m * 0.03; R[i] = 0.66 + (1 - d) * 0.22 + m * 0.08;
                    }
                    break;
                }
                case "leather":
                {
                    var cells = Worley(rand, 22, 1.0); var creases = Fbm(rand, 3, 5, 4); var patch = Fbm(rand, 2, 2, 3); var fine = Fbm(rand, 32, 32, 2);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x;
                        var c = cells(u, v); double edge = SmoothStep(0.0, 0.22, c.F2 - c.F1), cr = 1 - SmoothStep(0.0, 0.05, Math.Abs(creases(u, v) - 0.5)), p = patch(u, v);
                        H[i] = edge * 0.7 + fine(u, v) * 0.2 + 0.1 - cr * 0.35; A[i] = 0.8 + p * 0.14 + edge * 0.06 - cr * 0.06; R[i] = 0.7 + (1 - p) * 0.2 + (1 - edge) * 0.1;
                    }
                    break;
                }
                case "cloth":
                {
                    const int N = 24;
                    var slub = Fbm(rand, 2, 48, 2); var slub2 = Fbm(rand, 48, 2, 2); var dirt = Fbm(rand, 3, 3, 3);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x;
                        double gx = u * N, gy = v * N; int ix = (int)Math.Floor(gx), iy = (int)Math.Floor(gy); double fx = gx - ix, fy = gy - iy;
                        bool warpTop = ((ix + iy) & 1) == 0; double across = warpTop ? fx : fy, along = warpTop ? fy : fx;
                        double prof = Math.Sin(Math.PI * across), arch = 0.6 + 0.4 * Math.Sin(Math.PI * along), thread = warpTop ? slub(u, v) : slub2(u, v);
                        H[i] = prof * arch * (0.8 + thread * 0.2); A[i] = 0.8 + prof * 0.1 + thread * 0.06 + dirt(u, v) * 0.04; R[i] = 0.92 + (1 - prof) * 0.08;
                    }
                    break;
                }
                case "wood":
                {
                    var warp = Fbm(rand, 2, 3, 4); var fiber = Fbm(rand, 3, 64, 2); var knot = Worley(rand, 3, 0.8);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x;
                        var k = knot(u, v); double kd = Math.Max(0, 1 - k.F1 * 2.4), ring = Fract(v * 7 + warp(u, v) * 1.6 + kd * kd * 0.6);
                        double r = Math.Pow(Math.Sin(Math.PI * ring), 0.6), f = fiber(u, v);
                        H[i] = r * 0.55 + f * 0.45; A[i] = 0.74 + r * 0.16 + f * 0.1 - kd * kd * 0.1; R[i] = 0.75 + (1 - r) * 0.12 + f * 0.13;
                    }
                    break;
                }
                case "stone":
                {
                    var plates = Worley(rand, 5, 0.9); var small = Worley(rand, 11, 0.9); var body = Fbm(rand, 4, 4, 5); var pits = Fbm(rand, 24, 24, 2);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x;
                        var p = plates(u, v); double crack = 1 - SmoothStep(0.0, 0.06, p.F2 - p.F1), pid = p.Id;
                        var s = small(u, v); double hair = 1 - SmoothStep(0.0, 0.03, s.F2 - s.F1), b = body(u, v), pt = SmoothStep(0.62, 0.8, pits(u, v));
                        H[i] = 0.25 + b * 0.55 + pid * 0.2 - crack * 0.55 - hair * 0.12 - pt * 0.15; A[i] = 0.8 + b * 0.1 + pid * 0.08 - crack * 0.2 - hair * 0.05 - pt * 0.06; R[i] = 0.82 + b * 0.12 + crack * 0.06;
                    }
                    break;
                }
                case "scale":
                {
                    const int cols = 8, rows = 8; double dy = 1.0 / rows, sw = 0.5 / cols, L = dy * 1.75;
                    var jit = Fbm(rand, 8, 8, 2); var n = Fbm(rand, 6, 6, 3);
                    for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
                    {
                        double u = x / (double)S, v = y / (double)S; int i = y * S + x;
                        bool found = false; double bt = 0, bedge = 0, bdx = 0, bid = 0;
                        int r0 = (int)Math.Floor(v / dy);
                        for (int r = r0 + 2; r >= r0 - 1; r--)
                        {
                            double bottom = (r + 1) * dy, top = bottom - L;
                            if (v > bottom + 1e-6 || v < top) continue;
                            double off = (((r % 2) + 2) % 2) * 0.5, cu = (Math.Round(u * cols - off) + off) / cols, dx = u - cu; dx -= Math.Round(dx);
                            double rr = sw * 1.02, cyR = bottom - rr; bool inside; double edge;
                            if (v <= cyR) { inside = Math.Abs(dx) <= rr; edge = (rr - Math.Abs(dx)) / rr; }
                            else { double d = Math.Sqrt(dx * dx + (v - cyR) * (v - cyR)); inside = d <= rr; edge = (rr - d) / rr; }
                            if (inside) { found = true; bt = (v - top) / L; bedge = edge; bdx = dx / rr; bid = jit(cu, bottom); }
                        }
                        if (!found) { H[i] = 0; A[i] = 0.6; R[i] = 0.9; continue; }
                        double rim = SmoothStep(0.0, 0.18, bedge), dome = 1 - bdx * bdx * 0.35, h = (0.35 + bt * 0.65) * dome * rim, m = n(u, v);
                        H[i] = h * 0.9 + m * 0.1; A[i] = 0.72 + rim * 0.14 + bid * 0.08 + m * 0.06; R[i] = 0.6 + (1 - rim) * 0.25 + bid * 0.15;
                    }
                    break;
                }
                default: for (int i = 0; i < S * S; i++) { H[i] = 0.5; A[i] = 0.9; R[i] = 0.7; } break;
            }
            // normalize(H)
            double lo = double.MaxValue, hi = double.MinValue;
            foreach (var h in H) { if (h < lo) lo = h; if (h > hi) hi = h; }
            double kk = hi > lo ? 1 / (hi - lo) : 0;
            var maps = new Maps { Size = S, H = new float[S * S], A = new float[S * S], R = new float[S * S] };
            for (int i = 0; i < S * S; i++) { maps.H[i] = (float)((H[i] - lo) * kk); maps.A[i] = (float)Clamp01(A[i]); maps.R[i] = (float)Clamp01(R[i]); }
            return maps;
        }
    }
}
