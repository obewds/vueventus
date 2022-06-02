<!-- ./src/views/configs/palettes/TextDefaultPage.vue -->

<script setup>

    import { inject } from 'vue'
    import { TextDefault } from '@/index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
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
