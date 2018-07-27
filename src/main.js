// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import store from "./store/store";
import lazyLoad from "vue-lazyload";
import FastClick from "fastclick";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(lazyLoad, {
    error: "",
    loading: require("./images/loading.jpg") //require导入图片
});

// 消除 click 移动浏览器300ms延迟
FastClick.attach(document.body);

/**
 * @params store 可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
 *
 * */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});

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
