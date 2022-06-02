<!-- ./src/views/configs/palettes/ButtonSolidPage.vue -->

<script setup>

    import { inject } from 'vue'
    import { ButtonSolid } from '@/index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="ButtonSolid Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">ButtonSolid</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[ButtonSolid[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
