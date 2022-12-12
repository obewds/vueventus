<!-- ./src/views/configs/palettes/GroundDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="GroundDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.grounds.palettes.default"/>
    
    </DevViewArticle>

</template>
