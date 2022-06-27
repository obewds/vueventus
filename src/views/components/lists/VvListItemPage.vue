<!-- ./src/views/components/lists/VvListItemPage.vue -->

<script setup lang="ts">

    import { inject } from 'vue'
    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvListItem from '@/components/lists/VvListItem.vue'
    import VvConfig from '../../../configs/VvConfig'

    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig


</script>


<template>

    <DevViewArticle title="VvListItem">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvListItem Default Palette</h3>
                <ul class="list-disc text-left pl-4">
                    <VvListItem v-for="color in globals.data.colors" :enable-colored-symbols="true" :symbol-color="color.key">
                        {{ color.name }} List Item Bullet
                    </VvListItem>
                </ul>
            </div>
        </div>

    </DevViewArticle>

</template>