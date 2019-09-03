/*
const CACHE_APPSHELL_NAME = 'tiket-v004';
const CACHE_RUNTIME = 'runtime';
const CACHE_LOGO = 'tiket-logo';
const CACHE_STORE = 'tiket-store';

const CACHE_AS_FILES = [
	'/',
  '/index.html',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  '/manifest.webmanifest',
  '/assets/img/favicon.png',
  '/assets/icons/icon-144x144.png'
];

self.addEventListener('install', e => {
    const prm1 = caches.open(CACHE_APPSHELL_NAME).then(ch => {
      return ch.addAll(CACHE_AS_FILES)
    });  
   
    e.waitUntil(prm1);
  
});

//Removing outdated caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_APPSHELL_NAME, CACHE_RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Cache any new resources as they are fetched
self.addEventListener('fetch', e => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (e.request.url.startsWith(self.location.origin)) {
    e.respondWith(
      caches.match(e.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(CACHE_RUNTIME).then(cache => {
          return fetch(e.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(e.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

*/