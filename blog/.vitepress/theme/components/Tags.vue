<script setup>
import { ref, computed } from 'vue';
import { data as posts } from "../scripts/posts.data";

// 聚合标签并计算每个标签的出现次数
const tagsWithCount = computed(() => {
  const tagsMap = new Map();
  posts.forEach(post => {
    post.frontmatter.tags.forEach(tag => {
      if (tagsMap.has(tag)) {
        tagsMap.set(tag, tagsMap.get(tag) + 1);
      } else {
        tagsMap.set(tag, 1);
      }
    });
  });
  return Array.from(tagsMap, ([tag, count]) => ({ tag, count }));
});

// 可以选择按照标签数量对标签进行排序
const sortedTagsWithCount = computed(() => {
  return tagsWithCount.value.slice().sort((a, b) => b.count - a.count);
});
</script>

<template>
  <div id="tags-cloud-container">
    <div v-for="tag in sortedTagsWithCount" :key="tag.tag" class="tag-item">
      <!-- 此处将显示标签名和标签下文章的数量 -->
      <a :href="'#'+tag.tag">
        {{ tag.tag }} ({{ tag.count }})
      </a>
    </div>
  </div>
</template>

<style scoped>
#tags-cloud-container {
  /* 此处添加父容器样式 */
}
.tag-item {
  /* 此处添加标签项样式 */
  padding: 5px;
  margin: 2px;
  display: inline-block;
  background-color: #f0f0f0;
  border-radius: 5px;
}
.tag-item a {
  text-decoration: none;
  color: #333;
}
</style>