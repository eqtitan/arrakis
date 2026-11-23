// Skill VFX in the spirit of game3d/vfx.mjs: element palettes (linear HDR, same values), pooled
// effects and no downloaded assets (every texture is drawn in code).
//   over   - one world-space ParticleSystem, additive (glows, sparks, motes, flames)
//   under  - one world-space ParticleSystem, alpha-blended (smoke, debris)
//   decals - pooled ground/billboard quads (rune circles, rings, shock rings, ground glows, flashes)
//   walls  - pooled open cylinders (light pillars, splash crowns, shock walls)
//   domes  - pooled spheres (shield bubbles)
//   trails - TrailRenderer heads for projectiles; LineRenderer beams
// Effects: castCircle, charge, projectile (orb / bolt / arrow / shard), slash, impact, aoe, beam,
// shockwave, heal, buff / debuff, shield, debuffTick (poison, burn...), deathFade, titanSlam,
// critFlash.
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public sealed class SkillFx : MonoBehaviour
    {
        public static SkillFx I;
        public sealed class Pal { public Color Core, Main, Deep, Dark; }

        // vfx.mjs PAL (linear HDR).
        static Color L(float r, float g, float b) => new Color(r, g, b, 1);
        public static readonly Dictionary<string, Pal> Palettes = new Dictionary<string, Pal>
        {
            ["flame"] = new Pal { Core = L(4.2f, 2.3f, 0.8f), Main = L(3.4f, 0.85f, 0.16f), Deep = L(1.5f, 0.22f, 0.04f), Dark = L(0.09f, 0.035f, 0.02f) },
            ["gale"] = new Pal { Core = L(1.9f, 3.6f, 2.2f), Main = L(0.45f, 2.6f, 1.1f), Deep = L(0.12f, 0.8f, 0.32f), Dark = L(0.04f, 0.12f, 0.05f) },
            ["tide"] = new Pal { Core = L(1.9f, 3.0f, 4.0f), Main = L(0.3f, 1.3f, 3.6f), Deep = L(0.06f, 0.35f, 1.3f), Dark = L(0.02f, 0.06f, 0.14f) },
            ["light"] = new Pal { Core = L(4.2f, 3.8f, 2.6f), Main = L(3.6f, 2.5f, 0.65f), Deep = L(1.4f, 0.8f, 0.14f), Dark = L(0.12f, 0.09f, 0.03f) },
            ["shadow"] = new Pal { Core = L(2.6f, 1.1f, 4.0f), Main = L(1.4f, 0.35f, 3.0f), Deep = L(0.4f, 0.06f, 0.9f), Dark = L(0.018f, 0.004f, 0.035f) },
            ["physical"] = new Pal { Core = L(3.4f, 3.2f, 2.9f), Main = L(2.4f, 2.1f, 1.75f), Deep = L(0.8f, 0.65f, 0.5f), Dark = L(0.06f, 0.05f, 0.045f) },
        };
        static readonly Pal HEAL = new Pal { Core = L(2.2f, 4.0f, 2.0f), Main = L(0.55f, 3.0f, 0.8f), Deep = L(0.15f, 1.0f, 0.25f) };
        static readonly Pal GOLD = new Pal { Core = L(4.0f, 3.4f, 1.8f), Main = L(3.4f, 2.2f, 0.5f), Deep = L(1.2f, 0.6f, 0.1f) };
        static readonly Pal CURSE = new Pal { Core = L(2.6f, 1.2f, 4.0f), Main = L(1.5f, 0.4f, 3.0f), Deep = L(0.4f, 0.08f, 0.9f) };
        static readonly Pal AQUA = new Pal { Core = L(1.8f, 3.4f, 4.2f), Main = L(0.5f, 1.9f, 3.8f), Deep = L(0.1f, 0.5f, 1.4f) };
        public static Pal Of(Element e) => Palettes[e.ToString().ToLowerInvariant()];

        Camera _cam; ParticleSystem _over, _under; Material _add, _alpha;
        Texture2D _dot, _ring, _rune, _streak, _hex, _burst;
        float _mult = 1f; // particle count scale by quality tier (Low 0.35 .. Ultra 1.2)
        Renderer _flash; float _flashT = -1, _flashDur;

        sealed class Decal { public Transform T; public Renderer R; public MaterialPropertyBlock B; public bool Busy; }
        readonly List<Decal> _decals = new List<Decal>(), _walls = new List<Decal>(), _domes = new List<Decal>();

        public static SkillFx Create(Camera cam)
        {
            var go = new GameObject("SkillFx");
            var f = go.AddComponent<SkillFx>();
            f._cam = cam; I = f;
            f.Init();
            return f;
        }

        // Per tier: particle count scale and particle pool sizes (additive sparks / alpha smoke).
        public void SetTier(int tier)
        {
            tier = Mathf.Clamp(tier, 0, 3);
            _mult = new[] { 0.35f, 0.6f, 1f, 1.2f }[tier];
            if (_over != null) { var m = _over.main; m.maxParticles = new[] { 500, 900, 1500, 2000 }[tier]; }
            if (_under != null) { var m = _under.main; m.maxParticles = new[] { 150, 300, 500, 700 }[tier]; }
        }

        void Init()
        {
            var addShader = Shader.Find("Legacy Shaders/Particles/Additive") ?? Shader.Find("Mobile/Particles/Additive") ?? Shader.Find("Sprites/Default");
            _add = new Material(addShader); _alpha = new Material(Shader.Find("Sprites/Default"));
            _dot = Tex(64, (u, v) => { float d = Mathf.Sqrt(u * u + v * v); return Mathf.Clamp01(1 - d) * Mathf.Clamp01(1 - d); });
            _ring = Tex(128, (u, v) => { float d = Mathf.Sqrt(u * u + v * v); return Mathf.Clamp01(1 - Mathf.Abs(d - 0.82f) / 0.1f); });
            _burst = Tex(128, (u, v) => { float d = Mathf.Sqrt(u * u + v * v), a = Mathf.Atan2(v, u); return Mathf.Clamp01(1 - d) * (0.4f + 0.6f * Mathf.Pow(Mathf.Abs(Mathf.Cos(a * 6)), 8)); });
            _rune = Tex(256, (u, v) =>
            {
                // A rune circle: two rings, a hexagram and twelve glyph ticks.
                float d = Mathf.Sqrt(u * u + v * v), a = Mathf.Atan2(v, u);
                float ring = Mathf.Max(Band(d, 0.9f, 0.025f), Band(d, 0.78f, 0.015f));
                float ticks = d > 0.79f && d < 0.89f ? Mathf.Pow(Mathf.Abs(Mathf.Cos(a * 6)), 40) : 0;
                float hex = 0;
                for (int i = 0; i < 6; i++) { float th = i * Mathf.PI / 3; hex = Mathf.Max(hex, Band(u * Mathf.Cos(th) + v * Mathf.Sin(th), 0.55f, 0.012f) * (d < 0.78f ? 1 : 0)); }
                return Mathf.Clamp01(ring + ticks + hex * 0.8f) * (d < 0.95f ? 1 : 0);
            });
            _streak = Tex(64, (u, v) => Mathf.Clamp01(1 - Mathf.Abs(u)) * Mathf.Clamp01((v + 1) / 2) * (0.6f + 0.4f * Mathf.Sin(u * 20)));
            _hex = Tex(128, (u, v) => { float x = (u + 1) * 6, y = (v + 1) * 6; float h = Mathf.Abs(Mathf.Sin(x * 1.732f) * Mathf.Sin(y * 2f + x)); return 0.25f + 0.75f * Mathf.Pow(h, 6); });
            _over = MakeSystem("Over", _add, _dot, 1500, 0);
            _under = MakeSystem("Under", _alpha, _dot, 500, 0);
            // Crit flash: a quad in front of the camera.
            var fq = GameObject.CreatePrimitive(PrimitiveType.Quad); Destroy(fq.GetComponent<Collider>());
            fq.transform.SetParent(_cam.transform, false); fq.transform.localPosition = new Vector3(0, 0, _cam.nearClipPlane + 0.05f); fq.transform.localScale = new Vector3(3, 3, 1);
            _flash = fq.GetComponent<Renderer>(); _flash.sharedMaterial = new Material(_add) { mainTexture = _burst }; fq.SetActive(false);
        }
        static float Band(float x, float c, float w) => Mathf.Clamp01(1 - Mathf.Abs(x - c) / w);

        static Texture2D Tex(int n, System.Func<float, float, float> f)
        {
            var t = new Texture2D(n, n, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp, filterMode = FilterMode.Bilinear };
            var px = new Color[n * n];
            for (int y = 0; y < n; y++) for (int x = 0; x < n; x++) { float a = f(x / (n - 1f) * 2 - 1, y / (n - 1f) * 2 - 1); px[y * n + x] = new Color(1, 1, 1, a); }
            t.SetPixels(px); t.Apply();
            return t;
        }

        ParticleSystem MakeSystem(string name, Material mat, Texture2D tex, int max, float gravity)
        {
            var go = new GameObject(name); go.transform.SetParent(transform, false);
            var ps = go.AddComponent<ParticleSystem>();
            ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            var main = ps.main; main.loop = false; main.playOnAwake = false; main.simulationSpace = ParticleSystemSimulationSpace.World; main.maxParticles = max; main.gravityModifier = gravity;
            var em = ps.emission; em.enabled = false;
            var sh = ps.shape; sh.enabled = false;
            var col = ps.colorOverLifetime; col.enabled = true;
            var g = new Gradient(); g.SetKeys(new[] { new GradientColorKey(Color.white, 0), new GradientColorKey(Color.white, 1) }, new[] { new GradientAlphaKey(0, 0), new GradientAlphaKey(1, 0.12f), new GradientAlphaKey(0.8f, 0.6f), new GradientAlphaKey(0, 1) });
            col.color = g;
            var sz = ps.sizeOverLifetime; sz.enabled = true; sz.size = new ParticleSystem.MinMaxCurve(1, AnimationCurve.Linear(0, 1, 1, 0.25f));
            var vel = ps.limitVelocityOverLifetime; vel.enabled = true; vel.dampen = 0.08f; vel.limit = 100;
            var r = go.GetComponent<ParticleSystemRenderer>(); r.sharedMaterial = new Material(mat) { mainTexture = tex };
            ps.Play();
            return ps;
        }

        // ---------- primitives ----------
        static Color Hdr(Color c, float k) { var o = c * k * 0.5f; o.a = 1; return o; } // legacy additive doubles the tint
        int N(float n) => Mathf.Max(1, Mathf.RoundToInt(n * _mult));

        void Spark(ParticleSystem ps, Vector3 p, Vector3 v, Color c, float size, float life)
        {
            var e = new ParticleSystem.EmitParams { position = p, velocity = v, startColor = c, startSize = size, startLifetime = life, applyShapeToPosition = false };
            ps.Emit(e, 1);
        }
        void Sparks(Vector3 p, int n, Color c, float spd, float size = 0.12f, float life = 0.5f, float up = 0)
        {
            for (int i = 0; i < n; i++) Spark(_over, p, Random.onUnitSphere * spd * Random.Range(0.4f, 1f) + Vector3.up * up, Hdr(c, 1), size * Random.Range(0.6f, 1.2f), life * Random.Range(0.6f, 1f));
        }
        void Smoke(Vector3 p, int n, Color c, float r = 0.4f, float size = 0.8f, float life = 1.1f, float alpha = 0.5f)
        {
            for (int i = 0; i < n; i++)
            {
                var off = Random.insideUnitSphere * r; off.y = Mathf.Abs(off.y);
                var col = c; col.a = alpha;
                Spark(_under, p + off, new Vector3(Random.Range(-0.2f, 0.2f), Random.Range(0.3f, 0.8f), Random.Range(-0.2f, 0.2f)), col, size * Random.Range(0.7f, 1.3f), life);
            }
        }

        Decal Take(List<Decal> pool, PrimitiveType type, string name)
        {
            foreach (var d in pool) if (!d.Busy) { d.Busy = true; d.T.gameObject.SetActive(true); return d; }
            var go = GameObject.CreatePrimitive(type); go.name = name; Destroy(go.GetComponent<Collider>());
            go.transform.SetParent(transform, false);
            var r = go.GetComponent<Renderer>(); r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; r.receiveShadows = false;
            r.sharedMaterial = _add;
            var nd = new Decal { T = go.transform, R = r, B = new MaterialPropertyBlock(), Busy = true };
            pool.Add(nd);
            return nd;
        }
        void Release(Decal d) { d.Busy = false; d.T.gameObject.SetActive(false); }

        // A flat quad on the ground (or a camera-facing one): scales s0 -> s1, spins rv rad/s, fades.
        void GroundFx(Texture2D tex, Vector3 p, float s0, float s1, Color c, float k, float life, float rv = 0, float delay = 0, bool billboard = false)
            => StartCoroutine(GroundRoutine(tex, p, s0, s1, c, k, life, rv, delay, billboard));
        IEnumerator GroundRoutine(Texture2D tex, Vector3 p, float s0, float s1, Color c, float k, float life, float rv, float delay, bool billboard)
        {
            if (delay > 0) yield return new WaitForSeconds(delay);
            var d = Take(_decals, PrimitiveType.Quad, "Decal");
            float rot = Random.Range(0, 360f);
            d.B.SetTexture("_MainTex", tex);
            for (float t = 0; t < life; t += Time.deltaTime)
            {
                float u = t / life, ease = 1 - Mathf.Pow(1 - u, 3), a = Mathf.Clamp01(u / 0.12f) * Mathf.Clamp01((1 - u) / 0.45f);
                float s = Mathf.Lerp(s0, s1, ease);
                d.T.position = p + Vector3.up * 0.04f;
                d.T.rotation = billboard ? _cam.transform.rotation * Quaternion.Euler(0, 0, rot + rv * t * Mathf.Rad2Deg) : Quaternion.Euler(90, rot + rv * t * Mathf.Rad2Deg, 0);
                d.T.localScale = new Vector3(s, s, 1);
                var col = Hdr(c, k * a);
                d.B.SetVector("_TintColor", col); d.B.SetVector("_Color", col);
                d.R.SetPropertyBlock(d.B);
                yield return null;
            }
            Release(d);
        }

        // A glowing open cylinder (pillar / shock wall): radius and height animate, fades.
        void Wall(Vector3 p, float r0, float r1, float h0, float h1, Color c, float k, float life, float delay = 0)
            => StartCoroutine(WallRoutine(p, r0, r1, h0, h1, c, k, life, delay));
        IEnumerator WallRoutine(Vector3 p, float r0, float r1, float h0, float h1, Color c, float k, float life, float delay)
        {
            if (delay > 0) yield return new WaitForSeconds(delay);
            var d = Take(_walls, PrimitiveType.Cylinder, "Wall");
            d.B.SetTexture("_MainTex", _streak);
            for (float t = 0; t < life; t += Time.deltaTime)
            {
                float u = t / life, ease = 1 - Mathf.Pow(1 - u, 2), a = Mathf.Clamp01(u / 0.15f) * Mathf.Clamp01((1 - u) / 0.5f);
                float r = Mathf.Lerp(r0, r1, ease), h = Mathf.Lerp(h0, h1, ease);
                d.T.position = p + Vector3.up * (h / 2); d.T.rotation = Quaternion.Euler(0, t * 90, 0); d.T.localScale = new Vector3(r * 2, h / 2, r * 2);
                var col = Hdr(c, k * a * 0.6f); d.B.SetVector("_TintColor", col); d.B.SetVector("_Color", col); d.R.SetPropertyBlock(d.B);
                yield return null;
            }
            Release(d);
        }

        void Dome(Vector3 p, float r0, float r1, Color c, float life) => StartCoroutine(DomeRoutine(p, r0, r1, c, life));
        IEnumerator DomeRoutine(Vector3 p, float r0, float r1, Color c, float life)
        {
            var d = Take(_domes, PrimitiveType.Sphere, "Dome");
            d.B.SetTexture("_MainTex", _hex);
            for (float t = 0; t < life; t += Time.deltaTime)
            {
                float u = t / life, ease = 1 - Mathf.Pow(1 - u, 3), a = Mathf.Clamp01(u / 0.08f) * Mathf.Clamp01((1 - u) / 0.6f);
                float r = Mathf.Lerp(r0, r1, ease);
                d.T.position = p; d.T.localScale = Vector3.one * r * 2; d.T.rotation = Quaternion.Euler(0, t * 40, 0);
                var col = Hdr(c, a * 0.45f); d.B.SetVector("_TintColor", col); d.B.SetVector("_Color", col); d.R.SetPropertyBlock(d.B);
                yield return null;
            }
            Release(d);
        }

        // ---------- effects ----------
        public void CastCircle(Vector3 pos, Element el)
        {
            var P = Of(el);
            GroundFx(_rune, pos, 0.8f, 2.0f, P.Main, 1.05f, 1.05f, 1.4f);
            GroundFx(_rune, pos, 0.4f, 1.15f, P.Core, 0.55f, 0.95f, -2.6f);
            GroundFx(_dot, pos, 1.8f, 2.6f, P.Main, 0.45f, 1.0f);
            Wall(pos, 0.7f, 0.92f, 0.15f, 0.8f, P.Main, 0.75f, 0.85f);
            int n = N(16);
            for (int i = 0; i < n; i++)
            {
                float th = i / (float)n * Mathf.PI * 2, r = 0.85f;
                Spark(_over, pos + new Vector3(Mathf.Cos(th) * r, 0.12f, Mathf.Sin(th) * r), new Vector3(0, Random.Range(0.5f, 1.6f), 0), Hdr(i % 2 == 0 ? P.Core : P.Main, 1), Random.Range(0.12f, 0.3f), Random.Range(0.5f, 0.9f));
            }
        }

        // Energy gathering into a unit (motes pulled toward its chest).
        public void Charge(Transform unit, Element el, float dur = 0.5f) => StartCoroutine(ChargeRoutine(unit, el, dur));
        IEnumerator ChargeRoutine(Transform unit, Element el, float dur)
        {
            var P = Of(el);
            for (float t = 0; t < dur && unit != null; t += 0.05f)
            {
                var at = unit.position + Vector3.up * 1.1f + unit.forward * 0.4f;
                for (int i = 0; i < N(3); i++) { var from = at + Random.onUnitSphere * 1.0f; Spark(_over, from, (at - from) * 2.4f, Hdr(P.Core, 1), 0.09f, 0.4f); }
                yield return new WaitForSeconds(0.05f);
            }
            if (unit != null) GroundFx(_dot, unit.position + Vector3.up * 1.1f + unit.forward * 0.4f, 0.4f, 1.2f, P.Core, 0.6f, 0.25f, 0, 0, true);
        }

        // kind: "orb" (casters' foci), "bolt" (staffs, mirrors), "arrow" (bows), "shard" (others).
        public IEnumerator Projectile(Vector3 from, Vector3 to, Element el, string kind = "orb")
        {
            var P = Of(el);
            var head = new GameObject("Projectile").transform; head.SetParent(transform, false); head.position = from;
            var trail = head.gameObject.AddComponent<TrailRenderer>();
            trail.time = kind == "arrow" ? 0.12f : 0.25f; trail.widthMultiplier = kind == "orb" ? 0.28f : kind == "arrow" ? 0.06f : 0.16f;
            trail.widthCurve = AnimationCurve.Linear(0, 1, 1, 0);
            trail.sharedMaterial = _over.GetComponent<ParticleSystemRenderer>().sharedMaterial;
            trail.colorGradient = Grad(Hdr(P.Core, 1), Hdr(P.Main, 1));
            trail.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            float dur = kind == "arrow" ? 0.22f : 0.32f, arc = kind == "arrow" ? 0.25f : kind == "bolt" ? 0.15f : 0.7f;
            for (float t = 0; t < dur; t += Time.deltaTime)
            {
                float u = t / dur;
                head.position = Vector3.Lerp(from, to, u) + Vector3.up * Mathf.Sin(u * Mathf.PI) * arc;
                if (Random.value < 0.6f) Spark(_over, head.position, Random.insideUnitSphere * 0.4f, Hdr(P.Core, 1), kind == "orb" ? 0.22f : 0.1f, 0.25f);
                yield return null;
            }
            trail.emitting = false;
            Destroy(head.gameObject, trail.time + 0.1f);
        }
        static Gradient Grad(Color a, Color b)
        {
            var g = new Gradient();
            g.SetKeys(new[] { new GradientColorKey(a, 0), new GradientColorKey(b, 1) }, new[] { new GradientAlphaKey(1, 0), new GradientAlphaKey(0, 1) });
            return g;
        }

        public void Slash(Vector3 pos, Element el, Vector3 dir)
        {
            var P = Of(el);
            StartCoroutine(SlashRoutine(pos, P, dir));
            Sparks(pos, N(10), P.Core, 3f, 0.08f, 0.3f);
        }
        IEnumerator SlashRoutine(Vector3 pos, Pal P, Vector3 dir)
        {
            // A blade arc ribbon sweeping across the target.
            var go = new GameObject("Slash"); go.transform.SetParent(transform, false);
            var lr = go.AddComponent<LineRenderer>();
            lr.sharedMaterial = _over.GetComponent<ParticleSystemRenderer>().sharedMaterial; lr.positionCount = 16; lr.widthCurve = new AnimationCurve(new Keyframe(0, 0), new Keyframe(0.5f, 1), new Keyframe(1, 0)); lr.widthMultiplier = 0.35f;
            lr.colorGradient = Grad(Hdr(P.Core, 1.6f), Hdr(P.Main, 1.2f));
            var side = Vector3.Cross(Vector3.up, dir.sqrMagnitude > 0.01f ? dir.normalized : _cam.transform.forward).normalized;
            float tilt = Random.Range(-0.5f, 0.5f);
            for (float t = 0; t < 0.3f; t += Time.deltaTime)
            {
                float u = t / 0.3f;
                for (int i = 0; i < 16; i++)
                {
                    float a = Mathf.Lerp(-1.1f, 1.1f, i / 15f) * Mathf.Clamp01(u * 2.5f);
                    lr.SetPosition(i, pos + (side * Mathf.Sin(a) + Vector3.up * (Mathf.Cos(a) - 0.6f) * 0.8f + Vector3.up * tilt * Mathf.Sin(a)) * 0.8f);
                }
                lr.widthMultiplier = 0.35f * (1 - u);
                yield return null;
            }
            Destroy(go);
        }

        public void Impact(Vector3 pos, Element el, bool crit)
        {
            var P = Of(el); float s = crit ? 1.5f : 1f;
            GroundFx(_ring, pos, 0.3f, 1.4f * s, P.Main, 0.4f, 0.24f, 0, 0, true);
            GroundFx(_dot, pos, 0.6f * s, 1.2f * s, P.Core, 0.9f, 0.16f, 0, 0, true);
            GroundFx(_ring, new Vector3(pos.x, 0, pos.z), 1.0f * s, 1.2f * s, P.Main, 0.45f, 0.9f);
            Sparks(pos, N(crit ? 30 : 16), P.Core, crit ? 5 : 3.2f, 0.12f, 0.45f);
            if (crit) { GroundFx(_ring, pos, 0.4f, 2.2f, P.Core, 0.8f, 0.26f, 0, 0, true); GroundFx(_burst, pos, 1, 2.4f, P.Core, 0.7f, 0.24f, 0, 0, true); }
        }

        public void Aoe(Vector3 centre, float radius, Element el)
        {
            var P = Of(el);
            GroundFx(_rune, centre, radius * 1.4f, radius * 2.2f, P.Main, 0.65f, 1.3f, 0.8f);
            Wall(centre, radius * 0.7f, radius * 0.95f, 0.3f, 2.0f, P.Main, 1f, 1.1f);
            for (int i = 0; i < N(30); i++) { var off = Random.insideUnitCircle * radius; Spark(_over, centre + new Vector3(off.x, 0.1f, off.y), new Vector3(0, Random.Range(1f, 3f), 0), Hdr(P.Core, 1), Random.Range(0.1f, 0.25f), Random.Range(0.5f, 1f)); }
            Smoke(centre + Vector3.up * 0.3f, N(8), P.Dark.gamma, radius * 0.7f, 1.2f, 1.3f, 0.45f);
        }

        public IEnumerator Beam(Vector3 from, Vector3 to, Element el)
        {
            var P = Of(el);
            var go = new GameObject("Beam"); go.transform.SetParent(transform, false);
            var lr = go.AddComponent<LineRenderer>(); lr.sharedMaterial = _over.GetComponent<ParticleSystemRenderer>().sharedMaterial; lr.positionCount = 2;
            lr.SetPosition(0, from); lr.SetPosition(1, to); lr.colorGradient = Grad(Hdr(P.Core, 1.8f), Hdr(P.Main, 1.4f));
            for (float t = 0; t < 0.45f; t += Time.deltaTime) { lr.widthMultiplier = 0.35f * Mathf.Sin(t / 0.45f * Mathf.PI); if (Random.value < 0.7f) Sparks(Vector3.Lerp(from, to, Random.value), 1, P.Core, 1.2f, 0.1f, 0.3f); yield return null; }
            Destroy(go);
            Impact(to, el, true);
        }

        public void Shockwave(Vector3 pos, Element el, float radius = 3)
        {
            var P = Of(el);
            GroundFx(_ring, pos, 0.4f, radius * 2.1f, P.Main, 1.0f, 0.5f);
            GroundFx(_ring, pos, 0.3f, radius * 1.6f, P.Main, 0.6f, 0.6f);
            GroundFx(_dot, pos, radius, radius * 1.4f, P.Main, 0.35f, 0.45f);
            Wall(pos, 0.4f, radius, 0.7f, 0.12f, P.Main, 0.75f, 0.55f);
            for (int i = 0; i < N(26); i++) { float th = i / 26f * Mathf.PI * 2; Spark(_under, pos + new Vector3(Mathf.Cos(th), 0.12f, Mathf.Sin(th)) * 0.3f, new Vector3(Mathf.Cos(th), 0.2f, Mathf.Sin(th)) * radius * 1.6f, new Color(0.35f, 0.3f, 0.25f, 0.5f), 0.5f, 0.6f); }
        }

        public void Heal(Vector3 pos)
        {
            var P = HEAL;
            GroundFx(_dot, pos, 1.4f, 1.9f, P.Main, 0.5f, 1.1f);
            GroundFx(_ring, pos, 0.6f, 1.8f, P.Core, 0.7f, 0.8f);
            Wall(pos, 0.55f, 0.45f, 1.4f, 2.3f, P.Main, 0.9f, 1.1f);
            for (int i = 0; i < N(28); i++) { float th = Random.Range(0, Mathf.PI * 2), r = Random.Range(0.15f, 0.6f); Spark(_over, pos + new Vector3(Mathf.Cos(th) * r, Random.Range(0.1f, 1.2f), Mathf.Sin(th) * r), new Vector3(0, Random.Range(0.6f, 1.6f), 0), Hdr(i % 3 == 0 ? P.Core : P.Main, 1), Random.Range(0.08f, 0.2f), Random.Range(0.6f, 1.1f)); }
        }

        public void Buff(Vector3 pos, bool good)
        {
            var P = good ? GOLD : CURSE;
            GroundFx(_dot, pos, 1.2f, 1.6f, P.Main, 0.4f, 0.9f);
            for (int i = 0; i < N(22); i++)
            {
                float th = Random.Range(0, Mathf.PI * 2), r = Random.Range(0.2f, 0.6f);
                var p = pos + new Vector3(Mathf.Cos(th) * r, good ? Random.Range(0.1f, 0.8f) : Random.Range(1.3f, 2f), Mathf.Sin(th) * r);
                Spark(_over, p, new Vector3(0, good ? Random.Range(1.8f, 2.8f) : -Random.Range(1.5f, 2.4f), 0), Hdr(P.Core, 1), Random.Range(0.08f, 0.18f), 0.6f);
            }
            if (!good) Smoke(pos + Vector3.up * 1.2f, N(5), new Color(0.15f, 0.05f, 0.25f), 0.4f, 0.5f, 0.7f, 0.5f);
        }

        public void Shield(Vector3 pos)
        {
            var P = AQUA;
            Dome(pos + Vector3.up * 0.85f, 0.55f, 1.05f, P.Main, 1.2f);
            GroundFx(_dot, pos + Vector3.up * 0.9f, 1, 1.5f, P.Main, 0.6f, 0.2f, 0, 0, true);
            GroundFx(_rune, pos, 1.3f, 2.0f, P.Main, 0.7f, 1.0f, 1);
        }

        // Damage-over-time tick: poison bubbles (and a coloured pulse) on the unit.
        public void DebuffTick(Vector3 pos, string kind = "poison")
        {
            Color c = kind == "burn" ? Palettes["flame"].Main : kind == "bleed" ? L(2.6f, 0.12f, 0.1f) : kind == "freeze" ? AQUA.Main : L(0.6f, 2.6f, 0.35f);
            var cy = pos + Vector3.up * 1.0f;
            GroundFx(_dot, cy, 0.5f, 0.9f, c, 0.45f, 0.35f, 0, 0, true);
            GroundFx(_ring, cy, 0.35f, 1.0f, c, 0.6f, 0.4f, 0, 0, true);
            for (int i = 0; i < N(10); i++) Spark(_over, pos + new Vector3(Random.Range(-0.35f, 0.35f), Random.Range(0.3f, 1.2f), Random.Range(-0.3f, 0.3f)), new Vector3(0, Random.Range(0.5f, 1f), 0), Hdr(c, 0.9f), Random.Range(0.1f, 0.2f), 0.6f);
            if (kind == "poison") Smoke(pos + Vector3.up * 0.8f, N(4), new Color(0.06f, 0.16f, 0.03f), 0.3f, 0.6f, 0.7f, 0.55f);
        }

        public void DeathFade(Vector3 pos, Element el)
        {
            var P = Of(el);
            GroundFx(_dot, pos, 1.4f, 1.8f, P.Main, 0.35f, 1.6f);
            GroundFx(_ring, pos, 0.5f, 1.9f, P.Core, 0.5f, 1.2f);
            Wall(pos, 0.45f, 0.15f, 1.6f, 2.6f, P.Main, 0.35f, 1.5f);
            StartCoroutine(Stream(1.2f, N(60), k => Spark(_over, pos + new Vector3(Random.Range(-0.35f, 0.35f), Random.Range(0.1f, 1.8f) * (1 - k * 0.6f), Random.Range(-0.35f, 0.35f)), new Vector3(Random.Range(-0.15f, 0.15f), Random.Range(0.6f, 1.4f), Random.Range(-0.15f, 0.15f)), Hdr(P.Core, 1), Random.Range(0.06f, 0.14f), Random.Range(0.6f, 1.1f))));
            Smoke(pos + Vector3.up * 0.8f, N(16), new Color(0.12f, 0.11f, 0.12f), 0.3f, 0.9f, 1.2f, 0.6f);
        }

        public void TitanSlam(Vector3 pos, Element el)
        {
            var P = Of(el); const float R = 4.2f;
            Shockwave(pos, el, R);
            GroundFx(_ring, pos, 1.5f, R * 2.4f, P.Core, 1.1f, 0.7f);
            GroundFx(_burst, pos, R, R * 1.6f, P.Main, 0.8f, 0.9f);
            for (int i = 0; i < N(24); i++) { float th = Random.Range(0, Mathf.PI * 2), sp = Random.Range(2f, 5f); Spark(_under, pos + Vector3.up * 0.2f, new Vector3(Mathf.Cos(th) * sp, Random.Range(3f, 7f), Mathf.Sin(th) * sp), new Color(0.16f, 0.13f, 0.11f, 1), Random.Range(0.12f, 0.26f), Random.Range(0.8f, 1.2f)); }
            Sparks(pos + Vector3.up * 0.4f, N(36), P.Core, 8, 0.1f, 0.6f, 2);
            int m = _mult >= 1 ? 6 : 3;
            for (int i = 0; i < m; i++) { float th = i / (float)m * Mathf.PI * 2, r = Random.Range(1.6f, 2.6f); var p = pos + new Vector3(Mathf.Cos(th) * r, 0.4f, Mathf.Sin(th) * r); StartCoroutine(After(0.08f + i * 0.05f, () => Impact(p, el, false))); }
        }

        // Short full-screen flash on crits.
        public void CritFlash(Element el)
        {
            _flashT = 0; _flashDur = 0.22f;
            _flash.gameObject.SetActive(true);
            _flash.sharedMaterial.SetColor("_TintColor", Hdr(Of(el).Core, 0.25f));
            _flash.transform.localRotation = Quaternion.Euler(0, 0, Random.Range(0, 360f));
        }

        void Update()
        {
            if (_flashT < 0) return;
            _flashT += Time.unscaledDeltaTime;
            float a = 1 - _flashT / _flashDur;
            if (a <= 0) { _flashT = -1; _flash.gameObject.SetActive(false); return; }
            _flash.transform.localScale = new Vector3(3, 3, 1) * (1 + _flashT * 3);
        }

        IEnumerator Stream(float dur, int n, System.Action<float> emit)
        {
            for (int i = 0; i < n; i++) { emit(i / (float)n); yield return new WaitForSeconds(dur / n); }
        }
        IEnumerator After(float s, System.Action a) { yield return new WaitForSeconds(s); a(); }
    }
}
