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
                {text: '一周年特辑', link: '一周年特辑/'},
                {text: '2025国庆特辑', link: '2025国庆特辑/'},
                {text: '论坛合作', link: '论坛合作/'},
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
  
