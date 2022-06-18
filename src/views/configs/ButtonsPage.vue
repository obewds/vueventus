<!-- ./src/views/configs/ButtonsPage.vue -->

<script setup lang="ts">

    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="Buttons Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Buttons</h3>
                <div :class="tw.flexWrap">
                    <div :class="[VvConfig.buttons.classes(), VvConfig.buttons.palettes.solid.primary, tw.pad]">
                        Buttons.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
