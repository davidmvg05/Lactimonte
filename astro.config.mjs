import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lactimonte.com',
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
