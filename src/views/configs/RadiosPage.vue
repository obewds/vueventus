<!-- ./src/views/configs/RadiosPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Radios Config Module">

        <DevConfigPres :data="VvConfig.radios"/>
    
    </DevViewArticle>

</template>
