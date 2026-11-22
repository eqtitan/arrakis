// Compile-check stubs for the UnityEditor API used by Assets/Sigilbound/Editor.
// Signatures copied from Unity's C# reference source, branch 6000.0
// (github.com/Unity-Technologies/UnityCsReference: Editor/Mono/BuildPipeline.bindings.cs,
// PlayerSettings.bindings.cs, PlayerSettingsAndroid.bindings.cs, EditorUserBuildSettings.bindings.cs,
// BuildTarget.cs, SerializedObject.bindings.cs). Only what our editor scripts call is declared.
// Bodies throw: this code is compiled, never run.
#pragma warning disable CS0067
using System;
using UnityEngine;

namespace UnityEditor
{
    public enum BuildTarget { iOS = 9, Android = 13, StandaloneLinux64 = 24 }
    public enum BuildTargetGroup { Unknown = 0, Standalone = 1, iOS = 4, Android = 7 }
    [Flags] public enum BuildOptions { None = 0, Development = 1, CompressWithLz4 = 1 << 19, CompressWithLz4HC = 1 << 20, StrictMode = 1 << 21, DetailedBuildReport = 1 << 28 }
    public enum ScriptingImplementation { Mono2x = 0, IL2CPP = 1 }
    public enum Il2CppCompilerConfiguration { Debug = 0, Release = 1, Master = 2 }
    public enum ManagedStrippingLevel { Disabled = 0, Low = 1, Medium = 2, High = 3, Minimal = 4 }
    public enum UIOrientation { Portrait = 0, PortraitUpsideDown = 1, LandscapeRight = 2, LandscapeLeft = 3, AutoRotation = 4 }
    [Flags] public enum AndroidArchitecture : uint { None = 0, ARMv7 = 1 << 0, ARM64 = 1 << 1, X86_64 = 1 << 3 }
    public enum AndroidSdkVersions { AndroidApiLevelAuto = 0, AndroidApiLevel23 = 23, AndroidApiLevel24 = 24, AndroidApiLevel25 = 25, AndroidApiLevel26 = 26 }

    public struct BuildPlayerOptions
    {
        public string[] scenes { get; set; }
        public string locationPathName { get; set; }
        public string assetBundleManifestPath { get; set; }
        public BuildTargetGroup targetGroup { get; set; }
        public BuildTarget target { get; set; }
        public int subtarget { get; set; }
        public BuildOptions options { get; set; }
        public string[] extraScriptingDefines { get; set; }
    }

    public static class BuildPipeline
    {
        public static Build.Reporting.BuildReport BuildPlayer(BuildPlayerOptions buildPlayerOptions) => throw new NotImplementedException();
    }

    public static class EditorApplication
    {
        public delegate void CallbackFunction();
        public static CallbackFunction delayCall;
        public static bool isPlayingOrWillChangePlaymode => throw new NotImplementedException();
        public static void Exit(int returnValue) => throw new NotImplementedException();
    }

    public static class EditorUserBuildSettings
    {
        public static bool buildAppBundle { get; set; }
        public static bool exportAsGoogleAndroidProject { get; set; }
        public static bool development { get; set; }
        public static BuildTarget activeBuildTarget => throw new NotImplementedException();
        public static bool SwitchActiveBuildTarget(BuildTargetGroup targetGroup, BuildTarget target) => throw new NotImplementedException();
    }

    public sealed class PlayerSettings : UnityEngine.Object
    {
        public static string companyName { get; set; }
        public static string productName { get; set; }
        public static string bundleVersion { get; set; }
        public static ColorSpace colorSpace { get; set; }
        public static UIOrientation defaultInterfaceOrientation { get; set; }
        public static bool allowedAutorotateToPortrait { get; set; }
        public static bool allowedAutorotateToPortraitUpsideDown { get; set; }
        public static bool allowedAutorotateToLandscapeLeft { get; set; }
        public static bool allowedAutorotateToLandscapeRight { get; set; }
        public static bool stripEngineCode { get; set; }
        public static bool runInBackground { get; set; }
        public static void SetApplicationIdentifier(Build.NamedBuildTarget buildTarget, string identifier) => throw new NotImplementedException();
        public static void SetScriptingBackend(Build.NamedBuildTarget buildTarget, ScriptingImplementation backend) => throw new NotImplementedException();
        public static void SetIl2CppCompilerConfiguration(Build.NamedBuildTarget buildTarget, Il2CppCompilerConfiguration configuration) => throw new NotImplementedException();
        public static void SetManagedStrippingLevel(Build.NamedBuildTarget buildTarget, ManagedStrippingLevel level) => throw new NotImplementedException();
        public static void SetUseDefaultGraphicsAPIs(BuildTarget platform, bool automatic) => throw new NotImplementedException();
        public static void SetGraphicsAPIs(BuildTarget platform, UnityEngine.Rendering.GraphicsDeviceType[] apis) => throw new NotImplementedException();

