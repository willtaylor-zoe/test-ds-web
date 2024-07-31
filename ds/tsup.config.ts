import { defineConfig } from "tsup";

export default defineConfig((options: any) => ({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
