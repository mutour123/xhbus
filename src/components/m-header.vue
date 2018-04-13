<template>
  <header>
    <nav class="clearfloat">
      <ul>
        <li class="city noselect"  >
          <i @click.self="showChangeCity"><b>{{localCity}}</b> [切换城市]</i>
          <!--<div ref="cityPanel" class="cityPanel">
            <h5>热门城市</h5>
            <ul  class="clearfloat">
              <li @click="changeCity(item)" v-for="item in hotCity">{{item}}</li>
            </ul>
            <div>
              <h5>按字母排序的列表</h5>
            </div>
            <span class="el-icon-close close" @click.stop="closeCityPanel"></span>
          </div>-->
        </li>
        <router-link
          tag="li"
          v-for="(item, index) in navList"
          :key="index"
          :to="item.to"
        >
          {{item.name}}
        </router-link>
      </ul>
      <span class="weather">今天的天气：{{weather.weather}}  /温度： {{weather.temperature}}℃</span>
    </nav>
    <div class="header">
      <router-link class="toIndex" to="/">
        <div class="logText">西华bus</div>
      </router-link>
      <span class="minText">公交查询系统</span>
    </div>

  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "m-header",
    data(){
      return {
        navList: [
          {
            name: "首页",
            to: "/index"
          },
          {
            name: "天气",
            to: "/weather"
          },
          {
            name: "地图",
            to: "/map"
          },
          {
            name: "公交",
            to: "/transfer"
          },
          {
            name: "周边查询",
            to: "/search_nearBy"
          }
        ]
      }
    },
    computed:{
      ...mapGetters([
        'localCity',
        'weather'
      ])
    },
    methods:{
      showChangeCity(){
        let _this = this
        AMapUI.setDomLibrary(Zepto)//设置DomLibrary
        AMapUI.loadUI(['misc/MobiCityPicker'], function(MobiCityPicker) {
          var cityPicker = new MobiCityPicker({
            //topGroups: ..., // 顶部城市列表
          })
          //监听城市选中事件
          cityPicker.on('citySelected', function(cityInfo) {
            //隐藏城市列表
            let cityName = cityInfo.name
            if (cityName != _this.localCity){
              _this.$store.commit('changeCity', cityName)
            }
            cityPicker.hide()//选中的城市信息
            // console.log(cityInfo);
          })
          //显示城市列表，可以用某个click事件触发
          cityPicker.show()
        })
      },
    }
  }
</script>

<style scoped lang="stylus">
  @import "../common/stylus/variable.styl"
  nav
    border-bottom 1px solid #e6e6e6
    ul
      margin 0
      padding 0
      list-style none
      li
        cursor pointer
        line-height 40px
        font-size 14px
        float left
        padding-left 10px
        i
          text-decoration none
          color #05a2e5
      li+li
        padding-left 30px

  .header
    height 100px
    background-image url("../assets/banner_logo.png")
    background-position bottom
    border-bottom 5px solid $color-theme
    position relative
    .toIndex
      text-decoration none
      .logText
        position relative
        top 20px
        width 200px
        text-align center
        line-height 48px
        font-size 36px
        font-weight bolder
        margin-left  48%
        cursor pointer
        color $color-theme
    .minText
      font-size 18px
      margin-left 48%
      position absolute
      bottom -5px
      display inline-block
      width 200px
      text-align center
      border-bottom 5px solid #fff
      font-weight bolder

  .city
    position relative
    .cityPanel
      display none
      position absolute
      top 100%
      z-index 10
      background-color white
      padding 10px
      /*border 1px solid silver*/
      box-shadow 0px 0px 10px 2px #ddd ;
      width 350px
      h5
        margin 5px
        line-height 30px
        padding 0
      ul
        margin 0
        padding 0
        li
          padding 5px
          line-height 25px
        li:hover
          background-color #eeeeee
  .close
    position absolute
    top 0
    padding 10px
    right 0
  .close:hover
    background-color #eeeeee
  .weather
    float right
    padding 10px
    margin-right 20px
    color #3399ff
    font-weight bolder

  .noselect//禁止选中
    user-select none
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0


</style>

