<!-- 表现层 -->
<template>
  
  <!-- 必须要有一个顶层元素 -->
  <div>
    <input type="text" v-model="msg" autofocus>
    <h1>{{msg}}</h1>
    <router-link to="/">c1</router-link>
    <router-link to="/c2">c2</router-link>
  </div>

</template>

<!-- 行为层 -->
<script>
  
  // 暴露对象
  export default{
    data(){
      return{
        msg:"hi"
      }
    }
  }

</script>

<!-- 修饰层 -->
<style>
  
  h1{
    color: #e0244d;
  }

</style>