<template>
  <div>
      <Row>
        <Col :xs="2" :sm="4" :md="6" :lg="8">
          <div class="wrap">
            <div class="content"></div>
            <div class="name">我是内容的name</div>
            <div class="text">
              采用前后端分离架构完成台管
              理系统开发，提高整体开发效
              率；打通社区全栈与后台管理
              系统,掌握从后台管理到前端展
              现的整体解决方案，完成从前
              端到大前端思维的演变。
            </div>
          </div>
        </Col>
        <Col :xs="20" :sm="16" :md="12" :lg="8">
          <div class="wrap">
            <div class="content"></div>
            <div class="name">我是内容的name</div>
            <div class="text">
              采用前后端分离架构完成台管
              理系统开发，提高整体开发效
              率；打通社区全栈与后台管理
              系统,掌握从后台管理到前端展
              现的整体解决方案，完成从前
              端到大前端思维的演变。
            </div>
          </div>
        </Col>
        <Col :xs="2" :sm="4" :md="6" :lg="8">
          <div class="wrap">
            <div class="content"></div>
            <div class="name">我是内容的name</div>
            <div class="text">
              采用前后端分离架构完成台管
              理系统开发，提高整体开发效
              率；打通社区全栈与后台管理
              系统,掌握从后台管理到前端展
              现的整体解决方案，完成从前
              端到大前端思维的演变。
            </div>
          </div>
        </Col>
      </Row>
  </div>
</template>

<script>
  export default {
    name: "reset"
  }
</script>

<style lang="less">
.wrap{
  .content{
    width: 100%;
    height: 300px;
    background: olivedrab;
  }
  .name{

  }
  .text{

  }
}
</style>
