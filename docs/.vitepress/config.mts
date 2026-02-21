import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import Lumenpkg from '@theojs/lumen/package.json' with { type: 'json' }
import { head, markdown, nav, search, sidebar, socialLinks, transformPageData } from './configs'

// 🔹 Base harus sesuai folder GitHub Pages root
const Lumenversion = `v` + Lumenpkg.version
const baseUrl = '/docs/'  // ⚡ untuk GitHub Pages /docs

export default defineConfig({
  base: baseUrl,             // 🔹 tambahkan base
  title: 'Lumen',
  description: '✨ Lumen dengan tema modern & plugin Vue',
  lang: 'id-ID',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  sitemap: { hostname: 'https://aetherdev22.github.io' },

  head,
  markdown,
  transformPageData,

  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          按需导入: 'logos:typescript-icon',
          全量导入: 'logos:typescript-icon',
          单独导入: 'logos:typescript-icon',
          svg: 'logos:svg',
          image: 'vscode-icons:file-type-image',
          '.vitepress': 'https://vitepress.dev/vitepress-logo-mini.svg',
          iconify: 'https://i.theojs.cn/logo/iconify.svg'
        }
      }),
      llmstxt({})
    ]
  },

  themeConfig: {
    siteTitle: `Lumen <code class="VPBadge tip">${Lumenversion}</code>`,
    logo: {
      src: 'https://i.theojs.cn/logo/lumen-logo-mini.svg',
      width: 24,
      height: 24,
      alt: 'lumen',
      fetchpriority: 'high'
    },
    editLink: { pattern: 'https://github.com/s-theo/lumen/edit/main/docs/:path', text: 'Berikan saran untuk halaman ini' },
    outline: 'deep',
    outlineTitle: 'Daftar Isi',
    lastUpdatedText: 'Terakhir diperbarui',
    docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
    returnToTopLabel: 'Kembali ke atas',
    sidebarMenuLabel: 'Artikel',
    lightModeSwitchTitle: 'Ganti ke mode terang',
    darkModeSwitchTitle: 'Ganti ke mode gelap',
    darkModeSwitchLabel: 'Mode Tema',
    externalLinkIcon: true,
    langMenuLabel: 'Ganti Bahasa',
    nav,
    sidebar,
    socialLinks,
    search: { provider: 'algolia', options: search },
    notFound: {
      title: 'Halaman tidak ditemukan',
      quote: 'Halaman ini hilang, mungkin sedang mencari petualangan baru!',
      linkLabel: 'Kembali ke beranda',
      linkText: 'Beranda',
      code: '404'
    }
  }
})