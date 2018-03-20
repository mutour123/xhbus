<template>
  <div>
    <div ref="item" class="route-item">
      <h3>
        <span v-for="(item, index) in busArray" :key="index"  class="line busline">
          <span class="beforespanbus"></span>
          {{item}}
          <span v-if="index!==busArray.length-1" class="afterspan">></span>
        </span>
       <!-- <span class="line subwayline subwayline2">
          <span class="beforespansubway"></span>
          地铁2号线
          <span class="afterspan"> ></span>
        </span>
        <span class="line subwayline subwayline1">
          <span class="beforespansubway"></span>
          地铁1号线
          <span class="afterspan"> </span>
        </span>-->
      </h3>
      <p>{{getTime(itemData.time)}}（{{(itemData.distance/1000).toFixed(2)}}公里）|步行{{itemData.walking_distance}}米|<span class="red">{{itemData.cost}}元</span> </p>
      <div class="sidebar">
        <div class="el-icon-arrow-down" href="javascript:void(0)">
          <span class="aftera"></span>
        </div>
      </div>
      <div  @click="showPlan"  class="mark"></div>
    </div>
    <dl class="plan">
      <!--//开始-->
      <dt class="busstop start clearfloat" index="start">
        <div class="beforedtstart"></div>
        <span>{{transferForm}}</span>
        <div class="afterdtstart"></div>
      </dt>
      <!--循环遍历
        首先判断是WALK,还是BUS或者subway
        如果是WALK:
          添加walk样式
        如果是BUS：
          添加bus样式
          在其后添加一个dd标签
        如果是SUBWAY:
          添加subway样式
          在其后添加一个dd标签

      -->

      <!--<dt v-for="item in itemData.segments" class="bus-route walk clearfloat" index="0">
        <div class="beforedtwalk"></div>
        <span>{{item.instruction}}</span>
        <div class="afterdt"></div>
      </dt>-->
      <div v-for="(item, index) in itemData.segments" :key="index">
        <dt class="bus-route clearfloat" :class="{bus:item.transit_mode==='BUS',walk:item.transit_mode==='WALK', subway:item.transit_mode==='SUBWAY'}" index="1">
          <div :class="{beforedtbus:item.transit_mode==='BUS',beforedtwalk:item.transit_mode==='WALK', beforedtsubway:item.transit_mode==='SUBWAY'}" ></div>
          <span>{{item.instruction}}</span>
          <div class="afterdt " :class="{afterdtbus:item.transit_mode==='BUS',afterdt:item.transit_mode==='WALK', afterdt:item.transit_mode==='SUBWAY'}"></div>
        </dt>
        <dd v-if="item.transit_mode !== 'WALK'">
          <div>
          <h4 >
            <a @click="showUl" href="javascript:void(0)" class="busstop">
              {{item.transit.on_station.name}}
            </a>
            <span>上车</span>
          </h4>
          <ul>
            <li v-for="listitem in item.transit.via_stops">{{listitem.name}}</li>

          </ul>
          <h4>
            <a href="javascript:void(0)" class="busstop">
              {{item.transit.off_station.name}}
            </a>
            <span>下车</span>
          </h4>
          </div>
          <div  style="border: 2px seagreen solid;width: 0;padding: 0;height: 15px;z-index:12;margin-top: -10px;position: absolute;" class=""></div>
        </dd>
      </div>

    <!--  <dt class="bus-route walk clearfloat" index="0">
        <div class="beforedtwalk"></div>
        <span>步行316米到达百草路</span>
        <div class="afterdt"></div>
      </dt>
      <dt class="bus-route bus clearfloat" index="1">
        <div class="beforedtbus"></div>
        <span>地铁2号线（犀浦&#45;&#45;龙泉驿）</span>
        <div class="afterdt afterdtbus"></div>
      </dt>
      <dd>
        <div>
          <h4>
            <a @click="showUl"  href="javascript:void(0)" class="busstop">
              百草路
            </a>
            <span>上车</span>
          </h4>
          <ul>
            <li>金州路</li>
            <li>金科北路</li>
            <li>迎宾大道</li>
            <li>茶店子客运站</li>
            <li>人民公园</li>
            <li>天府广场</li>
          </ul>
          <h4>
            <a href="javascript:void(0)" class="busstop">
              天府广场
            </a>
            <span>下车</span>
          </h4>
          &lt;!&ndash;<a href="javascript:void(0)" class="el-icon-arrow-down">&ndash;&gt;
          &lt;!&ndash;<div class="el-icon-arrow-down" href="javascript:void(0)">&ndash;&gt;
          &lt;!&ndash;<span class="aftera"></span>&ndash;&gt;
          &lt;!&ndash;</div>&ndash;&gt;
        </div>
        &lt;!&ndash;</a>&ndash;&gt;
        <div  style="border: 2px seagreen solid;width: 0;padding: 0;height: 15px;z-index:12;margin-top: -10px;position: absolute;" class=""></div>
      </dd>
      <dt class="bus-route walk clearfloat" index="0">
        <div class="beforedtwalk"></div>
        <span>步行96米到达天府广场</span>
        <div class="afterdt"></div>
      </dt>
      <dt class="bus-route subway subwayline1" index="1">
        <div class="beforedtsubway"></div>
        <span>地铁1号线(犀浦&#45;&#45;龙泉驿)</span>
        <div class="afterdt"></div>
      </dt>
      <dd>
        <div>
          <h4>
            <a @click="showUl"  href="javascript:void(0)" class="busstop">
              天府广场
            </a>
            <span>上车</span>
          </h4>
          <ul>
            <li>锦江宾馆</li>
            <li>华西坝</li>
            <li>红合路口站</li>
            <li>万安工业园站</li>
            <li>天府三街</li>
          </ul>
          <h4>
            <a href="javascript:void(0)" class="busstop">
              天府三街
            </a>
            <span>下车</span>
          </h4>

          &lt;!&ndash;<a href="javascript:void(0)" class="el-icon-arrow-down">&ndash;&gt;
          &lt;!&ndash;<div class="el-icon-arrow-down" href="javascript:void(0)">&ndash;&gt;
          &lt;!&ndash;<span class="aftera"></span>&ndash;&gt;
          &lt;!&ndash;</div>&ndash;&gt;
        </div>
        &lt;!&ndash;</a>&ndash;&gt;
        <div  style="border: 2px seagreen solid;width: 0;padding: 0;height: 15px;z-index:12;margin-top: -10px;position: absolute;" class=""></div>

      </dd>-->
      <!--最后一个-->
      <dt class="busstop end" index="1">
        <div class="beforedtend"></div>
        {{transferTo}}
      </dt>
    </dl>
  </div>
</template>

<script>

  export default {
    name: "route",
    props: [
      "itemData",
      "transferForm",
      "transferTo"
    ],
    data(){
      return {
        busArray:[]
      }
    },
    methods: {
      showPlan(e){
        let target = e.target
        $(target).parent().next().toggle()
      },
      showUl(e){
        let target = e.target
        $(target).parent().next().toggle()
      },
      getBusArray(){
        this.itemData.segments.forEach(item => {
          if (item.transit_mode === 'WALK')
            return
          let pattern = /(\w+路)|地铁\w号线/
          let bus = item.instruction
          let match = pattern.exec(bus)
          this.busArray.push(match[0])
        })
      },
      getTime(num){
        let m = (num/60)|0//分钟
        let h = (m/60)|0//得到整数小时
        m = m-h*60
        return `${h}小时${m}分钟`

      }
    },
    created(){
    },
    mounted(){
      this.getBusArray()
    }
  }
</script>

<style scoped lang="stylus">
  h3
    font-weight normal
    /*border 1px solid blue*/
    display block
    font-size 14px
    -webkit-margin-before 1em
    -webkit-margin-after 1em
    -webkit-margin-start 0px
    -webkit-margin-end 0px
  p
    display block
    font-size 12px
    color #444
    -webkit-margin-before 1em
    -webkit-margin-after 1em
    -webkit-margin-start 0px
    -webkit-margin-end 0px
    .red
      color red
      padding-left 3px
  .route-item
    border 1px seagreen solid
    padding 6px 5px
    margin-bottom 2px
    border-top 1px solid #e6e6e6
    border-bottom 1px solid #e6e6e6
    background-color #fafafa
    font-size 14px
    cursor pointer
    position relative
    .mark
      position absolute
      top 0
      bottom 0
      left 0
      right 0
  .route-item:hover .sidebar
      display block
  .beforespanbus,.beforespansubway
    background-image url("../../static/diricon_81.gif")
    background-position 50% 50%
    vertical-align bottom
    display inline-block
    width 16px
    height 16px
  .sidebar
    display none
    color silver
    position absolute
    height 30px
    top 50%
    right 0
    margin-top -15px
    width 30px
  .plan
    display none
    margin 3px 0
    border-top 1px silver solid
    font-size 12px
  dl
    display block
    -webkit-margin-before 1em
    -webkit-margin-after 1em
    -webkit-margin-end 0px
    -webkit-margin-start 0px
    dt
      line-height 30px
      position relative
      padding 0
      span
        display block
        border-bottom 1px silver solid
        margin-left 35px
    dd
      display block
      padding-left 13px
      -webkit-margin-start 0px
      div
        border-left 4px seagreen solid
        padding-left 17px
        h4
          margin-bottom 7px
          margin-top 10px
          color #666
          span
            font-size 12px
            font-weight normal
        ul
          display none
          margin 0
          line-height 30px
          padding-left  20px
          color #333
          list-style none
  .start,.end
    font-size 14px
  .walk
    font-size 12px
  .bus
    font-size 13px
  .beforedtstart,.beforedtwalk,.beforedtbus,.beforedtsubway,.beforedtend
    display inline-block
    z-index 9
    background-image url("../../static/diricon_78.gif")
    background-position center
    float left
    vertical-align middle
    width 30px
    height 30px
  .beforedtwalk
    background-image url("../../static/diricon_59.gif")
  .beforedtbus
    float left
    width 30px
    /*border 1px #fff solid*/
    height 29px
    background-image url("../../static/diricon_81.gif")
  .beforedtsubway
    background-image url("../../static/diricon_83.gif")
    width 30px
    height 30px
    margin-left 2px

  .beforedtend
    background-image url("../../static/diricon_80.gif")
  .afterdt,.afterdtstart
    position absolute
    top 24px
    left 13px
    height 20px
    width 0
    background-color #ddd
    border 2px #ddd solid
  .afterdt
    top 19px
  .afterdtbus
    top 23px
    border 2px seagreen solid
  .busstop
    text-decoration none
    color #666

  /*清除浮动代码*/
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0



</style>
