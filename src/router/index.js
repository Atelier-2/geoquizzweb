import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Partie from '../views/Partie.vue'
import Derroulement from '../components/Home/Derroulement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/partie',
    name: 'Partie',
    component: Partie
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Derroulement',
    name: 'Derroulement',
    component: Derroulement
  }
]

const router = new VueRouter({
  routes
})

export default router
