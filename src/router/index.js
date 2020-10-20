import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index')
  },
  {
    path: '/storage',
    name: 'storage',
    component: () => import('../views/storage')
  },
  {
    path: '/list',

    component: () => import('../views/list')
  },
  {
    path: '/new',
    component: () => import('../views/new')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
