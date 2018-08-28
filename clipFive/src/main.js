// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/css/bootstrap.min.css'
import '../static/fontReset.css'
import '../static/transition.css'
import '../mock/index'
import './chatHistoryStorage/chatStorage'
import {
  store
} from './store/store'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store: store
})
