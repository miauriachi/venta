const CACHE='oferton-v4';
const FILES=['./','./index.html','./manifest.json','./laptop-frente.jpg','./laptop-abierta.jpg','./laptop-cerrada.jpg','./laptop-specs-1.jpg','./laptop-specs-2.jpg','./laptop-base-1.jpg','./laptop-base-2.jpg','./laptop-base-3.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
