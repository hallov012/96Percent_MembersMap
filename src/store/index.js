import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    members: []
  },
  getters: {
    members: state => state.members
  },
  mutations: {
    CREATE_MEMBER: function (state, member) {
      state.members.push(member)
      console.log(member.local)
      console.log(state.members)
    }
  },
  actions: {
    createMember: function ({ commit }, member) {
      commit('CREATE_MEMBER', member)
    }
  },
  modules: {
  }
})
