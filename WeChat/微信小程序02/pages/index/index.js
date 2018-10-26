//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    res:""
  },
  scan(){
    wx.scanCode({
      success:res=>{
        this.setData({
          res:JSON.stringify(res)
        })
      }
    })
  },
  alert(){
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000,
    //   mask:true
    // })
    // wx.showLoading({
    //   title: '加载中',
    // })

    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

  },
  onPullDownRefresh(){
    console.log("hello")
  },
  onPageScroll(obj){

  },
  onShareAppMessage(Object){
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  },
  tap(e){
    console.log(e)
  }
})
