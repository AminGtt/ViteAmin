import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
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
          { text: 'Qui suis-je?', link: '/fr/pages/me/who-am-i' },
          { text: 'Mes projets', link: '/fr/pages/projects/my-projects' },
          { text: 'Mes appareils', link: '/fr/pages/devices/my-devices' },
          { text: 'Mes logiciels', link: '/fr/pages/softwares/my-softwares' },
          { text: 'Mes technos', link: '/fr/pages/stack/my-stack' },
        ],
        sidebar: [
          {
            text: 'Moi',
            items: [
              { text: 'Qui suis-je?', link: '/fr/pages/me/who-am-i' },
            ]
          },
          {
            text: 'Mes projets',
            items: [
              { text: 'Genéral', link: '/fr/pages/projects/my-projects' },
              { text: 'Front-end', link: '/fr/pages/projects/front' },
              { text: 'WebXR', link: '/fr/pages/projects/xr' },
            ]
          },
          {
            text: 'Mes appareils',
            items: [
              { text: 'Genéral', link: '/fr/pages/devices/my-devices' },
              { text: 'MacOS', link: '/fr/pages/devices/mac' },
              { text: 'Windows', link: '/fr/pages/devices/win' },
              { text: 'Linux', link: '/fr/pages/devices/linux' },
              { text: 'Servers', link: '/fr/pages/devices/servers' },
              { text: 'Autres', link: '/fr/pages/devices/others' },
            ]
          },
          {
            text: 'Mes logiciels',
            items: [
              { text: 'Genéral', link: '/fr/pages/softwares/my-softwares' },
              { text: 'MacOS', link: '/fr/pages/softwares/mac' },
              { text: 'Windows', link: '/fr/pages/softwares/win' },
              { text: 'Linux', link: '/fr/pages/softwares/linux' },
              { text: 'Autres', link: '/fr/pages/softwares/others' },
            ]
          },
          {
            text: 'Mes technos',
            items: [
              { text: 'Genéral', link: '/fr/pages/stack/my-stack' },
            ]
          },
        ],
      }
    },
    ru: { 
      label: 'Русский', 
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/ru/' },
          { text: 'Кто я?', link: '/ru/pages/me/who-am-i' },
          { text: 'Мои проекты', link: '/ru/pages/projects/my-projects' },
          { text: 'Мои устройства', link: '/ru/pages/devices/my-devices' },
          { text: 'Мои программы', link: '/ru/pages/softwares/my-softwares' },
          { text: 'Мой технос', link: '/ru/pages/stack/my-stack' },
        ],
        sidebar: [
          {
            text: 'Я',
            items: [
              { text: 'Кто я?', link: '/ru/pages/me/who-am-i' },
            ]
          },
          {
            text: 'Мои проекты',
            items: [
              { text: 'Общий', link: '/ru/pages/projects/my-projects' },
              { text: 'Интерфейс', link: '/ru/pages/projects/front' },
              { text: 'WebXR', link: '/ru/pages/projects/xr' },
            ]
          },
          {
            text: 'Мои устройства',
            items: [
              { text: 'Общий', link: '/ru/pages/devices/my-devices' },
              { text: 'MacOS', link: '/ru/pages/devices/mac' },
              { text: 'Windows', link: '/ru/pages/devices/win' },
              { text: 'Linux', link: '/ru/pages/devices/linux' },
              { text: 'Серверы', link: '/ru/pages/devices/servers' },
              { text: 'Другие', link: '/ru/pages/devices/others' },
            ]
          },
          {
            text: 'Мои программы',
            items: [
              { text: 'Общий', link: '/ru/pages/softwares/my-softwares' },
              { text: 'MacOS', link: '/ru/pages/softwares/mac' },
              { text: 'Windows', link: '/ru/pages/softwares/win' },
              { text: 'Linux', link: '/ru/pages/softwares/linux' },
              { text: 'Другие', link: '/ru/pages/softwares/others' },
            ]
          },
          {
            text: 'Мой технос',
            items: [
              { text: 'Общий', link: '/ru/pages/stack/my-stack' },
            ]
          },
        ],
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/my-avatar.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Who am I?', link: '/pages/me/who-am-i' },
      { text: 'My projects', link: '/pages/projects/my-projects' },
      { text: 'My devices', link: '/pages/devices/my-devices' },
      { text: 'My softwares', link: '/pages/softwares/my-softwares' },
      { text: 'My stack', link: '/pages/stack/my-stack' },
    ],
    sidebar: [
      {
        text: 'Me',
        items: [
          { text: 'Who am I?', link: '/pages/me/who-am-i' },
        ]
      },
      {
        text: 'My projects',
        items: [
          { text: 'General', link: '/pages/projects/my-projects' },
          { text: 'Front-end', link: '/pages/projects/front' },
          { text: 'WebXR', link: '/pages/projects/xr' },
        ]
      },
      {
        text: 'My devices',
        items: [
          { text: 'General', link: '/pages/devices/my-devices' },
          { text: 'MacOS', link: '/pages/devices/mac' },
          { text: 'Windows', link: '/pages/devices/win' },
          { text: 'Linux', link: '/pages/devices/linux' },
          { text: 'Servers', link: '/pages/devices/servers' },
          { text: 'Others', link: '/pages/devices/others' },
        ]
      },
      {
        text: 'My softwares',
        items: [
          { text: 'General', link: '/pages/softwares/my-softwares' },
          { text: 'MacOS', link: '/pages/softwares/mac' },
          { text: 'Windows', link: '/pages/softwares/win' },
          { text: 'Linux', link: '/pages/softwares/linux' },
          { text: 'Others', link: '/pages/softwares/others' },
        ]
      },
      {
        text: 'My stack',
        items: [
          { text: 'General', link: '/pages/stack/my-stack' },
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
