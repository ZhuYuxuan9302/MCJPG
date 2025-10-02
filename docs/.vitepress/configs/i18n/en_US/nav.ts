import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/en/' },
  { text: 'Rules', link: '/en/rules/' },
  { text: "Project", link: '/en/project/' },
  {
    text: 'Team',
    link: '/en/structure/',
  },
  { text: "Columns", link: '/en/press/' },
  { text: "MC Nav", link: '/en/nav/' },
  {
    text: "Friendly Links",
              items: [
                { text: "MCFlare", link: "https://forum.mcflare.com" },
                { text: "MSCPO", link: "https://mscpo.top/" },
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "风梨网", link: "https://www.flweb.cn/" },
                { text: "BugCraft", link: "https://bugcraft.org/" },
              ]
  }
]
