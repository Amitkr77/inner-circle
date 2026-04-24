import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== "true",
    proxy: {
      "/zoho-webhook": {
        target: "https://flow.zoho.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zoho-webhook/, ""),
      },
    },
  },
});
