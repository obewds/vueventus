<!-- ./src/views/configs/VvConfigPage.vue -->

<script setup lang="ts">

    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvConfig Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvConfig</h3>
                <div :class="tw.flexWrap">
                    <div :class="[VvConfig.buttons.classes(), String(VvConfig.buttons.palettes.solid.primary), tw.pad]">
                        VvConfig.buttons.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>