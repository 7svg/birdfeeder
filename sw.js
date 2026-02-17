// This tells the phone your app is safe to install
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // Required to pass the PWA install test
});
