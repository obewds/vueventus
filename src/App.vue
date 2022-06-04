<script setup>

    import VvColorModeButton from '@/components/buttons/VvColorModeButton.vue'
    import VueVentusTWColors from '@/data/app.color.data.json'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'
    const year = new Date().getFullYear()

</script>


<template>

    <nav class="fixed top flex items-center justify-between w-full bg-gray-700 text-white px-3 py-2 drop-shadow-xl z-10">
        <router-link to="/" class="flex items-center">
            <img class="w-7" alt="VueVentus logo" src="./assets/vue-ventus-mark-and-favicon.png"/>
            <span class="pl-3 text-2xl">VueVentus</span>
        </router-link>
        <VvColorModeButton
            :mode="colorMode"
            :bg-hex-dark="VueVentusTWColors.gray['900']"
            :bg-hex-light="VueVentusTWColors.gray['100']"
            size="2xs"
        />
    </nav>

    <div class="h-14"> </div>

    <router-view></router-view>

    <footer class="fixed bottom-0 w-full bg-gray-700 text-white text-xs text-center p-3">
        MIT Licensed | Copyright © {{ year }} Matt McT LLC
    </footer>

</template>


<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

</style>
