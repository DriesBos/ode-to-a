const pkg = require("./package")
const axios = require("axios")
require("dotenv").config()

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "ODE TO A",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover"
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      {
        rel: "icon",
        id: "favicon",
        type: "image/svg+xml",
        sizes: "any",
        href: "/icon.svg"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  components: true,

  target: "static",

  /*
   ** Global CSS
   */
  css: [
    "@/assets/styles/reset.css",
    "@/assets/styles/form-reset.css",
    "@/assets/styles/body.sass",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/vars/variables.sass"
  ],

  // Settings for "@nuxtjs/style-resources"
  styleResources: {
    sass: "./assets/styles/vars/*.sass"
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/components", "~/plugins/filters"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV === "production"
            ? process.env.PREVIEWKEY
            : process.env.PREVIEWKEY,
        cacheProvider: "memory"
      }
    ]
  ],

  generate: {
    routes: function(callback) {
      const token = process.env.PUBLICKEY
      const version = "published"
      let cache_version = 0

      let toIgnore = ["home", "en/settings"]

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    },
    fallback: true
  },

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
    },
    // Transpile GSAP for server side rendering
    transpile: ["gsap"]
  },
  buildModules: [
    [
      "@nuxtjs/pwa",
      {
        icon: false // disables the icon module
      }
    ],
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-165303247-1"
      }
    ],
    [
      "@aceforth/nuxt-optimized-images",
      {
        optimizedImages: {
          optimizeImages: true
        }
      }
    ],
    "@nuxtjs/style-resources"
  ]
}
