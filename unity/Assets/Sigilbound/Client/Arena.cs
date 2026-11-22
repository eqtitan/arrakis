// The 3D battlefield: camera, lights, sky backdrop, ground and chapter scenery.
using UnityEngine;

namespace Sigilbound.Client
{
    public sealed class Arena : MonoBehaviour
    {
        public Camera Cam;
        GameObject _scenery;

        public static Arena Create()
        {
            var a = new GameObject("Arena").AddComponent<Arena>();
            var camGo = new GameObject("Main Camera") { tag = "MainCamera" };
            a.Cam = camGo.AddComponent<Camera>();
            a.Cam.fieldOfView = 42; a.Cam.nearClipPlane = 0.1f; a.Cam.farClipPlane = 120;
            a.Cam.clearFlags = CameraClearFlags.SolidColor;
            camGo.transform.position = new Vector3(0, 7.2f, -9.6f);
            camGo.transform.LookAt(new Vector3(0, 0.9f, 1.1f));
            var sun = new GameObject("Sun").AddComponent<Light>();
            sun.type = LightType.Directional; sun.intensity = 1.15f; sun.shadows = LightShadows.Soft;
            sun.transform.rotation = Quaternion.Euler(48, -30, 0);
            var fill = new GameObject("Fill").AddComponent<Light>();
            fill.type = LightType.Directional; fill.intensity = 0.35f; fill.color = new Color(0.6f, 0.7f, 1f);
            fill.transform.rotation = Quaternion.Euler(20, 150, 0);
            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Flat;
            return a;
        }

        public void Show(bool on)
        {
            Cam.gameObject.SetActive(true);
            if (_scenery) _scenery.SetActive(on);
        }

        public void Build(int chapter, bool titan)
        {
            if (_scenery) Destroy(_scenery);
            _scenery = new GameObject("Scenery");
            var (top, bottom, ground, prop) = titan ? (Palette.Hex("#1a0a0a"), Palette.Hex("#c0401a"), Palette.Hex("#24100c"), Palette.Hex("#100606")) : Palette.Scene(chapter);
            Cam.backgroundColor = top;
            RenderSettings.fog = true; RenderSettings.fogMode = FogMode.Linear; RenderSettings.fogColor = bottom;
            RenderSettings.fogStartDistance = 14; RenderSettings.fogEndDistance = 40;
            RenderSettings.ambientLight = Color.Lerp(bottom, Color.white, 0.35f) * 0.55f;

            // Sky: a big gradient quad behind the battlefield.
            var sky = GameObject.CreatePrimitive(PrimitiveType.Quad);
            Destroy(sky.GetComponent<Collider>());
            sky.transform.SetParent(_scenery.transform);
            sky.transform.position = new Vector3(0, 9, 30); sky.transform.localScale = new Vector3(90, 40, 1);
            var skyMat = CharacterView.Unlit(Color.white); skyMat.mainTexture = Gradient(top, bottom);
            sky.GetComponent<Renderer>().sharedMaterial = skyMat;

            // Ground
            var g = GameObject.CreatePrimitive(PrimitiveType.Plane);
            g.transform.SetParent(_scenery.transform);
            g.transform.localScale = new Vector3(8, 1, 8);
            var gm = new Material(g.GetComponent<Renderer>().sharedMaterial) { color = ground };
            g.GetComponent<Renderer>().sharedMaterial = gm;
            // Battle circle
            var circle = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            Destroy(circle.GetComponent<Collider>());
            circle.transform.SetParent(_scenery.transform);
            circle.transform.position = new Vector3(0, 0.005f, 0.5f); circle.transform.localScale = new Vector3(9, 0.002f, 7.5f);
            circle.GetComponent<Renderer>().sharedMaterial = CharacterView.Unlit(new Color(1, 1, 1, 0.05f));

            // Scenery props ring the arena, themed loosely per chapter.
            var rng = new System.Random(chapter * 31 + 3);
            var propMat = new Material(gm) { color = prop };
            var glowMat = CharacterView.Unlit(Color.Lerp(bottom, Color.white, 0.3f) * new Color(1, 1, 1, 0.8f));
            int kind = titan ? 2 : chapter % 5;
            for (int i = 0; i < 26; i++)
            {
                float ang = (float)rng.NextDouble() * Mathf.PI * 2;
                float rad = 7.5f + (float)rng.NextDouble() * 9f;
                var pos = new Vector3(Mathf.Cos(ang) * rad, 0, Mathf.Sin(ang) * rad * 0.8f + 5f);
                if (pos.z < -3.5f) continue; // keep the camera's view clear
                float s = 0.6f + (float)rng.NextDouble() * 1.4f;
                switch (kind)
                {
                    case 0: // trees
                        Prop(PrimitiveType.Cylinder, pos + Vector3.up * 0.6f * s, new Vector3(0.25f, 0.6f, 0.25f) * s, propMat);
                        Prop(PrimitiveType.Capsule, pos + Vector3.up * 2.0f * s, new Vector3(1.4f, 1.6f, 1.4f) * s, propMat);
                        break;
                    case 1: case 3: // reeds / stumps
                        Prop(PrimitiveType.Cylinder, pos + Vector3.up * 0.5f * s, new Vector3(0.12f, 0.5f * s * 2, 0.12f), propMat);
                        break;
                    case 2: // jagged rocks
                        Prop(PrimitiveType.Cube, pos + Vector3.up * 0.7f * s, new Vector3(1.2f, 1.6f, 1.0f) * s, propMat, new Vector3(rng.Next(-15, 15), rng.Next(0, 90), rng.Next(-15, 15)));
                        break;
                    default: // ruins / crystals
                        if (i % 2 == 0) Prop(PrimitiveType.Cube, pos + Vector3.up * 1.2f * s, new Vector3(0.5f, 2.4f, 0.5f) * s, propMat);
                        else Prop(PrimitiveType.Cube, pos + Vector3.up * 0.8f * s, new Vector3(0.35f, 1.6f, 0.35f) * s, glowMat, new Vector3(0, 45, rng.Next(-20, 20)));
                        break;
                }
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

        // Battle positions: allies near the camera, enemies across the field.
        public static Vector3 Slot(bool ally, int index, int count)
        {
            float spread = count <= 1 ? 0 : 4.6f / (count - 1);
            float x = count <= 1 ? 0 : -2.3f + index * spread;
            return ally ? new Vector3(x, 0, -1.6f) : new Vector3(x * 0.9f, 0, 3.0f);
        }
    }
}
