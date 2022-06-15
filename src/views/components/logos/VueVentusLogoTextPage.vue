<!--
    ./src/views/components/logos/VueVentusLogoTextPage.vue
    @/views/components/logos/VueVentusLogoTextPage.vue
-->


<script setup>

    import { inject } from 'vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VueVentusLogoText from '@/components/logos/VueVentusLogoText.vue'
    import VvConfig from '@/configs/VvConfig.js'

    const globals = inject('globals')
    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

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