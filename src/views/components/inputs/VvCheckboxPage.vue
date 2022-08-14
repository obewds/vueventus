<!-- ./src/views/components/inputs/VvCheckboxPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvCheckbox from '@/components/inputs/VvCheckbox.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvCheckbox">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvCheckbox Default Palette Colors</h3>
                <div :class="tw.flexStack">

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-default" color="default" checked/>
                        <label htmlFor="vvCheck-default">Default Color</label>
                    </div>

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-error" color="error" checked/>
                        <label htmlFor="vvCheck-error">Error Color</label>
                    </div>

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-primary" color="primary" checked/>
                        <label htmlFor="vvCheck-primary">Primary Color</label>
                    </div>

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-secondary" color="secondary" checked/>
                        <label htmlFor="vvCheck-secondary">Secondary Color</label>
                    </div>

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-success" color="success" checked/>
                        <label htmlFor="vvCheck-success">Success Color</label>
                    </div>
                    
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvCheckbox Sizes</h3>
                <div :class="tw.flexStack">

                    <div class="flex items-center gap-1">
                        <VvCheckbox id="vvCheck-xs" size="xs" checked/>
                        <label htmlFor="vvCheck-xs" class="text-2xs">XS Size</label>
                    </div>

                    <div class="flex items-center gap-1.5">
                        <VvCheckbox id="vvCheck-sm" size="sm" checked/>
                        <label htmlFor="vvCheck-sm" class="text-xs">SM Size</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <VvCheckbox id="vvCheck-md" size="md" checked/>
                        <label htmlFor="vvCheck-md" class="text-md">MD Size</label>
                    </div>

                    <div class="flex items-center gap-2.5">
                        <VvCheckbox id="vvCheck-lg" size="lg" checked/>
                        <label htmlFor="vvCheck-lg" class="text-lg">LG Size</label>
                    </div>

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-xl" size="xl" checked/>
                        <label htmlFor="vvCheck-xl" class="text-xl">XL Size</label>
                    </div>

                    <div class="flex items-center gap-3">
                        <VvCheckbox id="vvCheck-2xl" size="2xl" checked/>
                        <label htmlFor="vvCheck-2xl" class="text-2xl">2XL Size</label>
                    </div>
                    
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>