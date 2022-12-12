<!-- ./src/views/configs/palettes/FillDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="FillDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.fills.palettes.default"/>
    
    </DevViewArticle>

</template>
