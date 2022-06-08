import { createApp } from 'vue'
import router from '@/router/appRouter.js'
import App from './App.vue'
import globals from '@/globals.js'
import mergeWithVvConfig from './helpers/mergeWithVvConfig.js'
import appVv from './app.vv.js'
import './css/tailwind.css'

const app = createApp(App)

app.provide('vv', mergeWithVvConfig(appVv))

app.provide('globals', globals)

app.use(router)

app.mount('#app')
