<!-- ./src/views/configs/palettes/GroundPastelPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import GroundPastel from '../../../configs/palettes/GroundPastel'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="GroundPastel Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">GroundPastel</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[GroundPastel[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
