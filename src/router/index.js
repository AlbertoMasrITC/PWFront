import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeCategoria from '../views/HomeCategoria.vue'
import HomePersona from '../views/HomePersona.vue'
import AgregarCategoria from '../views/AgregarCategoria'
import AgregarPersona from '../views/AgregarPersona'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Categorias',
    name: 'HomeCategoria',
    component: HomeCategoria
  },
  {
    path: '/Personas',
    name: 'HomePersona',
    component: HomePersona
  },
  {
    path: '/AgregarCategoria',
    name: 'AgregarCategoria',
    component: AgregarCategoria
  },
  {
    path: '/AgregarPersona',
    name: 'AgregarPersona',
    component: AgregarPersona
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
