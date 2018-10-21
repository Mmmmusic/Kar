<template>
  <div class="history">
    <HistoryDate></HistoryDate>
    <HistoryList :list="list"></HistoryList>
  </div>
</template>

<script>
// 引入date和list
import HistoryDate from './HistoryDate'
import HistoryList from './HistoryList'

export default {
 components:{
  HistoryList,
  HistoryDate,
 },
 data(){
  return {
    list:[]
  }
 }
}
</script>

<style scoped>


</style>
