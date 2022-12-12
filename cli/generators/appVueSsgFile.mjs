// ./cli/generators/appVueSsgFile.mjs

export default function () {

const output = `<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

    import { inject } from 'vue'
    import { VvColorModeButton, VueVentusSpinningMark, VvConfig } from '@obewds/vueventus'
    import HelloWorld from './components/HelloWorld.vue'
    import VvFa from './components/vv/elements/VvFa.vue'
    import VvRouterLink from './components/vv/anchors/VvRouterLink.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    import type { ConfigVv, ValidColorModes } from '@obewds/vueventus'

    const vv = inject<ConfigVv>('vv', VvConfig)
    const anchors = [vv.anchors.classes(), vv.anchors.palettes.default.success].join(' ')

    const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') as ValidColorModes : 'light' as ValidColorModes

</script>

<template>

    <div class="text-center px-6 pt-20">
    
        <div class="max-w-2xl grid grid-cols-6 items-center gap-6 px-6 pb-10 mx-auto">

            <img alt="Vue logo" src="./assets/logo-vue.svg"/>
            <img alt="Tailwind CSS logo" src="./assets/logo-tailwindcss.svg"/>
            <img alt="Pinia logo" src="./assets/logo-pinia.svg"/>
            <div>
                <!-- div wrapper is needed so Safari contains the flex size of an svg/img child correctly -->
                <VueVentusSpinningMark :enable-animation="false"/>
            </div>
            <img alt="Vite.js logo" src="./assets/logo-vite.svg"/>
            <img alt="Typescript logo" src="./assets/logo-typescript.svg"/>

        </div>

        <div class="flex justify-center items-center gap-3 pb-10">
            <VvRouterLink to="/" color="success">home</VvRouterLink>
            <VvRouterLink to="/a" color="success">/a</VvRouterLink>
            <VvRouterLink to="/b" color="success">/b</VvRouterLink>
            <VvRouterLink to="/nested/deep/b" color="success">/nested/deep/b</VvRouterLink>
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
                    <VvColorModeButton palette="solid" color="primary" :mode="(colorMode)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>

`

return output
    
}
