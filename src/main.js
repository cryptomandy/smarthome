// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from "vuex"
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'
import VueDND from 'awe-dnd'
import vueKanban from 'vue-kanban' //分类列表


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(vuex)
Vue.use(VueDND)
Vue.use(vueKanban)

// 消除 click 移动浏览器300ms延迟
FastClick.attach(document.body)

/* eslint-disable no-new */
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