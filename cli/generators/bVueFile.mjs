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
            const user = computed(() => store.user)

            const serverPrefetch = () => {
                // eslint-disable-next-line no-console
                console.log('Prefetching...')
                return 'Prefetched'
            }
    
            return {
                user,
                serverPrefetch,
            }
        },

    }

</script>

<template>

    <p>Hello I am B</p>

    <img src="../assets/logo-obe.svg" alt="">
    
    <pre>
        {{ JSON.stringify(user) }}
    </pre>

    <div>
        Prefetch Result: <samp>{{ serverPrefetch() }}</samp>
    </div>

</template>

`

return output
    
}
