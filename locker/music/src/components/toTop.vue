<template>
    <div class="toTop" @click="toTop" v-show="flag">
        <p>返回<br>顶部</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                flag:false
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
                document.body.scrollTop=0
                document.documentElement.scrollTop=0
            }
        }
    }
</script>
<style>
    
</style>