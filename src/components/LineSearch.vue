<template>
  <section >
      <div class="inputContent">
        <el-input class="linferInput" v-model="lineValue" placeholder="线路名称，如“723”" clearable></el-input>
        <el-button class="searchButton" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="detail">
        <div  class="loadingCon" ref="loadingCon">
          <img class="loading" src="../../static/image/timg2.gif" alt="加载中">
          <span class="loadingText">加载中......</span>
        </div>

        <div v-if="via_stops.length">
          <line-base  :via_stops="via_stops" :lineName="lineName"></line-base>
        </div>
      </div>
  </section>
</template>

<script>
  import LineBase from '../base/LineBase'
  import { mapGetters } from 'vuex'
  export default {
    name: "LineSearch",
    components: {
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
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    methods: {
      search(){
        $(this.$refs.loadingCon).css("display", "block")

        this.$store.state.AMap.linesearch.search(this.lineValue, (status, result)=>{
          if(status === 'complete' && result.info === 'OK'){
            $(this.$refs.loadingCon).css("display", "none")

            this.lineName = result.lineInfo[0].name
            this.via_stops = result.lineInfo[0].via_stops
          }else{
            this.$message({
              showClose: true,
              message: '查询失败',
              type: 'error'
            })
            console.log(result)
          }
        })
      }
    },

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
  .detail
    min-height 300px
    position relative
  .loadingCon
    z-index 100
    background-color rgba(255, 255, 255, .5)
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    text-align center
    display none
    .loadingText
      display block
      position absolute
      top 50%
      color #c1c1c1
      left 50%
      padding-left 23px
      margin-left -50px
      text-align center
    .loading
      width 100px
      display block
      margin auto
      position relative
      top 50%
      margin-top -100px

</style>
