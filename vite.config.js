import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  define: {
    global: "window",  // Fix for "global is not defined"
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
});
