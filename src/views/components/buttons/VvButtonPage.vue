<!--
    ./src/views/components/buttons/VvButtonPage.vue
    @/views/components/buttons/VvButtonPage.vue
-->



<script setup>

    import { inject } from 'vue'
    import { Transitions } from '../../../index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvButton from '@/components/buttons/VvButton.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvButton">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Solid Palette</h3>
                <div :class="tw.flexWrap">
                    <VvButton color="default">default</VvButton>
                    <VvButton color="error">error</VvButton>
                    <VvButton color="primary">primary</VvButton>
                    <VvButton color="secondary">secondary</VvButton>
                    <VvButton color="success">success</VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Solid Palette</h3>
                <div :class="tw.flexWrap">
                    <VvButton color="default">default</VvButton>
                    <VvButton color="error">error</VvButton>
                    <VvButton color="primary">primary</VvButton>
                    <VvButton color="secondary">secondary</VvButton>
                    <VvButton color="success">success</VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Outline Palette</h3>
                <div :class="tw.flexWrap">
                    <VvButton palette="outline" color="default">default</VvButton>
                    <VvButton palette="outline" color="error">error</VvButton>
                    <VvButton palette="outline" color="primary">primary</VvButton>
                    <VvButton palette="outline" color="secondary">secondary</VvButton>
                    <VvButton palette="outline" color="success">success</VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvButton color="primary" size="4xs">4xs</VvButton>
                    <VvButton color="primary" size="3xs">3xs</VvButton>
                    <VvButton color="primary" size="2xs">2xs</VvButton>
                    <VvButton color="primary" size="xs">xs</VvButton>
                    <VvButton color="primary" size="sm">sm</VvButton>
                    <VvButton color="primary" size="md">md</VvButton>
                    <VvButton color="primary" size="lg">lg</VvButton>
                    <VvButton color="primary" size="xl">xl</VvButton>
                    <VvButton color="primary" size="2xl">2xl</VvButton>
                    <VvButton color="primary" size="3xl">3xl</VvButton>
                    <VvButton color="primary" size="4xl">4xl</VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Fab Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvButton v-for="size in globals.data.btnSizes" :fab="true" color="primary" :size="size.key">
                        <svg xmlns="http://www.w3.org/2000/svg" :class="size.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Circle Fab Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvButton v-for="size in globals.data.btnSizes" :fab="true" color="primary" :size="size.key" class="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" :class="size.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Block Sizes</h3>
                <div :class="tw.flexStack">
                    <VvButton :block="true" color="primary" size="4xs">4xs</VvButton>
                    <VvButton :block="true" color="primary" size="3xs">3xs</VvButton>
                    <VvButton :block="true" color="primary" size="2xs">2xs</VvButton>
                    <VvButton :block="true" color="primary" size="xs">xs</VvButton>
                    <VvButton :block="true" color="primary" size="sm">sm</VvButton>
                    <VvButton :block="true" color="primary" size="md">md</VvButton>
                    <VvButton :block="true" color="primary" size="lg">lg</VvButton>
                    <VvButton :block="true" color="primary" size="xl">xl</VvButton>
                    <VvButton :block="true" color="primary" size="2xl">2xl</VvButton>
                    <VvButton :block="true" color="primary" size="3xl">3xl</VvButton>
                    <VvButton :block="true" color="primary" size="4xl">4xl</VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Custom Transition Classes</h3>
                <div :class="tw.flexWrap">
                    <VvButton
                        color="success"
                        :transition-classes="Transitions.classes('colors', 'in', '1000')"
                    >
                        VvButton
                    </VvButton>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvButton Component Instance Classes</h3>
                <div :class="tw.flexWrap">
                    <VvButton class="rounded-lg drop-shadow-md">
                        VvButton
                    </VvButton>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>
