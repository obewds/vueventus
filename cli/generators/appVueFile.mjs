// ./cli/generators/appVueFile.mjs

export default function () {

const output = `<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    
    import VvColorModeButton from './components/vv/buttons/VvColorModeButton.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

</script>

<template>

    <div>

        <main class="">
            <router-view v-slot="{ Component, route }">
                <transition name="page" mode="out-in">
                    <component :is="Component" :key="route.path"/>
                </transition>
            </router-view>
        </main>

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


<style>

    .page-enter-active {
        transition: opacity 0.3s ease-out;
    }

    .page-leave-active {
        transition: opacity 0.3s ease-in;
    }

    .page-enter-from {
        transform: translateY(10px);
        opacity: 0;
    }

    .page-leave-to {
        opacity: 0;
    }

</style>

`

return output
    
}
