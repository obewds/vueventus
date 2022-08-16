// ./cli/generators/vvCheckboxVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/inputs/VvCheckbox.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvCheckbox } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvCheckbox },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvCheckbox.color,
            },
            checked: {
                type: Boolean,
                default: appVv.defaults.VvCheckbox.checked,
            },
            darkCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.darkCheckHex,
            },
            lightCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.lightCheckHex,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvCheckbox.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvCheckbox.size,
            },
        },

    })

</script>


<template>
    <VvCheckbox
        :checked="checked"
        :color="color"
        :dark-check-hex="darkCheckHex"
        :light-check-hex="lightCheckHex"
        :palette="palette"
        :size="size"
    />
</template>

`

return output

}
