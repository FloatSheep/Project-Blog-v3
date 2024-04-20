<script setup>
import { useData } from "vitepress";

const { site } = useData();
</script>

<template>
  <div id="AppBar">
    <mdui-top-app-bar scroll-behavior="elevate">
      <mdui-top-app-bar-title class="appbar-name"
        ><a href="/">{{ site.title }}</a></mdui-top-app-bar-title
      >
      <div style="flex-grow: 1"></div>
      <mdui-button-icon icon="search"></mdui-button-icon>
    </mdui-top-app-bar>
  </div>
</template>