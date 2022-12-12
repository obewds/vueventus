<!-- ./src/components/selects/VvSelect.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvSelect',

        emits: ['update:modelValue'],

        props: {
            color: {
                type: String,
                default: VvConfig.defaults.VvSelect.color,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvSelect.palette,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvSelect.size,
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

                if ( vv?.selects?.base() ) {
                    output.push( vv.selects.base() )
                }

                if ( props.size !== '' && vv?.selects?.sizes?.[props.size] ) {
                    output.push( vv.selects.sizes[props.size] as string )
                }

                if ( vv?.selects?.palettes?.[props.palette as keyof typeof vv.selects.palettes]?.[props.color] ) {
                    output.push( vv.selects.palettes[props.palette as keyof typeof vv.selects.palettes][props.color] as string )
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
    >
        <slot/>
    </select>
</template>
