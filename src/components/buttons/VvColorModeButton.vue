<!-- ./src/components/buttons/VvColorModeButton.vue -->

<script lang="ts">

    import { computed, defineComponent, onMounted, ref } from 'vue'
    import ValidButtonTypes from '../../validators/ValidButtonTypes'
    import ValidColorModes from '../../validators/ValidColorModes'
    import VvButton from './VvButton.vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        name: 'VvColorModeButton',

        components: {
            VvButton
        },

        props: {
            mode: {
                type: String,
                default: VvConfig.defaults.VvColorModeButton.mode,
                validator: (prop: ValidColorModes) => (ValidColorModes).includes(prop),
            },
            color: {
                type: String,
                default: VvConfig.defaults.VvColorModeButton.color,
            },
            palette: {
                type: String,
                default: VvConfig.defaults.VvColorModeButton.palette,
            },
            size: {
                type: String,
                default: VvConfig.defaults.VvColorModeButton.size,
            },
            groundDark: {
                type: String,
                default: VvConfig.colorMode.dark.ground,
            },
            groundDarkHex: {
                type: String,
                default: VvConfig.colorMode.dark.hex,
            },
            groundLight: {
                type: String,
                default: VvConfig.colorMode.light.ground,
            },
            groundLightHex: {
                type: String,
                default: VvConfig.colorMode.light.hex,
            },
            textDark: {
                type: String,
                default: VvConfig.colorMode.dark.text,
            },
            textLight: {
                type: String,
                default: VvConfig.colorMode.light.text,
            },
            titleDark: {
                type: String,
                default: VvConfig.colorMode.dark.title,
            },
            titleLight: {
                type: String,
                default: VvConfig.colorMode.light.title,
            },
            type: {
                type: String,
                default: VvConfig.defaults.VvColorModeButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

        setup (props) {

            const mode = ref(props.mode)
            const icon = computed(() => mode.value === 'dark' ? 'sun' : 'moon')
            const title = computed(() => mode.value === 'dark' ? props.titleLight : props.titleDark)

            onMounted( () => {
            
                if (document && mode.value === 'light') {
                    document.documentElement.classList.remove(
                        'dark',
                        props.groundDark,
                        props.textDark
                    )
                    document.documentElement.classList.add(
                        props.groundLight,
                        props.textLight
                    )
                    document.documentElement.style.backgroundColor = props.groundLightHex
                }

                if (document && mode.value === 'dark') {
                    document.documentElement.classList.remove(
                        props.groundLight,
                        props.textLight
                    )
                    document.documentElement.classList.add(
                        'dark',
                        props.groundDark,
                        props.textDark
                    )
                    document.documentElement.style.backgroundColor = props.groundDarkHex
                }

            })

            return { mode, icon, title }

        },

        methods: {

            toggleColorMode (event: Event): void {
                if (document && this.mode === 'light') {
                    this.mode = 'dark'
                    localStorage.setItem('colorMode', 'dark')
                    document.documentElement.classList.remove(
                        this.groundLight,
                        this.textLight
                    )
                    document.documentElement.classList.add(
                        'dark',
                        this.groundDark,
                        this.textDark
                    )
                    document.documentElement.style.backgroundColor = this.groundDarkHex
                } else if (document && this.mode === 'dark') {
                    this.mode = 'light'
                    localStorage.setItem('colorMode', 'light')
                    document.documentElement.classList.remove(
                        'dark',
                        this.groundDark,
                        this.textDark
                    )
                    document.documentElement.classList.add(
                        this.groundLight,
                        this.textLight
                    )
                    document.documentElement.style.backgroundColor = this.groundLightHex
                }
            }

        },

    })

</script>


<template>

    <VvButton
        :title="title"
        @click="toggleColorMode($event)"
        class="rounded-full"
        :color="color"
        :fab="true"
        :palette="palette"
        type="button"
        :size="size"
    >
        <svg v-if="icon === 'moon'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>

        <svg v-if="icon === 'sun'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>

    </VvButton>

</template>