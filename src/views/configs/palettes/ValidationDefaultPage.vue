<!-- ./src/views/configs/palettes/ValidationDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import ValidationDefault from '../../../configs/palettes/ValidationDefault'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="ValidationDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">ValidationDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.inputColors" :class="[String(ValidationDefault[color.key]), tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
