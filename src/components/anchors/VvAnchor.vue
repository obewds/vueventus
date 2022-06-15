<!--
    ./src/components/anchors/VvAnchor.vue
    @/components/anchors/VvAnchor.vue
-->

<script setup>

    import { computed, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    const props = defineProps({
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
    })

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

    let classes = computed( () => {

        let output = []

        if ( props.button === true ) {

            // collect classes for VvAnchor with button styling

            if (props.buttonBlock === true && props.buttonFab === false) {

                if ( vv?.buttons?.blockBase() ) {
                    output.push( vv.buttons.blockBase() )
                }

                if ( props.buttonSize !== '' && vv?.buttons?.blockSizes?.[props.buttonSize] ) {
                    output.push( vv.buttons.blockSizes[props.buttonSize] )
                }
                
            } else if (props.buttonBlock === false && props.buttonFab === true) {

                if ( vv?.buttons?.fabBase() ) {
                    output.push( vv.buttons.fabBase() )
                }

                if ( props.buttonSize !== '' && vv?.buttons?.fabSizes?.[props.buttonSize] ) {
                    output.push( vv.buttons.fabSizes[props.buttonSize] )
                }

            } else {

                if ( vv?.buttons?.base() ) {
                    output.push( vv.buttons.base() )
                }

                if ( props.buttonSize !== '' && vv?.buttons?.sizes?.[props.buttonSize] ) {
                    output.push( vv.buttons.sizes[props.buttonSize] )
                }

            }

            if ( vv?.buttons?.palettes?.[props.palette]?.[props.color] ) {
                output.push( vv.buttons.palettes[props.palette][props.color] )
            }

        } else {

            // collect classes for VvAnchor with anchor styling

            if ( vv?.anchors?.base() ) {
                output.push( vv.anchors.base() )
            }

            if ( vv?.anchors?.palettes?.[props.palette]?.[props.color] ) {
                output.push( vv.anchors.palettes[props.palette][props.color] )
            }

        }

        return output.join(' ').trim()

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
