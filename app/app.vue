<template>
  <div class="min-h-screen bg-black">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "JamesPig",
  description: "This is JamesPig's own little world.",
  ogTitle: "JamesPig",
  ogDescription: "This is JamesPig's own little world.",
  ogImage:
    "https://lh3.googleusercontent.com/d/1DZiUwElhJWhtvUYELpceIaheAVwMxGv0",
});
</script>
