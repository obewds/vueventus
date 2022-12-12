<!-- ./src/views/configs/palettes/ListDefault.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ListDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.lists.palettes.default"/>
    
    </DevViewArticle>

</template>
