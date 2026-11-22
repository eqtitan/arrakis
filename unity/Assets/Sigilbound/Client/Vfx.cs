// Battle effects built in code: particle bursts, projectiles with trails,
// floating damage numbers, heal sparkles and camera shake.
using System.Collections;
using UnityEngine;

namespace Sigilbound.Client
{
    public sealed class Vfx : MonoBehaviour
    {
        public static Vfx I;
        Material _particleMat; Font _font; Camera _cam; Vector3 _camHome;

        public static Vfx Create(Camera cam)
        {
            var v = new GameObject("Vfx").AddComponent<Vfx>();
            v._cam = cam; v._camHome = cam.transform.position;
            v._particleMat = new Material(Shader.Find("Sprites/Default"));
            v._particleMat.mainTexture = SoftDot();
            v._font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            I = v;
            return v;
        }

        static Texture2D SoftDot()
        {
            const int n = 32;
            var t = new Texture2D(n, n, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp };
            for (int y = 0; y < n; y++)
                for (int x = 0; x < n; x++)
                {
                    float d = Vector2.Distance(new Vector2(x, y), new Vector2(n / 2f - 0.5f, n / 2f - 0.5f)) / (n / 2f);
                    t.SetPixel(x, y, new Color(1, 1, 1, Mathf.Clamp01(1 - d * d)));
                }
            t.Apply();
            return t;
        }

        ParticleSystem MakeSystem(Vector3 pos, Color color, int count, float speed, float size, float life, float gravity, bool sphere = true)
        {
            var go = new GameObject("fx");
            go.transform.position = pos;
            var ps = go.AddComponent<ParticleSystem>();
            ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            var main = ps.main;
            main.duration = 0.2f; main.loop = false; main.startLifetime = new ParticleSystem.MinMaxCurve(life * 0.6f, life);
            main.startSpeed = new ParticleSystem.MinMaxCurve(speed * 0.4f, speed); main.startSize = new ParticleSystem.MinMaxCurve(size * 0.5f, size);
            main.startColor = new ParticleSystem.MinMaxGradient(color, Color.Lerp(color, Color.white, 0.5f));
            main.gravityModifier = gravity; main.simulationSpace = ParticleSystemSimulationSpace.World; main.stopAction = ParticleSystemStopAction.Destroy;
            main.maxParticles = 200;
            var em = ps.emission; em.rateOverTime = 0; em.SetBursts(new[] { new ParticleSystem.Burst(0, (short)count) });
            var sh = ps.shape; sh.shapeType = sphere ? ParticleSystemShapeType.Sphere : ParticleSystemShapeType.Circle; sh.radius = 0.15f;
            if (!sphere) sh.rotation = new Vector3(-90, 0, 0);
            var col = ps.colorOverLifetime; col.enabled = true;
            var grad = new Gradient();
            grad.SetKeys(new[] { new GradientColorKey(Color.white, 0), new GradientColorKey(Color.white, 1) }, new[] { new GradientAlphaKey(1, 0), new GradientAlphaKey(0, 1) });
            col.color = grad;
            var sz = ps.sizeOverLifetime; sz.enabled = true; sz.size = new ParticleSystem.MinMaxCurve(1, AnimationCurve.Linear(0, 1, 1, 0.2f));
            var r = go.GetComponent<ParticleSystemRenderer>(); r.sharedMaterial = _particleMat;
            ps.Play();
            return ps;
        }

        public void Burst(Vector3 pos, Color color, bool big)
        {
            MakeSystem(pos, color, big ? 40 : 20, big ? 5f : 3.2f, big ? 0.35f : 0.25f, 0.55f, 0.6f);
            MakeSystem(pos, Color.white, big ? 10 : 5, 1.5f, big ? 0.9f : 0.6f, 0.18f, 0f); // flash core
        }
        public void Heal(Vector3 pos) => StartCoroutine(Rise(pos, new Color(0.45f, 1f, 0.5f), 18));
        public void Buff(Vector3 pos, bool good) => StartCoroutine(Rise(pos, good ? new Color(1f, 0.85f, 0.4f) : new Color(0.75f, 0.45f, 1f), 10));
        public void Dissolve(Vector3 pos) => MakeSystem(pos, new Color(0.5f, 0.5f, 0.55f), 40, 1.6f, 0.3f, 1.2f, -0.3f);
        public void Cast(Vector3 pos, Color color) => MakeSystem(pos, color, 24, 1.2f, 0.3f, 0.7f, -0.6f, false);

