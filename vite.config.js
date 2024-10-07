import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  //base: process.env.NODE_ENV === "production" ? "/chain-explorer/" : "/",
  server: {
    host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "0.0.0.0",
    port: 5175,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
