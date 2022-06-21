<!-- ./src/components/textareas/VvTextarea.vue -->

<!-- #TODO: Add VvTextarea to docs -->

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
            value: {
                type: String,
                default: '',
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []

                let propsPalette = props.palette ? props.palette : String(vv?.defaults.VvTextarea.palette)
                let propsColor = props.color ? props.color : String(vv?.defaults.VvTextarea.color)

                if ( vv?.textareas?.base() ) {
                    output.push( vv.textareas.base() )
                }

                if ( props.size !== '' && vv?.textareas?.sizes?.[props.size as keyof typeof vv.textareas.sizes] ) {
                    output.push( vv.textareas.sizes[props.size as keyof typeof vv.textareas.sizes] )
                }

                if ( vv?.textareas?.palettes?.[propsPalette as keyof typeof vv.textareas.palettes]?.[propsColor] ) {
                    output.push( vv.textareas.palettes[propsPalette as keyof typeof vv.textareas.palettes][propsColor] )
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
    <textarea :class="classes" :rows="rows" :value="value">{{ value }}</textarea>
</template>
