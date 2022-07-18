<!-- ./src/components/vv/lists/VvListItem.vue -->

<script setup lang="ts">

    import { VvListItem } from '@obewds/vueventus'
    import appVv from '../../../app.vv'
    
    const props = defineProps({
        color: {
            type: String,
            default: appVv.defaults.VvListItem.color,
        },
        enableColoredSymbols: {
            type: Boolean,
            default: appVv.defaults.VvListItem.enableColoredSymbols,
        },
        palette: {
            type: String,
            default: appVv.defaults.VvListItem.palette,
        },
        symbolColor: {
            type: String,
            default: appVv.defaults.VvListItem.symbolColor,
        },
        symbolPalette: {
            type: String,
            default: appVv.defaults.VvListItem.symbolPalette,
        },
    })

</script>


<template>
    <VvListItem
        :color="color"
        :enable-colored-symbols="enableColoredSymbols"
        :palette="palette"
        :symbol-color="symbolColor"
        :symbol-palette="symbolPalette"
    >
        <slot/>
    </VvListItem>
</template>
