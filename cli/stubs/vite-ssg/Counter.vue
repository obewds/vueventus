<!-- ./src/components/Counter.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvButton } from '@obewds/vueventus'

    const props = defineProps<{ init?: number }>()
    const counter = ref(props.init || 0)

</script>

<template>

    <div class="counter">

        <div>Counter: {{ counter }}</div>

        <VvButton @click="counter += 1">Inc</VvButton>
        <VvButton @click="counter -= 1">Dec</VvButton>

    </div>

</template>

<style scoped>

    .counter {
        border: 2px dashed #3eaf7c;
        padding: 5px 10px 10px 10px;
    }

</style>
