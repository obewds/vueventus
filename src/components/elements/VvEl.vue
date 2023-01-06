<!-- ./src/components/elements/VvEl.vue -->

<script lang="ts">

    import { computed, defineComponent, inject } from 'vue'
    import ValidElementTags from '../../validators/ValidElementTags'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { DefaultPalettes } from '../../types/DefaultPalettes'
    import type { SizesText } from '../../types/SizesText'

    export default defineComponent({

        name: 'VvEl',

        props: {
            borderPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvEl.borderPalette,
            },
            borderColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvEl.borderColor,
            },
            // TODO: add "debug" prop to docs
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvEl.debug,
            },
            groundPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvEl.groundPalette,
            },
            groundColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvEl.groundColor,
            },
            size: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvEl.size,
            },
            tag: {
                type: String as PropType<ValidElementTags>,
                default: VvConfig.defaults.VvEl.tag,
                validator: (prop: ValidElementTags) => (ValidElementTags).includes(prop),
            },
            textPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvEl.textPalette,
            },
            textColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvEl.textColor,
            },
        },

        setup (props) {
            
            const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

            let classes = computed( () => {

                let output = []

                if ( vv?.text?.sizes?.[props.size] ) {
                    output.push( vv.text.sizes[props.size] )
                }

                if ( vv?.borders?.palettes?.[props.borderPalette]?.[props.borderColor] ) {
                    output.push( vv.borders.palettes[props.borderPalette][props.borderColor] )
                }

                if ( vv?.grounds?.palettes?.[props.groundPalette]?.[props.groundColor] ) {
                    output.push( vv.grounds.palettes[props.groundPalette][props.groundColor] )
                }

                if ( vv?.text?.palettes?.[props.textPalette]?.[props.textColor] ) {
                    output.push( vv.text.palettes[props.textPalette][props.textColor] )
                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

</script>


<template>

    <component
        :is="tag"
        :class="classes"
        :data-vv-el-generated-classes="debug ? classes : null"
        :data-vv-el-prop-border-palette="debug ? borderPalette : null"
        :data-vv-el-prop-border-color="debug ? borderColor : null"
        :data-vv-el-prop-ground-palette="debug ? groundPalette : null"
        :data-vv-el-prop-ground-color="debug ? groundColor : null"
        :data-vv-el-prop-size="debug ? size : null"
        :data-vv-el-prop-tag="debug ? tag : null"
        :data-vv-el-prop-text-palette="debug ? textPalette : null"
        :data-vv-el-prop-text-color="debug ? textColor : null"
    >
        <slot/>
    </component>

</template>
