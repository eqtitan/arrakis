// Minimal 3D maths in three.js conventions (right-handed, column vectors), used to port the
// web game's kit builder exactly. Everything in Core/Kit is in three.js / glTF space; the client
// converts to Unity with ThreeToUnity (glTFast's convention: mirror the X axis).
using System;

namespace Sigilbound.Core
{
    public struct Quat
    {
        public double X, Y, Z, W;
        public Quat(double x, double y, double z, double w) { X = x; Y = y; Z = z; W = w; }
        public static readonly Quat Identity = new Quat(0, 0, 0, 1);

        public static Quat operator *(Quat a, Quat b) => new Quat(
            a.X * b.W + a.W * b.X + a.Y * b.Z - a.Z * b.Y,
            a.Y * b.W + a.W * b.Y + a.Z * b.X - a.X * b.Z,
            a.Z * b.W + a.W * b.Z + a.X * b.Y - a.Y * b.X,
            a.W * b.W - a.X * b.X - a.Y * b.Y - a.Z * b.Z);

        public Quat Inverse => new Quat(-X, -Y, -Z, W);

        public static Quat AxisAngle(V3 axis, double rad)
        {
            var a = axis.Normalized; double s = Math.Sin(rad / 2);
            return new Quat(a.X * s, a.Y * s, a.Z * s, Math.Cos(rad / 2));
        }

        // Object3D.rotation (Euler, radians) with three.js's order string, e.g. "XYZ" or "YXZ".
        public static Quat FromEuler(double x, double y, double z, string order)
        {
            double c1 = Math.Cos(x / 2), c2 = Math.Cos(y / 2), c3 = Math.Cos(z / 2), s1 = Math.Sin(x / 2), s2 = Math.Sin(y / 2), s3 = Math.Sin(z / 2);
            switch (order)
            {
                case "YXZ": return new Quat(s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 - s1 * s2 * c3, c1 * c2 * c3 + s1 * s2 * s3);
                case "ZXY": return new Quat(s1 * c2 * c3 - c1 * s2 * s3, c1 * s2 * c3 + s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3);
                default: return new Quat(s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3); // XYZ
            }
        }

        // Quaternion.setFromUnitVectors(from, to).
        public static Quat FromUnitVectors(V3 from, V3 to)
        {
            double r = from.Dot(to) + 1;
            Quat q;
            if (r < 1e-9)
            {
                q = Math.Abs(from.X) > Math.Abs(from.Z) ? new Quat(-from.Y, from.X, 0, 0) : new Quat(0, -from.Z, from.Y, 0);
            }
            else
            {
                var c = from.Cross(to);
                q = new Quat(c.X, c.Y, c.Z, r);
            }
            double n = Math.Sqrt(q.X * q.X + q.Y * q.Y + q.Z * q.Z + q.W * q.W);
            return new Quat(q.X / n, q.Y / n, q.Z / n, q.W / n);
        }

