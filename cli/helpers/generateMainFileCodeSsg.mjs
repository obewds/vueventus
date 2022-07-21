// ./cli/helpers/generateMainFileCodeSsg.mjs

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
            fontAwesomeLine = "await import('./fontAwesome')"
        }
        if (opts.faPro === true) {
            fontAwesomeLine = "await import('./fontAwesomePro')"
        }
    }

    let gsapLine = ''

    if (opts.gsap === true) {
        gsapLine = "await import('./gsap')"
    }

const output = `// ${opts.path}

import devalue from '@nuxt/devalue'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import routes from 'virtual:generated-pages'
import { useRootStore } from './store/root'
import App from './App.vue'
import appVv from './app.vv'
import './css/tailwind.css'


export const createApp = ViteSSG(
    App,
    { routes },
    async ({ app, router, initialState }) => {

        const pinia = createPinia()
        app.use(pinia)

        app.provide('vv', appVv)

        if (import.meta.env.SSR) {

            // this will be stringified and set to window.__INITIAL_STATE__
            initialState.pinia = pinia.state.value

        } else {

            // on the client side, we restore the state
            pinia.state.value = initialState?.pinia || {}

            ${fontAwesomeLine}
            ${gsapLine}

        }

        router.beforeEach((to, from, next) => {

            const store = useRootStore(pinia)
            store.initialize()
            next()

        })

    },{

        transformState(state) {
            return import.meta.env.SSR ? devalue(state) : state
        },

    },
  
)
`

    return output
    
}

