<template>
  <div>
    <input type="text" @input="handleInput" :value = "value">
  </div>
</template>

<script>
export default {
  props:{
    value:{
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
      this.$emit('input',value)
    }
  },

  components: {},

  computed: {}
}

</script>
<style lang='less' scoped>

</style>