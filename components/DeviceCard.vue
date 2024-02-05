<script setup>

const props = defineProps(['deviceName']);

const devices = {
    mbp: {
        name: `Macbook pro 16' 2019`,
    },
    iphone: {
        name: 'iPhone 13 Pro',
    },
    ipad5: {
        name: 'iPad 5th gen',
    }, 
    ipad3: {
        name: 'iPad 3rd gen',
    }, 
    nano: {
        name: 'iPod nano 4th gen',
    }, 
    pc: {
        name: 'My PC',
    }, 
    steamdeck: {
        name: 'SteamDeck',
    }, 
    mbp_serv: {
        name: `Macbook pro 13' 2020 M1`,
    }, 
    xbox: {
        name: 'Xbox One X',
    }, 
    camc200: {
        name: 'Xiaomi smart camera C200',
    }, 
    tabm10: {
        name: 'Lenovo M10+ FHD',
    }, 
    ps2: {
        name: 'PlayStation 2',
    }
}

</script>

<template>

    <template v-for="(device, index) in devices">
        <template v-if="props.deviceName == index">
            
            <section class="device-card">
                <div class="device-wrapper">
                    <img class="device-model" src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="device" />
            
                    <h5 class="device-name">{{ device.name }}</h5>
                </div>
            </section>

        </template>
    </template>

</template>

<style scoped lang="sass">

    .device-card
        margin: 5rem auto
        border: 1px solid #ffffff22
        background-color: #282c34
        background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%)
        box-shadow: 0 7px 20px 5px #00000088
        border-radius: .7rem
        backdrop-filter: blur(7px)

    .device-wrapper
        display: flex
        flex-direction: column
        padding: 1rem

        .device-model
            border-radius: .5rem

        .device-name
            margin-top: 20px
            text-align: center
</style>