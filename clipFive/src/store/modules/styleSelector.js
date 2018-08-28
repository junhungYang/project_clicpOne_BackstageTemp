const state = {
  layoutStyle: "wide",
  orientation: "default",
  headerStyle: "fixed",
  footerStyle: "default",
  bgColor: "bgColor2",
  navColor: "navColor0"
}

const getters = {

}

const mutations = {
  layoutChange(state, payload) {
    state.layoutStyle = payload
    console.log(payload)
  },
  headerChange(state, payload) {
    console.log(payload)
    state.headerStyle = payload
  },
  footerChange(state, payload) {
    state.footerStyle = payload
    console.log(payload)
  },
  orienChange(state, payload) {
    console.log(payload)
    state.orientation = payload
  },
  bgColorChange(state, payload) {
    state.bgColor = `bgColor${payload}`
    console.log(state.bgColor)
  },
  navColorChange(state, payload) {
    state.navColor = `navColor${payload}`
  },
  styleInit(state, payload) {
    state.layoutStyle = payload.layoutStyle;
    state.headerStyle = payload.headerStyle;
    state.footerStyle = payload.footerStyle;
    state.orientation = payload.orientation;
    state.bgColor = payload.bgColor;
    state.navColor = payload.navColor;
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
