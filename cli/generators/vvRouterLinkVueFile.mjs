// ./cli/generators/vvRouterLinkVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/anchors/VvRouterLink.vue -->


<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import appVv from '../../../app.vv'

    export default defineComponent({
        
        props: {
            button: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.button,
            },
            buttonBlock: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonFab,
            },
            buttonSize: {
                type: String,
                default: appVv.defaults.VvAnchor.buttonSize,
            },
            color: {
                type: String,
                default: appVv.defaults.VvAnchor.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvAnchor.palette,
            },
            to: {
                type: String,
                required: true,
            },
        },

        setup(props){

            let vv = appVv

            let classes = computed( () => {

                let output = []

                if ( props.button === true ) {

                    // collect classes for VvAnchor with button styling

                    if (props.buttonBlock === true && props.buttonFab === false) {

                        if ( vv.buttons.blockBase() ) {
                            output.push( vv.buttons.blockBase() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.blockSizes[props.buttonSize as string] ) {
                            output.push( vv.buttons.blockSizes[props.buttonSize as string] )
                        }
                        
                    } else if (props.buttonBlock === false && props.buttonFab === true) {

                        if ( vv.buttons.fabBase() ) {
                            output.push( vv.buttons.fabBase() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.fabSizes[props.buttonSize as string] ) {
                            output.push( vv.buttons.fabSizes[props.buttonSize as string] )
                        }

                    } else {

                        if ( vv.buttons.base() ) {
                            output.push( vv.buttons.base() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.sizes[props.buttonSize as string] ) {
                            output.push( vv.buttons.sizes[props.buttonSize as string] )
                        }

                    }
                    
                    if ( vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes] && vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes][props.color as string] ) {
                        output.push( vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes][props.color as string] )
                    }

                } else {

                    // collect classes for VvAnchor with anchor styling

                    if ( vv.anchors.base() ) {
                        output.push( vv.anchors.base() )
                    }


                    if ( vv.anchors.palettes[props.palette as keyof typeof vv.anchors.palettes][props.color as string] ) {
                        output.push( vv.anchors.palettes[props.palette as keyof typeof vv.anchors.palettes][props.color as string] )
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
    




