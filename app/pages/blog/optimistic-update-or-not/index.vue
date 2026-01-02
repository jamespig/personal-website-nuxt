<template>
  <div class="bg-[#B1DD74] p-4">
    <!-- 文章標題 -->
    <div class="mb-8">
      <div
        class="inline-block px-2 py-1 mb-4 text-2xl font-bold text-black shadow-lg bg-[#FC6F8B]"
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
      <p>
        之所以為有這兩個選項在考慮，是因為前端總是會需要<span class="highlight"
          >等待資料更新</span
        >，而<span class="highlight">等待是必要的嗎</span>？
      </p>

      <h1
        class="inline-block px-2 py-1 mb-2 mt-4 text-2xl font-bold text-black shadow-lg bg-[#FC6F8B]"
      >
        樂觀更新是什麼？
      </h1>

      <p>
        <span class="highlight">樂觀更新的目的</span>是讓前端在更新資料後去<span
          class="highlight"
          >同步所有使用到該筆資料的地方</span
        >，<span class="highlight">不等待後端返回</span>更新有無成功。
      </p>
      <br />
      <p>
        那假如失敗呢？那也<span class="highlight">沒關係</span>，只要去 roll
        back 成之前的資料就好。
      </p>
      <br />
      <p>
        那既然有樂觀更新的存在，是不是就可以大膽的假設<span class="highlight"
          >我們只要都使用他就不需要讓使用者等了？</span
        >
      </p>

      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#FC6F8B]"
      >
        Loading Status 的使用情境
      </h1>

      <p>
        這時我們就要尋找我們的
        <span class="highlight">AI</span> 來幫我們解答這個問題，首先 AI 先給出了
        <span class="highlight">Loading Status</span> 的使用情境:
        <span class="highlight">股票、即時運算、金流</span>...等需要<span
          class="highlight"
          >大家同步知道最新結果的應用上</span
        >，這類型的產品要求數據在上面呈現的要及時準確，因為如果<span
          class="highlight"
          >不準確會造成判斷錯誤</span
        >，也就是說不管是無法更新、錯誤資料...等也都是判斷的依據，<span
          class="highlight"
          >只要你的畫面上有出現短暫的虛假資料時，就會造成判斷失準</span
        >。
      </p>
      <br />
      <p>
        <span class="highlight">樂觀更新就不太能</span
        >使用在這類型應用上，因為更新失敗時的 roll back
        造成的損失是無法估計的，所以寧願做等待完全正確的回應，也不要為了求快看到虛假的情況。
      </p>

      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#FC6F8B]"
      >
        樂觀更新能夠使用在哪
      </h1>

      <p>
        那樂觀更新能夠使用在哪呢？也就是你認為就算失敗也無傷大雅的應用上。舉例像是<span
          class="highlight"
          >社群平台</span
        >，你不管在<span class="highlight">按讚、發文、收藏</span
        >...等行為上<span class="highlight">失敗</span>，本質上其實並<span
          class="highlight"
          >不會造成你多大的損失</span
        >，加上這些平台在來回的速度上是很快的，所以你只要稍微有點等待的時間其實累加起來會讓使用者體驗不太好。
      </p>

      <h1
        class="inline-block px-2 py-1 mt-4 mb-2 text-2xl font-bold text-black shadow-lg bg-[#FC6F8B]"
      >
        體悟
      </h1>

      <p>
        我現在是慢慢體悟到一項技術的誕生很多時候不只是為了取代OOO，而可能是多一個選擇，畢竟會有這些<span
          class="highlight"
          >技術的誕生</span
        >肯定都是為了<span class="highlight">解決特定的某件事</span
        >。那我要怎麼知道該怎麼選就是在
        <span class="highlight">AI 日漸成熟</span>的現在該做的，畢竟如何做到 AI
        肯定比人強大。
      </p>
      <br />
      <p>
        所以這兩者也沒有誰好誰不好，只是<span class="highlight"
          >使用場景的不同</span
        >，只要清楚目標是什麼，就會比較好去選擇處理方式。
      </p>
      <br />
      <p>
        <strong>聲明:</strong> 以上提到部分也是看
        <span class="highlight">AI 收集的資料學的</span
        >，我對此沒有特別實務處理經驗。
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
  title: "Optimistic Update or Not?",
  date: "2025/07/23",
  tags: ["tech"],
};

// SEO 設定
useHead({
  title: `${postData.title}`,
  meta: [
    {
      name: "description",
      content:
        "Optimistic update or loading state, which one is better for user experience?",
    },
  ],
});
</script>

<style scoped>
.highlight {
  background-color: #fc6f8b;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  color: #000000;
}
</style>
