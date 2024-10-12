import { defineConfig, type DefaultTheme } from 'vitepress'
import {  nav, sidebar, } from './'

export const en_US = defineConfig({
    title: 'MCJPG Organisation Website',
    description: 'Minecraft Server Communication Group (MCJPG) - an up-and-coming organisation dedicated to Minecraft technical communication and server promotion.',

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

    themeConfig: {
        siteTitle: 'MCJPG Organisation',
        nav,
        sidebar,
        editLink: {
            pattern: 'https://github.com/MineJPGcraft/MCJPG/edit/main/docs/:path',
            text: 'Edit this page'
          },
        
        outline: {
            level: 'deep',
            label: 'Page navigation',
          },
      
        footer: {
            message: 'MCJPG Server Exchange Organisation',
            copyright: 'Copyright © 2024-present <a href="https://mcjpg.org/">MCJPG</a>— —<a href="https://github.com/MineJPGcraft/MCJPG">Repository for website</a>'
          },
      
        lastUpdated: {
        text: 'Last updated',
            formatOptions: {
              dateStyle: 'short',
              timeStyle: 'medium',
            },
          },
      
        docFooter: {
            prev: 'Last Page',
            next: 'Next Page',
          },
      
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'menu',
        darkModeSwitchLabel: 'Display mode',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',

        
    }
})

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    en: {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }