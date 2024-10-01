import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'MCJPG组织网站',
  description: 'Minecraft服务器集体宣传组织 (MCJPG)-一个致力于Minecraft技术交流和服务器宣传的新兴组织',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    siteTitle: 'MCJPG组织',
    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '页面导航',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/MineJPGcraft/MCJPG' }],

    footer: {
      message: 'MCJPG服务器宣传组织',
      copyright: 'Copyright © 2024-present <a href="https://mcjpg.org/">MCJPG</a>— —<a href="https://github.com/MineJPGcraft/MCJPG">我们的仓库</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/

    comment: {
      repo: 'ZhuYuxuan9302/MCJPG',
      repoId: 'R_kgDOMmsvSA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMmsvSM4Ch7NT',
      
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
