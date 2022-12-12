<!-- ./src/views/configs/palettes/ListboxOptionDefault.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ListboxOptionDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.listboxes.optionPalettes.underlined"/>
    
    </DevViewArticle>

</template>
