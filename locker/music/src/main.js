import Vue from 'vue'
import App from './App'
import router from './router'

// 引入loading插件
import loading from "./plugns/loading.js";
Vue.use(loading);
// 引入ajax插件
import ajax from "./plugns/ajax.js";
Vue.use(ajax);

// 注册返回顶部为全局组件
import toTop from "./components/toTop";
Vue.component("toTop",toTop);

// 注册歌手列表为全局组件
import singerList from "./components/singerList";
Vue.component("singerList",singerList);

// 引用全局css样式
import "./plugns/style.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
