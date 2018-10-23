import Vue from 'vue'
// 引入配置项
import app from './app'

// 把app组件注册为全局组件
Vue.component("app",app);

// 在入口文件引入路由实例对象 引入的是自己分离出去的router.js
import router from "./router.js";

new Vue({
  el: '#app',
  template:"<app></app>", // 把app组件当做根实例使用
  router
});
