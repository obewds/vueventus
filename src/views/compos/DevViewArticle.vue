<!-- ./src/views/compos/DevViewArticle.vue -->

<script setup lang="ts">

    import globals from '../../globals'

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
    })

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