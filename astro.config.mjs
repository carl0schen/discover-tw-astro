// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://discover.tw',

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener', 'noreferrer']
          }
        ]
      ]
    })
  },

  integrations: [sitemap()]
});
