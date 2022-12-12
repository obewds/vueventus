<!-- ./src/views/configs/VvConfigPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="VvConfig Config Module">

        <DevConfigPres :data="VvConfig"/>
    
    </DevViewArticle>

</template>