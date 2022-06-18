<!-- ./src/views/configs/TransitionsPage.vue -->

<script setup lang="ts">

    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import Transitions from '../../configs/Transitions'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="Transitions Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Transitions</h3>
                <div :class="tw.flexWrap">
                    <div :class="[Transitions.classes(), 'bg-red-500 hover:bg-cyan-500 text-white', tw.pad]">
                        Transitions.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
