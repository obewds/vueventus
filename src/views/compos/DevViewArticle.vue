<!-- ./src/views/compos/DevViewArticle.vue -->


<script setup>

    import { inject } from 'vue'

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
    })

    const globals = inject('globals')

    const tw = globals.classes

</script>


<template>

    <article :class="tw.article">
    
        <h1 :class="tw.h1">
            {{ title }}
        </h1>
        
        <slot/>

        <div class="text-center">
            <router-link to="/" :class="tw.anchor">
                Home
            </router-link>
        </div>

    </article>

</template>