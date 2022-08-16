<!-- ./src/views/configs/palettes/RadioDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import RadioDefault from '../../../configs/palettes/RadioDefault'
    import VvRadio from '../../../components/inputs/VvRadio.vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="RadioDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">RadioDefault</h3>
                <div :class="tw.flexWrap">
                    <VvRadio
                        v-for="color in globals.data.colors"
                        :color="color.key"
                        :value="color.key"
                        name="radioColors"
                        :checked="color.key === 'primary'"
                    />
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
