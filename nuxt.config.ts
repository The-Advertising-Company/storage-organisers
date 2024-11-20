// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client'
  ],
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: process.env.SHOPIFY_DOMAIN,
            token: {
              name: 'X-Shopify-Storefront-Access-Token',
              value: process.env.SHOPIFY_STOREFRONT_TOKEN,
              type: null,
            },
            retainToken: true
          }
        }
      }
    }
  }
})
