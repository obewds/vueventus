<!-- ./src/components/vv/textareas/VvTextarea.vue -->

<script setup lang="ts">

    import { VvTextarea } from '@obewds/vueventus'
    import appVv from '../../../app.vv'
    
    const props = defineProps({
        color: {
            type: String,
            default: appVv.defaults.VvTextarea.color,
        },
        palette: {
            type: String,
            default: appVv.defaults.VvTextarea.palette,
        },
        size: {
            type: String,
            default: appVv.defaults.VvTextarea.size,
        },
        rowSize: {
            type: String,
            default: appVv.defaults.VvTextarea.rowSize,
        },
    })

</script>


<template>

    <VvTextarea
        :color="color"
        :palette="palette"
        :size="size"
        :row-size="rowSize"
    />

</template>
