// pages/player/player.js
Page({

  onLoad(options){
    console.log(options)
    this.setData({//歌曲名
      name:options.name,
      singer:options.singer
    })
    wx.request({//获取歌曲路径
      url: 'http://musicapi.leanapp.cn/music/url?id='+options.id,
      success:res=>{
        this.setData({
          src:res.data.data[0].url
        })
      }
    })
  },
  data: {
    src:"",
    name:"",
    singer:""
  },
  cl(){
    console.log(this.data.name,this.data.singer);
  }
  
})