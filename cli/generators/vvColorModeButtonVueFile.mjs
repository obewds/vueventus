// ./cli/generators/vvColorModeButtonVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/ColorModeButton.vue' : './src/components/vv/buttons/VvColorModeButton.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, SizesButtons } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, ValidColorModes, VvColorModeButton as LibVvColorModeButton } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvColorModeButton },

        props: {
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvColorModeButton.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvColorModeButton.debug,
            },
            groundDark: {
                type: String,
                default: appVv.colorModes.dark.ground,
            },
            groundDarkHex: {
                type: String,
                default: appVv.colorModes.dark.hex,
            },
            groundLight: {
                type: String,
                default: appVv.colorModes.light.ground,
            },
            groundLightHex: {
                type: String,
                default: appVv.colorModes.light.hex,
            },
            mode: {
                type: String as PropType<ValidColorModes>,
                default: appVv.defaults.VvColorModeButton.mode,
                validator: (prop: ValidColorModes) => (ValidColorModes).includes(prop),
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: appVv.defaults.VvColorModeButton.palette,
            },
            size: {
                type: String as PropType<keyof SizesButtons>,
                default: appVv.defaults.VvColorModeButton.size,
            },
            textDark: {
                type: String,
                default: appVv.colorModes.dark.text,
            },
            textLight: {
                type: String,
                default: appVv.colorModes.light.text,
            },
            titleDark: {
                type: String,
                default: appVv.colorModes.dark.title,
            },
            titleLight: {
                type: String,
                default: appVv.colorModes.light.title,
            },
            type: {
                type: String as PropType<ValidButtonTypes>,
                default: appVv.defaults.VvColorModeButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

        setup () {

            const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

            return { colorMode }

        },

    })

</script>


<template>
    <LibVvColorModeButton
        :mode="(colorMode as ValidColorModes)"
        :color="color"
        :debug="debug"
        :palette="palette"
        :size="size"
        :ground-dark="groundDark"
        :ground-dark-hex="groundDarkHex"
        :ground-light="groundLight"
        :ground-light-hex="groundLightHex"
        :text-dark="textDark"
        :text-light="textLight"
        :title-dark="titleDark"
        :title-light="titleLight"
        :type="(type as ValidButtonTypes)"
        :data-vv-color-mode-button-prop-color="debug ? color : null"
        :data-vv-color-mode-button-prop-mode="debug ? mode : null"
        :data-vv-color-mode-button-prop-palette="debug ? palette : null"
        :data-vv-color-mode-button-prop-size="debug ? size : null"
        :data-vv-color-mode-button-prop-type="debug ? type : null"
        :data-vv-color-mode-button-prop-ground-dark="debug ? groundDark : null"
        :data-vv-color-mode-button-prop-ground-dark-hex="debug ? groundDarkHex : null"
        :data-vv-color-mode-button-prop-ground-light="debug ? groundLight : null"
        :data-vv-color-mode-button-prop-ground-light-hex="debug ? groundLightHex : null"
        :data-vv-color-mode-button-prop-text-dark="debug ? textDark : null"
        :data-vv-color-mode-button-prop-text-light="debug ? textLight : null"
        :data-vv-color-mode-button-prop-title-dark="debug ? titleDark : null"
        :data-vv-color-mode-button-prop-title-light="debug ? titleLight : null"
    />
</template>

`

return output

}
