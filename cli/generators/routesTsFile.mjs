// ./cli/generators/routesTsFile.mjs

export default function () {

const output = `// ./src/router/routes.ts

import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import NotFound404 from '../pages/NotFound404.vue'

const router = createRouter({

    history: createWebHistory(),

    routes: [

        // Unauthenticated User Pages
        { path: '/', name: 'Home', component: Home },

        // Route Catchall
        { path: '/:pathMatch(.*)*', component: NotFound404 },

    ],

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        left: 0,
                        top: 0,
                        behavior: 'smooth',
                    })
                }, 500)
            })
        }
    },

})

export default router

`

return output

}
    