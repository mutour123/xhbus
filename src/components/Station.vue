<template>
 <section>
   <div class="inputContent">
     <el-input class="stationInput" v-model="stationValue" placeholder="站点名称，如“西华大学南大门站”" clearable></el-input>
     <el-button class="searchButton" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
   </div>
   <div class="detail">

     <div  class="loadingCon" ref="loadingCon">
       <img class="loading" src="../../static/image/timg2.gif" alt="加载中">
       <span class="loadingText">加载中......</span>
     </div>

     <div v-if="stationBusAll.length">
       <div class="lineall">
         <div class="imgcon">
           <img src="../../static/image/10.jpg" alt="bus">
         </div>
         <div class="linealldetail">
           <h3>{{stationResult.stationInfo[0].name}}<span>途径路线{{stationBusAll.length}}条</span></h3>
           <ul>
             <li v-for="item in stationBusAll">{{item}}</li>
           </ul>
         </div>
       </div>
       <div class="linedetail">
         <line-base class="linebasecon" v-for="(item, index) in stationLine" :key="index" :via_stops="item.via_stops" :lineName="item.lineName"></line-base>
       </div>
     </div>
   </div>
 </section>
</template>

<script>
  import LineBase from '../base/LineBase'
    export default {
        name: "station",
        components: {
          LineBase
        },
        data(){
          return {
            linesearch: '',//高德用于线路查询的对象
            stationSearch:'',//高德用于站点查询的对象
            stationValue: '西华大学南大门站',
            stationResult: {},//接口返会的所有数据
            stationBusAll: [],//整理接口得到的所有经过该站点的班次
            stationLine: [
              {
                via_stops:[
                  {name:"茶店子公交站"}
                ],
                lineName:''
              }
            ]
          }
        },
        methods:{
            search(){
              $(this.$refs.loadingCon).css("display", "block")

              this.$store.state.AMap.stationSearch.search(this.stationValue, (status, result)=>{
                if(status === 'complete' && result.info === 'OK'){
                  console.log(result)
                  $(this.$refs.loadingCon).css("display", "none")

                  this.stationResult = result
                }else{
                  console.log(result)
                }
              })
            }
        },
        watch: {
          stationResult(){
            let pattern = /(\S+\w+路)?/
            this.stationBusAll = []
            let set = new Set()
            let stationInto = this.stationResult.stationInfo[0].buslines
            stationInto.forEach(item => {
              let match = pattern.exec(item.name)
              set.add(match[0])
            })
            this.stationBusAll = [...set]

             //调用路线查询接口
            this.stationLine = []
            this.stationBusAll.forEach(item => {
              //发起请求
              this.$store.state.AMap.linesearch.search(item, (status, result)=>{
                if(status === 'complete' && result.info === 'OK'){
                  //成功得到结果,并装到stationLine中
                  let obj = {}
                  obj.lineName = result.lineInfo[0].name
                  obj.via_stops = result.lineInfo[0].via_stops
                  if (obj.lineName){
                    this.stationLine.push(obj)
                  }
                }else{
                  console.log(result)
                }
              })
            })
          },
        },
        mounted(){
          let _this = this
        }
    }
</script>

<style scoped lang="stylus">
  .inputContent
    display flex
    padding 20px
    border 1px solid #5ec4f7
    margin-bottom 20px
  .stationInput
    flex-grow 1
    margin-right 10px
  .lineall
    display flex
    margin-bottom 20px
    /*border-bottom 1px salmon solid*/

  .imgcon
    width 242px
    height 150px
  .linealldetail
    padding-left 20px
    flex-grow 1
    h3
      margin-top 0
    ul
      list-style none
      margin 0
      margin-top -10px
      padding 0
      li
        float left
        padding 5px
        margin 5px
        border 1px silver dashed
      li:hover
        cursor pointer
        border 1px salmon solid
  .linebasecon
    border-bottom 1px salmon solid

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
