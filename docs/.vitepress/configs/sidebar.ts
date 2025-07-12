export const sidebar = {
    '/press/': [
      {
        text: 'MCJPG组织专栏',
        items: [
          { text: '简介', link: '/press/' },
          {
            text: '特别栏目',
            base: '/press/特别栏目/',
            collapsed: false,
            items: [
                {text: '2024国庆特辑', link: '2024国庆特辑/'},
                {text: '2025新年特辑', link: '2025新年特辑/'},
                {text: 'MCJPG组织一周年特刊', link: 'MCJPG组织一周年特刊'}
            ]
          },
          {
            text: '月刊',
            base: '/press/月刊/',
            collapsed: false,
            items: [
                {text: '2024-11月', link: '2024-11月刊/'},
            ]
          },
        ]
      }
    ]
  }
  