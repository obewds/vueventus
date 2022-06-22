<!-- ./src/components/textareas/VvTextarea.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvTextarea',

        props: {
            color: {
                type: String,
                default: VvConfig.defaults.VvTextarea.color,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvTextarea.palette,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvTextarea.size,
            },
            rowSize: {
                type: String,
                default: VvConfig.defaults.VvTextarea.rowSize,
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []

                if ( vv?.textareas?.base() ) {
                    output.push( vv.textareas.base() )
                }

                if ( props.size !== '' && vv?.textareas?.sizes?.[props.size as keyof typeof vv.textareas.sizes] ) {
                    output.push( vv.textareas.sizes[props.size as keyof typeof vv.textareas.sizes] )
                }

                if ( vv?.textareas?.palettes?.[props.palette as keyof typeof vv.textareas.palettes]?.[props.color] ) {
                    output.push( vv.textareas.palettes[props.palette as keyof typeof vv.textareas.palettes][props.color] )
                }

                return output.join(' ').trim()

            })

            let rows = computed( () => {
                if ( props.rowSize !== '' && vv?.textareas?.rowSizes?.[props.rowSize as keyof typeof vv.textareas.rowSizes] ) {
                    return vv.textareas.rowSizes[props.rowSize as keyof typeof vv.textareas.rowSizes]
                }
            })

            return { classes, rows }

        },

    })

</script>


<template>

    <textarea :class="classes" :rows="rows"/>

</template>
