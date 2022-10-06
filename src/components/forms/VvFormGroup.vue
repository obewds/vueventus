<!-- ./src/components/forms/VvFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import VvEl from '../elements/VvEl.vue'
    import VvConfig from '../../configs/VvConfig.js'

    export default defineComponent({

        components: { VvEl },

        props: {
            displayError: {
                type: Boolean,
                default: VvConfig.defaults.VvFormGroup.displayError,
            },
            displayHelp: {
                type: Boolean,
                default: VvConfig.defaults.VvFormGroup.displayHelp,
            },
            displaySuccess: {
                type: Boolean,
                default: VvConfig.defaults.VvFormGroup.displaySuccess,
            },
            errorClasses: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.errorClasses,
            },
            errorText: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.errorText,
            },
            errorTextColor: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.errorTextColor,
            },
            errorTextPalette: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.errorTextPalette,
            },
            helpClasses: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.helpClasses,
            },
            helpText: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.helpText,
            },
            helpTextColor: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.helpTextColor,
            },
            helpTextPalette: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.helpTextPalette,
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
                default: VvConfig.defaults.VvFormGroup.labelClasses,
            },
            labelTextColor: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.labelTextColor,
            },
            labelTextPalette: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.labelTextPalette,
            },
            slotParentClasses: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.slotParentClasses,
            },
            successClasses: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.successClasses,
            },
            successText: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.successText,
            },
            successTextColor: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.successTextColor,
            },
            successTextPalette: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.successTextPalette,
            },
            wrapperClasses: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.wrapperClasses,
            },
        }
        
    })

</script>


<template>

    <div :class="wrapperClasses">

        <VvEl
            tag="label"
            :for="labelFor"
            :text-palette="labelTextPalette"
            :text-color="labelTextColor"
            :class="labelClasses"
        >
            {{ label }}
        </VvEl>

        <div :class="slotParentClasses">
            <slot/>
        </div>

        <div
            v-if="!displayError && !displayHelp && !displaySuccess"
            :class="helpClasses"
        >
            <!-- placeholder to toggle opposite of messages & prevent layout shift -->&nbsp;
        </div>

        <VvEl
            v-if="displayHelp"
            tag="div"
            :text-palette="helpTextPalette"
            :text-color="helpTextColor"
            :class="helpClasses"
        >
            {{ helpText }}
        </VvEl>

        <VvEl
            v-if="displaySuccess"
            tag="div"
            :text-palette="successTextPalette"
            :text-color="successTextColor"
            :class="successClasses"
        >
            {{ successText }}
        </VvEl>

        <VvEl
            v-if="displayError === true"
            tag="div"
            :text-palette="errorTextPalette"
            :text-color="errorTextColor"
            :class="errorClasses"
        >
            {{ errorText }}
        </VvEl>
        
    </div>

</template>
