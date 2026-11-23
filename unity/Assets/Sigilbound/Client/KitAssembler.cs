// Puts a Core.KitBuilder kit on a loaded hero model: creates the bone sockets (three3d.mjs socket /
// socketM), merges every static part of every socket into ONE skinned mesh with a submesh per
// material (each socket is a "bone" of it, so parts follow their bones), and gives live parts
// their own animated transforms (KitLive). Merged meshes are cached per hero + gear.
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public static class KitAssembler
    {
        sealed class CachedKit { public Mesh Mesh; public KitMat[] Mats; }
        static readonly Dictionary<string, CachedKit> _cache = new Dictionary<string, CachedKit>();

        // With the character shader: per-role finish, detail texture and the element rim; otherwise URP Lit.
        public static Material MaterialFor(KitMat m, Color rim)
        {
            var c = Palette.Hex(m.Color);
            if (m.Finish != KitFinish.Glow && CharacterLook.ShaderAvailable) return CharacterLook.For(c, CharacterLook.RoleFromFinish(m.Finish), rim);
            switch (m.Finish)
            {
                case KitFinish.Metal: return Materials.Lit(c, 0.75f, 0.6f);
                case KitFinish.LeatherMetal: return Materials.Lit(c, 0.35f, 0.45f);
                case KitFinish.Gold: return Materials.Lit(c, 0.85f, 0.65f);
                case KitFinish.Cloth: return Materials.Lit(c, 0f, 0.1f);
                case KitFinish.Wood: return Materials.Lit(c, 0f, 0.2f);
                case KitFinish.Hair: return Materials.Lit(c, 0f, 0.35f);
                case KitFinish.Bone: return Materials.Lit(c, 0f, 0.3f);
                case KitFinish.Glow:
                    if (m.Opacity >= 0.999) return Materials.Glow(Color.black, c, 1.4f); // unlit-looking, bright enough for bloom
                    c.a = (float)m.Opacity; return Materials.Unlit(c);
                default: return Materials.Lit(c, 0f, 0.25f);
            }
        }

        // modelRoot: the object scaled to hero size (three3d.mjs `model`); bones by name.
        public static void Attach(Transform modelRoot, Dictionary<string, Transform> bones, List<KitSocket> sockets, string cacheKey, Color rim)
        {
            var inners = new List<Transform>();
            var used = new List<KitSocket>();
            foreach (var s in sockets)
            {
                if (!bones.TryGetValue(s.Bone, out var bone)) continue;
                var outer = new GameObject("Kit_" + s.Slot).transform;
                outer.SetParent(bone, false);
                float k = modelRoot.lossyScale.x / Mathf.Max(1e-6f, bone.lossyScale.x);
                outer.localScale = Vector3.one * k;
                var inner = new GameObject("Socket").transform;
                inner.SetParent(outer, false);
                if (s.Mode == SocketMode.Bone)
                {
                    inner.localPosition = KitLive.ToUnity(s.Pos);
                    inner.localRotation = KitLive.ToUnity(s.BoneRotation);
                }
                else
                {
                    // Aligned with the model's rest-pose axes (+Y up, +Z forward).
                    var rel = Quaternion.Inverse(modelRoot.rotation) * bone.rotation;
                    inner.localRotation = Quaternion.Inverse(rel);
                    inner.localPosition = inner.localRotation * KitLive.ToUnity(s.Pos);
                }
                inner.localScale = Vector3.one * (float)s.ScaleMul;
                inners.Add(inner); used.Add(s);
                foreach (var live in s.Root.Children.Where(n => n.Live != null)) BuildLive(live, inner, rim);
            }
            if (inners.Count == 0) return;

            // One skinned mesh for all static parts.
            var go = new GameObject("KitMesh");
            go.transform.SetParent(modelRoot, false);
            var smr = go.AddComponent<SkinnedMeshRenderer>();
            if (!_cache.TryGetValue(cacheKey, out var kit) || kit.Mesh == null) { kit = BuildMesh(go.transform, inners, used); _cache[cacheKey] = kit; }
            smr.sharedMesh = kit.Mesh;
            smr.bones = inners.ToArray();
            smr.rootBone = modelRoot;
            smr.sharedMaterials = kit.Mats.Select(m => MaterialFor(m, rim)).ToArray();
            smr.updateWhenOffscreen = true;
            smr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
        }

        static CachedKit BuildMesh(Transform renderer, List<Transform> inners, List<KitSocket> sockets)
        {
            var verts = new List<Vector3>(); var norms = new List<Vector3>(); var weights = new List<BoneWeight>();
            var subs = new Dictionary<string, (KitMat mat, List<int> idx)>();
            var order = new List<string>();
            for (int b = 0; b < sockets.Count; b++)
            {
                var toRenderer = renderer.worldToLocalMatrix * inners[b].localToWorldMatrix;
                var baked = KitBuilder.Bake(sockets[b].Root);
                foreach (var kv in baked.ByMat)
                {
                    if (!subs.TryGetValue(kv.Key, out var sub)) { sub = (kv.Value.mat, new List<int>()); subs[kv.Key] = sub; order.Add(kv.Key); }
                    var md = kv.Value.mesh; int b0 = verts.Count;
                    for (int i = 0; i < md.Pos.Count; i++)
                    {
                        verts.Add(toRenderer.MultiplyPoint3x4(KitLive.ToUnity(md.Pos[i])));
                        norms.Add(toRenderer.MultiplyVector(KitLive.ToUnity(md.Nrm[i])).normalized);
                        weights.Add(new BoneWeight { boneIndex0 = b, weight0 = 1 });
                    }
                    // Mirroring X flips handedness: reverse the winding.
                    for (int i = 0; i < md.Idx.Count; i += 3) { sub.idx.Add(b0 + md.Idx[i]); sub.idx.Add(b0 + md.Idx[i + 2]); sub.idx.Add(b0 + md.Idx[i + 1]); }
                }
            }
            var mesh = new Mesh { name = "Kit" };
            if (verts.Count > 65000) mesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
            mesh.SetVertices(verts); mesh.SetNormals(norms);
            mesh.SetUVs(1, verts); // rest positions in model metres for the character shader's detail textures
            mesh.subMeshCount = order.Count;
            for (int i = 0; i < order.Count; i++) mesh.SetTriangles(subs[order[i]].idx, i);
            mesh.boneWeights = weights.ToArray();
            mesh.bindposes = inners.Select(t => t.worldToLocalMatrix * renderer.localToWorldMatrix).ToArray();
            mesh.RecalculateBounds();
            return new CachedKit { Mesh = mesh, Mats = order.Select(k => subs[k].mat).ToArray() };
        }

        // A live part: its own transform (animated by KitLive) with its geometry merged per material;
        // geometry-less sub-pivots (the cape's lower panel) become child transforms.
        static Transform BuildLive(KitNode node, Transform parent, Color rim)
        {
            var go = new GameObject("Live_" + node.Live?.Kind);
            var t = go.transform;
            t.SetParent(parent, false);
            t.localPosition = KitLive.ToUnity(node.Pos); t.localRotation = KitLive.ToUnity(node.Rotation); t.localScale = new Vector3((float)node.Scale.X, (float)node.Scale.Y, (float)node.Scale.Z);
            AddMesh(go, KitBuilder.Bake(node, splitPivots: true), rim);
            Transform lastPivot = null;
            foreach (var c in node.Children.Where(KitBuilder.IsPivot))
            {
                var ct = new GameObject("Pivot").transform;
                ct.SetParent(t, false);
                ct.localPosition = KitLive.ToUnity(c.Pos); ct.localRotation = KitLive.ToUnity(c.Rotation); ct.localScale = new Vector3((float)c.Scale.X, (float)c.Scale.Y, (float)c.Scale.Z);
                AddMesh(ct.gameObject, KitBuilder.Bake(c, splitPivots: true), rim);
                lastPivot = ct;
            }
            if (node.Live != null)
            {
                var live = go.AddComponent<KitLive>();
                live.Spec = node.Live; live.Ex = node.Ex; live.Ey = node.Ey; live.Ez = node.Ez; live.Order = node.RotQ.HasValue ? "XYZ" : node.EulerOrder;
                live.BaseScale = t.localScale; live.BasePos = t.localPosition;
                if (node.Live.Kind == LiveKind.Cape) live.Lower = lastPivot;
            }
            return t;
        }

        static void AddMesh(GameObject go, KitBuilder.Baked baked, Color rim)
        {
            if (baked.ByMat.Count == 0) return;
            var verts = new List<Vector3>(); var norms = new List<Vector3>(); var mats = new List<Material>();
            var mesh = new Mesh { name = "KitLive" };
            var lists = new List<List<int>>();
            foreach (var kv in baked.ByMat)
            {
                var md = kv.Value.mesh; int b0 = verts.Count; var idx = new List<int>();
                for (int i = 0; i < md.Pos.Count; i++) { verts.Add(KitLive.ToUnity(md.Pos[i])); norms.Add(KitLive.ToUnity(md.Nrm[i])); }
                for (int i = 0; i < md.Idx.Count; i += 3) { idx.Add(b0 + md.Idx[i]); idx.Add(b0 + md.Idx[i + 2]); idx.Add(b0 + md.Idx[i + 1]); }
                lists.Add(idx); mats.Add(MaterialFor(kv.Value.mat, rim));
            }
            mesh.SetVertices(verts); mesh.SetNormals(norms); mesh.SetUVs(1, verts);
            mesh.subMeshCount = lists.Count;
            for (int i = 0; i < lists.Count; i++) mesh.SetTriangles(lists[i], i);
            mesh.RecalculateBounds();
            go.AddComponent<MeshFilter>().sharedMesh = mesh;
            var mr = go.AddComponent<MeshRenderer>();
            mr.sharedMaterials = mats.ToArray();
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; // live glows and cloth: no shadows (as the web)
        }
    }
}
