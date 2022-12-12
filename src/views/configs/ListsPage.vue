<!-- ./src/views/configs/ListsPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Lists Config Module">

        <DevConfigPres :data="VvConfig.lists"/>
    
    </DevViewArticle>

</template>
