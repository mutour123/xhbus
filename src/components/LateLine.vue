<template>
  <div>
    <div v-if="isLogin">
      <div class="line">
        <panel v-for="(item, index) in searchResultArr" :key="index" :transferResult="item"></panel>
      </div>
    </div>
    <div v-else>
      <h2>你还没有登录，请先登录...</h2>
    </div>
  </div>

</template>

<script>
  import Panel from './Panel'
  import { mapGetters } from 'vuex'
  export default {
    name: "late-l-ine",
    components: {
      Panel
    },
    data(){
      return {
        lateline: [],
        searchResultArr: []
      }
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    mounted(){


      //得到最近路线的信息
      this.lateline = [
        {
          originName: "西华大学西大门",
          destinationName: "天府三街",
          busAll: [
            "723路",
            "地铁2号线",
            "地铁1号线"
          ]
        },
        {
          originName: "西华大学西大门",
          destinationName: "犀浦快铁站",
          busAll: [
            "726路",
            "708路"
          ]
        }
      ]

      //发起请求，获取最近路线的信息,并处理得到想要的结果
      this.lateline.forEach((item, index) => {
        this.$store.state.AMap.transfer.search([{keyword: item.originName}, {keyword: item.destinationName}], (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            let index = -1;
            for (let j = 0; j < result.plans.length; j++) {
              let busArray = []
              for (let i = 0; i < result.plans[j].segments.length; i++) {
                if (result.plans[j].segments[i].transit_mode === 'WALK')
                  continue
                let pattern = /(\w+路)|地铁\w号线/
                let bus = result.plans[j].segments[i].instruction
                let match = pattern.exec(bus)
                busArray.push(match[0])
              }
              if (item.busAll.toString() == busArray.toString()) {
                index = j//这条记录的索引
                break
              }
            }
            if (index != -1){//正确找到结果
              result.plans = [result.plans[index]]//将正确的result.plans找到
              this.searchResultArr.push(result)
            }
          }else {//请求失败
            console.log(result)
          }
        })
      })
    }
  }
</script>

<style scoped lang="stylus">
  .line
    border 1px skyblue solid
</style>
