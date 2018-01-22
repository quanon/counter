importScripts('/counter/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "quanon.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/counter/_nuxt/app.f6e6d2a556f0e2eecc83.js",
    "revision": "27ed7de93940990a0620a23cc850c89b"
  },
  {
    "url": "/counter/_nuxt/layouts/default.90e452d43e0bde0e6a79.js",
    "revision": "69c42b38c0704cbd9f472057a9953ccc"
  },
  {
    "url": "/counter/_nuxt/manifest.62987894780524b43b76.js",
    "revision": "1a2d3eed71fb1d0353532d6fb78045e9"
  },
  {
    "url": "/counter/_nuxt/pages/index.a63a70345e8cbe40858a.js",
    "revision": "7e85e34329e86b4e6435aae199dc77cc"
  },
  {
    "url": "/counter/_nuxt/vendor.5c5e05ac5c46cc22617b.js",
    "revision": "2905e5f65a4bae80475c9775f52e29a8"
  }
])


workboxSW.router.registerRoute(new RegExp('/counter/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/counter/.*'), workboxSW.strategies.networkFirst({}), 'GET')

