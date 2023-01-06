// ./cli/generators/vvInputVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/inputs/VvInput.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidInputTypes, VvInput } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultValidationPalettes, DefaultValidationPaletteColors, SizesInputs } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvInput },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvInput.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvInput.debug,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvInput.palette,
            },
            size: {
                type: String as PropType<keyof SizesInputs>,
                default: appVv.defaults.VvInput.size,
            },
            type: {
                type: String as PropType<ValidInputTypes>,
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
        :data-vv-input-prop-color="debug ? color : null"
        :data-vv-input-prop-palette="debug ? palette : null"
        :data-vv-input-prop-size="debug ? size : null"
        :data-vv-input-prop-type="debug ? type : null"
    />
</template>

`

return output

}
