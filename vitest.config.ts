import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import path from "path";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest-setup.ts",
      clearMocks: true,
      reporters: ["default", "junit"],
      testTimeout: 10000,
      exclude: [
        ...configDefaults.exclude,
        "src/bootstrap.ts",
        "src/main.tsx",
        "**/api-mocks/**",
      ],
      coverage: {
        provider: "c8",
        reporter: ["json", "lcov", "text", "cobertura"],
        reportsDirectory: "coverage",
        exclude: ["src/bootstrap.ts", "src/main.tsx", "**/api-mocks/**"],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        assets: `${path.resolve(__dirname, "./src/assets/")}`,
        shared: `${path.resolve(__dirname, "./src/app/shared/")}`,
        modules: `${path.resolve(__dirname, "./src/app/modules/")}`,
        components: `${path.resolve(
          __dirname,
          "./src/app/components/index.ts"
        )}`,
        screens: `${path.resolve(__dirname, "./src/app/screens/")}`,
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
  })
);
