// ./cli/generators/vvListVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/lists/VvList.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidListTypes, VvList } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'

    export default defineComponent({

        components: { VvList },

        props: {
            markerColor: {
                type: String,
                default: appVv.defaults.VvList.markerColor,
            },
            markerPalette: {
                type: String,
                default: appVv.defaults.VvList.markerPalette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvList.size,
            },
            tag: {
                type: String as PropType<ValidListTypes>,
                default: appVv.defaults.VvList.tag,
                validator: (prop: ValidListTypes) => (ValidListTypes).includes(prop),
            },
        },

    })

</script>


<template>

    <VvList
        :marker-color="markerColor"
        :marker-palette="markerPalette"
        :size="size"
        :tag="tag"
    >
        <slot/>
    </VvList>

</template>

`

return output

}
