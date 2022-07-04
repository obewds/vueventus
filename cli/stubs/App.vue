<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import { VueVentusSpinningMark, VvColorModeButton } from '@obewds/vueventus'
    import HelloWorld from './components/HelloWorld.vue'
    import VvScrollUp from './components/VvScrollUp.vue'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

</script>

<template>

    <div class="text-center px-6 pt-20">
    
        <div class="max-w-2xl grid grid-cols-5 items-center gap-8 px-8 pb-10 mx-auto">

            <img alt="Vue logo" src="./assets/logo.png"/>
            <img alt="Vue logo" src="./assets/logo.png"/>
            <img alt="Vue logo" src="./assets/logo.png"/>
            <img alt="Vue logo" src="./assets/logo.png"/>
            <VueVentusSpinningMark :enable-animation="true"/>

        </div>
        
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + VueVentus"/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        Hello scrollbar!

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvScrollUp :is-visible="true"/>
                    <VvColorModeButton palette="solid" color="primary" :mode="(colorMode as string)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>
