<!-- ./src/views/configs/palettes/GroundPastelPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="GroundPastel Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.grounds.palettes.pastel"/>
    
    </DevViewArticle>

</template>
