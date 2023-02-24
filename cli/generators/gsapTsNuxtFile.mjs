// ./cli/generators/gsapTsNuxtFile.mjs

export default function () {

const output = `// ./plugins/gsap.js
// https://greensock.com/docs/v3/Installation?checked=core#modules

import { gsap } from 'gsap'

// import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
// import { CustomEase } from 'gsap/CustomEase'
// import { CustomBounce } from 'gsap/CustomBounce'
// import { CustomWiggle } from 'gsap/CustomWiggle'
// import { Draggable } from 'gsap/Draggable'
// import { EaselPlugin } from 'gsap/EaselPlugin'
// import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack'
// import { InertiaPlugin } from 'gsap/InertiaPlugin'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
// import { Observer } from 'gsap/Observer'
// import { PixiPlugin } from 'gsap/PixiPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { TextPlugin } from 'gsap/TextPlugin'


export default defineNuxtPlugin(() => {
    
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    // if (process.client) {
    //   gsap.registerPlugin(Draggable)
    // }

    return {
        provide: {
            gsap,
            ScrollToPlugin,
            ScrollTrigger,
        }
    }
})

`

return output
    
}
