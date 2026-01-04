<template>
  <UHeader
    :ui="{
      root: 'bg-white rounded-b-lg',
    }"
  >
    <template #left>
      <NuxtLink to="/">
        <img :src="jamespig" alt="big logo" class="w-auto h-10" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="navItems" />

    <template #right>
      <!-- 語言切換 -->
      <button
        @click="quickSwitchLanguage"
        class="flex items-center gap-2 p-2 rounded-md hover:shadow-inner transition-all duration-300"
        :aria-label="`Switch to ${nextLocale?.name}`"
        :title="`Switch to ${nextLocale?.name}`"
      >
        <Languages :size="24" />
        <span class="text-sm font-medium">{{ nextLocale?.name }}</span>
      </button>
    </template>

    <template #body>
      <UNavigationMenu :items="navItems" orientation="vertical" />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import jamespig from "../../assets/images/imagery/Jamespig.svg";
import { Languages } from "lucide-vue-next";
import { computed } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";
import { NuxtLink } from "#components";

const route = useRoute();

// i18n composables
const { locale, locales, setLocale } = useI18n();

// 下一個要切換到的語言（顯示在按鈕上）
const nextLocale = computed(() => {
  return locales.value.find((l) => l.code !== locale.value) || locales.value[0];
});

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
]);

// 簡化的語言切換函數 - 直接切換到另一種語言
const quickSwitchLanguage = () => {
  const targetLocale = nextLocale?.value?.code as "en" | "zh";
  setLocale(targetLocale);
};
</script>
