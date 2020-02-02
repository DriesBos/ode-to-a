importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/20209809f3e31bd2def8.js",
    "revision": "0ec8dfd52458c31dcc1149f05b20ad0f"
  },
  {
    "url": "/_nuxt/33bb44786d6f0962e9b7.js",
    "revision": "aeac7335e40f12076e6585950de4d120"
  },
  {
    "url": "/_nuxt/4ccfa752e16a525a2c83.js",
    "revision": "d2bbcecd83b06d2b685a997caedce817"
  },
  {
    "url": "/_nuxt/69eceef6bd114df7680c.js",
    "revision": "06f94dde84e3efe4bfbdcc4c52d33bf8"
  },
  {
    "url": "/_nuxt/8620a91396d40e2f2d50.js",
    "revision": "5f0b197a424ab658a28b56487c906349"
  },
  {
    "url": "/_nuxt/8fa86400e2fce701c143.js",
    "revision": "12cc6dd20067f24d794d997988ba5ff7"
  },
  {
    "url": "/_nuxt/b36ce47f89dd26c8bdf3.js",
    "revision": "6fe121cdee056f245ad5737f786f4584"
  },
  {
    "url": "/_nuxt/bdfbaeefcdd7fc8b740a.js",
    "revision": "19a11cc2382fac87dc807633b873a84a"
  },
  {
    "url": "/_nuxt/ceb1dd04378642059ec2.js",
    "revision": "0c37ca7f82580bd6d05ad666e593d73b"
  },
  {
    "url": "/_nuxt/f7031c70783f6aeb3462.js",
    "revision": "bc8e6cbfd45b7b2cb87ab37fd8413fea"
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
