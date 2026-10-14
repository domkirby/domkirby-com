import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';
import remarkWpButtons from './src/plugins/remark-wp-buttons.mjs';

export default defineConfig({
  site: 'https://domkirby.com',
  output: 'static',
  adapter: cloudflare({ imageService: 'compile' }),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkWpButtons] }),
  },
});