<!-- ./src/views/components/forms/VvFormGroupPage.vue -->

<script setup lang="ts">

    import globals from '../../../globals'
    import DevViewArticle from '@/views/compos/DevViewArticle.vue'
    import VvFormGroup from '@/components/forms/VvFormGroup.vue'
    import VvInput from '@/components/inputs/VvInput.vue'

    const tw = globals.classes

    const groupClasses = 'max-w-lg text-left mx-auto pb-3'

</script>


<template>

    <DevViewArticle title="VvFormGroup">

        <div :class="tw.cardFlex">

            <div>

                <h3 :class="[tw.h3]">VvFormGroup Default Example</h3>
                
                <div :class="[groupClasses, 'pt-3']">

                    <VvFormGroup
                        label="Example Label Text:"
                        label-for="form-element-1"
                    >
                        <VvInput id="form-element-1"/>
                    </VvFormGroup>
                    
                </div>
                
                <div :class="groupClasses">

                    <VvFormGroup
                        label="Example Label Text:"
                        label-text-color="default"
                        label-for="form-element-2"
                        :display-help="true"
                        help-text="Example help text..."
                    >
                        <VvInput id="form-element-2" color="default"/>
                    </VvFormGroup>
                    
                </div>
                
                <div :class="groupClasses">

                    <VvFormGroup
                        label="Example Label Text:"
                        label-text-color="error"
                        label-for="form-element-3"
                        :display-error="true"
                        error-text="Example error text..."
                    >
                        <VvInput id="form-element-3" color="error"/>
                    </VvFormGroup>
                    
                </div>
                
                <div :class="groupClasses">

                    <VvFormGroup
                        label="Example Label Text:"
                        label-text-color="success"
                        label-for="form-element-4"
                        :display-success="true"
                        success-text="Example success text..."
                    >
                        <VvInput id="form-element-4" color="success"/>
                    </VvFormGroup>
                    
                </div>

            </div>

        </div>

    </DevViewArticle>

</template>