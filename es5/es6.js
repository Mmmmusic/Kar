var app = new Vue({

  el:"#app",
  data:{
    info:"",
    msg:["45","asd","qwe"],
    flag:true
  },
  computed:{
    search(){
      if(this.info){
        return this.msg.filter((msg)=>{
          return msg.includes(this.info);
        })
      }
    }
  }
 
});