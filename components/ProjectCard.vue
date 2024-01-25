<script setup>

const props = defineProps(['projectName']);

const projects = {
    vs3: {
        name: 'ViteStation 3',
        url: '/img/projects-img/vs3.png',
        details: 'A recreation of the legendary Sony PS3',
        technos: {
            vue: {
                name: '#Vue',
                color: '#3FBA84'
            },
            sass: {
                name: '#Sass',
                color: '#CE679B'
            },
        }
    },
    iss: {
        name: 'Interactive Solar System',
        details: 'WIP'
    },
    isslt: {
        name: 'ISS Live Tracker',
        details: 'WIP'
    }
}



</script>

<template>
    <template v-for="(project, index) in projects">
        <template v-if="props.projectName == index">

            <section class="project-wrapper">

                <h3 class="project-title">
                    {{ project.name }}
                </h3>

                <p v-if="project.details" class="project-details">
                    {{ project.details }}
                </p>
                
                <img v-if="project.url" :src="project.url" :alt="'Project '+ project.name +' image'" class="project-image">

                <div v-if="project.url" class="project-footer">

                    <div v-if="project.technos" class="project-techno-wrapper">
                        <p v-for="techno in project.technos" class="project-techno" :style="{color: techno.color}">{{techno.name}}</p>
                    </div>
                    
                    <div class="project-goto">
                        <a href="https://vs3.viteamin.dev" target="_blank">
                            <button>Go to!</button>
                        </a>
                    </div>

                </div>
            </section>

        </template>
    </template>
</template>

<style scoped lang="sass">

    .project-wrapper
        margin: 30px 0
        //border: 2px solid red
        background-color: var(--vp-sidebar-bg-color)
        border-radius: 25px

    .project-wrapper:hover
        transition: all 450ms cubic-bezier(0.03, 0.98, 0.52, 0.99)
        transform: scale(1.1, 1.08)

    .project-title, .project-details
        margin: auto
        padding: 15px

    .project-image
        border-radius: 15px
        height: 420px
        width: 96%
        margin: auto

    .project-footer
        display: flex

        .project-techno-wrapper
            width: 80%
            margin: 15px
            display: flex

            p
                margin: 0 10px

        .project-goto
            width: 20%
            margin: auto
            text-align: center

            button
                //border: 1px solid red
                background: var(--vp-c-bg)
                padding: 6px 10px
                border-radius: 20px
                width: 100px

            a
                text-decoration: none

</style>