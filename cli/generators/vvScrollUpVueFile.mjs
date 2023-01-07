// ./cli/generators/vvScrollUpVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/buttons/VvScrollUp.vue -->

<script lang="ts">

    import { defineComponent, onMounted, ref } from 'vue'
    import { TransitionChild, TransitionRoot } from '@headlessui/vue'
    import { VvButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'
    import gsap from 'gsap'

    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPaletteColors, SizesButtons } from '@obewds/vueventus'

    export default defineComponent({

        components: {
            TransitionChild,
            TransitionRoot,
            VvButton,
        },

        props: {
            buttonClasses: {
                type: String,
                default: appVv.defaults.VvScrollUp.buttonClasses,
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvScrollUp.color,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvScrollUp.debug,
            },
            fab: {
                type: Boolean,
                default: appVv.defaults.VvScrollUp.fab,
            },
            isVisible: {
                type: Boolean,
                default: appVv.defaults.VvScrollUp.isVisible,
            },
            offsetMinimum: {
                type: Number,
                default: appVv.defaults.VvScrollUp.offsetMinimum,
            },
            palette: {
                type: String as PropType<keyof DefaultButtonPalettes>,
                default: appVv.defaults.VvScrollUp.palette,
            },
            size: {
                type: String as PropType<keyof SizesButtons>,
                default: appVv.defaults.VvScrollUp.size,
            },
            title: {
                type: String,
                default: appVv.defaults.VvScrollUp.title,
            },
        },

        setup (props) {

            const isVisible = ref(props.isVisible)

            onMounted(() => {
                window.addEventListener('scroll', function(){
                    isVisible.value = window.pageYOffset > props.offsetMinimum
                })
            })

            return { isVisible }

        },

        methods: {

            scrollToTop (event: Event) {
                // GSAP ScrollToPlugin
                gsap.to(window, {
                    duration: 0.3,
                    scrollTo: {
                        y: 0,
                        x: 0,
                    },
                })
            }

        },

    })

</script>


<template>

    <TransitionRoot appear :show="isVisible">

        <div>

            <TransitionChild
                enter="transform transition ease-out duration-300"
                enter-from="-translate-y-full opacity-0"
                enter-to="translate-y-0 opacity-100"
                leave="transform transition ease-in duration-300"
                leave-from="translate-y-0 opacity-100"
                leave-to="-translate-y-full opacity-0"
            >

                <div>

                    <VvButton
                        :debug="debug"
                        :title="title"
                        :palette="palette"
                        :color="color"
                        :class="buttonClasses"
                        @click="scrollToTop($event)"
                        :fab="fab"
                        :size="size"
                        :data-vv-scroll-up-prop-button-classes="debug ? buttonClasses : null"
                        :data-vv-scroll-up-prop-color="debug ? color : null"
                        :data-vv-scroll-up-prop-fab="debug ? fab : null"
                        :data-vv-scroll-up-prop-palette="debug ? palette : null"
                        :data-vv-scroll-up-prop-is-visible="debug ? isVisible : null"
                        :data-vv-scroll-up-prop-offset-minimum="debug ? offsetMinimum : null"
                        :data-vv-scroll-up-prop-size="debug ? size : null"
                        :data-vv-scroll-up-prop-title="debug ? title : null"
                    >
                        <slot>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </slot>
                    </VvButton>

                </div>

            </TransitionChild>

        </div>

    </TransitionRoot>

</template>

`

return output

}
