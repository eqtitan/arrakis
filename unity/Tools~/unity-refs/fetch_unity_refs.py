#!/usr/bin/env python3
# Fetches Unity's managed assemblies (Editor/Data/Managed: UnityEngine.dll, UnityEngine/*.dll,
# UnityEditor.dll, UnityEditor.CoreModule.dll ...) straight from the game-ci editor image on Docker
# Hub, without Docker or a Unity license: reads the image manifest and streams the layers,
# extracting only those files, and stops as soon as it has passed the Managed folder.
# Used by the CI job that compiles the scripts against the real Unity 6 API (unity/README.md).
#
# usage: fetch_unity_refs.py <outdir> [image] [tag]
#   default image unityci/editor, tag ubuntu-6000.0.58f1-base-3
import json, os, sys, tarfile, time, urllib.error, urllib.request

out = sys.argv[1]
image = sys.argv[2] if len(sys.argv) > 2 else "unityci/editor"
tag = sys.argv[3] if len(sys.argv) > 3 else "ubuntu-6000.0.58f1-base-3"
PREFIX = "opt/unity/Editor/Data/Managed/"

def get(url, token, accept=None):
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + token, **({"Accept": accept} if accept else {})})
    for attempt in range(6):  # Docker Hub's anonymous pull limit: back off and retry on 429
        try: return urllib.request.urlopen(req, timeout=120)
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == 5: raise
            print(f"rate limited, retrying in {30 * (attempt + 1)} s", flush=True); time.sleep(30 * (attempt + 1))

token = json.load(urllib.request.urlopen(f"https://auth.docker.io/token?service=registry.docker.io&scope=repository:{image}:pull"))["token"]
reg = f"https://registry-1.docker.io/v2/{image}"
idx = json.load(get(f"{reg}/manifests/{tag}", token, "application/vnd.oci.image.index.v1+json, application/vnd.docker.distribution.manifest.list.v2+json, application/vnd.oci.image.manifest.v1+json, application/vnd.docker.distribution.manifest.v2+json"))
if "manifests" in idx:
    digest = next(m["digest"] for m in idx["manifests"] if m.get("platform", {}).get("architecture") == "amd64")
    man = json.load(get(f"{reg}/manifests/{digest}", token, "application/vnd.oci.image.manifest.v1+json, application/vnd.docker.distribution.manifest.v2+json"))
else:
    man = idx

def wanted(name):
    if not name.startswith(PREFIX) or not name.endswith(".dll"): return False
    rest = name[len(PREFIX):]
    return "/" not in rest or (rest.startswith("UnityEngine/") and rest.count("/") == 1)

found = 0
# The editor lives in the biggest layer; try layers largest first.
for layer in sorted(man["layers"], key=lambda l: -l["size"]):
    if layer["size"] < 1 << 20: continue
    print(f"layer {layer['digest'][:19]} ({layer['size'] >> 20} MB)", flush=True)
    with get(f"{reg}/blobs/{layer['digest']}", token) as resp, tarfile.open(fileobj=resp, mode="r|*") as tar:
        inside = False
        for m in tar:
            name = m.name.lstrip("./")
            if name.startswith(PREFIX): inside = True
            elif inside: break  # tar order is depth-first: past Managed/, nothing more to find
            if m.isfile() and wanted(name):
                dest = os.path.join(out, name[len(PREFIX):])
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                with tar.extractfile(m) as src, open(dest, "wb") as f: f.write(src.read())
                found += 1
    if found: break
print(f"{found} assemblies -> {out}")
sys.exit(0 if found and os.path.exists(os.path.join(out, "UnityEditor.dll")) else 1)
