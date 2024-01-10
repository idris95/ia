import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  // splitting: true,
  // treeshake: true,
  bundle: true,
  external: ["react", "react-dom"],
  ...options,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
}));
