---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bienvenue!"
  text: "Vite + Amin = ViteAmin 🧠"
  tagline: "Ravi de vous voir! <br>Vous trouverez mes projets et bien plus ici 👋🏽"
  image:
    src: /img/my-avatar.png
  actions:
    - theme: brand
      text: Qui suis-je?
      link: /fr/pages/me/who-am-i
    - theme: alt
      text: Mes technos
      link: /fr/pages/me/my-technos

features:
  - title: Découvrez moi
    link: /pages/me/who-am-i
    linkText: En savoir plus?
    icon: 
      src: https://img.icons8.com/3d-fluency/94/search.png
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Suivez mes projets
    icon: 
      src: https://img.icons8.com/3d-fluency/94/connected.png
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Restons connecté
    details: Jette un oeil à mes creations
    link: "/pages/me/my-projects"
    linkText: Voir mes projets
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

## Moi

<VPTeamMembers size="small" :members="members" />

</div>
