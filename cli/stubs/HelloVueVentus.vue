<!-- ./src/components/HelloVueVentus.vue -->

<script setup lang="ts">

    import { VvButton } from '@obewds/vueventus'

</script>


<template>

    <VvButton>
        <slot>Hello VueVentus</slot>
    </VvButton>
    
</template>