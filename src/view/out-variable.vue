<template>
  <div class="variable">
    在data外定义变量（一般变量与引用对象的区别）
    <input type="text" v-model="inptVal.aa" @blur="blurFun" @focus="focusFun">
  </div>
</template>

<script>
  // @ is an alias to /src


  //当变量a是对象 时候，引用传递 值会被改变，是一般变量的时候，就不会改变
  // let a = 'asd'
  let a =  {aa:""}
  export default {
    name: 'variable',
    data () {
      return {
        inptVal: {aa:""}
      }
    },
    methods: {
      focusFun () {
        console.log('获取焦点', this.inptVal.aa)
        console.log('获取焦点', a)
        this.inptVal = a
        console.log('222获取焦点', this.inptVal.aa)
        console.log('222获取焦点', a)
      },
      blurFun () {
        console.log('失去焦点', this.inptVal.aa)
        console.log('失去焦点', a)
        this.inptVal = a
      }
    }
  }
</script>
