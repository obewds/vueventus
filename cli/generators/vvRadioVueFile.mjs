// ./cli/generators/vvRadioVueFile.mjs

export default function () {

    const output = `<!-- ./src/components/vv/inputs/VvRadio.vue -->

<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import { VvRadio } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvRadio },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvRadio.color,
            },
            checked: {
                type: Boolean,
                default: appVv.defaults.VvRadio.checked,
            },
            darkRadioHex: {
                type: String,
                default: appVv.defaults.VvRadio.darkRadioHex,
            },
            lightRadioHex: {
                type: String,
                default: appVv.defaults.VvRadio.lightRadioHex,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvRadio.palette,
            },
            size: {
                type: String,
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
    <VvRadio
        :checked="checked"
        :color="color"
        :dark-radio-hex="darkRadioHex"
        :light-radio-hex="lightRadioHex"
        :palette="palette"
        :size="size"
        :value="value"
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
