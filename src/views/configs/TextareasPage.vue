<!-- ./src/views/configs/TextareasPage.vue -->

<script setup lang="ts">

    import { inject } from 'vue'
    import globals from '../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvConfig from '../../configs/VvConfig'

    const tw = globals.classes

    const vv = Object.keys( inject( 'vv', {} ) ).length > 0 ? inject<typeof VvConfig>('vv') : VvConfig

</script>


<template>

    <DevViewArticle title="Textareas Config Module">
    
        <div :class="[tw.cardFlex]">
            <div>
                <h3 :class="tw.h3">Textareas Colors</h3>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes()), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="Default Color"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes()), String(vv?.textareas.palettes.validation.error)]"
                        placeholder="Error Color"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <textarea
                        :class="[String(vv?.textareas.classes()), String(vv?.textareas.palettes.validation.success)]"
                        placeholder="Success Color"
                    />
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Textareas Sizes</h3>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes('xs')), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="'xs' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes('sm')), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="'sm' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes()), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="'md' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes('lg')), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="'lg' Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.classes('xl')), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="'xl' Size"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <textarea
                        :class="[String(vv?.textareas.classes('2xl')), String(vv?.textareas.palettes.validation.default)]"
                        placeholder="'2xl' Size"
                    />
                </div>
            </div>
        </div>

        <div :class="tw.cardFlex">
            <div>
                <h3 :class="tw.h3">Textareas Row Sizes</h3>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.palettes.validation.default), String(vv?.textareas.classes())]"
                        :rows="vv?.textareas.getRowSize('xs')"
                        placeholder="'xs' Row Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.palettes.validation.default), String(vv?.textareas.classes())]"
                        :rows="vv?.textareas.getRowSize('sm')"
                        placeholder="'sm' Row Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.palettes.validation.default), String(vv?.textareas.classes())]"
                        :rows="vv?.textareas.getRowSize('md')"
                        placeholder="'md' Row Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.palettes.validation.default), String(vv?.textareas.classes())]"
                        :rows="vv?.textareas.getRowSize('lg')"
                        placeholder="'lg' Row Size"
                    />
                </div>
                <div :class="tw.flexWrap + ' pb-3'">
                    <textarea
                        :class="[String(vv?.textareas.palettes.validation.default), String(vv?.textareas.classes())]"
                        :rows="vv?.textareas.getRowSize('xl')"
                        placeholder="'xl' Row Size"
                    />
                </div>
                <div :class="tw.flexWrap">
                    <textarea
                        :class="[String(vv?.textareas.palettes.validation.default), String(vv?.textareas.classes())]"
                        :rows="vv?.textareas.getRowSize('2xl')"
                        placeholder="'2xl' Row Size"
                    />
                </div>
            </div>
        </div>
    
    </DevViewArticle>

</template>
