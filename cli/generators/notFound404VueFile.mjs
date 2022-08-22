// ./cli/generators/notFound404VueFile.mjs

export default function () {

const output = `<!-- ./src/pages/NotFound404.vue -->

<script setup lang="ts">

    import { useHead } from '@vueuse/head'
    import { useRouter } from 'vue-router'
    import VvButton from '../components/vv/buttons/VvButton.vue'
    import VvFa from '../components/vv/elements/VvFa.vue'

    const pgTitle = 'Not Found'
    const router = useRouter()

    useHead({
        title: pgTitle,
        meta: [ { name: 'description', content: pgTitle + 'page description text' } ],
    })
    
</script>


<template>

    <div class="text-center">
    
        <h1 class="font-heading text-3xl uppercase">{{ pgTitle }}</h1>

        <div class="max-w-md text-center mx-auto py-10">

            <div class="inline-block bg-yellow-500 text-black rounded-full">
                <VvFa family="fal" icon="face-surprise" size="7x" class=""/>
            </div>

            <div class="flex flex-col space-y-4 pb-10">

                <h2 class="font-heading text-2xl pt-10">Oh No!</h2>

                <p class="pb-20">Your request was not found.</p>
            
                <VvButton
                    class="rounded drop-shadow-md"
                    color="default"
                    size="xl"
                    :block="true"
                    @click="router.back()"
                >
                    <span class="mx-auto">Go Back</span>
                </VvButton>
            
            </div>

        </div>

    </div>

</template>

`

return output
    
}
