var cacheName = "1.0.0";
var devUrlsToCache = [
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

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');
  // e.waitUntil Delays the event until the Promise is resolved
  e.waitUntil(
    // Open the cache
    caches.open(cacheName).then(function(cache) {
      // Add all the default files to the cache
      console.log('[ServiceWorker] Caching devUrlsToCache');
      return cache.addAll(devUrlsToCache);
    })
    .then(function() {
      self.skipWaiting();
    })
  ); // end e.waitUntil
});
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');
  e.waitUntil(
    // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        // If a cached item is saved under a previous cacheName
        if (thisCacheName !== cacheName) {
          // Delete that cached file
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  ); // end e.waitUntil
});
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  // e.respondWidth Responds to the fetch event
  e.respondWith(
    // Check in cache for the request being made
    caches.match(e.request)
    .then(function(response) {
      // If the request is in the cache
      if (response) {
        console.log("[ServiceWorker] Found in Cache", e.request.url, response);
        // Return the cached version
        return response;
      }
      // If the request is NOT in the cache, fetch and cache
      var requestClone = e.request.clone();
      fetch(requestClone)
        .then(function(response) {
          if (!response) {
            console.log("[ServiceWorker] No response from fetch ")
            return response;
          }
          var responseClone = response.clone();
          //  Open the cache
          caches.open(cacheName).then(function(cache) {
            // Put the fetched response in the cache
            cache.put(e.request, responseClone);
            console.log('[ServiceWorker] New Data Cached', e.request.url);
            // Return the response
            return response;

          }); // end caches.open
        })
        .catch(function(err) {
          console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
        });
    }) // end caches.match(e.request)
  ); // end e.respondWith
});
