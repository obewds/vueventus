<!-- ./src/views/compos/TestRadiosPair.vue -->

<script setup>
    import VvRadio from '../../../src/components/inputs/VvRadio.vue'
</script>

<template>
    <div>
        <VvRadio
            id="radioOne"
            name="testRadios"
            value="radioOne"
        />
        <VvRadio
            id="radioTwo"
            name="testRadios"
            value="radioTwo"
            :checked="true"
        />
    </div>
</template>
