import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch () {
    const arr = []
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'localStorage:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr
  }
}
export const store = new Vuex.Store({
  state: {
    show: false,
    boardItems: storage.fetch()
  },
  mutations: {
    change (state) {
      this.state.show = !state.show
    },
    addOneBoard (state, boardItem) {
      const obj = {index: '', content: boardItem}
      localStorage.setItem(boardItem, JSON.stringify(obj))
      state.boardItems.push(obj)
    },
    removeOneBoard (state, payload) {
      localStorage.removeItem(payload.boardItem.content)
      state.boardItems.splice(payload.index, 1)
    }
  }
})
