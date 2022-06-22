<!-- ./src/views/configs/AnchorsPage.vue -->

<script setup lang="ts">

    import { inject } from 'vue'
    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

</script>


<template>

    <DevViewArticle title="Anchors Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Anchors</h3>
                <div :class="tw.flexWrap">
                    <div :class="[String(vv?.anchors.classes()), String(vv?.anchors.palettes.default.primary), tw.pad]">
                        Anchors.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
