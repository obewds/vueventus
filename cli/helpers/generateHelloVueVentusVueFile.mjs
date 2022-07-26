// ./cli/helpers/generateHelloVueVentusVueFile.mjs

// TODO: delete original stubs/vite-ssg and stubs/vue-ts HelloVueVentus.vue files

export default function () {

const output = `<!-- ./src/components/HelloVueVentus.vue -->

<script setup lang="ts">

    import { VvButton } from '@obewds/vueventus'

</script>


<template>

    <VvButton>
        <slot>Hello VueVentus</slot>
    </VvButton>
    
</template>

`

return output
    
}
