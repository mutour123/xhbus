<template>
   <main>
     <!--<rout-view></rout-view>-->
      <section class="content">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/mine">
          <i class="el-icon-menu"></i>
          <span slot="title">我的</span>
        </el-menu-item>
          <el-menu-item index="/transfer">
            <i class="el-icon-menu"></i>
            <span slot="title">换乘查询</span>
          </el-menu-item>
          <el-menu-item index="/linesearch" >
            <i class="el-icon-document"></i>
            <span slot="title">线路查询</span>
          </el-menu-item>
          <el-menu-item index="/station">
            <i class="el-icon-setting"></i>
            <span slot="title">站点查询</span>
          </el-menu-item>
        </el-menu>
        <div class="detail">
          <!--<keep-alive>-->
          <router-view/>
         <!-- <div class="othercontent">
            <div >
              <span>酒店预定</span>
              <ul class="clearfloat hotle">
                <li v-for="item in hotle">
                  <img :src="item.imgSrc" alt="酒店图片">
                  <h6>{{item.name}}</h6>
                </li>
              </ul>
            </div>
            <div >
              <span>火车资讯热点</span>
              <ul class="clearfloat consultation">
                <li v-for="index in consultation">
                  {{index}}
                </li>
              </ul>
            </div>
            <div >
              <span>热门公交</span>
              <ul class="clearfloat hotBus">
                <li v-for="item in hotBus">{{item}}</li>
              </ul>
            </div>
            <div >
              <span>全国演唱会</span>
              <ul class="clearfloat vocalConcert">
                <li v-for="item in vocalConcert">{{item}}</li>
              </ul>
            </div>
          </div>-->

          <!--</keep-alive>-->
        </div>
        <aside class="side">
          <div>
            <h3>实用工具</h3>
            <ul>
              <li v-for="item in tool">
                <a href="http://www.weather.com.cn/weather/101270101.shtml">
                  <img :src="item.imgSrc" alt="图标"><br>
                  <span>{{item.title}}</span>
                </a>
              </li>

            </ul>
          </div>
        </aside>
      </section>
   </main>
</template>

<script>
    export default {
      name: "IndexPage",
      data() {
        return {
          tool:[
            {
              title: '天气预报',
              imgSrc: '../../static/toolImg/tianqi.png',
              href: 'http://www.weather.com.cn/weather/101270101.shtml'
            },
            {
              title: '手机号查询',
              imgSrc: '../../static/toolImg/phone.png',
              href: 'http://www.ip138.com/sj/'
            },
            {
              title: '区号查询',
              imgSrc: '../../static/toolImg/dianhua.png',
              href: 'http://www.ip138.com/post/'
            },
            {
              title: '身份证号查询',
              imgSrc: '../../static/toolImg/zhengjian.png',
              href: 'http://qq.ip138.com/idsearch/'
            },
            {
              title: '电子万年历',
              imgSrc: '../../static/toolImg/calendar.png',
              href: 'http://www.wannianli.com.cn/'
            },
            {
              title: 'iP查询',
              imgSrc: '../../static/toolImg/IP.png',
              href: 'http://ip.chinaz.com/'
            },
            {
              title: '中国地图',
              imgSrc: '../../static/toolImg/map.png',
              href: 'http://map.baidu.com/?newmap=1&s=s%26wd%3D%E5%85%A8%E5%9B%BD%26c%3D1&from=alamap&tpl=mapcity'
            },
            {
              title: '邮政编码查询',
              imgSrc: '../../static/toolImg/youzheng.png',
              href: 'http://www.yb21.cn/'
            },
          ]
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      mounted(){

      }
    }
</script>

<style scoped lang="stylus">
  main
    /*width 100%*/
    /*margin auto*/
    padding 20px
    min-width 1100px
    /*border 1px solid red*/
  .content
    display flex
  .menu
    width 160px
    list-style none
    margin 0
    padding 0
    .menuItem
      padding 10px
      cursor pointer
      background-color #f1f1f1
  .detail
    flex-grow 2
    /*min-height 440px*/
    min-width 500px
    max-width 1000px
    padding 20px
  .router-link-active
    background-color slateblue!important
    color red
  .side
    /*flex-grow 3*/
    flex-basis 300px
    padding 20px
    box-sizing border-box
    /*border 1px salmon solid*/
    /*border 1px solid slateblue*/
    ul
      margin 0
      list-style none
      padding 0
      li
        /*border 1px slateblue solid*/
        cursor pointer
        width calc(100% / 3)
        float left
        padding 5px
        box-sizing border-box
        span
          font-size 12px



  .othercontent
    ul
      color #666
      padding 0
      list-style none
      margin 0
      border-top 2px solid #05a2e5
      padding-top 30px
      li
        padding 10px
        box-sizing border-box
        float left
  .consultation > li
    width calc(100% / 4.5)
  .vocalConcert > li
    width calc(100% / 4.5)
  .othercontent > div
    margin-top 20px
  .othercontent > div > span
    /*border 1px salmon solid*/
    position relative
    top 10px
    font-size 18px
    color #3399ff
    padding 8px
    background-color white
    margin-left 20px
    font-weight bolder
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0


</style>
