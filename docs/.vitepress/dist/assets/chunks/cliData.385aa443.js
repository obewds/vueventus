const u={vueTwViteTs:"Vue 3, Tailwind CSS, Vue Router, Vite & Typescript",vueTwViteSsgMdTs:"Vite-SSG, Vue 3, Tailwind CSS, Pinia, Markdown, Auto-Loading & Typescript"};function R(){return`---
title: Page A
meta:
  - name: description
    content: Page A description
---

<script setup>
    // ./src/pages/a.md
<\/script>

# Page A

`}function H(){return`{
    "black": "#1a1a1a",
    "white": "#f8f8f8",
    "gray": {
      "50": "#e8e9ea",
      "100": "#d8dadc",
      "200": "#b8bcc1",
      "300": "#999fa7",
      "400": "#7c848d",
      "500": "#5f6974",
      "600": "#545c65",
      "700": "#42474e",
      "800": "#383b40",
      "900": "#2d3033"
    },
    "trueGray": {
      "50": "#ececec",
      "100": "#e1e1e1",
      "200": "#cacaca",
      "300": "#b4b4b4",
      "400": "#9e9e9e",
      "500": "#898989",
      "600": "#777777",
      "700": "#595959",
      "800": "#484848",
      "900": "#383838"
    },
    "warmGray": {
      "50": "#eaeae9",
      "100": "#dcdbd9",
      "200": "#c2bfbb",
      "300": "#a7a49e",
      "400": "#8e8a82",
      "500": "#757067",
      "600": "#66625b",
      "700": "#4e4b46",
      "800": "#403e3b",
      "900": "#33322f"
    },
    "coolGray": {
      "50": "#e8e9ee",
      "100": "#d8dae4",
      "200": "#b8bdd1",
      "300": "#98a1be",
      "400": "#7985ab",
      "500": "#596b98",
      "600": "#4f5e83",
      "700": "#404962",
      "800": "#363c4f",
      "900": "#2d303c"
    },
    "red": {
      "50": "#f4e7e5",
      "100": "#f0d7d2",
      "200": "#e6b6ae",
      "300": "#d9958b",
      "400": "#cb7569",
      "500": "#ba5449",
      "600": "#a04b42",
      "700": "#763d35",
      "800": "#5e342e",
      "900": "#472c27"
    },
    "rose": {
      "50": "#f5e6e5",
      "100": "#f1d4d3",
      "200": "#e7b1af",
      "300": "#da8e8c",
      "400": "#cc6a6b",
      "500": "#bb444c",
      "600": "#a13f44",
      "700": "#773537",
      "800": "#5f2f30",
      "900": "#482828"
    },
    "pink": {
      "50": "#f3e6ea",
      "100": "#eed4dd",
      "200": "#e3b0c2",
      "300": "#d68da8",
      "400": "#c8698f",
      "500": "#b84176",
      "600": "#9e3d67",
      "700": "#75344f",
      "800": "#5d2e41",
      "900": "#462833"
    },
    "fuchsia": {
      "50": "#f2e5ed",
      "100": "#ebd3e2",
      "200": "#ddaecd",
      "300": "#ce89b8",
      "400": "#be64a3",
      "500": "#ac3a8f",
      "600": "#94377c",
      "700": "#6e315d",
      "800": "#582c4b",
      "900": "#43273a"
    },
    "purple": {
      "50": "#f0e5f0",
      "100": "#e9d2e8",
      "200": "#d8abd8",
      "300": "#c785c8",
      "400": "#b45eb8",
      "500": "#a032a8",
      "600": "#8a3190",
      "700": "#672d6b",
      "800": "#532955",
      "900": "#402540"
    },
    "violet": {
      "50": "#ede5f2",
      "100": "#e2d3ec",
      "200": "#ccaedf",
      "300": "#b58ad2",
      "400": "#9d66c5",
      "500": "#8341b8",
      "600": "#723c9e",
      "700": "#583374",
      "800": "#482d5c",
      "900": "#382745"
    },
    "indigo": {
      "50": "#ebe7f2",
      "100": "#ddd6ec",
      "200": "#c2b5df",
      "300": "#a695d3",
      "400": "#8975c6",
      "500": "#6b57b9",
      "600": "#5f4d9f",
      "700": "#4a3e74",
      "800": "#3e345c",
      "900": "#322b45"
    },
    "blue": {
      "50": "#e8e9f2",
      "100": "#d9daec",
      "200": "#b9bee0",
      "300": "#99a2d4",
      "400": "#7887c7",
      "500": "#536dbb",
      "600": "#4b5fa0",
      "700": "#3e4a75",
      "800": "#363d5d",
      "900": "#2d3145"
    },
    "lightBlue": {
      "50": "#e7ecf2",
      "100": "#d6dfec",
      "200": "#b3c7e0",
      "300": "#90afd4",
      "400": "#6998c8",
      "500": "#3a82bc",
      "600": "#3971a1",
      "700": "#335576",
      "800": "#2f465d",
      "900": "#293645"
    },
    "cyan": {
      "50": "#e6eef2",
      "100": "#d5e4ec",
      "200": "#b1d1e0",
      "300": "#8bbed5",
      "400": "#61abc9",
      "500": "#2298bd",
      "600": "#2983a2",
      "700": "#2c6276",
      "800": "#2b4f5d",
      "900": "#273c46"
    },
    "teal": {
      "50": "#e6f0ef",
      "100": "#d5e8e6",
      "200": "#b1d8d4",
      "300": "#8dc8c2",
      "400": "#65b8b1",
      "500": "#32a8a0",
      "600": "#33908a",
      "700": "#306b66",
      "800": "#2d5552",
      "900": "#28403e"
    },
    "emerald": {
      "50": "#e7f2ec",
      "100": "#d7ece0",
      "200": "#b5dfc8",
      "300": "#93d2b0",
      "400": "#6ec59a",
      "500": "#41b883",
      "600": "#3e9e72",
      "700": "#377456",
      "800": "#315c46",
      "900": "#2a4537"
    },
    "green": {
      "50": "#eaf0e9",
      "100": "#dce7da",
      "200": "#c0d6bd",
      "300": "#a5c5a0",
      "400": "#89b584",
      "500": "#6da469",
      "600": "#608d5c",
      "700": "#4b6848",
      "800": "#3e533c",
      "900": "#323f30"
    },
    "lime": {
      "50": "#edefe6",
      "100": "#e3e6d5",
      "200": "#cdd5b2",
      "300": "#b7c491",
      "400": "#a1b36f",
      "500": "#8ba24e",
      "600": "#798b46",
      "700": "#5b6739",
      "800": "#4a5331",
      "900": "#3a3f2a"
    },
    "yellow": {
      "50": "#f1efe4",
      "100": "#eae6d0",
      "200": "#dbd4a9",
      "300": "#cbc282",
      "400": "#bab15c",
      "500": "#a8a032",
      "600": "#918a30",
      "700": "#6c662b",
      "800": "#565228",
      "900": "#423e24"
    },
    "amber": {
      "50": "#f2ede4",
      "100": "#ece3d1",
      "200": "#dfceab",
      "300": "#d1b985",
      "400": "#c1a560",
      "500": "#b0923a",
      "600": "#987e36",
      "700": "#705e2f",
      "800": "#5a4c2a",
      "900": "#443a25"
    },
    "orange": {
      "50": "#f3ece5",
      "100": "#eee0d2",
      "200": "#e3c8ac",
      "300": "#d6b088",
      "400": "#c89964",
      "500": "#b88341",
      "600": "#9e723b",
      "700": "#755632",
      "800": "#5d462c",
      "900": "#463726"
    }
}
`}function A(){return`<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    
    import VvColorModeButton from './components/vv/buttons/VvColorModeButton.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

<\/script>

<template>

    <div>

        <main class="">
            <router-view v-slot="{ Component, route }">
                <transition name="page" mode="out-in">
                    <component :is="Component" :key="route.path"/>
                </transition>
            </router-view>
        </main>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvScrollUp/>
                    <VvColorModeButton palette="solid" color="primary" :mode="(colorMode as string)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>


<style>

    .page-enter-active {
        transition: opacity 0.3s ease-out;
    }

    .page-leave-active {
        transition: opacity 0.3s ease-in;
    }

    .page-enter-from {
        transform: translateY(10px);
        opacity: 0;
    }

    .page-leave-to {
        opacity: 0;
    }

</style>

`}function M(){return`<!-- ./src/App.vue -->

<script setup lang="ts">

    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

    import { inject } from 'vue'
    import { VvColorModeButton, VueVentusSpinningMark, VvConfig } from '@obewds/vueventus'
    import type { ConfigVv } from '@obewds/vueventus'
    import HelloWorld from './components/HelloWorld.vue'
    import VvFa from './components/vv/elements/VvFa.vue'
    import VvRouterLink from './components/vv/anchors/VvRouterLink.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    const vv = inject<ConfigVv>('vv', VvConfig)
    const anchors = [vv.anchors.classes(), vv.anchors.palettes.default.success].join(' ')

    const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

<\/script>

<template>

    <div class="text-center px-6 pt-20">
    
        <div class="max-w-2xl grid grid-cols-6 items-center gap-6 px-6 pb-10 mx-auto">

            <img alt="Vue logo" src="./assets/logo-vue.svg"/>
            <img alt="Tailwind CSS logo" src="./assets/logo-tailwindcss.svg"/>
            <img alt="Pinia logo" src="./assets/logo-pinia.svg"/>
            <div>
                <!-- div wrapper is needed so Safari contains the flex size of an svg/img child correctly -->
                <VueVentusSpinningMark :enable-animation="false"/>
            </div>
            <img alt="Vite.js logo" src="./assets/logo-vite.svg"/>
            <img alt="Typescript logo" src="./assets/logo-typescript.svg"/>

        </div>

        <div class="flex justify-center items-center gap-3 pb-10">
            <VvRouterLink to="/" color="success">home</VvRouterLink>
            <VvRouterLink to="/a" color="success">/a</VvRouterLink>
            <VvRouterLink to="/b" color="success">/b</VvRouterLink>
            <VvRouterLink to="/nested/deep/b" color="success">/nested/deep/b</VvRouterLink>
        </div>

        <main>
            <router-view />
        </main>
        
        <HelloWorld msg="Hello Vue 3 + Tailwind CSS + VueVentus + Vite/Vite-SSG + TypeScript"/>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvFa family="fas" icon="house" size="2x"/>
                    <VvScrollUp/>
                    <VvColorModeButton palette="solid" color="primary" :mode="(colorMode as string)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>

`}const g={align:"",decoration:"",family:"",lineHeight:"",smoothing:"subpixel-antialiased",spacing:"",weight:"",wordBreak:"",base:function(){return[this.align,this.decoration,this.family,this.lineHeight,this.smoothing,this.spacing,this.weight,this.wordBreak].join(" ").replace(/\s+/g," ").trim()},sizes:{"5xs":"text-5xs","4xs":"text-4xs","3xs":"text-3xs","2xs":"text-2xs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl","10xl":"text-10xl","11xl":"text-11xl","12xl":"text-12xl"},getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()}},l={durations:{1200:"duration-1200",1150:"duration-1150",1100:"duration-1100",1050:"duration-1050",1e3:"duration-1000",950:"duration-950",900:"duration-900",850:"duration-850",800:"duration-800",750:"duration-750",700:"duration-700",650:"duration-650",600:"duration-600",550:"duration-550",500:"duration-500",475:"duration-475",450:"duration-450",425:"duration-425",400:"duration-400",375:"duration-375",350:"duration-350",325:"duration-325",300:"duration-300",275:"duration-275",250:"duration-250",225:"duration-225",200:"duration-200",175:"duration-175",150:"duration-150",125:"duration-125",100:"duration-100",75:"duration-75",50:"duration-50",25:"duration-25"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",none:"transition-none",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(e){var r,s,a;const o=e&&((r=this.durations)==null?void 0:r[e])?e:"300";return(s=this.durations)!=null&&s[o]?(a=this.durations)==null?void 0:a[o]:""},getEasingClasses:function(e){var r,s,a;const o=e&&((r=this.easings)==null?void 0:r[e])?e:"inOut";return(s=this.easings)!=null&&s[o]?(a=this.easings)==null?void 0:a[o]:""},getTransitionClasses:function(e){var r,s,a;const o=e&&((r=this.transitions)==null?void 0:r[e])?e:"default";return(s=this.transitions)!=null&&s[o]?(a=this.transitions)==null?void 0:a[o]:""},custom:function(e){const o={transitions:e&&e.transitions?e.transitions:"",easings:e&&e.easings?e.easings:"",durations:e&&e.durations?e.durations:""};return[this.getTransitionClasses(o.transitions),this.getEasingClasses(o.easings),this.getDurationClasses(o.durations)].join(" ").replace(/\s+/g," ").trim()},classes:function(e,o,n){const r=e||"",s=o||"",a=n||"";return[this.getTransitionClasses(r),this.getEasingClasses(s),this.getDurationClasses(a)].join(" ").replace(/\s+/g," ").trim()}},L={cursor:"cursor-pointer",display:"",focus:"",text:"underline underline-offset-2",transition:l.classes("colors","inOut","300"),base:function(){return[this.cursor,this.display,this.focus,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:g.sizes,getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()}},I={border:"border",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",rounding:"",shadow:"",text:"font-semibold uppercase tracking-widest",transition:l.classes("all","inOut","300"),base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.rounding,this.shadow,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.rounding,this.shadow,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(e){const o=e&&this.blockSizes[e]?e:"md";return this.blockSizes[o]},blockClasses:function(e){const o=e||"";return[this.blockBase(),this.getBlockSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.rounding,this.shadow,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(e){const o=e&&this.fabSizes[e]?e:"md";return this.fabSizes[o]},fabClasses:function(e){const o=e||"";return[this.fabBase(),this.getFabSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()}},E={baseColors:"bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",border:"",outline:"",ring:"focus:ring-offset-2 focus:ring-2",rounding:"rounded",shadow:"",transition:l.classes("colors","inOut","300"),base:function(){return[this.baseColors,this.border,this.outline,this.ring,this.rounding,this.shadow,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:{xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8"},getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()}},$={dark:{ground:"dark:bg-gray-900",hex:"#242426",text:"dark:text-gray-100",title:"Enable Dark Mode"},light:{ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"},base:function(){return[this.light.ground,this.light.text,this.dark.ground,this.dark.text].join(" ").replace(/\s+/g," ").trim()}},h={border:"border",display:"block w-full",outline:"",placeholder:"placeholder:opacity-50",ring:"",rounding:"",shadow:"",text:"",transition:l.classes("colors","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.rounding,this.shadow,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:{xs:"px-2 py-1.5 text-sm",sm:"px-3 py-2 text-base",md:"px-3 py-2 text-lg",lg:"px-4 py-3 text-xl",xl:"px-4 py-3 text-2xl","2xl":"px-5 py-4 text-3xl"},getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()}},G={baseColors:"bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",border:"",outline:"",ring:"focus:ring-offset-2 focus:ring-2",rounding:"",shadow:"",transition:l.classes("colors","inOut","300"),base:function(){return[this.baseColors,this.border,this.outline,this.ring,this.rounding,this.shadow,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:{xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8"},getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()}},D={border:"border",display:"block w-full",outline:"",placeholder:"placeholder:opacity-50",ring:"",rounding:"",shadow:"",text:"",transition:l.classes("colors","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.rounding,this.shadow,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:h.sizes,getSizeClasses:function(e){const o=e&&this.sizes[e]?e:"md";return this.sizes[o]},classes:function(e){const o=e||"";return[this.base(),this.getSizeClasses(o)].join(" ").replace(/\s+/g," ").trim()},rowSizes:{xs:1,sm:2,md:3,lg:4,xl:6,"2xl":8},getRowSize:function(e){const o=e&&this.rowSizes[e]?e:"md";return this.rowSizes[o]}},J={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},U={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},N={default:"text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",secondary:"text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",success:"text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"},O={default:"text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",error:"text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",primary:"text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",secondary:"text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",success:"text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"},q={default:"focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",error:"focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",primary:"focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",secondary:"focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",success:"focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"},W={default:"dark:fill-gray-100 fill-gray-900",error:"fill-rose-500 dark:fill-rose-300",primary:"fill-blue-500 dark:fill-blue-300",secondary:"fill-violet-500 dark:fill-violet-300",success:"fill-green-600 dark:fill-green-300"},_={default:"font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},Y={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},Q={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},X={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},d={default:"focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",error:"text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",success:"text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"},v={default:"focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",error:"focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",success:"focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"},Z={default:"focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",error:"focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",primary:"focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",secondary:"focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",success:"focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"},K={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300",neutral:"dark:text-gray-100 text-gray-900"},ee={VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvCheckbox:{color:"default",checked:!1,darkCheckHex:"#242426",lightCheckHex:"#e1e1e3",palette:"default",size:"md"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs",type:"button"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"},VvFormGroup:{displayError:!1,displayHelp:!1,displaySuccess:!1,errorClasses:"text-sm",errorText:"",errorTextColor:"error",errorTextPalette:"default",helpClasses:"text-sm opacity-75",helpText:"",helpTextColor:"default",helpTextPalette:"default",labelClasses:"text-lg capitalize",labelTextColor:"default",labelTextPalette:"default",slotParentClasses:"flex items-center gap-1",successClasses:"text-sm",successText:"",successTextColor:"success",successTextPalette:"default",wrapperClasses:"w-full flex flex-col space-y-1"},VvInput:{color:"default",checked:!1,palette:"default",size:"md",type:"text"},VvListItem:{color:"neutral",enableColoredSymbols:!0,palette:"default",symbolColor:"primary",symbolPalette:"default"},VvRadio:{color:"default",checked:!1,darkRadioHex:"#242426",lightRadioHex:"#e1e1e3",palette:"default",size:"md"},VvRouterLink:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,to:"/",palette:"default"},VvTextarea:{color:"default",palette:"default",size:"md",rowSize:"md"}},t={anchors:{...L,palettes:{default:J}},borders:{palettes:{default:U}},buttons:{...I,palettes:{outline:N,solid:O}},checkboxes:{...E,palettes:{default:q}},fills:{palettes:{default:W}},inputs:{...h,palettes:{default:d,underlined:v}},colorModes:{...$},grounds:{palettes:{console:_,default:Y,monochromatic:Q,pastel:X}},radios:{...G,palettes:{default:Z}},text:{...g,palettes:{default:K}},textareas:{...D,palettes:{default:d,underlined:v}},transitions:{...l},defaults:ee};function te(){return`// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// appVv.defaults['VvInput'].size = '${t.defaults.VvInput.size}'

// Empty string value removes TWCSS underline classes from VueVentus anchor component default classes
// appVv.anchors.text = ''

// appVv.anchors.palettes.default = {
//     default: '${t.anchors.palettes.default.default}',
//     error: '${t.anchors.palettes.default.error}',
//     primary: '${t.anchors.palettes.default.primary}',
//     secondary: '${t.anchors.palettes.default.secondary}',
//     success: '${t.anchors.palettes.default.success}',
// }

// appVv.borders.palettes.default = {
//     '': '',
//     default: '${t.borders.palettes.default.default}',
//     error: '${t.borders.palettes.default.error}',
//     primary: '${t.borders.palettes.default.primary}',
//     secondary: '${t.borders.palettes.default.secondary}',
//     success: '${t.borders.palettes.default.success}',
// }

// appVv.hover = {
//     scale: 'hover:scale-103 focus:scale-103',
// }

// appVv.buttons.border = ''
// appVv.buttons.transition += ' ' + appVv.hover.scale

// appVv.buttons.palettes.outline = {
//     default: '${t.buttons.palettes.outline.default}',
//     error: '${t.buttons.palettes.outline.error}',
//     primary: '${t.buttons.palettes.outline.primary}',
//     secondary: '${t.buttons.palettes.outline.secondary}',
//     success: '${t.buttons.palettes.outline.success}',
// }

// appVv.buttons.palettes.solid = {
//     default: '${t.buttons.palettes.solid.default}',
//     error: '${t.buttons.palettes.solid.error}',
//     primary: '${t.buttons.palettes.solid.primary}',
//     secondary: '${t.buttons.palettes.solid.secondary}',
//     success: '${t.buttons.palettes.solid.success}',
// }

// appVv.buttons.palettes.default = appVv.buttons.palettes.solid

// appVv.checkboxes.palettes.default = {
//     default: '${t.checkboxes.palettes.default.default}',
//     error: '${t.checkboxes.palettes.default.error}',
//     primary: '${t.checkboxes.palettes.default.primary}',
//     secondary: '${t.checkboxes.palettes.default.secondary}',
//     success: '${t.checkboxes.palettes.default.success}',
// }

// appVv.colorModes.dark.ground = 'dark:bg-gray-900'
// appVv.colorModes.dark.hex = '#242426'
// appVv.colorModes.dark.text = 'dark:text-gray-100'

// appVv.colorModes.light.ground = 'bg-gray-100'
// appVv.colorModes.light.hex = '#e1e1e3'
// appVv.colorModes.light.text = 'text-gray-900'

// appVv.fills.palettes.default = {
//     default: '${t.fills.palettes.default.default}',
//     error: '${t.fills.palettes.default.error}',
//     primary: '${t.fills.palettes.default.primary}',
//     secondary: '${t.fills.palettes.default.secondary}',
//     success: '${t.fills.palettes.default.success}',
// }

// appVv.grounds.palettes.console = {
//     default: '${t.grounds.palettes.console.default}',
//     error: '${t.grounds.palettes.console.error}',
//     primary: '${t.grounds.palettes.console.primary}',
//     secondary: '${t.grounds.palettes.console.secondary}',
//     success: '${t.grounds.palettes.console.success}',
// }

// appVv.grounds.palettes.default = {
//     default: '${t.grounds.palettes.default.default}',
//     error: '${t.grounds.palettes.default.error}',
//     primary: '${t.grounds.palettes.default.primary}',
//     secondary: '${t.grounds.palettes.default.secondary}',
//     success: '${t.grounds.palettes.default.success}',
// }

// appVv.grounds.palettes.monochromatic = {
//     default: '${t.grounds.palettes.monochromatic.default}',
//     error: '${t.grounds.palettes.monochromatic.error}',
//     primary: '${t.grounds.palettes.monochromatic.primary}',
//     secondary: '${t.grounds.palettes.monochromatic.secondary}',
//     success: '${t.grounds.palettes.monochromatic.success}',
// }

// appVv.grounds.palettes.pastel = {
//     default: '${t.grounds.palettes.pastel.default}',
//     error: '${t.grounds.palettes.pastel.error}',
//     primary: '${t.grounds.palettes.pastel.primary}',
//     secondary: '${t.grounds.palettes.pastel.secondary}',
//     success: '${t.grounds.palettes.pastel.success}',
// }

// appVv.inputs.palettes.default = {
//     default: '${t.inputs.palettes.default.default}',
//     error: '${t.inputs.palettes.default.error}',
//     success: '${t.inputs.palettes.default.success}',
// }

// appVv.inputs.palettes.underlined = {
//     default: '${t.inputs.palettes.underlined.default}',
//     error: '${t.inputs.palettes.underlined.error}',
//     success: '${t.inputs.palettes.underlined.success}',
// }

// appVv.radios.palettes.default = {
//     default: '${t.radios.palettes.default.default}',
//     error: '${t.radios.palettes.default.error}',
//     primary: '${t.radios.palettes.default.primary}',
//     secondary: '${t.radios.palettes.default.secondary}',
//     success: '${t.radios.palettes.default.success}',
// }

// appVv.scrollbars = 'scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800'

// appVv.textareas.palettes.default = appVv.inputs.palettes.default
// appVv.textareas.palettes.underlined = appVv.inputs.palettes.underlined

// appVv.text.palettes.default = {
//     default: '${t.text.palettes.default.default}',
//     error: '${t.text.palettes.default.error}',
//     primary: '${t.text.palettes.default.primary}',
//     secondary: '${t.text.palettes.default.secondary}',
//     success: '${t.text.palettes.default.success}',
//     neutral: '${t.text.palettes.default.neutral}',
// }

// appVv.classes = {}

// appVv.strings = {}

// appVv.navs = {
//     main: {},
//     footer: {},
// }

export default appVv

`}function oe(){return`---
title: Nested Deep Page B
meta:
  - name: description
    content: Nested Deep Page B description
---

<script setup>
    // ./src/pages/nested/deep/b.md
<\/script>

# Nested Deep Page B

<img src="../../../assets/logo-obe.svg" alt="">

`}function re(){return`<!-- ./src/pages/b.vue -->

<script lang="ts">

    import { computed } from 'vue'
    import { useHead } from '@vueuse/head'
    import { useRootStore } from '../store/root'

    export default {

        setup() {

            useHead({
                title: 'Hello',
                meta: [
                    {
                        name: 'description',
                        content: 'Website description',
                    },
                ],
            })
    
            const store = useRootStore()
    
            return {
                user: computed(() => store.user),
            }
        },

        serverPrefetch() {
            // eslint-disable-next-line no-console
            console.log('prefetch')
        },
    }

<\/script>

<template>

    <p>Hello I am B</p>

    <img src="../assets/logo-obe.svg" alt="">
    
    <pre>
        {{ JSON.stringify(user) }}
    </pre>

</template>

`}function b(e=""){return`<!-- ./src/pages/${e}.vue -->

<script setup lang="ts">

    import { useHead } from '@vueuse/head'
    import { useRouter } from 'vue-router'
    import VvButton from '../components/vv/buttons/VvButton.vue'
    import VvFa from '../components/vv/elements/VvFa.vue'

    const pgTitle = '404 Not Found'
    const router = useRouter()

    useHead({
        title: pgTitle,
        meta: [ { name: 'description', content: pgTitle + 'page description text' } ],
    })
    
<\/script>


<template>

    <div class="text-center">
    
        <h1 class="font-heading text-3xl uppercase">{{ pgTitle }}</h1>

        <div class="max-w-md text-center mx-auto py-10">

            <div class="inline-block bg-black text-amber-400 rounded-full">
                <VvFa family="fas" icon="face-surprise" size="7x"/>
            </div>

            <div class="flex flex-col space-y-4 pb-10">

                <h2 class="font-heading text-2xl pt-10">Oh No!</h2>

                <p class="pb-20">Your request was not found.</p>
            
                <VvButton
                    class="rounded drop-shadow-md"
                    color="default"
                    size="xl"
                    :block="true"
                    @click="router.back()"
                >
                    <span class="mx-auto">Go Back</span>
                </VvButton>
            
            </div>

        </div>

    </div>

</template>

`}function se(){return b("[...all]")}function ae(){return`<!-- ./src/components/Counter.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvButton } from '@obewds/vueventus'

    const props = defineProps<{ init?: number }>()
    const counter = ref(props.init || 0)

<\/script>

<template>

    <div>

        <div>Counter: {{ counter }}</div>

        <VvButton @click="counter += 1" class="rounded-l">Inc</VvButton>
        <VvButton @click="counter -= 1" class="rounded-r">Dec</VvButton>

    </div>

</template>

`}function ne(){return`// ./src/fontAwesomePro.ts

import { library } from '@fortawesome/fontawesome-svg-core'

//
import { faFaceSurprise as FaLightFaceSurprise } from '@fortawesome/pro-light-svg-icons/faFaceSurprise'
import { faHouse as FaDuotoneHouse } from '@fortawesome/pro-duotone-svg-icons/faHouse'
import { faHouse as FaLightHouse } from '@fortawesome/pro-light-svg-icons/faHouse'
import { faHouse as FaRegularHouse} from '@fortawesome/pro-regular-svg-icons/faHouse'
import { faHouse as FaSolidHouse } from '@fortawesome/pro-solid-svg-icons/faHouse'
import { faHouse as FaThinHouse } from '@fortawesome/pro-thin-svg-icons/faHouse'
import { faHouse as FaSharpHouse } from '@fortawesome/sharp-solid-svg-icons/faHouse'


// Default app guide brand icon imports
// import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
// import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
// import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
// import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
// import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
// import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
// import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

// 
library.add(
    FaLightFaceSurprise,
    FaDuotoneHouse,
    FaLightHouse,
    FaRegularHouse,
    FaSolidHouse,
    FaThinHouse,
    FaSharpHouse,

    // faApple,
    // faBootstrap,
    // faCss3Alt,
    // faFacebook,
    // faGithub,
    // faGoogle,
    // faHtml5,
    // faInstagram,
    // faJs,
    // faLaravel,
    // faLinkedin,
    // faNpm,
    // faPinterest,
    // faTwitter,
    faVuejs,
    // faYoutube,
)

`}function le(){return`// ./src/fontawesome.ts

import { library } from '@fortawesome/fontawesome-svg-core'

//
import { faFaceSurprise as FaSolidFaceSurprise } from '@fortawesome/free-solid-svg-icons/faFaceSurprise'
import { faHouse as FaSolidHouse } from '@fortawesome/free-solid-svg-icons/faHouse'

// Default app guide brand icon imports
// import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
// import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
// import { faCss3Alt } from '@fortawesome/free-brands-svg-icon/faCss3Alt'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
// import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
// import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
// import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
// import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

// 
library.add(
    FaSolidFaceSurprise,
    FaSolidHouse,

    // faApple,
    // faBootstrap,
    // faCss3Alt,
    // faFacebook,
    // faGithub,
    // faGoogle,
    // faHtml5,
    // faInstagram,
    // faJs,
    // faLaravel,
    // faLinkedin,
    // faNpm,
    // faPinterest,
    // faTwitter,
    faVuejs,
    // faYoutube,
)

`}function ie(){return`// ./src/gsap.ts
// https://greensock.com/docs/v3/Installation?checked=core#modules

import { gsap } from 'gsap'

// import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
// import { CustomEase } from 'gsap/CustomEase'
// import { CustomBounce } from 'gsap/CustomBounce'
// import { CustomWiggle } from 'gsap/CustomWiggle'
// import { Draggable } from 'gsap/Draggable'
// import { EaselPlugin } from 'gsap/EaselPlugin'
// import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
// import { PixiPlugin } from 'gsap/PixiPlugin'
// import { TextPlugin } from 'gsap/TextPlugin'
import ScrollToPlugin from 'gsap/ScrollToPlugin.js'
import ScrollTrigger from 'gsap/ScrollTrigger.js'


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

`}function pe(){return`// ./tests/components/HelloVueVentus.test.js

import { mount } from '@vue/test-utils'
import HelloVueVentus from '../../src/components/HelloVueVentus.vue'


test('HelloVueVentus.vue component mounts successfully', async () => {
    
    expect(HelloVueVentus).toBeTruthy()

})


test('HelloVueVentus.vue component accepts an object literal slot value with markup and text content', async () => {

    const testObjLiteral = \`<div>Hello VueVentus!!!</div>\`

    const wrapper = mount(HelloVueVentus, {
        slots: { default: testObjLiteral },
    })

    expect(wrapper.html()).toContain(testObjLiteral)

})

`}function ue(){return`<!-- ./src/components/HelloVueVentus.vue -->

<script setup lang="ts">

    import { VvButton } from '@obewds/vueventus'

<\/script>


<template>

    <VvButton>
        <slot>Hello VueVentus</slot>
    </VvButton>
    
</template>

`}function ce(){return`<!-- ./src/components/HelloWorld.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import VvAnchor from './vv/anchors/VvAnchor.vue'
    import VvButton from './vv/buttons/VvButton.vue'
    import VvEl from './vv/elements/VvEl.vue'
    import VvPrism from './vv/elements/VvPrism.vue'
    import appVv from '../app.vv'

    defineProps<{ msg: string }>()

    const count = ref(0)

<\/script>

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

`}function de(){return`<!-- ./src/pages/Home.vue -->


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

    const msg = '${u.vueTwViteTs}'

    const count = ref(0)

<\/script>


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

`}function ve(){return`<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to VueVentus</title>
        <meta name="description" content="A component library and styling management system for modern Vue.js, Tailwind CSS, and Typescript apps"/>

        <!-- Color Mode Functionality -->
        <script>
            // On page load or when changing colorMode, best to add inline in head to avoid FOUC
            if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                localStorage.setItem('colorMode', 'dark');
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = '#242426';
                document.documentElement.style.color = '#f8f8f8';
            } else {
                localStorage.setItem('colorMode', 'light');
                document.documentElement.classList.remove('dark');
                document.documentElement.style.backgroundColor = '#f8f8f8';
                document.documentElement.style.color = '#242426';
            }
        <\/script>

    </head>

    <body class="scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800">

        <div id="app"></div>
        
        <script type="module" src="/src/main.ts"><\/script>

    </body>

</html>

`}function me(){return`---
title: Index Page
---

<script setup>
    // ./src/pages/index.md
<\/script>

# Hello

This is a counter

<counter/>

<br>

MousePos (Client Only):

<client-only>
    <mouse-pos/>
</client-only>

`}function fe(){return`<!-- ./src/components/MousePos.vue -->

<script setup lang="ts">

    import { ref } from 'vue'

    const x = ref(0)
    const y = ref(0)

    window.addEventListener('mousemove', (e) => {
        x.value = e.x
        y.value = e.y
    })

<\/script>

<template>

    <div>{{ x }} x {{ y }}</div>

</template>

`}function ge(){return b("NotFound404")}function he(){return`// ./src/store/root.ts

import { defineStore } from 'pinia'

interface RootState {
    user: Record<string, any> | null
}

export const useRootStore = defineStore({

    id: 'root',

    state: (): RootState => ({
        user: null,
    }),

    getters: {
        isReady(state) {
            return !!state.user
        },
    },

    actions: {

        initialize() {
            if (this.isReady)
                return
            // eslint-disable-next-line no-console
            console.log('Initialize user ...')
            this.user = {
                id: 1,
                firstName: 'Jane',
                lastName: 'Doe',
            }
        },

    },

})

`}function be(){return`// ./postcss.config.cjs

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}

`}function xe(){return`/* ./src/css/prism-theme-vars.css */

@import "prism-theme-vars/base.css";

`}function Ve(){return`// ./src/router/routes.ts

import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import NotFound404 from '../pages/NotFound404.vue'

const router = createRouter({

    history: createWebHistory(),

    routes: [

        // Unauthenticated User Pages
        { path: '/', name: 'Home', component: Home },

        // Route Catchall
        { path: '/:pathMatch(.*)*', component: NotFound404 },

    ],

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        left: 0,
                        top: 0,
                        behavior: 'smooth',
                    })
                }, 500)
            })
        }
    },

})

export default router

`}function x(e=!1){return`// ./tailwind.config.cjs

const defaultTheme = require('tailwindcss/defaultTheme')
const vvPath = './node_modules/@obewds/vueventus/dist/data/'

module.exports = {

    darkMode: 'class',

    content: [
        "./index.html",
        ${e===!0?'"./src/**/*.{md,html,vue,js,ts,jsx,tsx}",':'"./src/**/*.{vue,js,ts,jsx,tsx}",'}
        // Include VueVentus default TWCSS classes (for prototyping):
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}", 
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            animation: require(vvPath + 'extend.animation.json'),
            keyframes: require(vvPath + 'extend.keyframes.json'),
            maxWidth: require(vvPath + 'extend.maxWidth.json'),
            rotate: require(vvPath + 'extend.rotate.json'),
            scale: require(vvPath + 'extend.scale.json'),
            transitionDuration: require(vvPath + 'extend.transitionDuration.json'),
            width: require(vvPath + 'extend.width.json'),
        },
        // colors: require(vvPath + 'app.color.data.json'), // VueVentus Default Color Codes
        colors: require('./src/app.colors.json'),
        fontSize: require(vvPath + 'theme.fontSize.json'),
        listStyleType: require(vvPath + 'theme.listStyleType.json'),
        opacity: require(vvPath + 'theme.opacity.json'),
        screens: require(vvPath + 'theme.screens.json'),
    },

    variants: {
        extend: {
            opacity: ['disabled']
        },
        scrollbar: ['dark']
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
    ],
}

`}function ke(){return`/* ./src/css/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

`}function V(e=!1){let o=["node","vite/client"];return e===!0&&o.push("vite-plugin-pages/client"),{compilerOptions:{allowJs:!0,types:o,paths:{"@/":["/src"]}}}}const ye=!1;function we(){return V(ye)}function Ce(){return JSON.stringify(we(),null,2)}const Se=!0;function Te(){return V(Se)}function Fe(){return JSON.stringify(Te(),null,2)}function Be(){return`// ./vitest.config.ts

import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: [...configDefaults.exclude],
    },
}

`}function Pe(){return`<!-- ./src/components/vv/anchors/VvAnchor.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvAnchor } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvAnchor },

        props: {
            button: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.button,
            },
            buttonBlock: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.buttonFab,
            },
            buttonSize: {
                type: String,
                default: appVv.defaults.VvAnchor.buttonSize,
            },
            color: {
                type: String,
                default: appVv.defaults.VvAnchor.color,
            },
            external: {
                type: Boolean,
                default: appVv.defaults.VvAnchor.external,
            },
            href: {
                type: String,
                default: appVv.defaults.VvAnchor.href,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvAnchor.palette,
            },
        },

    })

<\/script>


<template>
    <VvAnchor
        :button="button"
        :button-block="buttonBlock"
        :button-fab="buttonFab"
        :button-size="buttonSize"
        :color="color"
        :external="external"
        :href="href"
        :palette="palette"
    >
        <slot/>
    </VvAnchor>
</template>

`}function je(){return`<!-- ./src/components/vv/buttons/VvButton.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, VvButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvButton },

        props: {
            block: {
                type: Boolean,
                default: appVv.defaults.VvButton.block,
            },
            color: {
                type: String,
                default: appVv.defaults.VvButton.color,
            },
            fab: {
                type: Boolean,
                default: appVv.defaults.VvButton.fab,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvButton.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvButton.size,
            },
            type: {
                type: String,
                default: appVv.defaults.VvButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

    })

<\/script>


<template>
    <VvButton
        :block="block"
        :color="color"
        :fab="fab"
        :palette="palette"
        :size="size"
        :type="type"
    >
        <slot/>
    </VvButton>
</template>

`}function ze(){return`<!-- ./src/components/vv/inputs/VvCheckbox.vue -->


<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import { VvCheckbox } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvCheckbox },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvCheckbox.color,
            },
            checked: {
                type: Boolean,
                default: appVv.defaults.VvCheckbox.checked,
            },
            darkCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.darkCheckHex,
            },
            lightCheckHex: {
                type: String,
                default: appVv.defaults.VvCheckbox.lightCheckHex,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvCheckbox.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvCheckbox.size,
            },
        },

        setup (props) {
            
            // Source: https://github.com/tailwindlabs/tailwindcss-forms/issues/27#issuecomment-820958958
            // TIP: Fill color should start with # equivalent ("%23") immediately followed by the color hex value!
            function checkSvgUrl (string: string): string {
                return [
                    'url("data:image/svg+xml,%3csvg viewBox=',
                    "'0 0 16 16'  fill='%23",
                    string,
                    "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
                    '/%3e%3c/svg%3e")'
                ].join('')
            }
            let darkCheckCssUrl = computed( () => {
                return checkSvgUrl( (props.darkCheckHex as string).replace(/#/g, '') )
            })
            let lightCheckCssUrl = computed( () => {
                return checkSvgUrl( (props.lightCheckHex as string).replace(/#/g, '') )
            })

            return { darkCheckCssUrl, lightCheckCssUrl }

        },

    })

<\/script>


<template>
    <VvCheckbox
        :checked="checked"
        :color="color"
        :dark-check-hex="darkCheckHex"
        :light-check-hex="lightCheckHex"
        :palette="palette"
        :size="size"
    />
</template>


<style scoped>

    /* Set the svg (and thus color) of the TailwindCSS checkbox check geometry */
    [type="checkbox"]:checked {
        background-image: v-bind('lightCheckCssUrl');
    }

    .dark [type="checkbox"]:checked {
        background-image: v-bind('darkCheckCssUrl');
    }

</style>

`}function Re(){return`<!-- ./src/components/vv/buttons/VvColorModeButton.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidButtonTypes, ValidColorModes, VvColorModeButton } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvColorModeButton },

        props: {
            mode: {
                type: String,
                default: appVv.defaults.VvColorModeButton.mode,
                validator: (prop: ValidColorModes) => (ValidColorModes).includes(prop),
            },
            color: {
                type: String,
                default: appVv.defaults.VvColorModeButton.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvColorModeButton.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvColorModeButton.size,
            },
            groundDark: {
                type: String,
                default: appVv.colorModes.dark.ground,
            },
            groundDarkHex: {
                type: String,
                default: appVv.colorModes.dark.hex,
            },
            groundLight: {
                type: String,
                default: appVv.colorModes.light.ground,
            },
            groundLightHex: {
                type: String,
                default: appVv.colorModes.light.hex,
            },
            textDark: {
                type: String,
                default: appVv.colorModes.dark.text,
            },
            textLight: {
                type: String,
                default: appVv.colorModes.light.text,
            },
            titleDark: {
                type: String,
                default: appVv.colorModes.dark.title,
            },
            titleLight: {
                type: String,
                default: appVv.colorModes.light.title,
            },
            type: {
                type: String,
                default: appVv.defaults.VvColorModeButton.type,
                validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
            },
        },

        setup () {

            const colorMode = typeof window !== 'undefined' && localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

            return { colorMode }

        },

    })

<\/script>


<template>
    <VvColorModeButton
        :mode="(colorMode as string)"
        :color="color"
        :palette="palette"
        :size="size"
        :ground-dark="groundDark"
        :ground-dark-hex="groundDarkHex"
        :ground-light="groundLight"
        :ground-light-hex="groundLightHex"
        :text-dark="textDark"
        :text-light="textLight"
        :title-dark="titleDark"
        :title-light="titleLight"
        :type="type"
    />
</template>

`}function He(){return`<!-- ./src/components/vv/elements/VvEl.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvEl } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvEl },

        props: {
            borderPalette: {
                type: String,
                default: appVv.defaults.VvEl.borderPalette,
            },
            borderColor: {
                type: String,
                default: appVv.defaults.VvEl.borderColor,
            },
            groundPalette: {
                type: String,
                default: appVv.defaults.VvEl.groundPalette,
            },
            groundColor: {
                type: String,
                default: appVv.defaults.VvEl.groundColor,
            },
            tag: {
                type: String,
                default: appVv.defaults.VvEl.tag,
            },
            textPalette: {
                type: String,
                default: appVv.defaults.VvEl.textPalette,
            },
            textColor: {
                type: String,
                default: appVv.defaults.VvEl.textColor,
            },
        },

    })

<\/script>


<template>

    <VvEl
        :border-palette="borderPalette"
        :border-color="borderColor"
        :ground-palette="groundPalette"
        :ground-color="groundColor"
        :tag="tag"
        :text-palette="textPalette"
        :text-color="textColor"
    >
        <slot/>
    </VvEl>

</template>

`}function k(e=!1){const o=`
    <FontAwesomeIcon :icon="[family, icon]" :size="size"/>
`;let n=o;return e===!0&&(n=o),`<!-- ./src/components/vv/elements/VvFa.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { ValidFontAwesomeFamilies, ValidFontAwesomeSizes } from '@obewds/vueventus'

    export default defineComponent({

        components: { FontAwesomeIcon },

        props: {
            family: {
                type: String,
                default: 'fas',
                validator: (prop: ValidFontAwesomeFamilies) => (ValidFontAwesomeFamilies).includes(prop),
            },
            icon: {
                type: String,
                default: 'house',
            },
            size: {
                type: String,
                default: '1x',
                validator: (prop: ValidFontAwesomeSizes) => (ValidFontAwesomeSizes).includes(prop),
            },
        },

    })

<\/script>


<template>

${n}

</template>

`}function y(){return k(!1)}function w(){return k(!0)}function Ae(){return`<!-- ./src/components/vv/forms/VvFormGroup.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvFormGroup } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvFormGroup },

        props: {
            displayError: {
                type: Boolean,
                default: appVv.defaults.VvFormGroup.displayError,
            },
            displayHelp: {
                type: Boolean,
                default: appVv.defaults.VvFormGroup.displayHelp,
            },
            displaySuccess: {
                type: Boolean,
                default: appVv.defaults.VvFormGroup.displaySuccess,
            },
            errorClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.errorClasses,
            },
            errorText: {
                type: String,
                default: appVv.defaults.VvFormGroup.errorText,
            },
            errorTextColor: {
                type: String,
                default: appVv.defaults.VvFormGroup.errorTextColor,
            },
            errorTextPalette: {
                type: String,
                default: appVv.defaults.VvFormGroup.errorTextPalette,
            },
            helpClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.helpClasses,
            },
            helpText: {
                type: String,
                default: appVv.defaults.VvFormGroup.helpText,
            },
            helpTextColor: {
                type: String,
                default: appVv.defaults.VvFormGroup.helpTextColor,
            },
            helpTextPalette: {
                type: String,
                default: appVv.defaults.VvFormGroup.helpTextPalette,
            },
            label: {
                type: String,
                required: true,
            },
            labelFor: {
                type: String,
                required: true,
            },
            labelClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.labelClasses,
            },
            labelTextColor: {
                type: String,
                default: appVv.defaults.VvFormGroup.labelTextColor,
            },
            labelTextPalette: {
                type: String,
                default: appVv.defaults.VvFormGroup.labelTextPalette,
            },
            slotParentClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.slotParentClasses,
            },
            successClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.successClasses,
            },
            successText: {
                type: String,
                default: appVv.defaults.VvFormGroup.successText,
            },
            successTextColor: {
                type: String,
                default: appVv.defaults.VvFormGroup.successTextColor,
            },
            successTextPalette: {
                type: String,
                default: appVv.defaults.VvFormGroup.successTextPalette,
            },
            wrapperClasses: {
                type: String,
                default: appVv.defaults.VvFormGroup.wrapperClasses,
            },
        }
        
    })

<\/script>


<template>

    <VvFormGroup
        :display-error="displayError"
        :display-help="displayHelp"
        :display-success="displaySuccess"
        :error-classes="errorClasses"
        :error-text="errorText"
        :error-text-color="errorTextColor"
        :error-text-palette="errorTextPalette"
        :help-classes="helpClasses"
        :help-text="helpText"
        :help-text-color="helpTextColor"
        :help-text-palette="helpTextPalette"
        :label="label"
        :label-for="labelFor"
        :label-classes="labelClasses"
        :label-text-color="labelTextColor"
        :label-text-palette="labelTextPalette"
        :slot-parent-classes="slotParentClasses"
        :success-classes="successClasses"
        :success-text="successText"
        :success-text-color="successTextColor"
        :success-text-palette="successTextPalette"
        :wrapper-classes="wrapperClasses"
    >
        <slot/>
    </VvFormGroup>

</template>

`}function Me(){return`<!-- ./src/components/vv/inputs/VvInput.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { ValidInputTypes, VvInput } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvInput },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvInput.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvInput.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvInput.size,
            },
            type: {
                type: String,
                default: appVv.defaults.VvInput.type,
                validator: (prop: ValidInputTypes) => (ValidInputTypes).includes(prop),
            },
        },

    })

<\/script>


<template>
    <VvInput
        :color="color"
        :palette="palette"
        :size="size"
        :type="type"
    />
</template>

`}function Le(){return`<!-- ./src/components/vv/lists/VvListItem.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvListItem } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvListItem },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvListItem.color,
            },
            enableColoredSymbols: {
                type: Boolean,
                default: appVv.defaults.VvListItem.enableColoredSymbols,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvListItem.palette,
            },
            symbolColor: {
                type: String,
                default: appVv.defaults.VvListItem.symbolColor,
            },
            symbolPalette: {
                type: String,
                default: appVv.defaults.VvListItem.symbolPalette,
            },
        },

    })

<\/script>


<template>
    <VvListItem
        :color="color"
        :enable-colored-symbols="enableColoredSymbols"
        :palette="palette"
        :symbol-color="symbolColor"
        :symbol-palette="symbolPalette"
    >
        <slot/>
    </VvListItem>
</template>

`}function Ie(){return`<!-- ./src/components/vv/elements/VvPrismVars.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import appColors from '../../../app.colors.json'

    export default defineComponent({

        props: {
            commentStyle: {
                type: String,
                default: 'normal',
                validator: (prop: string) => (['normal', 'italic', 'oblique']).includes(prop),
            },
            fontSize: {
                type: String,
                default: '1rem',
            },
            lineHeight: {
                type: String,
                default: '1.3rem',
            },
            lineHighlightOpacity: {
                type: String,
                default: '0.25',
            },
            textShadow: {
                type: String,
                default: 'unset',
            },
            urlDecoration: {
                type: String,
                default: 'underline',
                validator: (prop: string) => (['underline', 'overline', 'none']).includes(prop),
            },
        },
        
        setup () {

            return { appColors }

        },

    })

<\/script>


<template>

    <component is="style" v-once>
        :root {
            --vv-comment-style: {{ commentStyle }};
            --vv-url-decoration: {{ urlDecoration }};
            --vv-font-size: {{ fontSize }};
            --vv-line-height: {{ lineHeight }};
            --vv-text-shadow: {{ textShadow }};
            --vv-line-highlight-opacity: {{ lineHighlightOpacity }};

            --vv-light-foreground: {{ appColors.coolGray['700'] }};
            --vv-light-background: {{ appColors.gray['50'] }};
            --vv-light-comment: {{ appColors.warmGray['400'] }};

            --vv-light-boolean: {{ appColors.indigo['600'] }};
            --vv-light-builtin: {{ appColors.green['500'] }}; /* controls color of html element tags */
            --vv-light-class: {{ appColors.blue['400'] }};
            --vv-light-constant: {{ appColors.lightBlue['500'] }};
            --vv-light-decorator: #ffffff;
            --vv-light-deleted: #ffffff;
            --vv-light-function: {{ appColors.violet['500'] }};
            --vv-light-important: {{ appColors.red['500'] }}; /* controls markdown headline and css important */
            --vv-light-interpolation: {{ appColors.cyan['600'] }};
            --vv-light-json-property: {{ appColors.lime['500'] }};
            --vv-light-keyword: {{ appColors.fuchsia['500'] }};
            --vv-light-keyword-control: #ffffff;
            --vv-light-line-highlight-background: {{ appColors.gray['200'] }};
            --vv-light-line-number: {{ appColors.white }}; /* controls color of the dividing line for line numbers */
            --vv-light-line-number-gutter: {{ appColors.gray['200'] }}; /* controls color of line number digits */
            --vv-light-literal: {{ appColors.cyan['600'] }};
            --vv-light-namespace: #ffffff;
            --vv-light-number: {{ appColors.pink['600'] }};
            --vv-light-property: {{ appColors.cyan['600'] }};
            --vv-light-operator: {{ appColors.yellow['500'] }};
            --vv-light-punctuation: {{ appColors.amber['500'] }};
            --vv-light-regex: {{ appColors.rose['500'] }};
            --vv-light-selection-background: {{ appColors.gray['100'] }};
            --vv-light-selector: {{ appColors.teal['500'] }};
            --vv-light-string: {{ appColors.emerald['600'] }};
            --vv-light-symbol: {{ appColors.purple['500'] }}; /* controls color of a link in markdown */
            --vv-light-variable: {{ appColors.blue['500'] }}; /* controls color of php and apache vars */

            
            --vv-dark-foreground: {{ appColors.gray['200'] }};
            --vv-dark-background: {{ appColors.black }};
            --vv-dark-comment: {{ appColors.warmGray['500'] }};

            --vv-dark-boolean: {{ appColors.indigo['200'] }};
            --vv-dark-builtin: {{ appColors.green['400'] }}; /* controls color of html element tags */
            --vv-dark-class: {{ appColors.blue['300'] }};
            --vv-dark-constant: {{ appColors.lightBlue['300'] }};
            --vv-dark-decorator: #000000;
            --vv-dark-deleted: #000000;
            --vv-dark-function: {{ appColors.violet['200'] }};
            --vv-dark-important: {{ appColors.red['300'] }}; /* controls markdown headline and css important */
            --vv-dark-interpolation: {{ appColors.cyan['300'] }};
            --vv-dark-json-property: {{ appColors.lime['300'] }};
            --vv-dark-keyword: {{ appColors.fuchsia['300'] }};
            --vv-dark-keyword-control: #000000;
            --vv-dark-line-highlight-background: {{ appColors.coolGray['800'] }};
            --vv-dark-line-number: {{ appColors.gray['900'] }}; /* controls color of dividing line for line numbers */
            --vv-dark-line-number-gutter: {{ appColors.gray['700'] }}; /* controls color of line number digits */
            --vv-dark-literal: {{ appColors.cyan['300'] }};
            --vv-dark-namespace: #000000;
            --vv-dark-number: {{ appColors.pink['200'] }};
            --vv-dark-property: {{ appColors.cyan['300'] }};
            --vv-dark-operator: {{ appColors.yellow['300'] }};
            --vv-dark-punctuation: {{ appColors.amber['300'] }};
            --vv-dark-regex: {{ appColors.rose['300'] }};
            --vv-dark-selection-background: {{ appColors.gray['800'] }};
            --vv-dark-selector: {{ appColors.teal['400'] }};
            --vv-dark-string: {{ appColors.emerald['300'] }};
            --vv-dark-symbol: {{ appColors.purple['300'] }}; /* controls color of a link in markdown */
            --vv-dark-variable: {{ appColors.blue['300'] }}; /* controls color of php and apache vars */
        }
    </component>

</template>


<style>

    html {
        --prism-comment-style: var(--vv-comment-style);
        --prism-url-decoration: var(--vv-url-decoration);
    }
    
    html:not(.dark) {
        --prism-scheme: light;
        --prism-foreground: var(--vv-light-foreground); /* #393a34; */
        --prism-background: var(--vv-light-background); /* #f8f8f8; */
        --prism-comment: var(--vv-light-comment); /* #758575; */

        --prism-boolean: var(--vv-light-boolean); /* #1c6b48; */
        --prism-builtin: var(--vv-light-builtin);/* #800000; */
        --prism-class: var(--vv-light-class); /* #2b91af; */
        --prism-constant: var(--vv-light-constant); /* #a65e2b; */
        --prism-decorator: var(--vv-light-decorator); /* #bd8f8f; */
        --prism-deleted: var(--vv-light-deleted); /* #9a050f; */
        --prism-function: var(--vv-light-function); /* #849145; */
        --prism-important: var(--vv-light-important);
        --prism-interpolation: var(--vv-light-interpolation);
        --prism-json-property: var(--vv-light-json-property); /* #698c96; */
        --prism-keyword: var(--vv-light-keyword); /* #248459; */
        --prism-keyword-control: var(--vv-light-keyword-control);
        --prism-line-highlight-background: var(--vv-light-line-highlight-background);  /* #444444; */
        --prism-line-number: var(--vv-light-line-number); /* #296aa3; */
        --prism-line-number-gutter: var(--vv-light-line-number-gutter); /* #eeeeee; */
        --prism-literal: var(--vv-light-literal); /* #36acaa; */
        --prism-namespace: var(--vv-light-namespace); /* #444444; */
        --prism-number: var(--vv-light-number); /* #6394bf; */
        --prism-operator: var(--vv-light-operator);
        --prism-property: var(--vv-light-property); /* #ce9178; */
        --prism-punctuation: var(--vv-light-punctuation); /* #80817d; */
        --prism-regex: var(--vv-light-regex); /* #ad502b; */
        --prism-selection-background: var(--vv-light-selection-background); /* #444444; */
        --prism-selector: var(--vv-light-selector);
        --prism-string: var(--vv-light-string); /* #bc8671; */
        --prism-symbol: var(--vv-light-symbol);
        --prism-variable: var(--vv-light-variable); /* #c2b36e; */
    }

    html.dark {
        --prism-scheme: dark;
        --prism-foreground: var(--vv-dark-foreground); /* #d4d4d4; */
        --prism-background: var(--vv-dark-background); /* #1e1e1e; */
        --prism-comment: var(--vv-dark-comment); /* #758575; */

        --prism-boolean: var(--vv-dark-boolean); /* #1c6b48; */
        --prism-builtin: var(--vv-dark-builtin); /* #d16969; */
        --prism-class: var(--vv-dark-class); /* #4ec9b0; */
        --prism-constant: var(--vv-dark-constant); /* #a65e2b; */
        --prism-decorator: var(--vv-dark-decorator); /* #bd8f8f; */
        --prism-deleted: var(--vv-dark-deleted); /* #9a050f; */
        --prism-function: var(--vv-dark-function); /* #dcdcaa; */
        --prism-important: var(--vv-dark-important);
        --prism-interpolation: var(--vv-dark-interpolation);
        --prism-json-property: var(--vv-dark-json-property); /* #6b8b9e; */
        --prism-keyword: var(--vv-dark-keyword); /* #38a776; */
        --prism-keyword-control: var(--vv-dark-keyword-control);
        --prism-line-highlight-background: var(--vv-dark-line-highlight-background);  /* #444444; */
        --prism-line-number: var(--vv-dark-line-number); /* #888888; */
        --prism-line-number-gutter: var(--vv-dark-line-number-gutter); /* #eeeeee; */
        --prism-literal: var(--vv-dark-literal); /* #36acaa; */
        --prism-namespace: var(--vv-dark-namespace); /* #aaaaaa; */
        --prism-number: var(--vv-dark-number); /* #6394bf; */
        --prism-operator: var(--vv-dark-operator);
        --prism-property: var(--vv-dark-property); /* #ce9178; */
        --prism-punctuation: var(--vv-dark-punctuation); /* #d4d4d4; */
        --prism-regex: var(--vv-dark-regex); /* #ad502b; */
        --prism-selection-background: var(--vv-dark-selection-background); /* #444444; */
        --prism-selector: var(--vv-dark-selector);
        --prism-string: var(--vv-dark-string); /* #ce9178; */
        --prism-symbol: var(--vv-dark-symbol);
        --prism-variable: var(--vv-dark-variable); /* #c2b36e; */
    }

    code[class*="language-"], 
    pre[class*="language-"] {
        text-shadow: var(--vv-text-shadow) !important;
        line-height: var(--vv-line-height) !important;
        font-size: var(--vv-font-size) !important;
    }

    code[class*="language-"] .important, 
    pre[class*="language-"] .important {
        color: var(--prism-important);
    }

    code[class*="language-"] .line-highlight, 
    pre[class*="language-"] .line-highlight {
        opacity: var(--vv-line-highlight-opacity);
    }

    code[class*="language-"] .url-link, 
    pre[class*="language-"] .url-link {
        text-decoration: var(--prism-url-decoration);
    }

    div.code-toolbar > .toolbar {
        opacity: 1;
    }

    div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button {
        padding: 6px 10px;
        color: #000000;
        background-color: #ffffff;
        text-transform: uppercase;
        opacity: 0.5;
        transition: all ease 300ms;
    }

    div.code-toolbar > .toolbar > .toolbar-item > button.copy-to-clipboard-button:hover {
        opacity: 1;
    }

</style>

`}function Ee(){return`<!-- ./src/components/vv/elements/VvPrism.vue -->


<script lang="ts">

    import { defineComponent, onMounted, onUpdated } from 'vue'
    import Prism from 'prismjs'
    import VvPrismVars from './VvPrismVars.vue'
    import appColors from '../../../app.colors.json'

    export default defineComponent({
        
        components: { VvPrismVars },
        
        props: {
            prismVars: {
                type: Boolean,
                default: true,
            },
        },
        
        setup () {

            onMounted(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

            onUpdated(() => {
                Prism.manual = true
                Prism.highlightAll()
            })

            return { appColors }

        },

    })

<\/script>


<template>

    <div>

        <template v-if="prismVars">
            <VvPrismVars/>
        </template>

        <slot/>

    </div>

</template>

`}function $e(){return`<!-- ./src/components/vv/inputs/VvRadio.vue -->

<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import { VvRadio } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvRadio },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvRadio.color,
            },
            checked: {
                type: Boolean,
                default: appVv.defaults.VvRadio.checked,
            },
            darkRadioHex: {
                type: String,
                default: appVv.defaults.VvRadio.darkRadioHex,
            },
            lightRadioHex: {
                type: String,
                default: appVv.defaults.VvRadio.lightRadioHex,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvRadio.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvRadio.size,
            },
            value: {
                type: String,
                required: true,
            },
        },

        setup (props) {

            // Source: https://github.com/tailwindlabs/tailwindcss-forms/issues/27#issuecomment-820958958
            // TIP: Fill color should start with # equivalent ("%23") immediately followed by the color hex value!
            function radioSvgUrl (string: string): string {
                return [
                    'url("data:image/svg+xml,%3csvg viewBox=',
                    "'0 0 16 16' fill='%23",
                    string,
                    "' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'",
                    '/%3e%3c/svg%3e")',
                ].join('')
            }
            let darkRadioCssUrl = computed( () => {
                return radioSvgUrl( (props.darkRadioHex as string).replace(/#/g, '') )
            })
            let lightRadioCssUrl = computed( () => {
                return radioSvgUrl( (props.lightRadioHex as string).replace(/#/g, '') )
            })

            return { darkRadioCssUrl, lightRadioCssUrl }

        },

    })

<\/script>


<template>
    <VvRadio
        :checked="checked"
        :color="color"
        :dark-radio-hex="darkRadioHex"
        :light-radio-hex="lightRadioHex"
        :palette="palette"
        :size="size"
        :value="value"
    />
</template>


<style scoped>

    /* Set the svg (and thus color) of the TailwindCSS radio dot geometry */
    [type="radio"]:checked {
        background-image: v-bind('lightRadioCssUrl');
    }

    .dark [type="radio"]:checked {
        background-image: v-bind('darkRadioCssUrl');
    }

</style>

`}function Ge(){return`<!-- ./src/components/vv/anchors/VvRouterLink.vue -->


<script lang="ts">

    import { computed, defineComponent } from 'vue'
    import appVv from '../../app.vv'

    export default defineComponent({
        
        props: {
            button: {
                type: Boolean,
                default: appVv.defaults.VvRouterLink.button,
            },
            buttonBlock: {
                type: Boolean,
                default: appVv.defaults.VvRouterLink.buttonBlock,
            },
            buttonFab: {
                type: Boolean,
                default: appVv.defaults.VvRouterLink.buttonFab,
            },
            buttonSize: {
                type: String,
                default: appVv.defaults.VvRouterLink.buttonSize,
            },
            color: {
                type: String,
                default: appVv.defaults.VvRouterLink.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvRouterLink.palette,
            },
            to: {
                type: String,
                required: true,
            },
        },

        setup(props){

            let vv = appVv

            let classes = computed( () => {

                let output: string[] = []

                if ( props.button === true ) {

                    // collect classes for VvRouterLink with button styling

                    if (props.buttonBlock === true && props.buttonFab === false) {

                        if ( vv.buttons.blockBase() ) {
                            output.push( vv.buttons.blockBase() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.blockSizes[props.buttonSize] ) {
                            output.push( vv.buttons.blockSizes[props.buttonSize] as string )
                        }
                        
                    } else if (props.buttonBlock === false && props.buttonFab === true) {

                        if ( vv.buttons.fabBase() ) {
                            output.push( vv.buttons.fabBase() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.fabSizes[props.buttonSize] ) {
                            output.push( vv.buttons.fabSizes[props.buttonSize] as string )
                        }

                    } else {

                        if ( vv.buttons.base() ) {
                            output.push( vv.buttons.base() )
                        }

                        if ( props.buttonSize !== '' && vv.buttons.sizes[props.buttonSize] ) {
                            output.push( vv.buttons.sizes[props.buttonSize] as string )
                        }

                    }
                    
                    if ( vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes] && vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes][props.color] ) {
                        output.push( vv.buttons.palettes[props.palette as keyof typeof vv.buttons.palettes][props.color] as string )
                    }

                } else {

                    // collect classes for VvRouterLink with anchor styling

                    if ( vv.anchors.base() ) {
                        output.push( vv.anchors.base() )
                    }


                    if ( vv.anchors.palettes[props.palette as keyof typeof vv.anchors.palettes][props.color] ) {
                        output.push( vv.anchors.palettes[props.palette as keyof typeof vv.anchors.palettes][props.color] as string )
                    }

                }

                return output.join(' ').trim()

            })

            return { classes }

        },

    })

<\/script>


<template>
    <router-link :to="to" :class="classes">
        <slot/>
    </router-link>
</template>

`}function De(){return`<!-- ./src/components/vv/buttons/VvScrollUp.vue -->

<script lang="ts">

    import { defineComponent, onMounted, ref } from 'vue'
    import { TransitionChild, TransitionRoot } from '@headlessui/vue'
    import { VvButton } from '@obewds/vueventus'
    import gsap from 'gsap'

    export default defineComponent({

        components: {
            TransitionChild,
            TransitionRoot,
            VvButton,
        },

        props: {
            buttonClasses: {
                type: String,
                default: 'rounded-full',
            },
            color: {
                type: String,
                default: 'primary'
            },
            fab: {
                type: Boolean,
                default: true
            },
            palette: {
                type: String,
                default: 'solid'
            },
            isVisible: {
                type: Boolean,
                default: false
            },
            offsetMinimum: {
                type: Number,
                default: 100
            },
            size: {
                type: String,
                default: 'xs',
            },
            title: {
                type: String,
                default: 'Scroll to Top',
            },
        },

        setup (props) {

            const isVisible = ref(props.isVisible)

            onMounted(() => {
                window.addEventListener('scroll', function(){
                    isVisible.value = window.pageYOffset > props.offsetMinimum
                })
            })

            return { isVisible }

        },

        methods: {

            scrollToTop (event: Event) {
                // GSAP ScrollToPlugin
                gsap.to(window, {
                    duration: 0.3,
                    scrollTo: {
                        y: 0,
                        x: 0,
                    },
                })
            }

        },

    })

<\/script>


<template>

    <TransitionRoot appear :show="isVisible">

        <div>

            <TransitionChild
                enter="transform transition ease-out duration-300"
                enter-from="-translate-y-full opacity-0"
                enter-to="translate-y-0 opacity-100"
                leave="transform transition ease-in duration-300"
                leave-from="translate-y-0 opacity-100"
                leave-to="-translate-y-full opacity-0"
            >

                <div>

                    <VvButton
                        :title="title"
                        :palette="palette"
                        :color="color"
                        :class="buttonClasses"
                        @click="scrollToTop($event)"
                        :fab="fab"
                        :size="size"
                    >
                        <slot>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                        </slot>
                    </VvButton>

                </div>

            </TransitionChild>

        </div>

    </TransitionRoot>

</template>

`}function Je(){return`<!-- ./src/components/vv/textareas/VvTextarea.vue -->


<script lang="ts">

    import { defineComponent } from 'vue'
    import { VvTextarea } from '@obewds/vueventus'
    import appVv from '../../../app.vv'

    export default defineComponent({

        components: { VvTextarea },

        props: {
            color: {
                type: String,
                default: appVv.defaults.VvTextarea.color,
            },
            palette: {
                type: String,
                default: appVv.defaults.VvTextarea.palette,
            },
            size: {
                type: String,
                default: appVv.defaults.VvTextarea.size,
            },
            rowSize: {
                type: String,
                default: appVv.defaults.VvTextarea.rowSize,
            },
        },

    })

<\/script>


<template>

    <VvTextarea
        :color="color"
        :palette="palette"
        :size="size"
        :row-size="rowSize"
    />

</template>

`}function Ue(){return`// ./tests/pages/b.test.js

import { mount } from '@vue/test-utils'
import b from '../../src/pages/b.vue'


test('b.vue page mounts successfully', async () => {
    
    expect(b).toBeTruthy()

})

`}function Ne(){return`// ./tests/pages/Home.test.js

import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home.vue'


test('Home.vue page mounts successfully', async () => {
    
    expect(Home).toBeTruthy()

})

`}function Oe(){return`// ./tests/pages/NotFound404.test.js

import { mount } from '@vue/test-utils'
import NotFound404 from '../../src/pages/NotFound404.vue'


test('NotFound404.vue page mounts successfully', async () => {
    
    expect(NotFound404).toBeTruthy()

})

`}function qe(){return`// ./tests/components/vv/anchors/VvAnchor.test.js

import { mount } from '@vue/test-utils'
import VvAnchor from '../../../../src/components/vv/anchors/VvAnchor.vue'
import appVv from '../../../../src/app.vv'


test('VvAnchor.vue component mounts successfully', async () => {
    
    expect(VvAnchor).toBeTruthy()

})


test('VvAnchor.vue component accepts an object literal default slot value of markup and text', async () => {

    const testString = \`<div>Test</div>\`

    const wrapper = mount(VvAnchor, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    expect(wrapper.html()).toContain(testString)
    
})


test('VvAnchor.vue component props all work as expected', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            button: appVv.defaults.VvAnchor.button,
            buttonBlock: appVv.defaults.VvAnchor.buttonBlock,
            buttonFab: appVv.defaults.VvAnchor.buttonFab,
            buttonSize: appVv.defaults.VvAnchor.buttonSize,
            color: appVv.defaults.VvAnchor.color,
            external: appVv.defaults.VvAnchor.external,
            href: appVv.defaults.VvAnchor.href,
            palette: appVv.defaults.VvAnchor.palette,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})


test('VvAnchor.vue component external mode returns target="_blank" and rel="noopener noreferrer"', async () => {

    const wrapper = mount(VvAnchor, {
        props: {
            external: true,
        },
    })

    expect(wrapper.html()).toContain('<a ')
    expect(wrapper.html()).toContain('target="_blank"')
    expect(wrapper.html()).toContain('rel="noopener noreferrer"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</a>')
    
})

`}function We(){return`// ./tests/components/vv/buttons/VvButton.test.js

import { mount } from '@vue/test-utils'
import VvButton from '../../../../src/components/vv/buttons/VvButton.vue'
import appVv from '../../../../src/app.vv'


test('VvButton.vue component mounts successfully', async () => {
    
    expect(VvButton).toBeTruthy()

})


test('VvButton.vue component accepts an object literal default slot value of markup and text', async () => {

    const testString = \`<div>Test</div>\`

    const wrapper = mount(VvButton, {
        slots: {
            default: testString,
        },
    })

    expect(wrapper.html()).toContain('<button ')
    expect(wrapper.html()).toContain('type="button"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</button>')
    expect(wrapper.html()).toContain(testString)
    
})


test('VvButton.vue component type prop works as expected and validates', async () => {

    const wrapper = mount(VvButton, {
        props: { type: 'submit' },
    })

    expect(wrapper.html()).toContain('<button ')
    expect(wrapper.html()).toContain('type="submit"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</button>')

})


test('VvButton.vue component props all work as expected', async () => {

    const wrapper = mount(VvButton, {
        props: {
            block: appVv.defaults.VvButton.block,
            color: appVv.defaults.VvButton.color,
            fab: appVv.defaults.VvButton.fab,
            palette: appVv.defaults.VvButton.palette,
            size: appVv.defaults.VvButton.size,
            type: appVv.defaults.VvButton.type,
        },
    })

    expect(wrapper.html()).toContain('<button ')
    expect(wrapper.html()).toContain('type="button"')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</button>')
    
})

`}function _e(){return`// ./tests/components/vv/inputs/VvCheckbox.test.js

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvCheckbox from '../../../../src/components/vv/inputs/VvCheckbox.vue'


test('VvCheckbox.test.vue component mounts successfully', async () => {
    
    expect(VvCheckbox).toBeTruthy()

})



test('VvCheckbox.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvCheckbox, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})


test('VvCheckbox.vue component can successfully ingest and output the expected data-test attribute value containing the passed in hex values props', async () => {
    
    const wrapper = mount(VvCheckbox, {
        props: {
            lightCheckHex: '#ffffff',
            darkCheckHex: '#000000',
        },
    })

    expect(wrapper.html()).toContain('ffffff')
    expect(wrapper.html()).toContain('000000')
    
})

`}function Ye(){return`// ./tests/components/vv/buttons/VvColorModeButton.test.js

import { mount } from '@vue/test-utils'
import VvColorModeButton from '../../../../src/components/vv/buttons/VvColorModeButton.vue'


test('VvColorModeButton.test.vue component mounts successfully', async () => {
    
    expect(VvColorModeButton).toBeTruthy()

})


test('VvColorModeButton.vue component returns an expected output when the mode prop = "dark"', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'dark',
        },
    })

    expect(wrapper.html()).toContain('svg')
    
})


test('VvColorModeButton.vue component returns an expected output when the mode prop = "light"', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'light',
        },
    })

    expect(wrapper.html()).toContain('svg')
    
})


test('VvColorModeButton.vue toggles a "dark" mode icon to a "light" mode icon and vice versa', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'dark'
        }
    })

    const initSvgPath = wrapper.find('path').html()

    await wrapper.find('button').trigger('click')

    const svgPath = wrapper.find('path').html()

    expect(initSvgPath).not.toBe(svgPath)

    await wrapper.find('button').trigger('click')

    const backToOriginalPath = wrapper.find('path').html()

    expect(initSvgPath).toBe(backToOriginalPath)

})


test('VvColorModeButton.vue component can check localStorage for a colorMode property stored during a prior user session', async () => {

    const wrapper = mount(VvColorModeButton, {
        props: {
            mode: 'dark',
        },
        global: {
            mocks: {
                localStorage: {
                    colorMode: 'light',
                    setItem (key, item) {
                        this[key] = item
                    },
                    getItem (key) { 
                        return this[key]
                    }
                }
            },
        },
    })

    expect(wrapper.html()).toContain('svg')
    
})

`}function Qe(){return`// ./tests/components/vv/elements/VvEl.test.js

import { mount } from '@vue/test-utils'
import VvEl from '../../../../src/components/vv/elements/VvEl.vue'


test('VvEl.test.vue component mounts successfully', async () => {
    
    expect(VvEl).toBeTruthy()

})

`}function C(e=!1){let o="import '../../../../src/fontAwesome'";return e===!0&&(o="import '../../../../src/fontAwesomePro'"),`// ./tests/components/vv/elements/VvFa.test.js

import { mount } from '@vue/test-utils'
import VvFa from '../../../../src/components/vv/elements/VvFa.vue'
${o}


test('VvFa.test.vue component mounts successfully', async () => {
    
    expect(VvFa).toBeTruthy()

})


test('VvFa.vue component accepts family and icon prop values and returns/renders an svg element', async () => {

    const wrapper = mount(VvFa, {
        props: {
            family: 'fas',
            size: '1x'
        },
    })

    expect(wrapper.html()).toBeTruthy()

})

`}function Xe(){return C(!1)}function Ze(){return C(!0)}function Ke(){return`// ./tests/components/vv/forms/VvFormGroup.test.js

import { mount } from '@vue/test-utils'
import VvFormGroup from '../../../../src/components/vv/forms/VvFormGroup.vue'


test('VvFormGroup.test.vue component mounts successfully', async () => {
    
    expect(VvFormGroup).toBeTruthy()

})

`}function et(){return`// ./tests/components/vv/inputs/VvInput.test.js

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvInput from '../../../../src/components/vv/inputs/VvInput.vue'


test('VvInput.test.vue component mounts successfully', async () => {
    
    expect(VvInput).toBeTruthy()

})



test('VvInput.vue component returns a type email input using the component type prop', async () => {

    const testString = 'email'

    const wrapper = mount(VvInput, {
        props: {
            type: testString,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})



test('VvInput.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvInput, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
    })

    expect(wrapper.html()).toContain('input')
    
})

`}function tt(){return`// ./tests/components/vv/lists/VvListItem.test.js

import { mount } from '@vue/test-utils'
import VvListItem from '../../../../src/components/vv/lists/VvListItem.vue'


test('VvListItem.test.vue component mounts successfully', async () => {
    
    expect(VvListItem).toBeTruthy()

})

`}function ot(){return`// ./tests/components/vv/elements/VvPrism.test.js

import { mount } from '@vue/test-utils'
import VvPrism from '../../../../src/components/vv/elements/VvPrism.vue'


test('VvPrism.test.vue component mounts successfully', async () => {
    
    expect(VvPrism).toBeTruthy()

})


test('VvPrism.vue component accepts validating prop values and returns truthy', async () => {
    
    const wrapper = mount(VvPrism, {
        props: {
            prismVars: true
        },
        slots: { default: 'this is a test' },
    })

    expect(wrapper.html()).toBeTruthy()

})

`}function rt(){return`// ./tests/components/vv/elements/VvPrismVars.test.js

import { mount } from '@vue/test-utils'
import VvPrismVars from '../../../../src/components/vv/elements/VvPrismVars.vue'


test('VvPrismVars.test.vue component mounts successfully', async () => {
    
    expect(VvPrismVars).toBeTruthy()

})


test('VvPrismVars.vue component accepts validating prop values and returns truthy', async () => {

    const wrapper = mount(VvPrismVars, {
        props: {
            commentStyle: 'italic',
            urlDecoration: 'underline'
        },
    })

    expect(wrapper.html()).toBeTruthy()

})

`}function st(){return`// ./tests/components/vv/inputs/VvRadio.test.js

import { mount } from '@vue/test-utils'
import VvRadio from '../../../../src/components/vv/inputs/VvRadio.vue'


test('VvRadio.test.vue component mounts successfully', async () => {
    
    expect(VvRadio).toBeTruthy()

})



test('VvRadio.vue component returns a radio input using the component type prop', async () => {

    const testString = 'test-value'

    const wrapper = mount(VvRadio, {
        props: {
            value: testString,
            checked: true,
        },
    })

    expect(wrapper.html()).toContain(testString)
    
})

`}function at(){return`// ./tests/components/vv/anchors/VvRouterLink.test.js

import { mount } from '@vue/test-utils'
import { VvConfig } from '@obewds/vueventus'
import VvRouterLink from '../../../../src/components/vv/anchors/VvRouterLink.vue'


test('VvRouterLink.vue component mounts successfully', async () => {
    
    expect(VvRouterLink).toBeTruthy()

})


test('VvRouterLink.vue component accepts an object literal default slot value of markup and text', async () => {

    const testString = \`<div>Test</div>\`

    const wrapper = mount(VvRouterLink, {
        slots: {
            default: testString,
        },
        props: {
            to: '/',
        },
    })

    expect(wrapper.html()).toContain('<router-link ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</router-link>')
    expect(wrapper.html()).toContain(testString)
    
})



test('VvRouterLink.vue component can successfully inject() a parent component provide() property "vv"', async () => {

    const wrapper = mount(VvRouterLink, {
        global: {
            provide: {
                vv: VvConfig,
            },
        },
        props: {
            to: '/',
        },
    })

    expect(wrapper.html()).toContain('<router-link ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</router-link>')
    
})


test('VvRouterLink.vue component returns an expected result when prop button is true', async () => {

    const wrapper = mount(VvRouterLink, {
        props: {
            to: '/',
            button: true,
        },
    })

    expect(wrapper.html()).toContain('<router-link ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</router-link>')
    
})


test('VvRouterLink.vue component returns an expected result when props button and buttonBlock are true', async () => {

    const wrapper = mount(VvRouterLink, {
        props: {
            to: '/',
            button: true,
            buttonBlock: true,
        },
    })

    expect(wrapper.html()).toContain('<router-link ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</router-link>')
    
})


test('VvRouterLink.vue component returns an expected result when props button and buttonFab are true', async () => {

    const wrapper = mount(VvRouterLink, {
        props: {
            to: '/',
            button: true,
            buttonFab: true,
        },
    })

    expect(wrapper.html()).toContain('<router-link ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</router-link>')
    
})


test('VvRouterLink.vue component returns an expected result when props button, palette, and color are defined', async () => {

    const wrapper = mount(VvRouterLink, {
        props: {
            to: '/',
            button: true,
            palette: 'solid',
            color: 'default',
        },
    })

    expect(wrapper.html()).toContain('<router-link ')
    expect(wrapper.html()).toContain('>')
    expect(wrapper.html()).toContain('</router-link>')
    
})

`}function nt(){return`// ./tests/components/vv/buttons/VvScrollUp.test.js

import { mount } from '@vue/test-utils'
import VvScrollUp from '../../../../src/components/vv/buttons/VvScrollUp.vue'


test('VvScrollUp.test.vue component mounts successfully', async () => {
    
    expect(VvScrollUp).toBeTruthy()

})


test('VvScrollUp.vue component returns markup if passed a true value for the isVisible prop', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            isVisible: true
        },
    })

    expect(wrapper.html()).toContain('button')

})


test('VvScrollUp.vue component is impacted by a click event as expected', async () => {

    const wrapper = mount(VvScrollUp, {
        props: {
            isVisible: true
        },
    })

    window.dispatchEvent(new CustomEvent('scroll', { detail: 2000 }))
    
    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('button')

})

`}function lt(){return`// ./tests/components/vv/textareas/VvTextarea.test.js

import { mount } from '@vue/test-utils'
import VvTextarea from '../../../../src/components/vv/textareas/VvTextarea.vue'


test('VvTextarea.test.vue component mounts successfully', async () => {
    
    expect(VvTextarea).toBeTruthy()

})

`}let m={appVvTs:{name:"app.vv.ts",checked:!0,path:"/src/",src:te()},appColorsJson:{name:"app.colors.json",checked:!0,path:"/src/",src:H()},indexHtml:{name:"index.html",checked:!0,path:"/",src:ve()},postCssConfigCjs:{name:"postcss.config.cjs",checked:!0,path:"/",src:be()},tailwindCss:{name:"tailwind.css",checked:!0,path:"/src/css/",src:ke()}},it={appVue:{name:"App.vue",checked:!0,path:"/src/",src:A()},homeVue:{name:"Home.vue",checked:!0,path:"/src/pages/",src:de()},notFound404Vue:{name:"NotFound404.vue",checked:!0,path:"/src/pages/",src:ge()},routesTs:{name:"routes.ts",checked:!0,path:"/src/router/",src:Ve()},tailwindConfigCjs:{name:"tailwind.config.cjs",checked:!0,path:"/",src:x(!1)},tsconfigJson:{name:"tsconfig.json",checked:!0,path:"/",src:Ce()}},pt={appVue:{name:"App.vue",checked:!0,path:"/src/",src:M()},aMd:{name:"a.md",checked:!0,path:"/src/pages/",src:R()},bMd:{name:"b.md",checked:!0,path:"/src/pages/",src:oe()},bVue:{name:"b.vue",checked:!0,path:"/src/pages/nested/deep/",src:re()},catchAll404:{name:"[...all].vue",checked:!0,path:"/src/pages/",src:se()},counterVue:{name:"Counter.vue",checked:!0,path:"/src/components/",src:ae()},helloWorldVueSsg:{name:"HelloWorld.vue",checked:!0,path:"/src/components/",src:ce()},indexMd:{name:"index.md",checked:!0,path:"/src/pages/",src:me()},mousePosVue:{name:"MousePos.vue",checked:!0,path:"/src/components/",src:fe()},piniaRootTs:{name:"root.ts",checked:!0,path:"/src/store/",src:he()},tailwindConfigCjs:{name:"tailwind.config.cjs",checked:!0,path:"/",src:x(!0)},tsconfigJson:{name:"tsconfig.json",checked:!0,path:"/",src:Fe()}},f={vvAnchorVue:{name:"VvAnchor.vue",checked:!0,path:"/src/components/vv/anchors/",src:Pe()},vvButtonVue:{name:"VvButton.vue",checked:!0,path:"/src/components/vv/buttons/",src:je()},vvCheckboxVue:{name:"VvCheckbox.vue",checked:!0,path:"/src/components/vv/inputs/",src:ze()},vvColorModeButtonVue:{name:"VvColorModeButton.vue",checked:!0,path:"/src/components/vv/buttons/",src:Re()},vvElVue:{name:"VvEl.vue",checked:!0,path:"/src/components/vv/elements/",src:He()},vvFormGroupVue:{name:"VvFormGroup.vue",checked:!0,path:"/src/components/vv/forms/",src:Ae()},vvInputVue:{name:"VvInput.vue",checked:!0,path:"/src/components/vv/inputs/",src:Me()},vvListItemVue:{name:"VvListItem.vue",checked:!0,path:"/src/components/vv/lists/",src:Le()},vvRadioVue:{name:"VvRadio.vue",checked:!0,path:"/src/components/vv/inputs/",src:$e()},vvRouterLinkVue:{name:"VvRouterLink.vue",checked:!0,path:"/src/components/vv/anchors/",src:Ge()},vvTextareaVue:{name:"VvTextarea.vue",checked:!0,path:"/src/components/vv/textareas/",src:Je()}},S={checked:!0,name:"FontAwesome Free",install:"npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons --save-dev",packages:["@fortawesome/fontawesome-svg-core","@fortawesome/vue-fontawesome@latest-3","@fortawesome/free-brands-svg-icons","@fortawesome/free-solid-svg-icons","@fortawesome/free-regular-svg-icons"],files:{fontAwesomeTs:{name:"fontAwesome.ts",checked:!0,path:"/src/",src:le()},vvFa:{name:"VvFa.vue",checked:!0,path:"/src/components/vv/elements/",src:y()},vvFaTestJs:{name:"VvFa.test.js",checked:!0,path:"/tests/components/vv/elements/",src:Xe()}}},T=S;T.files.vvFa={name:"VvFa.vue",checked:!0,path:"/src/components/vv/elements/",src:w()};let F={checked:!1,name:"FontAwesome Pro (License Required)",install:"npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons @fortawesome/sharp-solid-svg-icons --save-dev",packages:["@fortawesome/fontawesome-svg-core","@fortawesome/vue-fontawesome@latest-3","@fortawesome/free-brands-svg-icons","@fortawesome/pro-solid-svg-icons","@fortawesome/pro-regular-svg-icons","@fortawesome/pro-duotone-svg-icons","@fortawesome/pro-light-svg-icons","@fortawesome/pro-thin-svg-icons","@fortawesome/sharp-solid-svg-icons"],files:{fontAwesomeProTs:{name:"fontAwesomePro.ts",checked:!0,path:"/src/",src:ne()},vvFa:{name:"VvFa.vue",checked:!0,path:"/src/components/vv/elements/",src:y()},vvFaTestJs:{name:"VvFa.test.js",checked:!0,path:"/tests/components/vv/elements/",src:Ze()}}},B=F;B.files.vvFa={name:"VvFa.vue",checked:!0,path:"/src/components/vv/elements/",src:w()};let P={checked:!0,name:"Vitest",install:"npm install vitest @vue/test-utils happy-dom @vitest/coverage-c8 --save-dev",packages:["vitest","@vue/test-utils","happy-dom","@vitest/coverage-c8"],files:{vitestConfigTs:{name:"vitest.config.ts",checked:!0,path:"/",src:Be()},helloVueVentusTestJs:{name:"HelloVueVentus.test.js",checked:!0,path:"/tests/components/",src:pe()},helloVueVentusVue:{name:"HelloVueVentus.vue",checked:!0,path:"/src/components/",src:ue()},vvAnchorTestJs:{name:"VvAnchor.test.js",checked:!0,path:"/tests/components/vv/anchors/",src:qe()},vvButtonTestJs:{name:"VvButton.test.js",checked:!0,path:"/tests/components/vv/buttons/",src:We()},vvCheckboxTestJs:{name:"VvCheckbox.test.js",checked:!0,path:"/tests/components/vv/inputs/",src:_e()},vvColorModeButtonTestJs:{name:"VvColorModeButton.test.js",checked:!0,path:"/tests/components/vv/buttons/",src:Ye()},vvElTestJs:{name:"VvEl.test.js",checked:!0,path:"/tests/components/vv/elements/",src:Qe()},vvFormGroupTestJs:{name:"VvFormGroup.test.js",checked:!0,path:"/tests/components/vv/forms/",src:Ke()},vvInputTestJs:{name:"VvInput.test.js",checked:!0,path:"/tests/components/vv/inputs/",src:et()},vvListItemTestJs:{name:"VvListItem.test.js",checked:!0,path:"/tests/components/vv/lists/",src:tt()},vvRadioTestJs:{name:"VvRadio.test.js",checked:!0,path:"/tests/components/vv/inputs/",src:st()},vvRouterLinkTestJs:{name:"VvRouterLink.test.js",checked:!0,path:"/tests/components/vv/anchors/",src:at()},vvScrollUpTestJs:{name:"VvScrollUp.test.js",checked:!0,path:"/tests/components/vv/buttons/",src:nt()},vvTextareaTestJs:{name:"VvTextarea.test.js",checked:!0,path:"/tests/components/vv/textareas/",src:lt()}}},c=P;c.files.homeTestJs={name:"Home.test.js",checked:!0,path:"/tests/pages/",src:Ne()};c.files.notFound404TestJs={name:"NotFound404.test.js",checked:!0,path:"/tests/pages/",src:Oe()};let j=P;j.files.bTestJs={name:"b.test.js",checked:!0,path:"/tests/pages/",src:Ue()};let z={fontawesome:{},faPro:{},gsap:{checked:!0,name:"GSAP",install:"npm install gsap --save-dev",packages:["gsap"],files:{gsapTs:{name:"gsap.ts",checked:!0,path:"/src/",src:ie()},vvScrollUp:{name:"VvScrollUp.vue",checked:!0,path:"/src/components/vv/buttons/",src:De()}}},headless:{checked:!0,name:"Headless UI",install:"npm install @headlessui/vue --save-dev",packages:["@headlessui/vue"],files:{}},heroicons:{checked:!0,name:"Heroicons",install:"npm install @heroicons/vue --save-dev",packages:["@heroicons/vue"],files:{}},prism:{checked:!0,name:"Prism.js",install:"npm install prismjs vite-plugin-prismjs @types/prismjs prism-theme-vars --save-dev",packages:["prismjs","vite-plugin-prismjs","@types/prismjs","prism-theme-vars"],files:{vvPrism:{name:"VvPrism.vue",checked:!0,path:"/src/components/vv/elements/",src:Ee()},prismThemeVarsCss:{name:"prism-theme-vars.css",checked:!0,path:"/src/css/",src:xe()},VvPrismVars:{name:"VvPrismVars.vue",checked:!0,path:"/src/components/vv/elements/",src:Ie()},vvPrismTestJs:{name:"VvPrism.test.js",checked:!0,path:"/tests/components/vv/elements/",src:ot()},vvPrismVarsTestJs:{name:"VvPrismVars.test.js",checked:!0,path:"/tests/components/vv/elements/",src:rt()}}},vitest:{}},i=z;i.fontawesome=S;i.faPro=F;i.vitest=c;let p=z;p.fontawesome=T;p.faPro=B;p.vitest=j;const ut={stacks:{vueTwViteTs:{name:u.vueTwViteTs,files:{...m,...it},deps:{...i},compos:{...f}},vueTwViteSsgMdTs:{name:u.vueTwViteSsgMdTs,files:{...m,...pt},deps:{...p},compos:{...f}}}};export{ut as c};
