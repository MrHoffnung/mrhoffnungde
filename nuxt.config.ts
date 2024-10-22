// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "nuxt-marquee", "@nuxt/image"],

  app: {
    head: {
      title: "MrHoffnung",
      meta: [{ charset: "utf-8" }],
    },
  },
});
