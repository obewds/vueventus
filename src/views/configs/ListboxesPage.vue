<!-- ./src/views/configs/ListboxesPage.vue -->

<script setup lang="ts">

    import DevConfigPres from '../compos/DevConfigPres.vue'
    import DevViewArticle from '../compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="Listboxes Config Module">

        <DevConfigPres :data="VvConfig.listboxes"/>
    
    </DevViewArticle>

</template>
