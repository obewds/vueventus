// ./cli/helpers/generateVvColorModeButtonVueFile.mjs

// TODO: integrate this module into cli build
// TODO: delete original stubs/vite-ssg and stubs/vue-ts VvScrollUp.vue files

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
                default: appVv.colorMode.dark.ground,
            },
            groundDarkHex: {
                type: String,
                default: appVv.colorMode.dark.hex,
            },
            groundLight: {
                type: String,
                default: appVv.colorMode.light.ground,
            },
            groundLightHex: {
                type: String,
                default: appVv.colorMode.light.hex,
            },
            textDark: {
                type: String,
                default: appVv.colorMode.dark.text,
            },
            textLight: {
                type: String,
                default: appVv.colorMode.light.text,
            },
            titleDark: {
                type: String,
                default: appVv.colorMode.dark.title,
            },
            titleLight: {
                type: String,
                default: appVv.colorMode.light.title,
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
