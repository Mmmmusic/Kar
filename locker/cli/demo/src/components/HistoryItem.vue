<template>
  <li class="historyitem"></li>
  <h3>{{item.title}}</h3>
  <img v-if="item.img" :src="item.img" alt="">
  <p>{{item.year}}/{{item.month}}/{{item.day}}</p>
</template>

<script>
export default {
props:{
  item:Object
}
}
</script>

<style scoped>


</style>
