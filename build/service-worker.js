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
var PrecacheConfig = [["css/awesomeSheet.css","e8fc713daf63e5a39d48d9499899095d"],["css/awesomeSheet.min.css","3b43c217dd522599d5f7920204c24072"],["css/vendor.css","b980f06480077133779ce2bb24783187"],["css/vendor.min.css","3592bee49305c85042c2c8681d55e972"],["fonts/icons/icons.eot","1f4e00683ab72894fd477c988ca0de6d"],["fonts/icons/icons.json","8acd07edab57e0ffbd71e77f0d3cd6f5"],["fonts/icons/icons.svg","dce6ce42ab8987c935061666ea6c2726"],["fonts/icons/icons.ttf","83342e9fa4711c785e9d301af2504933"],["fonts/icons/icons.woff","4c883e2b6e0a82d181cb0c0b2970e3eb"],["fonts/open-sans/open-sans-bold-italic.eot","217e561bb88d7d3d6bebf715b72dbfed"],["fonts/open-sans/open-sans-bold-italic.ttf","54152d20be5227cba086ca3092ea901e"],["fonts/open-sans/open-sans-bold-italic.woff","7c9a2f7abbf15373d6176894eac76d99"],["fonts/open-sans/open-sans-bold-italic.woff2","1d6d47c5650d81b90e7aa20fe8d90111"],["fonts/open-sans/open-sans-bold.eot","d3e047b61c14c025434c4a18e1c3eed4"],["fonts/open-sans/open-sans-bold.ttf","eb2f9bdd71fa1a515d2b0f210eabce7a"],["fonts/open-sans/open-sans-bold.woff","a012fc5910a16e9cfc7d7529d6507ec8"],["fonts/open-sans/open-sans-bold.woff2","573ea876c76cb20e20ea806279b650b0"],["fonts/open-sans/open-sans-condensed-bold.eot","2fff27a01524360f0f86d7d2097c6fc1"],["fonts/open-sans/open-sans-condensed-bold.ttf","ddad2418ade5824090b9531ff90ff58f"],["fonts/open-sans/open-sans-condensed-bold.woff","8b82d71af711eb30ba75ae2aad24f989"],["fonts/open-sans/open-sans-condensed-bold.woff2","e656c39eeb984e9ba3eab970dcc97e62"],["fonts/open-sans/open-sans-condensed-light-italic.eot","e9b431160632c7e9e6f86a47690d8c6f"],["fonts/open-sans/open-sans-condensed-light-italic.ttf","ab12b2d332e77aaf3f0de3c260fa0d97"],["fonts/open-sans/open-sans-condensed-light-italic.woff","5e4001fdd1ad7e1b515a3032be0210e1"],["fonts/open-sans/open-sans-condensed-light-italic.woff2","50a0539533c0b6d803f20aac449f1acb"],["fonts/open-sans/open-sans-condensed-light.eot","728a184e858d2d1df12a29395e89062e"],["fonts/open-sans/open-sans-condensed-light.ttf","c913cdf509d00f33a1a48848b8673bac"],["fonts/open-sans/open-sans-condensed-light.woff","c47012973254c1720e3a98c1c4a9539f"],["fonts/open-sans/open-sans-condensed-light.woff2","61137440fe3cb7c3335edaa48f2e96e1"],["fonts/open-sans/open-sans-italic.eot","309ade593bd77b9d0ddc6c2bcd8d5318"],["fonts/open-sans/open-sans-italic.ttf","613bc66dc79404ca6c5bf75fdecaa025"],["fonts/open-sans/open-sans-italic.woff","3814fd1eba78acb575ba59a529d09262"],["fonts/open-sans/open-sans-italic.woff2","adedab7e50ce92cc94b80efa3fcaccbb"],["fonts/open-sans/open-sans-light-italic.eot","9077e24b8b902e86d225e0ee9563da75"],["fonts/open-sans/open-sans-light-italic.ttf","971eb5934e01282e2af8e1486dab813c"],["fonts/open-sans/open-sans-light-italic.woff","428027bbc8530c62ebe54c0e66a975ac"],["fonts/open-sans/open-sans-light-italic.woff2","8e02343794db373a41daf6c102654aee"],["fonts/open-sans/open-sans-light.eot","33f5cb2b77653e8efe192de95ba7c94e"],["fonts/open-sans/open-sans-light.ttf","c81ee1cc6db8c8fa312878417b0fbe1e"],["fonts/open-sans/open-sans-light.woff","660970bd910fed5d6207d7363d71824a"],["fonts/open-sans/open-sans-light.woff2","6fdbb5cbc99d308e282ab40b8d5ef613"],["fonts/open-sans/open-sans-regular.eot","8a71aead22fe47842e886256f12278c2"],["fonts/open-sans/open-sans-regular.ttf","2f0f36be216123a090d72eb566515491"],["fonts/open-sans/open-sans-regular.woff","d935d57aeaef8900079e0f4826608496"],["fonts/open-sans/open-sans-regular.woff2","7bb5041c87d452713b7919575c00626a"],["fonts/open-sans/open-sans-semi-bold-italic.eot","130568dcb4a4bc5be9bcdd34ee7b81a9"],["fonts/open-sans/open-sans-semi-bold-italic.ttf","7ec0d8dad01740d014470fc9fe15f0ab"],["fonts/open-sans/open-sans-semi-bold-italic.woff","08db113a8c3a44684f46ffa523678cdb"],["fonts/open-sans/open-sans-semi-bold-italic.woff2","9135b6495e81dfbe3d5791598492cfa0"],["fonts/open-sans/open-sans-semi-bold.eot","beb3250a047fc8ea53eaf5151b098b6a"],["fonts/open-sans/open-sans-semi-bold.ttf","2051311f5d19b85caa65fee862a14d24"],["fonts/open-sans/open-sans-semi-bold.woff","192110caca82ccdef0bc77aa9a1d5dc7"],["fonts/open-sans/open-sans-semi-bold.woff2","0e52d8029c2c5e8312c875a18e043579"],["images/apple-touch-icon.png","360c238af0fa46f0eca7afe99c036f52"],["images/boom.png","fb4afb6ba0e9199b0d54d5c249753cfc"],["images/chrome-touch-icon-128x128.png","9abb3bc7a18720fde8655befdf49e5d1"],["images/chrome-touch-icon-192x192.png","a29973a0bfeadab52c19bb31e84abf9f"],["images/chrome-touch-icon-512x512.png","d93300a7231530b5058088c06ab41443"],["images/ms-touch-icon-144x144-precomposed.png","faea373fd12907ae64275cfc4e39aa6d"],["index.html","7aec57a1b04899d759949f2f18dba4b3"],["js/awesomeSheet.js","ccf19a965b84f622f802af6f0edcd0c0"],["js/awesomeSheet.min.js","6a69c7f565418851390e9e913f828207"],["js/card.js","e33dbec02d122806ddaa02d4df6e0d80"],["js/characters.js","5d28f174368beddc458c5cd847d0f839"],["js/characters/blank.js","c18ba837fbfea248dffc354de432ae94"],["js/characters/izlara.js","0e12941971af7961df659f1ff10af603"],["js/characters/marika.js","1f017be02dc00de58638045987bc5aaf"],["js/characters/nefi.js","982da15ee82da9a06e1ba91c6db8b410"],["js/characters/nif.js","2a948bd52ef0f7ff438bdd30759268f1"],["js/characters/orrin.js","fc5069f38bfb90dfd9445c5ceb6617e1"],["js/characters/ravich.js","4e4ac15d1c5040bbebf1cb0b32db28b6"],["js/characters/ro.js","d8122338bc7834cc626d3b5eda7f44b2"],["js/characters/vos.js","c8fc12afb6337ec561a49aefd25a7b08"],["js/check-url.js","d364cff996c2cf0b6bb0bec580ca612c"],["js/classes.js","60ab368778cef843d5ed08d546aa1766"],["js/clone.js","4302cb838db80e96c5b72a436f87231c"],["js/display.js","150b5ee54e9f8021dea0f5148be03c91"],["js/encumbrance.js","ff9b2c694697e8f644240866fce6fdd8"],["js/events.js","2b9a2feea10feae58ce6b26ce4abef36"],["js/fireball.js","40757e23b57e2a1494a1a6baf396bcd7"],["js/fullscreen.js","2c31ed7236719b9f4a09d572ac18d09e"],["js/helper.js","952c0dc13c83a29533cf2b407ae91a2f"],["js/init.js","524984ea66b4c1129089a2ba8f689a44"],["js/input-block.js","8980dee386b73057754ae0a0b4d0e873"],["js/log.js","42c79f0862cc43076d37164de633a514"],["js/modal.js","944088d22757394f6aee92d68f5fd2b8"],["js/nav.js","1ee654f55eb0c5f20c2092f02667421f"],["js/night.js","64b8b20a9b28095501768ce9c09479e8"],["js/page.js","4472b2ee8e749ec197fe78086318df3e"],["js/prompt.js","7f9ebf737827d36a0f35f955a131bcef"],["js/register-service-worker.js","35a3bbec91d621a350cc9908a983c674"],["js/repair.js","5cdf7855944f4801372901b4e14ad7eb"],["js/select-block.js","3f75ed8ef74c31260c8478a2ba950fc3"],["js/sheet.js","c1d1ce21034be36e59f8cc931a4d8dd9"],["js/size.js","89aaf5cc578277283d0b552e595a9a6a"],["js/skills.js","ec3ea3a86ac1662b054be7e94e665097"],["js/snack.js","23908fb60c622b09f6057593d9a55411"],["js/spells.js","32507e8b762d7cd1acbc66365a03dd3d"],["js/stats.js","38da628656610f8d05759c09e623bfdf"],["js/strict.js","5e60d2e13017ae982538f352d04a961c"],["js/tabs.js","f760318d64a234786f8f7e18491c8d85"],["js/text-block.js","7bf04ba20c4171bb25d6758fb73f470b"],["js/textarea-block.js","63930b29758a2f7b323f077bbbe127f7"],["js/theme-color.js","90b7812a8387464b7d8364ca63839009"],["js/tip.js","c180ccd11013c0a6e429a7d8b5953289"],["js/total-block.js","bea9a56ef56c270a2655eefa0af354c4"],["js/update.js","8ea302e64d130908ac7ccc51bfa1fd0f"],["js/vendor-options.js","28573d48f97401150b288f40495cc572"],["js/vendor.min.js","6ca50350bee9b79751896bea53900736"],["js/wealth.js","b584d530d5393141436bd40e81bc886e"],["manifest.json","b7a06810447173b8edc9ba5f5bbb0d24"],["style-guide.html","0bcd0632fbb24d745625a1631e91dcd5"]];
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


/* @preserve Fri, 10 Nov 2017 17:28:22 GMT */