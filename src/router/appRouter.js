import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        // {
        //     path: '/babayak', name: "BabaYak",
        //     component: () => import('@/views/BabaYak.vue')
        // }
    ],
})

export default router
