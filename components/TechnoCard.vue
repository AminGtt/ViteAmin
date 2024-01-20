<script setup>

const props = defineProps(['wanted'])

const front = [
    'HTML',
    'C#',
    'CSS',
    'Sass',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue',
    'Vite',
    'VitePress',
    'Dart',
    'Astro',
    'WebXR',
    'Aframe'
],
back = [
   'PHP',
   'Symfony',
   'Python',
   'Pyramid',
   'FastAPI',
   'MySQL',
   'PostgreSQL',
   'Twig',
   'Jinja'
], 
mobile = [
    'Flutter'
],
ops = [
    'Apache2',
    'Docker',
    'Ansible',
],
other = [
    'Windows',
    'MacOS',
    'Debian',
    'Ubuntu',
    'Arch',
    'Kali',
    'Parrot OS',
    'Git',
    'GitHub',
    'GitLab',
    'NPM',
]

let wantedList;
if (props.wanted == "front") {
    wantedList = front
} else if (props.wanted == "back") {
    wantedList = back
} else if (props.wanted == "mobile") {
    wantedList = mobile
} else if (props.wanted == "ops") {
    wantedList = ops
} else if (props.wanted == "other") {
    wantedList = other
}

function replaceHash(techno) {
    let parsed = techno.replace('#', '-sharp')
    return parsed
}

</script>

<template>

    <section class="techno-wrapper">

        <article class="techno" v-for="techno in wantedList">
            <img v-if="!techno.includes('#')" class="techno-logo" :src="`/img/technos-logo/`+techno+`.png`" :alt="techno+` logo`">
            <img v-else class="techno-logo" :src="`/img/technos-logo/`+replaceHash(techno)+`.png`" :alt="techno+` logo`">
            <p>
                {{ techno }}
            </p>
        </article>

    </section>

</template>

<style lang="sass">

    .techno-wrapper
        display: flex
        flex-wrap: wrap

    .techno
        height: 7.5rem
        width: 7.5rem
        background: var(--vp-c-bg-soft)
        margin: 8.8px
        padding-top: 15px
        
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        border: 1.5px solid transparent
        border-radius: 25px

        transition: border-color .25s
        text-decoration: none
        font-size: 14px
        
        p
            margin: 10px 0 0 0
            color: var(--vp-c-text-1)
        
        .techno-logo
            max-width: 88px
            max-height: 50px
</style>