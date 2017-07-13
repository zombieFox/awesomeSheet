var chaceName = "awesomeSheetCacheV1.0.0";
var urlsToCache = [
  "/",
  "/css/vendor.min.css",
  "/css/awesomeSheet.min.css",
  "/images/boom.png",
  "/images/apple-touch-icon.png",
  "/images/chrome-touch-icon-192x192.png",
  "/images/icon-128x128.png",
  "/images/icon-512.png",
  "/images/ms-touch-icon-144x144-precomposed.png",
  "/index.html",
  "/manifest.json",
  "/js/awesomeSheet.min.js",
  "/js/vendor.min.js",
  "/fonts/icons/icons.eot",
  "/fonts/icons/icons.woff",
  "/fonts/icons/icons.json",
  "/fonts/icons/icons.ttf",
  "/fonts/icons/icons.svg",
  "/fonts/open-sans/open-sans-bold-italic.eot",
  "/fonts/open-sans/open-sans-bold-italic.woff",
  "/fonts/open-sans/open-sans-bold-italic.woff2",
  "/fonts/open-sans/open-sans-bold.eot",
  "/fonts/open-sans/open-sans-bold.woff",
  "/fonts/open-sans/open-sans-bold.woff2",
  "/fonts/open-sans/open-sans-condensed-bold.eot",
  "/fonts/open-sans/open-sans-condensed-bold.woff",
  "/fonts/open-sans/open-sans-condensed-bold.woff2",
  "/fonts/open-sans/open-sans-condensed-light-italic.eot",
  "/fonts/open-sans/open-sans-condensed-light-italic.woff",
  "/fonts/open-sans/open-sans-condensed-light-italic.woff2",
  "/fonts/open-sans/open-sans-condensed-light.eot",
  "/fonts/open-sans/open-sans-condensed-light.woff",
  "/fonts/open-sans/open-sans-condensed-light.woff2",
  "/fonts/open-sans/open-sans-italic.eot",
  "/fonts/open-sans/open-sans-italic.woff",
  "/fonts/open-sans/open-sans-italic.woff2",
  "/fonts/open-sans/open-sans-light-italic.eot",
  "/fonts/open-sans/open-sans-light-italic.woff",
  "/fonts/open-sans/open-sans-light-italic.woff2",
  "/fonts/open-sans/open-sans-light.eot",
  "/fonts/open-sans/open-sans-light.woff",
  "/fonts/open-sans/open-sans-light.woff2",
  "/fonts/open-sans/open-sans-regular.eot",
  "/fonts/open-sans/open-sans-regular.woff",
  "/fonts/open-sans/open-sans-regular.woff2",
  "/fonts/open-sans/open-sans-semi-bold-italic.eot",
  "/fonts/open-sans/open-sans-semi-bold-italic.woff",
  "/fonts/open-sans/open-sans-semi-bold-italic.woff2",
  "/fonts/open-sans/open-sans-semi-bold.eot",
  "/fonts/open-sans/open-sans-semi-bold.woff",
  "/fonts/open-sans/open-sans-semi-bold.woff2",
  "/fonts/open-sans/open-sans-bold-italic.ttf",
  "/fonts/open-sans/open-sans-bold.ttf",
  "/fonts/open-sans/open-sans-condensed-bold.ttf",
  "/fonts/open-sans/open-sans-condensed-light-italic.ttf",
  "/fonts/open-sans/open-sans-condensed-light.ttf",
  "/fonts/open-sans/open-sans-italic.ttf",
  "/fonts/open-sans/open-sans-light-italic.ttf",
  "/fonts/open-sans/open-sans-light.ttf",
  "/fonts/open-sans/open-sans-regular.ttf",
  "/fonts/open-sans/open-sans-semi-bold-italic.ttf",
  "/fonts/open-sans/open-sans-semi-bold.ttf"
];

self.addEventListener("install", function(event) {
  console.log("Service Worker Installed");
  // Perform install steps
  event.waitUntil(
    caches.open(chaceName)
    .then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
    .then(function() {
      self.skipWaiting();
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        console.log("served from cache ->", response);
        return response;
      }
      return fetch(event.request);
    })
  );
});
