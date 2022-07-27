// ./cli/generators/gsapTsFile.mjs

export default function () {

const output = `// ./src/gsap.ts
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

`

return output
    
}
