/* Escapada a Banyoles: guarda la app en el móvil para usarla sin internet */
const V = "eb-escapada-banyoles-v8", T = "eb-escapada-banyoles-mapa"; /* solo borra sus propias copias: en github.io todas las apps comparten el mismo sitio */
const FILES = ["./", "index.html", "manifest.json", "icono.png", "icono-192.png", "favicon-32.png", "apple-touch-icon.png",
  "fotos/lago.jpg", "fotos/plaza.jpg", "fotos/monasterio.jpg", "fotos/porqueres.jpg",
  "fotos/grupo/javier3.webp", "fotos/grupo/flaco3.webp", "fotos/grupo/ramon3.webp", "fotos/grupo/elisabeth3.webp",
  "fotos/tiempo/sol.png", "fotos/tiempo/solnube.png", "fotos/tiempo/nubes.png", "fotos/tiempo/lluvia.png", "fotos/tiempo/tormenta.png",
  "fotos/comer/pedir.png", "fotos/comer/tapas.png", "fotos/comer/dulces.png", "fonts/marcellus.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => Promise.allSettled(FILES.map(f => fetch(new Request(f, { cache: "reload" })).then(r => { if (r.ok) return c.put(f, r); })))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("eb-") && k !== V && k !== T).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  if (/tile\.openstreetmap\.org/.test(r.url)) { e.respondWith(caches.open(T).then(c => c.match(r.url).then(m => m || fetch(r).then(res => { if (res.ok) c.put(r.url, res.clone()); return res; }).catch(() => new Response("", { status: 504 }))))); return; }
  const font = /fonts\.(googleapis|gstatic)\.com/.test(r.url);
  if (new URL(r.url).origin !== location.origin && !font) return;
  if (r.mode === "navigate") { e.respondWith(fetch(r.url, { cache: "no-cache" }).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; }).catch(() => caches.match(r).then(m => m || caches.match("index.html")))); return; }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const c = res.clone(); caches.open(V).then(x => x.put(r, c)); return res; })));
});
