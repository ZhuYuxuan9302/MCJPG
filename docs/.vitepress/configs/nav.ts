import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '成员服', link: '/' },
  { text: '组织规则', link: '/rules/' },
  {
    text: '团队',
    link: '/structure/',
  },
  { text: "MC导航", link: '/nav/' },
  {
    text: "社区服务",
              items: [
                { text: "MCJPG论坛", link: "https://bbs.mcjpg.org/" },
                { text: "社区图床", link: "https://image.mcjpg.org/" },
                { text: "各服务状态监测", link: "https://status.mcjpg.org/" }
              ]
  },
  {
    text: "友情链接",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "MSCPO", link: "https://mscpo.netlify.app/" },
                { text: "风梨社区", link: "https://www.flweb.cn/" },
              ]
  }
]
