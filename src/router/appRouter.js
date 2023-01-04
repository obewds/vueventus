import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'

// config pages
import AnchorsPage from '@/views/configs/AnchorsPage.vue'
import ButtonsPage from '@/views/configs/ButtonsPage.vue'
import CheckboxesPage from '@/views/configs/CheckboxesPage.vue'
import InputsPage from '@/views/configs/InputsPage.vue'
import ListboxesPage from '@/views/configs/ListboxesPage.vue'
import ListsPage from '@/views/configs/ListsPage.vue'
import RadiosPage from '@/views/configs/RadiosPage.vue'
import SelectsPage from '@/views/configs/SelectsPage.vue'
import TextPage from '@/views/configs/TextPage.vue'
import TextareasPage from '@/views/configs/TextareasPage.vue'
import TransitionsPage from '@/views/configs/TransitionsPage.vue'
import VvConfigPage from '@/views/configs/VvConfigPage.vue'

// palette config pages
import AnchorDefaultPage from '@/views/configs/palettes/AnchorDefaultPage.vue'
import BorderDefaultPage from '@/views/configs/palettes/BorderDefaultPage.vue'
import ButtonOutlinePage from '@/views/configs/palettes/ButtonOutlinePage.vue'
import ButtonSolidPage from '@/views/configs/palettes/ButtonSolidPage.vue'
import CheckboxDefaultPage from '@/views/configs/palettes/CheckboxDefaultPage.vue'
import FillDefaultPage from '@/views/configs/palettes/FillDefaultPage.vue'
import GroundConsolePage from '@/views/configs/palettes/GroundConsolePage.vue'
import GroundDefaultPage from '@/views/configs/palettes/GroundDefaultPage.vue'
import GroundMonochromaticPage from '@/views/configs/palettes/GroundMonochromaticPage.vue'
import GroundPastelPage from '@/views/configs/palettes/GroundPastelPage.vue'
import InputDefaultPage from '@/views/configs/palettes/InputDefaultPage.vue'
import InputUnderlinedPage from '@/views/configs/palettes/InputUnderlinedPage.vue'
import ListboxButtonDefaultPage from '@/views/configs/palettes/ListboxButtonDefaultPage.vue'
import ListboxButtonUnderlinedPage from '@/views/configs/palettes/ListboxButtonUnderlinedPage.vue'
import ListboxOptionDefaultPage from '@/views/configs/palettes/ListboxOptionDefaultPage.vue'
import ListboxOptionUnderlinedPage from '@/views/configs/palettes/ListboxOptionUnderlinedPage.vue'
import ListDefaultPage from '@/views/configs/palettes/ListDefaultPage.vue'
import RadioDefaultPage from '@/views/configs/palettes/RadioDefaultPage.vue'
import TextDefaultPage from '@/views/configs/palettes/TextDefaultPage.vue'

// anchor component pages
import VvAnchorPage from '@/views/components/anchors/VvAnchorPage.vue'

// button component pages
import VvButtonPage from '@/views/components/buttons/VvButtonPage.vue'
import VvColorModeButtonPage from '@/views/components/buttons/VvColorModeButtonPage.vue'

// element component pages
import VvElPage from '@/views/components/elements/VvElPage.vue'

// form component pages
import VvFormGroupPage from '@/views/components/forms/VvFormGroupPage.vue'
import VvQuadFormGroupPage from '@/views/components/forms/VvQuadFormGroupPage.vue'

// input component pages
import VvCheckboxPage from '@/views/components/inputs/VvCheckboxPage.vue'
import VvInputPage from '@/views/components/inputs/VvInputPage.vue'
import VvRadioPage from '@/views/components/inputs/VvRadioPage.vue'

// list component pages
import VvListPage from '@/views/components/lists/VvListPage.vue'
import VvListItemPage from '@/views/components/lists/VvListItemPage.vue'

// logo component pages
import ObeKnockoutMarkPage from '@/views/components/logos/ObeKnockoutMarkPage.vue'
import VueVentusLogoTextPage from '@/views/components/logos/VueVentusLogoTextPage.vue'
import VueVentusSpinningMarkPage from '@/views/components/logos/VueVentusSpinningMarkPage.vue'

// select component pages
import VvListboxPage from '@/views/components/selects/VvListboxPage.vue'
import VvSelectPage from '@/views/components/selects/VvSelectPage.vue'

