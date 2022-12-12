<!-- ./src/views/configs/palettes/InputDefaultPage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="InputDefault Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.inputs.palettes.default"/>
    
    </DevViewArticle>

</template>
