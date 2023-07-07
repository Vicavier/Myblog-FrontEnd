import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    //register and login
    {
        path: '/',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path:'/CV',
        component:()=>import('../views/CVPage.vue')
    },
    {
        path:'/video',
        component:()=>import('../views/VideoPage.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router