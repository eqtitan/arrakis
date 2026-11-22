// A hero on the battlefield. Uses a real model when one exists at
// Resources/Heroes/<heroId> (any rigged prefab; if it has an Animator, the triggers
// Attack / Cast / Hit / Die are fired). Otherwise builds a stylized placeholder from
// Unity's primitive shapes, coloured to match the hero's 2D art, and animates it in code.
using System.Collections;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public sealed class CharacterView : MonoBehaviour
    {
        public Unit Unit;
        public Transform Model, ArmR, ArmL, HeadTop, Aura, Ring;
        Animator _animator;
        Vector3 _home; Quaternion _homeRot;
        float _phase; bool _busy; bool _dead;

        static Material _baseMat; static Material _unlitBase;

        // ---------- materials ----------
        static Material Lit(Color c)
        {
            if (_baseMat == null)
            {
                var tmp = GameObject.CreatePrimitive(PrimitiveType.Cube);
                _baseMat = tmp.GetComponent<Renderer>().sharedMaterial; // built-in default material (always in builds)
                Destroy(tmp);
            }
            var m = new Material(_baseMat) { color = c };
            if (m.HasProperty("_Glossiness")) m.SetFloat("_Glossiness", 0.35f);
            return m;
        }
        public static Material Unlit(Color c)
        {
            if (_unlitBase == null) _unlitBase = new Material(Shader.Find("Sprites/Default"));
            return new Material(_unlitBase) { color = c };
        }

        static Transform Part(PrimitiveType type, Transform parent, Vector3 pos, Vector3 scale, Material mat, Vector3? euler = null)
        {
            var go = GameObject.CreatePrimitive(type);
            Destroy(go.GetComponent<Collider>());
            go.transform.SetParent(parent, false);
            go.transform.localPosition = pos; go.transform.localScale = scale;
            if (euler.HasValue) go.transform.localEulerAngles = euler.Value;
            go.GetComponent<Renderer>().sharedMaterial = mat;
            go.GetComponent<Renderer>().shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            return go.transform;
        }
        static Transform Pivot(string name, Transform parent, Vector3 pos)
        {
            var t = new GameObject(name).transform; t.SetParent(parent, false); t.localPosition = pos; return t;
        }

        // ---------- construction ----------
        public static CharacterView Create(Unit unit, Vector3 pos, bool faceForward, float scale)
        {
            var root = new GameObject(unit.Name).transform;
            root.position = pos;
            root.rotation = Quaternion.LookRotation(faceForward ? Vector3.forward : Vector3.back);
            var view = root.gameObject.AddComponent<CharacterView>();
            view.Unit = unit;
            view.Model = Pivot("Model", root, Vector3.zero);
            view.Model.localScale = Vector3.one * scale;

            var prefab = Resources.Load<GameObject>($"Heroes/{unit.Template.Id}");
            if (prefab != null && !unit.Titan)
            {
                var inst = Instantiate(prefab, view.Model);
                inst.transform.localPosition = Vector3.zero; inst.transform.localRotation = Quaternion.identity;
                view._animator = inst.GetComponentInChildren<Animator>();
                view.HeadTop = Pivot("HeadTop", view.Model, new Vector3(0, 2.0f, 0));
            }
            else if (unit.Titan) view.BuildTitan();
            else view.BuildPlaceholder(!unit.Ally);

            // Element aura disc and selection ring at the feet.
            view.Aura = Part(PrimitiveType.Cylinder, root, new Vector3(0, 0.01f, 0), new Vector3(1.1f, 0.005f, 1.1f) * scale, Unlit(Palette.Element(unit.El) * new Color(1, 1, 1, 0.35f)));
            view.Ring = Part(PrimitiveType.Cylinder, root, new Vector3(0, 0.02f, 0), new Vector3(1.35f, 0.004f, 1.35f) * scale, Unlit(new Color(1, 1, 1, 0.0f)));
            view._home = root.position; view._homeRot = root.rotation;
            view._phase = Random.value * 10f;
            return view;
        }

        void BuildPlaceholder(bool hollow)
        {
            var look = Palette.Looks.TryGetValue(Unit.Template.Id, out var l) ? l : Palette.Looks["brannoc"];
            Color Tint(Color c) => hollow ? Color.Lerp(c, new Color(0.18f, 0.12f, 0.2f), 0.55f) : c;
            Material skin = Lit(Tint(look.Skin)), hair = Lit(Tint(look.Hair)), armor = Lit(Tint(look.Armor)),
                armorDark = Lit(Tint(look.Armor * 0.7f)), accent = Lit(Tint(look.Accent)), metal = Lit(Tint(new Color(0.72f, 0.75f, 0.8f))),
                wood = Lit(Tint(new Color(0.42f, 0.29f, 0.16f))), boot = Lit(new Color(0.16f, 0.12f, 0.1f));
            Color glowC = hollow ? new Color(1f, 0.15f, 0.15f) : look.Glow ?? new Color(0.1f, 0.08f, 0.12f);
            Material eyes = look.Glow.HasValue || hollow ? Unlit(glowC) : Lit(glowC);
            var m = Model;

            // legs + boots
            Part(PrimitiveType.Capsule, m, new Vector3(-0.15f, 0.35f, 0), new Vector3(0.2f, 0.32f, 0.2f), armorDark);
            Part(PrimitiveType.Capsule, m, new Vector3(0.15f, 0.35f, 0), new Vector3(0.2f, 0.32f, 0.2f), armorDark);
            Part(PrimitiveType.Cube, m, new Vector3(-0.15f, 0.07f, 0.04f), new Vector3(0.2f, 0.14f, 0.3f), boot);
            Part(PrimitiveType.Cube, m, new Vector3(0.15f, 0.07f, 0.04f), new Vector3(0.2f, 0.14f, 0.3f), boot);
            // torso, skirt, belt, emblem
            Part(PrimitiveType.Capsule, m, new Vector3(0, 0.95f, 0), new Vector3(0.62f, 0.42f, 0.42f), armor);
            Part(PrimitiveType.Cylinder, m, new Vector3(0, 0.62f, 0), new Vector3(0.6f, 0.1f, 0.44f), armorDark);
            Part(PrimitiveType.Cylinder, m, new Vector3(0, 0.74f, 0), new Vector3(0.58f, 0.03f, 0.42f), accent);
            Part(PrimitiveType.Cube, m, new Vector3(0, 1.0f, 0.2f), new Vector3(0.1f, 0.1f, 0.04f), accent, new Vector3(0, 0, 45));
            // shoulders
            Part(PrimitiveType.Sphere, m, new Vector3(-0.33f, 1.22f, 0), new Vector3(0.26f, 0.2f, 0.26f), accent);
            Part(PrimitiveType.Sphere, m, new Vector3(0.33f, 1.22f, 0), new Vector3(0.26f, 0.2f, 0.26f), accent);
            // cape for epic/legendary heroes
            if (Unit.Template.Rarity >= Rarity.Epic)
                Part(PrimitiveType.Cube, m, new Vector3(0, 0.85f, -0.24f), new Vector3(0.62f, 0.85f, 0.04f), Lit(Tint(look.Accent * 0.55f)), new Vector3(-6, 0, 0));
            // head (big, stylized)
            var head = Pivot("Head", m, new Vector3(0, 1.55f, 0));
            Part(PrimitiveType.Sphere, head, Vector3.zero, new Vector3(0.5f, 0.54f, 0.5f), skin);
            Part(PrimitiveType.Sphere, head, new Vector3(-0.1f, 0.02f, 0.22f), new Vector3(0.08f, 0.06f, 0.04f), eyes);
            Part(PrimitiveType.Sphere, head, new Vector3(0.1f, 0.02f, 0.22f), new Vector3(0.08f, 0.06f, 0.04f), eyes);
            if (look.Beard) Part(PrimitiveType.Sphere, head, new Vector3(0, -0.17f, 0.12f), new Vector3(0.36f, 0.26f, 0.3f), hair);
            switch (look.Gear)
            {
                case Headgear.Hood:
                case Headgear.Veil:
                    Part(PrimitiveType.Sphere, head, new Vector3(0, 0.06f, -0.04f), new Vector3(0.58f, 0.6f, 0.56f), look.Gear == Headgear.Hood ? armor : armorDark); break;
                case Headgear.Helm:
                    Part(PrimitiveType.Sphere, head, new Vector3(0, 0.1f, -0.01f), new Vector3(0.55f, 0.46f, 0.55f), metal);
                    Part(PrimitiveType.Cube, head, new Vector3(0, 0.0f, 0.25f), new Vector3(0.05f, 0.2f, 0.03f), metal); break;
                default:
                    Part(PrimitiveType.Sphere, head, new Vector3(0, 0.1f, -0.05f), new Vector3(0.54f, 0.44f, 0.52f), hair);
                    if (look.LongHair) Part(PrimitiveType.Capsule, head, new Vector3(0, -0.2f, -0.2f), new Vector3(0.44f, 0.32f, 0.16f), hair);
                    break;
            }
            switch (look.Gear)
            {
                case Headgear.Crown:
                    for (int i = 0; i < 5; i++) { float a = (i - 2) * 0.35f; Part(PrimitiveType.Cube, head, new Vector3(Mathf.Sin(a) * 0.2f, 0.3f, Mathf.Cos(a) * 0.2f - 0.02f), new Vector3(0.06f, 0.14f, 0.04f), accent, new Vector3(0, a * Mathf.Rad2Deg, 0)); }
                    break;
                case Headgear.Circlet: Part(PrimitiveType.Cylinder, head, new Vector3(0, 0.14f, -0.02f), new Vector3(0.52f, 0.015f, 0.52f), accent); break;
                case Headgear.Halo: Part(PrimitiveType.Cylinder, head, new Vector3(0, 0.44f, 0), new Vector3(0.42f, 0.01f, 0.42f), Unlit(look.Accent)); break;
                case Headgear.Horns:
                    Part(PrimitiveType.Capsule, head, new Vector3(-0.24f, 0.24f, 0), new Vector3(0.08f, 0.18f, 0.08f), Lit(new Color(0.9f, 0.86f, 0.75f)), new Vector3(0, 0, 35));
                    Part(PrimitiveType.Capsule, head, new Vector3(0.24f, 0.24f, 0), new Vector3(0.08f, 0.18f, 0.08f), Lit(new Color(0.9f, 0.86f, 0.75f)), new Vector3(0, 0, -35)); break;
                case Headgear.Bandana: Part(PrimitiveType.Cylinder, head, new Vector3(0, 0.1f, 0), new Vector3(0.53f, 0.04f, 0.53f), accent); break;
                case Headgear.Mask: Part(PrimitiveType.Sphere, head, new Vector3(0, -0.1f, 0.12f), new Vector3(0.42f, 0.22f, 0.32f), armor); break;
            }
            HeadTop = Pivot("HeadTop", m, new Vector3(0, 2.0f, 0));

            // arms pivot at the shoulder so they can swing
            ArmL = Pivot("ArmL", m, new Vector3(-0.38f, 1.18f, 0));
            Part(PrimitiveType.Capsule, ArmL, new Vector3(0, -0.28f, 0), new Vector3(0.16f, 0.28f, 0.16f), armorDark);
            Part(PrimitiveType.Sphere, ArmL, new Vector3(0, -0.58f, 0), Vector3.one * 0.13f, skin);
            ArmR = Pivot("ArmR", m, new Vector3(0.38f, 1.18f, 0));
            Part(PrimitiveType.Capsule, ArmR, new Vector3(0, -0.28f, 0), new Vector3(0.16f, 0.28f, 0.16f), armorDark);
            Part(PrimitiveType.Sphere, ArmR, new Vector3(0, -0.58f, 0), Vector3.one * 0.13f, skin);
            var hand = Pivot("Hand", ArmR, new Vector3(0, -0.6f, 0.06f));
            BuildProp(look.Prop, hand, ArmL, wood, metal, accent, Unlit(look.Accent));
        }

        static void BuildProp(Prop p, Transform hand, Transform offArm, Material wood, Material metal, Material accent, Material glow)
        {
            // Weapons point forward/up from the hand.
            switch (p)
            {
                case Prop.Spear: Part(PrimitiveType.Cylinder, hand, new Vector3(0, 0.35f, 0.1f), new Vector3(0.05f, 0.75f, 0.05f), wood, new Vector3(20, 0, 0)); Part(PrimitiveType.Cube, hand, new Vector3(0, 1.05f, 0.36f), new Vector3(0.08f, 0.22f, 0.03f), metal, new Vector3(20, 0, 0)); break;
                case Prop.Sword: case Prop.Katana: Part(PrimitiveType.Cube, hand, new Vector3(0, 0.45f, 0.12f), new Vector3(0.07f, 0.8f, 0.03f), metal, new Vector3(18, 0, 0)); Part(PrimitiveType.Cube, hand, new Vector3(0, 0.06f, 0.02f), new Vector3(0.24f, 0.04f, 0.06f), accent); break;
                case Prop.Staff: Part(PrimitiveType.Cylinder, hand, new Vector3(0, 0.3f, 0), new Vector3(0.05f, 0.75f, 0.05f), wood); Part(PrimitiveType.Sphere, hand, new Vector3(0, 1.08f, 0), Vector3.one * 0.18f, glow); break;
                case Prop.Hammer: case Prop.Club: Part(PrimitiveType.Cylinder, hand, new Vector3(0, 0.3f, 0.06f), new Vector3(0.06f, 0.4f, 0.06f), wood, new Vector3(15, 0, 0)); Part(PrimitiveType.Cube, hand, new Vector3(0, 0.72f, 0.18f), p == Prop.Hammer ? new Vector3(0.34f, 0.2f, 0.2f) : new Vector3(0.18f, 0.24f, 0.18f), p == Prop.Hammer ? metal : wood, new Vector3(15, 0, 0)); break;
                case Prop.Trident: Part(PrimitiveType.Cylinder, hand, new Vector3(0, 0.35f, 0.08f), new Vector3(0.04f, 0.75f, 0.04f), metal, new Vector3(12, 0, 0)); for (int i = -1; i <= 1; i++) Part(PrimitiveType.Cube, hand, new Vector3(i * 0.09f, 1.15f, 0.25f), new Vector3(0.03f, 0.2f, 0.03f), metal, new Vector3(12, 0, 0)); break;
                case Prop.Bow: Part(PrimitiveType.Capsule, hand, new Vector3(0, 0.1f, 0.1f), new Vector3(0.05f, 0.5f, 0.05f), wood); break;
                case Prop.Lantern: case Prop.Candle: Part(PrimitiveType.Cube, hand, new Vector3(0, -0.12f, 0.06f), new Vector3(0.14f, 0.18f, 0.14f), wood); Part(PrimitiveType.Sphere, hand, new Vector3(0, -0.12f, 0.06f), Vector3.one * 0.12f, glow); break;
                case Prop.Hook: Part(PrimitiveType.Cylinder, hand, new Vector3(0, 0.3f, 0.06f), new Vector3(0.04f, 0.35f, 0.04f), metal, new Vector3(15, 0, 0)); Part(PrimitiveType.Capsule, hand, new Vector3(0, 0.66f, 0.2f), new Vector3(0.05f, 0.14f, 0.05f), metal, new Vector3(110, 0, 0)); break;
                case Prop.Whip: Part(PrimitiveType.Capsule, hand, new Vector3(0, 0.25f, 0.3f), new Vector3(0.04f, 0.4f, 0.04f), accent, new Vector3(60, 0, 0)); break;
                case Prop.Daggers: Part(PrimitiveType.Cube, hand, new Vector3(0, 0.18f, 0.08f), new Vector3(0.05f, 0.3f, 0.02f), metal, new Vector3(25, 0, 0)); Part(PrimitiveType.Cube, offArm, new Vector3(0, -0.45f, 0.12f), new Vector3(0.05f, 0.3f, 0.02f), metal, new Vector3(25, 0, 0)); break;
                case Prop.Mirror: Part(PrimitiveType.Cylinder, hand, new Vector3(0, 0.3f, 0.05f), new Vector3(0.26f, 0.015f, 0.32f), glow, new Vector3(90, 0, 0)); break;
                case Prop.Orb: Part(PrimitiveType.Sphere, hand, new Vector3(0, 0.12f, 0.08f), Vector3.one * 0.22f, glow); break;
                case Prop.Bell: Part(PrimitiveType.Sphere, hand, new Vector3(0, -0.05f, 0.08f), new Vector3(0.2f, 0.24f, 0.2f), accent); break;
                case Prop.Shield:
                    Part(PrimitiveType.Cube, hand, new Vector3(0, 0.42f, 0.1f), new Vector3(0.06f, 0.65f, 0.03f), metal, new Vector3(18, 0, 0));
                    Part(PrimitiveType.Cylinder, offArm, new Vector3(-0.04f, -0.4f, 0.16f), new Vector3(0.44f, 0.03f, 0.52f), metal, new Vector3(90, 0, 0));
                    Part(PrimitiveType.Sphere, offArm, new Vector3(-0.04f, -0.4f, 0.2f), Vector3.one * 0.1f, accent);
                    break;
            }
        }

        void BuildTitan()
        {
            Color el = Palette.Element(Unit.El);
            Material stone = Lit(new Color(0.42f, 0.39f, 0.36f)), dark = Lit(new Color(0.24f, 0.22f, 0.2f)), glow = Unlit(el);
            var m = Model;
            Part(PrimitiveType.Cube, m, new Vector3(-0.5f, 0.6f, 0), new Vector3(0.6f, 1.2f, 0.6f), dark);
            Part(PrimitiveType.Cube, m, new Vector3(0.5f, 0.6f, 0), new Vector3(0.6f, 1.2f, 0.6f), dark);
            Part(PrimitiveType.Cube, m, new Vector3(0, 2.0f, 0), new Vector3(2.0f, 1.8f, 1.2f), stone, new Vector3(0, 0, 2));
            Part(PrimitiveType.Cube, m, new Vector3(0, 3.25f, 0.1f), new Vector3(1.0f, 0.9f, 0.9f), stone);
            Part(PrimitiveType.Sphere, m, new Vector3(-0.22f, 3.3f, 0.55f), new Vector3(0.2f, 0.12f, 0.06f), glow);
            Part(PrimitiveType.Sphere, m, new Vector3(0.22f, 3.3f, 0.55f), new Vector3(0.2f, 0.12f, 0.06f), glow);
            Part(PrimitiveType.Cube, m, new Vector3(0, 2.1f, 0.61f), new Vector3(0.12f, 1.2f, 0.02f), glow, new Vector3(0, 0, 12));
            Part(PrimitiveType.Cube, m, new Vector3(-1.2f, 3.5f, 0), new Vector3(0.25f, 0.8f, 0.25f), dark, new Vector3(0, 0, 30));
            Part(PrimitiveType.Cube, m, new Vector3(1.2f, 3.5f, 0), new Vector3(0.25f, 0.8f, 0.25f), dark, new Vector3(0, 0, -30));
            ArmL = Pivot("ArmL", m, new Vector3(-1.25f, 2.7f, 0));
            Part(PrimitiveType.Cube, ArmL, new Vector3(0, -0.8f, 0), new Vector3(0.6f, 1.7f, 0.6f), stone);
            ArmR = Pivot("ArmR", m, new Vector3(1.25f, 2.7f, 0));
            Part(PrimitiveType.Cube, ArmR, new Vector3(0, -0.8f, 0), new Vector3(0.6f, 1.7f, 0.6f), stone);
            HeadTop = Pivot("HeadTop", m, new Vector3(0, 4.1f, 0));
        }

        // ---------- animation ----------
        void Update()
        {
            if (_dead || Model == null) return;
            float t = Time.time + _phase;
            if (_animator == null)
            {
                Model.localPosition = new Vector3(0, Mathf.Sin(t * 2.4f) * 0.025f, 0);
                if (!_busy && ArmR != null)
                {
                    ArmR.localRotation = Quaternion.Euler(Mathf.Sin(t * 2.4f) * 5f - 8f, 0, 0);
                    ArmL.localRotation = Quaternion.Euler(-Mathf.Sin(t * 2.4f) * 4f - 4f, 0, 0);
                }
            }
            if (Aura != null) Aura.localScale = new Vector3(1.1f + Mathf.Sin(t * 3f) * 0.05f, 0.005f, 1.1f + Mathf.Sin(t * 3f) * 0.05f) * Model.localScale.x;
        }

        public void SetHighlight(Color? c)
        {
            var r = Ring.GetComponent<Renderer>();
            r.sharedMaterial.color = c ?? new Color(1, 1, 1, 0);
        }

        public IEnumerator Attack(Vector3 targetPos, bool melee)
        {
            _busy = true;
            if (_animator != null) _animator.SetTrigger(melee ? "Attack" : "Cast");
            Vector3 dir = (targetPos - _home); dir.y = 0;
            Vector3 lungeTo = melee ? _home + dir * 0.55f : _home + dir.normalized * 0.2f;
            float dur = melee ? 0.22f : 0.18f;
            for (float k = 0; k < 1; k += Time.deltaTime / dur)
            {
                transform.position = Vector3.Lerp(_home, lungeTo, Ease(k));
                if (ArmR != null && _animator == null)
                {
                    if (melee) ArmR.localRotation = Quaternion.Euler(Mathf.Lerp(0, -150, k), 0, 0);
                    else { ArmR.localRotation = Quaternion.Euler(Mathf.Lerp(0, -160, k), 0, 0); ArmL.localRotation = Quaternion.Euler(Mathf.Lerp(0, -160, k), 0, 0); }
                }
                yield return null;
            }
            if (melee && ArmR != null && _animator == null)
                for (float k = 0; k < 1; k += Time.deltaTime / 0.1f) { ArmR.localRotation = Quaternion.Euler(Mathf.Lerp(-150, 40, k), 0, 0); yield return null; }
            _busy = false;
        }

        public IEnumerator Recover()
        {
            _busy = true;
            Vector3 from = transform.position;
            for (float k = 0; k < 1; k += Time.deltaTime / 0.25f)
            {
                transform.position = Vector3.Lerp(from, _home, Ease(k));
                if (ArmR != null && _animator == null)
                {
                    ArmR.localRotation = Quaternion.Slerp(ArmR.localRotation, Quaternion.identity, k);
                    ArmL.localRotation = Quaternion.Slerp(ArmL.localRotation, Quaternion.identity, k);
                }
                yield return null;
            }
            transform.position = _home;
            _busy = false;
        }

        public void Hit()
        {
            if (_dead) return;
            if (_animator != null) _animator.SetTrigger("Hit");
            StartCoroutine(HitRoutine());
        }
        IEnumerator HitRoutine()
        {
            Vector3 back = -transform.forward * 0.18f;
            for (float k = 0; k < 1; k += Time.deltaTime / 0.18f)
            {
                transform.position = _home + back * Mathf.Sin(k * Mathf.PI);
                Model.localScale = Vector3.one * Model.localScale.x; // keep uniform
                yield return null;
            }
            transform.position = _home;
        }

        public void Die()
        {
            if (_dead) return;
            _dead = true;
            if (_animator != null) _animator.SetTrigger("Die");
            StartCoroutine(DieRoutine());
        }
        IEnumerator DieRoutine()
        {
            Quaternion from = transform.rotation, to = from * Quaternion.Euler(-80, 0, 0);
            for (float k = 0; k < 1; k += Time.deltaTime / 0.45f) { transform.rotation = Quaternion.Slerp(from, to, Ease(k)); yield return null; }
            Vector3 p = transform.position;
            for (float k = 0; k < 1; k += Time.deltaTime / 0.8f) { transform.position = p + Vector3.down * k * 0.6f; yield return null; }
            if (Aura) Aura.gameObject.SetActive(false);
            if (Ring) Ring.gameObject.SetActive(false);
        }

        static float Ease(float k) => 1 - Mathf.Pow(1 - Mathf.Clamp01(k), 3);
        public Vector3 Center => transform.position + Vector3.up * (HeadTop ? (HeadTop.position.y - transform.position.y) * 0.55f : 1f);
    }
}
