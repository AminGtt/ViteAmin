import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ViteAmin",
  description: "My VitePress portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/my-avatar.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Who am I?', link: '/pages/who-am-i' },
      { text: 'My projects', link: '/pages/my-projects' },
      { text: 'Examples', link: '/pages/markdown-examples' },
      { text: 'Google', link: 'https://google.com' },
      {
        text: 'Dropdown',
        items: [
          { text: 'Item A', link: '/' },
          { text: 'Item B', link: '/' },
          { text: 'Google', link: 'https://google.com' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Me',
        items: [
          { text: 'Who am I?', link: '/pages/who-am-i' },
        ]
      },
      {
        text: 'My projects',
        items: [
          { text: 'Home', link: '/pages/my-projects' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/pages/markdown-examples' },
          { text: 'Runtime API Examples', link: '/pages/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amingtt' }
    ],
    aside: "true",
    footer: {
      message: 'Made with 💖 by Amin G',
      copyright: 'Copyright ©2023'
    },
  }
})
