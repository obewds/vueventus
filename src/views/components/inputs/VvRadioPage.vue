<!-- ./src/views/components/inputs/VvRadioPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '../../../views/compos/DevViewArticle.vue'
    import VvRadio from '../../../components/inputs/VvRadio.vue'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="VvRadio">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvRadio Default Palette Colors</h3>
                <div :class="tw.flexStack">

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-default-1"
                                name="vvRadio-default"
                                value="default-1"
                                color="default"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-default-1">Default Color 1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-default-2"
                                name="vvRadio-default"
                                value="default-2"
                                color="default"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-default-2">Default Color 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-error-1"
                                name="vvRadio-error"
                                value="error-1"
                                color="error"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-error-1">Error Color 1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-error-2"
                                name="vvRadio-error"
                                value="error-2"
                                color="error"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-error-2">Error Color 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-primary-1"
                                name="vvRadio-primary"
                                value="primary-1"
                                color="primary"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-primary-1">Primary Color 1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-primary-2"
                                name="vvRadio-primary"
                                value="primary-2"
                                color="primary"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-primary-2">Primary Color 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-secondary-1"
                                name="vvRadio-secondary"
                                value="secondary-1"
                                color="secondary"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-secondary-1">Secondary Color 1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-secondary-2"
                                name="vvRadio-secondary"
                                value="secondary-2"
                                color="secondary"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-secondary-2">Secondary Color 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-success-1"
                                name="vvRadio-success"
                                value="success-1"
                                color="success"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-success-1">Success Color 1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-success-2"
                                name="vvRadio-success"
                                value="success-2"
                                color="success"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-success-2">Success Color 2</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">VvRadio Sizes</h3>
                <div :class="tw.flexStack">

                    <div class="flex flex-col space-y-0.5 pb-4">
                        <div class="flex items-center gap-1">
                            <VvRadio
                                id="vvRadio-xs-1"
                                name="vvRadio-xs"
                                value="xs-1"
                                color="default"
                                size="xs"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-xs-1" class="text-2xs">XS Size 1</label>
                        </div>
                        <div class="flex items-center gap-1">
                            <VvRadio
                                id="vvRadio-xs-2"
                                name="vvRadio-xs"
                                value="xs-2"
                                color="default"
                                size="xs"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-xs-2" class="text-2xs">XS Size 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-1.5">
                            <VvRadio
                                id="vvRadio-sm-1"
                                name="vvRadio-sm"
                                value="sm-1"
                                color="default"
                                size="sm"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-sm-1" class="text-xs">SM Size 1</label>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <VvRadio
                                id="vvRadio-sm-2"
                                name="vvRadio-sm"
                                value="sm-2"
                                color="default"
                                size="sm"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-sm-2" class="text-xs">SM Size 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-md-1"
                                name="vvRadio-md"
                                value="md-1"
                                color="default"
                                size="md"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-md-1" class="text-md">MD Size 1</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="vvRadio-md-2"
                                name="vvRadio-md"
                                value="md-2"
                                color="default"
                                size="md"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-md-2" class="text-md">MD Size 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1 pb-4">
                        <div class="flex items-center gap-2.5">
                            <VvRadio
                                id="vvRadio-lg-1"
                                name="vvRadio-lg"
                                value="lg-1"
                                color="default"
                                size="lg"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-lg-1" class="text-lg">LG Size 1</label>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <VvRadio
                                id="vvRadio-lg-2"
                                name="vvRadio-lg"
                                value="lg-2"
                                color="default"
                                size="lg"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-lg-2" class="text-lg">LG Size 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5 pb-4">
                        <div class="flex items-center gap-3">
                            <VvRadio
                                id="vvRadio-xl-1"
                                name="vvRadio-xl"
                                value="xl-1"
                                color="default"
                                size="xl"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-xl-1" class="text-xl">XL Size 1</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <VvRadio
                                id="vvRadio-xl-2"
                                name="vvRadio-xl"
                                value="xl-2"
                                color="default"
                                size="xl"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-xl-2" class="text-xl">XL Size 2</label>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5 pb-4">
                        <div class="flex items-center gap-3">
                            <VvRadio
                                id="vvRadio-2xl-1"
                                name="vvRadio-2xl"
                                value="2xl-1"
                                color="default"
                                size="2xl"
                                :checked="true"
                            />
                            <label htmlFor="vvRadio-2xl-1" class="text-2xl">2XL Size 1</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <VvRadio
                                id="vvRadio-2xl-2"
                                name="vvRadio-2xl"
                                value="2xl-2"
                                color="default"
                                size="2xl"
                                :checked="false"
                            />
                            <label htmlFor="vvRadio-2xl-2" class="text-2xl">2XL Size 2</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </DevViewArticle>

</template>