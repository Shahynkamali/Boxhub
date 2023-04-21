import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      shared: `${path.resolve(__dirname, "./src/app/shared/")}`,
      modules: `${path.resolve(__dirname, "./src/app/modules/")}`,
      components: `${path.resolve(__dirname, "./src/app/components/index.ts")}`,
      mocks: `${path.resolve(__dirname, "./src/api-mocks/")}`,
      constant: `${path.resolve(
        __dirname,
        "./src/app/shared/constant/index.ts"
      )}`,
      context: `${path.resolve(
        __dirname,
        "./src/app/shared/context/index.ts"
      )}`,
      hooks: `${path.resolve(__dirname, "./src/app/shared/hooks/index.ts")}`,
      utilities: `${path.resolve(
        __dirname,
        "./src/app/shared/utilities/index.ts"
      )}`,
    },
  },
});
