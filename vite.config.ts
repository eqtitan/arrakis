import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  server: {
    port: 5174,
    proxy: {
      // During `vite dev`, proxy /api to `wrangler pages dev`'s functions server.
      // Run `npm run pages:dev` in a second terminal (port 8789).
      "/api": "http://127.0.0.1:8789",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
