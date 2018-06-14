// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/css/common.styl'

// 这个东西有点坑啊，全局引用，就整个项目引用了，还得在样式里控制一开始不显示，难道不能单文件引入吗？
// import pdf from '@/plugins/pdf'
// Vue.use(pdf)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
