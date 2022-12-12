<!-- ./src/views/configs/palettes/BorderDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="BorderDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.borders.palettes.default"/>
    
    </DevViewArticle>

</template>
