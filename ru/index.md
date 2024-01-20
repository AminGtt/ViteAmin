---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Привет!"
  text: "Vite + Amin = ViteAmin 🧠"
  tagline: 
  image:
    src: /img/my-avatar.png
  actions:
    - theme: brand
      text: Кто я?
      link: /ru/pages/me/who-am-i
    - theme: alt
      text: Мой технос
      link: /ru/pages/me/my-technos

features:
  - title: узнать обо мне
    link: /pages/me/who-am-i
    linkText: En savoir plus?
    icon: 
      src: https://img.icons8.com/3d-fluency/94/search.png
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Следите за моими проектами
    icon: 
      src: https://img.icons8.com/3d-fluency/94/connected.png
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Давайте оставаться на связи
    details: Jette un oeil à mes creations
    link: /pages/me/who-am-i
    linkText: En savoir plus?
    icon: 
      src: https://img.icons8.com/3d-fluency/94/visible.png
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/AminGtt.png',
    name: 'Amin',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/AminGtt' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amin-gatta-4547a41b7/' }
    ]
  },
]
</script>

<div class="vp-doc team-cards">

## Я

<VPTeamMembers size="small" :members="members" />

</div>
