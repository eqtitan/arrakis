#!/usr/bin/env python3
# Offline sanity compile of a Unity URP .shader's HLSL passes with DXC against URP 17's ShaderLibrary.
# It catches HLSL errors (typos, missing includes, wrong URP function signatures) without a Unity
# editor or license; it is not Unity's own compiler, so platform-specific issues can still slip by.
# usage: shadercheck.py <shader> <graphics-repo-root> <dxc> [EXTRA_DEFINE ...]
#   graphics-repo-root: a checkout of Unity-Technologies/Graphics (6000.0/staging) (the folder holding Packages/)
#   dxc: DirectXShaderCompiler (github.com/microsoft/DirectXShaderCompiler releases)
import re, subprocess, sys, tempfile
shader, groot, dxc = sys.argv[1:4]
extra = sys.argv[4:]
src = open(shader).read()
inc = re.search(r"HLSLINCLUDE(.*?)ENDHLSL", src, re.S)
inc = inc.group(1) if inc else ""
passes = re.findall(r"HLSLPROGRAM(.*?)ENDHLSL", src, re.S)
defines = extra + ["SHADER_API_D3D11", "UNITY_VERSION=600000", "SHADER_TARGET=45", "UNITY_REVERSED_Z=1", "UNITY_UV_STARTS_AT_TOP=1", "UNITY_NEAR_CLIP_VALUE=(1.0)"]
ok = True
for idx, body in enumerate(passes):
    vert = re.search(r"#pragma\s+vertex\s+(\w+)", body).group(1)
    frag = re.search(r"#pragma\s+fragment\s+(\w+)", body).group(1)
    kw_sets = [[]]
    for m in re.finditer(r"#pragma\s+multi_compile(?:_fragment)?\s+(.*)", body):
        opts = m.group(1).split()
        if opts[0] == "_": kw_sets = [k + ([o] if o != "_" else []) for k in kw_sets for o in opts]
    code = inc + "\n" + body
    code = re.sub(r"#pragma.*", "", code)
    with tempfile.NamedTemporaryFile("w", suffix=".hlsl", delete=False) as f:
        f.write(code); path = f.name
    for kws in kw_sets:
        kws = kws + (["FOG_LINEAR"] if "multi_compile_fog" in body and not kws else [])
        for stage, entry, prof in (("VERTEX", vert, "vs_6_0"), ("FRAGMENT", frag, "ps_6_0")):
            cmd = [dxc, "-T", prof, "-E", entry, "-I", groot, "-HV", "2018", "-D", "SHADER_STAGE_" + stage]
            for d in defines + kws: cmd += ["-D", d]
            r = subprocess.run(cmd + [path], capture_output=True, text=True)
            status = "ok" if r.returncode == 0 else "FAIL"
            if r.returncode != 0: ok = False
            print(f"pass {idx} {entry} {prof} {kws}: {status}")
            if r.returncode != 0: print(r.stderr[-3000:])
sys.exit(0 if ok else 1)
