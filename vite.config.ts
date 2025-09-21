import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import("@replit/vite-plugin-cartographer").then((m) => m.cartographer(),),]
],
  
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    process.env.REPL_ID !== undefined? [
 
  server: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
       strict: true,
      deny: ["**/.*"],
    },
  },
});