        IEnumerator Rise(Vector3 pos, Color color, int n)
        {
            var ps = MakeSystem(pos + Vector3.down * 0.5f, color, n, 0.5f, 0.22f, 1.0f, -0.8f, false);
            yield return null;
        }

        public IEnumerator Projectile(Vector3 from, Vector3 to, Color color, float dur = 0.3f)
        {
            var orb = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            Destroy(orb.GetComponent<Collider>());
            orb.transform.localScale = Vector3.one * 0.28f;
            orb.GetComponent<Renderer>().sharedMaterial = CharacterView.Unlit(Color.Lerp(color, Color.white, 0.4f));
            var trail = orb.AddComponent<TrailRenderer>();
            trail.time = 0.25f; trail.startWidth = 0.25f; trail.endWidth = 0f;
            trail.sharedMaterial = _particleMat;
            trail.startColor = color; trail.endColor = new Color(color.r, color.g, color.b, 0);
            for (float k = 0; k < 1; k += Time.deltaTime / dur)
            {
                orb.transform.position = Vector3.Lerp(from, to, k) + Vector3.up * Mathf.Sin(k * Mathf.PI) * 0.8f;
                yield return null;
            }
            Destroy(orb);
        }

        public void Slash(Vector3 pos, Color color)
        {
            var go = new GameObject("slash");
            go.transform.position = pos;
            var lr = go.AddComponent<LineRenderer>();
            lr.positionCount = 12; lr.useWorldSpace = false; lr.sharedMaterial = _particleMat;
            lr.widthCurve = new AnimationCurve(new Keyframe(0, 0), new Keyframe(0.5f, 0.18f), new Keyframe(1, 0));
            lr.startColor = Color.white; lr.endColor = color;
            float rot = Random.Range(-30f, 30f);
            for (int i = 0; i < 12; i++)
            {
                float a = Mathf.Lerp(-1.1f, 1.1f, i / 11f);
                lr.SetPosition(i, Quaternion.Euler(0, 0, rot) * new Vector3(Mathf.Sin(a) * 0.7f, Mathf.Cos(a) * 0.7f - 0.4f, 0));
            }
            go.transform.rotation = _cam.transform.rotation;
            StartCoroutine(FadeLine(lr, 0.22f));
        }
        IEnumerator FadeLine(LineRenderer lr, float dur)
        {
            Color s = lr.startColor, e = lr.endColor;
            for (float k = 0; k < 1; k += Time.deltaTime / dur)
            {
                lr.startColor = new Color(s.r, s.g, s.b, 1 - k); lr.endColor = new Color(e.r, e.g, e.b, 1 - k);
                yield return null;
            }
            Destroy(lr.gameObject);
        }

        public void Number(Vector3 pos, string text, Color color, float size = 1f)
        {
            var go = new GameObject("num");
            go.transform.position = pos + new Vector3(Random.Range(-0.2f, 0.2f), 0, 0);
            var tm = go.AddComponent<TextMesh>();
            tm.font = _font; tm.text = text; tm.fontSize = 64; tm.characterSize = 0.06f * size;
            tm.anchor = TextAnchor.MiddleCenter; tm.alignment = TextAlignment.Center; tm.color = color; tm.fontStyle = FontStyle.Bold;
            go.GetComponent<MeshRenderer>().sharedMaterial = _font.material;
            StartCoroutine(Float(go.transform, tm));
        }
        IEnumerator Float(Transform t, TextMesh tm)
        {
            Vector3 p = t.position; Color c = tm.color;
            for (float k = 0; k < 1; k += Time.deltaTime / 0.9f)
            {
                t.position = p + Vector3.up * (k * 0.9f);
                t.rotation = _cam.transform.rotation;
                tm.color = new Color(c.r, c.g, c.b, k < 0.6f ? 1 : 1 - (k - 0.6f) / 0.4f);
                yield return null;
            }
            Destroy(t.gameObject);
        }

        public void Shake(float intensity = 0.12f) => StartCoroutine(ShakeRoutine(intensity));
        IEnumerator ShakeRoutine(float intensity)
        {
            for (float k = 0; k < 1; k += Time.deltaTime / 0.22f)
            {
                _cam.transform.position = _camHome + Random.insideUnitSphere * intensity * (1 - k);
                yield return null;
            }
            _cam.transform.position = _camHome;
        }
    }
}
