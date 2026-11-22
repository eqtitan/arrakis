// Command-line builds (used by CI through game-ci). Example:
//   Unity -batchmode -quit -projectPath unity -executeMethod Sigilbound.EditorTools.BuildScript.Android
// Environment (all optional): SB_VERSION (e.g. 0.19.2), SB_BUILD (versionCode, the CI run number),
// SB_OUTPUT (APK path, default Builds/Android/Sigilbound-Unity.apk).
using System;
using System.IO;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace Sigilbound.EditorTools
{
    public static class BuildScript
    {
        // The same permanent test key as the Capacitor app (mobile/android/app), so every Unity
        // test build installs over the previous one and keeps progress. Not a release key.
        const string TestKeystore = "../mobile/android/app/sigilbound-test.keystore";
        const string TestKeyPass = "sigilbound-test", TestKeyAlias = "sigilbound-test";

        public static void Android()
        {
            ProjectSetup.Apply();
            EditorUserBuildSettings.buildAppBundle = false; // an APK that installs straight onto a phone
            PlayerSettings.bundleVersion = Version();
            int code = BuildNumber();
            if (code > 0) PlayerSettings.Android.bundleVersionCode = code;
            var keystore = Path.GetFullPath(TestKeystore);
            if (File.Exists(keystore))
            {
                PlayerSettings.Android.useCustomKeystore = true;
                PlayerSettings.Android.keystoreName = keystore;
                PlayerSettings.Android.keystorePass = TestKeyPass;
                PlayerSettings.Android.keyaliasName = TestKeyAlias;
                PlayerSettings.Android.keyaliasPass = TestKeyPass;
            }
            else Debug.LogWarning($"Sigilbound: test keystore not found at {keystore}; using Unity's debug key (updates won't install over each other).");
            var output = Environment.GetEnvironmentVariable("SB_OUTPUT");
            Build(BuildTarget.Android, string.IsNullOrEmpty(output) ? "Builds/Android/Sigilbound-Unity.apk" : output);
        }

        public static void iOS() { ProjectSetup.Apply(); PlayerSettings.bundleVersion = Version(); Build(BuildTarget.iOS, "Builds/iOS"); }

        // Android versionCode (must always go up so updates install): SB_BUILD, else game-ci's
        // -androidVersionCode argument, else unity/build-number.txt written by CI.
        static int BuildNumber()
        {
            if (int.TryParse(Environment.GetEnvironmentVariable("SB_BUILD"), out var n) && n > 0) return n;
            var args = Environment.GetCommandLineArgs();
            for (int i = 0; i + 1 < args.Length; i++)
                if (args[i] == "-androidVersionCode" && int.TryParse(args[i + 1], out n) && n > 0) return n;
            try { if (int.TryParse(File.ReadAllText("build-number.txt").Trim(), out n) && n > 0) return n; } catch (IOException) { }
            return 0;
        }

        // The web game's version (public/game/version.js) unless SB_VERSION overrides it.
        static string Version()
        {
            var v = Environment.GetEnvironmentVariable("SB_VERSION");
            if (!string.IsNullOrEmpty(v)) return v;
            try
            {
                var m = Regex.Match(File.ReadAllText("../public/game/version.js"), "version:\\s*\"([^\"]+)\"");
                if (m.Success) return m.Groups[1].Value;
            }
            catch (IOException) { }
            return "0.0.0";
        }

        static void Build(BuildTarget target, string path)
        {
            var dir = Path.GetDirectoryName(path);
            if (!string.IsNullOrEmpty(dir)) Directory.CreateDirectory(dir);
            var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
            {
                scenes = new[] { ProjectSetup.ScenePath }, locationPathName = path, target = target, options = BuildOptions.None,
            });
            Debug.Log($"Build {report.summary.result}: {report.summary.totalSize / (1024 * 1024)} MB at {path}");
            if (report.summary.result != BuildResult.Succeeded) EditorApplication.Exit(1);
        }
    }
}
