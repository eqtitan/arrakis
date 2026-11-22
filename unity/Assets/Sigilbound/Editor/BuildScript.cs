// Command-line builds (used by CI). Example:
//   Unity -batchmode -quit -projectPath unity -executeMethod Sigilbound.EditorTools.BuildScript.Android
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;

namespace Sigilbound.EditorTools
{
    public static class BuildScript
    {
        public static void Android() => Build(BuildTarget.Android, "Builds/Android/Sigilbound.apk");
        public static void iOS() => Build(BuildTarget.iOS, "Builds/iOS");

        static void Build(BuildTarget target, string path)
        {
            ProjectSetup.Apply();
            var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
            {
                scenes = new[] { "Assets/Scenes/Main.unity" }, locationPathName = path, target = target, options = BuildOptions.None,
            });
            Debug.Log($"Build {report.summary.result}: {report.summary.totalSize / (1024 * 1024)} MB at {path}");
            if (report.summary.result != BuildResult.Succeeded) EditorApplication.Exit(1);
        }
    }
}
