<!-- ./src/views/components/forms/VvQuadFormGroupPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '../../../views/compos/DevViewArticle.vue'
    import VvQuadFormGroup from '../../../components/forms/VvQuadFormGroup.vue'
    import VvInput from '../../../components/inputs/VvInput.vue'

    const tw = globals.classes

    const groupClasses = 'max-w-lg text-left mx-auto pt-6'

</script>


<template>

    <DevViewArticle title="VvQuadFormGroup">

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="[tw.h3]">VvQuadFormGroup Default Example</h3>
                
                <div :class="[groupClasses, 'pt-3']">

                    <VvQuadFormGroup
                        label="Example Label Text:"
                        label-for="form-element-1"
                    >

                        <template v-slot:top>
                            <span>top slot</span>
                        </template>

                        <VvInput id="form-element-1"/>

                        <template v-slot:bottom>
                            <span>bottom slot</span>
                        </template>

                    </VvQuadFormGroup>
                    
                </div>
                
                <div :class="groupClasses">

                    <VvQuadFormGroup
                        label="Example Label Text:"
                        label-text-color="default"
                        label-for="form-element-2"
                        :display-help="true"
                        help-text="Example help text..."
                    >

                        <template v-slot:top>
                            <span>top slot</span>
                        </template>

                        <VvInput id="form-element-2" color="default"/>

                        <template v-slot:bottom>
                            <span>bottom slot</span>
                        </template>

                    </VvQuadFormGroup>
                    
                </div>
                
                <div :class="groupClasses">

                    <VvQuadFormGroup
                        label="Example Label Text:"
                        label-text-color="error"
                        label-for="form-element-3"
                        :display-error="true"
                        error-text="Example error text..."
                    >

                        <template v-slot:top>
                            <span>top slot</span>
                        </template>

                        <VvInput id="form-element-3" color="error"/>

                        <template v-slot:bottom>
                            <span>bottom slot</span>
                        </template>

                    </VvQuadFormGroup>
                    
                </div>
                
                <div :class="groupClasses">

                    <VvQuadFormGroup
                        label="Example Label Text:"
                        label-text-color="success"
                        label-for="form-element-4"
                        :display-success="true"
                        success-text="Example success text..."
                    >

                        <template v-slot:top>
                            <span>top slot</span>
                        </template>

                        <VvInput id="form-element-4" color="success"/>

                        <template v-slot:bottom>
                            <span>bottom slot</span>
                        </template>

                    </VvQuadFormGroup>
                    
                </div>

            </div>

        </div>

    </DevViewArticle>

</template>