<!-- ./src/views/configs/palettes/ListboxButtonUnderlined.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ListboxButtonUnderlined Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.listboxes.buttonPalettes.underlined"/>
    
    </DevViewArticle>

</template>
