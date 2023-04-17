// ./cli/generators/VvQuadFormGroupVueFile.mjs

// TODO: Clean up this file if switching to use the more manual/nuxt3 approach works better for all stacks

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './components/Vv/QuadFormGroup.vue' : './src/components/vv/forms/VvQuadFormGroup.vue'

let appVvPath = useNuxtPaths ? '../../app.vv' : '../../../app.vv'

// this is likely depreciated, as this component should just work as it does for nuxt 3 since the:
//   <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
//       <slot :name="name" v-bind="slotData"/>
//   </template>
// approach keeps causing issues downstream in app dev/build modes 
/*
let templateMarkup = `<template>

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
*/

// Nuxt 3 isn't handling the scopedSlots approach to pass through slot content
// down to the origin vueventus component through the locally installed quad from group component
// so instead if nuxt 3 is relevant, the code below is simply copied from the template code for
// the lib/core version of VvQuadFormGroup component

// removing this conditional sloppily to quickly use this template for nuxt, vite-ts, and vite-ssg stacks
// if (useNuxtPaths) {
// changing this to a variable since above declaration is now commented out
let templateMarkup = `<template>

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
`
// }

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


${templateMarkup}

`

return output

}
    