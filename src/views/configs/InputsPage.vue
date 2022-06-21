<!-- ./src/views/configs/InputsPage.vue -->

<script setup lang="ts">

    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

</script>


<template>

    <DevViewArticle title="Inputs Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Inputs Colors</h3>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes(), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="Default Color"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes(), String(VvConfig.inputs.palettes.validation.error)]"
                        placeholder="Error Color"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <input
                        :class="[VvConfig.inputs.classes(), String(VvConfig.inputs.palettes.validation.success)]"
                        placeholder="Success Color"
                    />
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Inputs Sizes</h3>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes('xs'), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="'xs' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes('sm'), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="'sm' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes(), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="'md' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes('lg'), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="'lg' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[VvConfig.inputs.classes('xl'), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="'xl' Size"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <input
                        :class="[VvConfig.inputs.classes('2xl'), String(VvConfig.inputs.palettes.validation.default)]"
                        placeholder="'2xl' Size"
                    />
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
