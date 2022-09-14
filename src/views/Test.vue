<script setup lang="ts">

    import { inject } from 'vue'
    import AnchorDefault from '../configs/palettes/AnchorDefault'
    import VvAnchor from '@/components/anchors/VvAnchor.vue'
    
    // const globals = inject('globals')
    // const tw = globals.classes
    // console.log(AnchorDefault)

    const text = 'Bacon ipsum dolor amet pork loin short loin shoulder, hamburger corned beef flank. Corned beef strip steak, bacon buffalo chicken. Short loin frankfurter ribeye pork chop. Pastrami buffalo, pork loin tenderloin tongue meatball swine. Tenderloin, ribeye turducken filet mignon short ribs. Tail pork belly flank, corned beef t-bone turducken. Short loin pastrami kevin ham hock t-bone ball tip biltong ground round tongue.'

    const textHalf = 'Bacon ipsum dolor amet pork loin short loin shoulder, hamburger corned beef flank. Corned beef strip steak, bacon buffalo chicken. Short loin frankfurter ribeye pork chop. Pastrami buffalo.'

    const textQuarter = 'Bacon ipsum dolor amet pork loin short loin shoulder, hamburger corned.'

    const textEighth = 'Bacon ipsum dolor amet.'

    const textSixteenth = 'Bacon ipsum.'
    
</script>


<template>

    <article class="px-4 pb-20">
    
        <h1 class="pt-6 pb-10 text-center text-3xl">
            Test Page
        </h1>

        <!--
        <br>
        {{ AnchorDefault }}

        <br><br>

        <VvAnchor>VvAnchor</VvAnchor>
        -->

        <div class="flex flex-col space-y-10 max-w-lg mx-auto text-left">

            <p class="text-5xs">
                5xs: {{ text }}
            </p>

            <p class="text-4xs">
                4xs: {{ text }}
            </p>

            <p class="text-3xs">
                3xs: {{ text }}
            </p>

            <p class="text-2xs">
                2xs: {{ text }}
            </p>

            <p class="text-xs">
                xs: {{ textHalf }}
            </p>

            <p class="text-sm">
                sm: {{ textHalf }}
            </p>

            <p class="text-md">
                md: {{ textHalf }}
            </p>

            <p class="text-lg">
                lg: {{ textHalf }}
            </p>

            <p class="text-xl">
                xl: {{ textHalf }}
            </p>

            <p class="text-2xl">
                2xl: {{ textQuarter }}
            </p>

            <p class="text-3xl">
                3xl: {{ textQuarter }}
            </p>

            <p class="text-4xl">
                4xl: {{ textQuarter }}
            </p>

            <p class="text-5xl">
                5xl: {{ textQuarter }}
            </p>

            <p class="text-6xl">
                6xl: {{ textEighth }}
            </p>

            <p class="text-7xl">
                7xl: {{ textEighth }}
            </p>

            <p class="text-8xl">
                8xl: {{ textSixteenth }}
            </p>

            <p class="text-9xl">
                9xl: {{ textSixteenth }}
            </p>

            <p class="text-10xl">
                10xl: {{ textSixteenth }}
            </p>

            <p class="text-11xl">
                11xl: {{ textSixteenth }}
            </p>

            <p class="text-12xl">
                12xl: {{ textSixteenth }}
            </p>
            
        </div>

    </article>

</template>