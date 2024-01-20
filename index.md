---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Welcome!"
  text: "Vite + Amin = ViteAmin 🧠"
  tagline: "I'm pleased to see you here! <br>You will find all my projects and even more in this place 👋🏽"
  image:
    src: /img/my-avatar.png
  actions:
    - theme: brand
      text: Who am I?
      link: /pages/me/who-am-i
    - theme: alt
      text: My stack
      link: /pages/me/my-technos

features:
  - title: Discover me
    # details: Lorem
    link: /pages/me/who-am-i
    linkText: Wanna know more?
    icon: 
      src: https://img.icons8.com/3d-fluency/94/search.png
  - title: Stay connected
    # details: Lorem ipsum
    icon: 
      src: https://img.icons8.com/3d-fluency/94/connected.png
  - title: Follow my evolution
    details: Take a look in my creations
    link: "/pages/me/my-projects"
    linkText: Check out my projects
    icon: 
      src: https://img.icons8.com/3d-fluency/94/visible.png
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

## Me

<VPTeamMembers size="small" :members="members" />

</div>
