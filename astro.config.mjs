// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Standalone marketing site for Stock4 (iCentric Systems Ltd).
  // The master brand lives at stock4.co.uk; each trade has its own app host
  // (glazing./building./plumbing./electrics.stock4.co.uk).
  site: 'https://stock4.co.uk',
  // Trailing slashes everywhere so canonical URLs, sitemap entries and the
  // actually-served URLs all match (mirrors the studio + fitness sites).
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
