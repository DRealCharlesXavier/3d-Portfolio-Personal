import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "localhost", // Explicitly set to localhost
    port: 5173, // Default port, kept for consistency
    hmr: {
      protocol: "ws", // Force WebSocket (default, but explicit)
      host: "localhost",
      port: 5173, // Match server port
    },
  },
});
