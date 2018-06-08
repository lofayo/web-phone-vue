import Vue from 'vue'
import Router from 'vue-router'
import homeView from '@/views/homeView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: homeView
  }]
})
