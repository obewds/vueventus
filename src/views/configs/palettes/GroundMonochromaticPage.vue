<!-- ./src/views/configs/palettes/GroundMonochromaticPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import GroundMonochromatic from '../../../configs/palettes/GroundMonochromatic'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="GroundMonochromatic Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">GroundMonochromatic</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[String(GroundMonochromatic[color.key]), tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
