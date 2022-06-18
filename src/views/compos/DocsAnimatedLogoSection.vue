<!-- ./src/views/compos/DocsAnimatedLogoSection.vue -->

<script setup lang="ts">

    import VueVentusLogoText from '../../components/logos/VueVentusLogoText.vue'
    import VueVentusSpinningMark from '../../components/logos/VueVentusSpinningMark.vue'

</script>


<template>

    <figure class="flex flex-col items-center text-center pb-16">
        <VueVentusSpinningMark class="w-24 mx-auto mb-6"/>
        <span class="sr-only">VueVentus fan mark spinning counter-clockwise</span>
        <VueVentusLogoText class="max-w-md fill-gray-900 dark:fill-gray-100 mx-auto"/>
        <span class="sr-only">VueVentus logo text</span>
    </figure>

</template>
