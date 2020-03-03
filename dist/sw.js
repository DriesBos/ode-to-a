importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02008b09ea2a0527f7be.js",
    "revision": "62989adfc012cc2726de2583f87a53ae"
  },
  {
    "url": "/_nuxt/39010c56dc3e72ad6068.js",
    "revision": "b8480068f67596a874b4b13de6f40e04"
  },
  {
    "url": "/_nuxt/54e99a09affbbfaa73a9.js",
    "revision": "6e9fc5b31141cdac03395847e6228100"
  },
  {
    "url": "/_nuxt/629b0803bdbab854773b.js",
    "revision": "131cd8bdef0babee8a0bfc34d9446e51"
  },
  {
    "url": "/_nuxt/7419bb386db7ab4d4f8b.js",
    "revision": "3a0f2af303997c61abbbe38d9d41f3f9"
  },
  {
    "url": "/_nuxt/83e8e2464273e97ddff0.js",
    "revision": "0526ba90fa229f396b57bacb807088d1"
  },
  {
    "url": "/_nuxt/a3af865a759f4f473870.js",
    "revision": "730c8e6f74f55059a9f6678fd4549390"
  },
  {
    "url": "/_nuxt/ac4d05090c14653f659b.js",
    "revision": "c7d22a389c772d011aa99316cced3363"
  },
  {
    "url": "/_nuxt/c61eaa7ff872a9fc387b.js",
    "revision": "38c629f590d50fb8a767acd60450d526"
  },
  {
    "url": "/_nuxt/cba31eba8ef28588392a.js",
    "revision": "769c171991fa9ec20e8c60b94f2a29a4"
  },
  {
    "url": "/_nuxt/d2a7ce2531c61836828d.js",
    "revision": "ac986a25827076f6383bc0edd70ba1ed"
  },
  {
    "url": "/_nuxt/e3334a0be5c12203ef0e.js",
    "revision": "2cb4c2590c8f085b0ccc0db15b7853fb"
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
