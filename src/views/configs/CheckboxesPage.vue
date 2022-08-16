<!-- ./src/views/configs/CheckboxesPage.vue -->

<script setup lang="ts">

    import { inject } from 'vue'
    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

</script>


<template>

    <DevViewArticle title="Checkboxes Config Module">

        <div :class="[tw.cardFlex, 'text-left']">
            <div>
                <h3 :class="tw.h3">Checkboxes Config Data:</h3>
                <div :class="tw.flexStack">
                    <pre :class="tw.fakeConsole"><code>{{ VvConfig.radios }}</code></pre>
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
