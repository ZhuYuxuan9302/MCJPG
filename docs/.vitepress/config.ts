import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { zh_CN } from './configs/zh_CN'
import { en_US } from './configs/i18n/en_US/en_US'
import { lch } from './configs/i18n/zh-classical/zh_classical'
import { search as zhSearch } from './configs/zh_CN'
// import { search as enSearch } from './configs/i18n/en_US/en_US'
import { search as lzhSearch } from './configs/i18n/zh-classical/zh_classical'
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
    },
    lch: {
      label: '文言',
      lang: 'zh-classical',
      ...lch
    },
  },

  head,

  lastUpdated: true,
  cleanUrls: true,

  // 站点地图
  sitemap: {
    hostname: 'https://mcjpg.org',
  },

  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    },
  },


  /* 主题配置 */
  themeConfig: {
    i18nRouting: true,
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
          ...lzhSearch,

        },
      },
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  },
})