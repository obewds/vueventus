<!-- ./src/components/lists/VvList.vue -->


<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import ValidListTypes from '../../validators/ValidListTypes'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'

    export default defineComponent({

        name: 'VvList',

        props: {
            listStyleTypeClass: {
                type: String,
                default: VvConfig.defaults.VvList.listStyleTypeClass,
            },
            markerColor: {
                type: String,
                default: VvConfig.defaults.VvList.markerColor,
            },
            markerPalette: {
                type: String,
                default: VvConfig.defaults.VvList.markerPalette,
            },
            size: {
                type: String,
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

            let baseClasses = vv?.lists.base()

            let classes = computed( () => {

                let output = [baseClasses]

                if ( vv?.lists?.sizes?.[props.size] ) {
                    output.push( vv.lists.sizes[props.size] )
                }

                if ( vv?.lists?.palettes?.[props.markerPalette as keyof typeof vv.lists.palettes]?.[String(props.markerColor)] ) {
                    output.push( vv.lists.palettes[props.markerPalette as keyof typeof vv.lists.palettes][String(props.markerColor)] )
                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>

    <component :is="tag" :class="[listStyleTypeClass, classes]" role="list">
        <slot/>
    </component>
    
</template>
