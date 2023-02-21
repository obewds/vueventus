// ./cli/generators/vvElVueFile.mjs

export default function () {

let commentPath = useNuxtPaths ? './components/Vv/El.vue' : './src/components/vv/anchors/VvEl.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes, SizesText } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { ValidElementTags, VvEl as LibVvEl } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvEl },

        props: {
            borderPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvEl.borderPalette,
            },
            borderColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvEl.borderColor,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvEl.debug,
            },
            groundPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvEl.groundPalette,
            },
            groundColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvEl.groundColor,
            },
            size: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvEl.size,
            },
            tag: {
                type: String as PropType<ValidElementTags>,
                default: appVv.defaults.VvEl.tag,
                validator: (prop: ValidElementTags) => (ValidElementTags).includes(prop),
            },
            textPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvEl.textPalette,
            },
            textColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvEl.textColor,
            },
        },

    })

</script>


<template>

    <LibVvEl
        :border-palette="borderPalette"
        :border-color="borderColor"
        :debug="debug"
        :ground-palette="groundPalette"
        :ground-color="groundColor"
        :size="size"
        :tag="tag"
        :text-palette="textPalette"
        :text-color="textColor"
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
    </LibVvEl>

</template>

`

return output

}
