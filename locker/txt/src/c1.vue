<!-- 结构层 -->
<template>
  
  <div>
    <input type="text">
    <button @click="cl">c1</button>
    <c2></c2>
  </div>

</template>

<!-- 行为层 -->
<script>
  
  // 引入组件配置项
  import c2 from "./c2"
  import router from "vue-router"

  // 暴露对象 // export default必须写
  export default{
    data(){
      return{
        msg:"hello"
      }
    },
    methods:{
      cl(){
        alert(this.msg);
      }
    },
    // 注册局部组件
    components:{
      c2
    }
  }
  
</script>

<!-- 修饰层 -->
<style>
  
</style>