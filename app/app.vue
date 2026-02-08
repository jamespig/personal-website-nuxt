<template>
  <div class="min-h-screen bg-black">
    <UApp>
      <Header />

      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>
    </UApp>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/layout/Header.vue";

useSeoMeta({
  title: "JamesPig",
  description: "This is JamesPig's own little world.",
  ogTitle: "JamesPig",
  ogDescription: "This is JamesPig's own little world.",
  ogImage:
    "https://lh3.googleusercontent.com/d/1DZiUwElhJWhtvUYELpceIaheAVwMxGv0",
});
</script>
