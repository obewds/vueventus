<!-- ./src/views/configs/palettes/GroundMonochromaticPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="GroundMonochromatic Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.grounds.palettes.monochromatic"/>
    
    </DevViewArticle>

</template>
