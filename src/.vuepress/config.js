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
    repo: 'W-FE/code-guide',
    editLinks: true,
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
          '/guide/naming',
          '/guide/html',
          '/guide/css',
          '/guide/javascript',
        ],
        lastUpdated: '上次更新',
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
        lastUpdated: 'Last Updated',
      }
    }
  },
  dest: "./docs/",
  plugins: [
    ["@vuepress/back-to-top"],
    ['@vuepress/last-updated']
  ]
}