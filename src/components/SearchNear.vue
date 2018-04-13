<template>
    <div class="container">
      <div id="searchMapContainer">这里是地图</div>
      <div id="searchPanel"></div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "searchNear",
    computed: {
      ...mapGetters([
        'localCity'
      ])
    },
    mounted(){
      var searchMap = new AMap.Map('searchMapContainer',{
        zoom: 10,
      });

//周边搜索
      AMap.service(["AMap.PlaceSearch"], function () {
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 5,
          type: '餐饮服务',
          pageIndex: 1,
          city: '010',
          map: searchMap,
          panel: "searchPanel"
        })
        var cpoint = [116.405467, 39.907761]; //中心点坐标
        placeSearch.searchNearBy('', cpoint, 200, function(status, result) {
          console.log(result)
        });
      })
    }
  }
</script>

<style scoped lang="stylus">
  .container
    position relative
  #searchMapContainer
    height 500px
  #searchPanel
    position absolute
    top 0
    right 0
</style>
