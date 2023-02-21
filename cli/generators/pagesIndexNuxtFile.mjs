// ./cli/generators/pagesIndexNuxtFile.mjs

export default function () {

const output = `<!-- ./pages/index.vue -->

<template>

    <div class="grid grid-cols-1 gap-6 max-w-3xl mx-auto text-center p-10">

        <p>This is the <samp class="bg-gray-800 text-lime-300">./pages/index.vue</samp> page component!</p>

        <div>
            <VvAnchor color="primary">
                VvAnchor Component
            </VvAnchor>
        </div>

        <div>
            <VvButton color="primary">
                VvButton
            </VvButton>
        </div>

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

        <div class="flex flex-col space-y-1">
            <div class="flex items-center gap-2">
                <VvRadio
                    id="lightType-1"
                    name="lightType"
                    value="sunlight"
                    color="primary"
                    :checked="true"
                />
                <label for="lightType-1">Sunlight</label>
            </div>
            <div class="flex items-center gap-2">
                <VvRadio
                    id="lightType-2"
                    name="lightType"
                    value="moonlight"
                    color="primary"
                    :checked="false"
                />
                <label for="lightType-2">Moonlight</label>
            </div>
        </div>

        <div class="flex justify-between items-center gap-6">
            <VvEl ground-color="primary" class="p-2">VvEl</VvEl>
            <VvEl text-color="primary" class="p-2">VvEl</VvEl>
            <VvEl border-color="primary" class="p-2 border">VvEl</VvEl>
        </div>

        <div class="text-left">
            <VvFormGroup
                label="Example VvFormGroup Label:"
                label-for="label-input-id"
            >
                <VvInput id="label-input-id" placeholder="Example VvInput"/>
            </VvFormGroup>
        </div>

        <div class="text-left">
            <VvFormGroup
                label="Example VvFormGroup Label:"
                label-for="label-textarea-id"
            >
                <VvTextarea id="label-textarea-id" placeholder="Example VvTextarea"/>
            </VvFormGroup>
        </div>

        <div class="text-left">
            <VvFormGroup
                label="Example VvFormGroup Label:"
                label-for="label-select-id"
            >
                <VvSelect id="label-select-id" color="default" class="mb-2">
                    <option value="">Select an Option</option>
                    <option value="one">Default Color Option 1</option>
                    <option value="two">Default Color Option 2</option>
                </VvSelect>
            </VvFormGroup>
        </div>

        <div class="text-left">
            <VvListbox id="label-listbox-id" label="Listbox example:" class="w-full"/>
        </div>

        <div class="text-left">
            <VvList marker-color="primary" class="pl-6">
                <li>VvList &lt;li&gt; One</li>
                <li>VvList &lt;li&gt; Two</li>
                <li>VvList &lt;li&gt; Three</li>
            </VvList>
        </div>

        <div class="text-left">
            <ul class="list-disc text-left pl-6">
                <VvListItem color="default">default List Item</VvListItem>
                <VvListItem color="error">error List Item</VvListItem>
                <VvListItem color="primary">primary List Item</VvListItem>
                <VvListItem color="secondary">secondary List Item</VvListItem>
                <VvListItem color="success">success List Item</VvListItem>
                <VvListItem color="neutral">neutral List Item</VvListItem>
            </ul>
        </div>

    </div>

</template>

`

return output
    
}
    