<!--
    ./src/views/components/anchors/VvAnchorPage.vue
    @/views/components/anchors/VvAnchorPage.vue
-->



<script setup>

    import { inject } from 'vue'
    import { Transitions } from '../../../index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvAnchor from '@/components/anchors/VvAnchor.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvAnchor">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Default Palette</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor color="default">default</VvAnchor>
                    <VvAnchor color="error">error</VvAnchor>
                    <VvAnchor color="primary">primary</VvAnchor>
                    <VvAnchor color="secondary">secondary</VvAnchor>
                    <VvAnchor color="success">success</VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Button Solid Palette</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor :button="true" palette="solid" color="default">default</VvAnchor>
                    <VvAnchor :button="true" palette="solid" color="error">error</VvAnchor>
                    <VvAnchor :button="true" palette="solid" color="primary">primary</VvAnchor>
                    <VvAnchor :button="true" palette="solid" color="secondary">secondary</VvAnchor>
                    <VvAnchor :button="true" palette="solid" color="success">success</VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Button Outline Palette</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor :button="true" palette="outline" color="default">default</VvAnchor>
                    <VvAnchor :button="true" palette="outline" color="error">error</VvAnchor>
                    <VvAnchor :button="true" palette="outline" color="primary">primary</VvAnchor>
                    <VvAnchor :button="true" palette="outline" color="secondary">secondary</VvAnchor>
                    <VvAnchor :button="true" palette="outline" color="success">success</VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Button Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor :button="true" palette="solid" button-size="4xs">4xs</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="3xs">3xs</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="2xs">2xs</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="xs">xs</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="sm">sm</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="md">md</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="lg">lg</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="xl">xl</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="2xl">2xl</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="3xl">3xl</VvAnchor>
                    <VvAnchor :button="true" palette="solid" button-size="4xl">4xl</VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Fab Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor v-for="size in globals.data.btnSizes"
                        :button="true"
                        :button-fab="true"
                        palette="solid"
                        color="primary"
                        :button-size="size.key"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" :class="size.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Circle Fab Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor v-for="size in globals.data.btnSizes"
                        :button="true"
                        :button-fab="true"
                        palette="solid"
                        color="primary"
                        :button-size="size.key"
                        class="rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" :class="size.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Block Sizes</h3>
                <div :class="tw.flexStack">
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="4xs">4xs</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="3xs">3xs</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="2xs">2xs</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="xs">xs</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="sm">sm</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="md">md</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="lg">lg</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="xl">xl</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="2xl">2xl</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="3xl">3xl</VvAnchor>
                    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" button-size="4xl">4xl</VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Custom Transition Classes</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor
                        :button="true"
                        palette="solid"
                        color="success"
                        :transition-classes="Transitions.classes('colors', 'in', '1000')"
                    >
                        VvButton
                    </VvAnchor>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvAnchor Component Instance Classes</h3>
                <div :class="tw.flexWrap">
                    <VvAnchor :button="true" palette="solid" class="rounded-lg drop-shadow-md">
                        VvAnchor
                    </VvAnchor>
                </div>
            </div>
        </div>


    </DevViewArticle>

</template>
