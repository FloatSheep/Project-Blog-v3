<script setup>
import { computed } from "vue";
import { data as posts } from "../scripts/posts.data";

// 提取年份并创建一个包含不重复年份的数组
const uniqueYears = Array.from(
  new Set(posts.map((post) => new Date(post.frontmatter.date).getFullYear()))
).sort((a, b) => b - a);

// 为每个年份的文章创建分组
const groupedPosts = computed(() => {
  return uniqueYears.map((year) => ({
    year,
    posts: posts.filter(
      (post) => new Date(post.frontmatter.date).getFullYear() === year
    ),
  }));
});
</script>

<template>
  <div id="article-container">
    <div v-for="group in groupedPosts" :key="group.year" class="year-group">
      <h2>{{ group.year }}</h2>
      <div id="posts-list">
        <div v-for="post in group.posts" :key="post.path">
          <a :href="post.url">
            <!-- 卡片和之前的结构相同，这里省略其余部分 -->
            <mdui-card clickable class="posts-card">
              <h1 class="posts-title">
                {{ post.frontmatter.title }}
              </h1>
              <span class="posts-description">
                {{ post.frontmatter.description }}
              </span>
              <div id="tagList">
                <div
                  class="posts-tags"
                  v-for="postTag in post.frontmatter.tags"
                  :key="post.path"
                >
                  <span class="tag-o">
                    <mdui-icon style="opacity: 0.8" name="tag"></mdui-icon>
                    <span>{{ postTag }}</span>
                  </span>
                </div>
              </div>
            </mdui-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
