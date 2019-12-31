import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      name: ''
    }
  },
  mutations: {
    setAccount(state, data) {
      state.account = data
    }
  },
  getters: {
    name: state => state.account.name
  },
  actions: {
  },
  modules: {
  }
})
