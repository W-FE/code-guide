module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '代码规范',
      description: '沃民高新科技前端团队代码规范'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Code Guide',
      description: ''
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/imgs/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    repo: 'w-fe/code-guide',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '关于我们',
            link: '/about/'
          }
        ],
        sidebar: [
          ['/', '介绍'],
          '/guide/',
          '/guide/naming'
        ],
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          },
          {
            text: 'About',
            link: '/en/about/'
          }
        ],
        sidebar: [
          ['/en/', 'Introduction'],
          '/en/guide/'
        ],
      }
    }
  },
  desc: "/dist/",
  plugins: [
    ["@vuepress/back-to-top"],
    ['@vuepress/last-updated']
  ]
}