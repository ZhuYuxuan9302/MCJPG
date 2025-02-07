import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/en/' },
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
                { text: "Community Img hub", link: "https://image.mcjpg.org/" },
                { text: "Markdown Editor", link: "https://editor.mcjpg.org/" },
                { text: "Service status", link: "https://status.mcjpg.org/" },
                { text: "Service status(Backup)", link: "https://bstatus.mcjpg.org/" },
              ]
  },
  {
    text: "Friendly Links",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "MSCPO", link: "https://mscpo.netlify.app/" },
                { text: "风梨社区", link: "https://bugcraft.org/" },
              ]
  }
]
