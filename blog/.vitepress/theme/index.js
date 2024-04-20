// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@shikijs/vitepress-twoslash/style.css";

import Layout from "./Layout.vue";
import PostList from "./components/PostList.vue";
import Article from "./components/Article.vue";
import Tags from "./components/Tags.vue";
import Categories from "./components/Categories.vue";
import "./style.css";
import "mdui/mdui.css";
import "mdui";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router }) {
    app.component("PostList", PostList);
    app.use(TwoslashFloatingVue);
    app.component("Article", Article);
    app.component("Tags", Tags);
    app.component("Categories", Categories);
  },
};
