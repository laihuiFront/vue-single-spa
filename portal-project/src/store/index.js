import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      name: '123'
    }
  },
  mutations: {
    setName(state, data) {
      state.account.name = data
      window.Publisher && window.Publisher.emit('account', {...state.account})
    }
  },
  getters: {
    account: state => state.account,
    name: state => state.account.name
  },
  actions: {
  },
  modules: {
  }
})
