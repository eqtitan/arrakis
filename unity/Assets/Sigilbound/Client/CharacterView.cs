// A hero on the battlefield. Loads the hero's recoloured CC0 GLB model with glTFast
// (HeroModels) and plays its clips; while it loads, or if it can't, shows a stylized placeholder
// built from Unity's primitive shapes in the hero's colours, animated in code. A prefab at
// Resources/Heroes/<heroId> (with an Animator: triggers Attack / Cast / Hit / Die) overrides both.
using System.Collections;
using System.Linq;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public sealed class CharacterView : MonoBehaviour
    {
        public Unit Unit;
        public GearLook Gear;             // equipped gear shown on the model (rarity and set)
        public HeroModel Hero => _model;
        public Transform Model, ArmR, ArmL, HeadTop, Aura, Ring;
        Animator _animator;
        HeroModel _model;
        Vector3 _home; Quaternion _homeRot;
        float _phase; bool _busy; bool _dead;

        // ---------- materials ----------
        static Material Lit(Color c) => Materials.Lit(c, 0f, 0.35f);
        public static Material Unlit(Color c) => Materials.Unlit(c);

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

        static Material _blob;
        static Material BlobMaterial
        {
            get
            {
                if (_blob != null) return _blob;
                const int n = 64;
                var t = new Texture2D(n, n, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp, name = "ContactShadow" };
                var px = new Color32[n * n];
                for (int y = 0; y < n; y++) for (int x = 0; x < n; x++)
                {
                    float u = x / (n - 1f) * 2 - 1, v = y / (n - 1f) * 2 - 1, d = Mathf.Clamp01(Mathf.Sqrt(u * u + v * v));
                    px[y * n + x] = new Color32(0, 0, 0, (byte)(255 * Mathf.Pow(1 - d, 1.6f)));
                }
                t.SetPixels32(px); t.Apply();
                _blob = Unlit(new Color(0, 0, 0, 0.55f)); _blob.mainTexture = t; _blob.name = "ContactShadow";
                return _blob;
            }
        }

        // ---------- construction ----------
        public static CharacterView Create(Unit unit, Vector3 pos, bool faceForward, float scale) =>
            Create(unit, pos, faceForward ? 0f : 180f, scale);

        // yaw: degrees around Y, 0 = facing +Z (battle units face the rune circle's centre).
        public static CharacterView Create(Unit unit, Vector3 pos, float yaw, float scale, GearLook gear = null)
        {
            var root = new GameObject(unit.Name).transform;
            root.position = pos;
            root.rotation = Quaternion.Euler(0, yaw, 0);
            var view = root.gameObject.AddComponent<CharacterView>();
            view.Unit = unit; view.Gear = gear;
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
            else
            {
                if (unit.Titan) view.BuildTitan();
                else view.BuildPlaceholder(!unit.Ally && !unit.Rival);
                if (HeroModels.Available) view.StartCoroutine(view.LoadModel());
            }

            // Element aura disc and selection ring at the feet.
            // Contact shadow: a soft dark blob under the feet (grounds units on every tier, also where
            // real shadows are off), sized to the unit; the Titan's is wider.
            var blob = Part(PrimitiveType.Quad, root, new Vector3(0, 0.006f, 0), new Vector3(1, 1, 1) * scale * (unit.Titan ? 2.6f : 1.05f), BlobMaterial, new Vector3(90, 0, 0));
            blob.name = "ContactShadow";
            view.Aura = Part(PrimitiveType.Cylinder, root, new Vector3(0, 0.01f, 0), new Vector3(1.1f, 0.005f, 1.1f) * scale, Unlit(Palette.Element(unit.El) * new Color(1, 1, 1, 0.35f)));
            view.Ring = Part(PrimitiveType.Cylinder, root, new Vector3(0, 0.02f, 0), new Vector3(1.35f, 0.004f, 1.35f) * scale, Unlit(new Color(1, 1, 1, 0.0f)));
            view._home = root.position; view._homeRot = root.rotation;
            view._phase = Random.value * 10f;
            return view;
        }

        // Swap the placeholder for the real model once glTFast has built it.
        IEnumerator LoadModel()
        {
            var holder = new GameObject("GLB").transform;
            holder.SetParent(Model, false);
            HeroModel built = null;
            yield return HeroModels.Build(Unit, Gear, holder, m => built = m);
            if (built == null || this == null) { if (holder) Destroy(holder.gameObject); yield break; }
            foreach (Transform child in Model) if (child != holder) child.gameObject.SetActive(false);
            _model = built;
            ArmL = ArmR = null;
            if (HeadTop == null) HeadTop = Pivot("HeadTop", Model, Vector3.zero);
            HeadTop.SetParent(Model, false);
            HeadTop.gameObject.SetActive(true);
            HeadTop.localPosition = new Vector3(0, built.Height * 0.87f, 0);
            if (_dead) built.Die();
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
            if (_animator == null && _model == null)
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

        // The web's attack choreography (three3d.mjs attack()): melee heroes run in, stop short and
        // strike; casters step forward and cast (or the support cast for heals and buffs); the Titan
        // jump-slams or swings in place. onSlam fires when the Titan lands.
        public IEnumerator Attack(Vector3 targetPos, bool melee, bool support = false, bool ult = false, System.Action onSlam = null)
        {
            if (_model != null) { yield return ModelAttack(targetPos, melee, support, ult, onSlam); yield break; }
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

        IEnumerator ModelAttack(Vector3 targetPos, bool melee, bool support, bool ult, System.Action onSlam)
        {
            _busy = true;
            var m = _model;
            Vector3 dir = targetPos - _home; dir.y = 0;
            if (Unit.Titan)
            {
                if (m.Has("Jump") && m.Has("Jump_Land") && (ult || Random.value < 0.4f))
                {
                    m.Play("Jump", false, 0.12f, 1.6f, true);
                    yield return new WaitForSeconds(0.3f);
                    m.Play("Jump_Land", false, 0.08f, 1.4f);
                    yield return new WaitForSeconds(0.12f);
                    onSlam?.Invoke();
                    yield return new WaitForSeconds(0.2f);
                }
                else { m.Strike(); yield return new WaitForSeconds(0.5f); }
                _busy = false; yield break;
            }
            if (melee)
            {
                Vector3 to = _home + dir * Mathf.Max(0.35f, 1 - 1.15f / Mathf.Max(1.2f, dir.magnitude));
                m.Run();
                for (float k = 0; k < 1; k += Time.deltaTime / 0.26f) { transform.position = Vector3.Lerp(_home, to, EaseIO(k)); yield return null; }
                transform.position = to;
                m.Strike();
                yield return new WaitForSeconds(0.35f);
            }
            else
            {
                m.Cast(support);
                Vector3 to = _home + dir.normalized * 0.2f;
                for (float k = 0; k < 1; k += Time.deltaTime / 0.2f) { transform.position = Vector3.Lerp(_home, to, Ease(k)); yield return null; }
                yield return new WaitForSeconds(0.15f);
            }
            _busy = false;
        }

        // The hero screen's tap: the hero's own strike (melee) or cast, in place.
        public void Showcase()
        {
            if (_dead || _busy) return;
            bool caster = Looks.IsCaster(Unit.Template.Id);
            Sound.I?.Play(caster ? "cast" : "swing", 0.5f);
            if (_model != null) { if (caster) _model.Cast(false); else _model.Strike(); return; }
            StartCoroutine(PlaceholderShowcase(!caster));
        }
        IEnumerator PlaceholderShowcase(bool melee)
        {
            var home = _home; _home = transform.position;
            yield return Attack(transform.position + transform.forward * 0.6f, melee);
            yield return Recover();
            _home = home;
        }

        public IEnumerator Recover()
        {
            _busy = true;
            Vector3 from = transform.position;
            bool far = Vector3.Distance(from, _home) > 0.6f;
            if (_model != null && Unit.Titan && Random.value < 0.5f)
            {
                var roars = new[] { "Yes", "No", "Wave" }.Where(_model.Has).ToArray();
                if (roars.Length > 0) _model.Play(roars[Random.Range(0, roars.Length)], false, 0.2f, 1.3f);
            }
            else if (_model != null && far) _model.Run(true);
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
            if (_model != null && far && !Unit.Titan) _model.Idle(0.2f);
            _busy = false;
        }

        // big: a crit or more than 14% of max HP (heavier reaction); glancing blows may be rolled away.
        public void Hit(bool big = false, bool glancing = false)
        {
            if (_dead) return;
            if (_animator != null) _animator.SetTrigger("Hit");
            if (_model != null && !_busy)
            {
                if (!big && glancing && !Unit.Titan && Random.value < 0.35f && _model.Roll()) { }
                else _model.Hit(big);
            }
            if (!Unit.Titan) StartCoroutine(HitRoutine(big));
        }
        public void Win() { if (!_dead && _model != null) { _busy = true; _model.Win(); } }
        IEnumerator HitRoutine(bool big)
        {
            Vector3 back = -transform.forward * (big ? 0.34f : 0.2f);
            float dur = big ? 0.24f : 0.18f;
            for (float k = 0; k < 1; k += Time.deltaTime / dur)
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
            if (_model != null && _model.Die()) StartCoroutine(SinkAfterDeath());
            else StartCoroutine(DieRoutine());
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

        // After the death clip: wait, then sink into the ground (three3d.mjs die()).
        IEnumerator SinkAfterDeath()
        {
            yield return new WaitForSeconds(1.1f);
            Vector3 p = transform.position;
            for (float k = 0; k < 1; k += Time.deltaTime / 0.8f) { transform.position = p + Vector3.down * 0.9f * k; yield return null; }
            if (Aura) Aura.gameObject.SetActive(false);
            if (Ring) Ring.gameObject.SetActive(false);
        }

        // Turn toward a point while acting, then back to the rest pose (units idle facing the centre).
        public void Face(Vector3 target) { var d = target - transform.position; d.y = 0; if (d.sqrMagnitude > 0.01f) transform.rotation = Quaternion.LookRotation(d); }
        public void FaceHome() => transform.rotation = _homeRot;

        static float Ease(float k) => 1 - Mathf.Pow(1 - Mathf.Clamp01(k), 3);
        static float EaseIO(float k) { k = Mathf.Clamp01(k); return k < 0.5f ? 2 * k * k : 1 - Mathf.Pow(-2 * k + 2, 2) / 2; }
        public Vector3 Center => transform.position + Vector3.up * (HeadTop ? (HeadTop.position.y - transform.position.y) * 0.55f : 1f);
    }
}
