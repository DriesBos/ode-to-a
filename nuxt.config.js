const pkg = require("./package")
require("dotenv").config()

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/styles/reset.css",
    "@/assets/styles/form-reset.css",
    "@/assets/styles/body.sass",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/variables.sass"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/components", "~/plugins/filters"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/pwa"],
    // ["@nuxtjs/google-tag-manager", { id: process.env.GOOGLE_GTM }],
    [
      "@bazzite/nuxt-optimized-images",
      { optimizedImages: { optimizeImagesInDev: true } } // Test compression by setting to true first
    ],
    [
      "storyblok-nuxt",
      {
        accessToken: "njqtjEclHAQQImoZgtGTfQtt",
        cacheProvider: "memory"
      }
    ],
    ["@nuxtjs/dotenv"]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [["@nuxt/typescript-build"]]
}
