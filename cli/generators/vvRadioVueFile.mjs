// ./cli/generators/vvRadioVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/Radio.vue' : './src/components/vv/anchors/VvRadio.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesInputs } from '@obewds/vueventus'

    import { computed, defineComponent } from 'vue'
    import { VvRadio as LibVvRadio } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvRadio },

        props: {
            checked: {
                type: Boolean,
                default: appVv.defaults.VvRadio.checked,
            },
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvRadio.color,
            },
            darkRadioHex: {
                type: String,
                default: appVv.defaults.VvRadio.darkRadioHex,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvRadio.debug,
            },
            lightRadioHex: {
                type: String,
                default: appVv.defaults.VvRadio.lightRadioHex,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvRadio.palette,
            },
            size: {
                type: String as PropType<keyof SizesInputs>,
                default: appVv.defaults.VvRadio.size,
            },
            value: {
                type: String,
                required: true,
            },
        },

        setup (props) {

            // Source: https://github.com/tailwindlabs/tailwindcss-forms/issues/27#issuecomment-820958958
            // TIP: Fill color should start with # equivalent ("%23") immediately followed by the color hex value!
            function radioSvgUrl (string: string): string {
                return [
                    'url("data:image/svg+xml,%3csvg viewBox=',
                    "'0 0 16 16' fill='%23",
                    string,
                    "' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'",
                    '/%3e%3c/svg%3e")',
                ].join('')
            }

            let darkRadioSvgTest = radioSvgUrl( (props.darkRadioHex as string).replace(/#/g, '') )
            let lightRadioSvgTest =  radioSvgUrl( (props.lightRadioHex as string).replace(/#/g, '') )

            /* c8 ignore start */
            let darkRadioCssUrl = computed( () => {
                return radioSvgUrl( (props.darkRadioHex as string).replace(/#/g, '') )
            })
            let lightRadioCssUrl = computed( () => {
                return radioSvgUrl( (props.lightRadioHex as string).replace(/#/g, '') )
            })
            /* c8 ignore end */

            return { darkRadioCssUrl, lightRadioCssUrl }

        },

    })

</script>


<template>
    <LibVvRadio
        :checked="checked"
        :color="color"
        :dark-radio-hex="darkRadioHex"
        :debug="debug"
        :light-radio-hex="lightRadioHex"
        :palette="palette"
        :size="size"
        :value="value"
        :data-vv-radio-prop-checked="debug ? checked : null"
        :data-vv-radio-prop-color="debug ? color : null"
        :data-vv-radio-prop-dark-radio-hex="debug ? darkRadioHex : null"
        :data-vv-radio-prop-light-radio-hex="debug ? lightRadioHex : null"
        :data-vv-radio-prop-palette="debug ? palette : null"
        :data-vv-radio-prop-size="debug ? size : null"
        :data-vv-radio-prop-value="debug ? value : null"
    />
</template>


<style scoped>

    /* Set the svg (and thus color) of the TailwindCSS radio dot geometry */
    [type="radio"]:checked {
        background-image: v-bind('lightRadioCssUrl');
    }

    .dark [type="radio"]:checked {
        background-image: v-bind('darkRadioCssUrl');
    }

</style>

`

return output

}
