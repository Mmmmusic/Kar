// 路由配置项提取到 router.js

// 引入组件配置项
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

// 页面级组件
import emm from "./emm";
import c1 from "./c1";

// 暴露对象
export default new VueRouter({
  routes:[{
    path:"/",
    component:emm
  },{
    path:"/c1",
    component:c1
  }]
})


