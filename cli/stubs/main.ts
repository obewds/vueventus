import { createApp } from 'vue'
import App from './App.vue'
import appVv from './app.vv'
import './css/tailwind.css'
import './fontawesome'
import './gsap'


const app = createApp(App)

app.provide('vv', appVv)

app.mount('#app')
