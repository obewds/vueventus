<!-- ./src/views/configs/palettes/FillDefaultPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import FillDefault from '../../../configs/palettes/FillDefault'
    import VueVentusLogoText from '../../../components/logos/VueVentusLogoText.vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="FillDefault Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">FillDefault</h3>
                <div :class="tw.flexStack">
                    <div v-for="color in globals.data.colors">
                        <svg viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg" :class="[String(FillDefault[color.key]), 'mb-3']">
                            <rect width="300" height="20" />
                        </svg>
                        <div class="pb-3">
                            Fill {{ color.name }}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
