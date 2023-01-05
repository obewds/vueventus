// ./cli/generators/VvFormGroupVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/forms/VvFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvFormGroup } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes, SizesText } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvFormGroup },

        props: {
            displayError: {
                type: Boolean,
                default: appVv.defaults.VvFormGroup.displayError,
            },
            displayHelp: {
                type: Boolean,
                default: appVv.defaults.VvFormGroup.displayHelp,
            },
            displaySuccess: {
                type: Boolean,
                default: appVv.defaults.VvFormGroup.displaySuccess,
            },
            errorClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.errorClasses,
            },
            errorText: {
                type: String,
                default: appVv.defaults.VvFormGroup.errorText,
            },
            errorTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvFormGroup.errorTextColor,
            },
            errorTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvFormGroup.errorTextPalette,
            },
            errorTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvFormGroup.errorTextSize,
            },
            helpClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.helpClasses,
            },
            helpText: {
                type: String,
                default: appVv.defaults.VvFormGroup.helpText,
            },
            helpTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvFormGroup.helpTextColor,
            },
            helpTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvFormGroup.helpTextPalette,
            },
            helpTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvFormGroup.helpTextSize,
            },
            label: {
                type: String,
                required: true,
            },
            labelFor: {
                type: String,
                required: true,
            },
            labelClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.labelClasses,
            },
            labelTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvFormGroup.labelTextColor,
            },
            labelTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvFormGroup.labelTextPalette,
            },
            labelTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvFormGroup.labelTextSize,
            },
            slotParentClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.slotParentClasses,
            },
            successClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.successClasses,
            },
            successText: {
                type: String,
                default: appVv.defaults.VvFormGroup.successText,
            },
            successTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvFormGroup.successTextColor,
            },
            successTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvFormGroup.successTextPalette,
            },
            successTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvFormGroup.successTextSize,
            },
            wrapperClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.wrapperClasses,
            },
        }
        
    })

</script>


<template>

    <VvFormGroup
        :display-error="displayError"
        :display-help="displayHelp"
        :display-success="displaySuccess"
        :error-classes="errorClasses"
        :error-text="errorText"
        :error-text-color="errorTextColor"
        :error-text-palette="errorTextPalette"
        :error-text-size="errorTextSize"
        :help-classes="helpClasses"
        :help-text="helpText"
        :help-text-color="helpTextColor"
        :help-text-palette="helpTextPalette"
        :help-text-size="helpTextSize"
        :label="label"
        :label-for="labelFor"
        :label-classes="labelClasses"
        :label-text-color="labelTextColor"
        :label-text-palette="labelTextPalette"
        :label-text-size="labelTextSize"
        :slot-parent-classes="slotParentClasses"
        :success-classes="successClasses"
        :success-text="successText"
        :success-text-color="successTextColor"
        :success-text-palette="successTextPalette"
        :success-text-size="successTextSize"
        :wrapper-classes="wrapperClasses"
    >
        <slot/>
    </VvFormGroup>

</template>

`

return output

}
    