import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll([...build, ...files]))
  );
}); 