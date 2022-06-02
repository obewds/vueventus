<!-- ./src/views/configs/palettes/ButtonOutlinePage.vue -->

<script setup>

    import { inject } from 'vue'
    import { ButtonOutline } from '@/index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="ButtonOutline Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">ButtonOutline</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[ButtonOutline[color.key], tw.border, tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
