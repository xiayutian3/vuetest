<template>
  <div class="detail-wrap">
    我是 detail页面
    <button @click="handleClick">开启动画</button>
    <div class="box" :class="{rotateAni:rotateClass}"></div>
  </div>
</template>

<script>
export default {
  props: [],

  data () {
    return {
        rotateClass:false
    };
  },

  created(){},

  mounted(){},

  methods: {
    handleClick(){
      this.rotateClass = !this.rotateClass
    }
  },

  components: {},

  computed: {}
}

</script>
<style lang='less' >
.detail-wrap{
  width: 100%;
  height: 100%;
  background: lightslategrey;
}
  .box{
    width: 200px;
    height: 200px;
    background: lightpink;
    transition: all 3s;
  }
  .rotateAni{
    transform: rotate(360deg);
  }
</style>
