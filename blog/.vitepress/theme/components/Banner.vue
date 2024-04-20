<script setup>
import { useData } from "vitepress";

const { site } = useData();
</script>
<template>
  <div id="banner">
    <h1 class="title">{{ site.title }}</h1>
    <div class="subtitle">
      <span class="text">{{ site.description }}</span>
    </div>
  </div>
</template>
