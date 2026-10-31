const CACHE_NAME = 'pepito-v3-5-pwa';
const APP_SHELL = ['./','./index.html','./manifest.webmanifest','./icons/pepito-192.svg','./icons/pepito-512.svg','./assets/pipito-avatar-v4.svg','./assets/pipito-voando-v1.png','./assets/pipito-globo-v3.png','./assets/pipito-calmo-v3.png','./assets/pipito-retrato-v3.png','./assets/pipito-curioso-v3.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy)); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)); }
    return response;
  }).catch(() => caches.match('./index.html'))));
});

