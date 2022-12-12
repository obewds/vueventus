<!-- ./src/views/configs/TransitionsPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Transitions Config Module">

        <DevConfigPres :data="VvConfig.transitions"/>
    
    </DevViewArticle>

</template>
