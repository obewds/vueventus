// ./cli/generators/vvButtonVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/Button.vue' : './src/components/vv/buttons/VvButton.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, SizesButtons } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, VvButton as LibVvButton } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvButton },

        props: {
            block: {
                type: Boolean,
                default: appVv.defaults.VvButton.block,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvButton.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvButton.debug,
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
    <LibVvButton
        :block="block"
        :color="color"
        :debug="debug"
        :fab="fab"
        :palette="palette"
        :size="size"
        :type="(type as ValidButtonTypes)"
        :data-vv-button-prop-block="debug ? block : null"
        :data-vv-button-prop-color="debug ? color : null"
        :data-vv-button-prop-fab="debug ? fab : null"
        :data-vv-button-prop-palette="debug ? palette : null"
        :data-vv-button-prop-size="debug ? size : null"
        :data-vv-button-prop-type="debug ? type : null"
    >
        <slot/>
    </LibVvButton>
</template>

`

return output

}
