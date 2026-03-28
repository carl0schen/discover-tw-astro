// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links'; // 引入外掛

// https://astro.build/config
export default defineConfig({
  site: 'https://test1234.discover.tw',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  // 新增 Markdown 解析器設定
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          // 遇到外部連結時，自動加上 target="_blank" (開新分頁)
          target: '_blank',
          // 自動加上安全性防護標籤
          rel: ['noopener', 'noreferrer']
        }
      ]
    ]
  }
});
