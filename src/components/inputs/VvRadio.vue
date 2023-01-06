<!-- ./src/components/inputs/VvRadio.vue -->

<script lang="ts">

    import { computed, defineComponent, inject, ref } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes'
    import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors'
    import type { SizesInputs } from '../../types/SizesInputs'

    export default defineComponent({

        name: 'VvRadio',

        emits: ['update:modelValue'],

        props: {
            checked: {
                type: Boolean,
                default: VvConfig.defaults.VvRadio.checked,
            },
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: VvConfig.defaults.VvRadio.color,
            },
            darkRadioHex: {
                type: String,
                default: VvConfig.defaults.VvRadio.darkRadioHex,
            },
            // TODO: add "debug" prop to docs
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvRadio.debug,
            },
            lightRadioHex: {
                type: String,
                default: VvConfig.defaults.VvRadio.lightRadioHex,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: VvConfig.defaults.VvRadio.palette,
            },
            size: {
                type: String as PropType<keyof SizesInputs>,
                default: VvConfig.defaults.VvRadio.size,
            },
            value: {
                type: String,
                required: true,
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            const checked = ref(props.checked)

            let classes = computed( () => {

                let output = []

                if ( vv?.radios?.base() ) {
                    output.push( vv.radios.base() )
                }

                if ( props.size !== '' && vv?.radios?.sizes?.[props.size] ) {
                    output.push( vv.radios.sizes[props.size] )
                }

                if ( vv?.radios?.palettes?.[props.palette]?.[props.color] ) {
                    output.push( vv.radios.palettes[props.palette][props.color] )
                }

                return output.join(' ').trim()

            })

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

            let darkRadioCssUrl = computed( () => {
                return radioSvgUrl( (props.darkRadioHex).replace(/#/g, '') )
            })

            let lightRadioCssUrl = computed( () => {
                return radioSvgUrl( (props.lightRadioHex).replace(/#/g, '') )
            })

            const handleRadioChange = (event: Event) => {
                const target = event.target as HTMLInputElement
                checked.value = false // reset checked value to false in case this radio was de-selected
                const isChecked = target.checked
                if (isChecked === true) {
                    checked.value = true
                }
                return checked.value
            }

            return {
                classes,
                darkRadioCssUrl,
                handleRadioChange,
                lightRadioCssUrl,
            }

        },

    })

</script>


<template>
    <input
        type="radio"
        :class="classes"
        :value="value"
        :checked="checked"
        @change="$emit('update:modelValue', handleRadioChange($event as Event))"
        :data-test="(darkRadioCssUrl + lightRadioCssUrl)"
        :data-vv-radio-generated-classes="debug ? classes : null"
        :data-vv-radio-prop-checked="debug ? checked : null"
        :data-vv-radio-prop-color="debug ? color : null"
        :data-vv-radio-prop-dark-radio-hex="debug ? darkRadioHex : null"
        :data-vv-radio-prop-light-radio-hex="debug ? lightRadioHex : null"
        :data-vv-radio-prop-palette="debug ? palette : null"
        :data-vv-radio-prop-size="debug ? size : null"
        :data-vv-radio-prop-value="debug ? value : null"
    >
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
