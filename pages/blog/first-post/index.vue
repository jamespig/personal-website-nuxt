<template>
  <div class="bg-[#C6C5C1] p-4">
    <!-- 文章標題 -->
    <div class="mb-8">
      <div
        class="inline-block px-2 py-1 mb-4 text-2xl font-bold text-black shadow-lg bg-[#F92F04]"
      >
        {{ postData.title }}
      </div>

      <!-- 標籤 -->
      <div class="flex gap-2 mb-4">
        <Tag
          v-for="tag in postData.tags"
          :key="tag"
          :variant="tag as TagVariant"
        />
      </div>

      <time class="text-gray-600 text-sm">
        {{ postData.date }}
      </time>
    </div>

    <!-- 文章內容 -->
    <article class="leading-relaxed">
      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#F92F04]"
      >
        終於開始嘗試經營部落格
      </h1>

      <p>
        有一個自己的天地寫一些東西，還可以按照我喜好
        <span class="highlight">排版</span>
        、
        <span class="highlight">配色</span>。
      </p>
      <br />
      <p>
        不過麻煩的是，花的時間可能是在
        <span class="highlight">Medium</span>
        的兩倍，畢竟要同時思考
        <span class="highlight">畫面</span>
        與
        <span class="highlight">內容</span>。
      </p>
      <br />
      <p>
        <span class="highlight">配色</span>
        方面可能是最頭痛的，我習慣上去
        <span class="highlight">Cosmos</span>
        尋找配色靈感，但並沒有特別考慮易讀性，所以有些配色可能長時間閱讀下會
        <span class="highlight">造成眼睛不適</span>。
      </p>
      <br />
      <p>
        不過當初會這樣選的原因只是因為我很容易
        <span class="highlight">喜新厭舊</span>，
        不希望都花時間設計個人網站了，然後隔一段時間就
        <span class="highlight">不喜歡之前設計想要翻掉</span>， 所以就從顏色下手
        <span class="highlight">讓自己不無聊</span>。
      </p>
      <br />
      <p>
        之後可能會在上面分享各種
        <span class="highlight">心得文章</span>，
        不管做個紀錄，也希望能給其他人看見，進而對我有
        <span class="highlight">正向回饋</span>。
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import Tag from "../../../components/common/Tag.vue";
import type { TagVariant } from "../../../components/common/Tag.vue";

// 使用 blog layout
definePageMeta({
  layout: "blog",
});

// 文章資料
const postData = {
  title: "First Post",
  date: "2025/07/12",
  tags: ["diary"],
};

// SEO 設定
useHead({
  title: `${postData.title}`,
  meta: [
    {
      name: "description",
      content: "終於開始嘗試經營部落格，有一個自己的天地寫一些東西。",
    },
  ],
});
</script>

<style scoped>
.highlight {
  background-color: #f92f04;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
}
</style>
