import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: dashboard,
  }, {
    path: '/dashboard',
    component: dashboard,
  }, {
    path: '/login',
    components: {
      'login': login
    }
  }],
  mode: 'history' //url中不出现'#'号
})