        // Quaternion from a rotation matrix given by its basis columns (Matrix4.makeBasis).
        public static Quat FromBasis(V3 xAxis, V3 yAxis, V3 zAxis)
        {
            double m11 = xAxis.X, m12 = yAxis.X, m13 = zAxis.X, m21 = xAxis.Y, m22 = yAxis.Y, m23 = zAxis.Y, m31 = xAxis.Z, m32 = yAxis.Z, m33 = zAxis.Z;
            double tr = m11 + m22 + m33;
            if (tr > 0) { double s = 0.5 / Math.Sqrt(tr + 1); return new Quat((m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s); }
            if (m11 > m22 && m11 > m33) { double s = 2 * Math.Sqrt(1 + m11 - m22 - m33); return new Quat(0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s); }
            if (m22 > m33) { double s = 2 * Math.Sqrt(1 + m22 - m11 - m33); return new Quat((m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s); }
            { double s = 2 * Math.Sqrt(1 + m33 - m11 - m22); return new Quat((m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s); }
        }

        public V3 Rotate(V3 v)
        {
            // v' = q v q*
            double ix = W * v.X + Y * v.Z - Z * v.Y, iy = W * v.Y + Z * v.X - X * v.Z, iz = W * v.Z + X * v.Y - Y * v.X, iw = -X * v.X - Y * v.Y - Z * v.Z;
            return new V3(ix * W + iw * -X + iy * -Z - iz * -Y, iy * W + iw * -Y + iz * -X - ix * -Z, iz * W + iw * -Z + ix * -Y - iy * -X);
        }
    }

    // Affine transform: scale, then rotate, then translate (Object3D.matrix = T·R·S).
    public struct Xform
    {
        public V3 Pos; public Quat Rot; public V3 Scale;
        public static readonly Xform Identity = new Xform { Pos = new V3(0, 0, 0), Rot = Quat.Identity, Scale = new V3(1, 1, 1) };
        public V3 Point(V3 p) => Rot.Rotate(new V3(p.X * Scale.X, p.Y * Scale.Y, p.Z * Scale.Z)) + Pos;
        // Normals under non-uniform scale use the inverse scale.
        public V3 Normal(V3 n) => Rot.Rotate(new V3(n.X / Scale.X, n.Y / Scale.Y, n.Z / Scale.Z)).Normalized;
    }

    // A general 4x4 affine matrix (for composing a node chain with non-uniform scales).
    public sealed class Mat4
    {
        public readonly double[] M = new double[16]; // row-major m[r*4+c]
        public static Mat4 Identity() { var m = new Mat4(); m.M[0] = m.M[5] = m.M[10] = m.M[15] = 1; return m; }
        public static Mat4 From(Xform x)
        {
            var q = x.Rot; double xx = q.X * q.X, yy = q.Y * q.Y, zz = q.Z * q.Z, xy = q.X * q.Y, xz = q.X * q.Z, yz = q.Y * q.Z, wx = q.W * q.X, wy = q.W * q.Y, wz = q.W * q.Z;
            var m = new Mat4();
            m.M[0] = (1 - 2 * (yy + zz)) * x.Scale.X; m.M[1] = 2 * (xy - wz) * x.Scale.Y; m.M[2] = 2 * (xz + wy) * x.Scale.Z; m.M[3] = x.Pos.X;
            m.M[4] = 2 * (xy + wz) * x.Scale.X; m.M[5] = (1 - 2 * (xx + zz)) * x.Scale.Y; m.M[6] = 2 * (yz - wx) * x.Scale.Z; m.M[7] = x.Pos.Y;
            m.M[8] = 2 * (xz - wy) * x.Scale.X; m.M[9] = 2 * (yz + wx) * x.Scale.Y; m.M[10] = (1 - 2 * (xx + yy)) * x.Scale.Z; m.M[11] = x.Pos.Z;
            m.M[15] = 1;
            return m;
        }
        public static Mat4 operator *(Mat4 a, Mat4 b)
        {
            var r = new Mat4();
            for (int i = 0; i < 4; i++) for (int j = 0; j < 4; j++) { double s = 0; for (int k = 0; k < 4; k++) s += a.M[i * 4 + k] * b.M[k * 4 + j]; r.M[i * 4 + j] = s; }
            return r;
        }
        public V3 Point(V3 p) => new V3(M[0] * p.X + M[1] * p.Y + M[2] * p.Z + M[3], M[4] * p.X + M[5] * p.Y + M[6] * p.Z + M[7], M[8] * p.X + M[9] * p.Y + M[10] * p.Z + M[11]);
        public V3 Dir(V3 d) => new V3(M[0] * d.X + M[1] * d.Y + M[2] * d.Z, M[4] * d.X + M[5] * d.Y + M[6] * d.Z, M[8] * d.X + M[9] * d.Y + M[10] * d.Z);
        // Normal matrix = inverse-transpose of the upper 3x3.
        public V3 Normal(V3 n)
        {
            double a = M[0], b = M[1], c = M[2], d = M[4], e = M[5], f = M[6], g = M[8], h = M[9], i = M[10];
            double A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g, D = -(b * i - c * h), E = a * i - c * g, F = -(a * h - b * g), G = b * f - c * e, H = -(a * f - c * d), I = a * e - b * d;
            // inverse = adj^T / det; inverse-transpose = adj / det (sign irrelevant after normalizing, unless det < 0)
            double det = a * A + b * B + c * C;
            var r = new V3(A * n.X + B * n.Y + C * n.Z, D * n.X + E * n.Y + F * n.Z, G * n.X + H * n.Y + I * n.Z);
            if (det < 0) r = r * -1;
            double l = r.Length; return l > 1e-12 ? r * (1 / l) : new V3(0, 1, 0);
        }
        public double Determinant3 => M[0] * (M[5] * M[10] - M[6] * M[9]) - M[1] * (M[4] * M[10] - M[6] * M[8]) + M[2] * (M[4] * M[9] - M[5] * M[8]);
    }
}
