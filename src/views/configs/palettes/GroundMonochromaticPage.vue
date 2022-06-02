<!-- ./src/views/configs/palettes/GroundMonochromaticPage.vue -->

<script setup>

    import { inject } from 'vue'
    import { GroundMonochromatic } from '@/index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="GroundMonochromatic Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">GroundMonochromatic</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[GroundMonochromatic[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
