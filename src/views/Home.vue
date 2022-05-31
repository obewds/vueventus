<script setup>

    import { AnchorDefault } from '../index'
    import { BorderDefault } from '../index'
    import { ButtonOutline } from '../index'
    import { ButtonSolid } from '../index'

</script>


<template>

    <article class="px-4">
    
        <h1 class="pt-6 pb-10 text-center text-3xl">
            Local Components Testing Site
        </h1>

        <div class="w-full flex flex-col justify-center bg-gray-50 p-6 rounded-xl drop-shadow-md gap-8">
        
            <h2 class="text-xl pt-2">CONFIG PALETTES</h2>

            <div>
            
                <h3 class="text-lg pb-3">AnchorDefault Examples</h3>
                
                <div class="w-full flex flex-wrap justify-center items-center gap-8">
                    <a href="#" :class="AnchorDefault.default">Default</a>
                    <a href="#" :class="AnchorDefault.error">Error</a>
                    <a href="#" :class="AnchorDefault.primary">Primary</a>
                    <a href="#" :class="AnchorDefault.secondary">Secondary</a>
                    <a href="#" :class="AnchorDefault.success">Success</a>
                </div>

            </div>

            <div>
            
                <h3 class="text-lg pb-3">BorderDefault Examples</h3>
                
                <div class="w-full flex flex-wrap justify-center items-center gap-8">
                    <div :class="[BorderDefault.default, 'border p-1']">Default</div>
                    <div :class="[BorderDefault.error, 'border p-1']">Error</div>
                    <div :class="[BorderDefault.primary, 'border p-1']">Primary</div>
                    <div :class="[BorderDefault.secondary, 'border p-1']">Secondary</div>
                    <div :class="[BorderDefault.success, 'border p-1']">Success</div>
                </div>

            </div>

            <div>
            
                <h3 class="text-lg pb-3">ButtonOutline Examples</h3>
                
                <div class="w-full flex flex-wrap justify-center items-center gap-8">
                    <div :class="[ButtonOutline.default, 'border p-1']">Default</div>
                    <div :class="[ButtonOutline.error, 'border p-1']">Error</div>
                    <div :class="[ButtonOutline.primary, 'border p-1']">Primary</div>
                    <div :class="[ButtonOutline.secondary, 'border p-1']">Secondary</div>
                    <div :class="[ButtonOutline.success, 'border p-1']">Success</div>
                </div>

            </div>

            <div>
            
                <h3 class="text-lg pb-3">ButtonSolid Examples</h3>
                
                <div class="w-full flex flex-wrap justify-center items-center gap-8">
                    <div :class="[ButtonSolid.default, 'p-1']">Default</div>
                    <div :class="[ButtonSolid.error, 'p-1']">Error</div>
                    <div :class="[ButtonSolid.primary, 'p-1']">Primary</div>
                    <div :class="[ButtonSolid.secondary, 'p-1']">Secondary</div>
                    <div :class="[ButtonSolid.success, 'p-1']">Success</div>
                </div>

            </div>
        
        </div>
    
    </article>

</template>
