import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://domkirby.com',
  output: 'static',
  integrations: [tailwind()],
  adapter: cloudflare(),
});