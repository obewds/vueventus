// ./cli/generators/homeVueFile.mjs

import cliStackNames from '../helpers/cliStackNames.mjs'

export default function () {

const output = `<!-- ./src/pages/Home.vue -->


<script setup lang="ts">

    import { ref } from 'vue'
    import { VueVentusSpinningMark } from '@obewds/vueventus'
    import appVv from '../app.vv'
    import VvAnchor from '../components/vv/anchors/VvAnchor.vue'
    import VvButton from '../components/vv/buttons/VvButton.vue'
    import VvColorModeButton from '../components/vv/buttons/VvColorModeButton.vue'
    import VvEl from '../components/vv/elements/VvEl.vue'
    import VvInput from '../components/vv/inputs/VvInput.vue'
    import VvListItem from '../components/vv/lists/VvListItem.vue'
    import VvTextarea from '../components/vv/textareas/VvTextarea.vue'
    import VvPrism from '../components/vv/elements/VvPrism.vue'

    const msg = '${cliStackNames.vueTwViteTs}'

    const count = ref(0)

</script>


<template>

    <div class="text-center px-6 pt-20">
        
        <div class="max-w-2xl grid grid-cols-5 items-center gap-8 px-8 pb-10 mx-auto">

            <img alt="Vue logo" src="../assets/logo-vue.svg"/>
            <img alt="Tailwind CSS logo" src="../assets/logo-tailwindcss.svg"/>
            <div>
                <!-- div wrapper is needed so Safari contains the flex size of an svg/img child correctly -->
                <VueVentusSpinningMark animation-class="animate-spin-reverse-4s"/>
            </div>
            <img alt="Vite.js logo" src="../assets/logo-vite.svg"/>
            <img alt="Typescript logo" src="../assets/logo-typescript.svg"/>

        </div>

        <div class="w-full flex flex-col text-center space-y-3">

            <h1 class="text-2xl">{{ msg }}</h1>

            <p>
                Recommended IDE setup: <VvAnchor href="https://code.visualstudio.com/" color="success" target="_blank">VS Code</VvAnchor> + <VvAnchor href="https://github.com/johnsoncodehk/volar" color="success" target="_blank">Volar</VvAnchor>
            </p>

            <p>
                See <VvEl tag="span" ground-palette="monochromatic" ground-color="success" class="px-2 rounded">README.md</VvEl> for more information.
            </p>

            <p>
                <VvAnchor href="https://vitejs.dev/guide/features.html" color="success" target="_blank">Vite Docs</VvAnchor> | <VvAnchor href="https://v3.vuejs.org/" color="success" target="_blank">Vue 3 Docs</VvAnchor>
            </p>

            <div class="py-4">
                <VvButton color="primary" @click="count++">Count is: {{ count }}</VvButton>
            </div>

            <p>
                Edit <VvEl tag="span" ground-palette="monochromatic" ground-color="success" class="px-2 rounded">components/HelloWorld.vue</VvEl> to test hot module replacement.
            </p>

            <div class="mx-auto text-center">
            
                <VvAnchor href="https://github.com/obewds/vueventus" color="primary">
                    VvAnchor Test
                </VvAnchor>

                <br><br>

                <VvButton color="primary">
                    VvButton Test
                </VvButton>

                <br><br>

                <VvColorModeButton color="primary" palette="solid"/>

                <br><br>

                <VvEl color="primary" palette="solid">
                    VvEl Test Div
                </VvEl>

                <br>

                <VvInput color="default" placeholder="VvInput Test"/>

                <br>

                <ul class="w-full list-disc text-left pl-4">
                    <VvListItem>VvListItem Test</VvListItem>
                    <VvListItem symbol-color="success">VvListItem Test</VvListItem>
                </ul>

                <br>

                <VvTextarea color="default" placeholder="VvTextarea Test"/>

            </div>

            <div class="max-w-4xl pt-12 text-left mx-auto">
            
                <p class="text-lg font-bold pb-1">Current <VvEl tag="span" ground-palette="monochromatic" ground-color="success" class="px-2 rounded">./src/app.vv.ts</VvEl> Configuration Values:</p>
            
                <VvPrism>
                    <pre>
                        <code class="line-numbers language-javascript">
                            {{ appVv }}
                        </code>
                    </pre>
                </VvPrism>
            
            </div>

        </div>

    </div>

</template>

`

return output
    
}
    