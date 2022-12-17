// ./cli/generators/vvTextareaVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/textareas/VvTextarea.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvTextarea } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesTextareas, SizesTextareasRows } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvTextarea },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvTextarea.color,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvTextarea.palette,
            },
            size: {
                type: String as PropType<keyof SizesTextareas>,
                default: appVv.defaults.VvTextarea.size,
            },
            rowSize: {
                type: String as PropType<keyof SizesTextareasRows>,
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
