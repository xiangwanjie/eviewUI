const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: 'GitHub',
        link: '/foo/',
      },
      {
        text: 'Npm',
        link: 'https://www.npmjs.com/package/eview-ui',
      },
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '快速开始',
        link: '/'
      },
      {
        text: 'Card',
        link: '/component-docs/card'
      }
    ],
  }),
}