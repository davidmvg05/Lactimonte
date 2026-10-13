import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://davidmvg05.github.io',
  base: '/Lactite',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  compressHTML: true,
  redirects: {
    '/noticias': '/mural',
    '/a-lactimonte': '/marca',
    '/mar': '/marca',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
