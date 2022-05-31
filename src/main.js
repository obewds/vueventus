import { createApp } from 'vue'
import router from '@/router/appRouter.js'
import App from './App.vue'
import './css/tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
