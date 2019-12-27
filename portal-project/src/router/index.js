import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const appConfig = require('../config/appConfig.json')

const routes = appConfig.map(config => ({
  path: `/${config.appName}`,
  name: config.appName,
  component: () => import(/* webpackChunkName: "portal" */ `../components/${config.appName}`)
}))

routes.unshift({
  path: '/',
  redirect: '/account#/role'
})

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
