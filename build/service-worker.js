/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["awesomeSheet/css/awesomeSheet.css","a8b772dddaed53f49d53b64956ba3497"],["awesomeSheet/css/awesomeSheet.min.css","ebf93983c0e0a0a9b7434ceeafec3cd3"],["awesomeSheet/css/vendor.css","b980f06480077133779ce2bb24783187"],["awesomeSheet/css/vendor.min.css","3592bee49305c85042c2c8681d55e972"],["awesomeSheet/fonts/icons/icons.eot","b61590db05974109b36e650043e24e28"],["awesomeSheet/fonts/icons/icons.svg","f4d91c89021f62b46c372464af67a3a4"],["awesomeSheet/fonts/icons/icons.ttf","48004205a4c4278df1b31c3ac902f43a"],["awesomeSheet/fonts/icons/icons.woff","6ecb517ff496d7923fcb474ecc7e1e1d"],["awesomeSheet/fonts/open-sans/open-sans-bold-italic.eot","217e561bb88d7d3d6bebf715b72dbfed"],["awesomeSheet/fonts/open-sans/open-sans-bold-italic.ttf","54152d20be5227cba086ca3092ea901e"],["awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff","7c9a2f7abbf15373d6176894eac76d99"],["awesomeSheet/fonts/open-sans/open-sans-bold-italic.woff2","1d6d47c5650d81b90e7aa20fe8d90111"],["awesomeSheet/fonts/open-sans/open-sans-bold.eot","d3e047b61c14c025434c4a18e1c3eed4"],["awesomeSheet/fonts/open-sans/open-sans-bold.ttf","eb2f9bdd71fa1a515d2b0f210eabce7a"],["awesomeSheet/fonts/open-sans/open-sans-bold.woff","a012fc5910a16e9cfc7d7529d6507ec8"],["awesomeSheet/fonts/open-sans/open-sans-bold.woff2","573ea876c76cb20e20ea806279b650b0"],["awesomeSheet/fonts/open-sans/open-sans-condensed-bold.eot","2fff27a01524360f0f86d7d2097c6fc1"],["awesomeSheet/fonts/open-sans/open-sans-condensed-bold.ttf","ddad2418ade5824090b9531ff90ff58f"],["awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff","8b82d71af711eb30ba75ae2aad24f989"],["awesomeSheet/fonts/open-sans/open-sans-condensed-bold.woff2","e656c39eeb984e9ba3eab970dcc97e62"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.eot","e9b431160632c7e9e6f86a47690d8c6f"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.ttf","ab12b2d332e77aaf3f0de3c260fa0d97"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff","5e4001fdd1ad7e1b515a3032be0210e1"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light-italic.woff2","50a0539533c0b6d803f20aac449f1acb"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light.eot","728a184e858d2d1df12a29395e89062e"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light.ttf","c913cdf509d00f33a1a48848b8673bac"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff","c47012973254c1720e3a98c1c4a9539f"],["awesomeSheet/fonts/open-sans/open-sans-condensed-light.woff2","61137440fe3cb7c3335edaa48f2e96e1"],["awesomeSheet/fonts/open-sans/open-sans-italic.eot","309ade593bd77b9d0ddc6c2bcd8d5318"],["awesomeSheet/fonts/open-sans/open-sans-italic.ttf","613bc66dc79404ca6c5bf75fdecaa025"],["awesomeSheet/fonts/open-sans/open-sans-italic.woff","3814fd1eba78acb575ba59a529d09262"],["awesomeSheet/fonts/open-sans/open-sans-italic.woff2","adedab7e50ce92cc94b80efa3fcaccbb"],["awesomeSheet/fonts/open-sans/open-sans-light-italic.eot","9077e24b8b902e86d225e0ee9563da75"],["awesomeSheet/fonts/open-sans/open-sans-light-italic.ttf","971eb5934e01282e2af8e1486dab813c"],["awesomeSheet/fonts/open-sans/open-sans-light-italic.woff","428027bbc8530c62ebe54c0e66a975ac"],["awesomeSheet/fonts/open-sans/open-sans-light-italic.woff2","8e02343794db373a41daf6c102654aee"],["awesomeSheet/fonts/open-sans/open-sans-light.eot","33f5cb2b77653e8efe192de95ba7c94e"],["awesomeSheet/fonts/open-sans/open-sans-light.ttf","c81ee1cc6db8c8fa312878417b0fbe1e"],["awesomeSheet/fonts/open-sans/open-sans-light.woff","660970bd910fed5d6207d7363d71824a"],["awesomeSheet/fonts/open-sans/open-sans-light.woff2","6fdbb5cbc99d308e282ab40b8d5ef613"],["awesomeSheet/fonts/open-sans/open-sans-regular.eot","8a71aead22fe47842e886256f12278c2"],["awesomeSheet/fonts/open-sans/open-sans-regular.ttf","2f0f36be216123a090d72eb566515491"],["awesomeSheet/fonts/open-sans/open-sans-regular.woff","d935d57aeaef8900079e0f4826608496"],["awesomeSheet/fonts/open-sans/open-sans-regular.woff2","7bb5041c87d452713b7919575c00626a"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.eot","130568dcb4a4bc5be9bcdd34ee7b81a9"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.ttf","7ec0d8dad01740d014470fc9fe15f0ab"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff","08db113a8c3a44684f46ffa523678cdb"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold-italic.woff2","9135b6495e81dfbe3d5791598492cfa0"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold.eot","beb3250a047fc8ea53eaf5151b098b6a"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold.ttf","2051311f5d19b85caa65fee862a14d24"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff","192110caca82ccdef0bc77aa9a1d5dc7"],["awesomeSheet/fonts/open-sans/open-sans-semi-bold.woff2","0e52d8029c2c5e8312c875a18e043579"],["awesomeSheet/images/apple-touch-icon.png","360c238af0fa46f0eca7afe99c036f52"],["awesomeSheet/images/boom.png","fb4afb6ba0e9199b0d54d5c249753cfc"],["awesomeSheet/images/chrome-touch-icon-192x192.png","a29973a0bfeadab52c19bb31e84abf9f"],["awesomeSheet/images/icon-128x128.png","9abb3bc7a18720fde8655befdf49e5d1"],["awesomeSheet/images/icon-512.png","d93300a7231530b5058088c06ab41443"],["awesomeSheet/images/ms-touch-icon-144x144-precomposed.png","faea373fd12907ae64275cfc4e39aa6d"],["awesomeSheet/index.html","da2bcf7b441013ac49d8093210fe6c7e"],["awesomeSheet/js/awesomeSheet.js","af6f68d6092e791dd7a08de35c00b7e7"],["awesomeSheet/js/awesomeSheet.min.js","b2f59313d34542a778feb0ea5e5ab79c"],["awesomeSheet/js/card.js","327fea5553d2a20d7bd59a4e66c0df5b"],["awesomeSheet/js/characters.js","d15a3ad1fe49c5d0a45f526b27f7bb77"],["awesomeSheet/js/characters/blank.js","8f48d40346e29eb712f27ad00409a833"],["awesomeSheet/js/characters/marika.js","6b1370145b12bb43051b390abd72f633"],["awesomeSheet/js/characters/nefi.js","a29f52deacaba77f664936d61503a806"],["awesomeSheet/js/characters/nif.js","588085670abc2772ca15d2ca177aa358"],["awesomeSheet/js/characters/orrin.js","9afe0e3cc78b732a16882123b3fd7efc"],["awesomeSheet/js/characters/ro.js","3907b0f25c69fb060d9e8c8ec0dd5aef"],["awesomeSheet/js/characters/vos.js","7bff6153ccb8e3cb2135d6a8deeb4511"],["awesomeSheet/js/check-url.js","d364cff996c2cf0b6bb0bec580ca612c"],["awesomeSheet/js/clone.js","dd707bf20c7de17256189b181bef5854"],["awesomeSheet/js/consumable.js","126ab3f5c8108418800703a1ee4a4a23"],["awesomeSheet/js/display.js","b3f79374a00b6fb6287205e8844b1fa6"],["awesomeSheet/js/fireball.js","84325f996b4df7ebf4d38516f2e2121b"],["awesomeSheet/js/fullscreen.js","2c31ed7236719b9f4a09d572ac18d09e"],["awesomeSheet/js/helper.js","5ff2f303a9f9b53ca984eec18f70a4d8"],["awesomeSheet/js/hidable-block.js","2a8349c2e727ac55b41c44ebd8360c12"],["awesomeSheet/js/init.js","5463b6c70a79b8540c757e29566377be"],["awesomeSheet/js/input-block.js","c34a0d3a0a011af2ac34676139e41af5"],["awesomeSheet/js/log.js","579d8e39f54bfa9d2c372e119c7a4f64"],["awesomeSheet/js/modal.js","6c86207b0445beb11ee690a59aa8381a"],["awesomeSheet/js/nav.js","73d077708ef854a72083840cd7b9e677"],["awesomeSheet/js/night.js","64b8b20a9b28095501768ce9c09479e8"],["awesomeSheet/js/prompt.js","3907672a6390009e9a9cca890b4cec95"],["awesomeSheet/js/register-service-worker.js","901a2f0b3c96f914afe22a716a73c171"],["awesomeSheet/js/repair.js","ba48c7e72bacf8903d9b95bf57252b89"],["awesomeSheet/js/select-block.js","2e1742e7e97c48197f78181b8767cf7f"],["awesomeSheet/js/sheet.js","b37c324283ada3ae884f3bff1b03c925"],["awesomeSheet/js/skills.js","efe80656546ce61702b1ea693a7501a7"],["awesomeSheet/js/snack.js","23908fb60c622b09f6057593d9a55411"],["awesomeSheet/js/spells.js","7c6abac988696dd4345a2ff5daea1917"],["awesomeSheet/js/stats.js","f5b8d4944a9641388c08bf49a56b8bb4"],["awesomeSheet/js/strict.js","5e60d2e13017ae982538f352d04a961c"],["awesomeSheet/js/textarea-block.js","892ea321554712c8221ab26f892130dc"],["awesomeSheet/js/theme-color.js","e7f693f5c43fd3c2ca7ba97f8efcc7e5"],["awesomeSheet/js/total-block.js","da80452cb42f1a9f7181af741438bb8e"],["awesomeSheet/js/update.js","bcd1f1d7156ae282c0a8553f1f158d2d"],["awesomeSheet/js/vendor-options.js","28573d48f97401150b288f40495cc572"],["awesomeSheet/js/vendor.min.js","6ca50350bee9b79751896bea53900736"],["awesomeSheet/style-guide.html","d2682c52246c76fd9afd420013533790"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-aS-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


/* @preserve Sat, 15 Jul 2017 17:17:53 GMT */