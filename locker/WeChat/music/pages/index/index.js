//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    list:[]
  },
  onLoad(options){

    wx.request({
      url: 'http://musicapi.leanapp.cn/artist/list?cat=1001',
      success:res=>{
        
          this.setData({
            list: res.data.artists
          })

      }
    })

  }
})
