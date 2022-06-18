<!-- ./src/views/configs/palettes/GroundDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import GroundDefault from '../../../configs/palettes/GroundDefault'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="GroundDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">GroundDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[GroundDefault[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
