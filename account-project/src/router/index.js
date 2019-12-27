import Vue from 'vue'
import VueRouter from 'vue-router'
import Role from '../views/role.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/role'
}, {
    path: '/role',
    name: 'role',
    component: Role
  },
  {
    path: '/staff',
    name: 'staff',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/staff.vue')
  }
]

const router = new VueRouter({
  base: '/account/',
  routes
})

export default router
