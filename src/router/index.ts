import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/home/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('../views/about/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'support',
        path: '/support',
        component: () => import('../views/support/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'xplan',
        path: '/xplan',
        component: () => import('../views/xplan/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
