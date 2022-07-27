// ./cli/generators/appVueFile.mjs

export default function () {

const output = `<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    
    import { VueVentusSpinningMark, VvColorModeButton } from '@obewds/vueventus'
    import HelloWorld from './components/HelloWorld.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

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
        
        <HelloWorld msg="Hello Vue 3 + Tailwind CSS + VueVentus + Vite + TypeScript"/>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
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
