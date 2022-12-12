<!-- ./src/views/configs/ButtonsPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Buttons Config Module">

        <DevConfigPres :data="VvConfig.buttons"/>
    
    </DevViewArticle>

</template>
