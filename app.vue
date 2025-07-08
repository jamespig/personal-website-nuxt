<template>
  <div class="min-h-screen bg-black">
    <Header />
    <VueLenis root>
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </VueLenis>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import { VueLenis } from "lenis/vue";

useSeoMeta({
  title: "JamesPig",
  description: "This is JamesPig's own little world.",
  ogTitle: "JamesPig",
  ogDescription: "This is JamesPig's own little world.",
  ogImage:
    "https://lh3.googleusercontent.com/d/1DZiUwElhJWhtvUYELpceIaheAVwMxGv0",
});
</script>
