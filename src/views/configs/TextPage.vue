<!-- ./src/views/configs/Text.vue -->

<script setup>

    import { inject } from 'vue'
    import VvConfig from '@/configs/VvConfig.js'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'

    const globals = inject('globals')
    const tw = globals.classes

    const sentence = 'Oh, no room for Bender, huh? Fine! I’ll go build my own lunar lander, with blackjack and hookers. In fact, forget the lunar lander and the blackjack. Ahh, screw the whole thing! '

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

        <div :class="tw.cardFlex">
            <div v-for="item in globals.data.textSizes" :class="[item.maxWidth, 'mx-auto']">
                <h3 :class="tw.h3">{{ item.name }}</h3>
                <div :class="tw.flexWrap">
                    <div :class="[VvConfig.text.classes(item.name)]">
                        {{ sentence }}
                    </div>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
