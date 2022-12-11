<!-- ./src/views/configs/palettes/RadioDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="RadioDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.radios.palettes.default"/>
    
    </DevViewArticle>

</template>
