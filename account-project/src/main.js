import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/index.scss'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const vueOptions = {
  el: "#account-app-test",
  router,
  store: store,
  render: h => h(App)
}

console.log(vueOptions)


if (!window.singleSpaNavigate) { // 如果不是single-spa模式
  delete vueOptions.el;
  new Vue(vueOptions).$mount('#app');
}


const vueLifeCycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})

// export const bootstrap = vueLifeCycles.bootstrap // 启动时
// export const mount = vueLifeCycles.mount // 挂载时
// export const unmount = vueLifeCycles.unmount // 卸载时

export const bootstrap = [
  () => {
    return new Promise((resolve, reject) => {
      //注册事件
      window.addEventListener('account', obj => {
        store.commit('setAccount', obj.data)
      })
      resolve();
    });
  },
  vueLifeCycles.bootstrap,
]

export const mount =  [
  () => {
    return new Promise((resolve, reject) => {
      //获取订阅事件
      window.Publisher.getEvent('account')
      resolve();
    });
  },
  vueLifeCycles.mount,
]

export const unmount = [
  vueLifeCycles.unmount,
]

export default vueLifeCycles
