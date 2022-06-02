<!-- ./src/views/configs/VvConfigPage.vue -->

<script setup>

    import { inject } from 'vue'
    import VvConfig from '@/configs/VvConfig.js'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvConfig Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvConfig</h3>
                <div :class="tw.flexWrap">
                    <div :class="[VvConfig.buttons.classes(), VvConfig.buttons.palettes.solid.primary, tw.pad]">
                        VvConfig.buttons.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>