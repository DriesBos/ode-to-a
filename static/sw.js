importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f2cad8fae0c8ac4facc.js",
    "revision": "979388d45f23e4a3aba5f891d3b4f1a6"
  },
  {
    "url": "/_nuxt/313822602fa737d5b8cb.js",
    "revision": "0f9798443b340336e5a3dba2c16cdff2"
  },
  {
    "url": "/_nuxt/321ac2500b667d900f49.js",
    "revision": "9e664182d3e36d9bc47dd75430343a82"
  },
  {
    "url": "/_nuxt/33866e87e99f928aac2a.js",
    "revision": "b5d419c6059b40667f75e2e19ba6cc36"
  },
  {
    "url": "/_nuxt/4f9a07ff6070b077a70e.js",
    "revision": "1d8f4d67f0080f948982269b8c9b11be"
  },
  {
    "url": "/_nuxt/5e74d9311319bb285345.js",
    "revision": "a269ad00797841124b49d4bce2c4b3e6"
  },
  {
    "url": "/_nuxt/6223827d3ba5a1d52db3.js",
    "revision": "42bd4e4313721cc449c67d7179421fee"
  },
  {
    "url": "/_nuxt/882670c25b7a78df4454.js",
    "revision": "1ebf08c7c709cfb89293cadfd85420e6"
  },
  {
    "url": "/_nuxt/8d015a51044f7e6a445a.js",
    "revision": "842314c74fa37509e2fc771a301a358d"
  },
  {
    "url": "/_nuxt/92c69a968edb424eaace.js",
    "revision": "09a0aee830b6a9451a1a6456616ae124"
  },
  {
    "url": "/_nuxt/9a5113a828ca40de8f28.js",
    "revision": "12f7fa13a86a662097164b0d0586e46c"
  },
  {
    "url": "/_nuxt/d22c25eb14ba97aaef37.js",
    "revision": "d972b8b3639bf2a89047049ff0483e8f"
  },
  {
    "url": "/_nuxt/e9f7a279645499cd1ada.js",
    "revision": "3b089fbe84f0706852fd3a8d826d5977"
  },
  {
    "url": "/_nuxt/f1dd777e9fd249229a06.js",
    "revision": "b0a57d771427fab70cd9a157652741ff"
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
