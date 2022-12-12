<!-- ./src/views/configs/AnchorsPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Anchors Config Module">

        <DevConfigPres :data="VvConfig.anchors"/>

    </DevViewArticle>

</template>
