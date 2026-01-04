<template>
  <VueLenis root>
    <slot />
    <Footer />
  </VueLenis>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
import { VueLenis } from "lenis/vue";
</script>
