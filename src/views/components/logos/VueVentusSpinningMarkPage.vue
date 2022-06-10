<!--
    ./src/views/components/logos/VueVentusSpinningMarkPage.vue
    @/views/components/logos/VueVentusSpinningMarkPage.vue
-->


<script setup>

    import { inject } from 'vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VueVentusSpinningMark from '@/components/logos/VueVentusSpinningMark.vue'

    const globals = inject('globals')
    const tw = globals.classes

    const vv = inject('vv')

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