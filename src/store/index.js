import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

// 现在整个store中定义所有的全局状态值，以及操作数据变化的方法
export default new Vuex.Store({
  state: {
    btnActive: false
  },
  mutations: {
    switchBtn (state) {
      state.btnActive = !state.btnActive
    }
  }
})