<!-- ./src/components/vv/elements/VvPrism.vue -->


<script lang="ts">

    import { defineComponent, onMounted, onUpdated } from 'vue'
    import Prism from 'prismjs'
    import VvPrismVars from './VvPrismVars.vue'
    import appColors from '../../../app.colors.json'

    export default defineComponent({
        
        components: { VvPrismVars },
        
        props: {
            prismVars: {
                type: Boolean,
                default: true,
            },
        },
        
        setup () {

            onMounted(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

            onUpdated(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

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
