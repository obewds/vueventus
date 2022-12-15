<!-- ./src/views/components/lists/VvListPage.vue -->

<script setup lang="ts">

    import { inject } from 'vue'
    import globals from '../../../globals'
    import DevViewArticle from '../../../views/compos/DevViewArticle.vue'
    import VvList from '../../../components/lists/VvList.vue'
    import VvConfig from '../../../configs/VvConfig'

    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig


</script>


<template>

    <DevViewArticle title="VvList">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvList Default Palette</h3>
                <VvList
                    v-for="color in globals.data.colors"
                    tag="ul"
                    :marker-color="color.key"
                >
                    <li>{{ color.name }} Marker Color Example One</li>
                    <li>{{ color.name }} Example Two</li>
                    <li>{{ color.name }} Marker Example</li>
                </VvList>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvList Sizes</h3>
                <VvList
                    v-for="size in globals.data.textSizes"
                    :size="size.name"
                    class="pb-6"
                >
                    <li>{{ size.name }} Example One</li>
                    <li>{{ size.name }} Example Two</li>
                    <li>{{ size.name }} Example Three</li>
                </VvList>
            </div>
        </div>

    </DevViewArticle>

</template>
