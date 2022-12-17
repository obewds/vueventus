// ./cli/generators/vvRouterLinkVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/anchors/VvRouterLink.vue -->


<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, DefaultPalettes, SizesButtons, SizesText } from '@obewds/vueventus'

    export default defineComponent({
        
        props: {
            button: {
                type: Boolean,
                default: appVv.defaults.VvRouterLink.button,
            },
            buttonBlock: {
                type: Boolean,
                default: appVv.defaults.VvRouterLink.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: appVv.defaults.VvRouterLink.buttonFab,
            },
            buttonSize: {
                type: String as PropType<keyof SizesButtons>,
                default: appVv.defaults.VvRouterLink.buttonSize,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvRouterLink.color,
            },
            palette: {
                type: String as PropType<keyof DefaultPalettes | keyof DefaultButtonPalettes>,
                default: appVv.defaults.VvRouterLink.palette,
            },
            textSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvRouterLink.textSize,
            },
            to: {
                type: String,
                required: true,
            },
        },

        setup(props){

            let vv = appVv

            let classes = computed( () => {

                let output: string[] = []

                if ( props.button === true ) {

                    // collect classes for VvRouterLink with button styling

                    if (props.buttonBlock === true && props.buttonFab === false) {

                        if ( vv.buttons.blockBase() ) {
                            output.push( vv.buttons.blockBase() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.blockSizes[props.buttonSize] ) {
                            output.push( vv.buttons.blockSizes[props.buttonSize] as string )
                        }
                        
                    } else if (props.buttonBlock === false && props.buttonFab === true) {

                        if ( vv.buttons.fabBase() ) {
                            output.push( vv.buttons.fabBase() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.fabSizes[props.buttonSize] ) {
                            output.push( vv.buttons.fabSizes[props.buttonSize] as string )
                        }

                    } else {

                        if ( vv.buttons.base() ) {
                            output.push( vv.buttons.base() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.sizes[props.buttonSize] ) {
                            output.push( vv.buttons.sizes[props.buttonSize] as string )
                        }

                    }
                    
                    if ( vv.buttons.palettes[props.palette] && vv.buttons.palettes[props.palette][props.color] ) {
                        output.push( vv.buttons.palettes[props.palette][props.color] as string )
                    }

                } else {

                    // collect classes for VvRouterLink with anchor styling

                    if ( vv.anchors.base() ) {
                        output.push( vv.anchors.base() )
                    }

                    if ( props.textSize !== '' && vv?.anchors?.sizes?.[props.textSize] ) {
                        output.push( vv.anchors.sizes[props.textSize] as string )
                    }


                    if ( vv.anchors.palettes[props.palette][props.color] ) {
                        output.push( vv.anchors.palettes[props.palette][props.color] as string )
                    }

                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>
    <router-link :to="to" :class="classes">
        <slot/>
    </router-link>
</template>

`

return output

}
    




