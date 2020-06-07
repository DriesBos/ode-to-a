importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11d3100605a5ad5f9b9e.js",
    "revision": "237e75abed0397ea18738bd0afad3733"
  },
  {
    "url": "/_nuxt/241c3152ade1bc912c69.js",
    "revision": "8e6831d8e1f1bb13384c04c6c72a1e03"
  },
  {
    "url": "/_nuxt/243f31a46f6ce9d3bcfe.js",
    "revision": "356d68d182ff4b84078a180bd69edc15"
  },
  {
    "url": "/_nuxt/4d35a398c32985cf9c3a.js",
    "revision": "ebf70d1f43c153947bbc166c73cc3e42"
  },
  {
    "url": "/_nuxt/7310279dec1c08d9f7ca.js",
    "revision": "53ed88e05c8e72212da638a88911d7e8"
  },
  {
    "url": "/_nuxt/9669aadc1d68f2e1e8ef.js",
    "revision": "cb9f3a16ce4770be38ed98513dd4d772"
  },
  {
    "url": "/_nuxt/afb46705a44418d27d8d.js",
    "revision": "78c97769c9a0bf720f89d445f6f1bd1c"
  },
  {
    "url": "/_nuxt/c80d243c4b0836d86766.js",
    "revision": "0d26bfd2b034c16496f171d46c353165"
  },
  {
    "url": "/_nuxt/e3bae4ad35479949f7dc.js",
    "revision": "4c173e84cc0ea9d936bdf1181963a318"
  },
  {
    "url": "/_nuxt/e6a1abe3e53c258c1dda.js",
    "revision": "2aa9eef2d73c11c069d4fef8c2568ec7"
  },
  {
    "url": "/_nuxt/f508256667bde80abcd6.js",
    "revision": "94adac0fcc285dc36f9fd60a648dc1b6"
  },
  {
    "url": "/_nuxt/ff68668ccb0409eed3da.js",
    "revision": "b5ff3e1d033b19d01b44aabc8f25b5c8"
  }
], {
  "cacheId": "nuxt-storyblok-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
