<!-- ./src/views/configs/TransitionsPage.vue -->

<script setup>

    import { inject } from 'vue'
    import { Transitions } from '@/index'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
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
