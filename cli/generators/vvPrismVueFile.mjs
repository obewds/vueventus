// ./cli/generators/vvPrismVueFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/Prism.vue' : './src/components/vv/elements/VvPrism.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'
let appColorsPath = useNuxtPaths ? '../../app.colors.json' : '../../../app.colors.json'
let vvPrismVarsPath = useNuxtPaths ? './PrismVars.vue' : './VvPrismVars.vue'

const output = `<!-- ${commentPath} -->


<script lang="ts">

    import { defineComponent, onMounted, onUpdated } from 'vue'
    import Prism from 'prismjs'
    import VvPrismVars from '${vvPrismVarsPath}'
    import appColors from '${appColorsPath}'
    import appVv from '${appVvPath}'

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
