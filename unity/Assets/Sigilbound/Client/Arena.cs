// The 3D battlefield: camera, lights, sky backdrop, ground, the rune circle and chapter scenery.
// Battle positions and camera framing come from Core.BattleLayout (ported from three3d.mjs).
using System.Collections.Generic;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public sealed class Arena : MonoBehaviour
    {
        public Camera Cam;
        public Light Sun;
        GameObject _scenery;
        string _camKey = BattleLayout.DefaultCamera; bool _framedBattle, _framedTitan; float _framedAspect;

        public static Vector3 ToUnity(V3 v) => new Vector3((float)v.X, (float)v.Y, (float)v.Z);

        public static Arena Create()
        {
            var a = new GameObject("Arena").AddComponent<Arena>();
            var camGo = new GameObject("Main Camera") { tag = "MainCamera" };
            a.Cam = camGo.AddComponent<Camera>();
            a.Cam.fieldOfView = 42; a.Cam.nearClipPlane = 0.1f; a.Cam.farClipPlane = 120;
            a.Cam.clearFlags = CameraClearFlags.SolidColor;
            camGo.transform.position = new Vector3(0, 7.2f, -9.6f);
            camGo.transform.LookAt(new Vector3(0, 0.9f, 1.1f));
            var sun = a.Sun = new GameObject("Sun").AddComponent<Light>();
            sun.type = LightType.Directional; sun.intensity = 1.15f; sun.shadows = LightShadows.Soft;
            sun.transform.rotation = Quaternion.Euler(48, -30, 0);
            var fill = new GameObject("Fill").AddComponent<Light>();
            fill.type = LightType.Directional; fill.intensity = 0.35f; fill.color = new Color(0.6f, 0.7f, 1f);
            fill.transform.rotation = Quaternion.Euler(20, 150, 0);
            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            return a;
        }

        // Menu view: the team lineup stands in front of a fixed camera.
        public void FrameMenu()
        {
            _framedBattle = false;
            Cam.fieldOfView = 42;
            Cam.transform.position = new Vector3(0, 7.2f, -9.6f);
            Cam.transform.LookAt(new Vector3(0, 0.9f, 1.1f));
        }

        // Battle view: a camera preset (Three-quarter by default) at the closest distance that fits
        // the whole rune circle and the HUD tags on this screen's aspect ratio.
        public void FrameBattle(string camKey, bool titan)
        {
            _camKey = camKey; _framedBattle = true; _framedTitan = titan;
            _framedAspect = Cam.aspect;
            var preset = BattleLayout.Camera(camKey);
            double aspect = Mathf.Max(0.2f, Cam.aspect);
            Cam.fieldOfView = (float)BattleLayout.FovFor(aspect);
            Cam.transform.position = ToUnity(BattleLayout.CameraPosition(preset, BattleLayout.FitDistance(preset, aspect, titan)));
            Cam.transform.LookAt(ToUnity(BattleLayout.CamTarget));
        }

        void LateUpdate()
        {
            // Re-fit when the screen changes shape (rotation, split screen, foldables).
            if (_framedBattle && Mathf.Abs(Cam.aspect - _framedAspect) > 0.01f) FrameBattle(_camKey, _framedTitan);
        }

        public void Show(bool on)
        {
            Cam.gameObject.SetActive(true);
            if (_scenery) _scenery.SetActive(on);
        }

        public void Build(int chapter, bool titan)
        {
            PostFx.SetArena(chapter, titan, true); // per-arena colour grade (postfx2 presets)
            if (_scenery) Destroy(_scenery);
            _scenery = new GameObject("Scenery");
            var (top, bottom, ground, prop) = titan ? (Palette.Hex("#1a0a0a"), Palette.Hex("#c0401a"), Palette.Hex("#24100c"), Palette.Hex("#100606")) : Palette.Scene(chapter);
            Cam.backgroundColor = top;
            RenderSettings.fog = true; RenderSettings.fogMode = FogMode.Linear; RenderSettings.fogColor = bottom;
            RenderSettings.fogStartDistance = 26; RenderSettings.fogEndDistance = 64; // the battle camera sits ~19 m out
            RenderSettings.ambientLight = Color.Lerp(bottom, Color.white, 0.35f) * 0.55f;

            // Sky: a big gradient quad behind the battlefield.
            var sky = GameObject.CreatePrimitive(PrimitiveType.Quad);
            Destroy(sky.GetComponent<Collider>());
            sky.transform.SetParent(_scenery.transform);
            sky.transform.position = new Vector3(0, 9, 30); sky.transform.localScale = new Vector3(90, 40, 1);
            var skyMat = CharacterView.Unlit(Color.white); skyMat.mainTexture = Gradient(top, bottom);
            sky.GetComponent<Renderer>().sharedMaterial = skyMat;

            // The rune circle: units stand on its rim (BattleLayout.Rim*).
            var circle = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            Destroy(circle.GetComponent<Collider>());
            circle.transform.SetParent(_scenery.transform);
            circle.transform.position = new Vector3((float)BattleLayout.RimCx, 0.005f, (float)BattleLayout.RimCz);
            circle.transform.localScale = new Vector3((float)BattleLayout.RimRx * 2, 0.002f, (float)BattleLayout.RimRz * 2);
            circle.GetComponent<Renderer>().sharedMaterial = CharacterView.Unlit(new Color(1, 1, 1, 0.05f));
            RuneRing(1.0f, 0.06f, new Color(1f, 0.81f, 0.42f, 0.55f));
            RuneRing(0.82f, 0.03f, new Color(1f, 0.85f, 0.5f, 0.3f));

            // Ground, water or lava, scatter, horizon silhouettes and motes (scenery.mjs themes).
            float density = Quality.I == null ? 1f : new[] { 0.4f, 0.7f, 1f, 1.3f }[Quality.I.Tier];
            Scenery.Build(_scenery.transform, chapter, titan, density, bottom);
            StaticBatch(_scenery);
        }

        // Static batching: everything in the arena that never moves (ground, circle, scatter,
        // silhouettes) is combined per material; animated water/lava and particles are left out.
        static void StaticBatch(GameObject root)
        {
            var still = new List<GameObject>();
            foreach (var mr in root.GetComponentsInChildren<MeshRenderer>())
            {
                var mf = mr.GetComponent<MeshFilter>();
                if (mf == null || mf.sharedMesh == null || !mf.sharedMesh.isReadable || mr.GetComponent<SceneryWave>() != null) continue;
                still.Add(mr.gameObject);
            }
            if (still.Count > 1) StaticBatchingUtility.Combine(still.ToArray(), root);
        }

        // A glowing ellipse on the ground at `k` times the rim size.
        void RuneRing(float k, float width, Color c)
        {
            var go = new GameObject("RuneRing");
            go.transform.SetParent(_scenery.transform, false);
            var lr = go.AddComponent<LineRenderer>();
            const int n = 96;
            lr.positionCount = n; lr.loop = true; lr.useWorldSpace = false;
            lr.widthMultiplier = width; lr.sharedMaterial = CharacterView.Unlit(c);
            lr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            for (int i = 0; i < n; i++)
            {
                float a = i / (float)n * Mathf.PI * 2;
                lr.SetPosition(i, new Vector3((float)BattleLayout.RimCx + Mathf.Sin(a) * (float)BattleLayout.RimRx * k, 0.02f, (float)BattleLayout.RimCz + Mathf.Cos(a) * (float)BattleLayout.RimRz * k));
            }
        }

        void Prop(PrimitiveType t, Vector3 pos, Vector3 scale, Material m, Vector3? euler = null)
        {
            var go = GameObject.CreatePrimitive(t);
            Destroy(go.GetComponent<Collider>());
            go.transform.SetParent(_scenery.transform);
            go.transform.position = pos; go.transform.localScale = scale;
            if (euler.HasValue) go.transform.eulerAngles = euler.Value;
            go.GetComponent<Renderer>().sharedMaterial = m;
        }

        static Texture2D Gradient(Color top, Color bottom)
        {
            var t = new Texture2D(1, 64, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp };
            for (int y = 0; y < 64; y++) t.SetPixel(0, y, Color.Lerp(bottom, top, y / 63f));
            t.Apply();
            return t;
        }

        // Battle positions: on the rune circle's rim, allies along the near arc and enemies along
        // the far arc, 2.2 m apart; everyone idles facing the centre.
        public static Vector3 Slot(bool ally, int index, int count) => ToUnity(BattleLayout.Slot(ally, index, count));
        public static float FacingYaw(Vector3 p) => (float)BattleLayout.FacingCentreYaw(new V3(p.x, p.y, p.z));
    }
}
