// ./cli/generators/vvRadioVueFile.mjs

export default function () {

    const output = `<!-- ./src/components/vv/inputs/VvRadio.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvRadio } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvRadio },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvRadio.color,
            },
            checked: {
                type: Boolean,
                default: appVv.defaults.VvRadio.checked,
            },
            darkCheckHex: {
                type: String,
                default: appVv.defaults.VvRadio.darkCheckHex,
            },
            lightCheckHex: {
                type: String,
                default: appVv.defaults.VvRadio.lightCheckHex,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvRadio.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvRadio.size,
            },
            value: {
                type: String,
                required: true,
            },
        },

    })

</script>


<template>
    <VvRadio
        :checked="checked"
        :color="color"
        :dark-check-hex="darkCheckHex"
        :light-check-hex="lightCheckHex"
        :palette="palette"
        :size="size"
        :value="value"
    />
</template>

`

return output

}
