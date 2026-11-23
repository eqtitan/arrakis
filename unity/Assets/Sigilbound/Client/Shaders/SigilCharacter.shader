// Sigilbound character shading for URP 17 (Unity 6), a small hand-written port of the gist of
// game3d/shading.mjs and materials.mjs (no Shader Graph, so it can be authored without an editor):
//   - procedural detail textures (metal, hammered, leather, cloth, wood, stone, scale) generated in
//     code (Client/Textures.cs), mapped triplanar from each vertex's REST position in model metres
//     (TEXCOORD1, written by the client), because the models have no UVs and the pattern must not
//     swim when the skeleton moves;
//   - wrap diffuse with a painterly three-band ramp, ambient from spherical harmonics;
//   - Blinn-Phong specular scaled by smoothness, tinted by albedo for metals;
//   - cloth sheen at grazing angles;
//   - a fresnel rim in the hero's element colour, favouring up-facing surfaces;
//   - optional glowing crack seams (crackMaterial in three3d.mjs: object-space noise whose 0.5
//     contour is drawn at constant width, pulsing), used by the Titan and forge heroes.
// The web tags each merged vertex with a shading role; here every role (skin, cloth, metal...) is
// its own material (one submesh each), so the role lives in the material's properties instead.
// Passes: UniversalForward, ShadowCaster, DepthOnly. SRP-batcher compatible (one UnityPerMaterial).
// If this shader fails on a device, Client/Materials.cs falls back to URP Lit automatically.
Shader "Sigilbound/Character"
{
    Properties
    {
        _BaseColor ("Base colour", Color) = (1, 1, 1, 1)
        _DetailTex ("Detail (R albedo, G height)", 2D) = "gray" {}
        _DetailScale ("Detail tiles per metre", Float) = 3
        _DetailStrength ("Detail strength", Range(0, 1)) = 0.5
        _Metallic ("Metallic", Range(0, 1)) = 0
        _Smoothness ("Smoothness", Range(0, 1)) = 0.3
        _Wrap ("Wrap lighting", Range(0, 1)) = 0.35
        _Ramp ("Painterly ramp", Range(0, 1)) = 0.35
        [HDR] _RimColor ("Rim colour (element)", Color) = (0.62, 0.7, 1, 1)
        _Rim ("Rim strength", Range(0, 2)) = 0.7
        _Sheen ("Cloth sheen", Range(0, 1)) = 0
        [HDR] _EmissionColor ("Emission", Color) = (0, 0, 0, 1)
        [HDR] _CrackColor ("Crack seam colour", Color) = (0, 0, 0, 1)
        _CrackScale ("Crack scale", Float) = 3.2
        _CrackPulse ("Crack pulse (0 = off)", Float) = 0
    }

    SubShader
    {
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" "Queue" = "Geometry" }

        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

        CBUFFER_START(UnityPerMaterial)
            float4 _BaseColor;
            float4 _DetailTex_ST;
            float _DetailScale;
            float _DetailStrength;
            float _Metallic;
            float _Smoothness;
            float _Wrap;
            float _Ramp;
            float4 _RimColor;
            float _Rim;
            float _Sheen;
            float4 _EmissionColor;
            float4 _CrackColor;
            float _CrackScale;
            float _CrackPulse;
        CBUFFER_END
        ENDHLSL

        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }

            HLSLPROGRAM
            #pragma vertex Vert
            #pragma fragment Frag
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE
            #pragma multi_compile_fragment _ _SHADOWS_SOFT
            #pragma multi_compile_fog

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            TEXTURE2D(_DetailTex); SAMPLER(sampler_DetailTex);

            struct Attributes
            {
                float4 positionOS : POSITION;
                float3 normalOS : NORMAL;
                float3 restOS : TEXCOORD1;   // rest-pose position in model metres (0 = not provided)
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                float3 normalWS : TEXCOORD1;
                float3 restOS : TEXCOORD2;
                float3 restN : TEXCOORD3;
                float fogFactor : TEXCOORD4;
            };

            Varyings Vert(Attributes input)
            {
                Varyings o;
                o.positionWS = TransformObjectToWorld(input.positionOS.xyz);
                o.positionCS = TransformWorldToHClip(o.positionWS);
                o.normalWS = TransformObjectToWorldNormal(input.normalOS);
                // Without rest positions, fall back to the (skinned) object position.
                bool hasRest = dot(input.restOS, input.restOS) > 1e-8;
                o.restOS = hasRest ? input.restOS : input.positionOS.xyz;
                o.restN = input.normalOS;
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                return o;
            }

            // Triplanar sample of the detail texture (R = albedo variation, G = height).
            float2 Detail(float3 p, float3 n)
            {
                float3 w = pow(abs(n), 4.0);
                w /= max(w.x + w.y + w.z, 1e-4);
                float s = _DetailScale;
                float2 x = SAMPLE_TEXTURE2D(_DetailTex, sampler_DetailTex, p.zy * s).rg;
                float2 y = SAMPLE_TEXTURE2D(_DetailTex, sampler_DetailTex, p.xz * s).rg;
                float2 z = SAMPLE_TEXTURE2D(_DetailTex, sampler_DetailTex, p.xy * s).rg;
                return x * w.x + y * w.y + z * w.z;
            }

            // Painterly ramp: three soft bands (shadow / mid / light), as shading.mjs sbRampF.
            float Ramp(float d)
            {
                return 0.05 + 0.45 * smoothstep(0.03, 0.17, d) + 0.42 * smoothstep(0.42, 0.6, d) + 0.08 * smoothstep(0.86, 0.98, d);
            }

            // crackMaterial noise (value noise, two octaves).
            float CHash(float3 p) { p = frac(p * 0.3183099 + 0.1); p *= 17.0; return frac(p.x * p.y * p.z * (p.x + p.y + p.z)); }
            float CNoise(float3 x)
            {
                float3 i = floor(x), f = frac(x); f = f * f * (3.0 - 2.0 * f);
                return lerp(lerp(lerp(CHash(i), CHash(i + float3(1, 0, 0)), f.x), lerp(CHash(i + float3(0, 1, 0)), CHash(i + float3(1, 1, 0)), f.x), f.y),
                            lerp(lerp(CHash(i + float3(0, 0, 1)), CHash(i + float3(1, 0, 1)), f.x), lerp(CHash(i + float3(0, 1, 1)), CHash(i + float3(1, 1, 1)), f.x), f.y), f.z);
            }
            float CN2(float3 p) { return CNoise(p) * 0.75 + CNoise(p * 2.7 + 3.1) * 0.25; }

            half4 Frag(Varyings i) : SV_Target
            {
                float3 n = normalize(i.normalWS);
                float3 v = GetWorldSpaceNormalizeViewDir(i.positionWS);

                float2 det = Detail(i.restOS, normalize(i.restN));
                // R is materials.mjs's albedo band (about 0.8-0.95), G the normalized height: tint the
                // colour by the grain and darken crevices a little (cheap stand-in for the bump map).
                float3 albedo = _BaseColor.rgb * lerp(1.0, det.r * 1.15, _DetailStrength) * lerp(1.0, 0.8 + det.g * 0.4, _DetailStrength);

                // Seams (Titan stone, forge heroes): darken the stone along the seam and glow.
                float3 emission = _EmissionColor.rgb;
                if (_CrackPulse > 0)
                {
                    float3 cp = i.restOS * _CrackScale;
                    const float e = 0.04;
                    float cn = CN2(cp);
                    float3 g = float3(CN2(cp + float3(e, 0, 0)) - cn, CN2(cp + float3(0, e, 0)) - cn, CN2(cp + float3(0, 0, e)) - cn);
                    float d = abs(cn - 0.5) / max(length(g) / e, 0.05);
                    float seam = 1.0 - smoothstep(0.012, 0.03, d); // ("line" is reserved in HLSL)
                    float heat = (1.0 - smoothstep(0.0, 0.09, d)) * 0.35;
                    emission += _CrackColor.rgb * (seam + heat) * _CrackPulse;
                    albedo *= 1.0 - seam * 0.9;
                }

                Light light = GetMainLight(TransformWorldToShadowCoord(i.positionWS));
                float ndl = dot(n, light.direction);
                // Wrap diffuse, then blend toward the painterly ramp.
                float wrapped = saturate((ndl + _Wrap) / (1.0 + _Wrap));
                float diffuse = lerp(wrapped, Ramp(wrapped), _Ramp);
                float atten = light.shadowAttenuation * light.distanceAttenuation;
                float3 diffuseCol = albedo * (1.0 - _Metallic * 0.85);
                float3 col = diffuseCol * light.color * diffuse * atten;
                col += diffuseCol * SampleSH(n);

                // Specular (Blinn-Phong; metals tint it by their albedo).
                float3 h = normalize(light.direction + v);
                float specPow = exp2(2.0 + _Smoothness * 9.0);
                float spec = pow(saturate(dot(n, h)), specPow) * _Smoothness * (specPow + 8.0) / 64.0;
                float3 specCol = lerp(float3(0.04, 0.04, 0.04), albedo, _Metallic);
                col += specCol * light.color * spec * atten * saturate(ndl * 4.0);
                // Metals pick up a soft sky/ground reflection so they don't go flat in shadow.
                col += albedo * _Metallic * lerp(float3(0.29, 0.23, 0.19), float3(0.81, 0.88, 1.0), n.y * 0.5 + 0.5) * 0.25;

                float nv = saturate(dot(n, v));
                // Cloth sheen at grazing view.
                col += albedo * _Sheen * pow(1.0 - nv, 3.0) * 0.6 * light.color;
                // Fresnel rim in the element colour, favouring up-facing surfaces (shading.mjs).
                float rim = smoothstep(0.5, 0.95, 1.0 - nv) * (0.45 + 0.55 * saturate(n.y + 0.4));
                col += _RimColor.rgb * _Rim * rim;

                col += emission;
                col = MixFog(col, i.fogFactor);
                return half4(col, 1.0);
            }
            ENDHLSL
        }

        Pass
        {
            Name "ShadowCaster"
            Tags { "LightMode" = "ShadowCaster" }
            ZWrite On ZTest LEqual ColorMask 0

            HLSLPROGRAM
            #pragma vertex ShadowVert
            #pragma fragment ShadowFrag
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            float3 _LightDirection; // set by URP for the directional light being rendered

            struct ShadowAttributes { float4 positionOS : POSITION; float3 normalOS : NORMAL; };
            struct ShadowVaryings { float4 positionCS : SV_POSITION; };

            ShadowVaryings ShadowVert(ShadowAttributes input)
            {
                ShadowVaryings o;
                float3 positionWS = TransformObjectToWorld(input.positionOS.xyz);
                float3 normalWS = TransformObjectToWorldNormal(input.normalOS);
                float4 positionCS = TransformWorldToHClip(ApplyShadowBias(positionWS, normalWS, _LightDirection));
            #if UNITY_REVERSED_Z
                positionCS.z = min(positionCS.z, UNITY_NEAR_CLIP_VALUE);
            #else
                positionCS.z = max(positionCS.z, UNITY_NEAR_CLIP_VALUE);
            #endif
                o.positionCS = positionCS;
                return o;
            }
            half4 ShadowFrag(ShadowVaryings i) : SV_Target { return 0; }
            ENDHLSL
        }

        Pass
        {
            Name "DepthOnly"
            Tags { "LightMode" = "DepthOnly" }
            ZWrite On ColorMask R

            HLSLPROGRAM
            #pragma vertex DepthVert
            #pragma fragment DepthFrag

            struct DepthAttributes { float4 positionOS : POSITION; };
            struct DepthVaryings { float4 positionCS : SV_POSITION; };
            DepthVaryings DepthVert(DepthAttributes input) { DepthVaryings o; o.positionCS = TransformObjectToHClip(input.positionOS.xyz); return o; }
            half4 DepthFrag(DepthVaryings i) : SV_Target { return i.positionCS.z; }
            ENDHLSL
        }
    }
    FallBack "Universal Render Pipeline/Lit"
}
