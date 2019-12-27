import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import '../scss/index.scss'
import './config/single-spa-config.js'

Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 })

window.store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
