/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a65c1e7684a33359132fb3868619ad39"
  },
  {
    "url": "assets/css/0.styles.1150044b.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.1774f09e.js",
    "revision": "f4d3059f41999e9549ea85179979f2fc"
  },
  {
    "url": "assets/js/4.ac6b3bb1.js",
    "revision": "57ef0de6d0386254148e6544c825643a"
  },
  {
    "url": "assets/js/5.7c58e394.js",
    "revision": "03f0415e811b901a148d9c045f3eb408"
  },
  {
    "url": "assets/js/6.8af0afb8.js",
    "revision": "58ef8320d3e14a1a0509a4a9ca9ba40a"
  },
  {
    "url": "assets/js/7.1165f0d9.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.bf5fdcd5.js",
    "revision": "e7e61ca6662a2e09acd8762d8c9962ab"
  },
  {
    "url": "docs/libraries-and-tools.html",
    "revision": "762c96c0f8bb01ffc8a653586bbcc5bd"
  },
  {
    "url": "docs/misc.html",
    "revision": "5956a07a2916c56d6fd8e3b2a64588d5"
  },
  {
    "url": "docs/reference.html",
    "revision": "a9d3322fba874afede05ae68f016d493"
  },
  {
    "url": "index.html",
    "revision": "149207f72495a97f45d84ee1d4372d51"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
