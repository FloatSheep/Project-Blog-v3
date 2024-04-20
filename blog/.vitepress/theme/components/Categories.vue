<script setup>
import { ref, computed } from 'vue';
import { data as posts } from "../scripts/posts.data";

// 聚合标签并计算每个标签的出现次数
const categoriesWithCount = computed(() => {
  const categoriesMap = new Map();
  posts.forEach(post => {
    post.frontmatter.categories.forEach(categorie => {
      if (categoriesMap.has(categorie)) {
        categoriesMap.set(categorie, categoriesMap.get(categorie) + 1);
      } else {
        categoriesMap.set(categorie, 1);
      }
    });
  });
  return Array.from(categoriesMap, ([categorie, count]) => ({ categorie, count }));
});

// 可以选择按照标签数量对标签进行排序
const sortedcategoriesWithCount = computed(() => {
  return categoriesWithCount.value.slice().sort((a, b) => b.count - a.count);
});
</script>

<template>
  <div id="categories-cloud-container">
    <div v-for="categorie in sortedcategoriesWithCount" :key="categorie.categorie" class="categorie-item">
      <a :href="categorie.categorie">
        {{ categorie.categorie }} ({{ categorie.count }})
      </a>
    </div>
  </div>
</template>

<style scoped>
#categories-cloud-container {
  /* 此处添加父容器样式 */
}
.categorie-item {
  /* 此处添加标签项样式 */
  padding: 5px;
  margin: 2px;
  display: inline-block;
  background-color: #f0f0f0;
  border-radius: 5px;
}
.categorie-item a {
  text-decoration: none;
  color: #333;
}
</style>