import path from "node:path";

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const workspaceRoot = path.resolve(__dirname, "../..");

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },

  server: {
    fs: {
      allow: [workspaceRoot],
    },
  },

  plugins: [tailwindcss(), tanstackStart(), viteReact()],
});
