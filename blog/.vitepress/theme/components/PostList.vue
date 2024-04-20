<script setup>
import { data as posts } from "../scripts/posts.data";
</script>

<template>
  <div id="posts-list">
    <div v-for="post in posts" :key="post.path">
      <a :href="post.url">
        <mdui-card clickable class="posts-card">
          <div
            class="posts-categories"
            v-for="postCat in post.frontmatter.categories"
            :key="post.path"
          >
            <mdui-chip icon="folder">{{ postCat }}</mdui-chip>
          </div>
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
</template>
