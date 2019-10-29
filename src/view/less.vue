<template>
<div class="wrap">
我是less组件
</div>
</template>

<script>
  export default {
    name: "less"
  }
</script>

<!--子组件有scoped  外部还是可以作用内部的样式 例如 #app .wrap 就能覆盖 组件含有scoped 的.wrap的样式-->
<!--  外部相同名字的class就不能作用了，比如 都是 .wrap样式，就不能相互覆盖了-->
<style lang="less" scoped>
@import "../less/index.less";
.wrap{
  color: red;
}
</style>
