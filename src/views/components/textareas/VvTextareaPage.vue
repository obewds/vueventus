<!-- ./src/views/components/textareas/VvTextareaPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvTextarea from '@/components/textareas/VvTextarea.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvTextarea">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvTextarea Colors</h3>
                <div :class="tw.flexWrap">
                    <VvTextarea color="default" placeholder="default Color"/>
                    <VvTextarea color="error" placeholder="error Color"/>
                    <VvTextarea color="success" placeholder="success Color"/>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvTextarea Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvTextarea size="xs" placeholder='size="xs"'/>
                    <VvTextarea size="sm" placeholder='size="sm"'/>
                    <VvTextarea size="md" placeholder='size="md"'/>
                    <VvTextarea size="lg" placeholder='size="lg"'/>
                    <VvTextarea size="xl" placeholder='size="xl"'/>
                    <VvTextarea size="2xl" placeholder='size="2xl"'/>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvTextarea rowSizes</h3>
                <div :class="tw.flexWrap">
                    <VvTextarea row-size="xs" placeholder='row-size="xs"'/>
                    <VvTextarea row-size="sm" placeholder='row-size="sm"'/>
                    <VvTextarea row-size="md" placeholder='row-size="md"'/>
                    <VvTextarea row-size="lg" placeholder='row-size="lg"'/>
                    <VvTextarea row-size="xl" placeholder='row-size="xl"'/>
                    <VvTextarea row-size="2xl" placeholder='row-size="2xl"'/>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>