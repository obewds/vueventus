// ./cli/generators/vvSelectVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/selects/VvSelect.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvSelect } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvSelect },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvSelect.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvSelect.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvSelect.size,
            },
        },

    })

</script>


<template>

    <VvSelect
        :color="color"
        :palette="palette"
        :size="size"
    >
        <slot/>
    </VvSelect>

</template>

`

return output

}
