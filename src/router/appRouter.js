import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

// config pages
import ButtonsPage from '@/views/configs/ButtonsPage.vue'
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
import TextDefaultPage from '@/views/configs/palettes/TextDefaultPage.vue'

// component pages
import VvButtonPage from '@/views/components/buttons/VvButtonPage.vue'
import VvColorModeButtonPage from '@/views/components/buttons/VvColorModeButtonPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            component: Home,
            path: '/'
        },
        
        //
        // config pages
        //
        
        {
            name: 'Buttons Config Module',
            component: ButtonsPage,
            path: '/configs/buttons'
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
            name: 'TextDefault Palette Config Module',
            component: TextDefaultPage,
            path: '/configs/palettes/text-default'
        },
        
        //
        // component pages
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

    ],
})

export default router
