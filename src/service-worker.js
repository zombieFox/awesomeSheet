var chaceName = "awesomeSheetCacheV1.0.0";
var urlsToCache = [
  "/awesomeSheet/",
  "/awesomeSheet/css/vendor.min.css",
  "/awesomeSheet/css/awesomeSheet.min.css",
  "/awesomeSheet/images/boom.png",
  "/awesomeSheet/images/apple-touch-icon.png",
  "/awesomeSheet/images/chrome-touch-icon-192x192.png",
  "/awesomeSheet/images/icon-128x128.png",
  "/awesomeSheet/images/icon-512.png",
  "/awesomeSheet/images/ms-touch-icon-144x144-precomposed.png",
  "/awesomeSheet/index.html",
  "/awesomeSheet/manifest.json",
  "/awesomeSheet/js/awesomeSheet.min.js",
  "/awesomeSheet/js/vendor.min.js",
  "/awesomeSheet/fonts/icons/icons.eot",
  "/awesomeSheet/fonts/icons/icons.woff",
  "/awesomeSheet/fonts/icons/icons.json",
  "/awesomeSheet/fonts/icons/icons.ttf",
  "/awesomeSheet/fonts/icons/icons.svg",
  "/awesomeSheet/fonts/open-sans/open-sans-bold-italic.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-bold.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-bold.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-bold.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-bold.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-italic.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-italic.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-italic.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-light-italic.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-light-italic.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-light-italic.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-light.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-light.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-light.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-regular.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-regular.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-regular.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold.eot",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff2",
  "/awesomeSheet/fonts/open-sans/open-sans-bold-italic.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-bold.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-bold.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-condensed-light.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-italic.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-light-italic.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-light.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-regular.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.ttf",
  "/awesomeSheet/fonts/open-sans/open-sans-semi-bold.ttf"
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
