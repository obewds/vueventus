<!-- ./src/components/vv/buttons/VvButton.vue -->

<script setup lang="ts">

    import { ValidButtonTypes, VvButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'
    
    const props = defineProps({
        block: {
            type: Boolean,
            default: appVv.defaults.VvButton.block,
        },
        color: {
            type: String,
            default: appVv.defaults.VvButton.color,
        },
        fab: {
            type: Boolean,
            default: appVv.defaults.VvButton.fab,
        },
        palette: {
            type: String,
            default: appVv.defaults.VvButton.palette,
        },
        size: {
            type: String,
            default: appVv.defaults.VvButton.size,
        },
        type: {
            type: String,
            default: appVv.defaults.VvButton.type,
            validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
        },
    })

</script>


<template>
    <VvButton
        :block="block"
        :color="color"
        :fab="fab"
        :palette="palette"
        :size="size"
        :type="type"
    >
        <slot/>
    </VvButton>
</template>
