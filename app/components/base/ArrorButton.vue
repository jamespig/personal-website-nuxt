<template>
  <UButton
    @click="emit('click')"
    :ui="{
      base: 'w-fit h-fit rounded-lg px-4 py-2 cursor-pointer',
    }"
  >
    <component :is="icon" :size="30" :stroke-width="2" />
  </UButton>
</template>
<script lang="ts" setup>
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from "lucide-vue-next";
const emit = defineEmits<{
  (e: "click"): void;
}>();
const props = defineProps<{
  direction: "up" | "down" | "left" | "right";
}>();

const icon = computed(() => {
  switch (props.direction) {
    case "up":
      return ArrowUp;
    case "down":
      return ArrowDown;
    case "left":
      return ArrowLeft;
    case "right":
      return ArrowRight;
  }
});
</script>
