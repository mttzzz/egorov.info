// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: { typedPages: true },
  modules: ['@bg-dev/nuxt-naiveui', '@unocss/nuxt', '@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  imports: {
    dirs: ['stores'],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-09-03',
})
