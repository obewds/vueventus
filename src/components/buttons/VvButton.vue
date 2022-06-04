<!--
    ./src/components/buttons/VvButton.vue
    @/components/buttons/VvButton.vue
-->


<script setup>

    import { computed, inject } from 'vue'
    import ValidButtonTypes from '../../validators/ValidButtonTypes.js'
    import VvConfig from '../../configs/VvConfig.js'

    const props = defineProps({
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
        transitionClasses: {
            type: String,
            default: VvConfig.transitions.classes(),
        },
        type: {
            type: String,
            default: VvConfig.defaults.VvButton.type,
            validator: (prop) => (ValidButtonTypes).includes(prop),
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
