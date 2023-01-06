// ./cli/generators/vvSelectVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/selects/VvSelect.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvSelect } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesSelects } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvSelect },

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

    <VvSelect
        :color="color"
        :palette="palette"
        :size="size"
        :data-vv-select-prop-color="debug ? color : null"
        :data-vv-select-prop-palette="debug ? palette : null"
        :data-vv-select-prop-size="debug ? size : null"
    >
        <slot/>
    </VvSelect>

</template>

`

return output

}
