import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  head: [['link', { rel: 'icon', href: '/img/my-avatar.png' }]],
  title: "ViteAmin",
  description: "My VitePress portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/my-avatar.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Who am I?', link: '/pages/me/who-am-i' },
      {
        text: 'My projects',
        items: [
          { text: 'All', link: '/pages/me/my-projects' },
          { text: 'Frontend', link: '/pages/me/my-projects#frontend-projects' },
          { text: 'WebXR', link: '/pages/me/my-projects#webxr-projects' }
        ]
      },
      {
        text: 'My devices',
        items: [
          { text: 'All', link: '/pages/me/my-devices' },
          { text: 'MacOS', link: '/pages/me/my-devices#macos' },
          { text: 'Windows', link: '/pages/me/my-devices#windows' },
          { text: 'Linux', link: '/pages/me/my-devices#linux' },
          { text: 'Servers', link: '/pages/me/my-devices#servers' },
          { text: 'Others', link: '/pages/me/my-devices#others' },
        ]
      },
      {
        text: 'My softwares',
        items: [
          { text: 'All', link: '/pages/me/my-softwares' },
          { text: 'MacOS', link: '/pages/me/my-softwares#macos' },
          { text: 'Windows', link: '/pages/me/my-softwares#windows' },
          { text: 'Linux', link: '/pages/me/my-softwares#linux' },
          { text: 'Others', link: '/pages/me/my-softwares#others' },
        ]
      },
      { text: 'My stack', link: '/pages/me/my-stack' },
    ],
    sidebar: [
      {
        text: 'Me',
        items: [
          { text: 'Who am I?', link: '/pages/me/who-am-i' },
          { text: 'My projects', link: '/pages/me/my-projects' },
          { text: 'My devices', link: '/pages/me/my-devices' },
          { text: 'My softwares', link: '/pages/me/my-softwares' },
          { text: 'My stack', link: '/pages/me/my-stack' },
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
    search: {
      provider: 'local'
    },
    lastUpdated: true,
  },
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
          { text: 'Qui suis-je?', link: '/fr/pages/me/who-am-i' },
          {
            text: 'Mes projets',
            items: [
              { text: 'Tout', link: '/fr/pages/me/my-projects' },
              { text: 'Frontend', link: '/fr/pages/me/my-projects#frontend-projects' },
              { text: 'WebXR', link: '/fr/pages/me/my-projects#webxr-projects' }
            ]
          },
          {
            text: 'Mes appareils',
            items: [
              { text: 'Tout', link: '/fr/pages/me/my-devices' },
              { text: 'MacOS', link: '/fr/pages/me/my-devices#macos' },
              { text: 'Windows', link: '/fr/pages/me/my-devices#windows' },
              { text: 'Linux', link: '/fr/pages/me/my-devices#linux' },
              { text: 'Serveurs', link: '/fr/pages/me/my-devices#servers' },
              { text: 'Others', link: '/fr/pages/me/my-devices#others' },
            ]
          },
          {
            text: 'Mes logiciels',
            items: [
              { text: 'Tout', link: '/fr/pages/me/my-softwares' },
              { text: 'MacOS', link: '/fr/pages/me/my-softwares#macos' },
              { text: 'Windows', link: '/fr/pages/me/my-softwares#windows' },
              { text: 'Linux', link: '/fr/pages/me/my-softwares#linux' },
              { text: 'Others', link: '/fr/pages/me/my-softwares#others' },
            ]
          },
          { text: 'Mes technos', link: '/fr/pages/me/my-stack' },
        ],
        sidebar: [
          {
            text: 'Moi',
            items: [
              { text: 'Qui suis-je?', link: '/fr/pages/me/who-am-i' },
              { text: 'Mes projets', link: '/fr/pages/me/my-projects' },
              { text: 'Mes appareils', link: '/fr/pages/me/my-devices' },
              { text: 'Mes logiciels', link: '/fr/pages/me/my-softwares' },
              { text: 'Mes technos', link: '/fr/pages/me/my-stack' },
            ]
          },
        ],
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        }
      }
    },
    ru: { 
      label: 'Русский', 
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Прием', link: '/ru/' },
          { text: 'Кто я?', link: '/ru/pages/me/who-am-i' },
          {
            text: 'Мои проекты',
            items: [
              { text: 'Все', link: '/ru/pages/me/my-projects' },
              { text: 'Интерфеисные', link: '/ru/pages/me/my-projects#интерфеисные-проекты' },
              { text: 'WebXR', link: '/ru/pages/me/my-projects#проекты-webxr' }
            ]
          },
          {
            text: 'Мои устройства',
            items: [
              { text: 'Все', link: '/ru/pages/me/my-devices' },
              { text: 'MacOS', link: '/ru/pages/me/my-devices#macos' },
              { text: 'Windows', link: '/ru/pages/me/my-devices#windows' },
              { text: 'Linux', link: '/ru/pages/me/my-devices#linux' },
              { text: 'Серверы', link: '/ru/pages/me/my-devices#серверы' },
              { text: 'Другие', link: '/ru/pages/me/my-devices#другие' },
            ]
          },
          {
            text: 'Мои программы',
            items: [
              { text: 'Все', link: '/ru/pages/me/my-softwares' },
              { text: 'MacOS', link: '/ru/pages/me/my-softwares#macos' },
              { text: 'Windows', link: '/ru/pages/me/my-softwares#windows' },
              { text: 'Linux', link: '/ru/pages/me/my-softwares#linux' },
              { text: 'Другие', link: '/ru/pages/me/my-softwares#другие' },
            ]
          },
          { text: 'Мой технос', link: '/ru/pages/me/my-stack' },
        ],
        sidebar: [
          {
            text: 'Я',
            items: [
              { text: 'Кто я?', link: '/ru/pages/me/who-am-i' },
              { text: 'Мои проекты', link: '/ru/pages/me/my-projects' },
              { text: 'Мои устройства', link: '/ru/pages/me/my-devices' },
              { text: 'Мои программы', link: '/ru/pages/me/my-softwares' },
              { text: 'Мой технос', link: '/ru/pages/me/my-stack' },
            ]
          },
        ],
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        }
      }
    },
  },
})
