// ./cli/generators/vvCheckboxVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/inputs/VvCheckbox.vue -->


<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import { VvCheckbox } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesInputs } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvCheckbox },

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvCheckbox.color,
            },
            checked: {
                type: Boolean,
                default: appVv.defaults.VvCheckbox.checked,
            },
            darkCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.darkCheckHex,
            },
            lightCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.lightCheckHex,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: appVv.defaults.VvCheckbox.palette,
            },
            size: {
                type: String as PropType<keyof SizesInputs>,
                default: appVv.defaults.VvCheckbox.size,
            },
        },

        setup (props) {
            
            // Source: https://github.com/tailwindlabs/tailwindcss-forms/issues/27#issuecomment-820958958
            // TIP: Fill color should start with # equivalent ("%23") immediately followed by the color hex value!
            function checkSvgUrl (string: string): string {
                return [
                    'url("data:image/svg+xml,%3csvg viewBox=',
                    "'0 0 16 16'  fill='%23",
                    string,
                    "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
                    '/%3e%3c/svg%3e")'
                ].join('')
            }

            let darkCheckSvgTest = checkSvgUrl( (props.darkCheckHex as string).replace(/#/g, '') )
            let lightCheckSvgTest =  checkSvgUrl( (props.lightCheckHex as string).replace(/#/g, '') )

            /* c8 ignore start */
            let darkCheckCssUrl = computed( () => {
                return checkSvgUrl( (props.darkCheckHex as string).replace(/#/g, '') )
            })
            let lightCheckCssUrl = computed( () => {
                return checkSvgUrl( (props.lightCheckHex as string).replace(/#/g, '') )
            })
            /* c8 ignore end */

            return { darkCheckCssUrl, lightCheckCssUrl }

        },

    })

</script>


<template>
    <VvCheckbox
        :checked="checked"
        :color="color"
        :dark-check-hex="darkCheckHex"
        :light-check-hex="lightCheckHex"
        :palette="palette"
        :size="size"
    />
</template>


<style scoped>

    /* Set the svg (and thus color) of the TailwindCSS checkbox check geometry */
    [type="checkbox"]:checked {
        background-image: v-bind('lightCheckCssUrl');
    }

    .dark [type="checkbox"]:checked {
        background-image: v-bind('darkCheckCssUrl');
    }

</style>

`

return output

}
