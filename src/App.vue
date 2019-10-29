<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  import ajaxService from '@/api/api1.js'
export default {
  name: 'App',
  // created(){
  //   // 可以判断线上线下环境
  //   // const root = process.env.API_ROOT;
  //   // console.log(root);
  //   ajaxService.getlist().then((res)=>{
  //     console.log('res',res)
  //   }).catch(err=>{
  //     console.log('err',err)
  //   })
  // }


  // 使用 async  await 也是可以的
  async created(){
    try{
      let result = await ajaxService.getlist()
      if(result.status == 200){
        // console.log('result ',result)
      }else{
        console.log('没有查找到数据')
      }

    }catch(err){
      console.log('服务器出错',err)
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
  #app .wrap{
    color: green;
  }
</style>
