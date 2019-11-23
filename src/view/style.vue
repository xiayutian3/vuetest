<template>
  <div class="wrap">
    <h3>我是style页面</h3>
<!--    <div class="a" :style="{backgroundImage:`url('${imgUrl}')`}"></div>-->

<!--    //也可以这种-->
<!--    <div class="a" :style="{backgroundImage:'url('+require('../assets/logo.png')+')'}"></div>-->
<!--    还可以这种-->
    <div class="a" :style="{backgroundImage:'url('+require('@/assets/logo.png')+')'}"></div>
  </div>
</template>

<script>
  export default {
    name: "h-style",
    data(){
      return{
        imgUrl:require('../assets/logo.png')
      }
    }
  }
</script>

<style lang="less" scoped>
.wrap{
  .a{
    width: 100px;
    height: 50px;
    background-size: 100% 100%;
  }
}
</style>
