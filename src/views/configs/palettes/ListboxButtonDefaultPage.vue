<!-- ./src/views/configs/palettes/ListboxButtonDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="ListboxButtonDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.listboxes.buttonPalettes.default"/>
    
    </DevViewArticle>

</template>
