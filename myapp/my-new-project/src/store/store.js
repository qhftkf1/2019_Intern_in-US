import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    show: false
  },
  mutation: {
    change (value) {
      this.show = value
    }
  }
})
