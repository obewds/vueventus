<!-- ./src/components/elements/VvEl.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvEl',

        props: {
            borderPalette: {
                type: String,
                default: VvConfig.defaults.VvEl.borderPalette,
            },
            borderColor: {
                type: String,
                default: VvConfig.defaults.VvEl.borderColor,
            },
            groundPalette: {
                type: String,
                default: VvConfig.defaults.VvEl.groundPalette,
            },
            groundColor: {
                type: String,
                default: VvConfig.defaults.VvEl.groundColor,
            },
            tag: {
                type: String,
                default: VvConfig.defaults.VvEl.tag,
            },
            textPalette: {
                type: String,
                default: VvConfig.defaults.VvEl.textPalette,
            },
            textColor: {
                type: String,
                default: VvConfig.defaults.VvEl.textColor,
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []

                if ( vv?.borders?.palettes?.[props.borderPalette as keyof typeof vv.borders.palettes]?.[props.borderColor] ) {
                    output.push( vv.borders.palettes[props.borderPalette as keyof typeof vv.borders.palettes][props.borderColor] )
                }

                if ( vv?.grounds?.palettes?.[props.groundPalette as keyof typeof vv.grounds.palettes]?.[props.groundColor] ) {
                    output.push( vv.grounds.palettes[props.groundPalette as keyof typeof vv.grounds.palettes][props.groundColor] )
                }

                if ( vv?.text?.palettes?.[props.textPalette as keyof typeof vv.text.palettes]?.[props.textColor] ) {
                    output.push( vv.text.palettes[props.textPalette as keyof typeof vv.text.palettes][props.textColor] )
                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>

    <component :is="tag" :class="classes">
        <slot/>
    </component>

</template>
