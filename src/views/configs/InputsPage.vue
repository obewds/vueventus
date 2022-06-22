<!-- ./src/views/configs/InputsPage.vue -->

<script setup lang="ts">

    import { inject } from 'vue'
    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

</script>


<template>

    <DevViewArticle title="Inputs Config Module">

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Inputs Colors</h3>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[String(vv?.inputs.classes()), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="Default Color"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[String(vv?.inputs.classes()), String(vv?.inputs.palettes.validation.error)]"
                        placeholder="Error Color"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <input
                        :class="[String(vv?.inputs.classes()), String(vv?.inputs.palettes.validation.success)]"
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
                        :class="[String(vv?.inputs.classes('xs')), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="'xs' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[String(vv?.inputs.classes('sm')), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="'sm' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[String(vv?.inputs.classes()), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="'md' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[String(vv?.inputs.classes('lg')), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="'lg' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <input
                        :class="[String(vv?.inputs.classes('xl')), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="'xl' Size"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <input
                        :class="[String(vv?.inputs.classes('2xl')), String(vv?.inputs.palettes.validation.default)]"
                        placeholder="'2xl' Size"
                    />
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
