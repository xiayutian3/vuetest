<template>
  <div class="list-wrap">
    <div class="title" @click="handleClick">我是list页面</div>
    <ul class="list" v-show="open">
      <li>1111</li>
      <li>2222</li>
      <li>3333</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "List",
    data(){
      return{
        open:true
      }
    },
    methods:{
      handleClick(){
        this.open = !this.open
      }
    }
  }
</script>

<style lang="less" scoped>
.list-wrap{
  .title{
    cursor: pointer;
  }
  .list{

  }
}
</style>
