<template>
  <div>
    <!--//vuex 与 双向数据绑定-->
    <!--<input type="text"  v-model="currentVal">-->

    <!--//第1种-->
    <!--<input type="text" :value="currentVal" @input="handleInput" >-->
    <!--// 第2种-->
    <input type="text"  v-model="currentVal">

    <!--第三种   ********子组件的props更新到父组件的问题*****
    当一个组件需有两个或两个以上的v-model时   （一个v-model也可以使用）
    第三种：跟vuex没有关系（第一第二跟vuex有关）
    -->
    <!--  .sync修饰符  -->
    <!--<input type="text"  :value.sync="currentVal" />-->

    <div>{{currentVal}}</div>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
  export default {
    name: "vuex",
    computed:{
      //第1种
      // ...mapState('user',['currentVal'])

      // 第2种：也可以使用v-model 不过得自己写set，get
      currentVal:{
        get(){
          return this.$store.state.user.currentVal
        },
        set(value){
          //还是要调用action 来更新
          this.changeVal(value)
        }
      }
    },
    methods:{
      ...mapActions('user',['changeVal']),
      ...mapMutations('user',['CHANGEVAL']),
      handleInput(event){
        let value = event.target.value
        this.changeVal(value)
      }


      //.sync修饰符 第三种
      // handleInput3(event){
      //   let value = event.target.value
      //   this.$emit('update:value',value)
      // }
    }
  }
</script>

<style scoped>

</style>
