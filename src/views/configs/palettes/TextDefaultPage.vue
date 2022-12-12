<!-- ./src/views/configs/palettes/TextDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="TextDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.text.palettes.default"/>
    
    </DevViewArticle>

</template>
