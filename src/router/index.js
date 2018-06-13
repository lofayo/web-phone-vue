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
import printerView from '@/views/printerView'
import mobilePosView from '@/views/mobilePosView'
import deskCheckView from '@/views/deskCheckView'
import resourceView from '@/views/resourceView'
import article1View from '@/views/article1View'
import article2View from '@/views/article2View'
import article3View from '@/views/article3View'
import article4View from '@/views/article4View'
import article5View from '@/views/article5View'
import article6View from '@/views/article6View'
import accessView from '@/views/accessView'
import serviceView from '@/views/serviceView'
import payView from '@/views/payView'
import solutionView from '@/views/solutionView'
import allInOneView from '@/views/allInOneView'
import previewPdfView from '@/views/previewPdfView'


import hardwareComponent from '@/components/hardwareComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
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
  }, {
    path: '/news',
    component: newsView
  }, {
    path: '/joinUs',
    component: joinUsView
  }, {
    path: '/printer',
    component: printerView
  }, {
    path: '/mobilePos',
    component: mobilePosView
  }, {
    path: '/deskCheck',
    component: deskCheckView
  }, {
    path: '/resource',
    component: resourceView
  }, {
    path: '/article1',
    component: article1View
  }, {
    path: '/article2',
    component: article2View
  }, {
    path: '/article3',
    component: article3View
  }, {
    path: '/article4',
    component: article4View
  }, {
    path: '/article5',
    component: article5View
  }, {
    path: '/article6',
    component: article6View
  }, {
    path: '/access',
    component: accessView
  }, {
    path: '/service',
    component: serviceView
  }, {
    path: '/pay',
    component: payView
  }, {
    path: '/solution',
    component: solutionView
  }, {
    path: '/allInOne',
    component: allInOneView
  }, {
    path: '/previewPdf/:id(.+)',
    component: previewPdfView
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
