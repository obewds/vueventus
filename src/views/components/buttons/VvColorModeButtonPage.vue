<!-- ./src/views/components/buttons/VvColorModeButtonPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvColorModeButton from '@/components/buttons/VvColorModeButton.vue'

    const tw = globals.classes
    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

</script>


<template>

    <DevViewArticle title="VvColorModeButton">

        <div :class="tw.cardFlex">

            <div>
                <h3 :class="tw.h3">VvColorModeButton</h3>
                <div :class="tw.flexWrap">
                    <VvColorModeButton :mode="colorMode"/>
                </div>
            </div>

        </div>

    </DevViewArticle>

</template>
