<template>
  <div class="wrapper">
    <h1>测试sha1加密，vue中使用require引入，看看能不能使用，会不会报错
    </h1>
    <p>****经过测试也是可以用require的语法引入模块使用的****</p>
  </div>
</template>

<script>
const sha1 = require('sha1')

export default {
  name: '',
  props: {},
  data(){
    return {
      msg:123
    }
  },
  created(){},
  mounted(){
    console.log(sha1(this.msg))
  },
  computed:{},
  methods:{},
  components:{},
  watch:{},
}
</script>
<style lang="less" scoped>
</style>