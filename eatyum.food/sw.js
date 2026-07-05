// Service Worker for Yum PWA
const CACHE_NAME = 'yum-pwa-v2';
const OFFLINE_URL = '/';
const LOCAL_DEV_HOSTNAMES = new Set(['localhost', '127.0.0.1', '::1']);
const TUNNEL_HOST_SUFFIXES = ['.ngrok-free.dev', '.ngrok.app', '.ngrok.io', '.lhr.life', '.loca.lt'];
const IS_LOCAL_DEV =
    LOCAL_DEV_HOSTNAMES.has(self.location.hostname) ||
    self.location.hostname.endsWith('.local') ||
    TUNNEL_HOST_SUFFIXES.some((suffix) => self.location.hostname.endsWith(suffix));

// Files to cache for offline use
const STATIC_CACHE_URLS = [
    '/',
    '/manifest.json',
    '/icon-192.svg',
    '/icon-512.svg'
];

// API endpoints that should work offline (return cached data)
const API_CACHE_URLS = [
    '/api/categories',
    '/api/products',
    '/api/outlets'
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
    if (IS_LOCAL_DEV) {
        event.waitUntil(self.skipWaiting());
        return;
    }

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('SW: Caching app shell');
            return cache.addAll(STATIC_CACHE_URLS);
        })
        .then(() => {
            console.log('SW: Skip waiting');
            return self.skipWaiting();
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    if (IS_LOCAL_DEV) {
        // On local dev: clear caches but keep the service worker registered
        // so that push notifications still work during development
        event.waitUntil((async () => {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
            await self.clients.claim();
        })());
        return;
    }

    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('SW: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            console.log('SW: Claiming clients');
            return self.clients.claim();
        })
    );
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
    if (IS_LOCAL_DEV) {
        return;
    }

    const {
        request
    } = event;
    const url = new URL(request.url);

    // Handle navigation requests
    if (request.mode === 'navigate') {
        event.respondWith(networkFirstStrategy(request));
        return;
    }

    // Handle API requests
    if (url.pathname.startsWith('/api/')) {
        if (API_CACHE_URLS.some(apiUrl => url.pathname.startsWith(apiUrl))) {
            event.respondWith(networkFirstStrategy(request));
        } else {
            // For other API requests, try network only
            event.respondWith(fetch(request));
        }
        return;
    }

    // Handle static assets
    if (request.destination === 'image' ||
        request.destination === 'script' ||
        request.destination === 'style' ||
        url.pathname.includes('/assets/')) {
        event.respondWith(cacheFirstStrategy(request));
        return;
    }

    // Default strategy
    event.respondWith(networkFirstStrategy(request));
});

// Network first strategy - try network, fallback to cache
async function networkFirstStrategy(request) {
    try {
        const response = await fetch(request);

        // Cache successful responses
        if (response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        console.log('SW: Network failed, trying cache:', request.url);

        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        // If it's a navigation request and we have no cache, return offline page
        if (request.mode === 'navigate') {
            const offlineResponse = await caches.match(OFFLINE_URL);
            if (offlineResponse) {
                return offlineResponse;
            }
        }

        throw error;
    }
}

// Cache first strategy - try cache, fallback to network
async function cacheFirstStrategy(request) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const response = await fetch(request);

        if (response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        console.log('SW: Failed to fetch:', request.url);
        throw error;
    }
}

// Background sync for offline orders
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-offline-orders') {
        event.waitUntil(syncOfflineOrders());
    }
});

// Sync offline orders when back online
async function syncOfflineOrders() {
    console.log('SW: Syncing offline orders...');

    try {
        // Get offline orders from IndexedDB or postMessage to main thread
        const clients = await self.clients.matchAll();

        clients.forEach(client => {
            client.postMessage({
                type: 'SYNC_OFFLINE_ORDERS'
            });
        });

        console.log('SW: Offline orders sync initiated');
    } catch (error) {
        console.error('SW: Failed to sync offline orders:', error);
    }
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
    const {
        type,
        data
    } = event.data;

    switch (type) {
        case 'SKIP_WAITING':
            self.skipWaiting();
            break;

        case 'CACHE_URLS':
            if (data && data.urls) {
                caches.open(CACHE_NAME).then(cache => {
                    cache.addAll(data.urls);
                });
            }
            break;

        default:
            console.log('SW: Unknown message type:', type);
    }
});

// ==================== PUSH NOTIFICATIONS ====================

// Handle push notifications
self.addEventListener('push', (event) => {
    console.log('SW: Push notification received');

    let data = {
        title: 'magoka',
        body: 'You have a new notification',
        icon: '/icon-192.svg',
        badge: '/icon-192.svg',
        data: {}
    };

    try {
        if (event.data) {
            const payload = event.data.json();
            data = {
                title: payload.title || data.title,
                body: payload.body || data.body,
                icon: payload.icon || data.icon,
                badge: payload.badge || data.badge,
                image: payload.image,
                data: payload.data || {},
                tag: payload.tag,
            };
        }
    } catch (error) {
        console.error('SW: Failed to parse push data:', error);
    }

    const options = {
        body: data.body,
        icon: data.icon,
        badge: data.badge,
        image: data.image,
        data: data.data,
        tag: data.tag || 'magoka-notification',
        vibrate: [200, 100, 200],
        requireInteraction: true,
        actions: data.data ? .url ? [{
                action: 'open',
                title: 'View'
            },
            {
                action: 'close',
                title: 'Dismiss'
            }
        ] : []
    };

    event.waitUntil(
        (async () => {
            // Always show a native OS-level notification — this appears across all tabs,
            // windows, and even when the browser is minimized or on another app
            await self.registration.showNotification(data.title, options);

            // Additionally, if the app tab is active, forward to it for in-app toast display
            try {
                const clients = await self.clients.matchAll({
                    type: 'window',
                    includeUncontrolled: true
                });
                const focusedClient = clients.find((c) => c.visibilityState === 'visible');
                if (focusedClient) {
                    focusedClient.postMessage({
                        type: 'PUSH_NOTIFICATION',
                        payload: data,
                    });
                }
            } catch (e) {
                // Non-critical — native notification already shown above
            }
        })()
    );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    console.log('SW: Notification clicked');

    event.notification.close();

    const url = event.notification.data ? .url || '/';

    if (event.action === 'close') {
        return;
    }

    event.waitUntil(
        self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        })
        .then((clientList) => {
            // Check if there's already an open window
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    client.focus();
                    if (url !== '/') {
                        client.navigate(url);
                    }
                    return;
                }
            }
            // Open new window if no existing window
            if (self.clients.openWindow) {
                return self.clients.openWindow(url);
            }
        })
    );
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
    console.log('SW: Notification closed');
});

console.log('SW: Service Worker loaded');