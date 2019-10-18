import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Myself from '../views/Myself.vue'
import Href from '../views/Href.vue'
import App from '../App.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Myself',
    name: 'Myself',
    component: () => import(/* webpackChunkName: "about" */ '../views/Myself.vue')

  },
  {
    path: '/Href',
    name: 'Href',
    component: Href
  },
  {
    path: '/APP',
    name: 'App',
    component: App
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
