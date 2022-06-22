<!-- ./src/views/configs/palettes/BorderDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import BorderDefault from '../../../configs/palettes/BorderDefault'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="BorderDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">BorderDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[String(BorderDefault[color.key]), tw.border, tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
