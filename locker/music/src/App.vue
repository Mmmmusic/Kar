<template>
  <div class="wrapper">
    <div class="headBox">
      <div id="head"><span id="back" @click="$router.go(-1)">返回</span>{{title}}</div>
    </div>
    <!-- <router-view :title.sync="title" :imgUrl.sync="imgUrl"></router-view> -->
    <!-- <router-view :title.sync="title" @cha="imgUrl=arguments[0]" :imgUrl="imgUrl"></router-view> -->
    <router-view :title.sync="title"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"华语男歌手",
      // imgUrl:""
    }
  },
  created(){
    title:"华语男歌手";
  },
  watch:{
    $route(to,from){
      if(to.path == "/"){
        this.title = "华语男歌手";
        this.$router.go(0);
      }
      console.log(to);
    }
  }
}
</script>

<style>

</style>
