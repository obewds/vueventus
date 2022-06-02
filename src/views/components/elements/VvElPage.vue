<!--
    ./src/views/components/elements/VvElPage.vue
    @/views/components/elements/VvElPage.vue
-->


<script setup>

    import { inject } from 'vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvEl from '@/components/elements/VvEl.vue'

    const globals = inject('globals')
    const tw = globals.classes
    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

</script>


<template>

    <DevViewArticle title="VvEl">

        <div :class="tw.cardFlex">

            <div>
                <h3 :class="tw.h3">VvEl</h3>
                <div :class="tw.flexWrap">
                    <VvEl :mode="colorMode"/>
                </div>
            </div>

        </div>

    </DevViewArticle>

</template>
