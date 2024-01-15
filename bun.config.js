await Bun.build({
  entrypoints: [
    "./index.ts",
    "./tailwind.config.ts",
    "./theme/styles/globals.css",
  ],
  outdir: "./dist",
  minify: true,
  splitting: true,
});
