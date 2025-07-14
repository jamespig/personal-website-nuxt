<template>
  <div>
    <Header />
    <VueLenis root>
      <slot />
      <Footer />
    </VueLenis>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/common/Header.vue";
import Footer from "../components/common/Footer.vue";
import { VueLenis } from "lenis/vue";
</script>
