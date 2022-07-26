// ./cli/generators/vvButtonVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/buttons/VvButton.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, VvButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvButton },

        props: {
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

`

return output

}
