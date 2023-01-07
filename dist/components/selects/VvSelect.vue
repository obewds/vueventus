<!-- ./src/components/selects/VvSelect.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors'
    import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes'
    import type { SizesSelects } from '../../types/SizesSelects'

    export default defineComponent({

        name: 'VvSelect',

        emits: ['update:modelValue'],

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: VvConfig.defaults.VvSelect.color,
            },
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvSelect.debug,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: VvConfig.defaults.VvSelect.palette,
            },
            size: {
                type: String as PropType<keyof SizesSelects>,
                default: VvConfig.defaults.VvSelect.size,
            },
            modelValue: {
                type: String,
                default: '',
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output: string[] = []

                if ( vv?.selects?.base() ) {
                    output.push( vv.selects.base() )
                }

                if ( props.size !== '' && vv?.selects?.sizes?.[props.size] ) {
                    output.push( String(vv.selects.sizes[props.size]) )
                }

                if ( vv?.selects?.palettes?.[props.palette]?.[props.color] ) {
                    output.push( String(vv.selects.palettes[props.palette][props.color]) )
                }

                return output.join(' ').trim()

            })

            /* c8 ignore start */
            const handleSelectChange = (event: Event) => (event.target as HTMLSelectElement).value
            /* c8 ignore end */

            return { classes, handleSelectChange }

        },

    })

</script>


<template>
    <select
        :class="classes"
        :value="modelValue"
        @change="$emit('update:modelValue', handleSelectChange($event))"
        :data-vv-select-generated-classes="debug ? classes : null"
        :data-vv-select-prop-color="debug ? color : null"
        :data-vv-select-prop-model-value="debug ? modelValue : null"
        :data-vv-select-prop-palette="debug ? palette : null"
        :data-vv-select-prop-size="debug ? size : null"
    >
        <slot/>
    </select>
</template>
