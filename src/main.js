import { createApp } from 'vue'
import router from '@/router/appRouter.js'
import App from './App.vue'
import globals from '@/globals.js'
import './css/tailwind.css'


// import the mergeWithVvConfig() method
// import your app VueVentus config file
// use the method to merge app configs into default VueVentus configs
import mergeWithVvConfig from './helpers/mergeWithVvConfig.js'
import appVueVentus from './appVueVentus.js'
// const vv = mergeWithVvConfig(appVv)


const app = createApp(App)


// provide the merged configs
app.provide('vv', mergeWithVvConfig(appVueVentus))


app.provide('globals', globals)

app.use(router)

app.mount('#app')
