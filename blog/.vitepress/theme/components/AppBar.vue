<script setup>
import { useData } from "vitepress";

const { site } = useData();
</script>

<template>
  <div id="AppBar">
    <mdui-top-app-bar scroll-behavior="elevate">
      <mdui-top-app-bar-title class="appbar-name">
        <a href="/">{{ site.title }}</a>
        <span class="appbar-text">
            <mdui-button id="link-btn" class="link-btn" variant="text" slot="trigger"
              >文库</mdui-button
            >
          <div class="link-child">
            <a href="/article/"><mdui-button variant="text">文章列表</mdui-button></a>
            <a href="/tags/"><mdui-button variant="text">全部标签</mdui-button></a>
            <a href="/categories/"><mdui-button variant="text">全部分类</mdui-button></a>
          </div>
        </span>
      </mdui-top-app-bar-title>
      <!-- <div style="flex-grow: 1"></div> -->
      <mdui-button-icon icon="search"></mdui-button-icon>
    </mdui-top-app-bar>
  </div>
</template>
