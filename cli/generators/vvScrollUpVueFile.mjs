// ./cli/generators/vvScrollUpVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/buttons/VvScrollUp.vue -->

<script lang="ts">

    import { defineComponent, onMounted, ref } from 'vue'
    import { TransitionChild, TransitionRoot } from '@headlessui/vue'
    import { VvButton } from '@obewds/vueventus'
    import gsap from 'gsap'

    export default defineComponent({

        components: {
            TransitionChild,
            TransitionRoot,
            VvButton,
        },

        props: {
            buttonClasses: {
                type: String,
                default: 'rounded-full',
            },
            color: {
                type: String,
                default: 'primary'
            },
            fab: {
                type: Boolean,
                default: true
            },
            palette: {
                type: String,
                default: 'solid'
            },
            isVisible: {
                type: Boolean,
                default: false
            },
            offsetMinimum: {
                type: Number,
                default: 100
            },
            size: {
                type: String,
                default: 'xs',
            },
            title: {
                type: String,
                default: 'Scroll to Top',
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
                        :title="title"
                        :palette="palette"
                        :color="color"
                        :class="buttonClasses"
                        @click="scrollToTop($event)"
                        :fab="fab"
                        :size="size"
                    >
                        <slot>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
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
