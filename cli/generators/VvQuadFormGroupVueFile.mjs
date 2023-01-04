// ./cli/generators/VvQuadFormGroupVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/forms/VvQuadFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvQuadFormGroup } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvQuadFormGroup },

        props: {
            bottomSlotClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.bottomSlotClasses,
            },
            bottomWrapperClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.bottomWrapperClasses,
            },
            displayError: {
                type: Boolean,
                default: appVv.defaults.VvQuadFormGroup.displayError,
            },
            displayHelp: {
                type: Boolean,
                default: appVv.defaults.VvQuadFormGroup.displayHelp,
            },
            displaySuccess: {
                type: Boolean,
                default: appVv.defaults.VvQuadFormGroup.displaySuccess,
            },
            errorClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.errorClasses,
            },
            errorText: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.errorText,
            },
            errorTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvQuadFormGroup.errorTextColor,
            },
            errorTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvQuadFormGroup.errorTextPalette,
            },
            helpClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.helpClasses,
            },
            helpText: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.helpText,
            },
            helpTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvQuadFormGroup.helpTextColor,
            },
            helpTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvQuadFormGroup.helpTextPalette,
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
                default: appVv.defaults.VvQuadFormGroup.labelClasses,
            },
            labelTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvQuadFormGroup.labelTextColor,
            },
            labelTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvQuadFormGroup.labelTextPalette,
            },
            slotParentClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.slotParentClasses,
            },
            successClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.successClasses,
            },
            successText: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.successText,
            },
            successTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: appVv.defaults.VvQuadFormGroup.successTextColor,
            },
            successTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: appVv.defaults.VvQuadFormGroup.successTextPalette,
            },
            textParentClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.textParentClasses,
            },
            topSlotClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.topSlotClasses,
            },
            topWrapperClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.topWrapperClasses,
            },
            wrapperClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.wrapperClasses,
            },
        }
        
    })

</script>


<template>

    <VvQuadFormGroup
        :bottom-slot-classes="bottomSlotClasses"
        :bottom-wrapper-classes="bottomWrapperClasses"
        :display-error="displayError"
        :display-help="displayHelp"
        :display-success="displaySuccess"
        :error-classes="errorClasses"
        :error-text="errorText"
        :error-text-color="errorTextColor"
        :error-text-palette="errorTextPalette"
        :help-classes="helpClasses"
        :help-text="helpText"
        :help-text-color="helpTextColor"
        :help-text-palette="helpTextPalette"
        :label="label"
        :label-for="labelFor"
        :label-classes="labelClasses"
        :label-text-color="labelTextColor"
        :label-text-palette="labelTextPalette"
        :slot-parent-classes="slotParentClasses"
        :success-classes="successClasses"
        :success-text="successText"
        :success-text-color="successTextColor"
        :success-text-palette="successTextPalette"
        :text-parent-classes="textParentClasses"
        :top-slot-classes="topSlotClasses"
        :top-wrapper-classes="topWrapperClasses"
        :wrapper-classes="wrapperClasses"
    >
        <slot/>
    </VvQuadFormGroup>

</template>

`

return output

}
    