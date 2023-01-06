// ./cli/generators/vvListVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/lists/VvList.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidListTypes, VvList } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes, SizesText } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvList },

        props: {
            debug: {
                type: Boolean,
                default: appVv.defaults.VvList.debug,
            },
            listStyleTypeClass: {
                type: String,
                default: appVv.defaults.VvList.listStyleTypeClass,
            },
            markerColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvList.markerColor,
            },
            markerPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvList.markerPalette,
            },
            size: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvList.size,
            },
            tag: {
                type: String as PropType<ValidListTypes>,
                default: appVv.defaults.VvList.tag,
                validator: (prop: ValidListTypes) => (ValidListTypes).includes(prop),
            },
        },

    })

</script>


<template>

    <VvList
        :marker-color="markerColor"
        :marker-palette="markerPalette"
        :size="size"
        :tag="tag"
        :data-vv-list-prop-list-style-type-class="debug ? listStyleTypeClass : null"
        :data-vv-list-prop-marker-color="debug ? markerColor : null"
        :data-vv-list-prop-marker-palette="debug ? markerPalette : null"
        :data-vv-list-prop-size="debug ? size : null"
        :data-vv-list-prop-tag="debug ? tag : null"
    >
        <slot/>
    </VvList>

</template>

`

return output

}
