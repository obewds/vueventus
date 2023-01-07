<!-- ./src/components/buttons/VvColorModeButton.vue -->

<script lang="ts">

    // TODO: create new "fab" (Boolean) prop and defaults/types/docs/etc
    // TODO: create new "roundingClasses" (String) prop and defaults/types/docs/etc

    import { computed, defineComponent, onMounted, ref } from 'vue'
    import ValidButtonTypes from '../../validators/ValidButtonTypes'
    import ValidColorModes from '../../validators/ValidColorModes'
    import VvButton from './VvButton.vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes } from '../../types/DefaultButtonPalettes'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { SizesButtons } from '../../types/SizesButtons'

    export default defineComponent({

        name: 'VvColorModeButton',

        components: {
            VvButton
        },

        props: {
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvColorModeButton.color,
            },
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvColorModeButton.debug,
            },
            groundDark: {
                type: String,
                default: VvConfig.colorModes.dark.ground,
            },
            groundDarkHex: {
                type: String,
                default: VvConfig.colorModes.dark.hex,
            },
            groundLight: {
                type: String,
                default: VvConfig.colorModes.light.ground,
            },
            groundLightHex: {
                type: String,
                default: VvConfig.colorModes.light.hex,
            },
            mode: {
                type: String as PropType<ValidColorModes>,
                default: VvConfig.defaults.VvColorModeButton.mode,
                validator: (prop: ValidColorModes) => (ValidColorModes).includes(prop),
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: VvConfig.defaults.VvColorModeButton.palette,
            },
            size: {
                type: String as PropType<keyof SizesButtons>,
                default: VvConfig.defaults.VvColorModeButton.size,
            },
            textDark: {
                type: String,
                default: VvConfig.colorModes.dark.text,
            },
            textLight: {
                type: String,
                default: VvConfig.colorModes.light.text,
            },
            titleDark: {
                type: String,
                default: VvConfig.colorModes.dark.title,
            },
            titleLight: {
                type: String,
                default: VvConfig.colorModes.light.title,
            },
            type: {
                type: String as PropType<ValidButtonTypes>,
                default: VvConfig.defaults.VvColorModeButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

        setup (props) {

            const mode = ref(props.mode)
            const icon = computed(() => mode.value === 'dark' ? 'sun' : 'moon')
            const title = computed(() => mode.value === 'dark' ? props.titleLight : props.titleDark)

            onMounted( () => {
            
                if (typeof window !== 'undefined' && document) {

                    document.documentElement.classList.add(
                        props.groundLight,
                        props.groundDark,
                        props.textLight,
                        props.textDark
                    )

                    document.body.classList.add(
                        props.textLight,
                        props.textDark
                    )

                    if (mode.value === 'light') {

                        document.documentElement.classList.remove( 'dark' )
                        document.documentElement.style.backgroundColor = props.groundLightHex

                    } else if (mode.value === 'dark') {

                        document.documentElement.classList.add( 'dark' )
                        document.documentElement.style.backgroundColor = props.groundDarkHex
                        
                    }

                }

            })

            return { mode, icon, title }

        },

        methods: {

            toggleColorMode (): void {

                if (typeof window !== 'undefined' && document ) {
                
                    if (this.mode === 'light') {

                        this.mode = 'dark'
                        localStorage.setItem('colorMode', 'dark')
                        document.documentElement.style.backgroundColor = this.groundDarkHex
                        document.documentElement.classList.add( 'dark' )
                        
                    } else if (this.mode === 'dark') {

                        this.mode = 'light'
                        localStorage.setItem('colorMode', 'light')
                        document.documentElement.style.backgroundColor = this.groundLightHex
                        document.documentElement.classList.remove( 'dark' )

                    }
                
                }

            }

        },

    })

</script>


<template>

    <VvButton
        @click="toggleColorMode()"
        class="rounded-full"
        :color="color"
        :fab="true"
        :palette="palette"
        :size="size"
        :title="title"
        :type="type"
        :data-vv-color-mode-button-prop-color="debug ? color : null"
        :data-vv-color-mode-button-prop-ground-dark="debug ? groundDark : null"
        :data-vv-color-mode-button-prop-ground-dark-hex="debug ? groundDarkHex : null"
        :data-vv-color-mode-button-prop-ground-light="debug ? groundLight : null"
        :data-vv-color-mode-button-prop-ground-light-hex="debug ? groundLightHex : null"
        :data-vv-color-mode-button-prop-mode="debug ? mode : null"
        :data-vv-color-mode-button-prop-palette="debug ? palette : null"
        :data-vv-color-mode-button-prop-size="debug ? size : null"
        :data-vv-color-mode-button-prop-text-dark="debug ? textDark : null"
        :data-vv-color-mode-button-prop-text-light="debug ? textLight : null"
        :data-vv-color-mode-button-prop-title-dark="debug ? titleDark : null"
        :data-vv-color-mode-button-prop-title-light="debug ? titleLight : null"
        :data-vv-color-mode-button-prop-type="debug ? type : null"
    >
        <svg
            v-if="icon === 'moon'"
            class="h-5 w-5"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>

        <svg
            v-if="icon === 'sun'"
            class="h-5 w-5"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>

    </VvButton>

</template>