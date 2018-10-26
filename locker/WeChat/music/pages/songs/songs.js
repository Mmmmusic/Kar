// pages/songs/songs.js
Page({
  data:{
    songList:[]
  },
  onLoad(options){
    wx.request({
      url: 'http://musicapi.leanapp.cn/artists?id='+options.id,
      success:res=>{
        this.setData({
          songList:res.data.hotSongs
        })
      }
    })
  }
})