        public static class Android
        {
            public static int bundleVersionCode { get; set; }
            public static AndroidSdkVersions minSdkVersion { get; set; }
            public static AndroidSdkVersions targetSdkVersion { get; set; }
            public static AndroidArchitecture targetArchitectures { get; set; }
            public static bool useCustomKeystore { get; set; }
            public static string keystoreName { get; set; }
            public static string keystorePass { get; set; }
            public static string keyaliasName { get; set; }
            public static string keyaliasPass { get; set; }
        }
    }

    public sealed class EditorBuildSettingsScene
    {
        public EditorBuildSettingsScene(string path, bool enabled) { }
        public bool enabled { get; set; }
        public string path { get; set; }
    }
    public sealed class EditorBuildSettings : UnityEngine.Object
    {
        public static EditorBuildSettingsScene[] scenes { get; set; }
    }

    public sealed class AssetDatabase
    {
        public static void CreateAsset(UnityEngine.Object asset, string path) => throw new NotImplementedException();
        public static T LoadAssetAtPath<T>(string assetPath) where T : UnityEngine.Object => throw new NotImplementedException();
        public static void SaveAssets() => throw new NotImplementedException();
        public static void Refresh() => throw new NotImplementedException();
        public static bool IsValidFolder(string path) => throw new NotImplementedException();
        public static string CreateFolder(string parentFolder, string newFolderName) => throw new NotImplementedException();
        public static string[] FindAssets(string filter) => throw new NotImplementedException();
        public static string GUIDToAssetPath(string guid) => throw new NotImplementedException();
    }

    public sealed class EditorUtility
    {
        public static void SetDirty(UnityEngine.Object target) => throw new NotImplementedException();
    }

    public class SerializedObject : IDisposable
    {
        public SerializedObject(UnityEngine.Object obj) { }
        public SerializedProperty FindProperty(string propertyPath) => throw new NotImplementedException();
        public bool ApplyModifiedProperties() => throw new NotImplementedException();
        public void Update() => throw new NotImplementedException();
        public void Dispose() { }
    }
    public class SerializedProperty
    {
        public int arraySize { get; set; }
        public bool isArray => throw new NotImplementedException();
        public UnityEngine.Object objectReferenceValue { get; set; }
        public SerializedProperty GetArrayElementAtIndex(int index) => throw new NotImplementedException();
        public void InsertArrayElementAtIndex(int index) => throw new NotImplementedException();
    }

    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public sealed class MenuItem : Attribute
    {
        public MenuItem(string itemName) { }
        public MenuItem(string itemName, bool isValidateFunction) { }
    }
    [AttributeUsage(AttributeTargets.Class)]
    public sealed class InitializeOnLoadAttribute : Attribute { }
}

namespace UnityEditor.Build
{
    public readonly struct NamedBuildTarget
    {
        public static readonly NamedBuildTarget Unknown = default;
        public static readonly NamedBuildTarget Standalone = default;
        public static readonly NamedBuildTarget Android = default;
        public static readonly NamedBuildTarget iOS = default;
        public string TargetName => throw new NotImplementedException();
    }
}

namespace UnityEditor.Build.Reporting
{
    public enum BuildResult { Unknown = 0, Succeeded = 1, Failed = 2, Cancelled = 3 }
    public struct BuildSummary
    {
        public BuildResult result => throw new NotImplementedException();
        public ulong totalSize => throw new NotImplementedException();
        public int totalErrors => throw new NotImplementedException();
        public TimeSpan totalTime => throw new NotImplementedException();
        public string outputPath => throw new NotImplementedException();
    }
    public sealed class BuildReport : UnityEngine.Object
    {
        public BuildSummary summary => throw new NotImplementedException();
    }
}

namespace UnityEditor.SceneManagement
{
    public enum NewSceneSetup { EmptyScene = 0, DefaultGameObjects = 1 }
    public enum NewSceneMode { Single = 0, Additive = 1 }
    public sealed class EditorSceneManager : UnityEngine.SceneManagement.SceneManager
    {
        public static UnityEngine.SceneManagement.Scene NewScene(NewSceneSetup setup, NewSceneMode mode) => throw new NotImplementedException();
        public static bool SaveScene(UnityEngine.SceneManagement.Scene scene, string dstScenePath) => throw new NotImplementedException();
    }
}
