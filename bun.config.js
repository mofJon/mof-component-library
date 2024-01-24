const { exec } = require("child_process");

await Bun.build({
  entrypoints: [
    "./index.ts",
    "./tailwind.config.ts",
    "./utils",
    "./theme/animations",
  ],
  outdir: "./dist",
  minify: true,
  splitting: true,
  external: ["react", "react-dom", "next"],
});

exec("bun build-css");
