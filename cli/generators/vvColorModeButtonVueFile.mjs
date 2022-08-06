// ./cli/generators/vvColorModeButtonVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/buttons/VvColorModeButton.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, ValidColorModes, VvColorModeButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvColorModeButton },

        props: {
            mode: {
                type: String,
                default: appVv.defaults.VvColorModeButton.mode,
                validator: (prop: ValidColorModes) => (ValidColorModes).includes(prop),
            },
            color: {
                type: String,
                default: appVv.defaults.VvColorModeButton.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvColorModeButton.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvColorModeButton.size,
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
                type: String,
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
    <VvColorModeButton
        :mode="(colorMode as string)"
        :color="color"
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
        :type="type"
    />
</template>

`

return output

}
