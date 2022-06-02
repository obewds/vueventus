<!-- ./src/views/configs/VvConfigPage.vue -->

<script setup>

    import { inject } from 'vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvConfig Module">
    
        Coming Soon!
    
    </DevViewArticle>

</template>