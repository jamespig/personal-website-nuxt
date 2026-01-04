<template>
  <UPageCard
    :title="props.title"
    :description="$t(props.description)"
    :to="props.link"
    target="_blank"
    :icon="props.icon"
    variant="soft"
    :ui="{
      root: `w-[250px] h-[155px] shadow-lg`,
    }"
  />
</template>
<script lang="ts" setup>
import type { SocialCard } from "@/types/home";
const props = defineProps<SocialCard>();
</script>
