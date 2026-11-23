// Animates a live kit part (three3d.mjs liveMesh / liveGroup functions): flickering flames,
// pulsing glows, spinning rings, swaying hair, bandana and scarf tails, capes in two hinged
// panels, flapping wings and orbiting shards, with optional spring lag behind the body's motion
// (springy()). Angles are computed in three.js space and converted, like everything in the kit.
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public sealed class KitLive : MonoBehaviour
    {
        public LiveSpec Spec;
        public double Ex, Ey, Ez; public string Order = "XYZ"; // base Euler (three.js)
        public Vector3 BaseScale = Vector3.one, BasePos;
        public Transform Lower;                                 // the cape's lower panel
        float _phase;
        // spring state (anchor's axes, three.js convention)
        Vector3 _lastAnchor; bool _springOn; float _ax, _az, _vx, _vz;

        public static Quaternion ToUnity(Quat q) { var m = ThreeToUnity.Rot(q); return new Quaternion((float)m.X, (float)m.Y, (float)m.Z, (float)m.W); }
        public static Vector3 ToUnity(V3 v) => new Vector3((float)-v.X, (float)v.Y, (float)v.Z);

        void Awake() { _phase = Random.value * 50f; }

        void LateUpdate()
        {
            if (Spec == null) return;
            float t = Time.time;
            double ex = Ex, ey = Ey, ez = Ez;
            double lowerX = 0, lowerZ = 0;
            Vector3 scale = BaseScale, pos = BasePos;
            switch (Spec.Kind)
            {
                case LiveKind.Flicker: { float s = 1 + Mathf.Sin(t * 17 + _phase) * 0.12f + Mathf.Sin(t * 29) * 0.06f; scale = new Vector3(BaseScale.x * s, BaseScale.y * (2 - s), BaseScale.z * s); break; }
                case LiveKind.Pulse: { float s = 1 + Mathf.Sin(t * 3 + _phase) * 0.12f; scale = BaseScale * s; break; }
                case LiveKind.Spin: if (Spec.Axis == 'x') ex = t * Spec.Rate; else if (Spec.Axis == 'z') ez = t * Spec.Rate; else ey = t * Spec.Rate; break;
                case LiveKind.Lash: ey = Mathf.Sin(t * 1.7f) * 0.35f; ex = Mathf.Sin(t * 2.3f) * 0.06f; break;
                case LiveKind.BandanaTails: ex = 0.5 + Mathf.Sin(t * 3.1f + _phase) * 0.18f; ez = Mathf.Sin(t * 2.3f) * 0.15f; break;
                case LiveKind.Ponytail: ex = Mathf.Sin(t * 2.2f + 1) * 0.08f; ez = Mathf.Sin(t * 1.6f) * 0.06f; break;
                case LiveKind.ScarfTails: ex = 0.6 + Mathf.Sin(t * 3.4f + _phase) * 0.2f; ey = Mathf.Sin(t * 1.9f) * 0.25f; break;
                case LiveKind.Cape:
                    ex = 0.1 + Mathf.Sin(t * 1.3f + _phase) * 0.035f;
                    lowerX = 0.06 + Mathf.Sin(t * 1.9f + 0.8f + _phase) * 0.08f + _ax * 0.4f;
                    lowerZ = Mathf.Sin(t * 1.1f + _phase) * 0.04f + _az * 0.3f;
                    break;
                case LiveKind.Wing: { double s = Spec.Side; ey = s * (0.55 + Mathf.Sin(t * 1.4f) * 0.1f); ez = s * Mathf.Sin(t * 1.4f) * 0.05f; break; }
                case LiveKind.ShardRing: ey = t * 0.9f; pos = new Vector3(BasePos.x, BasePos.y + Mathf.Sin(t * 1.3f) * 0.04f, BasePos.z); break;
            }
            if (Spec.Spring > 0) Spring((float)Spec.Spring, ref ex, ref ez);
            transform.localRotation = ToUnity(Quat.FromEuler(ex, ey, ez, Order));
            transform.localScale = scale;
            transform.localPosition = pos;
            if (Lower != null) Lower.localRotation = ToUnity(Quat.FromEuler(lowerX, 0, lowerZ, "XYZ"));
        }

        // Damped spring against the anchor's movement (three3d.mjs springy()).
        void Spring(float gain, ref double ex, ref double ez)
        {
            var anchor = transform.parent; if (anchor == null) return;
            float dt = Mathf.Clamp(Time.deltaTime, 0.001f, 0.05f);
            Vector3 p = anchor.position;
            if (!_springOn) { _lastAnchor = p; _springOn = true; }
            Vector3 vel = (p - _lastAnchor) / dt; _lastAnchor = p;
            if (vel.magnitude > 3) vel = vel.normalized * 3;
            vel = Quaternion.Inverse(anchor.rotation) * vel;
            vel.x = -vel.x; // to three.js axes
            float tx = Mathf.Clamp((vel.z * 0.08f - vel.y * 0.04f) * gain, -0.12f, 0.42f), tz = Mathf.Clamp(-vel.x * 0.08f * gain, -0.3f, 0.3f);
            _vx += ((tx - _ax) * 70 - _vx * 16.7f) * dt; _ax += _vx * dt;
            _vz += ((tz - _az) * 70 - _vz * 16.7f) * dt; _az += _vz * dt;
            _ax = Mathf.Clamp(_ax, -0.15f, 0.45f); _az = Mathf.Clamp(_az, -0.32f, 0.32f);
            if (float.IsNaN(_ax) || float.IsNaN(_az)) { _ax = _az = _vx = _vz = 0; }
            ex += _ax; ez += _az;
        }
    }
}
