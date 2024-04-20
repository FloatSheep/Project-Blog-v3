<script setup>
import { ref, onMounted, watch } from 'vue';
import { useData } from 'vitepress';
import { getColorFromImage } from 'mdui/functions/getColorFromImage.js';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';

import AppBar from "./components/AppBar.vue";
import Banner from "./components/Banner.vue";
import PostList from "./components/PostList.vue";
import NotFound from "./components/NotFound.vue";

// 获取页面数据
const { page, frontmatter } = useData();

// 定义一个方法来处理取色和应用主题逻辑
function applyColorSchemeFromImage(imageSrc) {
  if (imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      getColorFromImage(image).then((color) => {
        setColorScheme(color);
      });
    };
  }
}

// 监视 frontmatter 中的 cover 属性
watch(() => frontmatter.value.cover, (newCover) => {
  applyColorSchemeFromImage(newCover);
});

// 组件挂载时尝试立即应用
onMounted(() => {
  applyColorSchemeFromImage(frontmatter.value.cover);
});
</script>

<template>
  <AppBar />
  <div id="main-container">
    <Banner />
    <div v-if="frontmatter.home">
      <div id="home-main"><PostList /></div>
    </div>
    <NotFound v-else-if="page.isNotFound" />
    <div v-else>
      <Content id="main-content" class="mdui-prose" />
    </div>
  </div>
</template>
