<!-- ./src/views/components/logos/ObeKnockoutMarkPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import ObeKnockoutMark from '@/components/logos/ObeKnockoutMark.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="ObeKnockoutMark">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">ObeKnockoutMark</h3>
                <div :class="tw.flexWrap">
                    <ObeKnockoutMark class="w-24 mx-auto"/>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>