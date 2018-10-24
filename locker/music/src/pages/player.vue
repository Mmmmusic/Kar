<template>
  <div>
    
    <audio controls :src="url" @play="play" @pause="pause" id="tog"></audio>
    <div class="imgBox">
      <img :src="imgUrl" alt="">
    </div>

    <div class="lyricBox">
      <div class="rot" :style="{transform:'rotate('+x+'deg)'}" @click="toggle">
        <img :src="imgUrl" alt="">
      </div>
      <div class="lyric">暂无歌词</div>
    </div>

  </div>
</template>

<script>

export default{

  data(){
    return{
      url:"",
      imgUrl:"",
      x:0,
      timer:null,
      flag:false,
    }
  },
  // props:["imgUrl"],
  created(){
    this.$loading.show("歌曲正在加载...");
    this.$ajax("http://musicapi.leanapp.cn/song/detail?ids="+this.$route.params.id).then((res)=>{
      this.imgUrl = JSON.parse(res).songs[0].al.picUrl;
    console.log(this.imgUrl)
    });

    // 请求歌曲
    this.$emit("update:title","歌曲名："+this.$route.params.name);
    this.$ajax("http://musicapi.leanapp.cn/music/url?id="+this.$route.params.id).then((res)=>{
    this.url=JSON.parse(res).data[0].url;
    this.$loading.hide();
    // console.log(this.imgUrl)
    });

  },
  methods:{
    play(){
      clearInterval(this.timer);
      this.timer = setInterval(()=>{
        this.x+=0.2;
        if(this.x > 360){
          this.x = 0;
        }
      },16.7);
    },
    pause(){
      clearInterval(this.timer);
    },
    // 图片切换
    toggle(){
      this.flag =! this.flag;
      if(this.flag){
        tog.play();
      }else{
        tog.pause();
      }
      console.log(this.flag)
    }
  }
}

</script>

<style>
  
  

</style>