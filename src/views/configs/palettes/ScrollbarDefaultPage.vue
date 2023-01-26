<!-- ./src/views/configs/palettes/ScrollbarDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ScrollbarDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.scrollbars.palettes.default"/>
    
    </DevViewArticle>

</template>
