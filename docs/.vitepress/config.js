import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue3 Components',
  description: '基于Vue3、TailwindCss的组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '组件API',
        collapsed: true,
        items: [
          { text: 'Input 组件', link: '/api/input' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '组件案例分析',
        collapsed: true,
        items: [
          { text: 'Input 组件', link: '/components/input' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
