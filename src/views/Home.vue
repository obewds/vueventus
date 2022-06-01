<script setup>

    import { AnchorDefault } from '../index'
    import { BorderDefault } from '../index'
    import { ButtonOutline } from '../index'
    import { ButtonSolid } from '../index'
    import { GroundConsole } from '../index'
    import { GroundDefault } from '../index'
    import { GroundMonochromatic } from '../index'
    import { GroundPastel } from '../index'
    import { TextDefault } from '../index'

    import { Transitions } from '../index'

    const tw = {
        border: 'border',
        cardFlex: 'w-full flex flex-col justify-center bg-gray-50 p-6 rounded-xl drop-shadow-md gap-8 mb-10',
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

</script>


<template>

    <article class="px-4 pb-20">
    
        <h1 class="pt-6 pb-10 text-center text-3xl">
            VueVentus Local Testing Site
        </h1>

        <div :class="tw.cardFlex">
        
            <h2 :class="tw.h2">./src/configs</h2>

            <div>
                <h3 :class="tw.h3">Transitions</h3>
                <div :class="tw.flexWrap">
                    <div :class="[Transitions.classes(), 'bg-red-500 hover:bg-cyan-500 text-white', tw.pad]" href="#">
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
