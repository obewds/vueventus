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

    const vv = inject('vv')

</script>


<template>

    <DevViewArticle title="VvEl">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvEl Default Border Palette</h3>
                <div :class="tw.flexWrap">
                    <VvEl v-for="color in globals.data.colors" :class="[vv.borders.palettes.default[color.key], tw.pad, 'border']">
                        {{ color.name }}
                    </VvEl>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvEl Console Ground Palette</h3>
                <div :class="tw.flexWrap">
                    <VvEl v-for="color in globals.data.colors" :class="[vv.grounds.palettes.console[color.key], tw.pad]">
                        {{ color.name }}
                    </VvEl>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvEl Default Ground Palette</h3>
                <div :class="tw.flexWrap">
                    <VvEl v-for="color in globals.data.colors" :class="[vv.grounds.palettes.default[color.key], tw.pad]">
                        {{ color.name }}
                    </VvEl>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvEl Monochromatic Ground Palette</h3>
                <div :class="tw.flexWrap">
                    <VvEl v-for="color in globals.data.colors" :class="[vv.grounds.palettes.monochromatic[color.key], tw.pad]">
                        {{ color.name }}
                    </VvEl>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvEl Pastel Ground Palette</h3>
                <div :class="tw.flexWrap">
                    <VvEl v-for="color in globals.data.colors" :class="[vv.grounds.palettes.pastel[color.key], tw.pad]">
                        {{ color.name }}
                    </VvEl>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvEl Default Text Palette</h3>
                <div :class="tw.flexWrap">
                    <VvEl v-for="color in globals.data.colors" :class="[vv.text.palettes.default[color.key], tw.pad]">
                        {{ color.name }}
                    </VvEl>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>
