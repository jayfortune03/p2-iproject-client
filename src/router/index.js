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
  {
    path: '/diagnose',
    name: 'Diagnose',

    component: () => import( '../views/diagnosePage.vue')
  },
  {
    path: '/medicine',
    name: 'Medicine',

    component: () => import( '../views/medicinePage.vue')
  },
  {
    path: '/about',
    name: 'About Us',

    component: () => import( '../views/aboutPage.vue')
  },
  {
    path: '/profile',
    name: 'My Profile',

    component: () => import( '../views/profilePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let access_token = localStorage.getItem(`access_token`)

  let authPages = to.path === `/login` || to.path === `/register`

  if (!access_token && to.name === `My Profile`) {
    next({ path: `/login` })
  } else if (access_token && authPages) {
    next({ path: `/` })
  } else {
    next()
  }
})

export default router
