import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '成員伺服器', link: '/lch/' },
  { text: '組織規則', link: '/lch/rules/' },
  { text: "項目", link: '/lch/project/' },
  {
    text: '團隊',
    link: '/lch/structure/',
  },
  { text: "組織專欄", link: '/lch/press/' },
  { text: "礦藝索引", link: '/lch/nav/' },
  {
    text: "友情鏈接",
              items: [
                { text: "MCFlare", link: "https://forum.mcflare.com" },
                { text: "MSCPO", link: "https://mscpo.top/" },
                { text: "隨風的個人網站", link: "https://zhuyuxuan.link/" },
                { text: "鳳梨社區", link: "https://www.flweb.cn/" },
                { text: "BugCraft", link: "https://bugcraft.org/" },
              ]
  }
]
