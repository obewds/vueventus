<!-- ./src/views/configs/SelectsPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Selects Config Module">

        <DevConfigPres :data="VvConfig.selects"/>
    
    </DevViewArticle>

</template>
