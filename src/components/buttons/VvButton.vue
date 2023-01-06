<!-- ./src/components/buttons/VvButton.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import ValidButtonTypes from '../../validators/ValidButtonTypes'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes } from '../../types/DefaultButtonPalettes'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { SizesButtons } from '../../types/SizesButtons'

    export default defineComponent({

        name: 'VvButton',

        props: {
            block: {
                type: Boolean,
                default: VvConfig.defaults.VvButton.block,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvButton.color,
            },
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvButton.debug,
            },
            fab: {
                type: Boolean,
                default: VvConfig.defaults.VvButton.fab,
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: VvConfig.defaults.VvButton.palette,
            },
            size: {
                type: String as PropType<keyof SizesButtons>,
                default: VvConfig.defaults.VvButton.size,
            },
            type: {
                type: String as PropType<ValidButtonTypes>,
                default: VvConfig.defaults.VvButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

        setup (props) {

            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []

                if (props.block === true && props.fab === false) {

                    if ( vv?.buttons?.blockBase() ) {
                        output.push( vv.buttons.blockBase() )
                    }

                    if ( props.size !== '' && vv?.buttons?.blockSizes?.[props.size] ) {
                        output.push( vv.buttons.blockSizes[props.size] )
                    }

                } else if (props.fab === true && props.block === false) {

                    if ( vv?.buttons?.fabBase() ) {
                        output.push( vv.buttons.fabBase() )
                    }

                    if ( props.size !== '' && vv?.buttons?.fabSizes?.[props.size] ) {
                        output.push( vv.buttons.fabSizes[props.size] )
                    }

                } else {

                    if ( vv?.buttons?.base() ) {
                        output.push( vv.buttons.base() )
                    }

                    if ( props.size !== '' && vv?.buttons?.sizes?.[props.size] ) {
                        output.push( vv.buttons.sizes[props.size] )
                    }

                }

                if ( vv?.buttons?.palettes?.[props.palette]?.[props.color] ) {
                    output.push( vv.buttons.palettes[props.palette][props.color] )
                }

                return output.join(' ').trim()

            })

            return { classes }

        }

    })

</script>


<template>

    <button
        :class="classes"
        :type="type"
        :data-vv-button-generated-classes="debug ? classes : null"
        :data-vv-button-prop-block="debug ? block : null"
        :data-vv-button-prop-color="debug ? color : null"
        :data-vv-button-prop-fab="debug ? fab : null"
        :data-vv-button-prop-palette="debug ? palette : null"
        :data-vv-button-prop-size="debug ? size : null"
        :data-vv-button-prop-type="debug ? type : null"
    >
        <slot/>
    </button>

</template>
