<!-- ./src/components/lists/VvList.vue -->


<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import ValidListTypes from '../../validators/ValidListTypes'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { DefaultPalettes } from '../../types/DefaultPalettes'
    import type { SizesText } from '../../types/SizesText'

    export default defineComponent({

        name: 'VvList',

        props: {
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvList.debug,
            },
            listStyleTypeClass: {
                type: String,
                default: VvConfig.defaults.VvList.listStyleTypeClass,
            },
            markerColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvList.markerColor,
            },
            markerPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvList.markerPalette,
            },
            size: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvList.size,
            },
            tag: {
                type: String as PropType<ValidListTypes>,
                default: VvConfig.defaults.VvList.tag,
                validator: (prop: ValidListTypes) => (ValidListTypes).includes(prop),
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []
                
                if ( vv?.text.base() ) {
                    output.push(vv?.text.base())
                }

                if ( vv?.lists?.sizes?.[props.size] ) {
                    output.push( vv.lists.sizes[props.size] )
                }

                if ( vv?.lists?.palettes?.[props.markerPalette]?.[props.markerColor] ) {
                    output.push( String(vv.lists.palettes[props.markerPalette][props.markerColor]) )
                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>

    <component
        :is="tag"
        :class="[listStyleTypeClass, classes]"
        role="list"
        :data-vv-list-generated-classes="debug ? classes : null"
        :data-vv-list-prop-list-style-type-class="debug ? listStyleTypeClass : null"
        :data-vv-list-prop-marker-color="debug ? markerColor : null"
        :data-vv-list-prop-marker-palette="debug ? markerPalette : null"
        :data-vv-list-prop-size="debug ? size : null"
        :data-vv-list-prop-tag="debug ? tag : null"
        
    >
        <slot/>
    </component>
    
</template>
