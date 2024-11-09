import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '成員伺服器', link: '/lch/' },
  { text: '組織規則', link: '/lch/rules/' },
  {
    text: '團隊',
    link: '/lch/structure/',
  },
  { text: "組織專欄", link: '/lch/press/' },
  { text: "礦藝索引", link: '/lch/nav/' },
  {
    text: "社區服務",
              items: [
                { text: "社區圖床", link: "https://image.mcjpg.org/" },
                { text: "各服務狀態監測", link: "https://status.mcjpg.org/" },
                { text: "各服務狀態監測(備用)", link: "https://image.mcjpg.org/" },
              ]
  },
  {
    text: "友情鏈接",
              items: [
                { text: "隨風的個人網站", link: "https://zhuyuxuan.link/" },
                { text: "MSCPO", link: "https://mscpo.netlify.app/" },
                { text: "鳳梨社區", link: "https://www.flweb.cn/" },
              ]
  }
]
