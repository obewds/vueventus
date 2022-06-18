<!-- ./src/views/configs/palettes/InputValidationPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import InputValidation from '../../../configs/palettes/InputValidation'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="InputValidation Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">InputValidation</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.inputColors" :class="[InputValidation[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
