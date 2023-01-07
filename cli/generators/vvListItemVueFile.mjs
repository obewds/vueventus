// ./cli/generators/vvListItemVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/lists/VvListItem.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvListItem } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvListItem },

        props: {
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvListItem.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvListItem.debug,
            },
            enableColoredSymbols: {
                type: Boolean,
                default: appVv.defaults.VvListItem.enableColoredSymbols,
            },
            palette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvListItem.palette,
            },
            symbolColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvListItem.symbolColor,
            },
            symbolPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvListItem.symbolPalette,
            },
        },

    })

</script>


<template>
    <VvListItem
        :color="color"
        :debug="debug"
        :enable-colored-symbols="enableColoredSymbols"
        :palette="palette"
        :symbol-color="symbolColor"
        :symbol-palette="symbolPalette"
        :data-vv-list-item-prop-color="debug ? color : null"
        :data-vv-list-item-prop-enable-colored-symbols="debug ? enableColoredSymbols : null"
        :data-vv-list-item-prop-palette="debug ? palette : null"
        :data-vv-list-item-prop-symbol-color="debug ? symbolColor : null"
        :data-vv-list-item-prop-symbol-palette="debug ? symbolPalette : null"
    >
        <slot/>
    </VvListItem>
</template>

`

return output

}
