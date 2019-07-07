<template>
  <div>
<!-- <a-input v-model="inValue" /> -->
<!-- <a-input :value="inValue" @input = "handleInput"/> -->
<a-input  @input = "handleInput"/>
<p>{{inValue}}</p>
  </div>
</template>

<script>
import AInput from '@/components/AInput/AInput.vue'
export default {
  props: [],

  data () {
    return {
      inValue:''
    };
  },

  created(){},

  mounted(){},

  methods: {
    handleInput(value){
      this.inValue = value
    }
  },

  components: {
    AInput,
  },

  computed: {}
}

</script>
<style lang='less' scoped>

</style>