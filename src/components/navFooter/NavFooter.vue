<template>
  <div class="foot-wrap">
    <div class="navs">
      <!-- <div class="nav" v-for="(item,index) in navs" :key="index" @click="routerGo(item.link)">{{item.title}}</div> -->
      <div class="nav" v-for="(item,index) in navs" :key="index" @click="$router.push(item.link)">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],

  data () {
    return {
      navs:[
        {title:'首页',link:'/happ-wrap/happ'},
        {title:'资讯',link:'/happ-wrap/news'},
        {title:'列表详情',link:'/happ-wrap/detail'},
        {title:'我的',link:'/happ-wrap/my'},
      ]
    };
  },

  created(){},

  mounted(){},

  methods: {
    // routerGo(path){
    //   console.log('router',path)
    //   this.$router.push(path)
    // }
  },

  components: {},

  computed: {}
}

</script>
<style lang='less'>
.foot-wrap{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0; 
  height: 40px;
  line-height: 40px;
  .navs{
    display: flex;
    .nav{
      flex: 1;
      cursor: pointer;
    }
  }
  
}
</style>