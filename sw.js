const CACHE_NAME = 'matematik-sinav-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './questions.js',
  './app.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/graph-soru3.svg',
  './lib/katex.min.css',
  './lib/katex.min.js',
  './lib/auto-render.min.js',
  './lib/fonts/KaTeX_Main-Regular.woff2',
  './lib/fonts/KaTeX_Main-Bold.woff2',
  './lib/fonts/KaTeX_Main-Italic.woff2',
  './lib/fonts/KaTeX_Math-Italic.woff2',
  './lib/fonts/KaTeX_Math-BoldItalic.woff2',
  './lib/fonts/KaTeX_Size1-Regular.woff2',
  './lib/fonts/KaTeX_Size2-Regular.woff2',
  './lib/fonts/KaTeX_Size3-Regular.woff2',
  './lib/fonts/KaTeX_Size4-Regular.woff2',
  './lib/fonts/KaTeX_AMS-Regular.woff2',
  './lib/fonts/KaTeX_Caligraphic-Regular.woff2',
  './lib/fonts/KaTeX_Fraktur-Regular.woff2',
  './lib/fonts/KaTeX_SansSerif-Regular.woff2',
  './lib/fonts/KaTeX_Script-Regular.woff2',
  './lib/fonts/KaTeX_Typewriter-Regular.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
