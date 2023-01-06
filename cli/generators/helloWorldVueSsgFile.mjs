// ./cli/generators/helloWorldVueSsgFile.mjs

export default function () {

const output = `<!-- ./src/components/HelloWorld.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import appVv from '../app.vv'
    import VvAnchor from './vv/anchors/VvAnchor.vue'
    import VvButton from './vv/buttons/VvButton.vue'
    import VvCheckbox from './vv/inputs/VvCheckbox.vue'
    import VvEl from './vv/elements/VvEl.vue'
    import VvFa from './vv/elements/VvFa.vue'
    import VvFormGroup from './vv/forms/VvFormGroup.vue'
    import VvInput from './vv/inputs/VvInput.vue'
    import VvList from './vv/lists/VvList.vue'
    import VvListbox from './vv/selects/VvListbox.vue'
    import VvListItem from './vv/lists/VvListItem.vue'
    import VvPrism from './vv/elements/VvPrism.vue'
    import VvQuadFormGroup from './vv/forms/VvQuadFormGroup.vue'
    import VvRadio from './vv/inputs/VvRadio.vue'
    import VvRouterLink from './vv/anchors/VvRouterLink.vue'
    import VvSelect from './vv/selects/VvSelect.vue'
    import VvTextarea from './vv/textareas/VvTextarea.vue'

    defineProps<{ msg: string }>()

    const count = ref(0)

</script>

<template>

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

</template>

`

return output
    
}
