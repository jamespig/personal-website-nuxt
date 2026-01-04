// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "JamesPig",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    "v-gsap-nuxt",
    "nuxt-lucide-icons",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/ui",
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    langDir: "locals",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "zh",
        name: "繁體中文",
        iso: "zh-TW",
        file: "zh.json",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});