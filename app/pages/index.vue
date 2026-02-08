<template>
  <div class="flex flex-col">
    <HeroSection />
    <IntroSection />
    <section class="flex flex-col px-8 py-6 gap-6 bg-[#BE4938] rounded-lg">
      <header class="flex flex-row justify-between items-center">
        <h1 class="text-3xl font-bold text-black">
          {{ $t("home.social.title") }}
        </h1>
        <!-- 控制按鈕 -->
        <div class="flex gap-2">
          <ArrorButton direction="left" @click="scrollPrev" />
          <ArrorButton direction="right" @click="scrollNext" />
        </div>
      </header>
      <UCarousel
        ref="carousel"
        v-slot="{ item }"
        :items="socialList"
        wheel-gestures
        loop
        :ui="{ item: 'basis-auto' }"
      >
        <SocialCard
          :title="item.title"
          :icon="item.icon"
          :link="item.link"
          :description="item.description"
          :backgroundColor="item.backgroundColor"
          :textColor="item.textColor"
        />
      </UCarousel>
    </section>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "../components/home/HeroSection.vue";
import IntroSection from "../components/home/IntroSction.vue";
import SocialCard from "../components/base/SocialCard.vue";
import ArrorButton from "../components/base/ArrorButton.vue";
import type { SocialCard as SocialCardType } from "../types/home";

// Carousel ref
const carousel = ref();

// 控制 carousel 的函數
const scrollPrev = () => {
  carousel.value?.emblaApi?.scrollPrev();
};

const scrollNext = () => {
  carousel.value?.emblaApi?.scrollNext();
};

const socialList: SocialCardType[] = [
  {
    title: "Instagram",
    icon: "mdi:instagram",
    description: "home.social.Instagram",
    link: "https://www.instagram.com/jamespig3303/",
    backgroundColor: "#C837AB",
    textColor: "#FFDD55",
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    description: "home.social.Linkedin",
    link: "https://www.linkedin.com/in/jamespig/",
    backgroundColor: "#2B7FFF",
    textColor: "#FFFFFF",
  },
  {
    title: "CV",
    icon: "mdi:file",
    description: "home.social.CV",
    link: "https://drive.google.com/file/d/1GSS8Mt55fdctL4CoJHt1JFwfcsDKc0kP/view?usp=sharing",
    backgroundColor: "#FAF03A",
    textColor: "#000000",
  },
  {
    title: "Medium",
    icon: "mdi:medium",
    description: "home.social.Medium",
    link: "https://medium.com/@james-pig",
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "GitHub",
    icon: "mdi:github",
    description: "home.social.Github",
    link: "https://github.com/jamespig",
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    title: "Gmail",
    icon: "mdi:gmail",
    description: "home.social.Gmail",
    link: "mailto:james7766646@gmail.com",
    backgroundColor: "#FFFFFF",
    textColor: "#FB2C36",
  },
  {
    title: "Figma",
    icon: "solar:figma-bold",
    description: "home.social.Figma",
    link: "https://www.figma.com/design/eb4MuRbaLRfsNVunJDuDYs/Personal?node-id=15-2&t=E4VtCJdUALMgYQKs-1",
    backgroundColor: "#FF7262",
    textColor: "#F24E1E",
  },
];
</script>
