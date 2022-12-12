<!-- ./src/components/buttons/VvButton.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import ValidButtonTypes from '../../validators/ValidButtonTypes'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'

    export default defineComponent({

        name: 'VvButton',

        props: {
            block: {
                type: Boolean,
                default: VvConfig.defaults.VvButton.block,
            },
            color: {
                type: String,
                default: VvConfig.defaults.VvButton.color,
            },
            fab: {
                type: Boolean,
                default: VvConfig.defaults.VvButton.fab,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvButton.palette,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvButton.size,
            },
            type: {
                type: String as PropType<ValidButtonTypes>,
                default: VvConfig.defaults.VvButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

        setup(props){

            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            const btnType = props.type as ValidButtonTypes

            let classes = computed( () => {

                let output: string[] = []

                if (props.block === true && props.fab === false) {
                    if ( vv?.buttons?.blockBase() ) {
                        output.push( vv.buttons.blockBase() )
                    }
                    if ( props.size !== '' && vv?.buttons?.blockSizes?.[props.size] ) {
                        output.push( vv.buttons.blockSizes[props.size] as string )
                    }
                } else if (props.fab === true && props.block === false) {
                    if ( vv?.buttons?.fabBase() ) {
                        output.push( vv.buttons.fabBase() )
                    }
                    if ( props.size !== '' && vv?.buttons?.fabSizes?.[props.size] ) {
                        output.push( vv.buttons.fabSizes[props.size] as string )
                    }
                } else {
                    if ( vv?.buttons?.base() ) {
                        output.push( vv.buttons.base() )
                    }
                    if ( props.size !== '' && vv?.buttons?.sizes?.[props.size] ) {
                        output.push( vv.buttons.sizes[props.size] as string )
                    }
                }
                if ( vv?.buttons?.palettes?.[props.palette as keyof typeof vv.buttons.palettes]?.[props.color] ) {
                    output.push( vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes][props.color] as string )
                }

                return output.join(' ').trim()

            })

            return { btnType, classes }

        }

    })

</script>


<template>

    <button :type="btnType" :class="classes">
        <slot/>
    </button>

</template>
