<!-- ./src/components/lists/VvListItem.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { DefaultPalettes } from '../../types/DefaultPalettes'

    export default defineComponent({

        name: 'VvListItem',

        props: {
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvListItem.color,
            },
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvListItem.debug,
            },
            enableColoredSymbols: {
                type: Boolean,
                default: VvConfig.defaults.VvListItem.enableColoredSymbols,
            },
            palette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvListItem.palette,
            },
            symbolColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvListItem.symbolColor,
            },
            symbolPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvListItem.symbolPalette,
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output: string[] = []

                if ( vv?.text.base() ) {
                    output.push( vv?.text.base() )
                }

                if ( vv?.text?.palettes?.[props.palette]?.[props.color] ) {
                    output.push( String(vv.text.palettes[props.palette][props.color]) )
                }

                return output.join(' ').trim()

            })

            let symbolClasses = computed( () => {

                let output: string[] = []

                if ( vv?.text?.palettes?.[props.symbolPalette]?.[props.symbolColor] ) {
                    output.push( String(vv.text.palettes[props.symbolPalette][props.symbolColor]) )
                }

                return output.join(' ').trim()

            })

            return { classes, symbolClasses }

        },

    })

</script>


<template>
    <li
        :class="enableColoredSymbols === true ? symbolClasses : classes"
        :data-vv-list-item-generated-classes="debug ? classes : null"
        :data-vv-list-item-prop-color="debug ? color : null"
        :data-vv-list-item-prop-enable-colored-symbols="debug ? enableColoredSymbols : null"
        :data-vv-list-item-prop-palette="debug ? palette : null"
        :data-vv-list-item-prop-symbol-classes="debug ? symbolClasses : null"
        :data-vv-list-item-prop-symbol-color="debug ? symbolColor : null"
        :data-vv-list-item-prop-symbol-palette="debug ? symbolPalette : null"
    >
        <template v-if="enableColoredSymbols === true">
            <span
                :class="[classes]"
                :data-vv-list-item-generated-classes="debug ? classes : null"
            >
                <slot/>
            </span>
        </template>
        <template v-else>
            <slot/>
        </template>
    </li>
</template>
