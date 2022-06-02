<!--
    ./src/components/buttons/VvButton.vue
    @/components/buttons/VvButton.vue
-->


<script setup>

    import { computed, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    const props = defineProps({
        block: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'default',
        },
        fab: {
            type: Boolean,
            default: false,
        },
        palette: {
            type: String,
            default: 'solid',
        },
        size: {
            type: String,
            default: 'md',
        },
        transitionClasses: {
            type: String,
            default: VvConfig.transitions.classes(),
        },
        type: {
            type: String,
            default: 'button',
            validator: (prop) => ['button', 'submit', 'reset'].includes(prop),
        },
    })

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

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

    <button :type="type" :class="classes">
        <slot/>
    </button>

</template>
