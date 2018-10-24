<template>
  <div id="app">
    <img src="./assets/logo.png">
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary" :loading="flag">加载中</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{  
      value1:"",
      flag:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
