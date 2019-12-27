import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/index.scss'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const vueOptions = {
  el: "#salary-app-test",
  router,
  store,
  render: h => h(App)
}

if (!window.singleSpaNavigate) { // 如果不是single-spa模式
  delete vueOptions.el;
  new Vue(vueOptions).$mount('#app');
}

const vueLifeCycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})

export const bootstrap = vueLifeCycles.bootstrap // 启动时
export const mount = vueLifeCycles.mount // 挂载时
export const unmount = vueLifeCycles.unmount // 卸载时


export default vueLifeCycles
