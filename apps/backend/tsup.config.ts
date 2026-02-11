import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  clean: true,
  sourcemap: true,
  dts: false,
  external: ["pg", "drizzle-orm", "dotenv"],
  noExternal: [/@shared\/types/],
  splitting: false,
  treeshake: false,
  shims: true,
  target: "node20",
});
