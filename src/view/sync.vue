<template>
	<div>
		<p>我是sync修饰符，可以做双向数据绑定</p>
		<sync-child :value.sync = value :val2.sync = val2 />
		
	</div>
</template>

<script>
	import syncChild from '../components/sync-child/sync-child.vue'
	
	export default {
		data() {
			return {
        value: 123,
        val2:9
			}
		},
		components: {
			syncChild
    },
    watch:{
      value:function(newVal){
        console.log(newVal)
      },
      val2:function(newVal){
        console.log(newVal)
      }
    }
	}
</script>

<style>
</style>
