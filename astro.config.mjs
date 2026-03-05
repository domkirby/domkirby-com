import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import remarkWpButtons from './src/plugins/remark-wp-buttons.mjs';

export default defineConfig({
  site: 'https://domkirby.com',
  output: 'static',
  integrations: [tailwind()],
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkWpButtons],
  },
});