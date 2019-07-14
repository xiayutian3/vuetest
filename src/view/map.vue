<template>
  <div>
      <!-- @keyup="keyUpSearch" -->
    <input v-model="map" type="text" ref="searchText" id="searchText" @input = 'keyUpSearch'   placeholder="请输入地址" />


    <div class="address_items" id="address_result" v-if="searchData.length > 0">
      <div class="address_item" v-for="item in searchData">
        <div class="title">{{ item.name }}</div>
        <div class="description">{{ item.pname }}{{ item.cityname }}{{ item.address }}</div>
      </div>
    </div>
    <div id="temp" style="display:none"></div>
  </div>
</template>

<script>
  export default {
    props: [],

    data() {
      return {
        msg: 'vue-amap向你问好！',
        searchData:[],
        map:''
      };
    },

    created() {},

    mounted() {},

    methods: {
      keyUpSearch() {
        var _this = this
        var txt = this.$refs.searchText.value;
        AMap.service(["AMap.PlaceSearch"], function () {
          var placeSearch = new AMap.PlaceSearch({
            //构造地点查询类 
            pageSize: 12,
            pageIndex: 1,
            city: "成都",
            //城市 
            cityLimit: 'true',
            panel: 'temp'
            //搜索结果的展示面板对元素id，不知道为什么一定要有该参数，最终获取的结果才更完整，参数更多跟完整，
            //所以我在页面随便写了一个<div id="temp" style="display:none"></div>
          });
          //关键字查询
          placeSearch.search(txt, function (status, result) {
            
            if (status == 'complete' && result.info == 'OK') {
              console.log(result)
              console.log(_this.map)
              //这里可以console.log(result)，查看所有返回的参数，遍历展示这些基本的，我就不赘述
              _this.searchData = result.poiList.pois
            }
          })
        })
      }
    },

    components: {},

    computed: {}
  }

</script>
<style lang='less' scoped>
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }

</style>
 */