// textarea component pages
import VvTextareaPage from '@/views/components/textareas/VvTextareaPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            component: Home,
            path: '/'
        },{
            name: 'Test',
            component: Test,
            path: '/test'
        },
        
        //
        // config pages
        //
        
        {
            name: 'Anchors Config Module',
            component: AnchorsPage,
            path: '/configs/anchors'
        },{
            name: 'Buttons Config Module',
            component: ButtonsPage,
            path: '/configs/buttons'
        },{
            name: 'Checkboxes Config Module',
            component: CheckboxesPage,
            path: '/configs/checkboxes'
        },{
            name: 'Inputs Config Module',
            component: InputsPage,
            path: '/configs/inputs'
        },{
            name: 'Listboxes Config Module',
            component: ListboxesPage,
            path: '/configs/listboxes'
        },{
            name: 'Lists Config Module',
            component: ListsPage,
            path: '/configs/lists'
        },{
            name: 'Radios Config Module',
            component: RadiosPage,
            path: '/configs/radios'
        },{
            name: 'Selects Config Module',
            component: SelectsPage,
            path: '/configs/selects'
        },{
            name: 'Text Config Module',
            component: TextPage,
            path: '/configs/text'
        },{
            name: 'Textareas Config Module',
            component: TextareasPage,
            path: '/configs/textareas'
        },{
            name: 'Transitions Config Module',
            component: TransitionsPage,
            path: '/configs/transitions'
        },{
            name: 'VvConfig Module',
            component: VvConfigPage,
            path: '/configs/vv-config'
        },
        
        //
        // palette config pages
        //

        {
            name: 'AnchorDefault Palette Config Module',
            component: AnchorDefaultPage,
            path: '/configs/palettes/anchor-default'
        },{
            name: 'BorderDefault Palette Config Module',
            component: BorderDefaultPage,
            path: '/configs/palettes/border-default'
        },{
            name: 'ButtonOutline Palette Config Module',
            component: ButtonOutlinePage,
            path: '/configs/palettes/button-outline'
        },{
            name: 'ButtonSolid Palette Config Module',
            component: ButtonSolidPage,
            path: '/configs/palettes/button-solid'
        },{
            name: 'CheckboxDefault Palette Config Module',
            component: CheckboxDefaultPage,
            path: '/configs/palettes/checkbox-default'
        },{
            name: 'FillDefault Palette Config Module',
            component: FillDefaultPage,
            path: '/configs/palettes/fill-default'
        },{
            name: 'GroundConsole Palette Config Module',
            component: GroundConsolePage,
            path: '/configs/palettes/ground-console'
        },{
            name: 'GroundDefault Palette Config Module',
            component: GroundDefaultPage,
            path: '/configs/palettes/ground-default'
        },{
            name: 'GroundMonochromatic Palette Config Module',
            component: GroundMonochromaticPage,
            path: '/configs/palettes/ground-monochromatic'
        },{
            name: 'GroundPastel Palette Config Module',
            component: GroundPastelPage,
            path: '/configs/palettes/ground-pastel'
        },{
            name: 'InputDefault Palette Config Module',
            component: InputDefaultPage,
            path: '/configs/palettes/input-default'
        },{
            name: 'InputUnderlined Palette Config Module',
            component: InputUnderlinedPage,
            path: '/configs/palettes/input-underlined'
        },{
            name: 'ListboxButtonDefault Palette Config Module',
            component: ListboxButtonDefaultPage,
            path: '/configs/palettes/listbox-button-default'
        },{
            name: 'ListboxButtonUnderlined Palette Config Module',
            component: ListboxButtonUnderlinedPage,
            path: '/configs/palettes/listbox-button-underlined'
        },{
            name: 'ListboxOptionDefault Palette Config Module',
            component: ListboxOptionDefaultPage,
            path: '/configs/palettes/listbox-option-default'
        },{
            name: 'ListboxOptionUnderlined Palette Config Module',
            component: ListboxOptionUnderlinedPage,
            path: '/configs/palettes/listbox-option-underlined'
        },{
            name: 'ListDefault Palette Config Module',
            component: ListDefaultPage,
            path: '/configs/palettes/list-default'
        },{
            name: 'RadioDefault Palette Config Module',
            component: RadioDefaultPage,
            path: '/configs/palettes/radio-default'
        },{
            name: 'TextDefault Palette Config Module',
            component: TextDefaultPage,
            path: '/configs/palettes/text-default'
        },
        
        //
        // anchors component pages
        //

        {
            name: 'VvAnchor Component',
            component: VvAnchorPage,
            path: '/components/anchors/vv-anchor'
        },
        
        //
        // buttons component pages
        //

        {
            name: 'VvButton Component',
            component: VvButtonPage,
            path: '/components/buttons/vv-button'
        },{
            name: 'VvColorModeButton Component',
            component: VvColorModeButtonPage,
            path: '/components/buttons/vv-color-mode-button'
        },
        
        //
        // elements component pages
        //

        {
            name: 'VvEl Component',
            component: VvElPage,
            path: '/components/elements/vv-el'
        },
        
        //
        // forms component pages
        //

        {
            name: 'VvFormGroup Component',
            component: VvFormGroupPage,
            path: '/components/forms/vv-form-group'
        },{
            name: 'VvQuadFormGroup Component',
            component: VvQuadFormGroupPage,
            path: '/components/forms/vv-quad-form-group'
        },
        
        //
        // inputs component pages
        //

        {
            name: 'VvInput Component',
            component: VvInputPage,
            path: '/components/inputs/vv-input'
        },{
            name: 'VvCheckbox Component',
            component: VvCheckboxPage,
            path: '/components/inputs/vv-checkbox'
        },{
            name: 'VvRadio Component',
            component: VvRadioPage,
            path: '/components/inputs/vv-radio'
        },
        
        //
        // logos component pages
        //

        {
            name: 'ObeKnockoutMark Component',
            component: ObeKnockoutMarkPage,
            path: '/components/logos/obe-knockout-mark'
        },{
            name: 'VueVentusLogoText Component',
            component: VueVentusLogoTextPage,
            path: '/components/logos/vueventus-logo-text'
        },{
            name: 'VueVentusSpinningMark Component',
            component: VueVentusSpinningMarkPage,
            path: '/components/logos/vueventus-spinning-mark'
        },
        
        //
        // lists component pages
        //

        {
            name: 'VvList Component',
            component: VvListPage,
            path: '/components/lists/vv-list'
        },{
            name: 'VvListItem Component',
            component: VvListItemPage,
            path: '/components/lists/vv-list-item'
        },
        
        //
        // selects component pages
        //

        {
            name: 'VvSelect Component',
            component: VvSelectPage,
            path: '/components/selects/vv-select'
        },{
            name: 'VvListbox Component',
            component: VvListboxPage,
            path: '/components/selects/vv-listbox'
        },
        
        //
        // textareas component pages
        //

        {
            name: 'VvTextarea Component',
            component: VvTextareaPage,
            path: '/components/textareas/vv-textarea'
        },

    ],
})

export default router
