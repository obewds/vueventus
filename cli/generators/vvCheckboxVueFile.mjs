// ./cli/generators/vvCheckboxVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/Checkbox.vue' : './src/components/vv/inputs/VvCheckbox.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors, DefaultValidationPalettes, SizesInputs } from '@obewds/vueventus'

    import { computed, defineComponent } from 'vue'
    import { VvCheckbox as LibVvCheckbox } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvCheckbox },

        props: {
            checked: {
                type: Boolean,
                default: appVv.defaults.VvCheckbox.checked,
            },
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: appVv.defaults.VvCheckbox.color,
            },
            darkCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.darkCheckHex,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvEl.debug,
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
    <LibVvCheckbox
        :checked="checked"
        :color="color"
        :dark-check-hex="darkCheckHex"
        :debug="debug"
        :light-check-hex="lightCheckHex"
        :palette="palette"
        :size="size"
        :data-vv-checkbox-prop-checked="debug ? checked : null"
        :data-vv-checkbox-prop-color="debug ? color : null"
        :data-vv-checkbox-prop-dark-check-hex="debug ? darkCheckHex : null"
        :data-vv-checkbox-prop-light-check-hex="debug ? lightCheckHex : null"
        :data-vv-checkbox-prop-palette="debug ? palette : null"
        :data-vv-checkbox-prop-size="debug ? size : null"
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
