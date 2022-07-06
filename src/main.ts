import { createApp } from 'vue'
import type { InjectionKey } from 'vue'
import App from './App.vue'
import router from './router/appRouter.js'
import appGlobals from './globals'
import appVv from './app.vv'
import './css/tailwind.css'


const app = createApp(App)

const vv = Symbol() as InjectionKey<typeof appVv>
// app.provide(vv, appVv)

const globals = Symbol() as InjectionKey<typeof appGlobals>
app.provide(globals, appGlobals)

app.use(router)

app.mount('#app')
