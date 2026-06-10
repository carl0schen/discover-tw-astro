// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark'; // 新增：引入 unified
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://discover-tw-astro.pages.dev',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    // 改用 processor + unified() 取代舊的 rehypePlugins
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
  }
});
