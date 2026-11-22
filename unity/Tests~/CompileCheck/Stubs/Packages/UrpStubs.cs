// Compile-check stubs for the parts of URP 17 (com.unity.render-pipelines.universal 17.0.4, the
// version bundled with Unity 6000.0) that our code uses. Signatures copied from
// github.com/Unity-Technologies/Graphics, branch 6000.0/staging:
// Runtime/Data/UniversalRenderPipelineAsset.cs, Runtime/UniversalRendererData.cs,
// Runtime/Data/PostProcessData.cs, Runtime/UniversalAdditionalCameraData.cs.
using System;
using UnityEngine;
using UnityEngine.Rendering;

namespace UnityEngine.Rendering.Universal
{
    public abstract class ScriptableRendererData : ScriptableObject { }
    public class PostProcessData : ScriptableObject { }
    public partial class UniversalRendererData : ScriptableRendererData
    {
        public PostProcessData postProcessData = null;
    }

    public enum AntialiasingMode { None, FastApproximateAntialiasing, SubpixelMorphologicalAntiAliasing, TemporalAntiAliasing }

    public partial class UniversalRenderPipelineAsset : RenderPipelineAsset
    {
        // (protected in URP; the 2021.3 reference assembly declares the base member public)
        public override RenderPipeline CreatePipeline() => throw new NotImplementedException();
        // #if UNITY_EDITOR in the package; the editor assembly sees it.
        public static readonly string packagePath = "Packages/com.unity.render-pipelines.universal";
        public static UniversalRenderPipelineAsset Create(ScriptableRendererData rendererData = null) => throw new NotImplementedException();
        public bool supportsCameraDepthTexture { get; set; }
        public bool supportsCameraOpaqueTexture { get; set; }
        public bool supportsHDR { get; set; }
        public int msaaSampleCount { get; set; }
        public float renderScale { get; set; }
        public bool supportsMainLightShadows => throw new NotImplementedException();   // internal set
        public int mainLightShadowmapResolution { get; set; }
        public float shadowDistance { get; set; }
        public int shadowCascadeCount { get; set; }
        public bool supportsSoftShadows => throw new NotImplementedException();        // internal set
    }

    public class UniversalAdditionalCameraData : MonoBehaviour
    {
        public bool renderShadows { get; set; }
        public bool renderPostProcessing { get; set; }
        public AntialiasingMode antialiasing { get; set; }
    }

    public static class CameraExtensions
    {
        public static UniversalAdditionalCameraData GetUniversalAdditionalCameraData(this Camera camera) => throw new NotImplementedException();
    }
}
