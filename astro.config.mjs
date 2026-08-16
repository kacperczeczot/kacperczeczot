import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isDev = process.argv.includes('dev');

export default defineConfig({
  site: 'https://kacperczeczot.github.io',
  output: 'static',
  integrations: [tailwind()],
  // Panel CMS tylko przy `astro dev`. Na GitHub Pages /admin nie istnieje.
  redirects: isDev
    ? { '/admin': '/admin/index.html' }
    : {},
});
