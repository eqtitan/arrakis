// Project setup, run automatically when the project opens in the editor and again before every
// command-line build: creates the (empty) main scene the game boots from, adds it to the build,
// sets mobile player settings, configures URP (UrpSetup) and checks the hero models are in
// StreamingAssets. Safe to run again: Tools > Sigilbound > Apply Project Settings.
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace Sigilbound.EditorTools
{
    [InitializeOnLoad]
    public static class ProjectSetup
    {
        public const string ScenePath = "Assets/Scenes/Main.unity";
        // A separate app id and name from the Capacitor app (com.sigilbound.game), so both
        // can be installed side by side while the Unity version catches up.
        public const string AppId = "com.sigilbound.unity";
        public const string AppName = "Sigilbound (Unity)";

        static ProjectSetup() { EditorApplication.delayCall += () => { if (!File.Exists(ScenePath)) Apply(); }; }

        [MenuItem("Tools/Sigilbound/Apply Project Settings")]
        public static void Apply()
        {
            if (!File.Exists(ScenePath))
            {
                Directory.CreateDirectory("Assets/Scenes");
                var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
                EditorSceneManager.SaveScene(scene, ScenePath);
            }
            EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(ScenePath, true) };

            PlayerSettings.companyName = "Sigilbound";
            PlayerSettings.productName = AppName;
            PlayerSettings.SetApplicationIdentifier(UnityEditor.Build.NamedBuildTarget.Android, AppId);
            PlayerSettings.SetApplicationIdentifier(UnityEditor.Build.NamedBuildTarget.iOS, AppId);
            PlayerSettings.defaultInterfaceOrientation = UIOrientation.Portrait;
            PlayerSettings.allowedAutorotateToLandscapeLeft = false;
            PlayerSettings.allowedAutorotateToLandscapeRight = false;
            PlayerSettings.colorSpace = ColorSpace.Linear; // URP + true colours, like the web game's colour management
            // Google Play requires 64-bit (ARM64), which needs IL2CPP.
            PlayerSettings.SetScriptingBackend(UnityEditor.Build.NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
            PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24;

            UrpSetup.Apply();
            if (!File.Exists("Assets/StreamingAssets/Models/adventurer.glb"))
                Debug.LogWarning("Sigilbound: hero models missing from Assets/StreamingAssets/Models. Run: cd unity/Tools~/models && npm ci && node prepare-models.mjs (placeholder figures are used until then).");
            AssetDatabase.SaveAssets();
            Debug.Log("Sigilbound: project settings applied. Press Play to start the game.");
        }
    }
}
