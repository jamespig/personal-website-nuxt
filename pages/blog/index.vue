<template>
  <div class="bg-[#E9E8E7] flex flex-col px-4 md:px-40 py-20">
    <div
      v-for="yearGroup in groupedPostsByYear"
      :key="yearGroup.year"
      class="mt-8"
    >
      <h1 class="text-4xl font-bold text-gray-600">
        {{ yearGroup.year }}
      </h1>

      <div
        v-for="monthGroup in yearGroup.months"
        :key="`${yearGroup.year}-${monthGroup.month}`"
        class="mb-8"
      >
        <h2 class="text-2xl font-bold mb-4 text-gray-600">
          {{ $t(`blog.month.${monthGroup.month}`) }}
        </h2>

        <div class="space-y-4">
          <article
            v-for="post in monthGroup.posts"
            :key="post.id"
            class="flex flex-row items-center justify-between px-3 py-2 h-[250px] gap-4"
            :style="getArticleStyle(post)"
          >
            <time class="flex flex-col text-2xl font-bold">
              {{ post.day }}
            </time>
            <div class="flex flex-col items-center justify-around h-full">
              <Tag
                v-for="tag in post.tags"
                :key="tag"
                :variant="tag as TagVariant"
              />
              <h3
                class="text-2xl font-bold px-2 py-1 inline-block shadow-lg"
                :style="getTitleStyle(post)"
              >
                {{ post.title }}
              </h3>
              <p class="leading-relaxed">
                {{ post.description }}
              </p>
            </div>
            <NuxtLink
              :to="localePath(`/blog/${post.id}`)"
              class="bg-black rounded-lg px-4 py-2 cursor-pointer"
            >
              <ArrowRight color="white" :size="30" :stroke-width="2" />
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "../../components/common/Tag.vue";
import type { TagVariant } from "../../components/common/Tag.vue";
import { ArrowRight } from "lucide-vue-next";

const localePath = useLocalePath();

// 介面定義
interface Post {
  id: string;
  year: number;
  month: string;
  day: number;
  title: string;
  description: string;
  tags: string[];
  bgColor?: string;
  titleBgColor?: string;
  titleColor?: string;
}

interface MonthGroup {
  month: string;
  posts: Post[];
}

interface YearGroup {
  year: number;
  months: MonthGroup[];
}

// 取得文章卡片樣式
const getArticleStyle = (post: Post) => {
  if (post.bgColor) {
    return {
      backgroundColor: post.bgColor,
    };
  }
  return {
    backgroundColor: "#C6C5C1",
  };
};
// 取得標題樣式
const getTitleStyle = (post: Post) => {
  if (post.titleBgColor && post.titleColor) {
    return {
      backgroundColor: post.titleBgColor,
      color: post.titleColor,
    };
  }
  return {
    backgroundColor: "#F92F04",
    color: "#000000",
  };
};

const posts: Post[] = [
  {
    id: "first-post",
    year: 2025,
    month: "July",
    day: 12,
    title: "First Post",
    description: "All start from here.",
    tags: ["diary"],
    bgColor: "#C6C5C1",
    titleBgColor: "#F92F04",
    titleColor: "#000000",
  },
  {
    id: "how-to-pass-param",
    year: 2025,
    month: "July",
    day: 22,
    title: "How to pass parameters",
    description: "Is the approach we have been using really the best one?",
    tags: ["tech"],
    bgColor: "#5C4A80",
    titleBgColor: "#F06018",
    titleColor: "#000000",
  },
  {
    id: "optimistic-update-or-not",
    year: 2025,
    month: "July",
    day: 23,
    title: "Optimistic Update or Not?",
    description:
      "Optimistic update or loading state, which one is better for user experience?",
    tags: ["tech"],
    bgColor: "#B1DD74",
    titleBgColor: "#FC6F8B",
    titleColor: "#000000",
  },
];

// 按年份和月份分組
const groupedPostsByYear = computed((): YearGroup[] => {
  const yearGroups: { [key: number]: YearGroup } = {};

  posts.forEach((post) => {
    if (!yearGroups[post.year]) {
      yearGroups[post.year] = {
        year: post.year,
        months: [],
      };
    }

    let monthGroup = yearGroups[post.year].months.find(
      (m) => m.month === post.month
    );
    if (!monthGroup) {
      monthGroup = {
        month: post.month,
        posts: [],
      };
      yearGroups[post.year].months.push(monthGroup);
    }

    monthGroup.posts.push(post);
  });

  // 排序年份和月份（最新的在前）
  const sortedYears = Object.values(yearGroups).sort((a, b) => b.year - a.year);

  sortedYears.forEach((yearGroup) => {
    yearGroup.months.sort((a, b) => {
      const monthOrder = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
      };
      return (
        monthOrder[a.month as keyof typeof monthOrder] -
        monthOrder[b.month as keyof typeof monthOrder]
      );
    });

    yearGroup.months.forEach((monthGroup) => {
      monthGroup.posts.sort((a, b) => b.day - a.day);
    });
  });

  return sortedYears;
});
</script>
