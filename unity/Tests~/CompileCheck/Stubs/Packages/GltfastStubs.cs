// Compile-check stubs for the parts of glTFast (com.unity.cloud.gltfast 6.x, assembly "glTFast",
// namespace GLTFast) that our code uses. Signatures copied from the package source
// (github.com/Unity-Technologies/com.unity.cloud.gltfast, Runtime/Scripts/GltfImport.cs,
// ImportSettings.cs, AnimationMethod.cs, IDeferAgent.cs, Logging/ICodeLogger.cs,
// Material/IMaterialGenerator.cs, Schema/Material.cs, Schema/MaterialPbrMetallicRoughness.cs),
// tag release/6.14.1 (the version in Packages/manifest.json).
using System;
using System.Threading;
using System.Threading.Tasks;
using UnityEngine;

namespace GLTFast
{
    public enum AnimationMethod { None, Legacy, Mecanim }

    public class ImportSettings
    {
        public AnimationMethod AnimationMethod { get; set; }
        public bool GenerateMipMaps { get; set; }
    }

    public interface IDeferAgent { }
    public interface IGltfReadable { }
    public interface IDownloadProvider { }

    public class GltfImport : IDisposable
    {
        public GltfImport(IDownloadProvider downloadProvider = null, IDeferAgent deferAgent = null, Materials.IMaterialGenerator materialGenerator = null, Logging.ICodeLogger logger = null) { }
        public bool LoadingDone { get; private set; }
        public bool LoadingError { get; private set; }
        public Task<bool> Load(string url, ImportSettings importSettings = null, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public Task<bool> LoadGltfBinary(byte[] bytes, Uri uri = null, ImportSettings importSettings = null, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public Task<bool> InstantiateMainSceneAsync(Transform parent, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public AnimationClip[] GetAnimationClips() => throw new NotImplementedException();
        public void Dispose() { }
    }
}

namespace GLTFast.Logging { public interface ICodeLogger { } }

namespace GLTFast.Schema
{
    public abstract class NamedObject { public string name; }
    public abstract class PbrMetallicRoughnessBase
    {
        public float[] baseColorFactor = { 1, 1, 1, 1 };
        public Color BaseColor => throw new NotImplementedException();
    }
    public abstract class MaterialBase : NamedObject
    {
        public abstract PbrMetallicRoughnessBase PbrMetallicRoughness { get; }
    }
}

namespace GLTFast.Materials
{
    public interface IMaterialGenerator
    {
        UnityEngine.Material GetDefaultMaterial(bool pointsSupport = false);
        UnityEngine.Material GenerateMaterial(Schema.MaterialBase gltfMaterial, IGltfReadable gltf, bool pointsSupport = false);
        void SetLogger(Logging.ICodeLogger logger);
    }
}
