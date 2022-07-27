// ./cli/generators/bVueFile.mjs

export default function () {

const output = `<!-- ./src/pages/b.vue -->

<script lang="ts">

    import { computed } from 'vue'
    import { useHead } from '@vueuse/head'
    import { useRootStore } from '../store/root'

    export default {

        setup() {

            useHead({
                title: 'Hello',
                meta: [
                    {
                        name: 'description',
                        content: 'Website description',
                    },
                ],
            })
    
            const store = useRootStore()
    
            return {
                user: computed(() => store.user),
            }
        },

        serverPrefetch() {
            // eslint-disable-next-line no-console
            console.log('prefetch')
        },
    }

</script>

<template>

    <p>Hello I am B</p>

    <img src="../assets/logo-obe.svg" alt="">
    
    <pre>
        {{ JSON.stringify(user) }}
    </pre>

</template>

`

return output
    
}
