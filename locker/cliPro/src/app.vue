<template>
  
  <!-- 要有唯一顶层元素 -->
  <div>
    <h1 @click="cl">App.vue</h1>
    <hr>
    <em>我是 info.js</em>
    <h3>name: {{name}}</h3>
    <h3>age: {{age}}</h3>
    <hr>
    <emm></emm>
    <hr>
    <router-link to="/">emm</router-link>
    <router-link to="/c1">c1</router-link>
    <router-view></router-view>

  </div>

</template>

<script>

  // 引入info组件配置项
  import info from "./info.js"
  // 引入em组件配置项
  import emm from "./emm"

  export default{
    data(){
      return{
        msg:"hi",
        ...info // 展开info.js
      }
    },
    methods:{
      cl(e){
        e.target.style.color = "#e0244d"
      }
    },
    components:{
      emm // 注册为局部组件
    }
  }

</script>

<!-- style标签加上scoped属性,css样式只对当前组件生效 -->
<style scoped>

  h1{
    color: #333439;
  }

</style>