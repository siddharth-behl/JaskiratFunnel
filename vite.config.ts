import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(async () => {
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    // 🔥 Removed that root = "/" nonsense
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
  };
});
