import { defineConfig, type DefaultTheme } from 'vitepress'
import {  nav, sidebar, } from './'

export const en_US = defineConfig({
    title: 'MCJPG 組織網站',
    description: '礦藝伺服器宣傳組織（MCJPG）——促進礦藝技藝交流與伺服器宣傳之組織',

    themeConfig: {
        siteTitle: 'MCJPG 組織',
        nav,
        sidebar,
        editLink: {
            pattern: 'https://github.com/MineJPGcraft/MCJPG/edit/main/docs/:path',
            text: '於 GitHub 處改此卷'
          },
        
        outline: {
            level: 'deep',
            label: '卷之索引',
          },
      
        footer: {
            message: 'MCJPG 伺服器宣傳組織',
            copyright: '版權所有 © 2024-今 <a href="https://mcjpg.org/">MCJPG</a>— —<a href="https://github.com/MineJPGcraft/MCJPG">網站之存儲庫</a>'
          },
      
        lastUpdated: {
        text: '最後更新',
            formatOptions: {
              dateStyle: 'short',
              timeStyle: 'medium',
            },
          },
      
        docFooter: {
            prev: '上卷',
            next: '下卷',
          },
      
        returnToTopLabel: '歸卷首',
        sidebarMenuLabel: 'menu',
        darkModeSwitchLabel: '陰陽',
        lightModeSwitchTitle: '陽',
        darkModeSwitchTitle: '陰',

        
    }
})

// export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
//     en: {
//       placeholder: '覓卷',
//       translations: {
//         button: {
//           buttonText: '覓卷',
//           buttonAriaLabel: '覓卷'
//         },
//         modal: {
//           searchBox: {
//             resetButtonTitle: '重置',
//             resetButtonAriaLabel: '重置',
//             cancelButtonText: '退',
//             cancelButtonAriaLabel: '退'
//           },
//           startScreen: {
//             recentSearchesTitle: '覓卷之歷史',
//             noRecentSearchesText: '無覓卷之歷史',
//             saveRecentSearchButtonTitle: '存儲覓卷之歷史',
//             removeRecentSearchButtonTitle: '從覓卷之歷史移除',
//             favoriteSearchesTitle: '藏',
//             removeFavoriteSearchButtonTitle: '中移藏以除之'
//           },
//           errorScreen: {
//             titleText: '未果',
//             helpText: '君其须連網焉'
//           },
//           footer: {
//             selectText: '择',
//             navigateText: '换',
//             closeText: '退',
//             searchByText: '覓供者'
//           },
//           noResultsScreen: {
//             noResultsText: '無果',
//             suggestedQueryText: '君可試覓',
//             reportMissingResultsText: '君以询宜得终？',
//             reportMissingResultsLinkText: '匯報'
//           }
//         }
//       }
//     }
//   }