import Vue from 'vue'
import Router from 'vue-router'
import homeView from '@/views/homeView'
import contactUsView from '@/views/contactUsView'
import customerView from '@/views/customerView'
import likeAppleView from '@/views/likeAppleView'
import introduceView from '@/views/introduceView'
import partnerView from '@/views/partnerView'
import newsView from '@/views/newsView'
import joinUsView from '@/views/joinUsView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/joinUs'
  }, {
    path: '/home',
    component: homeView
  }, {
    path: '/contactUs',
    component: contactUsView
  }, {
    path: '/customer',
    component: customerView
  }, {
    path: '/likeApple',
    component: likeAppleView
  }, {
    path: '/introduce',
    component: introduceView
  }, {
    path: '/partner',
    component: partnerView
  },{
    path: '/news',
    component: newsView
  },{
    path: '/joinUs',
    component: joinUsView
  }]
})
