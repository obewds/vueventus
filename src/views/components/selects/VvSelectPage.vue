<!-- ./src/views/components/selects/VvSelectPage.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import globals from '../../../globals'
    import DevViewArticle from '../../../views/compos/DevViewArticle.vue'
    import VvSelect from '../../../components/selects/VvSelect.vue'

    const tw = globals.classes

    const testOne = ref('')
    const testTwo = ref('')
    const testThree = ref('')

    const testFour = ref('')
    const testFive = ref('')
    const testSix = ref('')

    const testSeven = ref('')
    const testEight = ref('')
    const testNine = ref('')
    const testTen = ref('')
    const testEleven = ref('')
    const testTwelve = ref('')

</script>


<template>

    <DevViewArticle title="VvSelect">

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="tw.h3">VvSelect Default Palette Colors</h3>

                <div :class="tw.flexWrap">
                    <VvSelect color="default" placeholder="default Color" v-model="testOne">
                        <option value="">Select a Value</option>
                        <option value="one">Option One</option>
                        <option value="two">Option Two</option>
                    </VvSelect>
                </div>

                <div class="flex justify-between py-4">
                    <div>{{ testOne }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect color="error" placeholder="default Color" v-model="testTwo">
                        <option value="">Select a Value</option>
                        <option value="one">Option One</option>
                        <option value="two">Option Two</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testTwo }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect color="success" placeholder="default Color" v-model="testThree">
                        <option value="">Select a Value</option>
                        <option value="one">Option One</option>
                        <option value="two">Option Two</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testThree }} </div>
                </div>

            </div>

        </div>

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="tw.h3">VvSelect Underlined Palette Colors</h3>

                <div :class="tw.flexWrap">
                    <VvSelect palette="underlined" color="default" placeholder="default Color" v-model="testFour">
                        <option value="">Select a Value</option>
                        <option value="one">Option One</option>
                    </VvSelect>
                </div>

                <div class="flex justify-between py-4">
                    <div>{{ testFour }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect palette="underlined" color="error" placeholder="default Color" v-model="testFive">
                        <option value="">Select a Value</option>
                        <option value="one">Option One</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testFive }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect palette="underlined" color="success" placeholder="default Color" v-model="testSix">
                        <option value="">Select a Value</option>
                        <option value="one">Option One</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testSix }} </div>
                </div>

            </div>

        </div>

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="tw.h3">VvSelect Sizes</h3>

                <div :class="tw.flexWrap">
                    <VvSelect size="xs" v-model="testSeven">
                        <option value="">Select a Value</option>
                        <option value="one">size="xs"</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testSeven }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect size="sm" v-model="testEight">
                        <option value="">Select a Value</option>
                        <option value="one">size="sm"</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testEight }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect size="md" v-model="testNine">
                        <option value="">Select a Value</option>
                        <option value="one">size="md"</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testNine }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect size="lg" v-model="testTen">
                        <option value="">Select a Value</option>
                        <option value="one">size="lg"</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testTen }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect size="xl" v-model="testEleven">
                        <option value="">Select a Value</option>
                        <option value="one">size="xl"</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testEleven }} </div>
                </div>

                <div :class="tw.flexWrap">
                    <VvSelect size="2xl" v-model="testTwelve">
                        <option value="">Select a Value</option>
                        <option value="one">size="2xl"</option>
                    </VvSelect>
                </div>
                <div class="flex justify-between py-4">
                    <div>{{ testTwelve }} </div>
                </div>
                
            </div>
            
        </div>

    </DevViewArticle>

</template>