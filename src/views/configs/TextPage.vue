<!-- ./src/views/configs/Text.vue -->

<script setup>

    import { inject } from 'vue'
    import VvConfig from '@/configs/VvConfig.js'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="Text Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Text</h3>
                <div :class="tw.flexWrap">
                    <div :class="[VvConfig.text.classes()]">
                        Text.classes()
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
