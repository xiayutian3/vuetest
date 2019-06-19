<template>
  <div class="innerLarge"  @click="ge">
    我是 InnerLargeInnerLarge 子组件
  </div>
</template>

<script>
 import vm from "@/event.js";
  export default {
    name: "InnerLarge",
    methods:{
      ge(){
        console.log(11111)
        this.$emit('InnerLarge','InnerLarge调用父——父组件')


        // vm.$emit('tofatherfather','sichaoyun'); //触发事件
        // vm.$emit('tofathebrother','sichaoyun'); //触发事件
      }
    },
  }
</script>

<style scoped>
.innerLarge{
  color: lightseagreen;
}
</style>
