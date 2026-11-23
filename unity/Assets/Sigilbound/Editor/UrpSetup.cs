// Configures the Universal Render Pipeline in code, so the project needs no hand-made assets:
// creates Assets/Settings/SigilboundURP.asset (+ its renderer), makes it the default pipeline for
// every quality level, and adds the shaders the game creates at runtime (recoloured hero
// materials, glTFast's import shaders, unlit effects) to "Always Included Shaders" so builds
// don't strip them. Runtime quality tiers adjust this asset (see Client/Quality.cs).
using System.IO;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
#if SB_URP
using UnityEngine.Rendering.Universal;
#endif

namespace Sigilbound.EditorTools
{
    public static class UrpSetup
    {
        const string Dir = "Assets/Settings";
        const string AssetPath = Dir + "/SigilboundURP.asset";
        const string RendererPath = Dir + "/SigilboundURP_Renderer.asset";

        // Small built-in shaders the game creates materials from at runtime. URP Lit is NOT listed
        // (all its variants would take ages to compile); the template materials below keep the
        // variants we use, and glTFast is given our own material generator (no glTF shaders needed).
        static readonly string[] RuntimeShaders = { "Sprites/Default", "Legacy Shaders/Particles/Additive" };
        const string MaterialsDir = "Assets/Resources/SigilMaterials";

        public static void Apply()
        {
#if SB_URP
            var asset = AssetDatabase.LoadAssetAtPath<UniversalRenderPipelineAsset>(AssetPath);
            if (asset == null)
            {
                Directory.CreateDirectory(Dir);
                var data = ScriptableObject.CreateInstance<UniversalRendererData>();
                data.postProcessData = AssetDatabase.LoadAssetAtPath<PostProcessData>(UniversalRenderPipelineAsset.packagePath + "/Runtime/Data/PostProcessData.asset");
                AssetDatabase.CreateAsset(data, RendererPath);
                asset = UniversalRenderPipelineAsset.Create(data);
                AssetDatabase.CreateAsset(asset, AssetPath);
            }
            // Mobile defaults ("High" tier); Quality.cs scales these per tier at runtime.
            asset.renderScale = 1f;
            asset.msaaSampleCount = 2;
            asset.supportsHDR = true;
            asset.shadowDistance = 22f;
            asset.shadowCascadeCount = 1;
            asset.mainLightShadowmapResolution = 2048;
            asset.supportsCameraDepthTexture = false;
            asset.supportsCameraOpaqueTexture = false;
            EditorUtility.SetDirty(asset);
            GraphicsSettings.defaultRenderPipeline = asset;
            int current = QualitySettings.GetQualityLevel();
            for (int i = 0; i < QualitySettings.names.Length; i++)
            {
                QualitySettings.SetQualityLevel(i, false);
                QualitySettings.renderPipeline = null; // use the default pipeline above on every level
            }
            QualitySettings.SetQualityLevel(current, false);
#else
            Debug.LogWarning("Sigilbound: URP package not installed; the game will render with the built-in pipeline.");
#endif
            AddAlwaysIncludedShaders();
            CreateMaterialTemplates();
            AssetDatabase.SaveAssets();
        }

        // Template materials loaded at runtime by Client/Materials.cs (Resources keeps them, and
        // their shader variants, in the build): plain lit, and lit with emission for glows.
        static void CreateMaterialTemplates()
        {
            var lit = Shader.Find("Universal Render Pipeline/Lit");
            if (lit == null) return;
            Directory.CreateDirectory(MaterialsDir);
            if (AssetDatabase.LoadAssetAtPath<Material>(MaterialsDir + "/HeroLit.mat") == null)
                AssetDatabase.CreateAsset(new Material(lit) { name = "HeroLit" }, MaterialsDir + "/HeroLit.mat");
            // The character shader (Client/Shaders/SigilCharacter.shader): referenced by a Resources
            // material so it ships in the build; Client/CharacterLook.cs clones it.
            var character = Shader.Find("Sigilbound/Character");
            if (character != null && AssetDatabase.LoadAssetAtPath<Material>(MaterialsDir + "/Character.mat") == null)
                AssetDatabase.CreateAsset(new Material(character) { name = "Character" }, MaterialsDir + "/Character.mat");
            if (AssetDatabase.LoadAssetAtPath<Material>(MaterialsDir + "/HeroGlow.mat") == null)
            {
                var glow = new Material(lit) { name = "HeroGlow" };
                glow.EnableKeyword("_EMISSION");
                glow.SetColor("_EmissionColor", Color.white);
                glow.globalIlluminationFlags = MaterialGlobalIlluminationFlags.RealtimeEmissive;
                AssetDatabase.CreateAsset(glow, MaterialsDir + "/HeroGlow.mat");
            }
        }

        static void AddAlwaysIncludedShaders()
        {
            var so = new SerializedObject(GraphicsSettings.GetGraphicsSettings());
            var list = so.FindProperty("m_AlwaysIncludedShaders");
            if (list == null) { Debug.LogWarning("Sigilbound: couldn't find Always Included Shaders."); return; }
            foreach (var name in RuntimeShaders)
            {
                var shader = Shader.Find(name);
                if (shader == null) continue;
                bool present = false;
                for (int i = 0; i < list.arraySize; i++) if (list.GetArrayElementAtIndex(i).objectReferenceValue == shader) { present = true; break; }
                if (present) continue;
                list.InsertArrayElementAtIndex(list.arraySize);
                list.GetArrayElementAtIndex(list.arraySize - 1).objectReferenceValue = shader;
            }
            so.ApplyModifiedProperties();
        }
    }
}
