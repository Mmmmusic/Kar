Page({
  data:{
    st:20
  },
  scrollTop(){
    // console.log("upper")
  },
  scroll(e){
    // console.log(e.detail.scrollTop)
    this.setData({
      st: e.detail.scrollTop
    })
  },
  toTop(){
    console.log(this.data.st)
    this.setData({
      st:0
    })
  }
})