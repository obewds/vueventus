<!-- ./src/views/components/logos/VueVentusLogoTextPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VueVentusLogoText from '@/components/logos/VueVentusLogoText.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VueVentusLogoText">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VueVentusLogoText</h3>
                <div :class="tw.flexWrap">
                    <VueVentusLogoText/>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>