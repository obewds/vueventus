// ./cli/generators/vvListItemVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/ListItem.vue' : './src/components/vv/lists/VvListItem.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvListItem as LibVvListItem } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvListItem },

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
    <LibVvListItem
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
    </LibVvListItem>
</template>

`

return output

}
