<!-- ./src/views/configs/palettes/CheckboxDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="CheckboxDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.checkboxes.palettes.default"/>
    
    </DevViewArticle>

</template>
