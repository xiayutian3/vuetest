<template>
  <div class="happ-wrapper">
    <transition :name="routerName">
      <router-view></router-view>
    </transition>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/navFooter'
export default {
  components:{
    NavFooter
  },
  props:{},
  data(){
    return {
      routerName:''
    }
  },
  watch:{
    $route(newValue,oldValue){
      // this.routerName = newValue.name
console.log(newValue)
      this.routerName = 'slide-left'
      if (newValue.name == this.centerRoutername){
        console.log(1111)

        this.routerName = 'slide-right'
      }
    }
  },
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" >
.happ-wrapper{
   /*position: relative;*/
  width: 100%;
  height: 100%;
}
.news-enter-active, .news-leave-active {
  transition: transform 2s,opacity 2s;
  position: absolute;
  top: 0;
  /*left: 0;*/
  /*width:100%;*/
}
.news-enter {
  // opacity: 0;
  transform: translate(100%,0)
}
.news-leave-to {
  // opacity: 0;
  transform: translate(-100%,0)
}




/*进去出来*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .3s;
  position: absolute;
  width:100%;
  left:0;
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-active {
  transform: translateX(100%);
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-active {
  transform: translateX(-100%);
}

</style>
