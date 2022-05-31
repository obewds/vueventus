<script setup>

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    // import HelloWorld from './components/HelloWorld.vue'

    const year = new Date().getFullYear()

</script>


<template>

    <nav class="fixed top flex items-center w-full bg-gray-700 text-white px-3 py-2 drop-shadow-xl">
        <router-link to="/" class="flex items-center">
            <img class="w-7" alt="VueVentus logo" src="./assets/vue-ventus-mark-and-favicon.png"/>
            <span class="pl-3 text-2xl">VueVentus</span>
        </router-link>
    </nav>

    <div class="h-14"> </div>

    <!--HelloWorld msg="Hello Vue 3 + Vite" /-->

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
        color: #2c3e50;
    }

</style>
