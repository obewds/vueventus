<!-- ./src/views/configs/palettes/InputUnderlinedPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import InputUnderlined from '../../../configs/palettes/InputUnderlined'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="InputUnderlined Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">InputUnderlined</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.inputColors" :class="[String(InputUnderlined[color.key]), tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
