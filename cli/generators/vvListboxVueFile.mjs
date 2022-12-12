// ./cli/generators/vvListboxVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/selects/VvListbox.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvListbox } from '@obewds/vueventus'
    import appVv from '../../../app.vv'
    
    import type { PropType } from 'vue'
    import type { VvListboxData } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvListbox },

        props: {
            data: {
                type: Array as PropType<Array<VvListboxData>>,
                default: appVv.defaults.VvListbox.data,
            },
            displayClasses: {
                type: String,
                default: appVv.defaults.VvListbox.displayClasses,
            },
            displayDisabledClasses: {
                type: String,
                default: appVv.defaults.VvListbox.displayDisabledClasses,
            },
            iconDisabledClasses: {
                type: String,
                default: appVv.defaults.VvListbox.iconDisabledClasses,
            },
            iconSelectedClasses: {
                type: String,
                default: appVv.defaults.VvListbox.iconSelectedClasses,
            },
            iconsSizeClasses: {
                type: String,
                default: appVv.defaults.VvListbox.iconsSizeClasses,
            },
            label: {
                type: String,
                default: appVv.defaults.VvListbox.label,
            },
            labelClasses: {
                type: String,
                default: appVv.defaults.VvListbox.labelClasses,
            },
            listboxButtonClasses: {
                type: String,
                default: appVv.defaults.VvListbox.listboxButtonClasses,
            },
            listboxButtonColor: {
                type: String,
                default: appVv.defaults.VvListbox.listboxButtonColor,
            },
            listboxButtonPalette: {
                type: String,
                default: appVv.defaults.VvListbox.listboxButtonPalette,
            },
            listboxOptionClasses: {
                type: String,
                default: appVv.defaults.VvListbox.listboxOptionClasses,
            },
            listboxOptionColor: {
                type: String,
                default: appVv.defaults.VvListbox.listboxOptionColor,
            },
            listboxOptionPalette: {
                type: String,
                default: appVv.defaults.VvListbox.listboxOptionPalette,
            },
            listboxOptionsClasses: {
                type: String,
                default: appVv.defaults.VvListbox.listboxOptionsClasses,
            },
            listboxOptionsWithLabelSpacing: {
                type: String,
                default: appVv.defaults.VvListbox.listboxOptionsWithLabelSpacing,
            },
            listboxOptionsWithoutLabelSpacing: {
                type: String,
                default: appVv.defaults.VvListbox.listboxOptionsWithoutLabelSpacing,
            },
            optionIconParentClasses: {
                type: String,
                default: appVv.defaults.VvListbox.optionIconParentClasses,
            },
            selectedDisplayClasses: {
                type: String,
                default: appVv.defaults.VvListbox.selectedDisplayClasses,
            },
            selectedIndex: {
                type: Number,
                default: appVv.defaults.VvListbox.selectedIndex,
            },
            size: {
                type: String,
                default: appVv.defaults.VvListbox.size,
            },
        },

    })

</script>


<template>

    <VvListbox
        :data="data"
        :display-classes="displayClasses"
        :display-disabled-classes="displayDisabledClasses"
        :icon-disabled-classes="iconDisabledClasses"
        :icon-selected-classes="iconSelectedClasses"
        :icons-size-classes="iconsSizeClasses"
        :label="label"
        :label-classes="labelClasses"
        :listbox-button-classes="listboxButtonClasses"
        :listbox-button-color="listboxButtonColor"
        :listbox-button-palette="listboxButtonPalette"
        :listbox-option-classes="listboxOptionClasses"
        :listbox-option-color="listboxOptionColor"
        :listbox-option-palette="listboxOptionPalette"
        :listbox-options-classes="listboxOptionsClasses"
        :listbox-options-with-label-spacing="listboxOptionsWithLabelSpacing"
        :listbox-options-without-label-spacing="listboxOptionsWithoutLabelSpacing"
        :option-icon-parent-classes="optionIconParentClasses"
        :selected-display-classes="selectedDisplayClasses"
        :selected-index="selectedIndex"
        :size="size"
    />

</template>

`

return output

}
