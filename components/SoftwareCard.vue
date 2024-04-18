<script setup>

const props = defineProps(['wanted'])

const mac = [
    'AppCleaner',
    'Arc',
    'BatteryBoi',
    'Hot',
    'CCleaner',
    'DBVisualizer',
    'HiddenBar',
    'KeyboardCleanTool',
    'Maccy',
    'MenubarX',
    'Rectangle',
    'The Unarchiver',
    'Warp',
    'xbar',
], 
win = [
    'Steam',
    'Battle.net',
], 
linux = [
    'nmap',
    'EmuDeck',
    'WineTricks',
],
other = [
    'VSCode',
    'Jetbrains suite',
    'Fleet',
    'Android studio',
    'XCode',
    'Docker',
    'mpv',
    'qBitTorrent',
    'Discord',
    'Bitwarden',
    'Deezer',
    'Figma',
]

let wantedList;
if (props.wanted == "mac") {
    wantedList = mac
} else if (props.wanted == "win") {
    wantedList = win
} else if (props.wanted == "linux") {
    wantedList = linux
} else if (props.wanted == "other") {
    wantedList = other
}

</script>

<template>

    <section>
        <article class="software" v-for="soft in wantedList">
            <img class="software-logo" :src="`/img/softwares-logo/`+wanted+'/'+soft+`.png`" :alt="soft+` logo`">
            <p>
                {{ soft }}
            </p>
        </article>
    </section>

    
</template>

<style scoped lang="sass">
    section
        display: flex
        flex-wrap: wrap
        justify-content: flext-start
    .software
        width: 172px
        text-align: center

        .software-logo
            margin: auto
            height: 100px
            // width: 100px
            border-radius: 25px
</style>