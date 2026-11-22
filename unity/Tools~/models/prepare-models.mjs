// Copies the web game's CC0 Quaternius hero models (public/game/models) into the Unity
// project's StreamingAssets, decoding their EXT_meshopt_compression so glTFast can load them
// without the optional meshopt package. KHR_mesh_quantization stays (glTFast supports it).
// Also copies the retargeted UAL clips and the credits file. Run before a Unity build
// (CI does this):  cd unity/Tools~/models && npm ci && node prepare-models.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { MeshoptDecoder } from "meshoptimizer";

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(here, "../../../public/game/models");
const out = path.resolve(here, "../../Assets/StreamingAssets/Models");
fs.mkdirSync(out, { recursive: true });

await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "meshopt.decoder": MeshoptDecoder });

for (const f of fs.readdirSync(src).filter((n) => n.endsWith(".glb"))) {
  const doc = await io.read(path.join(src, f));
  for (const ext of doc.getRoot().listExtensionsUsed()) {
    if (ext.extensionName === "EXT_meshopt_compression") ext.dispose(); // write plain buffers
  }
  const bytes = await io.writeBinary(doc);
  fs.writeFileSync(path.join(out, f), bytes);
  const anims = doc.getRoot().listAnimations().length, meshes = doc.getRoot().listMeshes().length;
  console.log(`${f}: ${(fs.statSync(path.join(src, f)).size / 1024).toFixed(0)} KB -> ${(bytes.length / 1024).toFixed(0)} KB, ${meshes} meshes, ${anims} clips`);
}
for (const f of ["anims_ual.json", "CREDITS.md"]) fs.copyFileSync(path.join(src, f), path.join(out, f));
console.log(`Models ready in ${path.relative(process.cwd(), out)}`);
