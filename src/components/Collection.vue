<template>
  <div>
    <div v-if="isLogin">
      <div class="collection">
        <panel
          v-for="(item, index) in searchResultArr"
          :key="index"
          :transferResult="item"
          :isCollected=true
          v-on:delete="deleteCollection"
        ></panel>
      </div>
    </div>
    <div v-else>
      <h2>你还没有登录，请先登录...</h2>
    </div>
  </div>
</template>

<script>
  import Qs from 'qs'
  import Panel from './Panel'
  import { mapGetters } from 'vuex'
  import promise from '../util/promise'

  export default {
    name: "collection",
    components: {
      Panel
    },
    data(){
      return {
        lateline: [],
        searchResultArr: [],
        form: {
          user_id: 11
        },
        collectionData: []
      }
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'person'
      ])
    },
    methods: {
      deleteCollection(data) {
        console.log("collection里触发的事件"+data)
        for (let i = 0; i< this.searchResultArr.length; i++ ){
          if (data == this.searchResultArr[i].plans[0].collection_id){//就是这个item，发送删除的信息
            break;
          }
       }
      }
    },
    async mounted(){
      //初始化收藏路线
      if (!this.person.user_id){
        return
      }
      this.form.user_id = this.person.user_id
      let data = Qs.stringify(this.form)
      //发起请求得到数据,得到收藏路线的信息
      let collectionData = await promise.getCollection(this.$http, data)
      if (collectionData.data.code !== 1){
        console.log(collectionData.data.message)
        return
      }
        console.log(collectionData.data)
      /*  this.lateline = [
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
      ]*/
      this.lateline = collectionData.data.data

      //发起请求，获取最近路线的信息,并处理得到想要的结果
      this.lateline.forEach((item, index) => {
        this.$store.state.AMap.transfer.search([{keyword: item.start_point}, {keyword: item.end_point}], (status, result) => {
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
              if (item.route_information.toString() == busArray.toString()) {
                index = j//这条记录的索引
                break
              }
            }
            if (index != -1){//正确找到结果
              result.plans[index].collection_id = item.collection_id
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

<style scoped>

</style>
