import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { zh_CN } from './configs/zh_CN'
import { en_US } from './configs/i18n/en_US/en_US'
import { search as zhSearch } from './configs/zh_CN'
import { search as enSearch } from './configs/i18n/en_US/en_US'
import { head , socialLinks } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-Hans',
      ...zh_CN
    },
    en: {
      label: 'English',
      lang: 'en_US',
      ...en_US
    }
  },

  head,

  lastUpdated: true,
  cleanUrls: true,

  // 站点地图
  sitemap: {
    hostname: 'https://mcjpg.org',
  },


  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    
    socialLinks,

    /* 右侧大纲配置 */

    search: {
      provider: 'algolia',
      options: {
        appId: 'VTCVHVPS1J',
        apiKey: 'c3e9345ef8310ece1bb44e178fe36dbd',
        indexName: 'mcjpg',
        locales: {
          ...zhSearch,
          // ...enSearch,

        },
      },
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})