<template>
  <div id="app">
      <button @click="c='c1'">c1</button>
      <button @click="c='c2'">c2</button>
      <component :is="c"></component>

      <button @click="send">getData</button>

  </div>
</template>

<script>
// import c1 from "./components/c1";
// import c2 from "./components/c2";

// let c1=() => import('./components/c1.vue');
// let c2=() => import('./components/c2.vue');

import loading from "./components/loading";

let c1=()=>({
  component:import("./components/c1.vue"),
  loading,
  delay:0
})
let c2=()=>({
  component:import("./components/c2.vue"),
  loading,
  delay:0
})




export default {
  name: 'App',
  data(){
    return{
      c:"c1"
    }
  },
  components:{c1,c2},
  methods:{
    send(){
      this.$ajax("/getData").then((res)=>{
        console.log(res)
      })
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
