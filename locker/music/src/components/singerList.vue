<template>
  <div>
    <ul class="singer">
      <li v-for="item in classify" @click="singer(item)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  
export default{
  data(){
    return{
      artists:[],
      classify:[{id:1001,title:"华语男歌手"},{id:1002,title:"华语女歌手"},{id:1003,title:"华语组合/乐队"},{id:2001,title:"欧美男歌手"},{id:2002,title:"欧美女歌手"},{id:2003,title:"欧美组合/乐队"},{id:6001,title:"日本男歌手"}],
      ifyName:"华语男歌手",
    }
  },
  methods:{
    singer(item){
      this.$loading.show("正在加载,请稍等...");
      this.$emit("update:title",item.title);
      // 数据请求到之前给用户提示
      this.$ajax("http://musicapi.leanapp.cn/artist/list?cat="+item.id).then((res)=>{
        this.artists = JSON.parse(res).artists;
        console.log(this.artists);
        // 请求完成后 取消提示
        this.$loading.hide();
      });
    }
  }
}

</script>

<style>

</style>