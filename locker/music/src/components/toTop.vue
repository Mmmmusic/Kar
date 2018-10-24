<template>
    <div class="toTop" @click="toTop" v-show="flag">
        <p>返回<br>顶部</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                flag:false,
                st:null
            }
        },
        created(){
            window.addEventListener("scroll",()=>{
                var st=document.body.scrollTop||document.documentElement.scrollTop;
                
                    this.flag=st>100;
                
            })
        },
        methods:{
            toTop(){
                this.st=document.body.scrollTop||document.documentElement.scrollTop;
                this.st&&window.scrollBy(0,-this.st/9.8);
                this.st&&requestAnimationFrame(this.toTop);
            }
        }
    }
</script>
<style>
    
</style>