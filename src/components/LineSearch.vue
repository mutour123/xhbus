<template>
  <section>
    <div class="inputContent">
      <el-input class="linferInput" v-model="lineValue" placeholder="线路名称，如“723”" clearable></el-input>
      <el-button class="searchButton" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div v-if="via_stops.length">
      <line-base  :via_stops="via_stops" :lineName="lineName"></line-base>
    </div>
  </section>
</template>

<script>
  import Route from '../base/Route'
  import LineBase from '../base/LineBase'

  export default {
    name: "LineSearch",
    components: {
      Route,
      LineBase,
    },
    data(){
      return {
        linesearch: '',
        lineValue: '723',
        via_stops: [],
        lineName: ''
      }
    },
    methods: {
      search(){
        this.linesearch.search(this.lineValue, (status, result)=>{
          if(status === 'complete' && result.info === 'OK'){
            this.lineName = result.lineInfo[0].name
            this.via_stops = result.lineInfo[0].via_stops
          }else{
            console.log(result)
          }
        })
      }
    },
    mounted(){
      let _this = this
      AMap.service(["AMap.LineSearch"], function() {
        _this.linesearch = new AMap.LineSearch({
          pageIndex:1,
          city: '成都',
          pageSize: 1,
          extensions: 'all',
          panel: 'panel'
        })
      })
    }
  }
</script>

<style scoped lang="stylus">
  .inputContent
    display flex
    padding 20px
    border 1px solid #5ec4f7
  .linferInput
    flex-grow 1
    margin-right 10px
  .via_stops
    margin-top 20px
    min-height 200px
    padding 10px
    padding-top 0

</style>
