// ./cli/generators/vvElVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/elements/VvEl.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidElementTags, VvEl } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes, SizesText } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvEl },

        props: {
            borderPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvEl.borderPalette,
            },
            borderColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvEl.borderColor,
            },
            groundPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvEl.groundPalette,
            },
            groundColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvEl.groundColor,
            },
            size: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvEl.size,
            },
            tag: {
                type: String as PropType<ValidElementTags>,
                default: appVv.defaults.VvEl.tag,
                validator: (prop: ValidElementTags) => (ValidElementTags).includes(prop),
            },
            textPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvEl.textPalette,
            },
            textColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvEl.textColor,
            },
        },

    })

</script>


<template>

    <VvEl
        :border-palette="borderPalette"
        :border-color="borderColor"
        :ground-palette="groundPalette"
        :ground-color="groundColor"
        :size="size"
        :tag="tag"
        :text-palette="textPalette"
        :text-color="textColor"
    >
        <slot/>
    </VvEl>

</template>

`

return output

}
