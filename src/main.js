// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from "vuex"
import FastClick from 'fastclick'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(vuex)

// 消除 click 移动浏览器300ms延迟
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})





/**
 *  备注
 * 1. 如果是请求本地文件，则需要将json 等文件放在static目录下；https://segmentfault.com/q/1010000009191984?_ea=1848109
 *
 *
 *
 *
 *
 *
 *
 *
 *
*/
