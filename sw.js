const CACHE_NAME = "simpati-pwa-v1";
self.addEventListener("install", function(event) {
  self.skipWaiting();
});
self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request).catch(function() {
    return new Response("Koneksi internet diperlukan untuk membuka aplikasi.", { headers: { "Content-Type": "text/plain" } });
  }));
});
