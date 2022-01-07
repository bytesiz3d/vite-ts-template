import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    host: process.env.NODE_ENV !== "production",
  },
  plugins: [
    vue({
      refTransform: [/src/],
    }),
  ],
});
