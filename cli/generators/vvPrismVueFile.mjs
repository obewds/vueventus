// ./cli/generators/vvPrismVueFile.mjs
// TODO: add "debug" prop to docs
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
            debug: {
                type: Boolean,
                default: appVv.defaults.VvPrism.debug,
            },
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

    <div :data-vv-prism-prop-prism-vars="debug ? prismVars : null">

        <template v-if="prismVars">
            <VvPrismVars/>
        </template>

        <slot/>

    </div>

</template>

`

return output

}
