<!-- ./src/components/forms/VvQuadFormGroup.vue -->

<script lang="ts">

import { defineComponent } from 'vue'
import VvEl from '../elements/VvEl.vue'
import VvConfig from '../../configs/VvConfig.js'

import type { PropType } from 'vue'
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors'
import type { DefaultPalettes } from '../../types/DefaultPalettes'

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

    <div :class="wrapperClasses">

        <div :class="topWrapperClasses">

            <VvEl
                tag="label"
                :for="labelFor"
                :text-palette="labelTextPalette"
                :text-color="labelTextColor"
                :class="labelClasses"
            >
                {{ label }}
            </VvEl>

            <div :class="topSlotClasses">
                <slot name="top"/>
            </div>

        </div>

        <div :class="slotParentClasses">
            <slot/>
        </div>

        <div :class="bottomWrapperClasses">

            <div :class="textParentClasses">

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

            <div :class="bottomSlotClasses">
                <slot name="bottom"/>
            </div>

        </div>
        
    </div>

</template>
