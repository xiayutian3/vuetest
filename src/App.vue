<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import ajaxService from '@/api/api1.js'
export default {
  name: 'App',
  created(){
    // 可以判断线上线下环境
    // const root = process.env.API_ROOT;
    // console.log(root);
    ajaxService.getlist().then((res)=>{
      console.log('res',res)
    }).catch(err=>{
      console.log('err',err)
    })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
