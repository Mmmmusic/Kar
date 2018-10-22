// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import c1 from './c1' // 引入组件配置项
import c2 from './c2' // 引入组件配置项

import router from "vue-router"
Vue.use(router);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template:`
    <router-view></router-view>
  `,
  router:new router({
    routes:[{
      path:'/',
      component:c1
    },{
      path:'/c2',
      component:c2
    }]
  })
})
