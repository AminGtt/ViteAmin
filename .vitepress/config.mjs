import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ViteAmin/',
  head: [['link', { rel: 'icon', href: '/ViteAmin/img/my-avatar.png' }]],
  title: "ViteAmin",
  description: "My VitePress portfolio",
  locales: {
    root: {
      label: 'English'
    },
    fr: { 
      label: 'Français', 
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Qui suis-je?', link: '/fr/pages/who-am-i' },
          { text: 'Mes projets', link: '/fr/pages/my-projects' },
          { text: 'Mon matos', link: '/fr/pages/my-stuff' },
          { text: 'Mes logiciels', link: '/fr/pages/my-softwares' },
        ],
        sidebar: [
          {
            text: 'Moi',
            items: [
              { text: 'Qui suis-je?', link: '/fr/pages/who-am-i' },
            ]
          },
          {
            text: 'Mes projets',
            items: [
              { text: 'Global', link: '/fr/pages/my-projects' },
              { text: 'Front-end', link: '/fr/pages/my-projects' },
              { text: 'WebXR', link: '/fr/pages/my-projects' },
            ]
          },
          {
            text: 'Mon matos',
            items: [
              { text: 'Global', link: '/fr/pages/my-stuff' },
              { text: 'MacOS', link: '/fr/pages/my-projects' },
              { text: 'Win', link: '/fr/pages/my-projects' },
              { text: 'Linux', link: '/fr/pages/my-projects' },
              { text: 'Servers', link: '/fr/pages/my-projects' },
              { text: 'Autres', link: '/fr/pages/my-projects' },
            ]
          },
          {
            text: 'Mes logiciels',
            items: [
              { text: 'Global', link: '/fr/pages/my-softwares' },
              { text: 'MacOS', link: '/fr/pages/my-projects' },
              { text: 'Win', link: '/fr/pages/my-projects' },
              { text: 'Linux', link: '/fr/pages/my-projects' },
              { text: 'Autre', link: '/fr/pages/my-projects' },
            ]
          },
        ],
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/my-avatar.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Who am I?', link: '/pages/who-am-i' },
      { text: 'My projects', link: '/pages/my-projects' },
      { text: 'My stuff', link: '/pages/my-stuff' },
      { text: 'My softwares', link: '/pages/my-softwares' },
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
          { text: 'Global', link: '/pages/my-projects' },
          { text: 'Front-end', link: '/pages/my-projects' },
          { text: 'WebXR', link: '/pages/my-projects' },
        ]
      },
      {
        text: 'My stuff',
        items: [
          { text: 'Global', link: '/pages/my-stuff' },
          { text: 'MacOS', link: '/pages/my-projects' },
          { text: 'Win', link: '/pages/my-projects' },
          { text: 'Linux', link: '/pages/my-projects' },
          { text: 'Servers', link: '/pages/my-projects' },
          { text: 'Others', link: '/pages/my-projects' },
        ]
      },
      {
        text: 'My softwares',
        items: [
          { text: 'Global', link: '/pages/my-softwares' },
          { text: 'MacOS', link: '/pages/my-projects' },
          { text: 'Win', link: '/pages/my-projects' },
          { text: 'Linux', link: '/pages/my-projects' },
          { text: 'Other', link: '/pages/my-projects' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/amingtt' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amin-gatta-4547a41b7/' },
    ],
    aside: "true",
    footer: {
      message: 'Made with 💖 by Amin G',
      copyright: 'Copyright ©2023'
    },
  },
})
