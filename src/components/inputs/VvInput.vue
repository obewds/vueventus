<!--
    ./src/components/inputs/VvInput.vue
    @/components/inputs/VvInput.vue
-->

<script setup>

    import { computed, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    const props = defineProps({
        color: {
            type: String,
            default: VvConfig.defaults.VvInput.color,
        },
        palette: {
            type: String,
            default: VvConfig.defaults.VvInput.palette,
        },
        size: {
            type: String,
            default: VvConfig.defaults.VvInput.size,
        },
        type: {
            type: String,
            default: VvConfig.defaults.VvInput.type,
        },
    })

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

    let classes = computed( () => {

        let output = []

        if ( vv?.inputs?.base() ) {
            output.push( vv.inputs.base() )
        }

        if ( props.size !== '' && vv?.inputs?.sizes?.[props.size] ) {
            output.push( vv.inputs.sizes[props.size] )
        }

        if ( vv?.inputs?.palettes?.[props.palette]?.[props.color] ) {
            output.push( vv.inputs.palettes[props.palette][props.color] )
        }

        return output.join(' ').trim()

    })

</script>


<template>
    <input :type="type" :class="classes">
</template>
