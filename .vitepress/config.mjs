import { defineConfig } from 'vitepress'
import { templateCompilerOptions } from '@tresjs/core'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  head: [['link', { rel: 'icon', href: '/img/my-avatar.png' }]],
  title: "ViteAmin",
  description: "Mon portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/my-avatar.png",
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Qui suis-je?', link: '/pages/me/who-am-i' },
      { text: 'Mes projets', link: '/pages/me/my-projects' },
      { text: 'Mes appareils', link: '/pages/me/my-devices' },
      { text: 'Mes logiciels', link: '/pages/me/my-softwares' },
      { text: 'Mes technos', link: '/pages/me/my-stack' },
    ],
    sidebar: [
      {
        text: 'Moi',
        items: [
          { text: 'Qui suis-je?', link: '/pages/me/who-am-i' },
          { text: 'Mes projets', link: '/pages/me/my-projects' },
          { text: 'Mes appareils', link: '/pages/me/my-devices' },
          { text: 'Mes logiciels', link: '/pages/me/my-softwares' },
          { text: 'Mes technos', link: '/pages/me/my-stack' },
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
      label: 'Français'
    },
    en: { 
      label: 'English', 
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Who am I?', link: '/en/pages/me/who-am-i' },
          { text: 'My projects', link: '/en/pages/me/my-projects' },
          { text: 'My devices', link: '/en/pages/me/my-devices' },
          { text: 'My softwares', link: '/en/pages/me/my-softwares' },
          { text: 'My stack', link: '/en/pages/me/my-stack' },
        ],
        sidebar: [
          {
            text: 'Me',
            items: [
              { text: 'Who am I?', link: '/en/pages/me/who-am-i' },
              { text: 'My projects', link: '/en/pages/me/my-projects' },
              { text: 'My devices', link: '/en/pages/me/my-devices' },
              { text: 'My softwares', link: '/en/pages/me/my-softwares' },
              { text: 'My stack', link: '/en/pages/me/my-stack' },
            ]
          },
        ]
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
