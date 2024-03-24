import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://standardrobot.dev',
  integrations: [
    sitemap(),
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
    sanity({
      projectId: 'yvcfgs0v',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
});