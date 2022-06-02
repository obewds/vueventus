<!-- ./src/views/configs/palettes/BorderDefaultPage.vue -->

<script setup>

    import { inject } from 'vue'
    import { BorderDefault } from '@/index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="BorderDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">BorderDefault</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[BorderDefault[color.key], tw.border, tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
