<template>
  <div class="variable">
    vue的变量在data外定义问题
    <button @click="changVariable">改变</button>
  </div>
</template>

<script>
  // let aa = 'AAA'
  let aa = {
    a:1,
    b:2
  }
  export default {
    name: "variable",
    data(){
      //在data里边定义的变量就要在data里边用，不能在外边使用（不然就放在data外边， 指export default 的外边）
      let bb = 'BB'
        return {
          // innerA: bb
          // 也可以这样，直接使用外部定义的aa
          // innerA: aa

          innerA:{}
        }
    },
    methods:{
      changVariable(){
        console.log('innerA',this.innerA)
        console.log('aa',aa);
        this.innerA = aa
        console.log('22innerA',this.innerA)
        console.log('22aa',aa);
      }
    }
  }
</script>

<style lang="less" scoped>
.variable{

}
</style>
