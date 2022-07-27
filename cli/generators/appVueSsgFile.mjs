// ./cli/generators/appVueSsgFile.mjs

export default function () {

const output = `<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

    import { inject } from 'vue'
    import { VvColorModeButton, VueVentusSpinningMark, VvConfig } from '@obewds/vueventus'
    import type { ConfigVv } from '@obewds/vueventus'
    import HelloWorld from './components/HelloWorld.vue'
    import VvFa from './components/vv/elements/VvFa.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    const vv = inject<ConfigVv>('vv', VvConfig)
    const anchors = [vv.anchors.classes(), vv.anchors.palettes.default.success].join(' ')

    const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

</script>

<template>

    <div class="text-center px-6 pt-20">
    
        <div class="max-w-2xl grid grid-cols-5 items-center gap-8 px-8 pb-10 mx-auto">

            <img alt="Vue logo" src="./assets/logo-vue.svg"/>
            <img alt="Tailwind CSS logo" src="./assets/logo-tailwindcss.svg"/>
            <div>
                <!-- div wrapper is needed so Safari contains the flex size of an svg/img child correctly -->
                <VueVentusSpinningMark animation-class="animate-spin-reverse-4s"/>
            </div>
            <img alt="Vite.js logo" src="./assets/logo-vite.svg"/>
            <img alt="Typescript logo" src="./assets/logo-typescript.svg"/>

        </div>

        <div class="flex justify-center items-center gap-3 pb-10">
            <router-link to="/" :class="anchors">home</router-link>
            <router-link to="/a" :class="anchors">/a</router-link>
            <router-link to="/b" :class="anchors">/b</router-link>
            <router-link to="/nested/deep/b" :class="anchors">/nested/deep/b</router-link>
        </div>

        <main>
            <router-view />
        </main>
        
        <HelloWorld msg="Hello Vue 3 + Tailwind CSS + VueVentus + Vite/Vite-SSG + TypeScript"/>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvFa family="fas" icon="house" size="2x"/>
                    <VvScrollUp/>
                    <VvColorModeButton palette="solid" color="primary" :mode="(colorMode as string)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>

`

return output
    
}
