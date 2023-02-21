// ./cli/generators/vvColorModeButtonVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/ColorModeButton.vue' : './src/components/vv/buttons/VvColorModeButton.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

let clientOnlyOpenTag = useNuxtPaths ? '<ClientOnly>' : ''
let clientOnlyCloseTag = useNuxtPaths ? '</ClientOnly>' : ''

let nuxtIndent = useNuxtPaths ? `    ` : ''

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
    ${clientOnlyOpenTag}
${nuxtIndent}    <LibVvColorModeButton
${nuxtIndent}        :mode="(colorMode as ValidColorModes)"
${nuxtIndent}        :color="color"
${nuxtIndent}        :debug="debug"
${nuxtIndent}        :palette="palette"
${nuxtIndent}        :size="size"
${nuxtIndent}        :ground-dark="groundDark"
${nuxtIndent}        :ground-dark-hex="groundDarkHex"
${nuxtIndent}        :ground-light="groundLight"
${nuxtIndent}        :ground-light-hex="groundLightHex"
${nuxtIndent}        :text-dark="textDark"
${nuxtIndent}        :text-light="textLight"
${nuxtIndent}        :title-dark="titleDark"
${nuxtIndent}        :title-light="titleLight"
${nuxtIndent}        :type="(type as ValidButtonTypes)"
${nuxtIndent}        :data-vv-color-mode-button-prop-color="debug ? color : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-mode="debug ? mode : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-palette="debug ? palette : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-size="debug ? size : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-type="debug ? type : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-ground-dark="debug ? groundDark : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-ground-dark-hex="debug ? groundDarkHex : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-ground-light="debug ? groundLight : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-ground-light-hex="debug ? groundLightHex : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-text-dark="debug ? textDark : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-text-light="debug ? textLight : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-title-dark="debug ? titleDark : null"
${nuxtIndent}        :data-vv-color-mode-button-prop-title-light="debug ? titleLight : null"
${nuxtIndent}    />
    ${clientOnlyCloseTag}
</template>

`

return output

}
