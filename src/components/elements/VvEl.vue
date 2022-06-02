<!--
    ./src/components/buttons/VvEl.vue
    @/components/buttons/VvEl.vue
-->


<script setup>

    import { computed, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    const props = defineProps({
        borderPalette: {
            type: String,
            default: 'default',
        },
        borderColor: {
            type: String,
            default: '',
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

    const globals = inject('globals')

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

    let classes = computed( () => {

        let output = []

        if ( vv?.borders?.palettes?.[props.borderPalette]?.[props.borderColor] ) {
            output.push( vv.borders.palettes[props.borderPalette][props.borderColor] )
        }

        if ( vv?.grounds?.palettes?.[props.groundPalette]?.[props.groundColor] ) {
            output.push( vv.grounds.palettes[props.groundPalette][props.groundColor] )
        }

        if ( vv?.text?.palettes?.[props.textPalette]?.[props.textColor] ) {
            output.push( vv.text.palettes[props.textPalette][props.textColor] )
        }

        return output.join(' ')

    })

</script>


<template>

    <component :is="tag" :class="classes">
        <slot/>
    </component>

</template>
