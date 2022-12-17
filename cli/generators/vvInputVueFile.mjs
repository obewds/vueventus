// ./cli/generators/vvInputVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/inputs/VvInput.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidInputTypes, VvInput } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultValidationPalettes, DefaultValidationPaletteColors, InputsSizes } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvInput },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvInput.color,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvInput.palette,
            },
            size: {
                type: String as PropType<keyof InputsSizes>,
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
    />
</template>

`

return output

}
