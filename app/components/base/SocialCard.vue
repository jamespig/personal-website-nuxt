<template>
  <a
    :href="props.link"
    target="_blank"
    class="flex flex-col gap-2 p-4 shadow-lg w-64 h-32 cursor-pointer"
    :style="{ backgroundColor: props.backgroundColor }"
  >
    <h2 class="text-2xl font-bold" :style="{ color: props.textColor }">{{ props.title }}</h2>
    <hr :style="{ borderColor: props.textColor }" />
    <p class="text-base font-bold" :style="{ color: props.textColor }">
      {{ $t(props.description) }}
    </p>
  </a>
</template>

<script lang="ts" setup>
import type { SocialCard as SocialCardType } from "../../types/home";

const props = defineProps<SocialCardType>();
</script>