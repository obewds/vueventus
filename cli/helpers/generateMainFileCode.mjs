// ./cli/helpers/generateMainFileCode.mjs

export default function (optsObj) {

    const opts = {
        path: './src/main.ts',
        faFree: optsObj && optsObj.faFree ? optsObj.faFree : false,
        faPro: optsObj && optsObj.faPro ? optsObj.faPro : false,
        gsap: optsObj && optsObj.gsap ? optsObj.gsap : false,
    }

    let fontAwesomeLine = ''

    if (opts.faPro === true || opts.faFree === true) {
        if (opts.faFree === true) {
            fontAwesomeLine = "import './fontawesome'"
        }
        if (opts.faPro === true) {
            fontAwesomeLine = "import './fontawesomePro'"
        }
    }

    let gsapLine = ''

    if (opts.gsap === true) {
        gsapLine = "import './gsap'"
    }

const output = `// ${opts.path}

import { createApp } from 'vue'
import App from './App.vue'
import appVv from './app.vv'
import './css/tailwind.css'
${gsapLine}
${fontAwesomeLine}


const app = createApp(App)

app.provide('vv', appVv)

app.mount('#app')
`

    return output
    
}

