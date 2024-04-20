import { defineConfig } from "vitepress";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FloatSheep's Blog",
  description: "Fish, Fish, Fish🐟",
  markdown: {
    lineNumbers: false,
    image: {
      lazyLoading: true,
    },
    codeTransformers: [transformerTwoslash()],
    theme: "vitesse-light",
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("mdui-"),
      },
    },
  },
});
