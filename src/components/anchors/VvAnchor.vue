<!-- ./src/components/anchors/VvAnchor.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes } from '../../types/DefaultButtonPalettes'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { DefaultPalettes } from '../../types/DefaultPalettes'
    import type { SizesButtons } from '../../types/SizesButtons'
    import type { SizesText } from '../../types/SizesText'

    export default defineComponent({

        name: 'VvAnchor',

        props: {
            button: {
                type: Boolean,
                default: VvConfig.defaults.VvAnchor.button,
            },
            buttonBlock: {
                type: Boolean,
                default: VvConfig.defaults.VvAnchor.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: VvConfig.defaults.VvAnchor.buttonFab,
            },
            buttonSize: {
                type: String as PropType<keyof SizesButtons>,
                default: VvConfig.defaults.VvAnchor.buttonSize,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvAnchor.color,
            },
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvAnchor.debug,
            },
            external: {
                type: Boolean,
                default: VvConfig.defaults.VvAnchor.external,
            },
            href: {
                type: String,
                default: VvConfig.defaults.VvAnchor.href,
            },
            palette: {
                type: String as PropType<keyof DefaultPalettes | keyof DefaultButtonPalettes>,
                default: VvConfig.defaults.VvAnchor.palette,
            },
            textSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvAnchor.textSize,
            },
        },

        setup (props) {

            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output: string[] = []

                if ( props.button === true ) {

                    // collect classes for VvAnchor with button styling

                    if (props.buttonBlock === true && props.buttonFab === false) {

                        if ( vv?.buttons?.blockBase() ) {
                            output.push( vv.buttons.blockBase() )
                        }

                        if ( props.buttonSize !== '' && vv?.buttons?.blockSizes?.[props.buttonSize] ) {
                            output.push( String(vv.buttons.blockSizes[props.buttonSize]) )
                        }
                        
                    } else if (props.buttonBlock === false && props.buttonFab === true) {

                        if ( vv?.buttons?.fabBase() ) {
                            output.push( vv.buttons.fabBase() )
                        }

                        if ( props.buttonSize !== '' && vv?.buttons?.fabSizes?.[props.buttonSize] ) {
                            output.push( String(vv.buttons.fabSizes[props.buttonSize]) )
                        }

                    } else {

                        if ( vv?.buttons?.base() ) {
                            output.push( vv.buttons.base() )
                        }

                        if ( props.buttonSize !== '' && vv?.buttons?.sizes?.[props.buttonSize] ) {
                            output.push( String(vv.buttons.sizes[props.buttonSize]) )
                        }

                    }
                    
                    if ( vv?.buttons?.palettes?.[props.palette]?.[props.color] ) {
                        output.push( String(vv.buttons.palettes[props.palette][props.color]) )
                    }

                } else {

                    // collect classes for VvAnchor with anchor styling

                    if ( vv?.anchors?.base() ) {
                        output.push( vv.anchors.base() )
                    }

                    if ( props.textSize !== '' && vv?.anchors?.sizes?.[props.textSize] ) {
                        output.push( String(vv.anchors.sizes[props.textSize]) )
                    }

                    if ( vv?.anchors?.palettes?.[props.palette]?.[props.color] ) {
                        output.push( String(vv.anchors.palettes[props.palette][props.color]) )
                    }

                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>
    <a
        v-if="external"
        :href="href"
        :class="classes"
        target="_blank"
        rel="noopener noreferrer"
        :data-vv-anchor-generated-classes="debug ? classes : null"
        :data-vv-anchor-prop-button="debug ? button : null"
        :data-vv-anchor-prop-button-block="debug ? buttonBlock : null"
        :data-vv-anchor-prop-button-fab="debug ? buttonFab : null"
        :data-vv-anchor-prop-button-size="debug ? buttonSize : null"
        :data-vv-anchor-prop-color="debug ? color : null"
        :data-vv-anchor-prop-external="debug ? external : null"
        :data-vv-anchor-prop-href="debug ? href : null"
        :data-vv-anchor-prop-palette="debug ? palette : null"
        :data-vv-anchor-prop-text-size="debug ? textSize : null"
    >
        <slot/>
    </a>
    <a
        v-else
        :href="href"
        :class="classes"
        :data-vv-anchor-generated-classes="debug ? classes : null"
        :data-vv-anchor-prop-button="debug ? button : null"
        :data-vv-anchor-prop-button-block="debug ? buttonBlock : null"
        :data-vv-anchor-prop-button-fab="debug ? buttonFab : null"
        :data-vv-anchor-prop-button-size="debug ? buttonSize : null"
        :data-vv-anchor-prop-color="debug ? color : null"
        :data-vv-anchor-prop-external="debug ? external : null"
        :data-vv-anchor-prop-href="debug ? href : null"
        :data-vv-anchor-prop-palette="debug ? palette : null"
        :data-vv-anchor-prop-text-size="debug ? textSize : null"
    >
        <slot/>
    </a>
</template>
