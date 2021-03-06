import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list_pokemon from '../views/list_pokemon.vue'
import Carateres from '../views/carateres.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import PageNotFound from '../views/PageNotFound.vue'



Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/list_pokemon',
        component: list_pokemon
    },
    {
        path: '/carateres',
        name: Carateres,
        component: Carateres
    },
    {
        path: '/signup',
        component: signup
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '*',
        component: PageNotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router