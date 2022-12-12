<!-- ./src/views/configs/InputsPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Inputs Config Module">

        <DevConfigPres :data="VvConfig.inputs"/>
    
    </DevViewArticle>

</template>
