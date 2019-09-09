<template>
  <div class="parent" >
    <h1>我是父组件</h1>
    <chil-large @open="open"/>
    <chil-small />
    <async-data/>
    <list/>
    <list/>
    <list/>
  </div>
</template>

<script>
  import vm from "@/event.js";
  import List from '@/components/List'
  import ChilLarge from "./ChilLarge"
  import ChilSmall from "./ChilSmall"
  import AsyncData from "./AsyncData"

  export default {
    name: 'HelloWorld',
    created(){
      vm.$on('tofatherfather', (mes) => {
        console.log(mes,'HelloWorld') // 接收
      });
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      ChilLarge,
      ChilSmall,
      AsyncData,
      List
    },
    methods:{
      open(msg){
        console.log('我是父组件的方法')
        console.log(msg);
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
