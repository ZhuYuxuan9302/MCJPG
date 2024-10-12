import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Members', link: '/en/' },
  { text: 'Rules', link: '/en/rules/' },
  {
    text: 'Team',
    link: '/en/structure/',
  },
  { text: "Columns", link: '/en/press/' },
  { text: "MC Nav", link: '/en/nav/' },
  {
    text: "Services",
              items: [
                { text: "MCJPG Community", link: "https://com.mcjpg.org/" },
                { text: "Community Img hub", link: "https://image.mcjpg.org/" },
                { text: "Service status", link: "https://status.mcjpg.org/" }
              ]
  },
  {
    text: "Friendly Links",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "MSCPO", link: "https://mscpo.netlify.app/" },
                { text: "风梨社区", link: "https://www.flweb.cn/" },
              ]
  }
]
