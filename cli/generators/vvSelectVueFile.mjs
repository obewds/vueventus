// ./cli/generators/vvSelectVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/Select.vue' : './src/components/vv/anchors/VvSelect.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesSelects } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvSelect as LibVvSelect } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvSelect },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvSelect.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvSelect.debug,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvSelect.palette,
            },
            size: {
                type: String as PropType<keyof SizesSelects>,
                default: appVv.defaults.VvSelect.size,
            },
        },

    })

</script>


<template>

    <LibVvSelect
        :color="color"
        :debug="debug"
        :palette="palette"
        :size="size"
        :data-vv-select-prop-color="debug ? color : null"
        :data-vv-select-prop-palette="debug ? palette : null"
        :data-vv-select-prop-size="debug ? size : null"
    >
        <slot/>
    </LibVvSelect>

</template>

`

return output

}
