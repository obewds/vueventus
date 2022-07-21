<!-- ./src/components/vv/elements/VvEl.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvEl } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvEl },

        props: {
            borderPalette: {
                type: String,
                default: appVv.defaults.VvEl.borderPalette,
            },
            borderColor: {
                type: String,
                default: appVv.defaults.VvEl.borderColor,
            },
            groundPalette: {
                type: String,
                default: appVv.defaults.VvEl.groundPalette,
            },
            groundColor: {
                type: String,
                default: appVv.defaults.VvEl.groundColor,
            },
            tag: {
                type: String,
                default: appVv.defaults.VvEl.tag,
            },
            textPalette: {
                type: String,
                default: appVv.defaults.VvEl.textPalette,
            },
            textColor: {
                type: String,
                default: appVv.defaults.VvEl.textColor,
            },
        },

    })

</script>


<template>

    <VvEl
        :border-palette="borderPalette"
        :border-color="borderColor"
        :ground-palette="groundPalette"
        :ground-color="groundColor"
        :tag="tag"
        :text-palette="textPalette"
        :text-color="textColor"
    >
        <slot/>
    </VvEl>

</template>
