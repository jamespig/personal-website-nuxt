<template>
  <section class="flex flex-row px-8 py-6 gap-8 bg-transparent overflow-hidden">
    <h1 class="text-3xl font-bold text-rose-500">
      {{ $t("home.intro.title") }}
    </h1>
    <article class="flex flex-col gap-2 text-white" ref="articleRef">
      <h2 class="text-2xl font-bold animation-item opacity-0 translate-y-10">
        {{ $t("home.intro.hello") }} <span class="text-rose-500">James</span>
      </h2>
      <p class="animation-item opacity-0 translate-y-10">
        {{ $t("home.intro.enjoy") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.code")
        }}</span>
        {{ $t("home.intro.and") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.design")
        }}</span>
        {{ $t("home.intro.bringImaginationToLife") }}
      </p>
      <p class="animation-item opacity-0 translate-y-10">
        {{ $t("home.intro.onWeekends") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.listenToMusic")
        }}</span>
        {{ $t("home.intro.while") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.draw")
        }}</span>
        {{ $t("home.intro.smoothingFatigue") }}
      </p>
      <p class="animation-item opacity-0 translate-y-10">
        {{ $t("home.intro.the") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.gym")
        }}</span>
        {{ $t("home.intro.isSecondOffice") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.liftingWeights")
        }}</span>
        {{ $t("home.intro.and") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.running")
        }}</span>
        {{ $t("home.intro.maintainBalance") }}
      </p>
      <p class="animation-item opacity-0 translate-y-10">
        {{ $t("home.intro.evening") }}
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.readingBooks")
        }}</span>
        <span class="text-2xl font-bold text-rose-500">{{
          $t("home.intro.watchingShows")
        }}</span>
        {{ $t("home.intro.techInsights") }}
      </p>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const articleRef = ref<HTMLElement | null>(null);
let scrollTrigger: any = null;
let tl: gsap.core.Timeline | null = null;

onMounted(() => {
  if (!articleRef.value) return;

  // 创建一个timeline实例
  tl = gsap.timeline({ paused: true });

  // 获取所有animation-item元素
  const animationElements = Array.from(
    articleRef.value.querySelectorAll(".animation-item")
  ) as HTMLElement[];

  // 将所有动画添加到timeline中
  animationElements.forEach((el) => {
    tl!.to(
      el,
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      "<+=0.15"
    ); // 每个动画比前一个晚0.15秒开始
  });

  // 创建ScrollTrigger控制timeline的播放
  scrollTrigger = ScrollTrigger.create({
    trigger: articleRef.value,
    start: "top 80%",
    onEnter: () => tl!.play(),
    onLeaveBack: () => tl!.reverse(),
  });
});

onUnmounted(() => {
  // 清理ScrollTrigger和timeline实例
  if (scrollTrigger) {
    scrollTrigger.kill();
  }
  if (tl) {
    tl.kill();
  }
});
</script>

<style lang="css" scoped>
.animation-item {
  will-change: transform, opacity; /* 优化性能 */
}
</style>
