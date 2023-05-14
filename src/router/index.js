import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Pricing from '../views/Pricing.vue'
import UseCases from '../views/UseCases.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import SingUp from '../views/SingUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/use-cases',
            name: 'use-cases',
            component: UseCases
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: Pricing
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sing-up',
            name: 'sing-up',
            component: SingUp
        }
    ]
})

export default router