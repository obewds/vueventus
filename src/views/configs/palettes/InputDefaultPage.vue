<!-- ./src/views/configs/palettes/InputDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import InputDefault from '../../../configs/palettes/InputDefault'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="InputDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">InputDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.inputColors" :class="[String(InputDefault[color.key]), tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
