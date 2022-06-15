<!-- ./src/views/configs/AnchorsPage.vue -->

<script setup>

    import { inject } from 'vue'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '@/configs/VvConfig.js'

    const globals = inject('globals')
    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject('vv') : VvConfig

</script>


<template>

    <DevViewArticle title="Anchors Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Anchors</h3>
                <div :class="tw.flexWrap">
                    <div :class="[vv.anchors.classes(), vv.anchors.palettes.default.primary, tw.pad]">
                        Anchors.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
