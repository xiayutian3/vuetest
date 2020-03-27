<template>
  <div>
	  
	  <!-- 对父元素传入的proprs进行双向数据绑定 ，修改-->
    <p>父组件传入的第一个props，在子组件中双向数据绑定 ，修改</p>
    <input type="text" @input="handleInput" :value = "value">
	
    <p>父组件传入的第二个props，在子组件中双向数据绑定 ，修改</p>
    <input type="text" @input="handleInput2" :value = "val2">
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:[String,Number],
      default:''
    },
    val2:{
      type:[String,Number],
      default:''
    }
  },

  data () {
    return {

    };
  },

  created(){},

  mounted(){},

  methods: {
    handleInput(event){
      let value = event.target.value
      this.$emit('update:value',value)
    },
    handleInput2(event){
      let value = event.target.value
      this.$emit('update:val2',value)
    }
  },

  components: {},

  computed: {}
}

</script>
<style lang='less' scoped>

</style>