var CACHE_NAME = 'klatos-v5';
var urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/manifest.webmanifest',
  '/lang/id.json',
  '/lang/en.json',
  '/database/forum.json',
  '/icons/logo-mark.svg',
  '/icons/logoklatos.svg',
  '/icons/icon-192x192.svg',
  '/icons/icon-512x512.svg',
  '/pages/home/index.html',
  '/pages/technology/index.html',
  '/pages/docs/index.html',
  '/pages/download/index.html',
  '/pages/roadmap/index.html',
  '/pages/releases/index.html',
  '/pages/developers/index.html',
  '/pages/blog/index.html',
  '/pages/forum/index.html',
  '/pages/about/index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(urlsToCache.map(function(url) {
        return cache.add(url).catch(function() { return null; });
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name) { return caches.delete(name); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  // HTML shell: always prefer fresh network copy so content updates show up immediately.
  if (event.request.mode === 'navigate' || /\.html$/.test(event.request.url)) {
    event.respondWith(
      fetch(event.request).then(function(res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
        }
        return res;
      }).catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match('/index.html');
        });
      })
    );
    return;
  }

  // Static assets: serve cache, refresh in background.
  event.respondWith(
    caches.match(event.request).then(function(response) {
      var network = fetch(event.request).then(function(res) {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, copy);
        });
        return res;
      }).catch(function() {
        return response;
      });
      return response || network;
    })
  );
});