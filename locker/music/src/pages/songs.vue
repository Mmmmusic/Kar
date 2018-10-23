<template>
  <div>
    <ul class="list">
      <li v-for="item in songList" @click="cl(item)">
        <img :src="item.al.picUrl" alt="">
        <span>{{item.al.name}}</span>
      </li>
    </ul>
    <toTop></toTop>
  </div>
</template>

<script>
  
export default{
  data(){
    return{
      songList:[],
    }
  },
  created(){
    this.$emit("update:title",this.$route.params.name+"的单曲");    // 数据请求到之前给用户提示
    this.$loading.show("正在加载,请稍等...");
    this.$ajax("http://musicapi.leanapp.cn/artists?id="+this.$route.params.id).then((res)=>{
      this.songList = JSON.parse(res).hotSongs;
      console.log(this.songList);
      // 请求完成后 取消提示
      this.$loading.hide();
    });
  },
  methods:{
    cl(item){
      this.$emit("cha",item.al.picUrl);
      // this.$emit("update:imgUrl",item.al.picUrl);
      this.$router.push('/player/'+item.id+'/'+item.al.name);
    }
  }
}

</script>

<style>
 

</style>