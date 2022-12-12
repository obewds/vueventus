<script setup lang="ts">

    import globals from '../globals'
    import DevViewLinkCard from './compos/DevViewLinkCard.vue'

    const tw = globals.classes
    
</script>


<template>

    <article :class="tw.article">
    
        <h1 :class="tw.h1">
            VueVentus Local Testing Site
        </h1>





        <div :class="tw.subhead">
            VUE ANCHOR COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1']">

            <DevViewLinkCard icon="component" to="/components/anchors/vv-anchor">
                VvAnchor
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE BUTTON COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2']">

            <DevViewLinkCard icon="component" to="/components/buttons/vv-button">
                VvButton
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/buttons/vv-color-mode-button">
                VvColorModeButton
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE ELEMENT COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1']">

            <DevViewLinkCard icon="component" to="/components/elements/vv-el">
                VvEl
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE FORM COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1']">

            <DevViewLinkCard icon="component" to="/components/forms/vv-form-group">
                VvFormGroup
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE INPUT COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3']">

            <DevViewLinkCard icon="component" to="/components/inputs/vv-checkbox">
                VvCheckbox
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/inputs/vv-input">
                VvInput
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/inputs/vv-radio">
                VvRadio
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE LIST COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2']">

            <DevViewLinkCard icon="component" to="/components/lists/vv-list">
                VvList
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/lists/vv-list-item">
                VvListItem
            </DevViewLinkCard>

        </div>






        <div :class="tw.subhead">
            VUE LOGO COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3']">

            <DevViewLinkCard icon="component" to="/components/logos/obe-knockout-mark">
                ObeKnockoutMark
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/logos/vueventus-logo-text">
                VueVentusLogoText
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/logos/vueventus-spinning-mark">
                VueVentusSpinningMark
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE SELECT COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2']">

            <DevViewLinkCard icon="component" to="/components/selects/vv-listbox">
                VvListboxPage
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/selects/vv-select">
                VvSelect
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE TEXTAREA COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1']">

            <DevViewLinkCard icon="component" to="/components/textareas/vv-textarea">
                VvTextarea
            </DevViewLinkCard>

        </div>






        <div :class="tw.subhead">
            CONFIG MODULES
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3']">

            <DevViewLinkCard icon="config" to="/configs/anchors" :link-classes="tw.gridCardLinkModule">
                Anchors
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/buttons" :link-classes="tw.gridCardLinkModule">
                Buttons
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/checkboxes" :link-classes="tw.gridCardLinkModule">
                Checkboxes
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/inputs" :link-classes="tw.gridCardLinkModule">
                Inputs
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/listboxes" :link-classes="tw.gridCardLinkModule">
                Listboxes
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/lists" :link-classes="tw.gridCardLinkModule">
                Lists
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/radios" :link-classes="tw.gridCardLinkModule">
                Radios
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/selects" :link-classes="tw.gridCardLinkModule">
                Selects
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/text" :link-classes="tw.gridCardLinkModule">
                Text
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/textareas" :link-classes="tw.gridCardLinkModule">
                Textareas
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/transitions" :link-classes="tw.gridCardLinkModule">
                Transitions
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/vv-config" :link-classes="tw.gridCardLinkModule">
                VvConfig
            </DevViewLinkCard>

        </div>




        <div :class="tw.subhead">
            PALETTE CONFIG MODULES
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3']">

            <DevViewLinkCard icon="palette" to="/configs/palettes/anchor-default" :link-classes="tw.gridCardLinkPalette">
                AnchorDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/border-default" :link-classes="tw.gridCardLinkPalette">
                BorderDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/button-outline" :link-classes="tw.gridCardLinkPalette">
                ButtonOutline
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/button-solid" :link-classes="tw.gridCardLinkPalette">
                ButtonSolid
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/checkbox-default" :link-classes="tw.gridCardLinkPalette">
                CheckboxDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/fill-default" :link-classes="tw.gridCardLinkPalette">
                FillDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-console" :link-classes="tw.gridCardLinkPalette">
                GroundConsole
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-default" :link-classes="tw.gridCardLinkPalette">
                GroundDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-monochromatic" :link-classes="tw.gridCardLinkPalette">
                GroundMonochromatic
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-pastel" :link-classes="tw.gridCardLinkPalette">
                GroundPastel
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/input-default" :link-classes="tw.gridCardLinkPalette">
                InputDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/input-underlined" :link-classes="tw.gridCardLinkPalette">
                InputUnderlined
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/listbox-button-default" :link-classes="tw.gridCardLinkPalette">
                ListboxButtonDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/listbox-button-underlined" :link-classes="tw.gridCardLinkPalette">
                ListboxButtonUnderlined
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/listbox-option-default" :link-classes="tw.gridCardLinkPalette">
                ListboxOptionDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/listbox-option-underlined" :link-classes="tw.gridCardLinkPalette">
                ListboxOptionUnderlined
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/list-default" :link-classes="tw.gridCardLinkPalette">
                ListDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/radio-default" :link-classes="tw.gridCardLinkPalette">
                RadioDefault
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/text-default" :link-classes="tw.gridCardLinkPalette">
                TextDefault
            </DevViewLinkCard>

        </div>
    
    </article>

</template>
