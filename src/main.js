import { createApp, provide } from 'vue'
import router from '@/router/appRouter.js'
import App from './App.vue'
import globals from '@/globals.js'
import './css/tailwind.css'

const app = createApp(App)

app.use(router)

app.provide('globals', globals)

app.mount('#app')
