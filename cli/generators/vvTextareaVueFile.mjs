// ./cli/generators/vvTextareaVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/Textarea.vue' : './src/components/vv/anchors/VvTextarea.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesTextareas, SizesTextareasRows } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvTextarea as LibVvTextarea } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvTextarea },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvTextarea.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvTextarea.debug,
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

    <LibVvTextarea
        :color="color"
        :debug="debug"
        :palette="palette"
        :size="size"
        :row-size="rowSize"
        :data-vv-textarea-prop-color="debug ? color : null"
        :data-vv-textarea-prop-palette="debug ? palette : null"
        :data-vv-textarea-prop-row-size="debug ? rowSize : null"
        :data-vv-textarea-prop-size="debug ? size : null"
    />

</template>

`

return output

}
