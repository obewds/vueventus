<!-- ./src/components/VvPrism.vue -->

<script lang="ts">

    import { defineComponent, onMounted, onUpdated } from 'vue'
    import Prism from 'prismjs'

    export default defineComponent({

        name: 'VvPrism',

        setup (props) {

            onMounted(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

            onUpdated(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

        },

    })

</script>


<template>

    <div>
        <slot/>
    </div>

</template>


<style>

    div.code-toolbar > .toolbar {
        opacity: 1;
    }
    div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button {
        padding: 6px 10px;
        color: #000000;
        background-color: #ffffff;
        text-transform: uppercase;
        opacity: 0.5;
        transition: all ease 300ms;
    }
    div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button:hover {
        opacity: 1;
    }
    
</style>
