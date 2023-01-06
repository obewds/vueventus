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
    import VvCheckbox from '../components/vv/inputs/VvCheckbox.vue'
    import VvEl from '../components/vv/elements/VvEl.vue'
    import VvFa from '../components/vv/elements/VvFa.vue'
    import VvFormGroup from '../components/vv/forms/VvFormGroup.vue'
    import VvInput from '../components/vv/inputs/VvInput.vue'
    import VvList from '../components/vv/lists/VvList.vue'
    import VvListbox from '../components/vv/selects/VvListbox.vue'
    import VvListItem from '../components/vv/lists/VvListItem.vue'
    import VvPrism from '../components/vv/elements/VvPrism.vue'
    import VvQuadFormGroup from '../components/vv/forms/VvQuadFormGroup.vue'
    import VvRadio from '../components/vv/inputs/VvRadio.vue'
    import VvRouterLink from '../components/vv/anchors/VvRouterLink.vue'
    import VvSelect from '../components/vv/selects/VvSelect.vue'
    import VvTextarea from '../components/vv/textareas/VvTextarea.vue'

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

            <div class="flex flex-col w-full max-w-xl gap-10 mx-auto text-center pt-8">
            
                <div>

                    <VvAnchor href="https://github.com/obewds/vueventus" color="primary">
                        VvAnchor
                    </VvAnchor>
                    <span> | </span>
                    <VvRouterLink to="/" color="primary">
                        VvRouterLink Test
                    </VvRouterLink>

                </div>
            
                <div>

                    <VvButton color="primary">
                        VvButton Test
                    </VvButton>

                </div>
            
                <div>

                    <VvEl color="primary" palette="solid">
                        VvEl Test Div
                    </VvEl>

                </div>
            
                <div>

                    <VvFa family="fas" icon="house" size="3x"/>

                </div>

                <div class="text-left">

                    <VvFormGroup
                        label="VvFormGroup Test:"
                        label-for="vv-input-test"
                        :display-help="true"
                        help-text="This is example help text"
                    >
                        <VvInput id="vv-input-test" color="default" placeholder="VvInput Test"/>
                    </VvFormGroup>

                </div>

                <div class="text-left">

                    <VvQuadFormGroup
                        label="VvQuadFormGroup Test:"
                        label-for="vv-textarea-test"
                        :display-help="true"
                        help-text="This is example help text"
                        top-wrapper-classes="flex justify-between items-end gap-3"
                    >
                        <template v-slot:top>
                            <button class="text-xl">&times;</button>
                        </template>

                        <VvTextarea id="vv-textarea-test" color="default" placeholder="VvTextarea Test"/>

                        <template v-slot:bottom>
                            <VvEl size="sm">0/100</VvEl>
                        </template>
                    </VvQuadFormGroup>

                </div>

                <div class="text-left">

                    <div class="flex flex-col w-full space-y-2">

                        <div class="flex items-center gap-2">
                            <VvCheckbox id="option-one" color="primary" :checked="true"/>
                            <label for="option-one">The First Option</label>
                        </div>

                        <div class="flex items-center gap-2">
                            <VvCheckbox id="option-two" color="primary"/>
                            <label for="option-two">The Second Option</label>
                        </div>

                    </div>

                </div>

                <div class="text-left">

                    <div class="flex flex-col space-y-1">
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="lightType-1"
                                name="lightType"
                                value="sunlight"
                                :checked="true"
                                color="primary"
                            />
                            <label for="lightType-1">Sunlight</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <VvRadio
                                id="lightType-2"
                                name="lightType"
                                value="moonlight"
                                :checked="false"
                                color="primary"
                            />
                            <label for="lightType-2">Moonlight</label>
                        </div>
                    </div>

                </div>

                <div class="text-left">

                    <VvList list-style-type-class="list-disc" class="pl-3">
                        <li>.list-disc Item One</li>
                        <li>.list-disc Item Two</li>
                    </VvList>

                </div>

                <div>

                    <ul class="w-full list-disc text-left pl-4">

                        <VvListItem>VvListItem Test</VvListItem>

                        <VvListItem symbol-color="success">VvListItem Test</VvListItem>

                    </ul>

                </div>

                <div>
                    <VvListbox
                        label="VvListbox Example:"
                        listbox-options-without-label-spacing="pt-1"
                        listbox-options-with-label-spacing="pt-1"
                    />
                </div>

                <div>
                    <VvListbox
                        listbox-options-without-label-spacing="pt-1"
                        listbox-options-with-label-spacing="pt-1"
                    />
                </div>

                <div>
                    <VvSelect>
                        <option value="">Select an Option</option>
                        <option value="one">Default Color Option 1</option>
                        <option value="two">Default Color Option 2</option>
                    </VvSelect>
                </div>

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
    