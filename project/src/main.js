// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/common/reset.css'


Vue.config.productionTip = false

// var $https = axios.create({
//   baseURL: 'http://vue.studyit.io/',
// });
Vue.prototype.$https = axios

new Vue({
  el: '#app',
  router: router,
  render:c=>c(App)
})
