/* Service worker: bikin app bisa di-install & jalan offline.
   Naikkan VERSI kalau kamu ganti daftar SHELL. File html/css/js otomatis
   diambil terbaru dari jaringan (network-first), jadi update biasa tidak perlu ganti VERSI. */
const VERSI = 'ph-v2';
const SHELL = ['./', 'index.html', 'style.css', 'app.js', 'kontrol.js', 'sosial.js',
  'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSI)
      .then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSI).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  /* audio: biarkan browser yang urus (butuh Range request, file besar) */
  if (r.headers.has('range') || /\.(mp3|m4a|ogg|wav|mp4)$/i.test(u.pathname)) return;

  /* gambar: cache dulu, kalau belum ada ambil lalu simpan */
  if (/\.(jpe?g|png|webp|gif|svg|ico)$/i.test(u.pathname)) {
    e.respondWith(
      caches.match(r).then(hit => hit || fetch(r).then(res => {
        if (res.ok) { const cp = res.clone(); caches.open(VERSI).then(c => c.put(r, cp)); }
        return res;
      }))
    );
    return;
  }

  /* html/css/js/manifest: jaringan dulu (selalu terbaru), cadangan dari cache saat offline */
  e.respondWith(
    fetch(r).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(VERSI).then(c => c.put(r, cp)); }
      return res;
    }).catch(() =>
      caches.match(r).then(hit => hit || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()))
    )
  );
});
