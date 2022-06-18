<!-- ./src/views/configs/palettes/AnchorDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import AnchorDefault from '../../../configs/palettes/AnchorDefault'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="AnchorDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">AnchorDefault</h3>
                <div :class="tw.flexWrap">
                    <a v-for="color in globals.data.colors" :class="AnchorDefault[color.key]" href="#">
                        {{ color.name }}
                    </a>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
