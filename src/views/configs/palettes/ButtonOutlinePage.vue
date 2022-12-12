<!-- ./src/views/configs/palettes/ButtonOutlinePage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ButtonOutline Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.buttons.palettes.outline"/>
    
    </DevViewArticle>

</template>
