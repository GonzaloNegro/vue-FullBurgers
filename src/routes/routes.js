import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Registrarse from '../pages/Registrarse.vue'
import Login from '../pages/Login.vue'
import Cart from '../pages/Cart.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registrarse',
        component: Registrarse
    },
    {
        path: '/cart',
        component: Cart
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router