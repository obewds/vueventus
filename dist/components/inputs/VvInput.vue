<!-- ./src/components/inputs/VvInput.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import ValidInputTypes from '../../validators/ValidInputTypes'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'

    export default defineComponent({

        name: 'VvInput',

        emits: ['update:modelValue'],

        props: {
            color: {
                type: String,
                default: VvConfig.defaults.VvInput.color,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvInput.palette,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvInput.size,
            },
            type: {
                type: String as PropType<ValidInputTypes>,
                default: VvConfig.defaults.VvInput.type,
                validator: (prop: ValidInputTypes) => (ValidInputTypes).includes(prop),
            },
            modelValue: {
                type: String,
                default: '',
            },
        },

        setup (props, context) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output: string[] = []

                if ( vv?.inputs?.base() ) {
                    output.push( vv.inputs.base() )
                }

                if ( props.size !== '' && vv?.inputs?.sizes?.[props.size] ) {
                    output.push( vv.inputs.sizes[props.size] as string )
                }

                if ( vv?.inputs?.palettes?.[props.palette as keyof typeof vv.inputs.palettes]?.[props.color] ) {
                    output.push( vv.inputs.palettes[props.palette as keyof typeof vv.inputs.palettes][props.color] as string )
                }

                return output.join(' ').trim()

            })

            const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value

            return { classes, handleInputChange }

        },

    })

</script>


<template>
    <input
        :type="type"
        :class="classes"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event as Event))"
    >
</template>
