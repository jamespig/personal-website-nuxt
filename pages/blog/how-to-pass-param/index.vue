<template>
  <div class="bg-[#5C4A80] p-4">
    <!-- 文章標題 -->
    <div class="mb-8">
      <div
        class="inline-block px-2 py-1 mb-4 text-2xl font-bold text-black shadow-lg bg-[#F06018]"
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

      <time class="text-gray-400 text-sm">
        {{ postData.date }}
      </time>
    </div>

    <!-- 文章內容 -->
    <article class="leading-relaxed text-gray-300">
      <p>
        其實這個議題也不僅限於 React 上，Vue
        上也能看到，在這兩個框架我們在撰寫時會<span class="highlight"
          >將畫面做拆分成一塊塊小組件</span
        >，然後像是拼模型一樣把畫面做組合，這時原本在同一個畫面上的資料會在各小組件中做使用，所以需要做傳遞的動作來處理，這時<span
          class="highlight"
          >畫面就叫父組件</span
        >，<span class="highlight">小組件們就是子組件</span>，這是<span
          class="highlight"
          >相對關係</span
        >。
      </p>

      <h1
        class="inline-block px-2 py-1 mb-2 mt-4 text-2xl font-bold text-black shadow-lg bg-[#F06018]"
      >
        最一開始的做法
      </h1>

      <p>
        既然說這是相對關係，就代表<span class="highlight"
          >子組件也是人家的父組件</span
        >，子組件也是...，進入無限輪迴，所以造成只要有需要就必須一直把<span
          class="highlight"
          >同一包資料從行天宮傳到外太空</span
        >？這樣過程中發生什麼事情是很難追蹤的。加上有的時候<span
          class="highlight"
          >甚至有別人家也需要這筆資料</span
        >，但程式結構上傳不過去呀？
      </p>

      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#F06018]"
      >
        誕生的新做法
      </h1>

      <p>
        這時你會想說，那我有一個<span class="highlight"
          >大爸爸（useContext）</span
        >不就好了？讓他管理資料，底下都是他的孩子，都能取得；或是，我需要一個類似<span
          class="highlight"
          >銀行（Redux/Zustand）</span
        >的地方幫我保管資料，讓我可以方便取得資料。
      </p>
      <br />
      <p>
        <span class="highlight">Redux</span> 解決了這樣一直傳遞的方式，我<span
          class="highlight"
          >直接把資料抓出來獨立給第三方管理</span
        >，<span class="highlight">誰需要誰來拿</span
        >！再也不用擔心他是不是我老爸，我是不是第三者之類的事情。反正我要什麼去這裡拿就可以，也比較好追蹤針對這筆資料做的處理（因為可以把處理動作一起包在裡面）。
      </p>
      <br />
      <p>
        <span class="highlight">useContext</span> 則<span class="highlight"
          >將資料取得放在最外層</span
        >，這樣<span class="highlight">大家對他而言都是子組件</span
        >，都能從統一的地方取得資料。
      </p>
      <br />
      <p>
        這兩種方法解決了
        <span class="highlight">Props drilling</span>
        的問題，讓程式在撰寫上更靈活。
      </p>

      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#F06018]"
      >
        哪個比較好？
      </h1>

      <p>
        選擇 <span class="highlight">Redux</span> 或是
        <span class="highlight">useContext</span>
        <span class="highlight">哪個好呢？</span>
      </p>
      <br />
      <p>
        其實如果只想用 React 原生的工具，不想增加複雜性的話，可以使用
        <span class="highlight">useContext</span> 處理
        <span class="highlight">Props drilling</span>
        議題。不過，這時會產生一個議題，假如
        <span class="highlight">useContext</span> 內的資料更新呢...?沒錯，這時
        React 會<span class="highlight">無差別重新渲染</span
        >，不管你是不是我資料的用戶我都重新渲染，這種在龐大的應用上可不是好事。
      </p>
      <br />
      <p>
        當然你還是可以細膩到只包裹可能需要用到他的組件就好，所以使用
        <span class="highlight">Redux</span>
        的其中一個好處是，在資料有改變後，可以<span class="highlight"
          >僅針對有使用到的組件做重新渲染</span
        >。
      </p>

      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#F06018]"
      >
        回頭想一下
      </h1>

      <p>
        這時候我們已經知道這兩個工具都是為了處理
        <span class="highlight">Props drilling</span>
        產生的問題，那...有沒有一種可能，我其實根本不在乎這個問題，或是，我可以調整架構讓他不會產生這麼多層級？
      </p>
      <br />
      <p>
        答案是肯定的，什麼選擇都可以做，反正程式不會因此壞掉。不過你可能就要很有把握自己的設計非常彈性，也能好好控管自己的參數。
      </p>
      <br />
      <p>所以怎麼做取捨就看個人。</p>
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
  title: "How to pass parameters",
  date: "2025/07/22",
  tags: ["tech"],
};

// SEO 設定
useHead({
  title: `${postData.title}`,
  meta: [
    {
      name: "description",
      content: "Is the approach we have been using really the best one?",
    },
  ],
});
</script>

<style scoped>
.highlight {
  background-color: #f06018;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  color: #000000;
}
</style>
