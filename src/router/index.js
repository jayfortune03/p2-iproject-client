import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import( '../views/loginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import( '../views/registerPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
