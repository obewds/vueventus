<script setup>

    import { inject } from 'vue'
    import DevViewLinkCard from '@/views/compos/DevViewLinkCard.vue'

    const globals = inject('globals')

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
            VUE LOGO COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2']">

            <DevViewLinkCard icon="component" to="/components/logos/vueventus-logo-text">
                VueVentusLogoText
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/logos/vueventus-spinning-mark">
                VueVentusSpinningMark
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

            <DevViewLinkCard icon="config" to="/configs/text" :link-classes="tw.gridCardLinkModule">
                Text
            </DevViewLinkCard>

        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2']">

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

            <DevViewLinkCard icon="palette" to="/configs/palettes/input-validation" :link-classes="tw.gridCardLinkPalette">
                InputValidation
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/text-default" :link-classes="tw.gridCardLinkPalette">
                TextDefault
            </DevViewLinkCard>

        </div>
    
    </article>

</template>
