import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  jsxInject: `import { h } from 'preact';`,
  plugins: [preact()]
});
