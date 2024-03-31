import { defineConfig } from 'vitepress'
import { templateCompilerOptions } from '@tresjs/core'

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
      { text: 'My projects', link: '/pages/me/my-projects' },
      { text: 'My devices', link: '/pages/me/my-devices' },
      { text: 'My softwares', link: '/pages/me/my-softwares' },
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
      message: 'Made with 💖 by Amin Gatta',
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
          { text: 'Mes projets', link: '/fr/pages/me/my-projects' },
          { text: 'Mes appareils', link: '/fr/pages/me/my-devices' },
          { text: 'Mes logiciels', link: '/fr/pages/me/my-softwares' },
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
    // ru: { 
    //   label: 'Русский', 
    //   link: '/ru/',
    //   themeConfig: {
    //     nav: [
    //       { text: 'Прием', link: '/ru/' },
    //       { text: 'Кто я?', link: '/ru/pages/me/who-am-i' },
    //       { text: 'Мои проекты', link: '/ru/pages/me/my-projects' },
    //       { text: 'Мои устройства', link: '/ru/pages/me/my-devices' },
    //       { text: 'Мои программы', link: '/ru/pages/me/my-softwares' },
    //       { text: 'Мой технос', link: '/ru/pages/me/my-stack' },
    //     ],
    //     sidebar: [
    //       {
    //         text: 'Я',
    //         items: [
    //           { text: 'Кто я?', link: '/ru/pages/me/who-am-i' },
    //           { text: 'Мои проекты', link: '/ru/pages/me/my-projects' },
    //           { text: 'Мои устройства', link: '/ru/pages/me/my-devices' },
    //           { text: 'Мои программы', link: '/ru/pages/me/my-softwares' },
    //           { text: 'Мой технос', link: '/ru/pages/me/my-stack' },
    //         ]
    //       },
    //     ],
    //     docFooter: {
    //       prev: 'Предыдущая страница',
    //       next: 'Следующая страница'
    //     }
    //   }
    // },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('Tres') && tag !== 'TresCanvas',
      },
    }
  }
})
