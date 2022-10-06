// ./cli/generators/VvFormGroupVueFile.mjs

export default function () {

const output = `<!-- ./src/components/vv/forms/VvFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvFormGroup } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

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
                type: String,
                default: appVv.defaults.VvFormGroup.errorTextColor,
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
                type: String,
                default: appVv.defaults.VvFormGroup.helpTextColor,
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
                type: String,
                default: appVv.defaults.VvFormGroup.labelTextColor,
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
                type: String,
                default: appVv.defaults.VvFormGroup.successTextColor,
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
        :help-classes="helpClasses"
        :help-text="helpText"
        :help-text-color="helpTextColor"
        :label="label"
        :label-for="labelFor"
        :label-classes="labelClasses"
        :label-text-color="labelTextColor"
        :slot-parent-classes="slotParentClasses"
        :success-classes="successClasses"
        :success-text="successText"
        :success-text-color="successTextColor"
        :wrapper-classes="wrapperClasses"
    >
        <slot/>
    </VvFormGroup>

</template>

`

return output

}
    