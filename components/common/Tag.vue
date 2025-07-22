<template>
  <div>
    <span
      class="text-xs font-bold rounded-lg px-1 py-0.5 flex items-center gap-0.5"
      :class="color"
    >
      <component :is="icon" class="w-4 h-4" />
      <span>{{ variant }}</span>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { Notebook, Gamepad2, CodeXml } from "lucide-vue-next";
export type TagVariant = "diary" | "game" | "tech";

const props = defineProps<{
  variant: TagVariant;
}>();

const icon = computed(() => {
  switch (props.variant) {
    case "diary":
      return Notebook;
    case "game":
      return Gamepad2;
    case "tech":
      return CodeXml;
  }
});

const color = computed(() => {
  switch (props.variant) {
    case "diary":
      return "bg-white";
    case "game":
      return "bg-[#F6BE03]";
    case "tech":
      return "bg-[#64C0DD]";
  }
});
</script>
