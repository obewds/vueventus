<script setup>

    import {
        AnchorDefault,
        BorderDefault,
        ButtonOutline,
        ButtonSolid,
        GroundConsole,
        GroundDefault,
        GroundMonochromatic,
        GroundPastel,
        TextDefault,

        Transitions,

        VvButton,
    } from '../index'

    const tw = {
        border: 'border',
        cardFlex: 'w-full flex flex-col justify-center bg-gray-50 dark:bg-gray-800 p-6 rounded-xl drop-shadow-md gap-8 mb-10',
        flexStack: 'w-full flex flex-col space-y-1',
        flexWrap: 'w-full flex flex-wrap justify-center items-center gap-8',
        h2: 'text-xl pt-2',
        h3: 'text-lg pb-3',
        pad: 'py-1 px-2',
    }

    const colors = [
        { name: 'Default', key: 'default' },
        { name: 'Error', key: 'error' },
        { name: 'Primary', key: 'primary' },
        { name: 'Secondary', key: 'secondary' },
        { name: 'Success', key: 'success' },
    ]

    const btnSizes = [
        { icon: 'h-3 w-3', key: '4xs' },
        { icon: 'h-4 w-4', key: '3xs' },
        { icon: 'h-5 w-5', key: '2xs' },
        { icon: 'h-6 w-6', key: 'xs' },
        { icon: 'h-7 w-7', key: 'sm' },
        { icon: 'h-8 w-8', key: 'md' },
        { icon: 'h-9 w-9', key: 'lg' },
        { icon: 'h-10 w-10', key: 'xl' },
        { icon: 'h-11 w-11', key: '2xl' },
        { icon: 'h-12 w-12', key: '3xl' },
        { icon: 'h-14 w-14', key: '4xl' },
    ]
    
</script>


<template>

    <article class="px-4 pb-20">
    
        <h1 class="pt-6 pb-10 text-center text-3xl">
            VueVentus Local Testing Site
        </h1>

        <div :class="tw.cardFlex">
        
            <h2 :class="tw.h2">./src/components/buttons</h2>

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

            <div>
                <h3 :class="tw.h3">VvButton Fab Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvButton v-for="size in btnSizes" :fab="true" color="primary" :size="size.key">
                        <svg xmlns="http://www.w3.org/2000/svg" :class="size.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </VvButton>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">VvButton Circle Fab Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvButton v-for="size in btnSizes" :fab="true" color="primary" :size="size.key" class="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" :class="size.icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </VvButton>
                </div>
            </div>

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

            <div>
                <h3 :class="tw.h3">VvButton Component Instance Classes</h3>
                <div :class="tw.flexWrap">
                    <VvButton class="rounded-lg drop-shadow-md">
                        VvButton
                    </VvButton>
                </div>
            </div>

        </div>

        <div :class="tw.cardFlex">
        
            <h2 :class="tw.h2">./src/configs</h2>

            <div>
                <h3 :class="tw.h3">Transitions</h3>
                <div :class="tw.flexWrap">
                    <div :class="[Transitions.classes(), 'bg-red-500 hover:bg-cyan-500 text-white', tw.pad]">
                        Transitions.classes()
                    </div>
                </div>
            </div>

        </div>

        <div :class="tw.cardFlex">
        
            <h2 :class="tw.h2">CONFIG PALETTES</h2>

            <div>
                <h3 :class="tw.h3">AnchorDefault</h3>
                <div :class="tw.flexWrap">
                    <a v-for="color in colors" :class="AnchorDefault[color.key]" href="#">
                        {{ color.name }}
                    </a>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">BorderDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[BorderDefault[color.key], tw.border, tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">ButtonOutline</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[ButtonOutline[color.key], tw.border, tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">ButtonSolid</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[ButtonSolid[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">GroundConsole</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[GroundConsole[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">GroundDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[GroundDefault[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">GroundMonochromatic</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[GroundMonochromatic[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">GroundPastel</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[GroundPastel[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>

            <div>
                <h3 :class="tw.h3">TextDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in colors" :class="[TextDefault[color.key]]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        
        </div>
    
    </article>

</template>
