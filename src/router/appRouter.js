import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'

// config pages
import AnchorsPage from '@/views/configs/AnchorsPage.vue'
import ButtonsPage from '@/views/configs/ButtonsPage.vue'
import InputsPage from '@/views/configs/InputsPage.vue'
import TextPage from '@/views/configs/TextPage.vue'
import TextareasPage from '@/views/configs/TextareasPage.vue'
import TransitionsPage from '@/views/configs/TransitionsPage.vue'
import VvConfigPage from '@/views/configs/VvConfigPage.vue'

// palette config pages
import AnchorDefaultPage from '@/views/configs/palettes/AnchorDefaultPage.vue'
import BorderDefaultPage from '@/views/configs/palettes/BorderDefaultPage.vue'
import ButtonOutlinePage from '@/views/configs/palettes/ButtonOutlinePage.vue'
import ButtonSolidPage from '@/views/configs/palettes/ButtonSolidPage.vue'
import GroundConsolePage from '@/views/configs/palettes/GroundConsolePage.vue'
import GroundDefaultPage from '@/views/configs/palettes/GroundDefaultPage.vue'
import GroundMonochromaticPage from '@/views/configs/palettes/GroundMonochromaticPage.vue'
import GroundPastelPage from '@/views/configs/palettes/GroundPastelPage.vue'
import InputDefaultPage from '@/views/configs/palettes/InputDefaultPage.vue'
import InputUnderlinedPage from '@/views/configs/palettes/InputUnderlinedPage.vue'
import TextDefaultPage from '@/views/configs/palettes/TextDefaultPage.vue'

// anchor component pages
import VvAnchorPage from '@/views/components/anchors/VvAnchorPage.vue'

// button component pages
import VvButtonPage from '@/views/components/buttons/VvButtonPage.vue'
import VvColorModeButtonPage from '@/views/components/buttons/VvColorModeButtonPage.vue'

// element component pages
import VvElPage from '@/views/components/elements/VvElPage.vue'

// input component pages
import VvInputPage from '@/views/components/inputs/VvInputPage.vue'

// list component pages
import VvListItemPage from '@/views/components/lists/VvListItemPage.vue'

// logo component pages
import VueVentusLogoTextPage from '@/views/components/logos/VueVentusLogoTextPage.vue'
import VueVentusSpinningMarkPage from '@/views/components/logos/VueVentusSpinningMarkPage.vue'

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
            name: 'Inputs Config Module',
            component: InputsPage,
            path: '/configs/inputs'
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
            name: 'TextDefault Palette Config Module',
            component: TextDefaultPage,
            path: '/configs/palettes/text-default'
        },
        
        //
        // anchor component pages
        //

        {
            name: 'VvAnchor Component',
            component: VvAnchorPage,
            path: '/components/anchors/vv-anchor'
        },
        
        //
        // button component pages
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
        // element component pages
        //

        {
            name: 'VvEl Component',
            component: VvElPage,
            path: '/components/elements/vv-el'
        },
        
        //
        // input component pages
        //

        {
            name: 'VvInput Component',
            component: VvInputPage,
            path: '/components/inputs/vv-input'
        },
        
        //
        // logo component pages
        //

        {
            name: 'VueVentusLogoText Component',
            component: VueVentusLogoTextPage,
            path: '/components/logos/vueventus-logo-text'
        },{
            name: 'VueVentusSpinningMark Component',
            component: VueVentusSpinningMarkPage,
            path: '/components/logos/vueventus-spinning-mark'
        },
        
        //
        // list component pages
        //

        {
            name: 'VvListItem Component',
            component: VvListItemPage,
            path: '/components/lists/vv-list-item'
        },
        
        //
        // textarea component pages
        //

        {
            name: 'VvTextarea Component',
            component: VvTextareaPage,
            path: '/components/textareas/vv-textarea'
        },

    ],
})

export default router
