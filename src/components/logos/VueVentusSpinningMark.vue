<!--
    ./src/components/logos/VueVentusSpinningMark.vue
    @/components/logos/VueVentusSpinningMark.vue
-->


<script setup>

    import { computed } from 'vue'

    const props = defineProps({
        enableSpin: {
            type: Boolean,
            default: true,
        },
        animationClass: {
            type: String,
            default: 'animate-spin-reverse-4s',
        },
        fillOne: {
            type: String,
            default: '#41b883',
        },
        fillTwo: {
            type: String,
            default: '#2298bd',
        },
    })

    const classes = computed( () => props.enableSpin ? props.animationClass : '' )

</script>


<template>

    <svg :class="classes" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1000 1000" xml:space="preserve">
        <path :fill="fillOne" d="M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"/>
        <g>
            <path :fill="fillTwo" d="M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"/>
        </g>
    </svg>

</template>
