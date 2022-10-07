<!-- ./src/components/lists/VvListItem.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvListItem',

        props: {
            color: {
                type: String,
                default: VvConfig.defaults.VvListItem.color,
            },
            enableColoredSymbols: {
                type: Boolean,
                default: VvConfig.defaults.VvListItem.enableColoredSymbols,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvListItem.palette,
            },
            symbolColor: {
                type: String,
                default: VvConfig.defaults.VvListItem.symbolColor,
            },
            symbolPalette: {
                type: String,
                default: VvConfig.defaults.VvListItem.symbolPalette,
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let baseClasses = vv?.text.base()

            let classes = computed( () => {

                let output = [baseClasses]

                if ( vv?.text?.palettes?.[props.palette as keyof typeof vv.text.palettes]?.[props.color] ) {
                    output.push( vv.text.palettes[props.palette as keyof typeof vv.text.palettes][props.color] )
                }

                return output.join(' ').trim()

            })

            let symbolClasses = computed( () => {

                let output: string[] = []

                if ( vv?.text?.palettes?.[props.symbolPalette as keyof typeof vv.text.palettes]?.[props.symbolColor] ) {
                    output.push( vv.text.palettes[props.symbolPalette as keyof typeof vv.text.palettes][props.symbolColor] as string )
                }

                return output.join(' ').trim()

            })

            return { classes, symbolClasses }

        },

    })

</script>


<template>
    <li :class="enableColoredSymbols === true ? symbolClasses : classes">
        <template v-if="enableColoredSymbols === true">
            <span :class="[classes]">
                <slot/>
            </span>
        </template>
        <template v-else>
            <slot/>
        </template>
    </li>
</template>
