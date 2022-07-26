// ./cli/generators/vvInputVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/inputs/VvInput.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidInputTypes, VvInput } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvInput },

        props: {
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

`

return output

}
