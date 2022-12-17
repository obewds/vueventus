<!-- ./src/components/textareas/VvTextarea.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultValidationPaletteColors } from '../../types/DefaultValidationPaletteColors'
    import type { DefaultValidationPalettes } from '../../types/DefaultValidationPalettes'
    import type { TextareasRowSizes } from '../../types/TextareasRowSizes'
    import type { TextareasSizes } from '../../types/TextareasSizes'

    export default defineComponent({

        name: 'VvTextarea',

        emits: ['update:modelValue'],

        props: {
            color: {
                type: String as PropType<keyof DefaultValidationPaletteColors>,
                default: VvConfig.defaults.VvTextarea.color,
            },
            palette: {
                type: String as PropType<keyof DefaultValidationPalettes>,
                default: VvConfig.defaults.VvTextarea.palette,
            },
            size: {
                type: String as PropType<keyof TextareasSizes>,
                default: VvConfig.defaults.VvTextarea.size,
            },
            rowSize: {
                type: String as PropType<keyof TextareasRowSizes>,
                default: VvConfig.defaults.VvTextarea.rowSize,
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

                if ( vv?.textareas?.base() ) {
                    output.push( vv.textareas.base() )
                }

                if ( props.size !== '' && vv?.textareas?.sizes?.[props.size as keyof typeof vv.textareas.sizes] ) {
                    output.push( vv.textareas.sizes[props.size as keyof typeof vv.textareas.sizes] as string )
                }

                if ( vv?.textareas?.palettes?.[props.palette as keyof typeof vv.textareas.palettes]?.[props.color] ) {
                    output.push( vv.textareas.palettes[props.palette as keyof typeof vv.textareas.palettes][props.color] as string )
                }

                return output.join(' ').trim()

            })

            let rows = computed( () => {
                if ( props.rowSize !== '' && vv?.textareas?.rowSizes?.[props.rowSize as keyof typeof vv.textareas.rowSizes] ) {
                    return vv.textareas.rowSizes[props.rowSize as keyof typeof vv.textareas.rowSizes]
                }
            })

            const handleTextareaChange = (event: Event) => (event.target as HTMLTextAreaElement).value

            return { classes, rows, handleTextareaChange }

        },

    })

</script>


<template>

    <textarea
        :class="classes"
        :rows="rows"
        :value="modelValue"
        @input="$emit('update:modelValue', handleTextareaChange($event as Event))"
    />

</template>
