// ./cli/generators/vvPrismVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/elements/VvPrism.vue -->


<script lang="ts">

    import { defineComponent, onMounted, onUpdated } from 'vue'
    import Prism from 'prismjs'
    import VvPrismVars from './VvPrismVars.vue'
    import appColors from '../../../app.colors.json'
    import appVv from '../../../app.vv'

    export default defineComponent({
        
        components: { VvPrismVars },
        
        props: {
            prismVars: {
                type: Boolean,
                default: appVv.defaults.VvPrism.prismVars,
            },
        },
        
        setup () {

            onMounted(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

            /* c8 ignore start */
            onUpdated(() => {
                Prism.manual = true
                Prism.highlightAll()
            })
            /* c8 ignore end */

            return { appColors }

        },

    })

</script>


<template>

    <div>

        <template v-if="prismVars">
            <VvPrismVars/>
        </template>

        <slot/>

    </div>

</template>

`

return output

}
