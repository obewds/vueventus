<!-- ./src/components/anchors/VvAnchor.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

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
                type: String,
                default: VvConfig.defaults.VvAnchor.buttonSize,
            },
            color: {
                type: String,
                default: VvConfig.defaults.VvAnchor.color,
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
                type: String,
                default: VvConfig.defaults.VvAnchor.palette,
            },
        },

        setup(props){

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
                            output.push( vv.buttons.blockSizes[props.buttonSize] as string )
                        }
                        
                    } else if (props.buttonBlock === false && props.buttonFab === true) {

                        if ( vv?.buttons?.fabBase() ) {
                            output.push( vv.buttons.fabBase() )
                        }

                        if ( props.buttonSize !== '' && vv?.buttons?.fabSizes?.[props.buttonSize] ) {
                            output.push( vv.buttons.fabSizes[props.buttonSize] as string )
                        }

                    } else {

                        if ( vv?.buttons?.base() ) {
                            output.push( vv.buttons.base() )
                        }

                        if ( props.buttonSize !== '' && vv?.buttons?.sizes?.[props.buttonSize] ) {
                            output.push( vv.buttons.sizes[props.buttonSize] as string )
                        }

                    }
                    
                    if ( vv?.buttons?.palettes?.[props.palette as keyof typeof vv.buttons.palettes]?.[props.color] ) {
                        output.push( vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes][props.color] as string )
                    }

                } else {

                    // collect classes for VvAnchor with anchor styling

                    if ( vv?.anchors?.base() ) {
                        output.push( vv.anchors.base() )
                    }


                    if ( vv?.anchors?.palettes?.[props.palette as keyof typeof vv.anchors.palettes]?.[props.color] ) {
                        output.push( vv.anchors.palettes[props.palette as keyof typeof vv.anchors.palettes][props.color] as string )
                    }

                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>
    <a v-if="external" :href="href" :class="classes" target="_blank" rel="noopener noreferrer">
        <slot/>
    </a>
    <a v-else :href="href" :class="classes">
        <slot/>
    </a>
</template>
