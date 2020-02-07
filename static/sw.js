importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a9c26a6d161f6086583.js",
    "revision": "3fbc38b53dc824a2fef369575e43d42d"
  },
  {
    "url": "/_nuxt/2297242dc5b406898ef4.js",
    "revision": "d69db4b49518835231f7f45ca4877828"
  },
  {
    "url": "/_nuxt/3c18775a42c9c78f183e.js",
    "revision": "ff74884d27ab4c2412715a472de34642"
  },
  {
    "url": "/_nuxt/4f8fc2bb62a3ae44026a.js",
    "revision": "fd789d99814659d61e30ea79a22e4c46"
  },
  {
    "url": "/_nuxt/74236849588e9508b08b.js",
    "revision": "368796911c765f73abb228b770f54915"
  },
  {
    "url": "/_nuxt/850a20a8ec2f9dd18d1f.js",
    "revision": "aa12551f4d8b5e11b218f0aa5e41f17a"
  },
  {
    "url": "/_nuxt/8ae009e6e9e0c96f7bc0.js",
    "revision": "5b0f0e472623762c3a34bc0a3a4d4551"
  },
  {
    "url": "/_nuxt/b53cce79bb1c743c0235.js",
    "revision": "41ea26ecb654772b7b2ddf0531394c8d"
  },
  {
    "url": "/_nuxt/ba0404922877b50420be.js",
    "revision": "6066e7f96e6ed5a46b2fe13b71581ed5"
  },
  {
    "url": "/_nuxt/f039dd3bea4033b07859.js",
    "revision": "a5fc4c9a0b081fdf1f51e6e2c1001426"
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
