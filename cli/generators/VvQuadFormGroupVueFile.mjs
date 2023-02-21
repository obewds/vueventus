// ./cli/generators/VvQuadFormGroupVueFile.mjs

export default function () {

let commentPath = useNuxtPaths ? './components/Vv/QuadFormGroup.vue' : './src/components/vv/anchors/VvQuadFormGroup.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

const output = `<!-- ${commentPath} -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors, DefaultPalettes, SizesText } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import { VvQuadFormGroup as LibVvQuadFormGroup } from '@obewds/vueventus'
    import appVv from '${appVvPath}'

    export default defineComponent({

        components: { LibVvQuadFormGroup },

        props: {
            bottomSlotClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.bottomSlotClasses,
            },
            bottomWrapperClasses: {
                type: String,
                default: appVv.defaults.VvQuadFormGroup.bottomWrapperClasses,
            },
            debug: {
                type: Boolean,
                default: appVv.defaults.VvQuadFormGroup.debug,
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
            errorTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvQuadFormGroup.errorTextSize,
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
            helpTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvQuadFormGroup.helpTextSize,
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
            labelTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvQuadFormGroup.labelTextSize,
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
            successTextSize: {
                type: String as PropType<keyof SizesText>,
                default: appVv.defaults.VvQuadFormGroup.successTextSize,
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

    <LibVvQuadFormGroup
        :bottom-slot-classes="bottomSlotClasses"
        :bottom-wrapper-classes="bottomWrapperClasses"
        :debug="debug"
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
        :text-parent-classes="textParentClasses"
        :top-slot-classes="topSlotClasses"
        :top-wrapper-classes="topWrapperClasses"
        :wrapper-classes="wrapperClasses"
        :data-vv-form-group-prop-bottom-slot-classes="debug ? bottomSlotClasses : null"
        :data-vv-form-group-prop-bottom-wrapper-classes="debug ? bottomWrapperClasses : null"
        :data-vv-form-group-prop-display-error="debug ? displayError : null"
        :data-vv-form-group-prop-display-help="debug ? displayHelp : null"
        :data-vv-form-group-prop-display-success="debug ? displaySuccess : null"
        :data-vv-form-group-prop-error-classes="debug ? errorClasses : null"
        :data-vv-form-group-prop-error-text="debug ? errorText : null"
        :data-vv-form-group-prop-error-text-color="debug ? errorTextColor : null"
        :data-vv-form-group-prop-error-text-palette="debug ? errorTextPalette : null"
        :data-vv-form-group-prop-error-text-size="debug ? errorTextSize : null"
        :data-vv-form-group-prop-help-classes="debug ? helpClasses : null"
        :data-vv-form-group-prop-help-text="debug ? helpText : null"
        :data-vv-form-group-prop-help-text-color="debug ? helpTextColor : null"
        :data-vv-form-group-prop-help-text-palette="debug ? helpTextPalette : null"
        :data-vv-form-group-prop-help-text-size="debug ? helpTextSize : null"
        :data-vv-form-group-prop-label="debug ? label : null"
        :data-vv-form-group-prop-label-for="debug ? labelFor : null"
        :data-vv-form-group-prop-label-classes="debug ? labelClasses : null"
        :data-vv-form-group-prop-label-text-color="debug ? labelTextColor : null"
        :data-vv-form-group-prop-label-text-palette="debug ? labelTextPalette : null"
        :data-vv-form-group-prop-label-text-size="debug ? labelTextSize : null"
        :data-vv-form-group-prop-slot-parent-classes="debug ? slotParentClasses : null"
        :data-vv-form-group-prop-success-classes="debug ? successClasses : null"
        :data-vv-form-group-prop-success-text="debug ? successText : null"
        :data-vv-form-group-prop-success-text-color="debug ? successTextColor : null"
        :data-vv-form-group-prop-success-text-palette="debug ? successTextPalette : null"
        :data-vv-form-group-prop-success-text-size="debug ? successTextSize : null"
        :data-vv-form-group-prop-text-parent-classes="debug ? textParentClasses : null"
        :data-vv-form-group-prop-top-slot-classes="debug ? topSlotClasses : null"
        :data-vv-form-group-prop-top-wrapper-classes="debug ? topWrapperClasses : null"
        :data-vv-form-group-prop-wrapper-classes="debug ? wrapperClasses : null"
    >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData"/>
        </template>
    </LibVvQuadFormGroup>

</template>

`

return output

}
    