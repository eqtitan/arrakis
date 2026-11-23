// Compile-check stubs for URP/Core volume post-processing (com.unity.render-pipelines.core and
// .universal 17.0.4). Signatures copied from github.com/Unity-Technologies/Graphics, branch
// 6000.0/staging: Runtime/Volume/Volume.cs, VolumeProfile.cs, VolumeComponent.cs,
// VolumeParameter.cs; Universal Runtime/Overrides/Bloom.cs, ColorAdjustments.cs, WhiteBalance.cs,
// SplitToning.cs, Tonemapping.cs.
using System;
using UnityEngine;

namespace UnityEngine.Rendering
{
    public abstract class VolumeParameter { public bool overrideState; }
    public class VolumeParameter<T> : VolumeParameter
    {
        public T value;
        public void Override(T x) { overrideState = true; value = x; }
    }
    public class BoolParameter : VolumeParameter<bool> { }
    public class FloatParameter : VolumeParameter<float> { }
    public class MinFloatParameter : FloatParameter { }
    public class ClampedFloatParameter : FloatParameter { }
    public class ColorParameter : VolumeParameter<Color> { }

    public partial class VolumeComponent : ScriptableObject { public bool active = true; }

    public sealed class VolumeProfile : ScriptableObject
    {
        public T Add<T>(bool overrides = false) where T : VolumeComponent => throw new NotImplementedException();
    }

    public class Volume : MonoBehaviour
    {
        public bool isGlobal { get; set; }
        public float priority = 0f;
        public float weight = 1f;
        public VolumeProfile sharedProfile = null;
        public VolumeProfile profile { get; set; }
    }
}

namespace UnityEngine.Rendering.Universal
{
    public sealed partial class Bloom : VolumeComponent
    {
        public MinFloatParameter threshold; public MinFloatParameter intensity; public ClampedFloatParameter scatter; public ColorParameter tint; public BoolParameter highQualityFiltering;
    }
    public sealed class ColorAdjustments : VolumeComponent
    {
        public FloatParameter postExposure; public ClampedFloatParameter contrast; public ColorParameter colorFilter; public ClampedFloatParameter hueShift; public ClampedFloatParameter saturation;
    }
    public sealed class WhiteBalance : VolumeComponent { public ClampedFloatParameter temperature; public ClampedFloatParameter tint; }
    public sealed class SplitToning : VolumeComponent { public ColorParameter shadows; public ColorParameter highlights; public ClampedFloatParameter balance; }
    public enum TonemappingMode { None, Neutral, ACES, Custom }
    public sealed class TonemappingModeParameter : VolumeParameter<TonemappingMode> { }
    public sealed class Tonemapping : VolumeComponent { public TonemappingModeParameter mode; }
}
