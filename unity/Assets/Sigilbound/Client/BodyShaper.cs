// Per-hero builds on the shared skeleton (three3d.mjs swapParts / trimHair / shapeBody):
// body parts borrowed from another base model (rebound to this skeleton by bone name), beards
// shaved or scalps made bald by splitting the head's hair mesh, and proportions (height, head
// size, chest bulk, limb thickness, shoulder width) by scaling bones with child compensation.
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public static class BodyShaper
    {
        public static readonly Dictionary<string, Dictionary<string, string>> PartMesh = new Dictionary<string, Dictionary<string, string>>
        {
            ["monarch"] = new Dictionary<string, string> { ["head"] = "King_Head", ["body"] = "King_Body", ["legs"] = "King_Legs", ["feet"] = "King_Feet" },
            ["hooded"] = new Dictionary<string, string> { ["head"] = "Medieval_Head", ["body"] = "Medieval_Body", ["legs"] = "Medieval_Legs", ["feet"] = "Medieval_Feet" },
            ["adventurer"] = new Dictionary<string, string> { ["head"] = "Adventurer_Head", ["body"] = "Adventurer_Body", ["legs"] = "Adventurer_Legs", ["feet"] = "Adventurer_Feet" },
        };

        // Which base and part a renderer came from (borrowed parts keep their source base's
        // material roles).
        public sealed class PartTag : MonoBehaviour { public string SrcBase, Kind; }

        public static Transform Find(Transform root, string name)
        {
            if (root.name == name) return root;
            foreach (Transform c in root) { var f = Find(c, name); if (f != null) return f; }
            return null;
        }

        public static void TagParts(Transform modelRoot, string baseModel)
        {
            if (!PartMesh.TryGetValue(baseModel, out var parts)) return;
            foreach (var kv in parts)
            {
                var t = Find(modelRoot, kv.Value);
                if (t == null) continue;
                var tag = t.gameObject.AddComponent<PartTag>(); tag.SrcBase = baseModel; tag.Kind = kv.Key;
            }
        }

        // parts: kind -> source base ("none" removes the part). library: base -> its prototype instance.
        public static void SwapParts(Transform modelRoot, string baseModel, Dictionary<string, string> parts, Dictionary<string, Transform> bones, Dictionary<string, Transform> library)
        {
            foreach (var kv in parts)
            {
                string kind = kv.Key, src = kv.Value;
                if (src == baseModel || !PartMesh[baseModel].TryGetValue(kind, out var ownName)) continue;
                var own = Find(modelRoot, ownName);
                Transform from = null;
                if (src != "none") { if (!library.TryGetValue(src, out var lib) || lib == null) continue; from = Find(lib, PartMesh[src][kind]); if (from == null) continue; }
                var parent = own != null ? own.parent : modelRoot;
                if (own != null) { own.gameObject.SetActive(false); Object.Destroy(own.gameObject); }
                if (src == "none") continue;
                var copy = new GameObject(from.name).transform;
                copy.SetParent(parent, false);
                copy.localPosition = from.localPosition; copy.localRotation = from.localRotation; copy.localScale = from.localScale;
                var tag = copy.gameObject.AddComponent<PartTag>(); tag.SrcBase = src; tag.Kind = kind;
                foreach (var srcR in from.GetComponentsInChildren<SkinnedMeshRenderer>(true))
                {
                    var target = srcR.transform == from ? copy : new GameObject(srcR.name).transform;
                    if (target != copy) { target.SetParent(copy, false); target.localPosition = srcR.transform.localPosition; target.localRotation = srcR.transform.localRotation; target.localScale = srcR.transform.localScale; }
                    var r = target.gameObject.AddComponent<SkinnedMeshRenderer>();
                    r.sharedMesh = srcR.sharedMesh;
                    r.sharedMaterials = srcR.sharedMaterials;
                    r.bones = srcR.bones.Select(b => b != null && bones.TryGetValue(b.name, out var mine) ? mine : b).ToArray();
                    r.rootBone = srcR.rootBone != null && bones.TryGetValue(srcR.rootBone.name, out var rb) ? rb : srcR.rootBone;
                    r.updateWhenOffscreen = true;
                }
            }
        }

        // Splits the head's hair submesh by position in head-bone space (×100 like the web: eyes at
        // y 0.11): the beard is below the cheekbones and not at the back. keep: "scalp" or "beard".
        static readonly Dictionary<string, Mesh> _hairCache = new Dictionary<string, Mesh>();
        public static void TrimHair(SkinnedMeshRenderer r, int submesh, string keep)
        {
            var mesh = r.sharedMesh;
            string key = mesh.GetInstanceID() + "|" + submesh + "|" + keep;
            if (!_hairCache.TryGetValue(key, out var trimmed))
            {
                int hi = System.Array.FindIndex(r.bones, b => b != null && b.name == "Head");
                if (hi < 0) return;
                var toHead = mesh.bindposes[hi];
                var v = mesh.vertices; var tris = mesh.GetTriangles(submesh); var kept = new List<int>();
                for (int i = 0; i < tris.Length; i += 3)
                {
                    float y = 0, z = 0;
                    for (int k = 0; k < 3; k++) { var p = toHead.MultiplyPoint3x4(v[tris[i + k]]) * 100f; y += p.y / 3; z += p.z / 3; }
                    bool beard = y < 0.075f && z > -0.03f;
                    if (beard == (keep == "beard")) { kept.Add(tris[i]); kept.Add(tris[i + 1]); kept.Add(tris[i + 2]); }
                }
                trimmed = Object.Instantiate(mesh);
                trimmed.SetTriangles(kept, submesh);
                _hairCache[key] = trimmed;
            }
            r.sharedMesh = trimmed;
        }

        // shapeBody(): scale a bone and undo it on its child bones so only that segment grows.
        static void ScaleBone(Transform b, Vector3 v)
        {
            if (b == null) return;
            b.localScale = v;
            foreach (Transform c in b)
            {
                if (c.GetComponent<SkinnedMeshRenderer>() != null || c.name.StartsWith("Kit_")) continue;
                var m = Matrix4x4.Rotate(c.localRotation);
                // diag(Rᵀ·S⁻¹·R): exact when the child's rotation permutes the parent's axes.
                c.localScale = new Vector3(
                    m[0, 0] * m[0, 0] / v.x + m[1, 0] * m[1, 0] / v.y + m[2, 0] * m[2, 0] / v.z,
                    m[0, 1] * m[0, 1] / v.x + m[1, 1] * m[1, 1] / v.y + m[2, 1] * m[2, 1] / v.z,
                    m[0, 2] * m[0, 2] / v.x + m[1, 2] * m[1, 2] / v.y + m[2, 2] * m[2, 2] / v.z);
            }
        }

        public static void ShapeBody(Transform modelRoot, Dictionary<string, Transform> bones, BodySpec B)
        {
            Transform Bn(string n) => bones.TryGetValue(n, out var t) ? t : null;
            if (B.Bulk != null) ScaleBone(Bn("Chest"), new Vector3((float)B.Bulk[0], (float)B.Bulk[1], (float)B.Bulk[2]));
            if (B.Arms > 0) foreach (var n in new[] { "UpperArmL", "UpperArmR", "LowerArmL", "LowerArmR" }) ScaleBone(Bn(n), new Vector3((float)B.Arms, 1, (float)B.Arms));
            if (B.Legs > 0) foreach (var n in new[] { "UpperLegL", "UpperLegR" }) ScaleBone(Bn(n), new Vector3((float)B.Legs, 1, (float)B.Legs));
            if (B.Sh > 0)
                foreach (var (n, s) in new[] { ("ShoulderL", 1f), ("ShoulderR", -1f) })
                {
                    var b = Bn(n); if (b == null || b.parent == null) continue;
                    // Out along the model's sideways axis (three.js +X = Unity -X after the mirror), in metres.
                    float ws = b.parent.lossyScale.x;
                    b.localPosition += new Vector3(-s * (float)B.Sh * modelRoot.lossyScale.x / (ws == 0 ? 1 : ws), 0, 0);
                }
            if (B.Head > 0) { var h = Bn("Head"); if (h != null) h.localScale *= (float)B.Head; }
        }
    }
}
