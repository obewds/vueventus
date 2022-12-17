// ./cli/generators/vvButtonVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/buttons/VvButton.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, VvButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, SizesButtons } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvButton },

        props: {
            block: {
                type: Boolean,
                default: appVv.defaults.VvButton.block,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvButton.color,
            },
            fab: {
                type: Boolean,
                default: appVv.defaults.VvButton.fab,
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: appVv.defaults.VvButton.palette,
            },
            size: {
                type: String as PropType<keyof SizesButtons>,
                default: appVv.defaults.VvButton.size,
            },
            type: {
                type: String as PropType<ValidButtonTypes>,
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
        :type="(type as ValidButtonTypes)"
    >
        <slot/>
    </VvButton>
</template>

`

return output

}
