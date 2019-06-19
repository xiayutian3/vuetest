<template>
  <div class="chilLarge">
   <div class="text" @click="open"> 我是 chilLarge 子组件</div>
    <InnerLarge/>
  </div>
</template>

<script>
  import InnerLarge from "./InnerLarge"
  export default {
    name: "chilLarge",
    methods:{
      open(){
        this.$emit('open','chilLarge调用父组件')
        console.log('我是 chilLarge 子组件 的方法')
      }
    },
    components:{
      InnerLarge
    }
  }
</script>

<style scoped>
.chilLarge{
  color: lawngreen;
}
</style>
