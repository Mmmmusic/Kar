<template>
  <ul class="historylist">
    <HistoryItem v-for="item in list" :key="item.title" :item="item"></HistoryItem>
  </ul>
</template>

<script>
// 引入item的配置对象
import HistoryItem from './HistoryItem'

export default {
 // 局部注册
 components:{
  HistoryItem
 },
 props:{
  list:Array
 }
}
</script>

<style scoped>


</style>
