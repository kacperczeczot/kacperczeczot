import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kacperczeczot.github.io',
  output: 'static',
  integrations: [tailwind()],
  redirects: {
    '/admin': '/admin/index.html',
  },
});
