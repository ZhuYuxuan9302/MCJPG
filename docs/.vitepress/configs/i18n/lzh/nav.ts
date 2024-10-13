import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '家', link: '/en/' },
  { text: '則', link: '/en/rules/' },
  {
    text: '隊',
    link: '/en/structure/',
  },
  { text: "柱", link: '/en/press/' },
  { text: "礦藝索引", link: '/en/nav/' },
  {
    text: "Services",
              items: [
                { text: "MCJPG 社區", link: "https://com.mcjpg.org/" },
                { text: "社區圖床", link: "https://image.mcjpg.org/" },
                { text: "伺服器狀態", link: "https://status.mcjpg.org/" }
              ]
  },
  {
    text: "Friendly Links",
              items: [
                { text: "随风之站點", link: "https://zhuyuxuan.link/" },
                { text: "MSCPO", link: "https://mscpo.netlify.app/" },
                { text: "风梨社區", link: "https://www.flweb.cn/" },
              ]
  }
]
