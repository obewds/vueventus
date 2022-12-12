<!-- ./src/views/configs/palettes/AnchorDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="AnchorDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.anchors.palettes.default"/>
    
    </DevViewArticle>

</template>
