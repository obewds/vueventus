<script setup>

    import { inject } from 'vue'

    const globals = inject('globals')

    const tw = globals.classes
    
</script>


<template>

    <article :class="tw.article">
    
        <h1 :class="tw.h1">
            VueVentus Local Testing Site
        </h1>

        <div :class="tw.subhead">
            VUE COMPONENTS
        </div>

        <div :class="tw.grid">

            <router-link to="/components/buttons/vv-button" :class="tw.gridCardLink">
                VvButton
            </router-link>

            <router-link to="/components/buttons/vv-color-mode-button" :class="tw.gridCardLink">
                VvColorModeButton
            </router-link>

        </div>

        <div :class="tw.subhead">
            CONFIG MODULES
        </div>

        <div :class="tw.grid">

            <router-link to="/configs/buttons" :class="tw.gridCardLinkModule">
                Buttons
            </router-link>

            <router-link to="/configs/transitions" :class="tw.gridCardLinkModule">
                Transitions
            </router-link>

        </div>

        <div :class="tw.subhead">
            PALETTE CONFIG MODULES
        </div>

        <div :class="tw.grid">

            <router-link to="/configs/palettes/anchor-default" :class="tw.gridCardLinkPalette">
                AnchorDefault
            </router-link>

            <router-link to="/configs/palettes/border-default" :class="tw.gridCardLinkPalette">
                BorderDefault
            </router-link>

            <router-link to="/configs/palettes/button-outline" :class="tw.gridCardLinkPalette">
                ButtonOutline
            </router-link>

            <router-link to="/configs/palettes/button-solid" :class="tw.gridCardLinkPalette">
                ButtonSolid
            </router-link>

            <router-link to="/configs/palettes/ground-console" :class="tw.gridCardLinkPalette">
                GroundConsole
            </router-link>

            <router-link to="/configs/palettes/ground-default" :class="tw.gridCardLinkPalette">
                GroundDefault
            </router-link>

            <router-link to="/configs/palettes/ground-monochromatic" :class="tw.gridCardLinkPalette">
                GroundMonochromatic
            </router-link>

            <router-link to="/configs/palettes/ground-pastel" :class="tw.gridCardLinkPalette">
                GroundPastel
            </router-link>

            <router-link to="/configs/palettes/text-default" :class="tw.gridCardLinkPalette">
                TextDefault
            </router-link>

        </div>
    
    </article>

</template>
