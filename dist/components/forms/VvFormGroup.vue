<!-- ./src/components/forms/VvFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import VvEl from '../elements/VvEl.vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { DefaultPalettes } from '../../types/DefaultPalettes'
    import type { SizesText } from '@/types/SizesText'

    export default defineComponent({

        components: { VvEl },

        props: {
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvFormGroup.debug,
            },
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
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvFormGroup.errorTextColor,
            },
            errorTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvFormGroup.errorTextPalette,
            },
            errorTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvFormGroup.errorTextSize,
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
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvFormGroup.helpTextColor,
            },
            helpTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvFormGroup.helpTextPalette,
            },
            helpTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvFormGroup.helpTextSize,
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
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvFormGroup.labelTextColor,
            },
            labelTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvFormGroup.labelTextPalette,
            },
            labelTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvFormGroup.labelTextSize,
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
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvFormGroup.successTextColor,
            },
            successTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvFormGroup.successTextPalette,
            },
            successTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvFormGroup.successTextSize,
            },
            wrapperClasses: {
                type: String,
                default: VvConfig.defaults.VvFormGroup.wrapperClasses,
            },
        }
        
    })

</script>


<template>

    <div
        :class="wrapperClasses"
        :data-vv-form-group-prop-wrapper-classes="debug ? wrapperClasses : null"
    >

        <VvEl
            tag="label"
            :for="labelFor"
            :class="labelClasses"
            :text-color="labelTextColor"
            :text-palette="labelTextPalette"
            :size="labelTextSize"
            :data-vv-form-group-prop-label-classes="debug ? labelClasses : null"
            :data-vv-form-group-prop-label-text-color="debug ? labelTextColor : null"
            :data-vv-form-group-prop-label-text-palette="debug ? labelTextPalette : null"
            :data-vv-form-group-prop-label-text-size="debug ? labelTextSize : null"
        >
            {{ label }}
        </VvEl>

        <div
            :class="slotParentClasses"
            :data-vv-form-group-prop-slot-parent-classes="debug ? slotParentClasses : null"
        >
            <slot/>
        </div>

        <VvEl
            v-if="!displayError && !displayHelp && !displaySuccess"
            tag="div"
            :class="helpClasses"
            :size="helpTextSize"
            :data-vv-form-group-prop-help-classes="debug ? helpClasses : null"
            :data-vv-form-group-prop-help-text-size="debug ? helpTextSize : null"
        >
            <!-- placeholder to toggle opposite of messages & prevent layout shift -->
            <span class="invisible">&nbsp;{{ helpText }}</span>
        </VvEl>

        <VvEl
            v-if="displayHelp"
            tag="div"
            :class="helpClasses"
            :text-color="helpTextColor"
            :text-palette="helpTextPalette"
            :size="helpTextSize"
            :data-vv-form-group-prop-help-classes="debug ? helpClasses : null"
            :data-vv-form-group-prop-help-text-color="debug ? helpTextColor : null"
            :data-vv-form-group-prop-help-text-palette="debug ? helpTextPalette : null"
            :data-vv-form-group-prop-help-text-size="debug ? helpTextSize : null"
        >
            {{ helpText }}
        </VvEl>

        <VvEl
            v-if="displaySuccess"
            tag="div"
            :class="successClasses"
            :text-color="successTextColor"
            :text-palette="successTextPalette"
            :size="successTextSize"
            :data-vv-form-group-prop-success-classes="debug ? successClasses : null"
            :data-vv-form-group-prop-success-text-color="debug ? successTextColor : null"
            :data-vv-form-group-prop-success-text-palette="debug ? successTextPalette : null"
            :data-vv-form-group-prop-success-text-size="debug ? successTextSize : null"
        >
            {{ successText }}
        </VvEl>

        <VvEl
            v-if="displayError === true"
            tag="div"
            :class="errorClasses"
            :text-color="errorTextColor"
            :text-palette="errorTextPalette"
            :size="errorTextSize"
            :data-vv-form-group-prop-error-classes="debug ? errorClasses : null"
            :data-vv-form-group-prop-error-text-color="debug ? errorTextColor : null"
            :data-vv-form-group-prop-error-text-palette="debug ? errorTextPalette : null"
            :data-vv-form-group-prop-error-text-size="debug ? errorTextSize : null"
        >
            {{ errorText }}
        </VvEl>
        
    </div>

</template>
