// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import elementui from "element-ui";//引入js
import 'element-ui/lib/theme-chalk/index.css';//引入全局样式

Vue.use(elementui);
// import { DatePicker} from "element-ui";

// Vue.component(DatePicker.name, DatePicker);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
