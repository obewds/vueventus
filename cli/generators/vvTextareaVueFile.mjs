// ./cli/generators/vvTextareaVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/textareas/VvTextarea.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvTextarea } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvTextarea },

        props: {
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

`

return output

}
