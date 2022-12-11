<!-- ./src/views/configs/palettes/InputUnderlinedPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="InputUnderlined Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.inputs.palettes.underlined"/>
    
    </DevViewArticle>

</template>
