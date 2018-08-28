import Vue from 'vue'
const state = {
  siteState: {
    show: true,
    if: true
  },
  acqiState: {
    show: true,
    if: true
  },
  taskState: {
    show: true,
    if: true
  },
  usersState: {
    show: true,
    if: true
  },
}

const getters = {

}

const mutations = {
  siteShowManage(state, payload) {
    if (payload === 'v-show') {
      Vue.set(state.siteState, 'show', !state.siteState.show)
    } else {
      Vue.set(state.siteState, 'if', !state.siteState.if)
    }
  },
  acqiShowManage(state, payload) {
    if (payload === 'v-show') {
      Vue.set(state.acqiState, 'show', !state.acqiState.show)
    } else {
      Vue.set(state.acqiState, 'if', !state.acqiState.if)
    }
  },
  taskShowManage(state, payload) {
    if (payload === 'v-show') {
      Vue.set(state.taskState, 'show', !state.taskState.show)
    } else {
      Vue.set(state.taskState, 'if', !state.taskState.if)
    }
  },
  usersShowManage(state, payload) {
    if (payload === 'v-show') {
      Vue.set(state.usersState, 'show', !state.usersState.show)
    } else {
      Vue.set(state.usersState, 'if', !state.usersState.if)
    }
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
