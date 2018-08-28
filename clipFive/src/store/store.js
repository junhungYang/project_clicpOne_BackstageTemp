import Vue from "vue";
import Vuex from "vuex";
import header from './modules/header'
import withFriends from './modules/withFriends'
import nav from './modules/nav'
import dashboard from './modules/dashboard'
import styleSelector from './modules/styleSelector'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    modalDisplay: 'none',
    mainRender: true
  },
  mutations: {
    modalDisChange(state, payload) {
      state.modalDisplay = payload
    },
    noRender(state) {
      state.mainRender = false
    }
  },
  modules: {
    header,
    withFriends,
    nav,
    dashboard,
    styleSelector
  },
});
