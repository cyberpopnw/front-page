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
        }
    },
    {
        name: 'download',
        path: '/download',
        component: () => import('../views/download/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'privacy',
        path: '/privacy',
        component: () => import('../views/privacy/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'terms',
        path: '/terms',
        component: () => import('../views/terms/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'mining',
        path: '/mining',
        component: () => import('../views/mining/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'mystery',
        path: '/mystery',
        component: () => import('../views/mystery/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name:'details',
        path:'/details',
        component: () => import('../views/details/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'cyberspace',
        path: '/cyberspace',
        component: () => import('../views/cyberspace/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'knapsack',
        path: '/knapsack',
        component: () => import('../views/assets/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'vote',
        path: '/vote',
        component: () => import('../views/vote/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'space',
        path: '/space',
        component: () => import('../views/space/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'IPshielding',
        path: '/IPshielding',
        component: () => import('../views/IPshielding/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to , from, next) => {
//     let realId = localStorage.getItem('realIdLocal');
//     if( to.matched.some( record => record.meta.requiresAuth ) ){
//         if( !realId ){
//             return
//         }else{
//             next();
//         }
//     }else{
//         next();
//     }
// })


export default router
