<!-- 表现层 -->
<template>
  
  <!-- 顶层元素 -->
  <div>

    <h1 @click="cl">hello</h1>
    
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
        msg:""
      }
    },
    methods:{
      cl(e){
        e.target.style.color = "red"
      }
    }
  }

</script>

<!-- 修饰层 -->
<style></style>