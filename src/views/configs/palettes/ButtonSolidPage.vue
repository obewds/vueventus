<!-- ./src/views/configs/palettes/ButtonSolidPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ButtonSolid Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.buttons.palettes.solid"/>
    
    </DevViewArticle>

</template>
