<!--
    ./src/components/buttons/VvEl.vue
    @/components/buttons/VvEl.vue
-->


<script setup>

    import { computed, inject } from 'vue'
    import Buttons from '../../configs/Buttons.js'
    import Transitions from '../../configs/Transitions.js'
    import ButtonOutline from '../../configs/palettes/ButtonOutline.js'
    import ButtonSolid from '../../configs/palettes/ButtonSolid.js'

    const props = defineProps({
        borderPalette: {
            type: String,
            default: 'default',
        },
        borderColor: {
            type: String,
            default: 'default',
        },
        groundPalette: {
            type: String,
            default: 'default',
        },
        groundColor: {
            type: String,
            default: 'default',
        },
        tag: {
            type: String,
            default: 'div',
        },
        textPalette: {
            type: String,
            default: 'default',
        },
        textColor: {
            type: String,
            default: 'default',
        },
    })

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : {
        buttons: {
            base: Buttons.base(),
            palettes: {
                outline: ButtonOutline,
                solid: ButtonSolid,
            },
            sizes: Buttons.sizes,
            blockBase: Buttons.blockBase(),
            blockSizes: Buttons.blockSizes,
            fabBase: Buttons.fabBase(),
            fabSizes: Buttons.fabSizes,
        },
    }

    let classes = computed( () => {

        let output = []

        if (props.block === true && props.fab === false) {

            if ( vv?.buttons?.blockBase ) {
                output.push( vv.buttons.blockBase )
            }

            if ( props.size !== '' && vv?.buttons?.blockSizes?.[props.size] ) {
                output.push( vv.buttons.blockSizes[props.size] )
            }

        } else if (props.fab === true && props.block === false) {
            
            if ( vv?.buttons?.fabBase ) {
                output.push( vv.buttons.fabBase )
            }

            if ( props.size !== '' && vv?.buttons?.fabSizes?.[props.size] ) {
                output.push( vv.buttons.fabSizes[props.size] )
            }

        } else {
            
            if ( vv?.buttons?.base ) {
                output.push( vv.buttons.base )
            }

            if ( props.size !== '' && vv?.buttons?.sizes?.[props.size] ) {
                output.push( vv.buttons.sizes[props.size] )
            }

        }  

        if ( props.transitionClasses !== '' ) {
            output.push( props.transitionClasses )
        }

        if ( vv?.buttons?.palettes?.[props.palette]?.[props.color] ) {
            output.push( vv.buttons.palettes[props.palette][props.color] )
        }

        return output.join(' ')

    })

</script>


<template>

    <component :is="tag" :class="classes">
        <slot/>
    </component>

</template>
