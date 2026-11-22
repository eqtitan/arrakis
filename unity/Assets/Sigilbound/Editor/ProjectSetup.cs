// One-time project setup, run automatically when the project opens in the editor:
// creates the (empty) main scene the game boots from, adds it to the build, and sets
// mobile player settings. Safe to run again: Tools > Sigilbound > Apply Project Settings.
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace Sigilbound.EditorTools
{
    [InitializeOnLoad]
    public static class ProjectSetup
    {
        const string ScenePath = "Assets/Scenes/Main.unity";

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
            PlayerSettings.productName = "Sigilbound";
            PlayerSettings.SetApplicationIdentifier(UnityEditor.Build.NamedBuildTarget.Android, "com.sigilbound.game");
            PlayerSettings.SetApplicationIdentifier(UnityEditor.Build.NamedBuildTarget.iOS, "com.sigilbound.game");
            PlayerSettings.bundleVersion = "0.5.0";
            PlayerSettings.defaultInterfaceOrientation = UIOrientation.Portrait;
            PlayerSettings.allowedAutorotateToLandscapeLeft = false;
            PlayerSettings.allowedAutorotateToLandscapeRight = false;
            // Google Play requires 64-bit (ARM64), which needs IL2CPP.
            PlayerSettings.SetScriptingBackend(UnityEditor.Build.NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
            PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24;
            AssetDatabase.SaveAssets();
            Debug.Log("Sigilbound: project settings applied. Press Play to start the game.");
        }
    }
}
