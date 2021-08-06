import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      account: '',
      name: '',
      password: '',
      phone: ''
    }
  },
  mutations: {
    setAccount(state, account) {
      state.info.account = account
    },
    setPassword(state, password) {
      state.info.password = password
    },
    setPhone(state, phone) {
      state.info.phone = phone
    },
  },
  actions: {
  },
  modules: {
  }
})
