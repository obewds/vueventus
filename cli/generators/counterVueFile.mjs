// ./cli/generators/counterVueFile.mjs

export default function () {

const output = `<!-- ./src/components/Counter.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvButton } from '@obewds/vueventus'

    const props = defineProps<{ init?: number }>()
    const counter = ref(props.init || 0)

</script>

<template>

    <div>

        <div>Counter: {{ counter }}</div>

        <VvButton @click="counter += 1" class="rounded-l">Inc</VvButton>
        <VvButton @click="counter -= 1" class="rounded-r">Dec</VvButton>

    </div>

</template>

`

return output
    
}
