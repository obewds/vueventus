<!-- ./src/views/compos/DevViewLinkCard.vue -->

<script setup lang="ts">

    import { computed } from 'vue'
    import globals from '../../globals'

    import type { PropType } from 'vue'

    const props = defineProps({
        icon: {
            type: String as PropType<'component'|'config'|'palette'>,
            default: 'component',
            validator: (prop: string) => (['component', 'config', 'palette']).includes(prop),
        },
        linkClasses: {
            type: String,
            default: '',
        },
        to: {
            type: String,
            required: true,
        },
    })

    const tw = globals.classes

    const iconClasses = 'w-12 h-12 mx-auto opacity-40 mb-3'

    const linkClasses = computed(() => props.linkClasses !== '' ? props.linkClasses : tw.gridCardLink)

    const textClasses = 'opacity-65 mb-3 mx-auto text-xs tracking-widest uppercase'

    const iconText = computed(() => {
        if (props.icon === 'component') {
            return 'Vue Component'
        }
        if (props.icon === 'config') {
            return 'Config Module'
        }
        if (props.icon === 'palette') {
            return 'Palette Config Module'
        }
    })

</script>


<template>

    <router-link :to="to" :class="linkClasses">

        <svg v-if="icon === 'component'" :class="iconClasses" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>

        <svg v-if="icon === 'config'" :class="iconClasses" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>

        <svg v-if="icon === 'palette'" :class="iconClasses" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>

        <div v-if="icon === 'component'" :class="textClasses">{{ iconText }}</div>
        <div v-if="icon === 'config'" :class="textClasses">{{ iconText }}</div>
        <div v-if="icon === 'palette'" :class="textClasses">{{ iconText }}</div>

        <slot/>

    </router-link>

</template>