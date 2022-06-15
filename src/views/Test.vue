<script setup>

    import { inject } from 'vue'
    import AnchorDefault from '@/configs/palettes/AnchorDefault'
    import VvAnchor from '@/components/anchors/VvAnchor.vue'

    //const globals = inject('globals')

    //const tw = globals.classes
    console.log(AnchorDefault)
    
</script>


<template>

    <article class="px-4 pb-20">
    
        <h1 class="pt-6 pb-10 text-center text-3xl">
            Test Page
        </h1>

        <br>
        {{ AnchorDefault }}

        <br><br>

        <VvAnchor>VvAnchor</VvAnchor>

    </article>

</template>