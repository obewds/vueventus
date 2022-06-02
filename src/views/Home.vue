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
            VUE BUTTON COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2']">

            <DevViewLinkCard icon="component" to="/components/buttons/vv-button">
                VvButton.vue
            </DevViewLinkCard>

            <DevViewLinkCard icon="component" to="/components/buttons/vv-color-mode-button">
                VvColorModeButton.vue
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            VUE ELEMENT COMPONENTS
        </div>

        <div :class="[tw.grid, 'grid-cols-1']">

            <DevViewLinkCard icon="component" to="/components/elements/vv-el">
                VvEl.vue
            </DevViewLinkCard>

        </div>





        <div :class="tw.subhead">
            CONFIG MODULES
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3']">

            <DevViewLinkCard icon="config" to="/configs/buttons" :link-classes="tw.gridCardLinkModule">
                Buttons.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/transitions" :link-classes="tw.gridCardLinkModule">
                Transitions.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="config" to="/configs/vv-config" :link-classes="tw.gridCardLinkModule">
                VvConfig.js
            </DevViewLinkCard>

        </div>

        <div :class="tw.subhead">
            PALETTE CONFIG MODULES
        </div>

        <div :class="[tw.grid, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3']">

            <DevViewLinkCard icon="palette" to="/configs/palettes/anchor-default" :link-classes="tw.gridCardLinkPalette">
                AnchorDefault.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/border-default" :link-classes="tw.gridCardLinkPalette">
                BorderDefault.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/button-outline" :link-classes="tw.gridCardLinkPalette">
                ButtonOutline.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/button-solid" :link-classes="tw.gridCardLinkPalette">
                ButtonSolid.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-console" :link-classes="tw.gridCardLinkPalette">
                GroundConsole.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-default" :link-classes="tw.gridCardLinkPalette">
                GroundDefault.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-monochromatic" :link-classes="tw.gridCardLinkPalette">
                GroundMonochromatic.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/ground-pastel" :link-classes="tw.gridCardLinkPalette">
                GroundPastel.js
            </DevViewLinkCard>

            <DevViewLinkCard icon="palette" to="/configs/palettes/text-default" :link-classes="tw.gridCardLinkPalette">
                TextDefault.js
            </DevViewLinkCard>

        </div>
    
    </article>

</template>
