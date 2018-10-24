// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from "./plugins/ajax.js";

import axios from "axios";

Vue.prototype.$axios=axios;

Vue.use(ajax);


import "./plugins/mock_config.js";

// 引入mock.js
// var Mock=require("./plugins/mock.js").Mock;

// Mock.mock("/getData","123");

// console.log(Mock);








Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
