<template>
  <div>
    <ul class="list">
      <li v-for="item in artists" @click="$router.push('/songs/'+item.id+'/'+item.name)">
        <img :src="item.img1v1Url" alt="">
        <span>{{item.name}}</span>
      </li>
    </ul>
    <toTop></toTop>
  </div>
</template>

<script>
  
export default{
  data(){
    return{
      artists:[],
    }
  },
  created(){
    // 数据请求到之前给用户提示
    this.$loading.show("正在加载,请稍等...");
    this.$ajax("http://musicapi.leanapp.cn/artist/list?cat=1001").then((res)=>{
      this.artists = JSON.parse(res).artists;
      console.log(this.artists);
      // 请求完成后 取消提示
      this.$loading.hide();
    });
  }
}

</script>

<style>

</style>