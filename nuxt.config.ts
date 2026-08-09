export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  css: ['~/assets/css/blog.css'],
  routeRules: {
    '/': { redirect: '/blog' }
  },
  app: {
    head: {
      titleTemplate: '%s - Blog de Noticias',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Blog de noticias nacionales construido con Nuxt Content' }
      ]
    }
  }
})
