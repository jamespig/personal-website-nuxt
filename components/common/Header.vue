<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white rounded-b-lg shadow-2xl"
  >
    <img :src="jamespig" alt="big logo" class="w-auto h-10" />

    <!-- 桌面端導航 -->
    <nav class="hidden md:flex items-center gap-4">
      <!-- 語言切換 -->
      <button
        @click="quickSwitchLanguage"
        class="flex items-center gap-2 p-2 rounded-md hover:shadow-inner transition-all duration-300"
        :aria-label="`Switch to ${nextLocale.name}`"
        :title="`Switch to ${nextLocale.name}`"
      >
        <Languages :size="24" />
        <span class="text-sm font-medium">{{ nextLocale.name }}</span>
      </button>

      <!-- 導航選單 -->
      <ul class="flex items-center gap-4">
        <li v-for="route in routes" :key="route.path">
          <NuxtLink
            class="text-base font-bold hover:shadow-inner transition-all duration-300 px-2 py-1 rounded-md"
            :to="localePath(route.path)"
            >{{ $t(route.name) }}</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <!-- mobile menu button -->
    <div class="relative md:hidden w-8 h-8 flex items-center justify-center">
      <!-- menu icon container -->
      <button
        @click="toggleMenu"
        class="relative w-8 h-8 flex items-center justify-center overflow-hidden"
        aria-label="Toggle menu"
      >
        <div
          class="icon-container hover:shadow-inner transition-all duration-300"
          ref="menuIconContainer"
        >
          <AlignRight ref="menuIcon" :size="24" />
        </div>
        <div
          class="icon-container hover:shadow-inner transition-all duration-300"
          ref="closeIconContainer"
        >
          <X ref="closeIcon" :size="24" />
        </div>
      </button>
    </div>

    <!-- mobile menu -->
    <div
      ref="mobileMenu"
      class="fixed left-0 right-0 top-[68px] bg-white shadow-xl rounded-b-lg p-4 md:hidden z-40 origin-top"
    >
      <!-- 語言切換 -->
      <div class="mb-4">
        <button
          @click="quickSwitchLanguage"
          class="w-full flex items-center gap-2 p-2 rounded-md hover:shadow-inner transition-all duration-300"
        >
          <Languages :size="20" />
          <span class="text-sm font-medium">{{ nextLocale.name }}</span>
        </button>
      </div>

      <ul ref="menuItems" class="flex flex-col items-center gap-4">
        <li
          v-for="route in routes"
          :key="route.path"
          ref="menuItemRefs"
          class="opacity-0"
        >
          <NuxtLink
            class="text-base font-bold w-fit text-center px-2 py-1 rounded-md hover:shadow-inner transition-all duration-300"
            :to="localePath(route.path)"
            @click="closeMenu"
            >{{ $t(route.name) }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
import jamespig from "../../assets/images/imagery/Jamespig.svg";
import { AlignRight, X, Languages } from "lucide-vue-next";
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";
import { NuxtLink } from "#components";

// i18n composables
const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

// 下一個要切換到的語言（顯示在按鈕上）
const nextLocale = computed(() => {
  return locales.value.find((l) => l.code !== locale.value) || locales.value[0];
});

const routes = [
  {
    name: "nav.home",
    path: "/",
  },
];

// menu state
const isMenuOpen = ref(false);
const mobileMenu = ref<HTMLElement | null>(null);
const menuItems = ref<HTMLElement | null>(null);
const menuItemRefs = ref<HTMLElement[]>([]);
const menuIcon = ref<HTMLElement | null>(null);
const closeIcon = ref<HTMLElement | null>(null);
const menuIconContainer = ref<HTMLElement | null>(null);
const closeIconContainer = ref<HTMLElement | null>(null);

// Animation duration and timing
const iconDuration = 0.3;
const iconDelay = iconDuration * 0.5;
const menuItemStagger = 0.08;

// 簡化的語言切換函數 - 直接切換到另一種語言
const quickSwitchLanguage = () => {
  const targetLocale = nextLocale.value.code as "en" | "zh";
  setLocale(targetLocale);
};

// initialize
onMounted(() => {
  if (closeIconContainer.value && menuIconContainer.value) {
    // initial icons state
    gsap.set(closeIconContainer.value, { autoAlpha: 0, rotate: -90 });
    gsap.set(menuIconContainer.value, { autoAlpha: 1 });
  }

  if (mobileMenu.value) {
    // initial mobile menu state
    gsap.set(mobileMenu.value, {
      scaleY: 0,
      autoAlpha: 0,
      transformOrigin: "top",
    });
  }

  if (menuItemRefs.value) {
    // initial menu items state
    gsap.set(menuItemRefs.value, { y: 20, autoAlpha: 0 });
  }
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  animateIcons();
  animateDrawer();
};

const animateIcons = () => {
  if (!menuIconContainer.value || !closeIconContainer.value) return;

  const duration = iconDuration;

  if (isMenuOpen.value) {
    gsap.to(menuIconContainer.value, {
      x: "100%",
      autoAlpha: 0,
      duration: duration,
      ease: "power2.in",
    });
    gsap.fromTo(
      closeIconContainer.value,
      { rotate: -90, autoAlpha: 0 },
      {
        rotate: 0,
        autoAlpha: 1,
        duration: duration,
        delay: iconDelay,
        ease: "power2.out",
      }
    );
  } else {
    gsap.to(closeIconContainer.value, {
      rotate: 90,
      autoAlpha: 0,
      duration: duration,
      ease: "power2.in",
    });

    gsap.fromTo(
      menuIconContainer.value,
      { x: "-100%", autoAlpha: 0 },
      {
        x: "0%",
        autoAlpha: 1,
        duration: duration,
        delay: iconDelay,
        ease: "power2.out",
      }
    );
  }
};

const animateDrawer = () => {
  if (
    !mobileMenu.value ||
    !menuItemRefs.value ||
    menuItemRefs.value.length === 0
  )
    return;

  const drawerDuration = 0.4;

  if (isMenuOpen.value) {
    const timeline = gsap.timeline();

    timeline.to(mobileMenu.value, {
      scaleY: 1,
      autoAlpha: 1,
      duration: drawerDuration,
      ease: "power3.out",
    });

    timeline.to(
      menuItemRefs.value,
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: menuItemStagger,
        ease: "back.out(1.2)",
      },
      "-=0.1"
    );
  } else {
    const timeline = gsap.timeline();

    timeline.to(menuItemRefs.value, {
      y: -15,
      autoAlpha: 0,
      duration: 0.25,
      stagger: 0.03,
      ease: "power2.in",
    });

    timeline.to(
      mobileMenu.value,
      {
        scaleY: 0,
        autoAlpha: 0,
        duration: drawerDuration * 0.8,
        ease: "power3.in",
      },
      "-=0.1"
    );
  }
};

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    animateIcons();
    animateDrawer();
  }
};
</script>

<style lang="css" scoped>
.icon-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
}
</style>
