<template>
  <div class="parent" >
<!--    v-if="false"如果写在组件上，是不执行组件里的钩子函数的，例如：<none v-if="false"></none>-->
<!--    如果写在组件的最外层跟标签上，组件里的钩子函数是会执行的，
        在组件里的话（隐藏整个组件），加在根标签，最好用v-show,,v-if也可以
        （会出现一种情况，如果在组讲根元素，用v-if,在mounted调用相应的函数，函数中牵扯到dom的话，
        就会报出，应为v-if写在组件根源最外层，钩子函数韩式会执行的，蔼然没有Dom节点显示出来）
        -->
<!--    v-if="false"如果写在组件上或者组件里的根元素  两者的相同点 是组件标签都没有渲染-->
    <none v-if="false"></none>

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
  import none from '@/view/none.vue'

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
      List,
      none
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
