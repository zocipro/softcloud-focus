import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  vite: { environments: { ssr: { resolve: { noExternal: [/^react-icons/] } }, prerender: { resolve: { noExternal: [/^react-icons/] } } } },
  integrations: [
    react(),
    AstroPWA({
      manifest: {
        background_color: '#f7fbfe',
        description: '环境声音混音、专注计时，给自己一点安静。',
        display: 'standalone',
        icons: [
          ...[72, 128, 144, 152, 192, 256, 512].map(size => ({
            sizes: `${size}x${size}`,
            src: `/assets/pwa/${size}.png`,
            type: 'image/png',
          })),
        ],
        name: '软云专注',
        orientation: 'any',
        scope: '/',
        short_name: '软云专注',
        start_url: '/',
        theme_color: '#f7fbfe',
      },
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{html,js,css,png,svg,ico,webp,webmanifest}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        runtimeCaching: [{
          urlPattern: /\/sounds\/.*\.mp3$/,
          handler: 'CacheFirst',
          options: { cacheName: 'softcloud-audio', rangeRequests: true, expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 }, cacheableResponse: { statuses: [200] } },
        }],
        navigateFallback: '/',
      },
    }),
  ],
});
