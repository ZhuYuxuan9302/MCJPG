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
  description: 'Minecraft服务器集体宣传组织 (MSJPG)-一个致力于Minecraft技术交流和服务器宣传的新兴组织',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    siteTitle: 'MCJPG组织', //站点标题
    description: '一个Minecraft服务器宣传组织',//MCJPG
    logo: '/logo.png',

    nav: [
        { text: "成员服", link: "/" },
        { text: "规则", link: "/rules/" },
        { text: "组织架构", link: "/structure/" },
        { text: "状态监测", link: "https://status.mcjpg.org/" },
        {
          text: "友情链接",
          items: [
            { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
            { text: "金苹果论坛", link: "https://mcodw.com/" },
            { text: "笨蛋开服指南", link: "https://yizhan.wiki/NitWikit/" },
            { text: "风梨影视", link: "https://v.flweb.cn/" }
          ]
        }
  ],
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
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
    visitor: {
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    comment: {
      repo: 'maomao1996/vitepress-nav-template',
      repoId: 'R_kgDOJC09Jg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJC09Js4Cekn0',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
