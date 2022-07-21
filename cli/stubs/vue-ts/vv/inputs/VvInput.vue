<!-- ./src/components/vv/inputs/VvInput.vue -->

<script setup lang="ts">

    import { ValidInputTypes, VvInput } from '@obewds/vueventus'
    import appVv from '../../../app.vv'
    
    const props = defineProps({
        color: {
            type: String,
            default: appVv.defaults.VvInput.color,
        },
        palette: {
            type: String,
            default: appVv.defaults.VvInput.palette,
        },
        size: {
            type: String,
            default: appVv.defaults.VvInput.size,
        },
        type: {
            type: String,
            default: appVv.defaults.VvInput.type,
            validator: (prop: ValidInputTypes) => (ValidInputTypes).includes(prop),
        },
    })

</script>


<template>
    <VvInput
        :color="color"
        :palette="palette"
        :size="size"
        :type="type"
    />
</template>
