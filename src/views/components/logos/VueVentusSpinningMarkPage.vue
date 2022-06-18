<!-- ./src/views/components/logos/VueVentusSpinningMarkPage.vue -->

<script setup>

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VueVentusSpinningMark from '@/components/logos/VueVentusSpinningMark.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VueVentusSpinningMark">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VueVentusSpinningMark</h3>
                <div :class="tw.flexWrap">
                    <VueVentusSpinningMark class="w-16"/>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>