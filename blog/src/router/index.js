import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pymes from '../views/pymes.vue'
import musica from '../views/musica.vue'
import viajes from '../views/viajes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pymes',
    name: 'pymes',
    component: pymes
  },
  {
    path: '/musica',
    name: 'musica',
    component: musica
  },
  {
    path: '/viajes',
    name: 'viajes',
    component: viajes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
