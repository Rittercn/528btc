// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true, //全部组件导入
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },//调试工具
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix', // 不添加语言前缀
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh-cn',
        iso: 'zh-Cn',
        file: 'zh-cn.json'
      }
    ],
    defaultLocale: 'zh-cn',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ]
    }
  },
  plugins: [
    '~/plugins/flexible.js',
  ],
  css: [
    '~/assets/css/main.css',
  ]
  
})