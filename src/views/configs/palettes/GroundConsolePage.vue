<!-- ./src/views/configs/palettes/GroundConsolePage.vue -->

<script setup lang="ts">

    import DevConfigPalettePre from '../../compos/DevConfigPalettePre.vue'
    import DevViewArticle from '../../compos/DevViewArticle.vue'
    import VvConfig from '../../../configs/VvConfig'

</script>


<template>

    <DevViewArticle title="GroundConsole Palette Config Module">

        <DevConfigPalettePre :data="VvConfig.grounds.palettes.console"/>
    
    </DevViewArticle>

</template>
