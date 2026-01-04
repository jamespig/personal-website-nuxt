<template>
  <div class="flex flex-col">
    <HeroSection />
    <IntroSection />
    <section class="flex flex-col px-8 py-6 gap-6 bg-[#BE4938] rounded-lg">
      <header class="flex flex-row justify-between items-center">
        <h1 class="text-3xl font-bold text-black">
          {{ $t("home.social.title") }}
        </h1>
      </header>
      <UCarousel
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
        />
      </UCarousel>
    </section>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "../components/home/HeroSection.vue";
import IntroSection from "../components/home/IntroSction.vue";
import type { SocialCard as SocialCardType } from "@/types/home";
import SocialCard from "../components/base/SocialCard.vue";

const socialList: SocialCardType[] = [
  {
    title: "Instagram",
    icon: "mdi:instagram",
    description: "home.social.Instagram",
    link: "https://www.instagram.com/jamespig3303/",
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    description: "home.social.Linkedin",
    link: "https://www.linkedin.com/in/jamespig/",
  },
  {
    title: "CV",
    icon: "mdi:file",
    description: "home.social.CV",
    link: "https://drive.google.com/file/d/1GSS8Mt55fdctL4CoJHt1JFwfcsDKc0kP/view?usp=sharing",
  },
  {
    title: "Medium",
    icon: "mdi:medium",
    description: "home.social.Medium",
    link: "https://medium.com/@james-pig",
  },
  {
    title: "GitHub",
    icon: "mdi:github",
    description: "home.social.Github",
    link: "https://github.com/jamespig",
  },
  {
    title: "Gmail",
    icon: "mdi:gmail",
    description: "home.social.Gmail",
    link: "mailto:james7766646@gmail.com",
  },
  {
    title: "Figma",
    icon: "solar:figma-bold",
    description: "home.social.Figma",
    link: "https://www.figma.com/design/eb4MuRbaLRfsNVunJDuDYs/Personal?node-id=15-2&t=E4VtCJdUALMgYQKs-1",
  },
];
</script>
