<!-- ./src/views/components/inputs/VvInputPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvInput from '@/components/inputs/VvInput.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvInput">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvInput Default Palette Colors</h3>
                <div :class="tw.flexWrap">
                    <VvInput color="default" placeholder="default Color"/>
                    <VvInput color="error" placeholder="error Color"/>
                    <VvInput color="success" placeholder="success Color"/>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvInput Underlined Palette Colors</h3>
                <div :class="tw.flexWrap">
                    <VvInput color="default" palette="underlined" placeholder="default Color"/>
                    <VvInput color="error" palette="underlined" placeholder="error Color"/>
                    <VvInput color="success" palette="underlined" placeholder="success Color"/>
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvInput Sizes</h3>
                <div :class="tw.flexWrap">
                    <VvInput size="xs" placeholder='size="xs"'/>
                    <VvInput size="sm" placeholder='size="sm"'/>
                    <VvInput size="md" placeholder='size="md"'/>
                    <VvInput size="lg" placeholder='size="lg"'/>
                    <VvInput size="xl" placeholder='size="xl"'/>
                    <VvInput size="2xl" placeholder='size="2xl"'/>
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>