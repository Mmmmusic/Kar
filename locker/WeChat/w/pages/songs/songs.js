// pages/songs/songs.js
Page({
  onLoad(options){
    console.log(options)
    wx.request({
      url: 'http://musicapi.leanapp.cn/artists?id='+options.id,
      success:res=>{
        this.setData({
          songList:res.data.hotSongs
        })
      }
    })
    this.setData({
      singer:options.singer
    })
  },
  data: {
    songList: [],
    singer: ""
  },
})