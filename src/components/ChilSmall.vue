<template>
  <div class="chilSmall">
    我是 chilSmall 子组件
  </div>
</template>

<script>
  import vm from "@/event.js";
  export default {
    name: "chilSmall",
    created(){
      vm.$on('tofathebrother', (mes) => {
        console.log(mes,'chilSmall') // 接收
      });
    },
    methods:{
      small(){
        // console.log(' 我是 chilSmall 子组件 de方法')
      }
    }

  }
</script>

<style scoped>
.chilSmall{
  color: lightcoral;
}
</style>
