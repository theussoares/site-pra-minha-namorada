// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  target: 'static', // Gera um site estático
  build: {
    outDir: '.output/public' // Diretório de saída para a construção estática
  },
  app: {
    baseURL: '/love' // (Se necessário, configure a baseURL conforme seu caminho de deploy)
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css']
})
