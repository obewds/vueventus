<!-- ./src/components/inputs/VvRadio.vue -->

<script lang="ts">

    import { computed, defineComponent, inject, ref } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvRadio',

        emits: ['update:modelValue'],

        props: {
            color: {
                type: String,
                default: VvConfig.defaults.VvRadio.color,
            },
            checked: {
                type: Boolean,
                default: VvConfig.defaults.VvRadio.checked,
            },
            darkRadioHex: {
                type: String,
                default: VvConfig.defaults.VvRadio.darkRadioHex,
            },
            lightRadioHex: {
                type: String,
                default: VvConfig.defaults.VvRadio.lightRadioHex,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvRadio.palette,
            },
            size: {
                type: String,
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

                if ( vv?.radios?.palettes?.[props.palette as keyof typeof vv.radios.palettes]?.[props.color] ) {
                    output.push( vv.radios.palettes[props.palette as keyof typeof vv.radios.palettes][props.color] )
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
        @change="$emit('update:modelValue', handleRadioChange($event as any))"
        :data-test="(darkRadioCssUrl ? darkRadioHex : '') + (lightRadioCssUrl ? lightRadioHex : '')"
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
