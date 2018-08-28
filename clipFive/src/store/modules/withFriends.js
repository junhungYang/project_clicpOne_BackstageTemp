import Vue from 'vue'
const state = {
  showState: false,
  contMod: 0,
  chatListState: "active",
  favListState: "active",
  inChat: '',
  inFav: ''
}

const getters = {

}

const mutations = {
  showStateChange(state) {
    state.showState = !state.showState
  },
  changeMod(state, payload) {
    state.contMod = payload
  },
  backToChatList(state, payload) {
    if (state.contMod === 0) {
      state.chatListState = "active";
      state.inChat = ''
    } else if (state.contMod === 1) {
      state.favListState = "active";
      state.inFav = ''
    }
  },
  moveToChatWin(state, payload) {
    if (state.contMod === 0) {
      state.chatListState = "";
      state.inChat = 'active'
    } else if (state.contMod === 1) {
      state.favListState = "";
      state.inFav = 'active'
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
