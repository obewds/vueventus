<!-- ./src/views/configs/palettes/GroundConsolePage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import GroundConsole from '../../../configs/palettes/GroundConsole'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="GroundConsole Palette Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">GroundConsole</h3>
                <div :class="tw.flexWrap">
                    <div v-for="color in globals.data.colors" :class="[GroundConsole[color.key], tw.pad]">
                        {{ color.name }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
