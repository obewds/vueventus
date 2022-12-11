<!-- ./src/views/configs/TextareasPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Textareas Config Module">

        <DevConfigPres :data="VvConfig.textareas"/>
    
    </DevViewArticle>

</template>
