import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from '../views/config.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/config'
}, {
    path: '/config',
    name: 'config',
    component: Config
  }, {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/list.vue')
  }
]

const router = new VueRouter({
  base: '/account/',
  routes
})

export default router
