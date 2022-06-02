<!--
    ./src/components/buttons/VvColorModeButton.vue
    @/components/buttons/VvColorModeButton.vue
-->


<script setup>

    import { inject, computed, ref } from 'vue'
    import VvButton from './VvButton.vue'
    import VvConfig from '../../configs/VvConfig.js'

    const props = defineProps({
        mode: {
            type: String,
            default: 'light',
            validator: (prop) => (['light','dark']).includes(prop),
        },
        color: {
            type: String,
            default: 'default',
        },
        fab: {
            type: Boolean,
            default: true,
        },
        palette: {
            type: String,
            default: 'outline',
        },
        size: {
            type: String,
            default: 'xs',
        },
        type: {
            type: String,
            default: 'button',
        },
        bgClassDark: {
            type: String,
            default: VvConfig.colorMode.dark.bg,
        },
        bgClassLight: {
            type: String,
            default: VvConfig.colorMode.light.bg,
        },
        bgHexDark: {
            type: String,
            default: '#242426',
        },
        bgHexLight: {
            type: String,
            default: '#e1e1e3',
        },
        textClassDark: {
            type: String,
            default: VvConfig.colorMode.dark.text,
        },
        textClassLight: {
            type: String,
            default: VvConfig.colorMode.light.text,
        },
    })

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

    const mode = ref(props.mode)
    const icon = computed(() => mode.value === 'dark' ? 'sun' : 'moon')
    const title = computed(() => mode.value === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode')

    if (mode.value === 'light' && document) {
        document.documentElement.classList.remove(
            'dark',
            vv.colorMode.dark.bg,
            vv.colorMode.dark.text
        )
        document.documentElement.classList.add(
            vv.colorMode.light.bg,
            vv.colorMode.light.text
        )
        document.documentElement.style.backgroundColor = props.bgHexLight
    }

    if (mode.value === 'dark' && document) {
        document.documentElement.classList.remove(
            vv.colorMode.light.bg,
            vv.colorMode.light.text
        )
        document.documentElement.classList.add(
            'dark',
            vv.colorMode.dark.bg,
            vv.colorMode.dark.text
        )
        document.documentElement.style.backgroundColor = props.bgHexDark
    }

    function toggleColorMode (event) {
        if (mode.value === 'light' && document) {
            mode.value = 'dark'
            localStorage.setItem('colorMode', 'dark')
            document.documentElement.classList.remove(
                vv.colorMode.light.bg,
                vv.colorMode.light.text
            )
            document.documentElement.classList.add(
                'dark',
                vv.colorMode.dark.bg,
                vv.colorMode.dark.text
            )
            document.documentElement.style.backgroundColor = props.bgHexDark
        } else if (mode.value === 'dark' && document) {
            mode.value = 'light'
            localStorage.setItem('colorMode', 'light')
            document.documentElement.classList.remove(
                'dark',
                vv.colorMode.dark.bg,
                vv.colorMode.dark.text
            )
            document.documentElement.classList.add(
                vv.colorMode.light.bg,
                vv.colorMode.light.text
            )
            document.documentElement.style.backgroundColor = props.bgHexLight
        }
    }
</script>


<template>

    <VvButton
        :title="title"
        @click="toggleColorMode($event)"
        class="rounded-full"
        :color="color"
        :fab="fab"
        :palette="palette"
        :type="type"
        :size="size"
    >
        <svg v-if="icon === 'moon'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>

        <svg v-if="icon === 'sun'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>

    </VvButton>

</template>