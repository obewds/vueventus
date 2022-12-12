<!-- ./src/views/components/selects/VvListboxPage.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import globals from '../../../globals'
    import DevViewArticle from '../../../views/compos/DevViewArticle.vue'
    import VvListbox from '../../../components/selects/VvListbox.vue'

    const tw = globals.classes

    const testValOne = ref('')
    const testValTwo = ref('')
    const testValThree = ref('')
    const testValFour = ref('')
    const testValFive = ref('')
    const testValSix = ref('')

</script>


<template>

    <DevViewArticle title="VvListbox">

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="tw.h3">VvListbox Default buttonPalette and Default optionPalette Colors</h3>

                <div class="pb-6">
                    <div :class="tw.flexWrap">
                        <div class="w-full">
                            <VvListbox v-model="testValOne" label="Listbox Test Value One:"/>
                        </div>
                    </div>
                    <div class="text-center pt-3"> {{ testValOne === '' ? 'No value selected' : testValOne }} </div>
                </div>

                <div class="pb-6">
                    <div :class="tw.flexWrap">
                        <div class="w-full">
                            <VvListbox v-model="testValTwo" listbox-button-color="error" listbox-option-color="error">
                                <label class="block text-left pb-1">Manual Label Slot for Test Value Two:</label>
                            </VvListbox>
                        </div>
                    </div>
                    <div class="text-center pt-3"> {{ testValTwo === '' ? 'No value selected' : testValTwo }} </div>
                </div>

                <div class="pb-6">
                    <div :class="tw.flexWrap">
                        <VvListbox v-model="testValThree" listbox-button-color="success" listbox-option-color="success"/>
                    </div>
                    <div class="text-center pt-3"> {{ testValThree === '' ? 'No value selected' : testValThree }} </div>
                </div>

            </div>

        </div>

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="tw.h3">VvListbox Underlined buttonPalette and Underlined optionPalette Colors</h3>

                <div class="pb-6">
                    <div :class="tw.flexWrap">
                        <div class="w-full">
                            <VvListbox v-model="testValFour" listbox-button-palette="underlined" listbox-option-palette="underlined" label="Listbox Test Value Four:"/>
                        </div>
                    </div>
                    <div class="text-center pt-3"> {{ testValFour === '' ? 'No value selected' : testValFour }} </div>
                </div>

                <div class="pb-6">
                    <div :class="tw.flexWrap">
                        <div class="w-full">
                            <VvListbox v-model="testValFive" listbox-button-palette="underlined" listbox-option-palette="underlined" listbox-button-color="error" listbox-option-color="error">
                                <div class="block text-left pb-1">Manual Label Slot for Test Value Five:</div>
                            </VvListbox>
                        </div>
                    </div>
                    <div class="text-center pt-3"> {{ testValFive === '' ? 'No value selected' : testValFive }} </div>
                </div>

                <div class="pb-6">
                    <div :class="tw.flexWrap">
                        <VvListbox v-model="testValSix" listbox-button-palette="underlined" listbox-option-palette="underlined" listbox-button-color="success" listbox-option-color="success"/>
                    </div>
                    <div class="text-center pt-3"> {{ testValSix === '' ? 'No value selected' : testValSix }} </div>
                </div>

            </div>

        </div>

    </DevViewArticle>

</template>
