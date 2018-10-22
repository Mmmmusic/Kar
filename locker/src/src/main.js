// 入口文件
import Vue from 'vue'
// 引入router
import c1 from './c1'
import c2 from './c2'

import router from 'vue-router'
Vue.use(router);

new Vue({
  el: '#app',
  template:`
    <div>
      <router-view></router-view>
    </div>
  `,
  router:new router({
    routes:[{
      path:'/',
      component:c1,
    },{
      path:'/c2',
      component:c2
    }]
  })
})
