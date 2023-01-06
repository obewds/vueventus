<!-- ./src/components/forms/VvQuadFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import VvEl from '../elements/VvEl.vue'
    import VvConfig from '../../configs/VvConfig.js'

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
    import type { DefaultPalettes } from '../../types/DefaultPalettes'
    import type { SizesText } from '../../types/SizesText'

    export default defineComponent({

        components: { VvEl },

        props: {
            bottomSlotClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.bottomSlotClasses,
            },
            bottomWrapperClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.bottomWrapperClasses,
            },
            debug: {
                type: Boolean,
                default: VvConfig.defaults.VvQuadFormGroup.debug,
            },
            displayError: {
                type: Boolean,
                default: VvConfig.defaults.VvQuadFormGroup.displayError,
            },
            displayHelp: {
                type: Boolean,
                default: VvConfig.defaults.VvQuadFormGroup.displayHelp,
            },
            displaySuccess: {
                type: Boolean,
                default: VvConfig.defaults.VvQuadFormGroup.displaySuccess,
            },
            errorClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.errorClasses,
            },
            errorText: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.errorText,
            },
            errorTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvQuadFormGroup.errorTextColor,
            },
            errorTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvQuadFormGroup.errorTextPalette,
            },
            errorTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvQuadFormGroup.errorTextSize,
            },
            helpClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.helpClasses,
            },
            helpText: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.helpText,
            },
            helpTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvQuadFormGroup.helpTextColor,
            },
            helpTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvQuadFormGroup.helpTextPalette,
            },
            helpTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvQuadFormGroup.helpTextSize,
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
                default: VvConfig.defaults.VvQuadFormGroup.labelClasses,
            },
            labelTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvQuadFormGroup.labelTextColor,
            },
            labelTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvQuadFormGroup.labelTextPalette,
            },
            labelTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvQuadFormGroup.labelTextSize,
            },
            slotParentClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.slotParentClasses,
            },
            successClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.successClasses,
            },
            successText: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.successText,
            },
            successTextColor: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: VvConfig.defaults.VvQuadFormGroup.successTextColor,
            },
            successTextPalette: {
                type: String as PropType<keyof DefaultPalettes>,
                default: VvConfig.defaults.VvQuadFormGroup.successTextPalette,
            },
            successTextSize: {
                type: String as PropType<keyof SizesText>,
                default: VvConfig.defaults.VvQuadFormGroup.successTextSize,
            },
            textParentClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.textParentClasses,
            },
            topSlotClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.topSlotClasses,
            },
            topWrapperClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.topWrapperClasses,
            },
            wrapperClasses: {
                type: String,
                default: VvConfig.defaults.VvQuadFormGroup.wrapperClasses,
            },
        }
        
    })

</script>


<template>

    <div
        :class="wrapperClasses"
        :data-vv-quad-form-group-prop-wrapper-classes="debug ? wrapperClasses : null"
    >

        <div
            :class="topWrapperClasses"
            :data-vv-quad-form-group-prop-top-wrapper-classes="debug ? topWrapperClasses : null"
        >

            <VvEl
                tag="label"
                :for="labelFor"
                :class="labelClasses"
                :text-color="labelTextColor"
                :text-palette="labelTextPalette"
                :size="labelTextSize"
                :data-vv-quad-form-group-prop-label-classes="debug ? labelClasses : null"
                :data-vv-quad-form-group-prop-label-text-color="debug ? labelTextColor : null"
                :data-vv-quad-form-group-prop-label-text-palette="debug ? labelTextPalette : null"
                :data-vv-quad-form-group-prop-label-text-size="debug ? labelTextSize : null"
            >
                {{ label }}
            </VvEl>

            <div
                :class="topSlotClasses"
                :data-vv-quad-form-group-prop-top-slot-classes="debug ? topSlotClasses : null"
            >
                <slot name="top"/>
            </div>

        </div>

        <div
            :class="slotParentClasses"
            :data-vv-quad-form-group-prop-slot-parent-classes="debug ? slotParentClasses : null"
        >
            <slot/>
        </div>

        <div
            :class="bottomWrapperClasses"
            :data-vv-quad-form-group-prop-bottom-wrapper-classes="debug ? bottomWrapperClasses : null"
        >

            <div
                :class="textParentClasses"
                :data-vv-quad-form-group-prop-text-parent-classes="debug ? textParentClasses : null"
            >

                <VvEl
                    v-if="!displayError && !displayHelp && !displaySuccess"
                    tag="div"
                    :class="helpClasses"
                    :size="helpTextSize"
                    :data-vv-quad-form-group-prop-help-classes="debug ? helpClasses : null"
                    :data-vv-quad-form-group-prop-help-text-size="debug ? helpTextSize : null"
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
                    :data-vv-quad-form-group-prop-help-classes="debug ? helpClasses : null"
                    :data-vv-quad-form-group-prop-help-text-color="debug ? helpTextColor : null"
                    :data-vv-quad-form-group-prop-help-text-palette="debug ? helpTextPalette : null"
                    :data-vv-quad-form-group-prop-help-text-size="debug ? helpTextSize : null"
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
                    :data-vv-quad-form-group-prop-success-classes="debug ? successClasses : null"
                    :data-vv-quad-form-group-prop-success-text-color="debug ? successTextColor : null"
                    :data-vv-quad-form-group-prop-success-text-palette="debug ? successTextPalette : null"
                    :data-vv-quad-form-group-prop-success-text-size="debug ? successTextSize : null"
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
                    :data-vv-quad-form-group-prop-error-classes="debug ? errorClasses : null"
                    :data-vv-quad-form-group-prop-error-text-color="debug ? errorTextColor : null"
                    :data-vv-quad-form-group-prop-error-text-palette="debug ? errorTextPalette : null"
                    :data-vv-quad-form-group-prop-error-text-size="debug ? errorTextSize : null"
                >
                    {{ errorText }}
                </VvEl>

            </div>

            <div
                :class="bottomSlotClasses"
                :data-vv-quad-form-group-prop-bottom-slot-classes="debug ? bottomSlotClasses : null"
            >
                <slot name="bottom"/>
            </div>

        </div>
        
    </div>

</template>
