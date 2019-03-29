import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    code: ''
  },
  mutations: {
    setCode: (state, payload) => {
      const obj = state
      obj.code = payload
    }
  }
})

export default store
