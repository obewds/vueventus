<!-- ./src/views/configs/palettes/TextDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import TextDefault from '../../../configs/palettes/TextDefault'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="TextDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">TextDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[TextDefault[color.key]]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
