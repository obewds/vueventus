<!-- ./src/views/configs/AnchorsPage.vue -->

<script setup>

    import { inject } from 'vue'
    import VvConfig from '@/configs/VvConfig.js'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="Anchors Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Anchors</h3>
                <div :class="tw.flexWrap">
                    <div :class="[VvConfig.anchors.classes(), VvConfig.anchors.palettes.solid.primary, tw.pad]">
                        Anchors.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
