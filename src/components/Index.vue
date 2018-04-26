<template>
    <div>
      <div style="overflow: hidden;" class="searchDiv">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item >
            <img src="../../static/image/home_default.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item >
            <img src="../../static/image/indexbannerbg.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
        <div class="searchCon">
          <h2>欢迎来到西华BuS</h2>
          <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
          <!--<el-button class="searchBtn">搜索</el-button>-->
        </div>
      </div>

      <div class="content">
        <div >
          <span>酒店预定</span>
          <ul class="clearfloat hotle" >
            <li v-for="(item, index) in hotle" :key="index">
              <img class="img" :src="item.imgSrc" alt="酒店图片">
              <h6 class="hotolTitle"><a :href="item.href">{{item.name}}</a></h6>
            </li>
          </ul>
        </div>
        <div >
          <span>热门景点</span>
          <ul class="clearfloat hotBus" >
            <li v-for="(item, index) in scenicSpot" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div >
          <span>火车资讯热点</span>
          <ul class="clearfloat consultation">
            <li v-for="(item, index) in consultation" :key="index">
              <a :href="item.href">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div >
          <span>热门公交</span>
          <ul class="clearfloat hotBus" @click="changeTransfer" >
            <router-link tag="li" to="/transfer" v-for="(item, index) in hotBus" :key="index">
              {{item}}
            </router-link>
          </ul>
        </div>
        <div >
          <span>全国演唱会</span>
          <ul class="clearfloat vocalConcert">
            <li v-for="item in vocalConcert">
              <a :href="item.href">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        input: "",
        scenicSpot: [],
        hotle: [
          {
            name: '威斯汀酒店',
            imgSrc: '../../static/hotelimg/1980d2d0.jpg',
            href: 'http://www.starwoodhotels.com/westin/index.html'
          },
          {
            name: '格林酒店',
            imgSrc: '../../static/hotelimg/bfc8a617.jpg',
            href: 'http://www.998.com/shtml/99/zh/index.html'
          },
          {
            name: '喜来登酒店',
            imgSrc: '../../static/hotelimg/0e726cf3.jpg',
            href: 'http://www.starwoodhotels.com/sheraton/index.html?language=zh_CN'
          },
          {
            name: '汉庭快捷酒店',
            imgSrc: '../../static/hotelimg/1343371910.jpg',
            href: 'http://www.huazhu.com/hanting'
          },
          {
            name: '七天连锁酒店',
            imgSrc: '../../static/hotelimg/1343130747.jpg',
            href: 'http://www.7daysinn.cn/'
          }
          ,
          {
            name: '速8酒店',
            imgSrc: '../../static/hotelimg/1344418647.jpg',
            href: 'http://www.super8.com.cn/'
          },
          {
            name: '锦江之星',
            imgSrc: '../../static/hotelimg/1344242916.jpg',
            href: 'http://www.jinjianginns.com/'
          }
        ],
        consultation: [
          {
            title: "2018春运",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "12306官网",
            href: "http://www.12306.cn/mormhweb/"
          },
          {
            title: "12306退票手续",
            href: "http://huoche.8684.cn/338"
          },
          {
            title: "火车儿童票标准",
            href: "http://www.tieyou.com/zt_439"
          },
          {
            title: "火车票改签新规定",
            href: "http://huoche.8684.cn/338"
          },
          {
            title: "12306几点开始放票",
            href: "https://www.huoche.net/12306-33959/"
          },
          {
            title: "中国铁路网",
            href: "http://www.12306.cn/mormhweb/"
          },
          {
            title: "火车票提前多少天预订",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "中国高铁路线图",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "火车票提前多少天预订",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "春运火车票预期销售",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "12306如何选择下铺",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "广州到珠海轻轨时刻表",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },{
            title: "高铁座位分布图二等座",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },{
            title: "泸昆高铁什么时候通车",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "高铁票可以通过几天买",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "动车票网上订票官网12306",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "12306登录",
            href: "https://kyfw.12306.cn/otn/login/init"
          },
          {
            title: "2018买火车票攻略",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "电话订票电话",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          },
          {
            title: "火车座位号分布图",
            href: "http://www.gaotie.cn/chunyun/shijian/"
          }
        ],
        hotBus: [
          "北京公交",
          "广州公交",
          "深圳公交",
          "成都公交",
          "天津公交",
          "上海公交",
          "武汉公交",
          "杭州公交",
          "南京公交",
          "苏州公交",
          "长沙公交",
          "福州公交",
          "厦门公交",
          "重庆公交",
          "东莞公交",
          "佛山公交",
          "合肥公交",
          "青岛公交",
          "沈阳公交",
          "郑州公交"
        ],
        vocalConcert: [
          {
            title: "北京演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "天津演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "太原演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "上海演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "南京演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "杭州演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "温州演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "合肥演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "厦门演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "广州演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "深圳演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "武汉演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "长沙演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "郑州演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "珠海演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "重庆演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "成都演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "西安演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          },
          {
            title: "香港演唱会",
            href: "http://show.daiwoqu.com/show_tianjin"
          }
        ],
      }
    },
    methods: {
      changeTransfer(e){
        let pattern = /(..)公交/
        let match = pattern.exec($(e.target).text().trim())
        this.$store.commit('changeLocal', match[1])
      }
    },
    mounted(){
      {
        this.$http.get('/api/admin/link/getall.do')
          .then(res => {
            if (res.data.code == 1) {
              console.log(res.data)
              let result = res.data.data
              this.scenicSpot = result.filter(item => {
                if (item.url == "景点") {
                  return item.name
                }
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
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
      a
        color #666
        text-decoration none
      a:hover
        color #3399ff
        cursor pointer
    li:hover
      color #3399ff
      cursor pointer
  .consultation > li
    width calc(100% / 4.5)
  .vocalConcert > li
    width calc(100% / 4.5)
  .content > div
    margin-top 20px
  .content > div > span
    /*border 1px salmon solid*/
    position relative

    top 10px
    font-size 18px
    color #3399ff
    padding 8px
    background-color white
    margin-left 20px
    font-weight bolder
  .searchDiv
    position relative
  .searchCon
    /*border 1px salmon solid*/
    position absolute
    display flex
    top 50%
    left 50%
    height 50px
    transform translate(-50%, -50%)
    z-index 99
    width 60%
    h2
      width 100%
      text-align center
    .searchBtn
      height 40px
  .clearfloat:after
    display block
    clear both
    content ""
    visibility hidden
    height 0
  .img
    border 1px solid #c1c1c1
  .hotolTitle
    text-align center
    margin-top 0
</style>
