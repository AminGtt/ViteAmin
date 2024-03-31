<script setup>

import { TresCanvas } from '@tresjs/core'
import { GLTFModel, OrbitControls } from '@tresjs/cientos'

const props = defineProps(['deviceName']);

const devices = {
    mbp: {
        name: `Macbook pro 16' 2019`,
        path: "/img/3d/macbook_pro.glb",
        cameraPosition: [-0.35, 0.35, 0],
        lookAt: [0.15,0,0]
    },
    iphone: {
        name: 'iPhone 13 Pro',
        path: "/img/3d/iphone_13_pro.glb",
        cameraPosition: [0.5, 0.5, 1]
    },
    ipad5: {
        name: 'iPad 5th gen',
        path: "/img/3d/ipad5.glb"
    }, 
    ipad3: {
        name: 'iPad 3rd gen',
        path: "/img/3d/ipad3.glb"
    }, 
    nano: {
        name: 'iPod nano 4th gen',
        path: "/img/3d/ipod_nano.glb"
    }, 
    pc: {
        name: 'My PC',
        path: "/img/3d/gaming_pc.glb",
        cameraPosition: [9, 9, 1],
        lookAt: [0,1,1]
    }, 
    steamdeck: {
        name: 'SteamDeck',
        path: "/img/3d/steamdeck.glb",
        cameraPosition: [0, 1, 11]
    }, 
    mbp_serv: {
        name: `Macbook pro 13' 2020 M1`,
        path: "/img/3d/macbook_pro.glb"
    }, 
    xbox: {
        name: 'Xbox One X',
        path: "/img/3d/xbox_one_x.glb"
    }, 
    camc200: {
        name: 'Xiaomi smart camera C200',
        path: "/img/3d/xiaomi_cam.glb"
    }, 
    tabm10: {
        name: 'Lenovo M10+ FHD',
        path: "/img/3d/lenovo_tab.glb"
    }, 
    ps2: {
        name: 'PlayStation 2',
        path: "/img/3d/playstation_2.glb"
    }
}

</script>

<template>
    <template v-for="(device, index) in devices">
        <template v-if="props.deviceName == index">
            
            <article class="device-card">
                <div class="device-wrapper">

                    <div class="device-model-wrapper">
                        <TresCanvas :alpha=true>

                            <TresPerspectiveCamera 
                                :position="device.cameraPosition"
                                :look-at="device.lookAt? device.lookAt : [0,0,0]"
                            />

                            <!-- <OrbitControls /> -->

                            <Suspense>
                                <GLTFModel draco 
                                    :path="device.path"
                                />
                            </Suspense>

                            <TresDirectionalLight
                                :intensity="5"
                                :position="[5, 5, 2]"
                            />

                        </TresCanvas>
                    </div>

                    <h5 class="device-name">{{ device.name }}</h5>
                </div>
            </article>

        </template>
    </template>
</template>

<style scoped lang="sass">

    .device-card
        margin: 2rem auto
        border: 1px solid #ffffff22
        background-color: #282c34
        background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%)
        box-shadow: 0 7px 20px 5px #00000088
        border-radius: .7rem
        backdrop-filter: blur(7px)
        width: 45%

    .device-wrapper
        display: flex
        flex-direction: column
        padding: 1rem

        .device-model-wrapper
            aspect-ratio: 1/1
            width: 100%

        .device-name
            margin-top: 20px
            text-align: center
</style>