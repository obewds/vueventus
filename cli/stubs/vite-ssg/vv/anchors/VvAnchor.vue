<!-- ./src/components/vv/anchors/VvAnchor.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvAnchor } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvAnchor },

        props: {
            button: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.button,
            },
            buttonBlock: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonFab,
            },
            buttonSize: {
                type: String,
                default: appVv.defaults.VvAnchor.buttonSize,
            },
            color: {
                type: String,
                default: appVv.defaults.VvAnchor.color,
            },
            external: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.external,
            },
            href: {
                type: String,
                default: appVv.defaults.VvAnchor.href,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvAnchor.palette,
            },
        },

    })

</script>


<template>
    <VvAnchor
        :button="button"
        :button-block="buttonBlock"
        :button-fab="buttonFab"
        :button-size="buttonSize"
        :color="color"
        :external="external"
        :href="href"
        :palette="palette"
    >
        <slot/>
    </VvAnchor>
</template>
