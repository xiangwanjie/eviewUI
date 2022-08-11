const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  // base: '/EviewUI/', // 设置了不生效
  title: 'EviewUI组件库',
  description: '只是玩玩而已',
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
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
    sidebar: ['/', '/component-docs/card'],
    notFound: ['页面不存在'],
    backToHome: '返回首页'
  }),
}