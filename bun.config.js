const { exec } = require("child_process");

await Bun.build({
  entrypoints: ["./index.ts", "./tailwind.config.ts", "./theme/animations.ts"],
  outdir: "./dist",
  minify: true,
  splitting: true,
  external: ["react", "react-dom", "next"],
  naming: {
    entry: "./[dir]/[name].[ext]",
  },
});

exec("bun build-css");
