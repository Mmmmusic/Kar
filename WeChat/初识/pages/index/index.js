// const app=getApp();
Page({
  onLoad(options){
    console.log(options);
  },
  data:{//页面私有状态
    msg:"hello"
  },
  tap(){
    // console.log(this.data.msg)//获取data数据
    this.setData({//修改data数据
      msg:"world"
    })
  }
})