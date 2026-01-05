export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    faceitApiKey: process.env.FACEIT_API_KEY as string,
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'aos/dist/aos.css'
  ]
})
