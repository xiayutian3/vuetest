<template>
  <div class="async">
      <div>asyncdata 页面</div>
    <ul>
      <li v-for="(item , i ) in list" :key="i">{{item.album_title}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "AsyncData",
    data(){
      return{
        list:[]
      }
    },
    created(){
      this.getData()
    },
    methods:{
      // async getData(){
      //   let {data} = await axios.get(`/api?method=baidu.ting.billboard.billList&type=1&size=10&offset=0`)
      //   this.list = data.song_list
      //   console.log(this.list);
      // }

      //另一种写法 （不用await）
      async getData(){
        // axios.get()返回的式promise对象
        let data = axios.get(`/api?method=baidu.ting.billboard.billList&type=1&size=10&offset=0`)
        data.then((res)=>{
          this.list = res.data.song_list
          console.log("this.list",this.list);
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
.async{
  color: greenyellow;
  background: #000;
}
</style>
