<!-- ./src/views/configs/palettes/CheckboxDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import CheckboxDefault from '../../../configs/palettes/CheckboxDefault'
    import VvCheckbox from '../../../components/inputs/VvCheckbox.vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="CheckboxDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">CheckboxDefault</h3>
                <div :class="tw.flexWrap">
                    <VvCheckbox
                        v-for="color in globals.data.colors"
                        :color="color.key"
                        checked
                    />
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
